export const STATS_KEY = "szkolne-quizy:stats:v1";

export const emptyStats = () => ({ units: {}, reviews: {} });

export function loadStats(storage = globalThis.localStorage) {
  try {
    const data = JSON.parse(storage?.getItem(STATS_KEY) ?? "{}");
    return { units: data.units ?? {}, reviews: data.reviews ?? {} };
  } catch {
    return emptyStats();
  }
}

export function saveStats(stats, storage = globalThis.localStorage) {
  try {
    storage?.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // Private mode or full storage: the game still works, only without history.
  }
}

export function recordAnswer(stats, unit, ok) {
  const r = stats.units[unit] ?? { asked: 0, wrong: 0, streak: 0 };
  const next = { asked: r.asked + 1, wrong: r.wrong + (ok ? 0 : 1), streak: ok ? r.streak + 1 : 0 };
  return { ...stats, units: { ...stats.units, [unit]: next } };
}

export const isMastered = (record, streakToMaster) => !!record && record.streak >= streakToMaster;

export const isHard = (record, streakToMaster) => !!record && record.wrong > 0 && record.streak < streakToMaster;

// A review keeps per key its streak of correct answers in that review (older data stored a boolean).
export const reviewStreak = (value) => (value === true ? 1 : value || 0);

export function recordReviewAnswer(stats, review, key, ok, date = new Date().toISOString()) {
  const r = stats.reviews[review] ?? { keys: {} };
  const streak = ok ? reviewStreak(r.keys[key]) + 1 : 0;
  return { ...stats, reviews: { ...stats.reviews, [review]: { keys: { ...r.keys, [key]: streak }, last: date } } };
}

export function resetReview(stats, review) {
  const { [review]: _, ...reviews } = stats.reviews;
  return { ...stats, reviews };
}

export function clearUnits(stats, units) {
  const drop = new Set(units);
  return { ...stats, units: Object.fromEntries(Object.entries(stats.units).filter(([u]) => !drop.has(u))) };
}
