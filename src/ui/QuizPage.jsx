import { useEffect, useMemo, useState } from "preact/hooks";
import { href } from "../router.js";
import { buildRound, hardUnits, hasHardMode, roundSize } from "../modes.js";
import { allQuestions } from "../content.js";
import { answer as recordAnswer, useAccount } from "../account.js";
import { starsFor } from "../game.js";
import { countLabel, pytan } from "../format.js";
import { Game } from "./Game.jsx";
import { Icon } from "./Icon.jsx";
import { ProgressMeta } from "./ProgressMeta.jsx";
import { Result } from "./Result.jsx";
import { ReviewBanner } from "./ReviewBanner.jsx";

// Reviews and their hard questions have no menu: the link starts the round, leaving goes back to where it was opened.
const DIRECT_MODES = { review: "all", "chapter-hard": "hard" };
export const hasMenu = (quiz) => !DIRECT_MODES[quiz.kind];

export function QuizPage({ quiz, onPlayingChange }) {
  const direct = DIRECT_MODES[quiz.kind];
  const chapterHref = href(`${quiz.subject.id}/${quiz.path.split("/")[1]}`);
  const backHref = quiz.back ? href(quiz.back) : chapterHref;
  const { stats } = useAccount();
  const [mode, setMode] = useState(direct ?? "all");
  const [round, setRound] = useState(() => (direct ? buildRound(quiz, direct, stats) : []));
  const [view, setView] = useState(direct ? "game" : "menu");
  const [lastGame, setLastGame] = useState(null);

  useEffect(() => onPlayingChange?.(view === "game"), [view]);
  useEffect(() => () => onPlayingChange?.(false), []);

  const empty = direct && view === "game" && !round.length;
  useEffect(() => {
    if (empty) location.replace(backHref);
  }, [empty]);

  const sectionOf = useMemo(
    () => new Map(quiz.sections.flatMap((s) => s.questions.map((q) => [q, s]))),
    [quiz],
  );
  const total = allQuestions(quiz).length;
  const hard = direct || hasHardMode(quiz) ? hardUnits(quiz, stats).length : 0;

  const start = (m) => {
    const questions = buildRound(quiz, m, stats);
    if (!questions.length) return;
    setMode(m);
    setRound(questions);
    setView("game");
    window.scrollTo(0, 0);
  };

  // Every answer trains the subchapter; a review also keeps its own progress.
  const answer = (q, ok) => recordAnswer(quiz, q, ok);

  const finish = ({ total: n, mistakes, answers }) => {
    setLastGame({ total: n, mistakes, stars: starsFor(mistakes, n), answers });
    setView("result");
  };

  const toMenu = () => {
    if (direct) {
      location.hash = backHref;
      return;
    }
    setView("menu");
    window.scrollTo(0, 0);
  };

  if (empty) return null;

  if (view === "game") {
    return (
      <Game
        questions={round}
        sectionOf={sectionOf}
        onAnswer={answer}
        onFinish={finish}
        onExit={toMenu}
        quiz={quiz}
      />
    );
  }

  if (view === "result") {
    const again = mode === "hard" && !hard ? null : mode;
    return (
      <Result
        quiz={quiz}
        game={lastGame}
        onAgain={again && (() => start(again))}
        onMenu={toMenu}
        menuLabel={!direct ? "← Wróć do listy" : quiz.parent ? (quiz.parent.number ? "← Wróć do podrozdziału" : "← Wróć do listy") : "← Wróć do rozdziału"}
      />
    );
  }

  const size = Math.min(total, roundSize(quiz));
  return (
    <main class="view quiz-page">
      <a class="pill" href={chapterHref}>
        <Icon name="arrow_back" class="pill-icon" />
        <span class="pill-text">Rozdział {quiz.path.split("/")[1]}. {quiz.chapterTitle}</span>
      </a>
      <header class="page-head">
        <span class={`tile tile--head${quiz.number ? " tile--num" : ""}`}>{quiz.number ?? quiz.icon}</span>
        <div>
          <h1>{quiz.title}</h1>
          <p class="muted">{countLabel(allQuestions(quiz))}</p>
        </div>
      </header>

      <div class="banner hue">
        <span class="tile tile--banner"><Icon name="casino" /></span>
        <span class="banner-text">
          <span class="eyebrow">Losowa runda</span>
          <span class="heading--4">Wszystko</span>
          <span class="meta">{size} losowych {pytan(size)} ze wszystkich działów</span>
        </span>
        <button class="btn" onClick={() => start("all")} aria-label="Graj · Wszystko">Graj</button>
      </div>
      {hard > 0 && (
        <div class="banner banner--hard hue">
          <span class="tile tile--banner"><Icon name="local_fire_department" /></span>
          <span class="banner-text">
            <span class="eyebrow">Do powtórki</span>
            <span class="heading--4">Moje trudne pytania</span>
            <span class="meta">{hard} – znikają po 2 dobrych odpowiedziach z rzędu</span>
          </span>
          <button class="btn" onClick={() => start("hard")} aria-label="Graj · Moje trudne pytania">Graj</button>
        </div>
      )}

      <section class="block">
        <h2 class="heading--5">Albo wybierz dział</h2>
        <div class="section-grid">
          {quiz.sections.map((s) => (
            <button key={s.id} class="section-card" onClick={() => start(s.id)}>
              <span class="tile tile--section">{s.icon}</span>
              <span class="section-text">
                <b>{s.name}</b>
                <ProgressMeta quiz={{ ...quiz, sections: [s] }} stats={stats} />
              </span>
            </button>
          ))}
        </div>
      </section>

      {quiz.summary && <ReviewBanner review={quiz.summary} />}
    </main>
  );
}
