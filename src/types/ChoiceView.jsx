import { useMemo, useState } from "preact/hooks";
import { shuffle } from "../game.js";
import { MathText } from "../ui/MathText.jsx";
import { checkChoice } from "./choice.js";

export function ChoiceView({ question: q, onSubmit }) {
  const options = useMemo(
    () => shuffle([...q.correct.map((text) => ({ text, ok: true })), ...q.wrong.map((text) => ({ text, ok: false }))]),
    [q],
  );
  const multi = q.correct.length > 1;
  const [picked, setPicked] = useState(() => new Set());
  const [done, setDone] = useState(false);

  const submit = (set) => {
    setDone(true);
    onSubmit(checkChoice(q, [...set]));
  };

  const tap = (text) => {
    if (!multi) return setPicked(new Set([text]));
    const set = new Set(picked);
    set.has(text) ? set.delete(text) : set.add(text);
    setPicked(set);
  };

  const stateClass = (o) => {
    const isPicked = picked.has(o.text);
    if (!done) return isPicked ? " answer--selected" : "";
    if (o.ok) return isPicked || !multi ? " answer--correct" : " answer--missed";
    return isPicked ? " answer--wrong" : "";
  };

  return (
    <>
      {multi && <p class="hint">Zaznacz wszystkie poprawne odpowiedzi – jest ich więcej niż jedna.</p>}
      <div class="answers">
        {options.map((o) => (
          <button
            key={o.text}
            class={`answer${stateClass(o)}`}
            disabled={done}
            aria-pressed={multi ? picked.has(o.text) : undefined}
            onClick={() => tap(o.text)}
          >
            <span class="box">{done && (o.ok || picked.has(o.text)) ? (o.ok ? "✓" : "✗") : ""}</span>
            <span><MathText text={o.text} on={q.fractions} /></span>
          </button>
        ))}
      </div>
      {!done && (
        <div class="actions">
          <button class="primary" disabled={!picked.size} onClick={() => submit(picked)}>Sprawdź</button>
        </div>
      )}
    </>
  );
}
