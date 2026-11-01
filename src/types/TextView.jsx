import { useState } from "preact/hooks";
import { checkText } from "./text.js";

export function TextView({ question: q, onSubmit }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (result !== null || !value.trim()) return;
    const ok = checkText(q, value);
    setResult(ok);
    onSubmit(ok);
  };

  return (
    <form onSubmit={submit}>
      {/* Autocorrect would silently fix the child's spelling, which is exactly what is being checked.
          Set as a plain attribute: Preact would write "off" into the boolean `autocorrect` property, which means on. */}
      <input
        ref={(el) => el?.setAttribute("autocorrect", "off")}
        class={`answer-input${result === null ? "" : result ? " answer-input--correct" : " answer-input--wrong"}`}
        type="text"
        autoComplete="off"
        autocapitalize="off"
        spellcheck={false}
        lang="en"
        aria-label="Twoja odpowiedź"
        autoFocus
        value={value}
        readOnly={result !== null}
        onInput={(e) => setValue(e.currentTarget.value)}
      />
      {result === null && (
        <div class="actions">
          <button class="primary" type="submit" disabled={!value.trim()}>Sprawdź</button>
        </div>
      )}
    </form>
  );
}
