import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { PALETTE } from "./palette.js";

describe("palette", () => {
  it("matches the SCSS tokens", () => {
    const tokens = readFileSync(new URL("./styles/abstracts/_tokens.scss", import.meta.url), "utf8");
    const block = tokens.match(/\$palette:\s*\(([\s\S]*?)\);/)[1];
    expect([...block.matchAll(/"([a-z]+)":/g)].map((m) => m[1])).toEqual(PALETTE);
  });
});
