import { describe, expect, it } from "vitest";
import { checkNumber, groupThousands, parseNumber } from "./number.js";

const ok = (answer, input) => checkNumber({ answer }, input);

describe("parseNumber", () => {
  it.each(["", "abc", "-3", "1/0", "2 0/3", "1 5/3", "1,", ",5", "1/2/3"])("rejects %j", (s) =>
    expect(parseNumber(s)).toBeNull(),
  );
});

describe("checkNumber", () => {
  it("accepts integers and decimals with comma or dot", () => {
    expect(ok("6", "6")).toBe(true);
    expect(ok("6", " 6 ")).toBe(true);
    expect(ok("2,5", "2,5")).toBe(true);
    expect(ok("2,5", "2.5")).toBe(true);
    expect(ok("2,5", "2,50")).toBe(true);
    expect(ok("6", "6,0")).toBe(true);
    expect(ok("6", "7")).toBe(false);
  });

  it("accepts thousands grouped with spaces", () => {
    expect(ok("30000", "30 000")).toBe(true);
    expect(ok("30000", "30 000")).toBe(true);
    expect(ok("1250", "1 250")).toBe(true);
    expect(ok("1250", "12 50")).toBe(false);
  });

  it("requires a reduced fraction", () => {
    expect(ok("3/4", "3/4")).toBe(true);
    expect(ok("3/4", "6/8")).toBe(false);
    expect(ok("3/4", "0,75")).toBe(false);
  });

  it("checks mixed numbers, including a reduced fractional part", () => {
    expect(ok("1 2/3", "1 2/3")).toBe(true);
    expect(ok("1 2/3", "1  2/3")).toBe(true);
    expect(ok("1 1/2", "1 2/4")).toBe(false);
    expect(ok("1 2/3", "5/3")).toBe(false);
  });
});

describe("groupThousands", () => {
  it.each([
    ["123", "123"],
    ["1234", "1 234"],
    ["1 2345", "12 345"],
    ["1234567,25", "1 234 567,25"],
    ["1234.", "1 234."],
    ["1 2/3", "1 2/3"],
    ["12/34", "12/34"],
    ["", ""],
  ])("%j → %j", (input, out) => expect(groupThousands(input)).toBe(out));
});
