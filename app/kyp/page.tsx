"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  LoaderCircle,
  LockKeyhole,
  PenLine,
  Plus,
  Upload,
} from "lucide-react";
import styles from "./workspace.module.css";
import ThesisReport from "./ThesisReport";
import { buildBriefReport, buildThesisReport } from "./report";
import { exportReportPdf } from "./reportPdf";

type Field = { value: string; origin: string; locked: boolean };
type Project = {
  id?: string;
  name: string;
  productCore: Record<"problem" | "approach" | "purpose", Field>;
  founders: {
    id: string;
    role: string;
    mustHave: string;
    rationale?: string;
    responsibilities?: string[];
    mustHaveSkills?: string[];
    niceToHaveSkills?: string[];
    industryExperience?: string[];
    workingStyle?: string;
    redFlags?: string[];
  }[];
  personas: {
    id: string;
    name: string;
    type: string;
    pain: string;
    bio?: string;
    goals?: string[];
    pains?: string[];
    motivations?: string[];
    devices?: string[];
    productFit?: string;
    buyerTriggers?: string[];
    objections?: string[];
    successCriteria?: string[];
    influence?: string;
    company?: {
      size?: string;
      industry?: string;
      region?: string;
      techMaturity?: string;
      budget?: string;
    };
  }[];
  goals: {
    id: string;
    statement: string;
    metric: any;
    horizon?: string;
    ownerRole?: string;
  }[];
  scorecards?: {
    id: string;
    role: string;
    criteria: { name: string; weight: number; mustHave: boolean }[];
  }[];
  briefs?: {
    id: string;
    role: string;
    whyNow: string;
    mustHaves: string[];
    niceToHaves: string[];
    archetypes: string[];
    greenFlags: string[];
    redFlags: string[];
    whereToLook: string[];
    screeningQuestions: string[];
    complement: string;
  }[];
  searches?: {
    id: string;
    role: string;
    boolean: string;
    titles: string[];
    industries: string[];
    seniority: string[];
    locations: string[];
  }[];
  candidates?: {
    id: string;
    role: string;
    name: string;
    sourceUrl?: string;
    notes?: string;
    status?: string;
    scorecard?: { weightedFit: number; gaps: string[]; recommendation: string };
    outreachDraft?: { subject: string; message: string; rationale: string };
  }[];
  sourceDocuments?: {
    id: string;
    filename: string;
    type: string;
    uploadedAt: string;
    text?: string;
  }[];
  versions?: { id: string; content: string; createdAt: string }[];
};

const localProject: Project = {
  name: "New product",
  productCore: {
    problem: { value: "", origin: "manual", locked: false },
    approach: { value: "", origin: "manual", locked: false },
    purpose: { value: "", origin: "manual", locked: false },
  },
  founders: [],
  personas: [],
  goals: [],
};

const steps = [
  "Intake",
  "Product core",
  "People",
  "Goals & fit",
  "Sourcing",
  "Thesis",
];
const api =
  process.env.NEXT_PUBLIC_API_URL || "https://avssite.techtree.lifestyle/api";
const workspaceStorageKey = "avs-kyp-workspace";

function formatCopilotText(text: string) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, index) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={index}>{part.slice(2, -2)}</strong>
      ) : (
        part
      ),
    );
}

function CopilotAnswer({ answer }: { answer: string }) {
  const readableAnswer = answer
    .replace(/\r/g, "")
    .replace(
      /^(#{1,3}\s+(?:Initial Assessment|Key Gaps(?: & Risks)?|What to Do Next|Verdict))\s+/gm,
      "$1\n",
    )
    .replace(/\s+---\s+(?=#{1,3}\s)/g, "\n")
    .replace(/\s*\|\s*/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className={styles.copilotAnswer} aria-live="polite">
      {readableAnswer.map((line, index) => {
        const heading = line.match(/^#{1,3}\s+(.+)$/);
        if (heading)
          return <h4 key={index}>{formatCopilotText(heading[1])}</h4>;

        const bullet = line.match(/^(?:[-•]|\d+\.)\s+(.+)$/);
        if (bullet)
          return (
            <p className={styles.copilotBullet} key={index}>
              {formatCopilotText(bullet[1])}
            </p>
          );

        return <p key={index}>{formatCopilotText(line)}</p>;
      })}
    </div>
  );
}

export default function KypPage() {
  const [project, setProject] = useState<Project>(localProject);
  const [active, setActive] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [sourceText, setSourceText] = useState("");
  const [status, setStatus] = useState("Saved locally");
  const [intakeError, setIntakeError] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isProposingPeople, setIsProposingPeople] = useState(false);
  const [isProposingPlan, setIsProposingPlan] = useState(false);
  const [thesis, setThesis] = useState("");
  const [proposals, setProposals] = useState<Record<string, any>>({});
  const [copiedSearch, setCopiedSearch] = useState("");
  const [proposalAction, setProposalAction] = useState("");
  const [exporting, setExporting] = useState("");
  const [newCandidate, setNewCandidate] = useState({
    role: "",
    name: "",
    sourceUrl: "",
    notes: "",
  });
  // Scoring grades a candidate against a scorecard, so offer exactly the roles that have one.
  // Before any scorecards exist, fall back to the founder roles.
  const scorecardRoles = (project.scorecards || [])
    .map((scorecard) => scorecard.role)
    .filter(Boolean);
  const candidateRoles = Array.from(
    new Set(
      scorecardRoles.length
        ? scorecardRoles
        : project.founders.map((founder) => founder.role).filter(Boolean),
    ),
  );

  const [isSavingCandidate, setIsSavingCandidate] = useState(false);
  const [scoringCandidate, setScoringCandidate] = useState("");
  const [draftingOutreach, setDraftingOutreach] = useState("");
  const [rephrasingField, setRephrasingField] = useState("");
  const [assistantQuestion, setAssistantQuestion] = useState("");
  const [assistantAnswer, setAssistantAnswer] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [checks, setChecks] = useState<
    { area: string; finding: string; severity: string; suggestion: string }[]
  >([]);
  const [isChecking, setIsChecking] = useState(false);
  const [workspaceRestored, setWorkspaceRestored] = useState(false);

  useEffect(() => {
    let savedWorkspace: any = null;
    try {
      savedWorkspace = JSON.parse(
        window.localStorage.getItem(workspaceStorageKey) || "null",
      );
      if (savedWorkspace?.sourceText) setSourceText(savedWorkspace.sourceText);
      if (Number.isInteger(savedWorkspace?.active))
        setActive(
          Math.max(0, Math.min(steps.length - 1, savedWorkspace.active)),
        );
      if (Array.isArray(savedWorkspace?.completedSteps))
        setCompletedSteps(new Set(savedWorkspace.completedSteps));
      if (savedWorkspace?.assistantQuestion)
        setAssistantQuestion(savedWorkspace.assistantQuestion);
      if (savedWorkspace?.assistantAnswer)
        setAssistantAnswer(savedWorkspace.assistantAnswer);
      if (Array.isArray(savedWorkspace?.checks))
        setChecks(savedWorkspace.checks);
      if (savedWorkspace?.thesis) setThesis(savedWorkspace.thesis);
    } catch {
      window.localStorage.removeItem(workspaceStorageKey);
    }

    const restoreWorkspace = async () => {
      try {
        const savedProject = savedWorkspace?.project;
        if (savedProject?.id) {
          const response = await fetch(
            `${api}/kyp/projects/${savedProject.id}`,
          );
          if (response.ok) {
            const { project: cloudProject } = await response.json();
            const restoredProject = { ...cloudProject, ...savedProject };
            setProject(restoredProject);
            setProposals(
              savedWorkspace.proposals || cloudProject.proposals || {},
            );
            setStatus("Workspace restored");
            return;
          }
          if (response.status !== 404)
            throw new Error("Could not restore workspace");
          window.localStorage.removeItem(workspaceStorageKey);
        }

        const response = await fetch(`${api}/kyp/projects`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: "New product" }),
        });
        if (!response.ok) throw new Error("Could not create workspace");
        const { project: created } = await response.json();
        setProject(created);
        setProposals(created.proposals || {});
        setStatus("Cloud workspace ready");
      } catch {
        setStatus("Working locally - start the API to save progress");
      } finally {
        setWorkspaceRestored(true);
      }
    };

    void restoreWorkspace();
  }, []);

  useEffect(() => {
    if (!workspaceRestored) return;
    window.localStorage.setItem(
      workspaceStorageKey,
      JSON.stringify({
        project,
        proposals,
        sourceText,
        active,
        completedSteps: [...completedSteps],
        assistantQuestion,
        assistantAnswer,
        checks,
        thesis,
      }),
    );
  }, [
    active,
    assistantAnswer,
    assistantQuestion,
    checks,
    completedSteps,
    project,
    proposals,
    sourceText,
    thesis,
    workspaceRestored,
  ]);

  const update = (partial: Partial<Project>) =>
    setProject((current) => ({ ...current, ...partial }));
  const advanceTo = (nextStep: number) => {
    setCompletedSteps((current) => new Set([...current, active]));
    setActive(nextStep);
  };
  const recoverProject = async (
    snapshot = project,
  ): Promise<Project | null> => {
    const createdResponse = await fetch(`${api}/kyp/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: snapshot.name }),
    });
    if (!createdResponse.ok) return null;
    const { project: created } = await createdResponse.json();
    const restored = { ...snapshot, id: created.id };
    const restoredResponse = await fetch(`${api}/kyp/projects/${created.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(restored),
    });
    if (!restoredResponse.ok) return null;
    const { project: saved } = await restoredResponse.json();
    setProject(saved);
    setStatus("Workspace reconnected");
    return saved;
  };
  const save = async (next = project) => {
    setProject(next);
    if (!next.id) return;
    const response = await fetch(`${api}/kyp/projects/${next.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(next),
    });
    if (response.status === 404) {
      await recoverProject(next);
      return;
    }
    setStatus(response.ok ? "Saved just now" : "Could not save changes");
  };
  const setCore = (key: keyof Project["productCore"], value: string) => {
    const next = {
      ...project,
      productCore: {
        ...project.productCore,
        [key]: { ...project.productCore[key], value, origin: "founder" },
      },
    };
    void save(next);
  };
  const rephraseCore = async (field: keyof Project["productCore"]) => {
    if (!project.id || rephrasingField || project.productCore[field].locked)
      return;
    setRephrasingField(field);
    try {
      const response = await fetch(
        `${api}/kyp/projects/${project.id}/core/${field}/rephrase`,
        { method: "POST" },
      );
      const data = await response.json();
      if (data.proposal) {
        setProposals((current) => ({
          ...current,
          rephraseCore: data.proposal,
        }));
        setStatus("Rephrase ready for review");
      } else setStatus(data.error || "Could not rephrase this field");
    } finally {
      setRephrasingField("");
    }
  };
  const ready = useMemo(
    () =>
      Object.values(project.productCore).filter((field) => field.value).length,
    [project],
  );
  const pendingProposal =
    proposals.productCore ||
    proposals.people ||
    proposals.plan ||
    proposals.rephraseCore ||
    proposals.candidateScore ||
    proposals.outreach;

  const extract = async () => {
    if (!sourceText.trim() || isExtracting) return;
    setIsExtracting(true);
    setIntakeError("");
    try {
      if (project.id) {
        let activeProject = project;
        let response = await fetch(
          `${api}/kyp/projects/${activeProject.id}/intake`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sourceText }),
          },
        );
        if (response.status === 404) {
          const recovered = await recoverProject(activeProject);
          if (!recovered?.id)
            throw new Error("Unable to reconnect the workspace.");
          activeProject = recovered;
          response = await fetch(
            `${api}/kyp/projects/${activeProject.id}/intake`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ sourceText }),
            },
          );
        }
        const data = await response.json();
        if (data.proposal) {
          setProposals((current) => ({
            ...current,
            productCore: data.proposal,
          }));
          setStatus(`AI extraction ready - ${data.confidence} confidence`);
          advanceTo(1);
          return;
        }
        setIntakeError(
          data.error ||
            "The AI co-pilot could not extract the product core. Please try again.",
        );
        return;
      }
      setIntakeError(
        "The AI co-pilot is unavailable. Start the local backend, then try again.",
      );
    } catch {
      setIntakeError(
        "The AI co-pilot is unavailable. Start the local backend, then try again.",
      );
    } finally {
      setIsExtracting(false);
    }
  };
  const uploadSource = async (file: File) => {
    if (!project.id || isUploading) return;
    setIsUploading(true);
    setIntakeError("");
    try {
      const form = new FormData();
      form.append("file", file);
      const response = await fetch(`${api}/kyp/projects/${project.id}/source`, {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      if (data.proposal) {
        setProposals((current) => ({ ...current, productCore: data.proposal }));
        setStatus(`AI extraction ready - ${data.confidence} confidence`);
        advanceTo(1);
      } else
        setIntakeError(
          data.error ||
            "We could not read that file. Paste the source material instead.",
        );
    } catch {
      setIntakeError("We could not upload that file. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };
  const addPersona = () =>
    update({
      personas: [
        ...project.personas,
        {
          id: crypto.randomUUID(),
          name: "New persona",
          type: "Product user",
          pain: "What gets in their way?",
        },
      ],
    });
  const addFounder = () =>
    update({
      founders: [
        ...project.founders,
        {
          id: crypto.randomUUID(),
          role: "New founder role",
          mustHave: "Define the critical capability",
        },
      ],
    });
  const updateFounder = (
    id: string,
    partial: Partial<Project["founders"][number]>,
  ) => {
    const next = {
      ...project,
      founders: project.founders.map((founder) =>
        founder.id === id ? { ...founder, ...partial } : founder,
      ),
    };
    void save(next);
  };
  const removeFounder = (id: string) => {
    const next = {
      ...project,
      founders: project.founders.filter((founder) => founder.id !== id),
    };
    void save(next);
  };
  const moveFounder = (id: string, direction: -1 | 1) => {
    const index = project.founders.findIndex((founder) => founder.id === id);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= project.founders.length) return;
    const founders = [...project.founders];
    [founders[index], founders[target]] = [founders[target], founders[index]];
    void save({ ...project, founders });
  };
  const mergeFounders = (id: string) => {
    const source = project.founders.find((founder) => founder.id === id);
    const target = project.founders.find((founder) => founder.id !== id);
    if (!source || !target) return;
    const founders = project.founders
      .filter((founder) => founder.id !== id)
      .map((founder) =>
        founder.id === target.id
          ? {
              ...founder,
              role: `${target.role} / ${source.role}`,
              mustHave: `${target.mustHave}; ${source.mustHave}`,
            }
          : founder,
      );
    void save({ ...project, founders });
  };
  const updatePersona = (
    id: string,
    partial: Partial<Project["personas"][number]>,
  ) => {
    const next = {
      ...project,
      personas: project.personas.map((persona) =>
        persona.id === id ? { ...persona, ...partial } : persona,
      ),
    };
    void save(next);
  };
  const removePersona = (id: string) => {
    const next = {
      ...project,
      personas: project.personas.filter((persona) => persona.id !== id),
    };
    void save(next);
  };
  const addGoal = () =>
    update({
      goals: [
        ...project.goals,
        {
          id: crypto.randomUUID(),
          statement: "A meaningful outcome",
          metric: "Choose a measure",
        },
      ],
    });
  const updateGoal = (
    id: string,
    partial: Partial<Project["goals"][number]>,
  ) => {
    const next = {
      ...project,
      goals: project.goals.map((goal) =>
        goal.id === id ? { ...goal, ...partial } : goal,
      ),
    };
    void save(next);
  };
  const updateScorecardCriterion = (
    scorecardId: string,
    criterionIndex: number,
    partial: { name?: string; weight?: number; mustHave?: boolean },
  ) => {
    const next = {
      ...project,
      scorecards: (project.scorecards || []).map((scorecard) =>
        scorecard.id === scorecardId
          ? {
              ...scorecard,
              criteria: scorecard.criteria.map((criterion, index) =>
                index === criterionIndex
                  ? { ...criterion, ...partial }
                  : criterion,
              ),
            }
          : scorecard,
      ),
    };
    void save(next);
  };
  const removeGoal = (id: string) => {
    const next = {
      ...project,
      goals: project.goals.filter((goal) => goal.id !== id),
    };
    void save(next);
  };
  const acceptProposal = async (type: string) => {
    if (!project.id) return;
    setProposalAction(`accept-${type}`);
    try {
      const response = await fetch(
        `${api}/kyp/projects/${project.id}/proposals/${type}/accept`,
        { method: "POST" },
      );
      const data = await response.json();
      if (data.project) {
        setProject(data.project);
        setProposals((current) => {
          const next = { ...current };
          delete next[type];
          return next;
        });
        setStatus("Proposal accepted");
      } else setStatus(data.error || "Could not accept the proposal");
    } finally {
      setProposalAction("");
    }
  };
  const rejectProposal = async (type: string) => {
    if (!project.id) return;
    setProposalAction(`reject-${type}`);
    try {
      const response = await fetch(
        `${api}/kyp/projects/${project.id}/proposals/${type}`,
        { method: "DELETE" },
      );
      const data = await response.json();
      if (data.project) {
        setProject(data.project);
        setProposals((current) => {
          const next = { ...current };
          delete next[type];
          return next;
        });
        setStatus("Proposal dismissed");
      } else setStatus(data.error || "Could not dismiss the proposal");
    } finally {
      setProposalAction("");
    }
  };
  const copySearch = async (role: string, boolean: string) => {
    await navigator.clipboard.writeText(boolean);
    setCopiedSearch(role);
  };
  const addCandidate = async () => {
    if (
      !project.id ||
      !newCandidate.role ||
      !newCandidate.name ||
      isSavingCandidate
    )
      return;
    setIsSavingCandidate(true);
    try {
      const response = await fetch(
        `${api}/kyp/projects/${project.id}/candidates`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCandidate),
        },
      );
      const data = await response.json();
      if (data.project) {
        setProject(data.project);
        setNewCandidate({ role: "", name: "", sourceUrl: "", notes: "" });
        setStatus("Candidate saved");
      } else setStatus(data.error || "Could not save candidate");
    } finally {
      setIsSavingCandidate(false);
    }
  };
  const scoreCandidate = async (candidateId: string) => {
    if (!project.id || scoringCandidate) return;
    setScoringCandidate(candidateId);
    try {
      const response = await fetch(
        `${api}/kyp/projects/${project.id}/candidates/${candidateId}/score`,
        { method: "POST" },
      );
      const data = await response.json();
      if (data.proposal) {
        setProposals((current) => ({
          ...current,
          candidateScore: data.proposal,
        }));
        setStatus("Candidate score ready for review");
      } else setStatus(data.error || "Could not score candidate");
    } finally {
      setScoringCandidate("");
    }
  };
  const draftOutreach = async (candidateId: string) => {
    if (!project.id || draftingOutreach) return;
    setDraftingOutreach(candidateId);
    try {
      const response = await fetch(
        `${api}/kyp/projects/${project.id}/candidates/${candidateId}/outreach`,
        { method: "POST" },
      );
      const data = await response.json();
      if (data.proposal) {
        setProposals((current) => ({ ...current, outreach: data.proposal }));
        setStatus("Outreach draft ready for review");
      } else setStatus(data.error || "Could not draft outreach");
    } finally {
      setDraftingOutreach("");
    }
  };
  const updateCandidateStatus = async (candidateId: string, status: string) => {
    if (!project.id) return;
    const response = await fetch(
      `${api}/kyp/projects/${project.id}/candidates/${candidateId}/status`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      },
    );
    const data = await response.json();
    if (data.project) {
      setProject(data.project);
      setStatus("Candidate status saved");
    } else setStatus(data.error || "Could not save candidate status");
  };
  const updateCandidateRole = async (candidateId: string, role: string) => {
    if (!project.id || !role) return;
    const response = await fetch(
      `${api}/kyp/projects/${project.id}/candidates/${candidateId}/role`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      },
    );
    const data = await response.json();
    if (data.project) {
      setProject(data.project);
      setStatus("Candidate role saved");
    } else setStatus(data.error || "Could not save candidate role");
  };
  const askAssistant = async () => {
    if (!project.id || !assistantQuestion.trim() || isAsking) return;
    setIsAsking(true);
    try {
      const response = await fetch(`${api}/kyp/projects/${project.id}/assist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scope: steps[active],
          question: assistantQuestion,
        }),
      });
      const data = await response.json();
      if (data.answer) setAssistantAnswer(data.answer);
      else
        setAssistantAnswer(data.error || "The co-pilot could not answer that.");
    } finally {
      setIsAsking(false);
    }
  };
  const runConsistencyCheck = async () => {
    if (!project.id || isChecking) return;
    setIsChecking(true);
    try {
      const response = await fetch(
        `${api}/kyp/projects/${project.id}/consistency-check`,
        { method: "POST" },
      );
      const data = await response.json();
      if (data.checks) setChecks(data.checks);
      else setStatus(data.error || "Could not run the consistency check");
    } finally {
      setIsChecking(false);
    }
  };
  const proposePeople = async () => {
    if (!project.id || isProposingPeople) return;
    setIsProposingPeople(true);
    try {
      const response = await fetch(`${api}/kyp/projects/${project.id}/people`, {
        method: "POST",
      });
      const data = await response.json();
      if (data.proposal) {
        setProposals((current) => ({ ...current, people: data.proposal }));
        setStatus("AI proposals ready - review and accept them");
      } else setStatus(data.error || "Could not generate people proposals");
    } finally {
      setIsProposingPeople(false);
    }
  };
  const proposePlan = async () => {
    if (!project.id || isProposingPlan) return;
    setIsProposingPlan(true);
    try {
      const response = await fetch(`${api}/kyp/projects/${project.id}/plan`, {
        method: "POST",
      });
      const data = await response.json();
      if (data.proposal) {
        setProposals((current) => ({ ...current, plan: data.proposal }));
        setStatus("AI plan ready - review and accept it");
      } else setStatus(data.error || "Could not draft goals");
    } finally {
      setIsProposingPlan(false);
    }
  };
  const generate = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      if (project.id) {
        await save();
        const response = await fetch(
          `${api}/kyp/projects/${project.id}/generate`,
          { method: "POST" },
        );
        const data = await response.json();
        if (data.thesis) {
          setThesis(data.thesis);
          setProject((current) => ({
            ...current,
            versions: [data.version, ...(current.versions || [])],
          }));
          setStatus("Thesis version created");
          return;
        }
        setStatus(
          data.error || "The AI co-pilot could not generate the thesis",
        );
      } else
        setStatus(
          "The AI co-pilot is unavailable. Start the local backend, then try again.",
        );
    } catch {
      setStatus(
        "The AI co-pilot is unavailable. Start the local backend, then try again.",
      );
    } finally {
      setIsGenerating(false);
    }
  };
  const download = (content: BlobPart, filename: string, type: string) => {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  };
  const exportBrief = async (
    brief: NonNullable<Project["briefs"]>[number],
    format: "markdown" | "pdf" = "markdown",
  ) => {
    const content = `# ${brief.role} sourcing brief\n\n## Why now\n${brief.whyNow}\n\n## Must have\n${brief.mustHaves.map((item) => `- ${item}`).join("\n")}\n\n## Nice to have\n${brief.niceToHaves.map((item) => `- ${item}`).join("\n")}\n\n## Where to look\n${brief.whereToLook.map((item) => `- ${item}`).join("\n")}\n\n## Screening questions\n${brief.screeningQuestions.map((item) => `- ${item}`).join("\n")}\n\n## Complement\n${brief.complement}`;
    const filename = `${brief.role.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-sourcing-brief`;
    if (format === "markdown")
      download(content, `${filename}.md`, "text/markdown;charset=utf-8");
    else
      await exportReportPdf(
        filename,
        buildBriefReport(
          brief,
          project.searches?.find((search) => search.role === brief.role),
        ),
      );
    setStatus(`Sourcing brief exported as ${format.toUpperCase()}`);
  };
  const exportThesis = async (format: "markdown" | "pdf" | "docx") => {
    const content =
      thesis ||
      `# ${project.name}\n\n## Product core\n${Object.entries(
        project.productCore,
      )
        .map(
          ([name, field]) => `**${name}:** ${field.value || "To be defined"}`,
        )
        .join(
          "\n\n",
        )}\n\n## Founding team\n${project.founders.map((founder) => `- **${founder.role}** — ${founder.mustHave}`).join("\n") || "To be defined"}\n\n## Goals\n${project.goals.map((goal) => `- ${goal.statement}`).join("\n") || "To be defined"}`;
    setExporting(format);
    try {
      const baseName =
        project.name
          .trim()
          .replace(/[^a-z0-9]+/gi, "-")
          .replace(/(^-|-$)/g, "")
          .toLowerCase() || "working-thesis";
      if (format === "markdown")
        download(content, `${baseName}.md`, "text/markdown;charset=utf-8");
      if (format === "pdf") {
        await exportReportPdf(baseName, buildThesisReport(project, thesis));
      }
      if (format === "docx") {
        const { Document, HeadingLevel, Packer, Paragraph } = await import(
          "docx"
        );
        const document = new Document({
          sections: [
            {
              children: content.split("\n").map((line) =>
                line.startsWith("# ")
                  ? new Paragraph({
                      text: line.slice(2),
                      heading: HeadingLevel.TITLE,
                    })
                  : line.startsWith("## ")
                    ? new Paragraph({
                        text: line.slice(3),
                        heading: HeadingLevel.HEADING_2,
                      })
                    : new Paragraph(line),
              ),
            },
          ],
        });
        download(
          await Packer.toBlob(document),
          `${baseName}.docx`,
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        );
      }
      setStatus(`Exported ${format.toUpperCase()}`);
    } catch {
      setStatus(`Could not export ${format.toUpperCase()}`);
    } finally {
      setExporting("");
    }
  };

  return (
    <main className={styles.shell}>
      <aside className={styles.sidebar}>
        <Link className={styles.brand} href="/">
          AVS <span>STUDIO</span>
        </Link>
        <div className={styles.projectName}>
          <span>PROJECT</span>
          <input
            value={project.name}
            onChange={(e) => update({ name: e.target.value })}
            onBlur={() => void save()}
          />
        </div>
        <nav>
          {steps.map((step, index) => (
            <button
              key={step}
              onClick={() => setActive(index)}
              className={active === index ? styles.activeStep : ""}
            >
              <i>{index + 1}</i>
              {step}
              {completedSteps.has(index) && <Check size={15} />}
            </button>
          ))}
        </nav>
        <div className={styles.sideFooter}>
          <span className={styles.pulse} />
          {status}
        </div>
      </aside>
      <section className={styles.workspace}>
        <header>
          <div>
            <p>{`STEP ${active + 1} OF ${steps.length}`}</p>
            <h1>{steps[active]}</h1>
          </div>
          <div className={styles.progress}>
            <b>{ready}/3</b>
            <span>core fields defined</span>
          </div>
        </header>
        {pendingProposal && !(active === 2 && proposals.people) && (
          <section className={styles.proposal}>
            <div>
              <strong className={styles.proposalTitle}>
                AI proposal ready
              </strong>
              <span>Nothing changes until you accept it.</span>
              <ul>
                {pendingProposal.fields &&
                  Object.entries(pendingProposal.fields).map(([key, value]) => (
                    <li key={key}>
                      <b>{key}:</b> {String(value)}
                    </li>
                  ))}
                {pendingProposal.founders?.map((item: any) => (
                  <li key={item.role}>
                    <b>{item.role}:</b> {item.rationale}
                  </li>
                ))}
                {pendingProposal.goals?.map((item: any) => (
                  <li key={item.statement}>
                    <b>{item.statement}</b> -{" "}
                    {typeof item.metric === "string"
                      ? item.metric
                      : item.metric?.target}
                  </li>
                ))}
                {pendingProposal.candidateName && !pendingProposal.message && (
                  <li>
                    <b>{pendingProposal.candidateName}:</b>{" "}
                    {pendingProposal.scorecard?.weightedFit}% weighted fit.{" "}
                    {pendingProposal.scorecard?.recommendation}
                  </li>
                )}
                {pendingProposal.message && (
                  <li>
                    <b>Draft for {pendingProposal.candidateName}:</b>{" "}
                    {pendingProposal.subject}
                    <br />
                    {pendingProposal.message}
                  </li>
                )}
                {pendingProposal.field && (
                  <li>
                    <b>{pendingProposal.field}:</b> {pendingProposal.value}{" "}
                    <small>({pendingProposal.reason})</small>
                  </li>
                )}
              </ul>
              {pendingProposal.sourcePassages && (
                <p>
                  <small>
                    Source evidence:{" "}
                    {Object.values(pendingProposal.sourcePassages)[0] as string}
                  </small>
                </p>
              )}
            </div>
            <div className={styles.proposalActions}>
              <button
                className={styles.plainButton}
                onClick={() => void rejectProposal(pendingProposal.type)}
                disabled={Boolean(proposalAction)}
              >
                {proposalAction === `reject-${pendingProposal.type}`
                  ? "Dismissing..."
                  : "Dismiss"}
              </button>
              <button
                className={styles.primary}
                onClick={() => void acceptProposal(pendingProposal.type)}
                disabled={Boolean(proposalAction)}
              >
                {proposalAction === `accept-${pendingProposal.type}` ? (
                  <>
                    <LoaderCircle className="animate-spin" size={16} />{" "}
                    Applying...
                  </>
                ) : (
                  <>
                    Accept proposal <Check size={16} />
                  </>
                )}
              </button>
            </div>
          </section>
        )}
        {active === 0 && (
          <section className={styles.intake}>
            <div className={styles.intakeLead}>
              <div className={styles.iconTile}>
                <PenLine size={23} />
              </div>
              <h2>Start with what you know.</h2>
              <p>
                Drop in your existing thesis, notes, or rough idea. We will turn
                it into an editable starting point.
              </p>
            </div>
            <div className={styles.intakeGrid}>
              <label className={styles.upload}>
                <Upload size={21} />
                <strong>
                  {isUploading ? "Reading your file..." : "Upload a thesis"}
                </strong>
                <small>PDF, DOCX, Markdown, or text</small>
                <input
                  type="file"
                  accept=".pdf,.docx,.txt,.md,.markdown"
                  disabled={isUploading}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) void uploadSource(file);
                  }}
                />
              </label>
              <div className={styles.or}>or</div>
              <div>
                <label className={styles.caption}>PASTE SOURCE MATERIAL</label>
                <textarea
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  placeholder="Describe the customer problem, your approach, and why it matters..."
                />
                {intakeError && (
                  <p className={styles.intakeError}>{intakeError}</p>
                )}
                <button
                  className={`${styles.primary} disabled:cursor-wait disabled:opacity-60`}
                  onClick={extract}
                  disabled={isExtracting}
                >
                  {isExtracting ? (
                    <>
                      <LoaderCircle className="animate-spin" size={17} />{" "}
                      Extracting your product core...
                    </>
                  ) : (
                    <>
                      Extract my starting point <ArrowRight size={17} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </section>
        )}
        {active === 1 && (
          <section>
            <div className={styles.sectionIntro}>
              <h2>Make the product legible.</h2>
              <p>
                These are the words the rest of the workspace will use. Lock a
                field when you are happy with it.
              </p>
            </div>
            <div className={styles.coreGrid}>
              {(["problem", "approach", "purpose"] as const).map((key) => (
                <article className={styles.fieldCard} key={key}>
                  <div>
                    <span>{key}</span>
                    <em>{project.productCore[key].origin}</em>
                  </div>
                  <textarea
                    value={project.productCore[key].value}
                    onChange={(e) => setCore(key, e.target.value)}
                    placeholder={`What is the ${key}?`}
                  />
                  <button
                    onClick={() => void rephraseCore(key)}
                    disabled={
                      Boolean(rephrasingField) ||
                      project.productCore[key].locked
                    }
                  >
                    <PenLine size={14} />{" "}
                    {rephrasingField === key
                      ? "Rephrasing..."
                      : "Rephrase with AI"}
                  </button>
                  <button
                    onClick={() => {
                      const next = {
                        ...project,
                        productCore: {
                          ...project.productCore,
                          [key]: {
                            ...project.productCore[key],
                            locked: !project.productCore[key].locked,
                          },
                        },
                      };
                      void save(next);
                    }}
                  >
                    <LockKeyhole size={14} />{" "}
                    {project.productCore[key].locked ? "Locked" : "Lock field"}
                  </button>
                  {project.sourceDocuments?.[0] && (
                    <small>Source: {project.sourceDocuments[0].filename}</small>
                  )}
                </article>
              ))}
            </div>
            <button className={styles.primary} onClick={() => advanceTo(2)}>
              Continue to people <ArrowRight size={17} />
            </button>
          </section>
        )}
        {active === 2 && (
          <section>
            <div className={styles.sectionIntro}>
              <h2>People make the plan real.</h2>
              <p>
                Ask the co-pilot for a starting point, then review and edit
                every recommendation.
              </p>
              <button
                className={`${styles.primary} disabled:cursor-wait disabled:opacity-60`}
                onClick={proposePeople}
                disabled={isProposingPeople}
              >
                {isProposingPeople ? (
                  <>
                    <LoaderCircle className="animate-spin" size={17} />{" "}
                    Proposing people...
                  </>
                ) : (
                  <>
                    <PenLine size={17} /> Generate people proposals
                  </>
                )}
              </button>
            </div>
            {proposals.people && (
              <section
                className={`${styles.proposal} ${styles.peopleProposal}`}
              >
                <div>
                  <strong className={styles.proposalTitle}>
                    People proposal ready
                  </strong>
                  <span>
                    Review the suggested roles and users, then apply them to
                    your editable workspace.
                  </span>
                  <div className={styles.peoplePreview}>
                    <article>
                      <h3>Suggested founding team</h3>
                      <ul>
                        {proposals.people.founders?.map((founder: any) => (
                          <li key={founder.role}>
                            <b>{founder.role}</b>
                            <small>{founder.mustHave}</small>
                          </li>
                        ))}
                      </ul>
                    </article>
                    <article>
                      <h3>Suggested product users</h3>
                      <ul>
                        {proposals.people.personas?.map((persona: any) => (
                          <li key={persona.name}>
                            <b>{persona.name}</b>
                            <small>{persona.pain}</small>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
                <div className={styles.proposalActions}>
                  <button
                    className={styles.plainButton}
                    onClick={() => void rejectProposal(proposals.people.type)}
                    disabled={Boolean(proposalAction)}
                  >
                    {proposalAction === `reject-${proposals.people.type}`
                      ? "Dismissing..."
                      : "Dismiss"}
                  </button>
                  <button
                    className={styles.primary}
                    onClick={() => void acceptProposal(proposals.people.type)}
                    disabled={Boolean(proposalAction)}
                  >
                    {proposalAction === `accept-${proposals.people.type}` ? (
                      <>
                        <LoaderCircle className="animate-spin" size={16} />{" "}
                        Applying...
                      </>
                    ) : (
                      <>
                        Apply people proposal <Check size={16} />
                      </>
                    )}
                  </button>
                </div>
              </section>
            )}
            <div className={styles.peopleColumns}>
              <div>
                <h3>
                  Founding team{" "}
                  <button className={styles.smallButton} onClick={addFounder}>
                    <Plus size={14} /> Add role
                  </button>
                </h3>
                {project.founders.length === 0 ? (
                  <div className={styles.empty}>
                    The AI will suggest complementary founder roles from your
                    product core.
                  </div>
                ) : (
                  project.founders.map((founder) => (
                    <article className={styles.personCard} key={founder.id}>
                      <input
                        value={founder.role}
                        aria-label="Founder role"
                        onChange={(event) =>
                          updateFounder(founder.id, {
                            role: event.target.value,
                          })
                        }
                      />
                      <input
                        value={founder.mustHave}
                        aria-label="Critical capability"
                        onChange={(event) =>
                          updateFounder(founder.id, {
                            mustHave: event.target.value,
                          })
                        }
                      />
                      <small>
                        {founder.rationale || "Founder-defined role"}
                      </small>
                      {founder.responsibilities?.length ? (
                        <small>
                          <strong>Owns:</strong>{" "}
                          {founder.responsibilities.join(", ")}
                        </small>
                      ) : null}
                      {founder.mustHaveSkills?.length ? (
                        <small>
                          <strong>Skills:</strong>{" "}
                          {founder.mustHaveSkills.join(", ")}
                        </small>
                      ) : null}
                      {founder.redFlags?.length ? (
                        <small>
                          <strong>Watch for:</strong>{" "}
                          {founder.redFlags.join(", ")}
                        </small>
                      ) : null}
                      <button
                        className={styles.plainButton}
                        onClick={() => removeFounder(founder.id)}
                      >
                        Remove
                      </button>
                      <button
                        className={styles.plainButton}
                        onClick={() => moveFounder(founder.id, -1)}
                      >
                        Move up
                      </button>
                      <button
                        className={styles.plainButton}
                        onClick={() => moveFounder(founder.id, 1)}
                      >
                        Move down
                      </button>
                      {project.founders.length > 1 && (
                        <button
                          className={styles.plainButton}
                          onClick={() => mergeFounders(founder.id)}
                        >
                          Merge with other role
                        </button>
                      )}
                    </article>
                  ))
                )}
              </div>
              <div>
                <h3>
                  Product users{" "}
                  <button className={styles.smallButton} onClick={addPersona}>
                    <Plus size={14} /> Add manually
                  </button>
                </h3>
                {project.personas.length === 0 ? (
                  <div className={styles.empty}>
                    The AI will suggest the users and buyers most affected by
                    this problem.
                  </div>
                ) : (
                  project.personas.map((persona) => (
                    <article className={styles.personCard} key={persona.id}>
                      <input
                        value={persona.name}
                        aria-label="Persona name"
                        onChange={(event) =>
                          updatePersona(persona.id, {
                            name: event.target.value,
                          })
                        }
                      />
                      <input
                        value={persona.type}
                        aria-label="Persona type"
                        onChange={(event) =>
                          updatePersona(persona.id, {
                            type: event.target.value,
                          })
                        }
                      />
                      <textarea
                        value={persona.pain}
                        aria-label="Persona pain"
                        onChange={(event) =>
                          updatePersona(persona.id, {
                            pain: event.target.value,
                          })
                        }
                      />
                      {persona.goals?.length ? (
                        <small>
                          <strong>Goal:</strong> {persona.goals.join(", ")}
                        </small>
                      ) : null}
                      {persona.objections?.length ? (
                        <small>
                          <strong>Objection:</strong>{" "}
                          {persona.objections.join(", ")}
                        </small>
                      ) : null}
                      {persona.company?.industry ? (
                        <small>
                          <strong>Company:</strong> {persona.company.industry},{" "}
                          {persona.company.size || "size unknown"}
                        </small>
                      ) : null}
                      <button
                        className={styles.plainButton}
                        onClick={() => removePersona(persona.id)}
                      >
                        Remove
                      </button>
                    </article>
                  ))
                )}
              </div>
            </div>
            <button className={styles.primary} onClick={() => advanceTo(3)}>
              Set goals and fit <ArrowRight size={17} />
            </button>
          </section>
        )}
        {active === 3 && (
          <section>
            <div className={styles.sectionIntro}>
              <h2>What has to become true?</h2>
              <p>
                Let the co-pilot draft measurable MVP outcomes and founder-fit
                scorecards from your product and people plan.
              </p>
              <button
                className={`${styles.primary} disabled:cursor-wait disabled:opacity-60`}
                onClick={proposePlan}
                disabled={isProposingPlan}
              >
                {isProposingPlan ? (
                  <>
                    <LoaderCircle className="animate-spin" size={17} /> Drafting
                    plan...
                  </>
                ) : (
                  <>
                    <PenLine size={17} /> Draft goals and fit with AI
                  </>
                )}
              </button>
            </div>
            <div className={styles.goals}>
              {project.goals.map((goal) => (
                <article key={goal.id}>
                  <input
                    value={goal.statement}
                    aria-label="Goal statement"
                    onChange={(event) =>
                      updateGoal(goal.id, { statement: event.target.value })
                    }
                  />
                  <input
                    value={
                      typeof goal.metric === "string"
                        ? goal.metric
                        : goal.metric?.name || ""
                    }
                    aria-label="Goal metric"
                    onChange={(event) =>
                      updateGoal(goal.id, {
                        metric:
                          typeof goal.metric === "string"
                            ? event.target.value
                            : { ...goal.metric, name: event.target.value },
                      })
                    }
                  />
                  <small>
                    {typeof goal.metric === "object"
                      ? `${goal.metric.target || "No target"} · ${goal.metric.cadence || "No cadence"}`
                      : "Define a target and cadence after saving"}
                  </small>
                  <button
                    className={styles.plainButton}
                    onClick={() => removeGoal(goal.id)}
                  >
                    Remove
                  </button>
                </article>
              ))}
              <button className={styles.addGoal} onClick={addGoal}>
                <Plus size={18} /> Add a goal manually
              </button>
            </div>
            {(project.scorecards || []).map((scorecard) => (
              <div className={styles.scoreNote} key={scorecard.id}>
                <CheckCircle2 size={18} />
                <div>
                  <strong>{scorecard.role} scorecard</strong>
                  {scorecard.criteria.map((criterion, index) => (
                    <p key={`${scorecard.id}-${criterion.name}`}>
                      <input
                        value={criterion.name}
                        aria-label="Scorecard criterion"
                        onChange={(event) =>
                          updateScorecardCriterion(scorecard.id, index, {
                            name: event.target.value,
                          })
                        }
                      />
                      <span className={styles.weightField}>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={criterion.weight}
                          aria-label="Criterion weight"
                          onChange={(event) =>
                            updateScorecardCriterion(scorecard.id, index, {
                              weight: Number(event.target.value),
                            })
                          }
                        />
                        <em>%</em>
                      </span>
                      <label>
                        <input
                          type="checkbox"
                          checked={criterion.mustHave}
                          onChange={(event) =>
                            updateScorecardCriterion(scorecard.id, index, {
                              mustHave: event.target.checked,
                            })
                          }
                        />{" "}
                        Must have
                      </label>
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <button className={styles.primary} onClick={() => advanceTo(4)}>
              Review sourcing <ArrowRight size={17} />
            </button>
          </section>
        )}
        {active === 4 && (
          <section>
            <div className={styles.sectionIntro}>
              <h2>Source the right co-founders.</h2>
              <p>
                Use the AI-generated role briefs and Boolean searches as a
                starting point. You remain in control of every search and
                contact.
              </p>
            </div>
            {(project.briefs || []).length === 0 ? (
              <div className={styles.empty}>
                Generate and accept the goals and fit proposal to create founder
                briefs, screening questions, and LinkedIn-ready searches.
              </div>
            ) : (
              <div className={styles.peopleColumns}>
                {(project.briefs || []).map((brief) => {
                  const search = (project.searches || []).find(
                    (item) => item.role === brief.role,
                  );
                  return (
                    <article className={styles.personCard} key={brief.id}>
                      <b>{brief.role}</b>
                      <span>{brief.whyNow}</span>
                      <small>
                        <strong>Must have:</strong> {brief.mustHaves.join(", ")}
                      </small>
                      <small>
                        <strong>Look in:</strong> {brief.whereToLook.join(", ")}
                      </small>
                      <small>
                        <strong>Screen for:</strong>{" "}
                        {brief.screeningQuestions.join(" · ")}
                      </small>
                      <button
                        className={styles.plainButton}
                        onClick={() => void exportBrief(brief)}
                      >
                        Export Markdown
                      </button>
                      <button
                        className={styles.plainButton}
                        onClick={() => void exportBrief(brief, "pdf")}
                      >
                        Export PDF
                      </button>
                      {search && (
                        <>
                          <textarea
                            readOnly
                            value={search.boolean}
                            aria-label={`${brief.role} Boolean search`}
                          />
                          <button
                            className={styles.smallButton}
                            onClick={() =>
                              void copySearch(brief.role, search.boolean)
                            }
                          >
                            {copiedSearch === brief.role
                              ? "Copied search"
                              : "Copy Boolean search"}
                          </button>
                        </>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
            <div className={styles.scoreNote}>
              <CheckCircle2 size={18} />
              <span>
                Add only information you have chosen to provide. KYP never opens
                profiles, scrapes LinkedIn, or sends outreach.
              </span>
            </div>
            <div className={styles.peopleColumns}>
              <div>
                <h3>Add a candidate</h3>
                <div className={styles.personCard}>
                  {candidateRoles.length ? (
                    <select
                      value={newCandidate.role}
                      aria-label="Candidate role"
                      onChange={(event) =>
                        setNewCandidate({
                          ...newCandidate,
                          role: event.target.value,
                        })
                      }
                    >
                      <option value="">
                        Select the role this person is for
                      </option>
                      {candidateRoles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value={newCandidate.role}
                      onChange={(event) =>
                        setNewCandidate({
                          ...newCandidate,
                          role: event.target.value,
                        })
                      }
                      placeholder="Role"
                    />
                  )}
                  <input
                    value={newCandidate.name}
                    onChange={(event) =>
                      setNewCandidate({
                        ...newCandidate,
                        name: event.target.value,
                      })
                    }
                    placeholder="Candidate name"
                  />
                  <input
                    value={newCandidate.sourceUrl}
                    onChange={(event) =>
                      setNewCandidate({
                        ...newCandidate,
                        sourceUrl: event.target.value,
                      })
                    }
                    placeholder="Profile URL (optional)"
                  />
                  <textarea
                    value={newCandidate.notes}
                    onChange={(event) =>
                      setNewCandidate({
                        ...newCandidate,
                        notes: event.target.value,
                      })
                    }
                    placeholder="Your notes and public information"
                  />
                  <button
                    className={styles.smallButton}
                    onClick={() => void addCandidate()}
                    disabled={isSavingCandidate}
                  >
                    {isSavingCandidate ? "Saving..." : "Save candidate"}
                  </button>
                </div>
              </div>
              <div>
                <h3>Candidate scorecards</h3>
                {(project.candidates || []).length === 0 ? (
                  <div className={styles.empty}>
                    Saved candidates will be scored against the accepted role
                    scorecard—only after you ask the AI to propose a score.
                  </div>
                ) : (
                  (project.candidates || []).map((candidate) => (
                    <article className={styles.personCard} key={candidate.id}>
                      <b>{candidate.name}</b>
                      {candidateRoles.length ? (
                        <select
                          value={
                            candidateRoles.includes(candidate.role)
                              ? candidate.role
                              : ""
                          }
                          aria-label={`${candidate.name} role`}
                          onChange={(event) =>
                            void updateCandidateRole(
                              candidate.id,
                              event.target.value,
                            )
                          }
                        >
                          {!candidateRoles.includes(candidate.role) && (
                            <option value="">
                              {candidate.role} — choose a valid role
                            </option>
                          )}
                          {candidateRoles.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <span>{candidate.role}</span>
                      )}
                      {candidate.notes && <small>{candidate.notes}</small>}
                      <select
                        value={candidate.status || "saved"}
                        aria-label={`${candidate.name} status`}
                        onChange={(event) =>
                          void updateCandidateStatus(
                            candidate.id,
                            event.target.value,
                          )
                        }
                      >
                        <option value="saved">Saved</option>
                        <option value="contacted">Contacted</option>
                        <option value="replying">Replying</option>
                        <option value="meeting">Meeting</option>
                        <option value="passed">Passed</option>
                      </select>
                      {candidate.scorecard ? (
                        <small>
                          <strong>
                            {candidate.scorecard.weightedFit}% fit:
                          </strong>{" "}
                          {candidate.scorecard.recommendation}
                        </small>
                      ) : (
                        <button
                          className={styles.smallButton}
                          onClick={() => void scoreCandidate(candidate.id)}
                          disabled={Boolean(scoringCandidate)}
                        >
                          {scoringCandidate === candidate.id
                            ? "Scoring..."
                            : "Propose AI score"}
                        </button>
                      )}
                      {candidate.outreachDraft ? (
                        <small>
                          <strong>{candidate.outreachDraft.subject}</strong>
                          <br />
                          {candidate.outreachDraft.message}
                        </small>
                      ) : (
                        <button
                          className={styles.smallButton}
                          onClick={() => void draftOutreach(candidate.id)}
                          disabled={Boolean(draftingOutreach)}
                        >
                          {draftingOutreach === candidate.id
                            ? "Drafting..."
                            : "Draft outreach"}
                        </button>
                      )}
                    </article>
                  ))
                )}
              </div>
            </div>
            <button className={styles.primary} onClick={() => advanceTo(5)}>
              Generate thesis <ArrowRight size={17} />
            </button>
          </section>
        )}
        {active === 5 && (
          <section className={styles.thesis}>
            <div className={styles.sectionIntro}>
              <h2>Your working thesis.</h2>
              <p>
                Generate a version whenever you want a shareable snapshot of the
                decisions above.
              </p>
            </div>
            <button
              className={`${styles.primary} disabled:cursor-wait disabled:opacity-60`}
              onClick={generate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <LoaderCircle className="animate-spin" size={17} /> Generating
                  thesis...
                </>
              ) : (
                <>
                  <FileText size={17} /> Generate thesis
                </>
              )}
            </button>
            <ThesisReport report={buildThesisReport(project, thesis)} />
            <div className={styles.exportRow}>
              <span>Export the current thesis</span>
              {(["markdown", "pdf", "docx"] as const).map((format) => (
                <button
                  className={styles.smallButton}
                  key={format}
                  onClick={() => void exportThesis(format)}
                  disabled={Boolean(exporting)}
                >
                  {exporting === format ? "Preparing..." : format.toUpperCase()}
                </button>
              ))}
            </div>
            {(project.versions || []).length > 0 && (
              <div className={styles.versionList}>
                <h3>Version history</h3>
                {(project.versions || []).map((version, index) => (
                  <button
                    key={version.id}
                    className={styles.plainButton}
                    onClick={() => setThesis(version.content)}
                  >
                    Version {(project.versions || []).length - index} ·{" "}
                    {new Date(version.createdAt).toLocaleString()}
                  </button>
                ))}
              </div>
            )}
            {(project.sourceDocuments || []).length > 0 && (
              <details className={styles.sourceComparison}>
                <summary>Compare with original source</summary>
                {(project.sourceDocuments || []).map((source) => (
                  <article key={source.id}>
                    <strong>{source.filename}</strong>
                    <pre>{source.text || "Source text is unavailable."}</pre>
                  </article>
                ))}
              </details>
            )}
          </section>
        )}
        <section className={styles.assistantPanel}>
          <div className={styles.assistantHeader}>
            <h3>Ask about {steps[active]}</h3>
            <p>The co-pilot advises only. It will not change your project.</p>
          </div>
          <textarea
            value={assistantQuestion}
            onChange={(event) => setAssistantQuestion(event.target.value)}
            placeholder="What should I clarify or validate here?"
          />
          <div className={styles.assistantActions}>
            <button
              className={styles.smallButton}
              onClick={() => void askAssistant()}
              disabled={isAsking}
            >
              {isAsking ? "Thinking..." : "Ask co-pilot"}
            </button>
            <button
              className={styles.plainButton}
              onClick={() => void runConsistencyCheck()}
              disabled={isChecking}
            >
              {isChecking ? "Checking..." : "Check consistency"}
            </button>
          </div>
          {assistantAnswer && <CopilotAnswer answer={assistantAnswer} />}
          {checks.map((check, index) => (
            <p
              className={styles.assistantResult}
              key={`${check.area}-${index}`}
            >
              <strong>{check.area}:</strong> {check.finding}{" "}
              <small>{check.suggestion}</small>
            </p>
          ))}
        </section>
      </section>
    </main>
  );
}
