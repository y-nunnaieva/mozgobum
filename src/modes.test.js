import { describe, expect, it } from "vitest";
import { buildCatalog } from "./content.js";
import { buildRound, CHAPTER_ROUND_SIZE, CHECKS, clearQuiz, HARD_VARIANTS, hardUnits, hasHardMode, progress, REVIEW_CHECKS, REVIEW_PRACTICE_MIN, ROUND_SIZE } from "./modes.js";
import { clearUnits, emptyStats, loadStats, recordAnswer, recordReviewAnswer, resetReview, saveStats, STATS_KEY } from "./stats.js";

const choice = (id) => ({ id, q: `Q${id}`, correct: ["a"], wrong: ["b", "c"], explain: "e" });
const ids = (n) => Array.from({ length: n }, (_, i) => String(i + 1).padStart(4, "0"));

const cat = buildCatalog({
  "/content/h/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.1", "1.2"] }] },
  "/content/h/1/1.1.js": { title: "A", sections: [
    { id: "small", questions: ids(10).map(choice) },
    { id: "big", questions: ids(40).map((i) => choice(`1${i}`)) },
  ] },
  "/content/h/1/1.2.js": { title: "B", sections: [{ id: "s", questions: ids(5).map(choice) }] },
  "/content/m/1/1.1.js": { title: "M", sections: [{ id: "s", questions: [
    ...ids(50).map((i) => ({ type: "number", skill: "nwd", q: `nwd${i}`, answer: "1" })),
    ...ids(50).map((i) => ({ type: "number", skill: "nww", q: `nww${i}`, answer: "1" })),
  ] }] },
  "/content/m/2/2.1.js": { title: "One skill", sections: [{ id: "s", questions:
    ids(30).map((i) => ({ type: "number", skill: "add", q: `add${i}`, answer: "1" })) }] },
});
const quiz = cat.quizzes["h/1/1.1"];
const review = cat.quizzes["h/1/r"];
const allOf = (q) => q.sections.flatMap((s) => s.questions);

describe("question variants", () => {
  const withVariants = (id, word) => ({ ...choice(id), variants: ["x", "y", "z"].map((v) => ({ q: `${word}-${v}` })) });
  const c = buildCatalog({
    "/content/p/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.1"] }] },
    "/content/p/1/1.1.js": { title: "A", sections: [{ id: "s", questions: [withVariants("0001", "a"), withVariants("0002", "b"), choice("0003")] }] },
  });
  const q = c.quizzes["p/1/1.1"];
  const OLD = "p/1/1.1/0001";

  it("counts a question with variants once and keeps its existing stats", () => {
    let st = recordAnswer(emptyStats(), OLD, true);
    st = recordAnswer(st, OLD, true);
    expect(progress(q, st)).toEqual({ done: 1, total: 3 });
    expect(new Set(allOf(q).filter((x) => x.id === OLD).map((x) => x.unit))).toEqual(new Set([OLD]));
  });

  it("serves one wording per round and every wording over many rounds", () => {
    const seen = new Set();
    for (let i = 0; i < 200; i++) {
      const round = buildRound(q, "all", emptyStats());
      expect(round.filter((x) => x.unit === OLD)).toHaveLength(1);
      round.filter((x) => x.unit === OLD).forEach((x) => seen.add(x.q));
    }
    expect(seen).toEqual(new Set(["Q0001", "a-x", "a-y", "a-z"]));
  });

  it("does not repeat a question in a section, hard or revision round", () => {
    let st = recordAnswer(emptyStats(), OLD, false);
    expect(buildRound(q, "hard", st).filter((x) => x.unit === OLD)).toHaveLength(1);
    st = emptyStats();
    for (const u of ["0001", "0002", "0003"]) for (let n = 0; n < 2; n++) st = recordAnswer(st, `p/1/1.1/${u}`, true);
    expect(buildRound(q, "s", st)).toHaveLength(3);
    expect(buildRound(q, "all", st)).toHaveLength(3);
  });

  it("gives a review one key per question, also with variants", () => {
    const review = c.quizzes["p/1/r"];
    expect(progress(review, emptyStats()).total).toBe(3);
    expect(buildRound(review, "all", emptyStats())).toHaveLength(3);
  });
});

describe("review topics", () => {
  const topical = (id, topic) => ({ ...choice(id), topic });
  const files = (reviews) => ({
    "/content/p/1/chapter.js": { title: "C", reviews },
    "/content/p/1/1.1.js": { title: "A", sections: [{ id: "s", questions: [topical("0001", "t"), topical("0002", "t"), choice("0003")] }] },
  });
  const review = { id: "r", title: "R", include: ["1.1"] };

  it("counts questions on one topic once only in a review that asks for it", () => {
    expect(progress(buildCatalog(files([{ ...review, byTopic: true }])).quizzes["p/1/r"], emptyStats()).total).toBe(2);
    expect(progress(buildCatalog(files([review])).quizzes["p/1/r"], emptyStats()).total).toBe(3);
  });

  it("leaves the keys of a subchapter summary unchanged", () => {
    const summary = buildCatalog(files([{ ...review, byTopic: true }])).quizzes["p/1/1.1/podsumowanie"];
    expect(allOf(summary).map((q) => q.key)).toEqual(["p/1/1.1/0001", "p/1/1.1/0002", "p/1/1.1/0003"]);
  });
});

describe("buildRound", () => {
  it("'all' samples a full round from the whole quiz", () => {
    expect(buildRound(quiz, "all", emptyStats())).toHaveLength(ROUND_SIZE);
  });

  it("plays a small section in full and samples a big one", () => {
    expect(buildRound(quiz, "small", emptyStats())).toHaveLength(10);
    expect(buildRound(quiz, "big", emptyStats())).toHaveLength(ROUND_SIZE);
  });

  it("keeps a section round short when only a few questions are open", () => {
    let st = emptyStats();
    for (const i of ids(10).slice(2)) for (let n = 0; n < 2; n++) st = recordAnswer(st, `h/1/1.1/${i}`, true);
    const round = buildRound(quiz, "small", st);
    expect(round).toHaveLength(2 + CHECKS);
    expect(round.filter((q) => ["h/1/1.1/0001", "h/1/1.1/0002"].includes(q.id))).toHaveLength(2);
    for (const i of ids(2)) for (let n = 0; n < 2; n++) st = recordAnswer(st, `h/1/1.1/${i}`, true);
    expect(buildRound(quiz, "small", st)).toHaveLength(10);
  });

  it("takes every unit once before repeating skill variants", () => {
    const mixed = buildCatalog({ "/content/g/1/1.1.js": { title: "G", sections: [{ id: "s", questions: [
      ...ids(10).map(choice),
      ...ids(60).map((i) => ({ type: "number", skill: "km", q: `km${i}`, answer: "1" })),
    ] }] } }).quizzes["g/1/1.1"];
    const round = buildRound(mixed, "all", emptyStats());
    expect(round.filter((q) => q.type === "choice")).toHaveLength(10);
    expect(round.filter((q) => q.skill === "km")).toHaveLength(2);
  });

  it("keeps a round short when only a few task types are left", () => {
    let st = emptyStats();
    for (let i = 0; i < 2; i++) st = recordAnswer(st, "m/skill/nww", true);
    const round = buildRound(cat.quizzes["m/1/1.1"], "all", st);
    expect(round.filter((q) => q.skill === "nwd")).toHaveLength(2);
    expect(round).toHaveLength(2 + 1);
  });

  it("makes chapter-wide rounds longer", () => {
    expect(buildRound(review, "all", emptyStats())).toHaveLength(CHAPTER_ROUND_SIZE);
  });

  it("always puts practice tasks into a review round", () => {
    const c = buildCatalog({
      "/content/g/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.1", "calc"] }] },
      "/content/g/1/1.1.js": { title: "A", sections: [{ id: "s", questions: ids(200).map(choice) }] },
      "/content/g/1/calc.js": { title: "Calc", icon: "🧮", sections: [{ id: "s", questions:
        ids(30).map((i) => ({ type: "number", skill: `k${i % 3}`, q: `c${i}`, answer: "1" })) }] },
    });
    for (let i = 0; i < 20; i++) {
      const round = buildRound(c.quizzes["g/1/r"], "all", emptyStats());
      expect(round).toHaveLength(CHAPTER_ROUND_SIZE);
      expect(round.filter((q) => q.skill).length).toBeGreaterThanOrEqual(REVIEW_PRACTICE_MIN);
    }
  });

  it("gives each task type more variants when a review asks for it", () => {
    const c = buildCatalog({
      "/content/g/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.1", "calc"], variants: 3 }] },
      "/content/g/1/1.1.js": { title: "A", sections: [{ id: "s", questions: ids(200).map(choice) }] },
      "/content/g/1/calc.js": { title: "Calc", icon: "🧮", sections: [{ id: "s", questions:
        ids(30).map((i) => ({ type: "number", skill: `k${i % 2}`, q: `c${i}`, answer: "1" })) }] },
    });
    const round = buildRound(c.quizzes["g/1/r"], "all", emptyStats());
    expect(round.filter((q) => q.skill === "k0")).toHaveLength(3);
    expect(round.filter((q) => q.skill === "k1")).toHaveLength(3);
  });

  it("uses subchapters as sections of a review", () => {
    const round = buildRound(review, "1.2", emptyStats());
    expect(round.map((q) => q.id).sort()).toEqual(ids(5).map((i) => `h/1/1.2/${i}`));
  });
});

describe("hard mode", () => {
  it("contains only questions with mistakes that are not yet mastered", () => {
    let st = emptyStats();
    st = recordAnswer(st, "h/1/1.1/0001", false);
    st = recordAnswer(st, "h/1/1.1/0002", false);
    st = recordAnswer(st, "h/1/1.1/0002", true);
    st = recordAnswer(st, "h/1/1.1/0002", true);
    st = recordAnswer(st, "h/1/1.1/0003", true);
    expect(buildRound(quiz, "hard", st).map((q) => q.id)).toEqual(["h/1/1.1/0001"]);
  });

  it("gathers the chapter hard questions from its subchapters, not from review answers", () => {
    const hard = cat.quizzes["h/1/trudne"];
    let st = recordAnswer(emptyStats(), "h/1/1.2/0003", false);
    expect(hardUnits(hard, st)).toEqual(["h/1/1.2/0003"]);
    st = recordReviewAnswer(st, "h/1/r", "h/1/1.2/0004", false);
    expect(hardUnits(hard, st)).toEqual(["h/1/1.2/0003"]);
    expect(buildRound(hard, "hard", st).map((q) => q.id)).toEqual(["h/1/1.2/0003"]);
  });

  it("orders units by error rate", () => {
    let st = emptyStats();
    st = recordAnswer(st, "h/1/1.1/0001", false);
    st = recordAnswer(st, "h/1/1.1/0001", true);
    st = recordAnswer(st, "h/1/1.1/0002", false);
    expect(hardUnits(quiz, st)).toEqual(["h/1/1.1/0002", "h/1/1.1/0001"]);
  });

  it("serves a few fresh variants of each weak skill", () => {
    const math = cat.quizzes["m/1/1.1"];
    let st = recordAnswer(emptyStats(), "m/skill/nwd", false);
    st = recordAnswer(st, "m/skill/nww", true);
    const round = buildRound(math, "hard", st);
    expect(round).toHaveLength(HARD_VARIANTS);
    expect(new Set(round.map((q) => q.q)).size).toBe(HARD_VARIANTS);
    expect(round.every((q) => q.skill === "nwd")).toBe(true);
  });

  it("needs 2 correct answers in a row to master a skill", () => {
    const math = cat.quizzes["m/1/1.1"];
    let st = recordAnswer(emptyStats(), "m/skill/nwd", false);
    st = recordAnswer(st, "m/skill/nwd", true);
    expect(hardUnits(math, st)).toEqual(["m/skill/nwd"]);
    st = recordAnswer(st, "m/skill/nwd", true);
    expect(hardUnits(math, st)).toEqual([]);
  });

  it("checks a task type twice in a summary and masters it after 2 correct answers there", () => {
    const summary = cat.quizzes["m/1/1.1/podsumowanie"];
    const round = buildRound(summary, "all", emptyStats());
    const perSkill = Object.groupBy(round, (q) => q.skill);
    expect(Object.values(perSkill).every((qs) => qs.length === 2)).toBe(true);
    let st = recordReviewAnswer(emptyStats(), summary.review, "m/skill/nwd", true);
    expect(progress(summary, st).done).toBe(0);
    st = recordReviewAnswer(st, summary.review, "m/skill/nwd", true);
    expect(progress(summary, st).done).toBe(1);
    st = recordReviewAnswer(st, summary.review, "m/skill/nwd", false);
    expect(progress(summary, st).done).toBe(0);
  });

  it("is hidden for a quiz with a single stats unit", () => {
    expect(hasHardMode(cat.quizzes["m/2/2.1"])).toBe(false);
    expect(hasHardMode(cat.quizzes["m/1/1.1"])).toBe(true);
    expect(hasHardMode(quiz)).toBe(true);
  });
});

describe("clearQuiz", () => {
  it("clears a subchapter's questions only", () => {
    let st = recordAnswer(emptyStats(), "h/1/1.2/0001", false);
    st = recordAnswer(st, "h/1/1.1/0001", false);
    st = recordReviewAnswer(st, "h/1/r", "h/1/1.2/0001", false);
    const cleared = clearQuiz(st, cat.quizzes["h/1/1.2"]);
    expect(Object.keys(cleared.units)).toEqual(["h/1/1.1/0001"]);
    expect(cleared.reviews).toEqual(st.reviews);
  });
});

describe("progress", () => {
  const sub = cat.quizzes["h/1/1.2"];
  const master = (st, ids) => ids.reduce((s, id) => recordAnswer(recordAnswer(s, id, true), id, true), st);
  const open = (st, quiz, round) => round.filter((q) => !hardOrMastered(st, quiz, q));
  const hardOrMastered = (st, quiz, q) => (st.units[q.unit]?.streak ?? 0) >= q.streakToMaster;

  it("counts a subchapter question as mastered after 2 correct answers in a row", () => {
    let st = recordAnswer(emptyStats(), "h/1/1.2/0001", true);
    expect(progress(sub, st)).toEqual({ done: 0, total: 5 });
    st = recordAnswer(st, "h/1/1.2/0001", true);
    expect(progress(sub, st)).toEqual({ done: 1, total: 5 });
  });

  it("serves not yet mastered questions first, with a few mastered checks", () => {
    const st = master(emptyStats(), ids(45).slice(0, 40).map((i) => `h/1/1.1/1${i}`));
    for (let i = 0; i < 10; i++) {
      const round = buildRound(quiz, "all", st);
      expect(round.filter((q) => hardOrMastered(st, quiz, q))).toHaveLength(CHECKS);
      expect(open(st, quiz, round)).toHaveLength(10);
    }
  });

  it("makes the last rounds short and goes back to full rounds once all is mastered", () => {
    let st = master(emptyStats(), ids(4).map((i) => `h/1/1.2/${i}`));
    expect(buildRound(sub, "all", st)).toHaveLength(1 + CHECKS);
    st = master(st, ["h/1/1.2/0005"]);
    expect(buildRound(sub, "all", st)).toHaveLength(5);
  });

  it("keeps a review's progress separate and counts only first tries there", () => {
    let st = master(emptyStats(), ids(5).map((i) => `h/1/1.2/${i}`));
    expect(progress(review, st).done).toBe(0);
    st = recordReviewAnswer(st, "h/1/r", "h/1/1.2/0001", true);
    expect(progress(review, st).done).toBe(1);
    st = recordReviewAnswer(st, "h/1/r", "h/1/1.2/0001", false);
    expect(progress(review, st).done).toBe(0);
    expect(resetReview(st, "h/1/r").reviews).toEqual({});
  });

  it("uses more mastered checks in a review", () => {
    let st = emptyStats();
    for (const q of allOf(review).slice(0, 50)) st = recordReviewAnswer(st, "h/1/r", q.key, true);
    const round = buildRound(review, "all", st);
    const keys = st.reviews["h/1/r"].keys;
    expect(round).toHaveLength(5 + REVIEW_CHECKS);
    expect(round.filter((q) => keys[q.key])).toHaveLength(REVIEW_CHECKS);
  });

  it("counts twin questions once in a review and never puts both into one round", () => {
    const c = buildCatalog({
      "/content/g/1/chapter.js": { title: "C", reviews: [{ id: "r", title: "R", include: ["1.1", "1.2"] }] },
      "/content/g/1/1.1.js": { title: "A", sections: [{ id: "s", questions: [{ ...choice("0001"), group: "x" }, choice("0002")] }] },
      "/content/g/1/1.2.js": { title: "B", sections: [{ id: "s", questions: [{ ...choice("0001"), q: "Other", group: "x" }] }] },
    });
    const r = c.quizzes["g/1/r"];
    expect(progress(r, emptyStats()).total).toBe(2);
    expect(progress(c.quizzes["g/1/1.1"], emptyStats()).total).toBe(2);
    for (let i = 0; i < 10; i++) expect(buildRound(r, "all", emptyStats())).toHaveLength(2);
    const st = recordReviewAnswer(emptyStats(), "g/1/r", "g/1/group/x", true);
    expect(progress(r, st).done).toBe(1);
  });
});

describe("stats storage", () => {
  const memory = () => {
    const data = {};
    return { getItem: (k) => data[k] ?? null, setItem: (k, v) => (data[k] = v), data };
  };

  it("round-trips through storage", () => {
    const s = memory();
    saveStats(recordAnswer(emptyStats(), "u", false), s);
    expect(loadStats(s).units.u).toEqual({ asked: 1, wrong: 1, streak: 0 });
    expect(Object.keys(s.data)).toEqual([STATS_KEY]);
  });

  it("survives corrupted or unavailable storage", () => {
    expect(loadStats({ getItem: () => "{oops" })).toEqual(emptyStats());
    expect(loadStats({ getItem: () => { throw new Error("blocked"); } })).toEqual(emptyStats());
    expect(() => saveStats(emptyStats(), { setItem: () => { throw new Error("full"); } })).not.toThrow();
  });

  it("clears only the given units", () => {
    let st = recordAnswer(emptyStats(), "a", false);
    st = recordAnswer(st, "b", false);
    expect(Object.keys(clearUnits(st, ["a"]).units)).toEqual(["b"]);
  });

  it("drops the old game history on load", () => {
    expect(loadStats({ getItem: () => JSON.stringify({ units: {}, games: [{ quiz: "x" }] }) })).toEqual(emptyStats());
  });
});
