import { useEffect, useState } from "preact/hooks";
import { useAccount } from "../account.js";
import { catalog } from "../catalog.js";
import { STATS_ID, statsPath } from "../content.js";
import { paletteVar } from "../palette.js";
import { href, useHashPath } from "../router.js";
import { useSound } from "../sound.js";
import { useTheme } from "../theme.js";
import {
  ACCOUNT_ID, ACCOUNT_PAGES, ChildAccountPage, LOGIN_ID, LoginPage, PARENT_ID, ParentPage, SIGNUP_ID, SignupPage, ViewingBar, accountHref,
} from "./AccountPages.jsx";
import { Backdrop } from "./Backdrop.jsx";
import { ChapterPage } from "./ChapterPage.jsx";
import { HomePage } from "./HomePage.jsx";
import { NewsBar } from "./NewsBar.jsx";
import { Icon } from "./Icon.jsx";
import { QuizPage, hasMenu } from "./QuizPage.jsx";
import { StatsPage } from "./StatsPage.jsx";
import { SubjectNav } from "./SubjectNav.jsx";
import { SubjectPage } from "./SubjectPage.jsx";

export function App() {
  const path = useHashPath();
  const [theme, toggleTheme] = useTheme();
  const [soundOn, toggleSound] = useSound();
  const account = useAccount();
  const [drawerOpen, setDrawerOpen] = useState(false);
  // During a round the menus stay visible but dimmed and inert, so leaving goes through "Wyjdź".
  const [playing, setPlaying] = useState(false);
  const [subjectId, chapterId] = path.split("/");
  const quiz = catalog.quizzes[path];
  const statsQuiz = path.endsWith(`/${STATS_ID}`) && catalog.quizzes[path.slice(0, -STATS_ID.length - 1)];
  const subject = catalog.subjects.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);

  useEffect(() => {
    const root = document.documentElement.style;
    if (subject) {
      root.setProperty("--c", paletteVar(subject.color));
      root.setProperty("--alt", paletteVar(subject.alt));
    } else {
      root.removeProperty("--c");
      root.removeProperty("--alt");
    }
    document.documentElement.classList.toggle("subject", !!subject);
  }, [subject]);

  useEffect(() => setDrawerOpen(false), [path]);

  useEffect(() => {
    if (!drawerOpen) return;
    // A scrolling page behind the drawer makes the phone toolbar collapse and the drawer jump.
    document.documentElement.classList.add("scroll-lock");
    const onKey = (e) => e.key === "Escape" && setDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("scroll-lock");
    };
  }, [drawerOpen]);

  let content;
  // Pages built from stats wait for the account, so a round is never drawn from empty stats.
  if (account.status === "loading") content = null;
  else if (!path) content = <HomePage subjects={catalog.subjects} />;
  else if (path === LOGIN_ID) content = <LoginPage />;
  else if (path === SIGNUP_ID) content = <SignupPage />;
  else if (path === PARENT_ID) content = <ParentPage />;
  else if (path === ACCOUNT_ID) content = <ChildAccountPage />;
  else if (quiz) content = <QuizPage key={path} quiz={quiz} onPlayingChange={setPlaying} />;
  else if (statsQuiz) content = <StatsPage key={path} quiz={statsQuiz} />;
  else if (subject && !chapterId) content = <SubjectPage key={path} subject={subject} />;
  else if (chapter && path === `${subject.id}/${chapter.id}`) content = <ChapterPage key={path} subject={subject} chapter={chapter} />;
  else content = (
    <main class="view not-found">
      <a class="pill" href={href("")}><Icon name="arrow_back" class="pill-icon" /><span class="pill-text">Strona główna</span></a>
      <h1>Nie ma takiej strony</h1>
    </main>
  );

  const themeButton = (
    <button
      class={`icon-btn theme-btn${theme === "dark" ? " theme-btn--dark" : ""}`}
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Włącz jasny motyw" : "Włącz ciemny motyw"}
      title={theme === "dark" ? "Jasny motyw" : "Ciemny motyw"}
    >
      <Icon name={theme === "dark" ? "light_mode" : "dark_mode"} />
    </button>
  );

  const soundButton = (
    <button
      class={`icon-btn sound-btn${soundOn ? "" : " sound-btn--off"}`}
      onClick={toggleSound}
      aria-label={soundOn ? "Wyłącz dźwięk" : "Włącz dźwięk"}
      title={soundOn ? "Wyłącz dźwięk" : "Włącz dźwięk"}
    >
      <Icon name={soundOn ? "volume_up" : "volume_off"} />
    </button>
  );

  const accountButton = (
    <a
      class={`icon-btn account-btn${account.status === "guest" ? "" : " account-btn--in"}${playing ? " account-btn--locked" : ""}`}
      href={accountHref(account.status)}
      inert={playing}
      aria-label={account.profile ? `Konto · ${account.profile.nick}` : "Zaloguj się"}
      title={account.profile ? account.profile.nick : "Zaloguj się"}
    >
      <Icon name="account_circle" />
    </a>
  );

  return (
    <>
      <Backdrop subject={subject} subjects={catalog.subjects} />
      <div class={`shell${path ? "" : " shell--home"}`}>
        <header class="topbar">
          <div class="container topbar-inner">
            <Brand locked={playing} />
            <div class="topbar-actions">
              {accountButton}
              {themeButton}
              {soundButton}
              <button
                class={`icon-btn menu-btn${playing ? " menu-btn--locked" : ""}`}
                disabled={playing}
                onClick={() => setDrawerOpen(true)}
                aria-label="Przedmioty"
                aria-expanded={drawerOpen}
                aria-controls="subject-nav"
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </header>
        <div class="layout">
          <nav
            id="subject-nav"
            class={`sidebar${drawerOpen ? " sidebar--open" : ""}`}
            aria-label="Przedmioty"
            // A link to the current page does not change the path, so it would leave the drawer open.
            onClick={(e) => e.target.closest("a") && setDrawerOpen(false)}
          >
            <div class="side-head">
              <Brand locked={playing} />
            </div>
            <div class="drawer-head">
              <button class="icon-btn" onClick={() => setDrawerOpen(false)} aria-label="Zamknij menu"><span>✕</span></button>
              <h2 class="heading--5">Przedmioty</h2>
            </div>
            <SubjectNav subjects={catalog.subjects} current={subject?.id} locked={playing} />
            <div class="side-foot">
              <span class="side-md">{accountButton}</span>
              {themeButton}
              <span class="side-md">{soundButton}</span>
              {quiz && hasMenu(quiz) && (
                <a
                  class={`icon-btn side-stats${playing ? " side-stats--locked" : ""}`}
                  href={href(statsPath(quiz))}
                  inert={playing}
                  aria-label={`Statystyki · ${quiz.title}`}
                  title="Statystyki"
                >
                  <Icon name="bar_chart" />
                </a>
              )}
            </div>
          </nav>
          {drawerOpen && <div class="drawer-backdrop" onClick={() => setDrawerOpen(false)} />}
          <div class="page"><div class="container">
            {!ACCOUNT_PAGES.includes(path) && <ViewingBar />}
            {!playing && <NewsBar subjects={catalog.subjects} />}
            {content}
          </div></div>
        </div>
      </div>
    </>
  );
}

function Brand({ locked }) {
  return (
    <a class={`brand${locked ? " brand--locked" : ""}`} href={href("")} inert={locked}>
      <span class="brand-mark"><Icon name="lightbulb" /></span>
      <span class="brand-name">Mózgo<span>bum</span></span>
    </a>
  );
}
