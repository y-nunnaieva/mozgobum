import { useMemo, useState } from "preact/hooks";
import { shuffle } from "../game.js";
import { checkOrder } from "./order.js";

export function OrderView({ question: q, onSubmit }) {
  const items = useMemo(() => shuffle(q.items), [q]);
  const [sequence, setSequence] = useState([]);
  const [done, setDone] = useState(false);

  const tap = (item) =>
    setSequence((seq) => (seq.includes(item) ? seq.filter((x) => x !== item) : [...seq, item]));

  const submit = () => {
    setDone(true);
    onSubmit(checkOrder(q, sequence));
  };

  if (done) {
    return (
      <div class="result-list">
        {q.items.map((item, i) => {
          const childPos = sequence.indexOf(item);
          return (
            <div key={item} class={`result-item result-item--${childPos === i ? "ok" : "bad"}`}>
              <b>{i + 1}.</b> {item}
              {childPos !== i && <small>Twoja pozycja: {childPos + 1}</small>}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <p class="hint">Dotykaj po kolei. Dotknij ponownie, żeby cofnąć.</p>
      <div class="answers">
        {items.map((item) => {
          const pos = sequence.indexOf(item);
          return (
            <button key={item} class={`answer${pos >= 0 ? " answer--selected" : ""}`} onClick={() => tap(item)}>
              <span class="box">{pos >= 0 ? pos + 1 : ""}</span>
              <span>{item}</span>
            </button>
          );
        })}
      </div>
      <div class="actions">
        <button class="primary" disabled={sequence.length !== items.length} onClick={submit}>Sprawdź</button>
      </div>
    </>
  );
}
