import { useState } from "preact/hooks";
import { chapterQuizzes } from "../content.js";
import { chapterMeta } from "../format.js";
import { href } from "../router.js";
import { subjectMeta } from "./HomePage.jsx";
import { Icon } from "./Icon.jsx";

const OPEN_KEY = "szkolne-quizy:open-chapters";

function loadOpen() {
  try {
    return JSON.parse(localStorage.getItem(OPEN_KEY)) ?? {};
  } catch {
    return {};
  }
}

const quizLabel = (q) => (q.number ? `${q.number} ${q.title}` : q.title);

export function SubjectPage({ subject: s }) {
  const [open, setOpen] = useState(loadOpen);

  const toggle = (key, isOpen) => {
    const next = { ...open, [key]: !isOpen };
    setOpen(next);
    try {
      localStorage.setItem(OPEN_KEY, JSON.stringify(next));
    } catch {
      // Not persisted; only the current visit remembers it.
    }
  };

  return (
    <main class="view subject-page">
      <header class="subject-head">
        <h1 class="subject-title">{s.name}</h1>
        <p class="muted subject-meta">{subjectMeta(s)}</p>
      </header>

      {s.chapters.length ? (
        <section class="block">
          <div class="block-head"><h2 class="heading--3">Rozdziały</h2></div>
          <div class="chapter-list">
            {s.chapters.map((c, i) => {
              const key = `${s.id}/${c.id}`;
              const isOpen = open[key] ?? i === 0;
              const quizzes = chapterQuizzes(c);
              return (
                <div key={c.id} class="chapter-row">
                  <div class="chapter-main">
                    <button
                      class="chevron"
                      onClick={() => toggle(key, isOpen)}
                      aria-expanded={isOpen}
                      aria-label={isOpen ? "Zwiń podrozdziały" : "Pokaż podrozdziały"}
                    >
                      <Icon name="keyboard_arrow_down" />
                    </button>
                    <a class="chapter-link" href={href(key)}>
                      <span class={`tile tile--num${i % 2 ? " tile--alt" : ""}`}>{c.id}</span>
                      <div class="chapter-text">
                        <h3 class="chapter-name heading--5">{c.title}</h3>
                        <span class="meta">
                          {chapterMeta(c)}
                        </span>
                      </div>
                      <Icon name="arrow_forward" class="arrow" />
                    </a>
                  </div>
                  {isOpen && (
                    <ul class="chapter-quizzes">
                      {quizzes.map((q) => (
                        <li key={q.path} class={`quiz-row quiz-row--${q.kind}`}>
                          <span class="quiz-row-dot" />
                          <span class="quiz-row-name">{quizLabel(q)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <p class="empty">Tu wkrótce pojawią się quizy.</p>
      )}
    </main>
  );
}
