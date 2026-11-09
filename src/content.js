export const QUESTION_STREAK = 2;
export const HARD_ID = "trudne";
export const STATS_ID = "statystyki";
export const SUMMARY_ID = "podsumowanie";
// Max stats keys in a chapter review; above it the least important questions (level 3) are left out.
export const REVIEW_LIMITS = { kartkowka: 50, sprawdzian: 80 };
// 1 – key (bold in the textbook and what goes with it), 2 – main text, 3 – detail.
export const DEFAULT_LEVEL = 2;
export const statsPath = (quiz) => `${quiz.path}/${STATS_ID}`;
export const SKILL_STREAK = 2;
// In a review a task type needs this many correct answers in a row; a single question needs one.
export const REVIEW_SKILL_STREAK = 2;

const compareNumbers = (a, b) => {
  const x = a.split(".").map(Number), y = b.split(".").map(Number);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const d = (x[i] ?? -1) - (y[i] ?? -1);
    if (d) return d;
  }
  return 0;
};

function prepareQuestion(q, subjectId, chapterPath, subPath, origin) {
  const type = q.type ?? "choice";
  const id = q.id ? `${subPath}/${q.id}` : null;
  // Number variants rarely repeat, so their stats are kept per skill, not per variant.
  const unit = q.skill ? `${subjectId}/skill/${q.skill}` : id;
  // Twin questions (the same fact asked another way) share one key in reviews: one answer is enough there.
  const key = q.group ? `${chapterPath}/group/${q.group}` : unit;
  return { ...q, type, id, unit, key, origin, level: q.level ?? DEFAULT_LEVEL, streakToMaster: q.skill ? SKILL_STREAK : QUESTION_STREAK };
}

// Other wordings of one question: they share its id and stats, so new examples never reset progress.
const expandVariants = ({ variants = [], ...q }) => [q, ...variants.map((v) => ({ ...q, ...v, isVariant: true }))];

// `modules` maps "/content/<subject>/[<chapter>/]<file>.js" to the file's default export.
export function buildCatalog(modules) {
  const subjects = {};
  const subject = (id) => (subjects[id] ??= { id, chapters: {} });
  const chapter = (s, id) => (subject(s).chapters[id] ??= { id, subchapters: {}, reviews: [] });

  for (const [path, data] of Object.entries(modules)) {
    const parts = path.replace(/^\/?content\//, "").replace(/\.js$/, "").split("/");
    if (parts.length === 2 && parts[1] === "subject") Object.assign(subject(parts[0]), data);
    else if (parts.length === 3 && parts[2] === "chapter") Object.assign(chapter(parts[0], parts[1]), data);
    else if (parts.length === 3) chapter(parts[0], parts[1]).subchapters[parts[2]] = data;
    else throw new Error(`Unexpected content file: ${path}`);
  }

  const quizzes = [];
  const sorted = Object.values(subjects).sort((a, b) => (a.name ?? a.id).localeCompare(b.name ?? b.id, "pl"));
  const tree = sorted.map((s) => ({
    ...s,
    chapters: Object.values(s.chapters).sort((a, b) => compareNumbers(a.id, b.id)).map((c) => {
      const base = `${s.id}/${c.id}`;
      const ownQuiz = (name, extra) => {
        const data = c.subchapters[name];
        const path = `${base}/${name}`;
        return {
          ...extra, path, title: data.title, subject: s, chapterTitle: c.title,
          sections: data.sections.map((sec) => ({
            ...sec,
            questions: sec.questions.flatMap(expandVariants).map((q) => ({ ...prepareQuestion(q, s.id, base, path, sec.name), fractions: !!s.fractions })),
          })),
        };
      };
      const names = Object.keys(c.subchapters);
      const isNumber = (name) => /^\d+(\.\d+)*$/.test(name);
      const subchapters = names.filter(isNumber).sort(compareNumbers)
        // `number` orders the files and keeps stats ids stable; `label` is what the UI shows (none in unnumbered subjects).
        .map((num) => ownQuiz(num, { kind: "subchapter", number: num, label: s.numbered === false ? null : num, icon: c.subchapters[num].icon }));
      // Non-numbered files (e.g. "obliczenia") are extra quizzes of the chapter, not textbook subchapters.
      // An optional `order` puts extra quizzes in a teaching order instead of alphabetical.
      const practices = names.filter((n) => !isNumber(n))
        .sort((a, b) => (c.subchapters[a].order ?? Infinity) - (c.subchapters[b].order ?? Infinity) || a.localeCompare(b))
        .map((name) => ownQuiz(name, { kind: "practice", number: null, icon: c.subchapters[name].icon, hidden: !!c.subchapters[name].hidden }));
      // A hidden quiz is only a question source for a chapter review (no card, no own summary).
      const shown = practices.filter((p) => !p.hidden);
      // Every own quiz gets a summary: a review of just that quiz.
      for (const own of [...subchapters, ...shown]) {
        const path = `${own.path}/${SUMMARY_ID}`;
        const title = own.number ? "Podsumowanie podrozdziału" : "Podsumowanie";
        own.summary = { ...own, kind: "review", path, title, review: path, back: own.path, parent: own };
        quizzes.push(own.summary);
      }
      const byName = Object.fromEntries([...subchapters, ...practices].map((q) => [q.number ?? q.path.split("/").pop(), q]));
      // Composed quizzes reference the chapter's own quizzes as sections; questions are never copied.
      const composed = (kind, id, title, include) => ({
        kind, path: `${base}/${id}`, number: null, title, subject: s, chapterTitle: c.title, include, back: base,
        // An entry is a quiz name, or { quiz, sections: [ids] } to take only some of its sections.
        sections: include.map((entry) => {
          const { quiz: name, sections: only } = typeof entry === "string" ? { quiz: entry } : entry;
          const q = byName[name];
          if (!q) throw new Error(`${base}/${id} includes missing quiz ${name}`);
          const picked = only ? q.sections.filter((s) => only.includes(s.id)) : q.sections;
          if (only && picked.length !== only.length) throw new Error(`${base}/${id} includes missing sections of ${name}: ${only}`);
          return { id: name, kind: q.kind, name: q.title, label: q.label, icon: q.label ?? q.icon ?? "", hidden: q.hidden, questions: picked.flatMap((s) => s.questions) };
        }),
      });
      // Each review has its own progress, but no own hard questions: its mistakes land in the subchapters' ones.
      // A big test can set its own `limit` and keep only the most important questions (`maxLevel`).
      const reviews = (c.reviews ?? []).map((r) => {
        const limit = r.limit ?? REVIEW_LIMITS[r.type ?? "sprawdzian"];
        const built = composed("review", r.id, r.title, r.include);
        // Questions on one topic count once here only: a `group` would also change the keys of existing summaries.
        const sections = r.byTopic
          ? built.sections.map((sec) => ({ ...sec, questions: sec.questions.map((q) => (q.topic ? { ...q, key: `${base}/topic/${q.topic}` } : q)) }))
          : built.sections;
        const review = { ...built, sections, review: `${base}/${r.id}`, limit, eyebrow: r.eyebrow, variants: r.variants };
        if (r.maxLevel) return upToLevel(review, r.maxLevel);
        return keyCount(review) > limit ? upToLevel(review, 2) : review;
      });
      // One hard-questions round for the whole chapter, gathered from all its own quizzes.
      const hard = composed("chapter-hard", HARD_ID, "Moje trudne pytania", Object.keys(byName));
      quizzes.push(...reviews, hard, ...subchapters, ...practices);
      return { id: c.id, title: c.title, subchapters, practices: shown, reviews, hard };
    }),
  }));

  return { subjects: tree, quizzes: Object.fromEntries(quizzes.map((q) => [q.path, q])) };
}

export const allQuestions = (quiz) => quiz.sections.flatMap((s) => s.questions);

const keyCount = (quiz) => new Set(allQuestions(quiz).map((q) => q.key)).size;

// A twin group stays as long as one of its forms is not a detail.
const upToLevel = (quiz, level) => ({
  ...quiz,
  sections: quiz.sections
    .map((s) => ({ ...s, questions: s.questions.filter((q) => q.level <= level) }))
    .filter((s) => s.questions.length),
});

// "1.1 W świecie organizmów", "Obliczenia · Podsumowanie"
export function quizName(quiz) {
  if (quiz.parent && !quiz.label) return `${quiz.parent.title} · ${quiz.title}`;
  return quiz.label ? `${quiz.label} ${quiz.title}` : quiz.title;
}

// "podrozdziały 1.1, 1.2 + Obliczenia"
export function reviewScope(review) {
  const nums = review.sections.filter((s) => s.label).map((s) => s.label);
  const extras = review.sections.filter((s) => !s.label && !s.hidden).map((s) => s.name);
  return [nums.length ? `podrozdziały ${nums.join(", ")}` : null, ...extras].filter(Boolean).join(" + ");
}

export const chapterQuizzes = (chapter) => [...chapter.subchapters, ...chapter.practices, ...chapter.reviews];
