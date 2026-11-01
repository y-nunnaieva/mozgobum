export function plural(n, one, few, many) {
  if (n === 1) return one;
  const tens = n % 100;
  return n % 10 >= 2 && n % 10 <= 4 && (tens < 10 || tens >= 20) ? few : many;
}

export const pytan = (n) => plural(n, "pytanie", "pytania", "pytań");
export const typowZadan = (n) => plural(n, "typ zadania", "typy zadań", "typów zadań");
export const zadan = (n) => plural(n, "zadanie", "zadania", "zadań");
export const trudne = (n) => plural(n, "trudne", "trudne", "trudnych");

// "4 podrozdziały · Obliczenia": the textbook subchapters plus the chapter's extra pages by name.
export function chapterMeta(c) {
  const n = c.subchapters.length;
  return [n ? `${n} ${plural(n, "podrozdział", "podrozdziały", "podrozdziałów")}` : null, ...c.practices.map((p) => p.title)]
    .filter(Boolean).join(" · ");
}

export const rozdzialow = (n) => plural(n, "rozdział", "rozdziały", "rozdziałów");

// Number variants of one skill count once: the student sees task types, not hundreds of variants.
// A single task type has nothing to count, so its variants are shown instead.
export function countLabel(questions) {
  const n = new Set(questions.map((q) => q.unit)).size;
  if (!questions.every((q) => q.skill)) return `${n} ${pytan(n)}`;
  return n === 1 ? `${questions.length} ${zadan(questions.length)}` : `${n} ${typowZadan(n)}`;
}
