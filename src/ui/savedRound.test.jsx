// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/preact";
import { buildCatalog } from "../content.js";
import { ROUND_KEY, ROUND_MAX_AGE } from "../savedRound.js";
import { loadStats } from "../stats.js";
import { QuizPage } from "./QuizPage.jsx";

const question = (n) => ({ id: `000${n}`, q: `Pytanie ${n}?`, correct: ["Dobra"], wrong: ["Zła", "Inna"], explain: "Bo tak" });
const cat = buildCatalog({
  "/content/h/subject.js": { name: "Hist", icon: "🏛️" },
  "/content/h/1/chapter.js": { title: "Rozdział" },
  "/content/h/1/1.1.js": {
    title: "Temat",
    sections: [{ id: "a", name: "Dział", icon: "1", questions: [question(1), question(2), question(3)] }],
  },
  "/content/h/1/1.2.js": {
    title: "Inny temat",
    sections: [{ id: "b", name: "Dział", icon: "2", questions: [question(4), question(5)] }],
  },
});
const quiz = cat.quizzes["h/1/1.1"];
const summary = cat.quizzes["h/1/1.1/podsumowanie"];

const click = (name) => fireEvent.click(screen.getByRole("button", { name }));
const answerRight = () => {
  click(/Dobra$/);
  click("Sprawdź");
};
const answerWrong = () => {
  click(/Zła$/);
  click("Sprawdź");
};
const counter = () => document.querySelector(".counter")?.textContent;
const shownQuestion = () => document.querySelector(".question")?.textContent;
const saved = () => JSON.parse(localStorage.getItem(ROUND_KEY));
// Preact runs effect cleanups after the next frame, not during the unmount.
const leavePage = async () => {
  cleanup();
  await waitFor(() => expect(localStorage.getItem(ROUND_KEY)).toBeNull());
};

// A dropped tab runs no cleanup, so what is in the storage is what the next load finds.
async function reloadPage(page = quiz) {
  const kept = localStorage.getItem(ROUND_KEY);
  await leavePage();
  localStorage.setItem(ROUND_KEY, kept);
  render(<QuizPage quiz={page} />);
}

function startRound() {
  render(<QuizPage quiz={quiz} />);
  click("Graj · Wszystko");
}

beforeEach(() => localStorage.clear());
afterEach(cleanup);

describe("round after the page is reloaded", () => {
  it("goes on with the next question and does not count anything twice", async () => {
    startRound();
    const first = shownQuestion();
    answerWrong();
    click("Dalej →");
    const second = shownQuestion();
    await reloadPage();

    expect(counter()).toBe("1 / 3");
    expect(shownQuestion()).toBe(second);
    expect(shownQuestion()).not.toBe(first);
    expect(document.querySelectorAll(".segment--bad").length).toBe(1);
    const asked = Object.values(loadStats().units).reduce((sum, u) => sum + u.asked, 0);
    expect(asked).toBe(1);
  });

  it("skips a question answered just before the reload", async () => {
    startRound();
    const first = shownQuestion();
    answerRight();
    await reloadPage();
    expect(counter()).toBe("1 / 3");
    expect(shownQuestion()).not.toBe(first);
    expect(screen.queryByText("Brawo!")).toBeNull();
  });

  it("keeps mistakes from before the reload in the result", async () => {
    startRound();
    answerWrong();
    click("Dalej →");
    await reloadPage();
    answerRight();
    click("Dalej →");
    answerRight();
    click("Dalej →");
    expect(screen.getByText(/Pomyłki po drodze: 1/)).toBeTruthy();
    expect(localStorage.getItem(ROUND_KEY)).toBeNull();
  });

  it("shows the result when the last answer was the one before the reload", async () => {
    startRound();
    for (let i = 0; i < 2; i++) {
      answerRight();
      click("Dalej →");
    }
    answerWrong();
    await reloadPage();
    expect(screen.getByText(/Pomyłki po drodze: 1/)).toBeTruthy();
    expect(localStorage.getItem(ROUND_KEY)).toBeNull();
  });

  it("asks before leaving a resumed round", async () => {
    startRound();
    answerRight();
    click("Dalej →");
    await reloadPage();
    click("Wyjdź");
    expect(screen.getByText("Na pewno chcesz wyjść?")).toBeTruthy();
  });

  it("resumes a review instead of drawing a new round", async () => {
    render(<QuizPage quiz={summary} />);
    answerRight();
    click("Dalej →");
    const second = shownQuestion();
    await reloadPage(summary);
    expect(counter()).toBe("1 / 3");
    expect(shownQuestion()).toBe(second);
  });

  it("is forgotten after leaving the round", async () => {
    startRound();
    answerRight();
    click("Dalej →");
    click("Wyjdź");
    click("Tak");
    expect(localStorage.getItem(ROUND_KEY)).toBeNull();
  });

  it("is forgotten when the app moves to another page", async () => {
    startRound();
    answerRight();
    await leavePage();
  });

  it("is not forgotten by another quiz's page", async () => {
    startRound();
    answerRight();
    const kept = localStorage.getItem(ROUND_KEY);
    await leavePage();
    localStorage.setItem(ROUND_KEY, kept);
    render(<QuizPage quiz={cat.quizzes["h/1/1.2"]} />);
    cleanup();
    await new Promise((r) => setTimeout(r, 200));
    expect(saved().path).toBe("h/1/1.1");
  });

  it("is ignored after a day", async () => {
    startRound();
    answerRight();
    localStorage.setItem(ROUND_KEY, JSON.stringify({ ...saved(), at: Date.now() - ROUND_MAX_AGE - 1 }));
    await reloadPage();
    expect(counter()).toBeUndefined();
    expect(screen.getByRole("button", { name: "Graj · Wszystko" })).toBeTruthy();
  });

  it("is ignored when the questions have moved", async () => {
    startRound();
    answerRight();
    const round = saved();
    round.questions[0][1] = "h/1/1.1/9999";
    localStorage.setItem(ROUND_KEY, JSON.stringify(round));
    await reloadPage();
    expect(counter()).toBeUndefined();
  });

  it("is ignored on another quiz", async () => {
    startRound();
    answerRight();
    await reloadPage(summary);
    expect(counter()).toBe("0 / 3");
  });

  it("survives a damaged save", async () => {
    localStorage.setItem(ROUND_KEY, "{not json");
    render(<QuizPage quiz={quiz} />);
    expect(screen.getByRole("button", { name: "Graj · Wszystko" })).toBeTruthy();
  });
});
