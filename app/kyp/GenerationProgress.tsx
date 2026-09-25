"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import styles from "./generationProgress.module.css";

export type ProgressStep = { id: string; label: string; done: boolean };
export type ProgressStage = { at: number; label: string };

type Props = {
  active: boolean;
  title: string;
  /** Real progress reported by the server: the parts of the job and whether each has finished. */
  steps?: ProgressStep[];
  /** Timed messages used until (or instead of) real progress. `at` is seconds since the start. */
  stages?: ProgressStage[];
  /** Typical duration in seconds; paces the bar and decides when to say it is taking longer. */
  estimate?: number;
};

export default function GenerationProgress({
  active,
  title,
  steps = [],
  stages = [],
  estimate = 20,
}: Props) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!active) return;
    setElapsed(0);
    const started = Date.now();
    const timer = window.setInterval(
      () => setElapsed(Math.floor((Date.now() - started) / 1000)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, [active]);

  if (!active) return null;

  const hasSteps = steps.length > 0;
  const doneCount = steps.filter((step) => step.done).length;
  const pending = steps.filter((step) => !step.done);

  let message: string;
  let percent: number;
  if (hasSteps) {
    // Real progress: the bar follows finished parts, with a little headroom for the part in flight
    percent = Math.min(
      96,
      (doneCount / steps.length) * 100 + 100 / steps.length / 2,
    );
    if (!pending.length) message = "Putting everything together…";
    else if (doneCount === 0)
      message = `Working on all ${steps.length} parts at once…`;
    else {
      const current = pending[Math.floor(elapsed / 3) % pending.length];
      message = `Writing: ${current.label}…`;
    }
  } else {
    const stage =
      [...stages].reverse().find((item) => item.at <= elapsed) || stages[0];
    message = stage?.label || "Working on it…";
    percent = 92 * (1 - Math.exp(-elapsed / Math.max(4, estimate / 2)));
  }
  const slow = elapsed > estimate * 1.4;

  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <strong>{title}</strong>
        <span className={styles.clock}>{elapsed}s</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-label={title}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
      >
        <div
          className={styles.fill}
          style={{ width: `${Math.max(4, percent)}%` }}
        />
      </div>
      <p
        className={styles.message}
        role="status"
        aria-live="polite"
        key={message}
      >
        {message}
      </p>
      {hasSteps && (
        <ul className={styles.steps}>
          {steps.map((step) => (
            <li
              key={step.id}
              className={step.done ? styles.done : styles.waiting}
            >
              <span className={styles.marker} aria-hidden="true">
                {step.done ? <Check size={12} strokeWidth={3} /> : <i />}
              </span>
              <span className={styles.stepLabel}>{step.label}</span>
            </li>
          ))}
        </ul>
      )}
      {hasSteps && (
        <small className={styles.count}>
          {doneCount} of {steps.length} parts finished
        </small>
      )}
      {slow && (
        <small className={styles.slow}>
          This is taking a little longer than usual. It&apos;s still working, so
          please keep this page open.
        </small>
      )}
    </div>
  );
}
