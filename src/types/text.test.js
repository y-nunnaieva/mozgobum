import { describe, expect, it } from "vitest";
import { checkText, isValidTextAnswer } from "./text.js";

describe("checkText", () => {
  const q = { answers: ["it's", "it is"] };
  it("ignores case, outer and repeated spaces", () => {
    expect(checkText({ answers: ["basement"] }, "  BaseMent ")).toBe(true);
    expect(checkText(q, "it   is")).toBe(true);
  });
  it("treats a curly apostrophe like a straight one", () => {
    expect(checkText(q, "It’s")).toBe(true);
  });
  it("rejects misspellings", () => {
    expect(checkText({ answers: ["between"] }, "betwen")).toBe(false);
    expect(checkText(q, "its")).toBe(false);
  });
});

describe("isValidTextAnswer", () => {
  it("allows one or two words with apostrophes and hyphens", () => {
    for (const a of ["basement", "living room", "T-shirt", "it's", "North America"]) expect(isValidTextAnswer(a)).toBe(true);
  });
  it("rejects three words, digits, Polish letters and stray spaces", () => {
    for (const a of ["block of flats", "room 2", "piwnica ś", " door", ""]) expect(isValidTextAnswer(a)).toBe(false);
  });
});
