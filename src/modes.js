import { allQuestions, REVIEW_SKILL_STREAK, SKILL_STREAK } from "./content.js";
import { shuffle } from "./game.js";
import { clearUnits, isHard, isMastered, reviewStreak } from "./stats.js";

// Max questions per round; bigger sections (math variants, review sections) are sampled.
export const ROUND_SIZE = 16;
// Rounds over a whole chapter, several subchapters or a summary are longer.
export const CHAPTER_ROUND_SIZE = 22;
// A review round always has this many tasks from each included practice quiz.
export const REVIEW_PRACTICE_MIN = 2;
// Already mastered questions mixed into a round, to catch lucky guesses.
export const CHECKS = 2;
export const REVIEW_CHECKS = 3;
// Variants of one hard task type per round: SKILL_STREAK to leave the hard ones, the rest leave room for a slip.
export const HARD_VARIANTS = 4;

export const isReview = (quiz) => quiz.kind === "review";

export const roundSize = (quiz) => (quiz.include || isReview(quiz) ? CHAPTER_ROUND_SIZE : ROUND_SIZE);

// Reviews count twin questions once; everywhere else the stats unit is the key.
export const progressKey = (quiz, q) => (isReview(quiz) ? q.key : q.unit);

export const quizUnits = (quiz) => [...new Set(allQuestions(quiz).map((q) => q.unit))];

export const quizKeys = (quiz) => [...new Set(allQuestions(quiz).map((q) => progressKey(quiz, q)))];

export const hasHardMode = (quiz) => quizUnits(quiz).length >= 2;

export const clearQuiz = (stats, quiz) => clearUnits(stats, quizUnits(quiz));

// Correct answers in a row a review key needs: a task type is checked twice, a question once.
export const reviewNeed = (q) => (q.skill ? REVIEW_SKILL_STREAK : 1);

function masteredFn(quiz, stats) {
  if (isReview(quiz)) {
    const keys = stats.reviews[quiz.review]?.keys ?? {};
    const need = new Map(allQuestions(quiz).map((q) => [q.key, reviewNeed(q)]));
    return (key) => reviewStreak(keys[key]) >= need.get(key);
  }
  const need = new Map(allQuestions(quiz).map((q) => [q.unit, q.streakToMaster]));
  return (unit) => isMastered(stats.units[unit], need.get(unit));
}

export function progress(quiz, stats) {
  const keys = quizKeys(quiz);
  const mastered = masteredFn(quiz, stats);
  return { done: keys.filter(mastered).length, total: keys.length };
}

const errorRate = (r) => r.wrong / r.asked;

export function hardUnits(quiz, stats) {
  if (isReview(quiz)) {
    const keys = stats.reviews[quiz.review]?.keys ?? {};
    return quizKeys(quiz).filter((k) => k in keys && reviewStreak(keys[k]) === 0);
  }
  const streakByUnit = new Map(allQuestions(quiz).map((q) => [q.unit, q.streakToMaster]));
  return [...streakByUnit]
    .filter(([unit, need]) => isHard(stats.units[unit], need))
    .map(([unit]) => unit)
    .sort((a, b) => {
      const ra = stats.units[a], rb = stats.units[b];
      return errorRate(rb) - errorRate(ra) || rb.wrong - ra.wrong;
    });
}

function groupByKey(quiz, random) {
  const groups = new Map();
  for (const q of shuffle(allQuestions(quiz), random)) {
    const k = progressKey(quiz, q);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(q);
  }
  return groups;
}

// Weakest first; skill units with many variants get a fresh random variant per turn.
function hardRound(quiz, stats, size, random) {
  const groups = groupByKey(quiz, random);
  const queues = hardUnits(quiz, stats).map((k) => groups.get(k));
  const picked = [];
  // Twin forms of one review key never share a round.
  const perKey = isReview(quiz) ? 1 : HARD_VARIANTS;
  for (let turn = 0; turn < perKey && picked.length < size && queues.some((qs) => qs.length > turn); turn++) {
    for (const qs of queues) if (qs.length > turn && picked.length < size) picked.push(qs[turn]);
  }
  return shuffle(picked, random);
}

// One variant per unit first, so many number variants don't crowd out the other questions.
function sampleRound(questions, size, random) {
  const seen = new Set();
  const first = [], rest = [];
  for (const q of shuffle(questions, random)) {
    if (seen.has(q.unit)) rest.push(q);
    else seen.add(q.unit), first.push(q);
  }
  if (first.length >= size) return first.slice(0, size);
  return shuffle([...first, ...rest.slice(0, size - first.length)], random);
}

// Not yet mastered keys first, plus a few mastered checks. When few are left, the round is short:
// replaying what is already known only wastes time. Once everything is mastered, it's a plain revision round.
function progressRound(quiz, stats, random) {
  const review = isReview(quiz);
  const size = roundSize(quiz);
  const groups = groupByKey(quiz, random);
  const mastered = masteredFn(quiz, stats);
  const keys = [...groups.keys()];
  const open = keys.filter((k) => !mastered(k));
  const pool = open.length ? open : keys;
  const checks = open.length ? keys.filter(mastered).slice(0, review ? REVIEW_CHECKS : CHECKS) : [];

  // Number tasks are few among many questions, so a review reserves room for them.
  const reserved = review
    ? quiz.sections.filter((s) => s.kind === "practice").flatMap((s) => {
      const own = new Set(s.questions.map((q) => q.key));
      return pool.filter((k) => own.has(k)).slice(0, REVIEW_PRACTICE_MIN);
    })
    : [];
  // A task type in a review comes with as many variants as it needs correct answers in a row, or more if the review asks.
  const taskVariants = (q) => (q.skill ? Math.max(reviewNeed(q), quiz.variants ?? 0) : 1);
  const variants = (k) => (review ? groups.get(k).slice(0, taskVariants(groups.get(k)[0])) : [groups.get(k)[0]]);
  const main = [];
  let room = size - checks.length;
  for (const k of [...reserved, ...pool.filter((k) => !reserved.includes(k))]) {
    const n = variants(k).length;
    if (n > room) continue;
    main.push(k);
    room -= n;
  }
  const picked = [...main.flatMap(variants), ...checks.map((k) => groups.get(k)[0])];

  // An open task type gets a second variant, enough to master it in one round, but no more: a few open types make a short round.
  // A revision round of mastered types is filled up with their variants.
  if (!review) {
    const more = open.length ? SKILL_STREAK : undefined;
    const extra = main.flatMap((k) => (groups.get(k)[0].skill ? groups.get(k).slice(1, more) : []));
    picked.push(...shuffle(extra, random).slice(0, size - picked.length));
  }
  return shuffle(picked, random);
}

export function buildRound(quiz, mode, stats, random = Math.random) {
  const size = roundSize(quiz);
  if (mode === "all") return progressRound(quiz, stats, random);
  if (mode === "hard") return hardRound(quiz, stats, size, random);
  const section = quiz.sections.find((s) => s.id === mode);
  if (!section) throw new Error(`Unknown mode ${mode}`);
  // A section plays like a small quiz: its open questions and a few checks; once all is mastered, a full sample.
  const sub = { ...quiz, sections: [section] };
  const mastered = masteredFn(sub, stats);
  if (allQuestions(sub).some((q) => !mastered(progressKey(sub, q)))) return progressRound(sub, stats, random);
  return sampleRound(section.questions, size, random);
}
