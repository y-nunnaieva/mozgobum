import { describe, expect, it } from "vitest";
import { createRound, currentQuestion, isFinished, shuffle, starsFor, submitAnswer } from "./game.js";

const qs = ["a", "b", "c"].map((id) => ({ id }));

describe("round", () => {
  it("finishes after every question is answered correctly", () => {
    let r = createRound(qs);
    for (let i = 0; i < 3; i++) r = submitAnswer(r, true);
    expect(isFinished(r)).toBe(true);
    expect(r.mistakes).toBe(0);
  });

  it("does not repeat a wrong question and counts the mistake", () => {
    let r = submitAnswer(createRound(qs), false);
    expect(currentQuestion(r).id).toBe("b");
    expect(r.mistakes).toBe(1);
    r = submitAnswer(submitAnswer(r, true), true);
    expect(isFinished(r)).toBe(true);
    expect(r.total).toBe(3);
  });
});

describe("starsFor", () => {
  it.each([
    [0, 20, 3],
    [1, 20, 2],
    [4, 20, 2],
    [5, 20, 1],
    [30, 20, 1],
  ])("%i mistakes of %i → %i stars", (m, t, s) => expect(starsFor(m, t)).toBe(s));
});

describe("shuffle", () => {
  it("keeps all items and does not mutate the input", () => {
    const input = [1, 2, 3, 4, 5];
    const out = shuffle(input);
    expect([...out].sort()).toEqual(input);
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });
});
