import type { Block, Report } from "./report";

// Palette sampled from the reference documentation PDF, plus the site's navy for data marks.
const INK = "#1f1e1d";
const MUTED = "#727171";
const FAINT = "#aaaaa9";
const TINT = "#f5f3ed";
const RULE = "#e8e5dc";
const HEAD_TEXT = "#52514e";
const NAVY = "#0f1728";
const SOFT = "#8a94a8";
const SEGMENTS = ["#0f1728", "#4a5875", "#8a94a8", "#c1c7d3"];

export async function exportReportPdf(filename: string, report: Report) {
  const { jsPDF } = await import("jspdf");
  const isWide = (section: Report["sections"][number]) =>
    section.blocks.some(
      (block) => block.t === "table" && block.columns.length >= 6,
    );
  const startWide = Boolean(report.sections[0] && isWide(report.sections[0]));
  const pdf = new jsPDF({
    unit: "pt",
    format: "a4",
    orientation: startWide ? "landscape" : "portrait",
  });
  let pageWidth = pdf.internal.pageSize.getWidth();
  let pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 45;
  let cw = pageWidth - margin * 2;
  let bottom = pageHeight - 56;
  let orientation: "portrait" | "landscape" = startWide
    ? "landscape"
    : "portrait";
  let y = 0;

  // Open-licence faces (public/fonts/pdf); fall back to built-ins if they cannot be fetched
  const loadFont = async (
    file: string,
    family: string,
    style: "normal" | "bold",
  ) => {
    const response = await fetch(`/fonts/pdf/${file}`);
    if (!response.ok) throw new Error(`Missing font ${file}`);
    const bytes = new Uint8Array(await response.arrayBuffer());
    let binary = "";
    for (let i = 0; i < bytes.length; i += 0x8000)
      binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
    pdf.addFileToVFS(file, btoa(binary));
    pdf.addFont(file, family, style);
  };
  let serif = "times";
  let sans = "helvetica";
  try {
    await Promise.all([
      loadFont("Newsreader-Regular.ttf", "Newsreader", "normal"),
      loadFont("InstrumentSans-Regular.ttf", "InstrumentSans", "normal"),
      loadFont("InstrumentSans-SemiBold.ttf", "InstrumentSans", "bold"),
    ]);
    serif = "Newsreader";
    sans = "InstrumentSans";
  } catch {
    /* built-in fonts */
  }

  const setFont = (
    family: string,
    style: "normal" | "bold",
    size: number,
    color = INK,
  ) => {
    pdf.setFont(family, style);
    pdf.setFontSize(size);
    pdf.setTextColor(color);
  };
  // Word-wraps text to a width. The library's own splitter chops over-long words by character,
  // so lines are built here instead: break at spaces, then after hyphens and slashes, and only
  // split by characters when a single piece is wider than the column.
  const wrap = (value: string, width: number): string[] => {
    const limit = Math.max(10, width);
    const fits = (text: string) => pdf.getTextWidth(text) <= limit + 0.5;
    const out: string[] = [];
    String(value)
      .split("\n")
      .forEach((line) => {
        if (!line.trim()) return out.push(" ");
        let current = "";
        line
          .trim()
          .split(/ +/)
          .forEach((word) => {
            const pieces = word.match(/[^-/_.]+[-/_.]?|[-/_.]/g) || [word];
            pieces.forEach((piece, index) => {
              const joiner = index === 0 && current ? " " : "";
              if (fits(current + joiner + piece)) {
                current += joiner + piece;
                return;
              }
              if (current) {
                out.push(current);
                current = "";
              }
              if (fits(piece)) {
                current = piece;
                return;
              }
              for (const character of piece) {
                if (current && !fits(current + character)) {
                  out.push(current);
                  current = character;
                } else current += character;
              }
            });
          });
        out.push(current);
      });
    return out;
  };
  const fit = (value: string, width: number) => {
    if (pdf.getTextWidth(value) <= width) return value;
    let out = value;
    while (out.length > 1 && pdf.getTextWidth(`${out}…`) > width)
      out = out.slice(0, -1);
    return `${out}…`;
  };
  const drawHeader = () => {
    setFont(sans, "normal", 7, MUTED);
    pdf.text(report.title, margin, 22);
    y = 62;
  };
  const newPage = (next: "portrait" | "landscape" = orientation) => {
    orientation = next;
    pdf.addPage("a4", next);
    pageWidth = pdf.internal.pageSize.getWidth();
    pageHeight = pdf.internal.pageSize.getHeight();
    cw = pageWidth - margin * 2;
    bottom = pageHeight - 56;
    drawHeader();
  };
  const ensure = (height: number) => {
    if (y + height <= bottom) return;
    newPage();
  };

  // ---- blocks -------------------------------------------------------------
  const BODY = 10.5;
  const LEAD = BODY * 1.55;

  const paragraph = (value: string) => {
    setFont(sans, "normal", BODY);
    wrap(value, cw).forEach((line) => {
      ensure(LEAD);
      setFont(sans, "normal", BODY);
      pdf.text(line, margin, y);
      y += LEAD;
    });
    y += 6;
  };
  const bullets = (items: string[], ordered = false) => {
    items.forEach((item, index) => {
      setFont(sans, "normal", BODY);
      const lines = wrap(item, cw - 22);
      ensure(LEAD * Math.min(lines.length, 2));
      if (ordered) pdf.text(`${index + 1}.`, margin + 2, y);
      else {
        pdf.setFillColor(INK);
        pdf.circle(margin + 6, y - 3.5, 1.6, "F");
      }
      lines.forEach((line) => {
        ensure(LEAD);
        setFont(sans, "normal", BODY);
        pdf.text(line, margin + 22, y);
        y += LEAD;
      });
      y += 3;
    });
    y += 6;
  };
  const subheading = (value: string) => {
    ensure(60);
    y += 4;
    setFont(serif, "normal", 13);
    pdf.text(value, margin, y);
    y += 18;
  };

  const callout = (title: string | undefined, value: string) => {
    setFont(sans, "normal", 9.5);
    const lines = wrap(value, cw - 30);
    const height = 18 + (title ? 14 : 0) + lines.length * 14;
    ensure(Math.min(height, 120));
    pdf.setFillColor(TINT);
    pdf.roundedRect(margin, y, cw, height, 6, 6, "F");
    pdf.setFillColor(NAVY);
    pdf.rect(margin, y, 3, height, "F");
    let ty = y + 16;
    if (title) {
      setFont(sans, "bold", 9);
      pdf.text(title, margin + 16, ty);
      ty += 14;
    }
    setFont(sans, "normal", 9.5);
    lines.forEach((line) => {
      pdf.text(line, margin + 16, ty);
      ty += 14;
    });
    y += height + 14;
  };

  const code = (label: string | undefined, value: string) => {
    setFont("courier", "normal", 8.5);
    const lines = wrap(value, cw - 28);
    const height = 20 + (label ? 12 : 0) + lines.length * 11.5;
    ensure(Math.min(height, 140));
    pdf.setFillColor(NAVY);
    pdf.roundedRect(margin, y, cw, height, 6, 6, "F");
    let ty = y + 15;
    if (label) {
      setFont(sans, "normal", 7, "#9aa6c0");
      pdf.text(label.toUpperCase(), margin + 14, ty);
      ty += 13;
    }
    setFont("courier", "normal", 8.5, "#e8ecf5");
    lines.forEach((line) => {
      pdf.text(line, margin + 14, ty);
      ty += 11.5;
    });
    y += height + 14;
  };

  const cards = (
    items: { title: string; body: string; tag?: string }[],
    columns = 3,
  ) => {
    const cols = Math.max(1, Math.min(columns, items.length));
    const gap = 10;
    const width = (cw - gap * (cols - 1)) / cols;
    for (let start = 0; start < items.length; start += cols) {
      const row = items.slice(start, start + cols);
      setFont(sans, "normal", 9.5);
      const bodies = row.map((card) => wrap(card.body, width - 24));
      const height =
        18 +
        14 +
        (row.some((c) => c.tag) ? 12 : 0) +
        Math.max(...bodies.map((l) => l.length)) * 13.5 +
        12;
      ensure(Math.min(height, 260));
      row.forEach((card, index) => {
        const x = margin + index * (width + gap);
        pdf.setFillColor(TINT);
        pdf.roundedRect(x, y, width, height, 8, 8, "F");
        setFont(serif, "normal", 12.5);
        pdf.text(card.title, x + 12, y + 20);
        let ty = y + 34;
        if (card.tag) {
          setFont(sans, "normal", 7, MUTED);
          pdf.text(card.tag.toUpperCase(), x + 12, ty);
          ty += 12;
        }
        setFont(sans, "normal", 9.5);
        bodies[index].forEach((line) => {
          pdf.text(line, x + 12, ty + 4);
          ty += 13.5;
        });
      });
      y += height + 10;
    }
    y += 6;
  };

  type Cell = { text: string; bullet: boolean; cont: boolean };
  const cellLines = (
    value: string,
    width: number,
    bold = false,
    size = 8.7,
  ): Cell[] => {
    setFont(sans, bold ? "bold" : "normal", size);
    const lines: Cell[] = [];
    String(value)
      .split("\n")
      .forEach((line) => {
        const bullet = line.startsWith("• ");
        const body = bullet ? line.slice(2) : line;
        wrap(body, bullet ? width - 9 : width).forEach((part, index) =>
          lines.push({
            text: part,
            bullet: bullet && index === 0,
            cont: bullet && index > 0,
          }),
        );
      });
    return lines;
  };
  const table = (
    columns: string[],
    rows: string[][],
    firstColumnBold = false,
    equal = false,
  ) => {
    const padX = 7;
    const padY = 6;
    const size = 8.7;
    const lead = size * 1.45;
    // Column widths follow content length so short columns (#, weight) stay narrow
    const weights = columns.map((column, index) => {
      const lengths = rows.map((row) =>
        Math.max(
          ...String(row[index] ?? "")
            .split("\n")
            .map((l) => l.length),
          1,
        ),
      );
      const avg =
        lengths.reduce((a, b) => a + b, 0) / Math.max(1, lengths.length);
      const base = Math.max(column.length, Math.min(avg, 70));
      return (
        Math.max(index === 0 && firstColumnBold ? 13 : 5, Math.min(base, 60)) **
        0.85
      );
    });
    // Never let a column get narrower than its longest single word, so words are not split mid-word
    const longestWord = (value: string, bold: boolean) => {
      setFont(sans, bold ? "bold" : "normal", bold ? 8.2 : size);
      return Math.max(
        0,
        ...String(value)
          .split(/\s+/)
          .flatMap((word) => word.match(/[^-/_.]+[-/_.]?|[-/_.]/g) || [word])
          .map((piece) => pdf.getTextWidth(piece.replace(/^•$/, ""))),
      );
    };
    const minWidths = columns.map(
      (column, index) =>
        Math.max(
          longestWord(column, true),
          ...rows.map((row) => longestWord(String(row[index] ?? ""), false)),
        ) +
        padX * 2 +
        4,
    );
    let widths: number[];
    if (equal) {
      widths = columns.map(() => cw / columns.length);
    } else {
      const total = weights.reduce((a, b) => a + b, 0);
      widths = weights.map((w) => (w / total) * cw);
      // Raise squeezed columns to their minimum, taking the space from the roomiest ones
      for (let pass = 0; pass < 6; pass += 1) {
        const short = widths.map((w, i) => Math.max(0, minWidths[i] - w));
        const deficit = short.reduce((a, b) => a + b, 0);
        if (deficit < 0.5) break;
        const donors = widths.map((w, i) =>
          short[i] ? 0 : Math.max(0, w - minWidths[i]),
        );
        const donorTotal = donors.reduce((a, b) => a + b, 0) || 1;
        widths = widths.map((w, i) =>
          short[i] ? w + short[i] : w - (donors[i] / donorTotal) * deficit,
        );
      }
    }
    // If even the minimum widths cannot fit, scale to the page and let long words break
    const totalWidth = widths.reduce((a, b) => a + b, 0);
    if (totalWidth > cw + 0.5)
      widths = widths.map((width) => (width / totalWidth) * cw);
    const xs = widths.map(
      (_, i) => margin + widths.slice(0, i).reduce((a, b) => a + b, 0),
    );

    const drawHead = () => {
      const head = columns.map((c, i) => {
        setFont(sans, "bold", 8.2, HEAD_TEXT);
        return wrap(c, widths[i] - padX * 2);
      });
      const height =
        Math.max(...head.map((l) => l.length)) * lead + padY * 2 - 2;
      pdf.setFillColor(TINT);
      pdf.rect(margin, y, cw, height, "F");
      pdf.setDrawColor(RULE);
      widths.forEach((w, i) => pdf.rect(xs[i], y, w, height, "S"));
      setFont(sans, "bold", 8.2, HEAD_TEXT);
      head.forEach((lines, i) =>
        lines.forEach((line, li) =>
          pdf.text(line, xs[i] + padX, y + padY + 7 + li * lead),
        ),
      );
      y += height;
    };

    ensure(60);
    drawHead();
    rows.forEach((row) => {
      const cells = row.map((cell, i) =>
        cellLines(cell, widths[i] - padX * 2, firstColumnBold && i === 0, size),
      );
      const height =
        Math.max(...cells.map((l) => l.length), 1) * lead + padY * 2 - 2;
      if (y + height > bottom) {
        newPage();
        drawHead();
      }
      pdf.setDrawColor(RULE);
      widths.forEach((w, i) => pdf.rect(xs[i], y, w, height, "S"));
      cells.forEach((lines, i) => {
        const bold = firstColumnBold && i === 0;
        lines.forEach((line, li) => {
          const ty = y + padY + 7 + li * lead;
          setFont(sans, bold ? "bold" : "normal", size);
          if (line.bullet) {
            pdf.setFillColor(INK);
            pdf.circle(xs[i] + padX + 2, ty - 2.6, 1, "F");
          }
          pdf.text(
            line.text,
            xs[i] + padX + (line.bullet || line.cont ? 9 : 0),
            ty,
          );
        });
      });
      y += height;
    });
    y += 16;
  };

  const bars = (
    title: string,
    items: { label: string; value: number; highlight?: boolean }[],
    unit = "",
    maxValue?: number,
    legend?: [string, string],
  ) => {
    const max = maxValue || Math.max(1, ...items.map((i) => i.value));
    const rowH = 21;
    const height = 20 + 16 + items.length * rowH + 4;
    ensure(Math.min(height, 200));
    pdf.setDrawColor(RULE);
    pdf.roundedRect(margin, y, cw, height, 8, 8, "S");
    setFont(sans, "bold", 9.5);
    pdf.text(title, margin + 14, y + 20);
    if (legend) {
      setFont(sans, "normal", 7.5, MUTED);
      const w2 = pdf.getTextWidth(legend[1]);
      const w1 = pdf.getTextWidth(legend[0]);
      let lx = margin + cw - 14 - w2;
      pdf.text(legend[1], lx, y + 19);
      pdf.setFillColor(SOFT);
      pdf.roundedRect(lx - 12, y + 12.5, 8, 8, 2, 2, "F");
      lx -= 12 + 16 + w1;
      pdf.text(legend[0], lx, y + 19);
      pdf.setFillColor(NAVY);
      pdf.roundedRect(lx - 12, y + 12.5, 8, 8, 2, 2, "F");
    }
    const labelW = cw * 0.3;
    const trackX = margin + 14 + labelW + 8;
    const trackW = cw - 28 - labelW - 8 - 42;
    let ry = y + 40;
    items.forEach((item) => {
      setFont(sans, "normal", 8.7);
      pdf.text(fit(item.label, labelW), margin + 14, ry + 3);
      pdf.setFillColor(TINT);
      pdf.roundedRect(trackX, ry - 6, trackW, 10, 5, 5, "F");
      const fill = Math.max(0, Math.min(1, item.value / max)) * trackW;
      if (fill > 0) {
        pdf.setFillColor(item.highlight ? NAVY : SOFT);
        pdf.roundedRect(trackX, ry - 6, Math.max(fill, 8), 10, 5, 5, "F");
      }
      setFont(sans, "bold", 8.7);
      pdf.text(`${item.value}${unit}`, margin + cw - 14, ry + 3, {
        align: "right",
      });
      ry += rowH;
    });
    y += height + 14;
  };

  const segments = (
    title: string,
    items: { label: string; value: number }[],
  ) => {
    const total = items.reduce((s, i) => s + i.value, 0) || 1;
    const height = 20 + 26 + 22;
    ensure(height + 10);
    pdf.setDrawColor(RULE);
    pdf.roundedRect(margin, y, cw, height, 8, 8, "S");
    setFont(sans, "bold", 9.5);
    pdf.text(title, margin + 14, y + 20);
    const barW = cw - 28;
    let x = margin + 14;
    items.forEach((item, index) => {
      const w = (item.value / total) * barW;
      pdf.setFillColor(SEGMENTS[index % SEGMENTS.length]);
      pdf.rect(x, y + 30, w, 16, "F");
      if (w > 14) {
        setFont(sans, "bold", 8, "#ffffff");
        pdf.text(String(item.value), x + w / 2, y + 41, { align: "center" });
      }
      x += w;
    });
    let lx = margin + 14;
    items.forEach((item, index) => {
      pdf.setFillColor(SEGMENTS[index % SEGMENTS.length]);
      pdf.roundedRect(lx, y + 54, 7, 7, 2, 2, "F");
      const label = `${item.label} (${item.value})`;
      setFont(sans, "normal", 8, MUTED);
      pdf.text(label, lx + 11, y + 60.5);
      lx += 11 + pdf.getTextWidth(label) + 16;
    });
    y += height + 14;
  };

  const renderBlock = (block: Block) => {
    switch (block.t) {
      case "heading":
        return subheading(block.text);
      case "paragraph":
        return paragraph(block.text);
      case "bullets":
        return bullets(block.items, block.ordered);
      case "callout":
        return callout(block.title, block.text);
      case "code":
        return code(block.label, block.text);
      case "cards":
        return cards(block.items, block.columns);
      case "table":
        return table(
          block.columns,
          block.rows,
          block.firstColumnBold,
          block.equal,
        );
      case "bars":
        return bars(
          block.title,
          block.items,
          block.unit,
          block.max,
          block.legend,
        );
      case "segments":
        return segments(block.title, block.items);
    }
  };

  // ---- cover --------------------------------------------------------------
  drawHeader();
  y = 78;
  setFont(serif, "normal", 26);
  (pdf.splitTextToSize(report.title, cw) as string[]).forEach((line) => {
    pdf.text(line, margin, y);
    y += 28.5;
  });
  y += 8;
  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  setFont(sans, "normal", 8.5);
  let pillX = margin;
  [date, report.eyebrow].forEach((label, index) => {
    const width = pdf.getTextWidth(label) + 16;
    pdf.setFillColor(TINT);
    pdf.roundedRect(pillX, y - 10, width, 17, 8.5, 8.5, "F");
    setFont(sans, "normal", 8.5);
    pdf.text(label, pillX + 8, y + 2);
    pillX += width + (index === 0 ? 18 : 0);
    if (index === 0) {
      setFont(sans, "normal", 8.5, MUTED);
      pdf.text("·", pillX - 12, y + 2);
    }
  });
  y += 30;

  if (report.stats.length) {
    const gap = 8;
    const tileW = (cw - gap * (report.stats.length - 1)) / report.stats.length;
    report.stats.forEach((stat, index) => {
      const x = margin + index * (tileW + gap);
      pdf.setFillColor(TINT);
      pdf.roundedRect(x, y, tileW, 52, 8, 8, "F");
      setFont(serif, "normal", 21);
      pdf.text(stat.value, x + 10, y + 26);
      setFont(sans, "normal", 7.5, HEAD_TEXT);
      pdf.text(fit(stat.label, tileW - 16), x + 10, y + 38);
      if (stat.sub) {
        setFont(sans, "normal", 6.5, MUTED);
        pdf.text(fit(stat.sub, tileW - 16), x + 10, y + 47);
      }
    });
    y += 52 + 26;
  }

  // ---- sections -----------------------------------------------------------
  report.sections.forEach((section) => {
    const wanted = isWide(section) ? "landscape" : "portrait";
    if (wanted !== orientation) newPage(wanted);
    else ensure(90);
    setFont(serif, "normal", 17);
    pdf.text(section.title, margin, y);
    y += 22;
    section.blocks.forEach(renderBlock);
    y += 12;
  });

  const totalPages = pdf.getNumberOfPages();
  for (let page = 1; page <= totalPages; page += 1) {
    pdf.setPage(page);
    pageWidth = pdf.internal.pageSize.getWidth();
    pageHeight = pdf.internal.pageSize.getHeight();
    setFont(sans, "normal", 7, FAINT);
    pdf.text(
      `Page ${page} of ${totalPages}`,
      pageWidth - margin,
      pageHeight - 30,
      { align: "right" },
    );
  }
  pdf.save(`${filename}.pdf`);
}
