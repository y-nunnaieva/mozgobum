import { useState } from "preact/hooks";

export const NEWS_KEY = "szkolne-quizy:seen-quizzes";

// Quizzes worth announcing: subchapters, shown extra quizzes and chapter reviews (summaries come with their subchapter).
export const announcedQuizzes = (subjects) =>
  subjects.flatMap((s) => s.chapters.flatMap((c) =>
    [...c.subchapters, ...c.practices, ...c.reviews].map((q) => ({ path: q.path, subject: s.id }))));

// The first visit on a device only remembers what exists; later visits collect the subjects of new quizzes
// until the message is closed, so a subject is never dropped before anyone saw it.
export function updateNews(saved, quizzes) {
  const paths = quizzes.map((q) => q.path);
  if (!saved) return { seen: paths, fresh: [] };
  const seen = new Set(saved.seen);
  const added = quizzes.filter((q) => !seen.has(q.path)).map((q) => q.subject);
  return { seen: paths, fresh: [...new Set([...saved.fresh, ...added])] };
}

export function joinPl(words) {
  if (words.length < 2) return words.join("");
  return `${words.slice(0, -1).join(", ")} i ${words.at(-1)}`;
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(NEWS_KEY));
  } catch {
    return null;
  }
}

function save(news) {
  try {
    localStorage.setItem(NEWS_KEY, JSON.stringify(news));
  } catch {
    // Not persisted: the message may show again after a reload.
  }
}

export function useNews(subjects) {
  const [news, setNews] = useState(() => {
    const next = updateNews(load(), announcedQuizzes(subjects));
    save(next);
    return next;
  });
  const dismiss = () => {
    const next = { ...news, fresh: [] };
    save(next);
    setNews(next);
  };
  // Kept in catalog order, so the message does not depend on when each subject got new quizzes.
  const fresh = subjects.filter((s) => news.fresh.includes(s.id));
  return [fresh, dismiss];
}
