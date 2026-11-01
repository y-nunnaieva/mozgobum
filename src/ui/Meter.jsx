export function Meter({ done, total, thin }) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <span class={`meter${thin ? " meter--thin" : ""}`} aria-hidden="true">
      <span style={{ width: `${pct}%` }} />
    </span>
  );
}
