import { describe, expect, it } from "vitest";
import { buildCatalog, quizName, reviewScope } from "./content.js";
import { catalog } from "./catalog.js";
import { ICONS } from "./icons.js";
import { validateCatalog } from "./validate.js";

describe("real content", () => {
  it("is loaded", () => {
    expect(Object.keys(catalog.quizzes).length).toBeGreaterThan(0);
  });

  it("passes validation", () => {
    expect(validateCatalog(catalog)).toEqual([]);
  });

  it("uses only icons that are bundled in icons.js", () => {
    const missing = catalog.subjects.flatMap((s) => [s.glyph, ...s.icons]).filter((name) => !ICONS[name]);
    expect(missing).toEqual([]);
  });
});

describe("buildCatalog", () => {
  const q = (id) => ({ id, q: `Q${id}`, correct: ["a"], wrong: ["b", "c"], explain: "e" });
  const sub = (title, ids) => ({ title, sections: [{ id: "s", name: "S", icon: "x", questions: ids.map(q) }] });
  const cat = buildCatalog({
    "/content/hist/subject.js": { name: "Hist", icon: "H" },
    "/content/hist/2/chapter.js": { title: "Ch", reviews: [{ id: "test", title: "T", include: ["2.1", "2.10"] }] },
    "/content/hist/2/2.10.js": sub("Ten", ["0001"]),
    "/content/hist/2/2.2.js": sub("Two", ["0001"]),
    "/content/hist/2/2.1.js": sub("One", ["0001", "0002"]),
  });

  it("sorts subchapters numerically", () => {
    expect(cat.subjects[0].chapters[0].subchapters.map((s) => s.number)).toEqual(["2.1", "2.2", "2.10"]);
  });

  it("builds full question ids from the path", () => {
    expect(cat.quizzes["hist/2/2.1"].sections[0].questions[1].id).toBe("hist/2/2.1/0002");
  });

  it("composes a review from referenced subchapters without copying ids", () => {
    const review = cat.quizzes["hist/2/test"];
    expect(review.sections.map((s) => s.id)).toEqual(["2.1", "2.10"]);
    expect(review.sections[1].questions[0].id).toBe("hist/2/2.10/0001");
  });

  it("lists non-numbered files as extra chapter quizzes", () => {
    const c = buildCatalog({
      "/content/g/1/1.2.js": sub("Sub", ["0001"]),
      "/content/g/1/obliczenia.js": { ...sub("Calc", ["0001"]), icon: "🧮" },
    });
    expect(c.subjects[0].chapters[0].subchapters.map((s) => s.number)).toEqual(["1.2"]);
    expect(c.quizzes["g/1/obliczenia"]).toMatchObject({ kind: "practice", icon: "🧮", title: "Calc" });
    expect(c.quizzes["g/1/obliczenia"].sections[0].questions[0].id).toBe("g/1/obliczenia/0001");
  });

  it("hides subchapter numbers in an unnumbered subject but keeps them for order and ids", () => {
    const c = buildCatalog({
      "/content/en/subject.js": { name: "En", numbered: false },
      "/content/en/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.1", "1.2"] }] },
      "/content/en/1/1.2.js": { ...sub("Weather", ["0001"]), icon: "☀️" },
      "/content/en/1/1.1.js": sub("Countries", ["0001"]),
    });
    const [first, second] = c.subjects[0].chapters[0].subchapters;
    expect([first.title, first.label, first.icon, second.label, second.icon]).toEqual(["Countries", null, undefined, null, "☀️"]);
    expect(quizName(second)).toBe("Weather");
    expect(second.sections[0].questions[0].id).toBe("en/1/1.2/0001");
    expect(reviewScope(c.quizzes["en/1/r"])).toBe("Countries + Weather");
  });

  it("lets a review include extra chapter quizzes", () => {
    const c = buildCatalog({
      "/content/g/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.2", "obliczenia"] }] },
      "/content/g/1/1.2.js": sub("Sub", ["0001"]),
      "/content/g/1/obliczenia.js": { ...sub("Calc", ["0001"]), icon: "🧮" },
    });
    const review = c.quizzes["g/1/r"];
    expect(review.sections.map((s) => [s.id, s.kind, s.icon])).toEqual([["1.2", "subchapter", "1.2"], ["obliczenia", "practice", "🧮"]]);
    expect(review.sections[1].questions[0].id).toBe("g/1/obliczenia/0001");
    expect(reviewScope(review)).toBe("podrozdziały 1.2 + Calc");
  });

  it("leaves details out of a review only above its limit", () => {
    const questions = (from, n, level) =>
      Array.from({ length: n }, (_, i) => ({ ...q(String(from + i).padStart(4, "0")), level }));
    const build = (qs, type) => buildCatalog({
      "/content/g/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", type, include: ["1.1"] }] },
      "/content/g/1/1.1.js": { title: "A", sections: [{ id: "s", name: "S", icon: "x", questions: qs }] },
    }).quizzes["g/1/r"];
    const count = (r) => r.sections.flatMap((s) => s.questions).length;
    const mixed = [...questions(1, 40, 1), ...questions(41, 20, 3)];
    expect(count(build(questions(1, 50, 3), "kartkowka"))).toBe(50);
    expect(count(build(mixed, "kartkowka"))).toBe(40);
    expect(count(build(mixed))).toBe(60);
  });

  it("uses the skill as the stats unit for number questions", () => {
    const c = buildCatalog({
      "/content/mat/1/1.1.js": { title: "M", sections: [{ id: "s", questions: [{ type: "number", skill: "nwd", q: "?", answer: "6" }] }] },
    });
    const question = c.quizzes["mat/1/1.1"].sections[0].questions[0];
    expect(question.unit).toBe("mat/skill/nwd");
    expect(question.streakToMaster).toBe(2);
  });

  it("fails on a review that includes a missing subchapter", () => {
    expect(() => buildCatalog({ "/content/h/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.9"] }] } }))
      .toThrow(/missing quiz 1.9/);
  });
});

describe("validateCatalog", () => {
  it("reports broken questions", () => {
    const cat = buildCatalog({
      "/content/h/1/1.1.js": { title: "T", sections: [{ id: "s", questions: [
        { id: "0001", q: "A", correct: [], wrong: ["x", "x"], explain: "" },
        { id: "0001", q: "B", correct: ["y"], wrong: ["z", "w"], explain: "e" },
        { type: "number", skill: "f", q: "C", answer: "6/8" },
      ] }] },
    });
    const errors = validateCatalog(cat).join("\n");
    expect(errors).toMatch(/no correct answer/);
    expect(errors).toMatch(/duplicate options/);
    expect(errors).toMatch(/missing explanation/);
    expect(errors).toMatch(/duplicate id/);
    expect(errors).toMatch(/not reduced/);
  });

  it("reports a group with a single question", () => {
    const cat = buildCatalog({
      "/content/h/1/1.1.js": { title: "T", sections: [{ id: "s", questions: [
        { id: "0001", q: "A", correct: ["y"], wrong: ["z", "w"], explain: "e", group: "lonely" },
      ] }] },
    });
    expect(validateCatalog(cat)).toContain("h/1/group/lonely: a group needs at least two questions");
  });
});
