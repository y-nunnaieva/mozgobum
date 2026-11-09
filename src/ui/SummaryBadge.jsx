import { progress } from "../modes.js";

export function SummaryBadge({ quiz, stats }) {
  const { done, total } = progress(quiz.summary, stats);
  if (done === 0) return null;
  const lit = done === total ? 3 : done * 2 >= total ? 2 : 1;
  return (
    <span class="summary-badge meta">
      <span class="summary-dots" role="img" aria-label={`${lit} z 3`}>
        {[1, 2, 3].map((n) => <span key={n} class={`summary-dot${n <= lit ? " summary-dot--on" : ""}`} />)}
      </span>
      podsumowanie
    </span>
  );
}
