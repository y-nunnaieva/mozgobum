import { PALETTE } from "./palette.js";
import { parseNumber } from "./types/number.js";
import { isValidTextAnswer, normalizeText } from "./types/text.js";
import { allQuestions } from "./content.js";

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;

function questionErrors(q) {
  const e = [];
  if (!q.q?.trim()) e.push("missing question text");
  if (q.type !== "number" && !q.explain?.trim()) e.push("missing explanation");
  if (![1, 2, 3].includes(q.level)) e.push("level must be 1, 2 or 3");
  switch (q.type) {
    case "choice": {
      const all = [...(q.correct ?? []), ...(q.wrong ?? [])];
      if (!q.correct?.length) e.push("no correct answer");
      if (all.length < 3) e.push("fewer than 3 options");
      if (hasDuplicates(all)) e.push("duplicate options");
      break;
    }
    case "order":
      if (!(q.items?.length >= 3)) e.push("fewer than 3 items");
      if (hasDuplicates(q.items ?? [])) e.push("duplicate items");
      break;
    case "pairs": {
      const pairs = q.pairs ?? [];
      if (pairs.length < 3) e.push("fewer than 3 pairs");
      if (hasDuplicates(pairs.map((p) => p[0])) || hasDuplicates(pairs.map((p) => p[1]))) e.push("duplicate pair sides");
      break;
    }
    case "number": {
      const n = parseNumber(q.answer ?? "");
      if (!n) e.push(`unparseable answer ${JSON.stringify(q.answer)}`);
      else if (!n.reduced) e.push(`answer ${q.answer} is not reduced`);
      // A number task is tracked either per skill (many variants) or on its own, by id.
      if (!q.skill && !q.id) e.push("missing skill or id");
      break;
    }
    case "text": {
      const answers = q.answers ?? [];
      if (!answers.length) e.push("no answers");
      for (const a of answers) if (!isValidTextAnswer(a)) e.push(`answer ${JSON.stringify(a)} must be one or two English words`);
      if (hasDuplicates(answers.map(normalizeText))) e.push("duplicate answers");
      break;
    }
    default:
      e.push(`unknown type ${q.type}`);
  }
  if ((q.type !== "number" || q.id) && !/^\d{4}$/.test(q.id?.split("/").pop() ?? "")) e.push("id must be 4 digits");
  return e;
}

export function validateCatalog(catalog) {
  const errors = [];
  const seen = new Set();
  const groups = new Map();
  for (const s of catalog.subjects) {
    for (const c of s.chapters) for (const r of c.reviews) {
      const n = new Set(allQuestions(r).map((q) => q.key)).size;
      if (r.limit === undefined) errors.push(`${r.path}: review type must be one of kartkowka, sprawdzian`);
      else if (n > r.limit) errors.push(`${r.path}: ${n} questions after leaving out details, limit ${r.limit}`);
    }
    if (!s.name || !s.glyph || !s.genitive) errors.push(`${s.id}: subject.js needs name, genitive and glyph`);
    for (const key of ["color", "alt"]) if (!PALETTE.includes(s[key])) errors.push(`${s.id}: subject.js ${key} must be one of ${PALETTE.join(", ")}`);
    if (!Array.isArray(s.icons) || !s.icons.length) errors.push(`${s.id}: subject.js needs icons`);
  }
  for (const quiz of Object.values(catalog.quizzes)) {
    // Reviews and summaries only reference questions validated in their own quizzes.
    if (quiz.include || quiz.parent) continue;
    if (!quiz.title) errors.push(`${quiz.path}: missing title`);
    if (quiz.kind === "practice" && !quiz.icon) errors.push(`${quiz.path}: missing icon`);
    if (hasDuplicates(quiz.sections.map((s) => s.id))) errors.push(`${quiz.path}: duplicate section ids`);
    allQuestions(quiz).forEach((q, i) => {
      const label = `${quiz.path} #${i + 1}${q.id ? ` (${q.id})` : ""}`;
      if (q.id && !q.isVariant) {
        if (seen.has(q.id)) errors.push(`${label}: duplicate id`);
        seen.add(q.id);
      }
      for (const msg of questionErrors(q)) errors.push(`${label}: ${msg}`);
      if (q.group && !q.isVariant) {
        if (q.skill) errors.push(`${label}: number tasks can't be grouped`);
        groups.set(q.key, (groups.get(q.key) ?? 0) + 1);
      }
    });
  }
  for (const [key, n] of groups) if (n < 2) errors.push(`${key}: a group needs at least two questions`);
  return errors;
}
