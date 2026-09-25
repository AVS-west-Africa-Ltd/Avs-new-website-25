import type { ProgressStage } from "./GenerationProgress";

// Timed messages for actions without real server progress. Each describes what is genuinely
// happening at that point of the job; `at` is seconds since the action started.

export const INTAKE_STAGES: ProgressStage[] = [
  { at: 0, label: "Reading your source material…" },
  { at: 3, label: "Working out the problem and who has it…" },
  { at: 6, label: "Identifying your approach and what makes it different…" },
  { at: 9, label: "Finding the evidence in your text…" },
  { at: 13, label: "Tightening the wording…" },
];

export const PEOPLE_STAGES: ProgressStage[] = [
  { at: 0, label: "Reading your product core…" },
  { at: 4, label: "Working out the two co-founder roles you need…" },
  { at: 10, label: "Writing personas from user to buyer…" },
  { at: 20, label: "Adding pains, goals and buying triggers…" },
  { at: 28, label: "Checking everything fits together…" },
];

export const PLAN_STAGES: ProgressStage[] = [
  { at: 0, label: "Reading your product, team and personas…" },
  { at: 5, label: "Setting short and long-term goals…" },
  { at: 14, label: "Building a scorecard for each founder role…" },
  { at: 22, label: "Writing sourcing briefs and search strings…" },
  { at: 32, label: "Checking weights and consistency…" },
];

export const THESIS_STAGES: ProgressStage[] = [
  { at: 0, label: "Gathering your product core, team, personas and goals…" },
  { at: 6, label: "Writing the overview…" },
  { at: 16, label: "Assessing risks and open questions…" },
  { at: 30, label: "Pulling it together into a report…" },
  { at: 45, label: "Final polish…" },
];

export const SCORE_STAGES: ProgressStage[] = [
  { at: 0, label: "Reading the candidate's notes…" },
  { at: 3, label: "Scoring each criterion against the scorecard…" },
  { at: 8, label: "Weighing strengths and gaps…" },
  { at: 12, label: "Drafting a recommendation…" },
];

export const OUTREACH_STAGES: ProgressStage[] = [
  { at: 0, label: "Reading the candidate's notes and the role…" },
  { at: 3, label: "Drafting a personal message…" },
  { at: 7, label: "Checking the tone…" },
];

export const ASSIST_STAGES: ProgressStage[] = [
  { at: 0, label: "Reading your project…" },
  { at: 3, label: "Thinking it through…" },
  { at: 9, label: "Writing the answer…" },
];

export const CHECK_STAGES: ProgressStage[] = [
  { at: 0, label: "Reading every section of your project…" },
  { at: 5, label: "Cross-checking the team against the goals…" },
  { at: 12, label: "Looking for gaps and contradictions…" },
  { at: 20, label: "Writing up the review…" },
];
