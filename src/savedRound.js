import { allQuestions } from "./content.js";

export const ROUND_KEY = "szkolne-quizy:round";
export const ROUND_MAX_AGE = 24 * 60 * 60 * 1000;

const write = (value, storage) => {
  try {
    if (value === null) storage?.removeItem(ROUND_KEY);
    else storage?.setItem(ROUND_KEY, JSON.stringify(value));
  } catch {
    // Only a convenience: a lost round can be played again.
  }
};

// Phones drop a locked tab from memory and load it again on return, so the round has to outlive the page.
export function saveRound(quiz, mode, questions, results, { storage = globalThis.localStorage, now = Date.now() } = {}) {
  const all = allQuestions(quiz);
  const index = new Map(all.map((q, i) => [q, i]));
  write({
    path: quiz.path,
    mode,
    at: now,
    questions: questions.map((q) => [index.get(q), q.unit]),
    results,
  }, storage);
}

function read(storage) {
  try {
    return JSON.parse(storage?.getItem(ROUND_KEY));
  } catch {
    return null;
  }
}

// Effect cleanups run after the next page has mounted: a page may only forget its own round.
export function clearRound(quiz, storage = globalThis.localStorage) {
  if (read(storage)?.path === quiz.path) write(null, storage);
}

export function loadRound(quiz, { storage = globalThis.localStorage, now = Date.now() } = {}) {
  const saved = read(storage);
  if (saved?.path !== quiz.path || !(now - saved.at < ROUND_MAX_AGE)) return null;
  const { mode, questions: refs, results } = saved;
  if (!Array.isArray(refs) || !refs.length || !Array.isArray(results) || results.length > refs.length) return null;
  const all = allQuestions(quiz);
  const questions = refs.map(([i, unit]) => (all[i]?.unit === unit ? all[i] : null));
  // New content may have moved the questions; better a fresh round than wrong answers in the result.
  if (questions.includes(null)) return null;
  return { mode, questions, results };
}
