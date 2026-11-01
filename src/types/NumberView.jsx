import { useRef, useState } from "preact/hooks";
import { checkNumber, groupThousands, parseNumber } from "./number.js";

export function NumberView({ question: q, onSubmit }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  // A space typed by the child starts a mixed number (1 2/3), so grouping pauses until
  // the value has no spaces again.
  const manualSpace = useRef(false);
  const expectsFraction = parseNumber(q.answer)?.form !== "decimal";

  const submit = (e) => {
    e.preventDefault();
    if (result !== null || !value.trim()) return;
    const ok = checkNumber(q, value);
    setResult(ok);
    onSubmit(ok);
  };

  const input = (e) => {
    const el = e.currentTarget;
    const raw = el.value;
    if (e.data === " ") manualSpace.current = true;
    if (!raw.includes(" ")) manualSpace.current = false;
    const next = manualSpace.current ? raw : groupThousands(raw);
    if (next !== raw) {
      // Keep the caret after the same number of non-space characters.
      const keep = raw.slice(0, el.selectionStart).replace(/ /g, "").length;
      let pos = 0;
      for (let seen = 0; pos < next.length && seen < keep; pos++) if (next[pos] !== " ") seen++;
      el.value = next;
      el.setSelectionRange(pos, pos);
    }
    setValue(next);
  };

  return (
    <form onSubmit={submit}>
      {expectsFraction && (
        <p class="hint">Ułamek zapisz jako 3/4, liczbę mieszaną jako 1 2/3. Pamiętaj o skróceniu ułamka.</p>
      )}
      <input
        class={`answer-input${result === null ? "" : result ? " answer-input--correct" : " answer-input--wrong"}`}
        type="text"
        inputMode={expectsFraction ? "text" : "decimal"}
        autoComplete="off"
        aria-label="Twoja odpowiedź"
        autoFocus
        value={value}
        readOnly={result !== null}
        onInput={input}
      />
      {result === null && (
        <div class="actions">
          <button class="primary" type="submit" disabled={!value.trim()}>Sprawdź</button>
        </div>
      )}
    </form>
  );
}
