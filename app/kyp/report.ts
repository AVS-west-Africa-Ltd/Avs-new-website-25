// Structured report model shared by the on-screen thesis view and the PDF export.
// Tables, charts and cards are built from the project's own data; the AI thesis
// text only supplies narrative sections (overview, risks).

export type Stat = { label: string; value: string; sub?: string };
export type Card = { title: string; body: string; tag?: string };
export type BarItem = { label: string; value: number; highlight?: boolean };
export type SegmentItem = { label: string; value: number };

export type Block =
  | { t: "heading"; text: string }
  | { t: "paragraph"; text: string }
  | { t: "bullets"; items: string[]; ordered?: boolean }
  | {
      t: "table";
      columns: string[];
      rows: string[][];
      firstColumnBold?: boolean;
      equal?: boolean;
    }
  | { t: "cards"; items: Card[]; columns?: number }
  | {
      t: "bars";
      title: string;
      items: BarItem[];
      unit?: string;
      max?: number;
      legend?: [string, string];
    }
  | { t: "segments"; title: string; items: SegmentItem[] }
  | { t: "callout"; title?: string; text: string }
  | { t: "code"; label?: string; text: string };

export type Section = { title: string; blocks: Block[] };
export type Report = {
  title: string;
  eyebrow: string;
  stats: Stat[];
  sections: Section[];
};

const clean = (value: unknown = "") =>
  String(value ?? "")
    .replace(/\*\*/g, "")
    .replace(/__/g, "")
    .replace(/`/g, "")
    .trim();
const list = (value: unknown): string[] =>
  Array.isArray(value)
    ? value.map((item) => clean(item)).filter(Boolean)
    : clean(value)
        .split(/;|\n/)
        .map((item) => item.trim())
        .filter(Boolean);
const bulletCell = (items: unknown) => {
  const values = list(items);
  return values.length > 1
    ? values.map((item) => `• ${item}`).join("\n")
    : values[0] || "—";
};
const text = (value: unknown) => clean(value) || "—";

/** Parses the subset of Markdown the thesis prompt produces into report blocks. */
export function parseMarkdownBlocks(markdown: string): Block[] {
  const blocks: Block[] = [];
  const lines = markdown.replace(/\r/g, "").split("\n");
  let paragraph: string[] = [];
  let bullets: string[] = [];
  let ordered = false;
  let table: string[][] = [];
  const flush = () => {
    if (paragraph.length)
      blocks.push({ t: "paragraph", text: clean(paragraph.join(" ")) });
    if (bullets.length) blocks.push({ t: "bullets", items: bullets, ordered });
    if (table.length > 1)
      blocks.push({
        t: "table",
        columns: table[0],
        rows: table.slice(1),
        firstColumnBold: true,
      });
    paragraph = [];
    bullets = [];
    table = [];
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flush();
      continue;
    }
    if (/^\|.*\|$/.test(line)) {
      if (paragraph.length || bullets.length) flush();
      if (/^\|[\s:|-]+\|$/.test(line)) continue;
      table.push(
        line
          .slice(1, -1)
          .split("|")
          .map((cell) => clean(cell)),
      );
      continue;
    }
    if (table.length) flush();
    const heading = line.match(/^#{3,6}\s+(.*)$/);
    if (heading) {
      flush();
      blocks.push({ t: "heading", text: clean(heading[1]) });
      continue;
    }
    const bullet = line.match(/^(?:[-*•]|\d+[.)])\s+(.*)$/);
    if (bullet) {
      if (paragraph.length) flush();
      const isOrdered = /^\d/.test(line);
      if (bullets.length && isOrdered !== ordered) flush();
      ordered = isOrdered;
      bullets.push(clean(bullet[1]));
      continue;
    }
    if (bullets.length) flush();
    paragraph.push(line);
  }
  flush();
  return blocks;
}

function splitMarkdownSections(markdown: string) {
  const parts = markdown.split(/^##\s+/m);
  const intro = parts.shift() || "";
  return {
    intro: intro.replace(/^#\s+.*$/m, "").trim(),
    sections: parts.map((part) => {
      const [heading, ...rest] = part.split("\n");
      return { title: clean(heading), body: rest.join("\n").trim() };
    }),
  };
}

const metricParts = (metric: any) =>
  metric && typeof metric === "object"
    ? {
        name: text(metric.name),
        target: text(metric.target),
        baseline: text(metric.baseline),
        cadence: text(metric.cadence),
        definition: text(metric.definition),
      }
    : {
        name: text(metric),
        target: "—",
        baseline: "—",
        cadence: "—",
        definition: "—",
      };

function briefBlocks(brief: any, search?: any): Block[] {
  const blocks: Block[] = [];
  if (brief.whyNow)
    blocks.push({ t: "callout", title: "Why now", text: clean(brief.whyNow) });
  const must = list(brief.mustHaves);
  const nice = list(brief.niceToHaves);
  if (must.length || nice.length) {
    const height = Math.max(must.length, nice.length);
    blocks.push({
      t: "table",
      equal: true,
      columns: ["Must have", "Nice to have"],
      rows: Array.from({ length: height }, (_, i) => [
        must[i] || "",
        nice[i] || "",
      ]),
    });
  }
  const green = list(brief.greenFlags);
  const red = list(brief.redFlags);
  if (green.length || red.length) {
    const height = Math.max(green.length, red.length);
    blocks.push({
      t: "table",
      equal: true,
      columns: ["Green flags", "Red flags"],
      rows: Array.from({ length: height }, (_, i) => [
        green[i] || "",
        red[i] || "",
      ]),
    });
  }
  const archetypes = list(brief.archetypes);
  if (archetypes.length)
    blocks.push({
      t: "table",
      columns: ["Candidate archetypes"],
      rows: archetypes.map((a) => [a]),
    });
  const where = list(brief.whereToLook);
  if (where.length)
    blocks.push(
      { t: "heading", text: "Where to look" },
      { t: "bullets", items: where },
    );
  const questions = list(brief.screeningQuestions);
  if (questions.length)
    blocks.push({
      t: "table",
      columns: ["#", "Screening question"],
      rows: questions.map((q, i) => [String(i + 1), q]),
    });
  if (search) {
    blocks.push({
      t: "table",
      columns: ["Titles", "Industries", "Seniority", "Locations"],
      rows: [
        [
          bulletCell(search.titles),
          bulletCell(search.industries),
          bulletCell(search.seniority),
          bulletCell(search.locations),
        ],
      ],
    });
    if (search.boolean)
      blocks.push({
        t: "code",
        label: "LinkedIn Boolean search",
        text: clean(search.boolean),
      });
  }
  if (brief.complement)
    blocks.push({
      t: "callout",
      title: "Complement",
      text: clean(brief.complement),
    });
  return blocks;
}

export function buildBriefReport(brief: any, search?: any): Report {
  const must = list(brief.mustHaves).length;
  const questions = list(brief.screeningQuestions).length;
  return {
    title: `${brief.role} sourcing brief`,
    eyebrow: "Talent sourcing brief",
    stats: [
      { label: "Must-haves", value: String(must) },
      { label: "Nice-to-haves", value: String(list(brief.niceToHaves).length) },
      { label: "Screening questions", value: String(questions) },
      {
        label: "Places to look",
        value: String(list(brief.whereToLook).length),
      },
    ],
    sections: [{ title: "Brief", blocks: briefBlocks(brief, search) }],
  };
}

export function buildThesisReport(project: any, thesisMarkdown = ""): Report {
  const core = project.productCore || {};
  const founders: any[] = project.founders || [];
  const personas: any[] = project.personas || [];
  const goals: any[] = project.goals || [];
  const scorecards: any[] = project.scorecards || [];
  const briefs: any[] = project.briefs || [];
  const searches: any[] = project.searches || [];
  const candidates: any[] = project.candidates || [];
  const sections: Section[] = [];

  const coreDefined = ["problem", "approach", "purpose"].filter(
    (key) => core[key]?.value,
  ).length;
  const shortGoals = goals.filter((g) => /short/i.test(g.horizon || "")).length;
  const stats: Stat[] = [
    { label: "Core fields defined", value: `${coreDefined}/3` },
    { label: "Founder roles", value: String(founders.length) },
    { label: "Personas", value: String(personas.length) },
    {
      label: "Goals",
      value: String(goals.length),
      sub: goals.length
        ? `${shortGoals} short · ${goals.length - shortGoals} long term`
        : undefined,
    },
    { label: "Candidates", value: String(candidates.length) },
  ];

  const ai = thesisMarkdown ? splitMarkdownSections(thesisMarkdown) : null;
  const aiOverview = ai?.sections.find((s) =>
    /overview|summary/i.test(s.title),
  );
  const aiRisks = ai?.sections.find((s) => /risk|open question/i.test(s.title));
  const covered =
    /product core|founding|team|persona|icp|goal|metric|scorecard|sourcing|brief|overview|summary|risk|open question/i;

  const overview = aiOverview
    ? parseMarkdownBlocks(aiOverview.body)
    : ai?.intro
      ? parseMarkdownBlocks(ai.intro)
      : [];
  if (overview.length) sections.push({ title: "Overview", blocks: overview });

  if (coreDefined) {
    sections.push({
      title: "Product core",
      blocks: [
        {
          t: "cards",
          columns: 3,
          items: (["problem", "approach", "purpose"] as const).map((key) => ({
            title: key[0].toUpperCase() + key.slice(1),
            body: clean(core[key]?.value) || "To be defined",
            tag: core[key]?.origin ? String(core[key].origin) : undefined,
          })),
        },
      ],
    });
  }

  if (founders.length) {
    const attrs: [string, (f: any) => string][] = [
      ["Why this role", (f) => text(f.rationale)],
      ["Must have", (f) => text(f.mustHave)],
      ["Responsibilities", (f) => bulletCell(f.responsibilities)],
      ["Must-have skills", (f) => bulletCell(f.mustHaveSkills)],
      ["Nice-to-have skills", (f) => bulletCell(f.niceToHaveSkills)],
      ["Industry experience", (f) => bulletCell(f.industryExperience)],
      ["Working style", (f) => text(f.workingStyle)],
      ["Red flags", (f) => bulletCell(f.redFlags)],
    ];
    const rows = attrs
      .filter(([, get]) => founders.some((f) => get(f) !== "—"))
      .map(([label, get]) => [label, ...founders.map(get)]);
    sections.push({
      title: "Founding team",
      blocks: [
        {
          t: "table",
          columns: ["", ...founders.map((f) => text(f.role))],
          rows,
          firstColumnBold: true,
        },
      ],
    });
  }

  if (personas.length) {
    const blocks: Block[] = [
      {
        t: "table",
        columns: ["Persona", "Type", "Influence", "Core pain", "Product fit"],
        rows: personas.map((p) => [
          text(p.name),
          text(p.type),
          text(p.influence),
          text(p.pain),
          text(p.productFit),
        ]),
        firstColumnBold: true,
      },
    ];
    const attrs: [string, string][] = [
      ["Goals", "goals"],
      ["Pains", "pains"],
      ["Motivations", "motivations"],
      ["Buying triggers", "buyerTriggers"],
      ["Objections", "objections"],
      ["Success criteria", "successCriteria"],
    ];
    const detailRows = attrs
      .filter(([, key]) => personas.some((p) => list(p[key]).length))
      .map(([label, key]) => [
        label,
        ...personas.map((p) => bulletCell(p[key])),
      ]);
    if (detailRows.length)
      blocks.push(
        { t: "heading", text: "Persona detail" },
        {
          t: "table",
          columns: ["", ...personas.map((p) => text(p.name))],
          rows: detailRows,
          firstColumnBold: true,
        },
      );
    const companies = personas.filter(
      (p) => p.company && Object.values(p.company).some((v) => clean(v)),
    );
    if (companies.length)
      blocks.push(
        { t: "heading", text: "Company profiles" },
        {
          t: "table",
          columns: [
            "Persona",
            "Size",
            "Industry",
            "Region",
            "Tech maturity",
            "Budget",
          ],
          rows: companies.map((p) => [
            text(p.name),
            text(p.company.size),
            text(p.company.industry),
            text(p.company.region),
            text(p.company.techMaturity),
            text(p.company.budget),
          ]),
          firstColumnBold: true,
        },
      );
    sections.push({ title: "Personas and ICPs", blocks });
  }

  if (goals.length) {
    const blocks: Block[] = [
      {
        t: "segments",
        title: "Goals by horizon",
        items: [
          { label: "Short term", value: shortGoals },
          { label: "Long term", value: goals.length - shortGoals },
        ].filter((item) => item.value > 0),
      },
      {
        t: "table",
        columns: [
          "Horizon",
          "Goal",
          "Owner",
          "Metric",
          "Target",
          "Baseline",
          "Cadence",
        ],
        rows: goals.map((g) => {
          const m = metricParts(g.metric);
          return [
            /short/i.test(g.horizon || "") ? "Short" : g.horizon ? "Long" : "—",
            text(g.statement),
            text(g.ownerRole),
            m.name,
            m.target,
            m.baseline,
            m.cadence,
          ];
        }),
      },
    ];
    if (goals.some((g) => list(g.milestones).length || list(g.risks).length))
      blocks.push(
        { t: "heading", text: "Milestones and risks" },
        {
          t: "table",
          columns: ["Goal", "Milestones", "Risks"],
          rows: goals.map((g) => [
            text(g.statement),
            bulletCell(g.milestones),
            bulletCell(g.risks),
          ]),
        },
      );
    sections.push({ title: "Goals and metrics", blocks });
  }

  if (scorecards.length) {
    const blocks: Block[] = [];
    scorecards.forEach((sc) => {
      const criteria: any[] = sc.criteria || [];
      blocks.push(
        { t: "heading", text: `${text(sc.role)} scorecard` },
        {
          t: "bars",
          title: "Criterion weight",
          unit: "%",
          max: 100,
          legend: ["Must have", "Weighted"],
          items: criteria.map((c) => ({
            label: text(c.name),
            value: Number(c.weight) || 0,
            highlight: Boolean(c.mustHave),
          })),
        },
        {
          t: "table",
          columns: ["Criterion", "Weight", "Must have", "What good looks like"],
          rows: criteria.map((c) => [
            text(c.name),
            `${Number(c.weight) || 0}%`,
            c.mustHave ? "Yes" : "No",
            [
              clean(c.description),
              list(c.evidenceToLookFor).length
                ? `Look for: ${list(c.evidenceToLookFor).join("; ")}`
                : "",
            ]
              .filter(Boolean)
              .join("\n") || "—",
          ]),
          firstColumnBold: true,
        },
      );
    });
    sections.push({ title: "Founder scorecards", blocks });
  }

  if (briefs.length) {
    const blocks: Block[] = [];
    briefs.forEach((brief) => {
      blocks.push(
        { t: "heading", text: `${text(brief.role)} sourcing brief` },
        ...briefBlocks(
          brief,
          searches.find((s) => s.role === brief.role),
        ),
      );
    });
    sections.push({ title: "Sourcing briefs", blocks });
  }

  if (candidates.length) {
    const scored = candidates.filter((c) => c.scorecard);
    const blocks: Block[] = [];
    const statuses = new Map<string, number>();
    candidates.forEach((c) =>
      statuses.set(
        c.status || "saved",
        (statuses.get(c.status || "saved") || 0) + 1,
      ),
    );
    blocks.push({
      t: "segments",
      title: "Pipeline by status",
      items: [...statuses].map(([label, value]) => ({ label, value })),
    });
    if (scored.length)
      blocks.push({
        t: "bars",
        title: "Weighted fit",
        unit: "%",
        max: 100,
        items: scored.map((c) => ({
          label: text(c.name),
          value: Number(c.scorecard.weightedFit) || 0,
        })),
      });
    blocks.push({
      t: "table",
      columns: ["Candidate", "Role", "Status", "Fit", "Gaps"],
      rows: candidates.map((c) => [
        text(c.name),
        text(c.role),
        text(c.status || "saved"),
        c.scorecard ? `${c.scorecard.weightedFit}%` : "Not scored",
        bulletCell(c.scorecard?.gaps),
      ]),
      firstColumnBold: true,
    });
    sections.push({ title: "Candidate pipeline", blocks });
  }

  if (aiRisks) {
    const riskBlocks = parseMarkdownBlocks(aiRisks.body);
    if (riskBlocks.length)
      sections.push({ title: "Risks and open questions", blocks: riskBlocks });
  }
  ai?.sections
    .filter((s) => !covered.test(s.title))
    .forEach((s) => {
      const blocks = parseMarkdownBlocks(s.body);
      if (blocks.length) sections.push({ title: s.title, blocks });
    });

  return {
    title: clean(project.name) || "Working thesis",
    eyebrow: "Working thesis",
    stats,
    sections,
  };
}
