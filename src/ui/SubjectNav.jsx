import { paletteVar } from "../palette.js";
import { href } from "../router.js";
import { Icon } from "./Icon.jsx";

export function SubjectNav({ subjects, current, locked }) {
  return (
    <div class={`nav-list${locked ? " nav-list--locked" : ""}`} inert={locked}>
      {subjects.map((s) => (
        <a
          key={s.id}
          class="nav-subject hue"
          href={href(s.id)}
          style={{ "--c": paletteVar(s.color) }}
          aria-current={s.id === current ? "page" : undefined}
        >
          <span class="tile tile--plain"><Icon name={s.glyph} /></span>
          <span class="nav-name">{s.name}</span>
        </a>
      ))}
    </div>
  );
}
