// Exact set match: a partially correct multi-choice answer counts as wrong.
export function checkChoice(question, picked) {
  const chosen = new Set(picked);
  return chosen.size === question.correct.length && question.correct.every((c) => chosen.has(c));
}
