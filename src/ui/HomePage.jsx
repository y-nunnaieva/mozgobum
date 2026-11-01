import { rozdzialow } from "../format.js";
import { paletteVar } from "../palette.js";
import { href } from "../router.js";
import { Icon } from "./Icon.jsx";
import { Mascot } from "./Mascot.jsx";

export function subjectMeta(s) {
  if (!s.chapters.length) return "Wkrótce";
  return `${s.chapters.length} ${rozdzialow(s.chapters.length)}`;
}

export function HomePage({ subjects }) {
  return (
    <main class="view home-page">
      <section class="welcome">
        <Mascot antenna class="hero-mascot" />
        <div class="hero-text">
          <span class="speech">Bumcio mówi:</span>
          <h1>Cześć!</h1>
          <p>Wybierz przedmiot, i rozwiązuj quizy.</p>
        </div>
      </section>
      <section class="block">
        <h2 class="heading--5">Wszystkie przedmioty</h2>
        <div class="subject-grid">
          {subjects.map((s) => (
            <a key={s.id} class="subject-card hue" href={href(s.id)} style={{ "--c": paletteVar(s.color) }}>
              <Icon name={s.glyph} class="bg-glyph" />
              <span class="tile tile--big"><Icon name={s.glyph} /></span>
              <div class="subject-card-text">
                <h3 class="heading--3">{s.name}</h3>
                <span class="meta">{subjectMeta(s)}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
