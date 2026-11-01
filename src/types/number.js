const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// Parses a child's numeric answer into an exact rational plus the form it was written in.
// Forms: "decimal" (integers and decimals, comma or dot), "fraction" (3/4), "mixed" (1 2/3).
export function parseNumber(input) {
  const s = String(input).trim().replace(/\s+/g, " ");
  let m;
  // The integer part may group thousands with spaces ("30 000"); a mixed number always has a slash.
  if ((m = s.match(/^(\d{1,3}(?: \d{3})+|\d+)(?:[.,](\d+))?$/))) {
    const frac = m[2] ?? "";
    const d = 10 ** frac.length;
    return { form: "decimal", n: Number(m[1].replace(/ /g, "")) * d + Number(frac || 0), d, reduced: true };
  }
  if ((m = s.match(/^(\d+)\/(\d+)$/))) {
    const n = Number(m[1]), d = Number(m[2]);
    if (d === 0) return null;
    return { form: "fraction", n, d, reduced: gcd(n, d) === 1 };
  }
  if ((m = s.match(/^(\d+) (\d+)\/(\d+)$/))) {
    const w = Number(m[1]), n = Number(m[2]), d = Number(m[3]);
    if (d === 0 || n === 0 || n >= d) return null;
    return { form: "mixed", n: w * d + n, d, reduced: gcd(n, d) === 1 };
  }
  return null;
}

const sameValue = (a, b) => a.n * b.d === b.n * a.d;

export function checkNumber(question, input) {
  const given = parseNumber(input);
  const expected = parseNumber(question.answer);
  if (!given || !expected) return false;
  return given.form === expected.form && given.reduced && sameValue(given, expected);
}

// Groups the integer part while typing ("12345" → "12 345"). Anything that is not a plain
// number (a fraction, a mixed number) is left as typed.
export function groupThousands(input) {
  const m = input.replace(/ /g, "").match(/^(\d+)([.,]\d*)?$/);
  if (!m) return input;
  return m[1].replace(/\B(?=(\d{3})+$)/g, " ") + (m[2] ?? "");
}
