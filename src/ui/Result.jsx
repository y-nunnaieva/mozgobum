import { quizName } from "../content.js";
import { questionTypes } from "../types/index.js";
import { Icon } from "./Icon.jsx";
import { MathText } from "./MathText.jsx";
import { Mascot } from "./Mascot.jsx";

const TITLES = { 3: "Perfekcyjnie!", 2: "Świetnie ci idzie!", 1: "Dobra robota, ćwicz dalej!" };

export function Result({ quiz, game, onAgain, onMenu, menuLabel }) {
  return (
    <main class="view result">
      <section class="result-card">
        <Icon name={quiz.subject.glyph} class="bg-glyph" />
        <Mascot antenna class="result-mascot" />
        <div class="result-stars" role="img" aria-label={`Gwiazdki: ${game.stars} z 3`}>
          {[1, 2, 3].map((i) => <span key={i} class={`result-star${i <= game.stars ? " result-star--on" : ""}`}>★</span>)}
        </div>
        <h1>{TITLES[game.stars]}</h1>
        <p>{quiz.subject.name} · {quizName(quiz)}</p>
        <div class="result-chips">
          <span>Pytań: {game.total}</span>
          <span>Pomyłki po drodze: {game.mistakes}</span>
        </div>
      </section>

      {game.answers?.length > 0 && (
        <section class="block">
          <h2 class="heading--5">Twoje odpowiedzi</h2>
          {game.answers.map(({ question: q, ok }, i) => {
            const solution = questionTypes[q.type].solution;
            return (
              <div key={i} class={`answer-row answer-row--${ok ? "ok" : "bad"}`}>
                <span class="box">{ok ? "✓" : "✗"}</span>
                <div class="answer-row-text">
                  <div class="answer-q"><MathText text={q.q} on={q.fractions} /></div>
                  <div class="meta">
                    {ok ? "Dobrze" : solution ? <>Poprawnie: <MathText text={solution(q)} on={q.fractions} /></> : "Błędna odpowiedź"}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}

      <div class="result-btns">
        {onAgain && <button class="btn btn--secondary" onClick={onAgain}>Jeszcze raz</button>}
        <button class="btn" onClick={onMenu}>{menuLabel}</button>
      </div>
    </main>
  );
}
