// Phone keyboards type curly apostrophes (it’s), so every apostrophe-like mark counts as '.
export const normalizeText = (s) =>
  String(s).trim().toLowerCase().replace(/[’‘`´]/g, "'").replace(/\s+/g, " ");

export const checkText = (question, input) => question.answers.map(normalizeText).includes(normalizeText(input));

// One or two English words; a word may contain an apostrophe or a hyphen (it's, T-shirt).
const WORD = "[a-z]+(?:['-][a-z]+)*";
export const isValidTextAnswer = (s) => new RegExp(`^${WORD}(?: ${WORD})?$`).test(normalizeText(s)) && s === s.trim();
