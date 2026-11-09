import { describe, expect, it } from "vitest";
import { joinPl, updateNews } from "./news.js";

const q = (path, subject) => ({ path, subject });

describe("new quizzes message", () => {
  it("stays quiet on the first visit", () => {
    expect(updateNews(null, [q("m/1/1.1", "m")])).toEqual({ seen: ["m/1/1.1"], fresh: [] });
  });

  it("collects subjects of new quizzes until closed", () => {
    let news = updateNews(null, [q("m/1/1.1", "m")]);
    news = updateNews(news, [q("m/1/1.1", "m"), q("m/1/1.2", "m")]);
    expect(news.fresh).toEqual(["m"]);
    news = updateNews(news, [q("m/1/1.1", "m"), q("m/1/1.2", "m"), q("b/1/1.1", "b")]);
    expect(news.fresh).toEqual(["m", "b"]);
    news = updateNews({ ...news, fresh: [] }, [q("m/1/1.1", "m"), q("m/1/1.2", "m"), q("b/1/1.1", "b")]);
    expect(news.fresh).toEqual([]);
  });

  it("joins subject names in Polish", () => {
    expect(joinPl(["matematyki"])).toBe("matematyki");
    expect(joinPl(["matematyki", "biologii"])).toBe("matematyki i biologii");
    expect(joinPl(["matematyki", "biologii", "historii"])).toBe("matematyki, biologii i historii");
  });
});
