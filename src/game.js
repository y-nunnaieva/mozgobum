export function shuffle(items, random = Math.random) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function createRound(questions) {
  return { queue: [...questions], total: questions.length, mistakes: 0 };
}

export const currentQuestion = (round) => round.queue[0] ?? null;

export const isFinished = (round) => round.queue.length === 0;

// Every question is asked once; a wrong one is retrained later through the hard questions.
export function submitAnswer(round, ok) {
  return { ...round, queue: round.queue.slice(1), mistakes: round.mistakes + (ok ? 0 : 1) };
}

export function starsFor(mistakes, total) {
  if (mistakes === 0) return 3;
  return mistakes / total <= 0.2 ? 2 : 1;
}
