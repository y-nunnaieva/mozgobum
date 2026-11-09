// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/preact";
import { buildCatalog } from "../content.js";
import { SummaryBadge } from "./SummaryBadge.jsx";

const question = (id) => ({ id, q: `Pytanie ${id}?`, correct: ["A"], wrong: ["B", "C"], explain: "Wyj" });
const quiz = buildCatalog({
  "/content/h/subject.js": { name: "Hist", icon: "🏛️" },
  "/content/h/1/chapter.js": { title: "Rozdział" },
  "/content/h/1/1.1.js": {
    title: "Temat",
    sections: [{ id: "s", name: "Dział", icon: "1", questions: ["0001", "0002", "0003", "0004"].map(question) }],
  },
}).quizzes["h/1/1.1"];

const statsWith = (streaks) => ({
  units: {},
  reviews: {
    [quiz.summary.review]: {
      keys: Object.fromEntries(streaks.map((streak, i) => [`h/1/1.1/000${i + 1}`, streak])),
    },
  },
});

afterEach(cleanup);

describe("summary dots", () => {
  it("are hidden until a summary answer is mastered", () => {
    const { container } = render(<SummaryBadge quiz={quiz} stats={statsWith([0, 0])} />);
    expect(container.firstChild).toBeNull();
  });

  it.each([
    [[1], 1],
    [[1, 1], 2],
    [[1, 1, 1], 2],
    [[1, 1, 1, 1], 3],
    [[1, 1, 1, 0], 2],
  ])("for streaks %j light %i", (streaks, lit) => {
    const { container } = render(<SummaryBadge quiz={quiz} stats={statsWith(streaks)} />);
    expect(screen.getByRole("img").getAttribute("aria-label")).toBe(`${lit} z 3`);
    expect(container.querySelectorAll(".summary-dot--on")).toHaveLength(lit);
  });
});
