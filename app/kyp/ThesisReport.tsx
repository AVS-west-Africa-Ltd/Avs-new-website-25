"use client";

import type { Block, Report } from "./report";
import styles from "./report.module.css";

const Cell = ({ value }: { value: string }) => {
  const lines = value.split("\n");
  if (lines.length > 1 && lines.every((line) => line.startsWith("• ")))
    return (
      <ul>
        {lines.map((line, index) => (
          <li key={index}>{line.slice(2)}</li>
        ))}
      </ul>
    );
  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </span>
      ))}
    </>
  );
};

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "heading":
      return <h4 className={styles.subheading}>{block.text}</h4>;
    case "paragraph":
      return <p className={styles.paragraph}>{block.text}</p>;
    case "bullets": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={styles.list}>
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className={styles.callout}>
          {block.title && <strong>{block.title}</strong>}
          <p>{block.text}</p>
        </aside>
      );
    case "code":
      return (
        <figure className={styles.code}>
          {block.label && <figcaption>{block.label}</figcaption>}
          <pre>{block.text}</pre>
        </figure>
      );
    case "cards":
      return (
        <div
          className={styles.cards}
          style={{
            gridTemplateColumns: `repeat(${block.columns || 3}, minmax(0, 1fr))`,
          }}
        >
          {block.items.map((card, index) => (
            <article key={index}>
              <div className={styles.cardHead}>
                <strong>{card.title}</strong>
                {card.tag && <small>{card.tag}</small>}
              </div>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      );
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) =>
                    cellIndex === 0 && block.firstColumnBold ? (
                      <th scope="row" key={cellIndex}>
                        <Cell value={cell} />
                      </th>
                    ) : (
                      <td key={cellIndex}>
                        <Cell value={cell} />
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "bars": {
      const max = block.max || Math.max(1, ...block.items.map((i) => i.value));
      return (
        <figure className={styles.chart}>
          <figcaption>
            <span>{block.title}</span>
            {block.legend && (
              <span className={styles.legend}>
                <i className={styles.dotStrong} /> {block.legend[0]}
                <i className={styles.dotSoft} /> {block.legend[1]}
              </span>
            )}
          </figcaption>
          {block.items.map((item, index) => (
            <div className={styles.barRow} key={index}>
              <span className={styles.barLabel}>{item.label}</span>
              <div
                className={styles.barTrack}
                role="img"
                aria-label={`${item.label}: ${item.value}${block.unit || ""}`}
              >
                <div
                  className={item.highlight ? styles.barStrong : styles.barSoft}
                  style={{
                    width: `${Math.min(100, (item.value / max) * 100)}%`,
                  }}
                />
              </div>
              <span className={styles.barValue}>
                {item.value}
                {block.unit}
              </span>
            </div>
          ))}
        </figure>
      );
    }
    case "segments": {
      const total = block.items.reduce((sum, item) => sum + item.value, 0) || 1;
      return (
        <figure className={styles.chart}>
          <figcaption>
            <span>{block.title}</span>
          </figcaption>
          <div className={styles.segmentBar}>
            {block.items.map((item, index) => (
              <div
                key={index}
                className={styles[`segment${index % 4}` as keyof typeof styles]}
                style={{ width: `${(item.value / total) * 100}%` }}
                title={`${item.label}: ${item.value}`}
              >
                {item.value}
              </div>
            ))}
          </div>
          <div className={styles.segmentLegend}>
            {block.items.map((item, index) => (
              <span key={index}>
                <i
                  className={
                    styles[`swatch${index % 4}` as keyof typeof styles]
                  }
                />
                {item.label} ({item.value})
              </span>
            ))}
          </div>
        </figure>
      );
    }
  }
}

export default function ThesisReport({ report }: { report: Report }) {
  return (
    <div className={styles.report}>
      <div className={styles.cover}>
        <span className={styles.eyebrow}>{report.eyebrow}</span>
        <h3>{report.title}</h3>
        <div className={styles.stats}>
          {report.stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              {stat.sub && <small>{stat.sub}</small>}
            </div>
          ))}
        </div>
      </div>
      {report.sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <h3>{section.title}</h3>
          {section.blocks.map((block, index) => (
            <BlockView key={index} block={block} />
          ))}
        </section>
      ))}
    </div>
  );
}
