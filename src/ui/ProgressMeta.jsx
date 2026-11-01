import { allQuestions } from "../content.js";
import { countLabel, trudne } from "../format.js";
import { hardUnits, progress } from "../modes.js";
import { Icon } from "./Icon.jsx";
import { Meter } from "./Meter.jsx";

// "3/13 pytań · 2 trudne" + a thin meter, for a quiz or one of its sections.
export function ProgressMeta({ quiz, stats }) {
  const p = progress(quiz, stats);
  const hard = hardUnits(quiz, stats).length;
  const count = countLabel(allQuestions(quiz));
  // A single task type has no "n of total" to show, only whether it is mastered or hard.
  const single = p.total === 1;
  return (
    <>
      <span class="meta">
        {single ? count : `${p.done}/${count}`}
        {single && p.done > 0 && <> · <span class="mastered"><Icon name="check_circle" />opanowane</span></>}
        {hard > 0 && (single ? " · trudne" : ` · ${hard} ${trudne(hard)}`)}
      </span>
      {!single && <Meter {...p} thin />}
    </>
  );
}
