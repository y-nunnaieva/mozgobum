// "2 1/3" or "3/4" inside a sentence; a whole part is taken only when it stands right before the fraction.
const FRACTION = /(?:(\d+) )?(\d+)\/(\d+)/g;

// Draws fractions stacked, as in the textbook. Only subjects with `fractions: true` use it,
// so a slash elsewhere (dates, "1/3 of the area" in prose) stays as written.
export function MathText({ text, on }) {
  if (!on || typeof text !== "string" || !text.includes("/")) return text;
  const parts = [];
  let last = 0;
  for (const m of text.matchAll(FRACTION)) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [plain, whole, num, den] = m;
    parts.push(
      <span key={m.index} class="frac-number" role="img" aria-label={plain}>
        {whole}
        <span class="frac" aria-hidden="true">
          <span class="frac-num">{num}</span>
          <span class="frac-den">{den}</span>
        </span>
      </span>,
    );
    last = m.index + plain.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}
