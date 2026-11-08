import { useRef, useState } from "preact/hooks";
import { createRound, currentQuestion, isFinished, submitAnswer } from "../game.js";
import { quizName } from "../content.js";
import { playAnswerSound, unlockSound } from "../sound.js";
import { questionTypes } from "../types/index.js";
import { Confirm } from "./Confirm.jsx";
import { Icon } from "./Icon.jsx";
import { Mascot } from "./Mascot.jsx";

export function Game({ questions, sectionOf, onAnswer, onFinish, onExit, quiz }) {
  const [round, setRound] = useState(() => createRound(questions));
  const [result, setResult] = useState(null);
  const [attempt, setAttempt] = useState(0);
  const [confirmExit, setConfirmExit] = useState(false);
  const [status, setStatus] = useState(() => new Map());
  const answers = useRef(new Map());
  const nextRef = useRef(null);

  const q = currentQuestion(round);
  const section = sectionOf.get(q);
  const { View, solution } = questionTypes[q.type];
  const done = round.total - round.queue.length + (result !== null ? 1 : 0);

  const answer = (ok) => {
    setResult(ok);
    setStatus((m) => new Map(m).set(q, ok ? "ok" : "bad"));
    answers.current.set(q, ok);
    onAnswer(q, ok);
    playAnswerSound(ok);
    requestAnimationFrame(() => nextRef.current?.focus({ preventScroll: true }));
  };

  const next = () => {
    const after = submitAnswer(round, result);
    if (isFinished(after)) {
      onFinish({
        total: after.total,
        mistakes: after.mistakes,
        answers: questions.map((x) => ({ question: x, ok: answers.current.get(x) })),
      });
      return;
    }
    setRound(after);
    setResult(null);
    setAttempt((n) => n + 1);
    window.scrollTo(0, 0);
  };

  const exit = () => (attempt > 0 || result !== null ? setConfirmExit(true) : onExit());

  return (
    // A typed answer sent with the phone keyboard may not count as a gesture, so any earlier tap unlocks the audio.
    <main class="view game" onClick={unlockSound}>
      {quiz && (
        <div class="crumb">
          <Icon name={quiz.subject.glyph} class="pill-icon" />
          <span class="crumb-text">{quiz.subject.name} · {quizName(quiz)}</span>
        </div>
      )}
      <div class="game-top">
        <span class="counter">{done} / {round.total}</span>
        <div class="segments" role="progressbar" aria-valuemin={0} aria-valuemax={round.total} aria-valuenow={done}>
          {questions.map((x, i) => (
            <span key={i} class={`segment${x === q && result === null ? " segment--current" : status.has(x) ? ` segment--${status.get(x)}` : ""}`} />
          ))}
        </div>
        <button class="icon-btn" onClick={exit} aria-label="Wyjdź"><span>✕</span></button>
      </div>
      <div class="question-card">
        {quiz && <Icon name={quiz.subject.glyph} class="bg-glyph" />}
        {section && (
          <span class="q-label">
            <span class="q-label-icon">{section.icon}</span>
            <span class="q-label-text">{section.name}</span>
          </span>
        )}
        <p class="question">{q.q}</p>
      </div>
      <View key={attempt} question={q} onSubmit={answer} />

      {result !== null && (
        <>
          <div class={`feedback feedback--${result ? "ok" : "bad"}`}>
            <Mascot mood={result ? "happy" : "sad"} class="mascot--small" />
            <div>
              <b>{result ? "Brawo!" : "Niestety!"}</b>
              <p>
                {!result && solution && <>Poprawna odpowiedź: <b>{solution(q)}</b>. </>}
                {q.explain}
              </p>
            </div>
            {!result && <p class="feedback-note">To pytanie trafi do trudnych.</p>}
          </div>
          <div class="actions">
            <button class="primary primary--next" ref={nextRef} onClick={next}>Dalej →</button>
          </div>
        </>
      )}

      {confirmExit && (
        <Confirm
          text="Na pewno chcesz wyjść?"
          onYes={onExit}
          onNo={() => setConfirmExit(false)}
        />
      )}
    </main>
  );
}
