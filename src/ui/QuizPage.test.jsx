// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/preact";
import { buildCatalog } from "../content.js";
import { loadStats, STATS_KEY } from "../stats.js";
import { QuizPage } from "./QuizPage.jsx";

const cat = buildCatalog({
  "/content/h/subject.js": { name: "Hist", icon: "🏛️" },
  "/content/h/1/chapter.js": { title: "Rozdział", reviews: [{ id: "r", title: "Sprawdzian", include: ["1.1"] }] },
  "/content/h/1/1.1.js": {
    title: "Temat",
    sections: [
      { id: "single", name: "Jednokrotny", icon: "1", questions: [
        { id: "0001", q: "Stolica?", correct: ["Ateny"], wrong: ["Sparta", "Teby"], explain: "Wyj1" },
      ] },
      { id: "multi", name: "Wielokrotny", icon: "2", questions: [
        { id: "0002", q: "Bitwy wygrane?", correct: ["Maraton", "Salamina"], wrong: ["Termopile"], explain: "Wyj2" },
      ] },
      { id: "order", name: "Kolejność", icon: "3", questions: [
        { id: "0003", type: "order", q: "Ułóż:", items: ["A", "B", "C"], explain: "Wyj3" },
      ] },
      { id: "pairs", name: "Pary", icon: "4", questions: [
        { id: "0004", type: "pairs", q: "Połącz:", pairs: [["x", "1"], ["y", "2"], ["z", "3"]], explain: "Wyj4" },
      ] },
      { id: "number", name: "Liczby", icon: "5", questions: [
        { type: "number", skill: "frac", q: "1/2 + 1/4 = ?", answer: "3/4" },
      ] },
    ],
  },
});
const quiz = cat.quizzes["h/1/1.1"];

const click = (name) => fireEvent.click(screen.getByRole("button", { name }));
const startSection = (name) => click(new RegExp(name));
// Single-choice options carry a letter badge ("B Sparta") and need confirming.
const choose = (text) => {
  click(new RegExp(`${text}$`));
  click("Sprawdź");
};

beforeEach(() => localStorage.clear());
afterEach(cleanup);

describe("game flow", () => {
  it("ends the round after a wrong answer, counts the mistake and records stats", () => {
    render(<QuizPage quiz={quiz} />);
    startSection("Jednokrotny");
    choose("Sparta");
    expect(screen.getByText("Niestety!")).toBeTruthy();
    expect(screen.getByText("Ateny").closest(".answer--correct")).toBeTruthy();
    expect(screen.getByText(/To pytanie trafi do trudnych/)).toBeTruthy();
    click("Dalej →");

    expect(screen.getByText(/Pomyłki po drodze: 1/)).toBeTruthy();
    const stats = loadStats();
    expect(stats.units["h/1/1.1/0001"]).toEqual({ asked: 1, wrong: 1, streak: 0 });
    expect(stats.reviews).toEqual({});
    expect(localStorage.getItem(STATS_KEY)).toBeTruthy();
  });

  it("gives 3 stars for a clean round", () => {
    render(<QuizPage quiz={quiz} />);
    startSection("Jednokrotny");
    choose("Ateny");
    click("Dalej →");
    expect(screen.getByText("Perfekcyjnie!")).toBeTruthy();
  });

  it("counts a partial multi-choice answer as wrong", () => {
    render(<QuizPage quiz={quiz} />);
    startSection("Wielokrotny");
    expect(screen.getByText(/Zaznacz wszystkie poprawne/)).toBeTruthy();
    click(/Maraton$/);
    click("Sprawdź");
    expect(screen.getByText("Niestety!")).toBeTruthy();
    expect(loadStats().units["h/1/1.1/0002"].wrong).toBe(1);
  });

  it("checks the order of tapped items and allows undoing a tap", () => {
    render(<QuizPage quiz={quiz} />);
    startSection("Kolejność");
    // A tapped item's accessible name gains its number ("1 C"), hence the suffix match.
    const tapItem = (item) => click(new RegExp(`${item}$`));
    tapItem("C");
    tapItem("C");
    expect(screen.getByRole("button", { name: "Sprawdź" }).disabled).toBe(true);
    for (const item of ["A", "B", "C"]) tapItem(item);
    click("Sprawdź");
    expect(screen.getByText(/Brawo/)).toBeTruthy();
  });

  it("checks matched pairs", () => {
    render(<QuizPage quiz={quiz} />);
    startSection("Pary");
    for (const [l, r] of [["x", "2"], ["y", "1"], ["z", "3"]]) {
      click(l);
      click(r);
    }
    click("Sprawdź");
    expect(screen.getByText("Niestety!")).toBeTruthy();
    expect(screen.getByText("Twoja odpowiedź: 2")).toBeTruthy();
  });

  it("rejects an unreduced fraction and tracks stats per skill", () => {
    render(<QuizPage quiz={quiz} />);
    startSection("Liczby");
    fireEvent.input(screen.getByLabelText("Twoja odpowiedź"), { target: { value: "6/8" } });
    click("Sprawdź");
    expect(screen.getByText("3/4", { selector: ".feedback b" })).toBeTruthy();
    expect(loadStats().units["h/skill/frac"].wrong).toBe(1);
  });
});

describe("menu", () => {
  it("shows hard mode only after a mistake", () => {
    render(<QuizPage quiz={quiz} />);
    expect(screen.queryByText("Moje trudne pytania")).toBeNull();
    startSection("Jednokrotny");
    choose("Sparta");
    click("Dalej →");
    click("← Wróć do listy");
    expect(screen.getByText("Moje trudne pytania")).toBeTruthy();
  });

  it("asks before leaving a started round", () => {
    render(<QuizPage quiz={quiz} />);
    startSection("Jednokrotny");
    choose("Sparta");
    click("Wyjdź");
    expect(screen.getByRole("dialog")).toBeTruthy();
    click("Nie");
    expect(screen.queryByRole("dialog")).toBeNull();
    click("Wyjdź");
    click("Tak");
    expect(screen.getByText("Wszystko")).toBeTruthy();
  });

  it("starts a review round right away and leaves to the chapter", () => {
    location.hash = "";
    render(<QuizPage quiz={cat.quizzes["h/1/r"]} />);
    expect(screen.queryByText("Wszystko")).toBeNull();
    expect(screen.getByText(/\/ 5$/)).toBeTruthy();
    click("Wyjdź");
    expect(location.hash).toBe("#/h/1");
  });

  const missedInSubchapter = () =>
    localStorage.setItem(STATS_KEY, JSON.stringify({ units: { "h/1/1.1/0001": { asked: 1, wrong: 1, streak: 0 } }, reviews: {} }));

  it("starts the chapter hard questions right away", () => {
    missedInSubchapter();
    render(<QuizPage quiz={cat.quizzes["h/1/trudne"]} />);
    expect(screen.getByText("Stolica?")).toBeTruthy();
    expect(screen.getByText(/\/ 1$/)).toBeTruthy();
  });

  it("records a review answer for the review and the subchapter", () => {
    const small = buildCatalog({
      "/content/h/subject.js": { name: "Hist" },
      "/content/h/1/chapter.js": { title: "R", reviews: [{ id: "r", title: "Sprawdzian", include: ["1.1"] }] },
      "/content/h/1/1.1.js": { title: "T", sections: [{ id: "s", name: "S", icon: "1", questions: [
        { id: "0001", q: "Stolica?", correct: ["Ateny"], wrong: ["Sparta", "Teby"], explain: "Wyj1" },
      ] }] },
    });
    render(<QuizPage quiz={small.quizzes["h/1/r"]} />);
    choose("Sparta");
    click("Dalej →");
    const stats = loadStats();
    expect(stats.reviews["h/1/r"].keys["h/1/1.1/0001"]).toBe(0);
    expect(stats.units["h/1/1.1/0001"]).toEqual({ asked: 1, wrong: 1, streak: 0 });
  });

  it("trains only the subchapter in the chapter hard questions", () => {
    missedInSubchapter();
    render(<QuizPage quiz={cat.quizzes["h/1/trudne"]} />);
    choose("Ateny");
    click("Dalej →");
    const stats = loadStats();
    expect(stats.units["h/1/1.1/0001"]).toEqual({ asked: 2, wrong: 1, streak: 1 });
    expect(stats.reviews).toEqual({});
    expect(screen.queryByText("Jeszcze raz")).toBeTruthy();
    expect(screen.getByText("← Wróć do rozdziału")).toBeTruthy();
  });

  it("plays the subchapter summary with its own progress and leaves to the subchapter", () => {
    location.hash = "";
    const summary = cat.quizzes["h/1/1.1/podsumowanie"];
    expect(summary.hard).toBeUndefined();
    render(<QuizPage quiz={summary} />);
    expect(screen.getByText(/\/ 5$/)).toBeTruthy();
    click("Wyjdź");
    expect(location.hash).toBe("#/h/1/1.1");
  });

  it("shows the summary banner on the subchapter page", () => {
    localStorage.setItem(STATS_KEY, JSON.stringify({ units: {}, reviews: { "h/1/1.1/podsumowanie": { keys: { "h/1/1.1/0001": true } } } }));
    render(<QuizPage quiz={quiz} />);
    expect(screen.getByText("Podsumowanie podrozdziału")).toBeTruthy();
    expect(screen.getByText("1/5 pytań")).toBeTruthy();
  });

  it("sends chapter hard questions back to the chapter when there are none", () => {
    location.hash = "";
    render(<QuizPage quiz={cat.quizzes["h/1/trudne"]} />);
    expect(location.hash).toBe("#/h/1");
  });
});
