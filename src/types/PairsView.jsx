import { useMemo, useState } from "preact/hooks";
import { shuffle } from "../game.js";
import { checkPairs } from "./pairs.js";

// One side gets the wider column once its texts are this many times longer.
const WIDE_RATIO = 1.5;

export function PairsView({ question: q, onSubmit }) {
  const lefts = useMemo(() => shuffle(q.pairs.map((p) => p[0])), [q]);
  const rights = useMemo(() => shuffle(q.pairs.map((p) => p[1])), [q]);
  const wide = useMemo(() => {
    const chars = (side) => q.pairs.reduce((sum, p) => sum + p[side].length, 0);
    const [left, right] = [chars(0), chars(1)];
    return right >= left * WIDE_RATIO ? " pairs--wide-right" : left >= right * WIDE_RATIO ? " pairs--wide-left" : "";
  }, [q]);
  const [matched, setMatched] = useState({});
  const [active, setActive] = useState(null);
  const [done, setDone] = useState(false);

  const colorOf = (left) => ` answer--pair-${(lefts.indexOf(left) % 6) + 1}`;
  const leftOf = (right) => Object.keys(matched).find((l) => matched[l] === right);
  const without = (m, left) => Object.fromEntries(Object.entries(m).filter(([l]) => l !== left));

  const tapLeft = (left) => {
    if (matched[left]) {
      setMatched((m) => without(m, left));
      setActive(left);
    } else {
      setActive(active === left ? null : left);
    }
  };

  const tapRight = (right) => {
    const owner = leftOf(right);
    if (!active) {
      if (owner) setMatched((m) => without(m, owner));
      return;
    }
    setMatched((m) => ({ ...(owner ? without(m, owner) : m), [active]: right }));
    setActive(null);
  };

  const submit = () => {
    setDone(true);
    onSubmit(checkPairs(q, matched));
  };

  if (done) {
    return (
      <div class="result-list">
        {q.pairs.map(([left, right]) => {
          const ok = matched[left] === right;
          return (
            <div key={left} class={`result-item result-item--${ok ? "ok" : "bad"}`}>
              <b>{left}</b> – {right}
              {!ok && <small>Twoja odpowiedź: {matched[left]}</small>}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <p class="hint">Dotknij elementu po lewej, a potem pasującego po prawej.</p>
      <div class={`pairs${wide}`}>
        <div class="pairs-col">
          {lefts.map((left) => (
            <button
              key={left}
              class={`answer${matched[left] ? colorOf(left) : ""}${active === left ? " answer--active" : ""}`}
              aria-pressed={active === left}
              onClick={() => tapLeft(left)}
            >
              {left}
            </button>
          ))}
        </div>
        <div class="pairs-col">
          {rights.map((right) => {
            const owner = leftOf(right);
            return (
              <button key={right} class={`answer${owner ? colorOf(owner) : ""}`} onClick={() => tapRight(right)}>
                {right}
              </button>
            );
          })}
        </div>
      </div>
      <div class="actions">
        <button class="primary" disabled={Object.keys(matched).length !== lefts.length} onClick={submit}>Sprawdź</button>
      </div>
    </>
  );
}
