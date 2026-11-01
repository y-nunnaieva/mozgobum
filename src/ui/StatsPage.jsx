import { useState } from "preact/hooks";
import { allQuestions, quizName } from "../content.js";
import { clearQuiz, hardUnits, isReview, progress, progressKey, reviewNeed } from "../modes.js";
import { href } from "../router.js";
import { isMastered, loadStats, resetReview, reviewStreak, saveStats } from "../stats.js";
import { Confirm } from "./Confirm.jsx";
import { Icon } from "./Icon.jsx";
import { Meter } from "./Meter.jsx";

const DAY = 24 * 60 * 60 * 1000;

function unitStatus(q, stats) {
  const r = stats.units[q.unit];
  if (!r) return "new";
  return isMastered(r, q.streakToMaster) ? "mastered" : "learning";
}

function reviewStatus(q, key, stats, review) {
  const value = stats.reviews[review]?.keys[key];
  if (value === undefined) return "new";
  return reviewStreak(value) >= reviewNeed(q) ? "mastered" : "learning";
}

// One row per stats key: a twin group or a number skill counts once.
function sectionRows(quiz, section, stats) {
  const byKey = new Map();
  for (const q of section.questions) {
    const k = progressKey(quiz, q);
    byKey.set(k, [...(byKey.get(k) ?? []), q]);
  }
  return [...byKey].map(([key, qs]) => ({
    key,
    units: qs.map((q) => q.unit),
    status: isReview(quiz) ? reviewStatus(qs[0], key, stats, quiz.review) : unitStatus(qs[0], stats),
  }));
}

// Hard questions are always the subchapters' own ones, also on a review's page.
function hardRows(quiz, stats) {
  const byUnit = new Map(allQuestions(quiz).map((q) => [q.unit, q]));
  return hardUnits({ sections: quiz.sections }, stats).map((unit) => {
    const q = byUnit.get(unit);
    return { unit, label: q.skill ? `Typ zadania: ${q.skill}` : q.q, ...stats.units[unit] };
  });
}

export function StatsPage({ quiz }) {
  const [stats, setStats] = useState(loadStats);
  const [confirming, setConfirming] = useState(false);
  const review = isReview(quiz);
  const back = href(quiz.back ?? quiz.path);
  const backLabel = quiz.parent
    ? quizName(quiz.parent)
    : review ? `Rozdział ${quiz.path.split("/")[1]}. ${quiz.chapterTitle}` : quiz.title;

  const sections = quiz.sections.map((s) => ({ ...s, rows: sectionRows(quiz, s, stats) }));
  const rows = sections.flatMap((s) => s.rows);
  const hard = hardRows(quiz, stats);
  const hardUnitSet = new Set(hard.map((r) => r.unit));
  // A hard question counts only as hard, whatever its status in this quiz.
  const count = (status) => rows.filter((r) => r.status === status && !r.units.some((u) => hardUnitSet.has(u))).length;
  const { done, total } = progress(quiz, stats);
  const last = review && stats.reviews[quiz.review]?.last;

  const clear = () => {
    const next = review ? resetReview(stats, quiz.review) : clearQuiz(stats, quiz);
    saveStats(next);
    setStats(next);
    setConfirming(false);
  };

  return (
    <main class="view stats-view">
      <a class="pill" href={back}><Icon name="arrow_back" class="pill-icon" /><span class="pill-text">{backLabel}</span></a>
      <header class="page-head">
        <span class="tile tile--num tile--head"><Icon name="bar_chart" /></span>
        <div>
          <h1>Statystyki – {quiz.title}</h1>
          <p class="muted">
            {review
              ? <>Pytanie jest opanowane, gdy ostatnia odpowiedź w tym quizie była dobra, typ zadania – gdy dwie ostatnie były dobre. <span class="stats-note">Pytania-bliźniaki liczą się jako jedno.</span></>
              : "Pytanie (i typ zadania) jest opanowane po 2 dobrych odpowiedziach z rzędu. Liczą się też odpowiedzi ze sprawdzianu i podsumowania."}
          </p>
        </div>
      </header>

      <div class="stat-tiles">
        <div class="stat-tile"><b>{done} / {total}</b><span>opanowane ({total ? Math.round((done / total) * 100) : 0}%)</span></div>
        <div class="stat-tile"><b>{hard.length}</b><span>trudne</span></div>
        <div class="stat-tile"><b>{count("new")}</b><span>jeszcze nie było</span></div>
      </div>

      {review && (
        <p class="muted">
          {last
            ? `Ostatnia runda: ${new Date(last).toLocaleDateString("pl-PL")} (${Math.floor((Date.now() - Date.parse(last)) / DAY)} dni temu).`
            : "Jeszcze nie było żadnej rundy."}
        </p>
      )}

      {sections.map((s) => {
        const p = s.rows.filter((r) => r.status === "mastered").length;
        const units = new Set(s.rows.flatMap((r) => r.units));
        const sectionHard = hard.filter((r) => units.has(r.unit));
        return (
          <section key={s.id} class="block stat-section">
            <div class="row">
              <div class="row-top">
                <h2 class="heading--5">{s.icon} {s.name}</h2>
                <span class="row-num muted">{p} / {s.rows.length}</span>
              </div>
              <Meter done={p} total={s.rows.length} />
            </div>
            {sectionHard.length > 0 && (
              <ul class="stat-list">
                {sectionHard.map((r) => (
                  <li key={r.unit} class="stat-item">
                    <Icon name="error" class="stat-icon" />
                    <span>
                      {r.label}
                      <span class="meta">odpowiedzi {r.asked}, błędy {r.wrong}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}

      <button class="link link--danger" onClick={() => setConfirming(true)}>
        <Icon name="delete" class="pill-icon" />{review ? "Wyzeruj postęp" : "Wyczyść statystykę"}
      </button>

      {confirming && (
        <Confirm
          text={review ? <>Wyzerować postęp „{quiz.title}”?<br />Zaczniesz od nowa.</> : <>Usunąć statystykę „{quiz.title}”?<br />Tego nie da się cofnąć.</>}
          onYes={clear}
          onNo={() => setConfirming(false)}
        />
      )}
    </main>
  );
}
