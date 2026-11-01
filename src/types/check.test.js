import { describe, expect, it } from "vitest";
import { checkChoice } from "./choice.js";
import { checkOrder } from "./order.js";
import { checkPairs } from "./pairs.js";

describe("checkChoice", () => {
  const multi = { correct: ["a", "b"], wrong: ["c", "d"] };
  it("accepts only the exact set", () => {
    expect(checkChoice(multi, ["b", "a"])).toBe(true);
    expect(checkChoice(multi, ["a"])).toBe(false);
    expect(checkChoice(multi, ["a", "b", "c"])).toBe(false);
    expect(checkChoice({ correct: ["a"] }, ["a"])).toBe(true);
  });
});

describe("checkOrder", () => {
  const q = { items: ["x", "y", "z"] };
  it("requires the full sequence in order", () => {
    expect(checkOrder(q, ["x", "y", "z"])).toBe(true);
    expect(checkOrder(q, ["x", "z", "y"])).toBe(false);
    expect(checkOrder(q, ["x", "y"])).toBe(false);
  });
});

describe("checkPairs", () => {
  const q = { pairs: [["polis", "miasto-państwo"], ["agora", "rynek"]] };
  it("requires every pair to match", () => {
    expect(checkPairs(q, { polis: "miasto-państwo", agora: "rynek" })).toBe(true);
    expect(checkPairs(q, { polis: "rynek", agora: "miasto-państwo" })).toBe(false);
    expect(checkPairs(q, { polis: "miasto-państwo" })).toBe(false);
  });
});
