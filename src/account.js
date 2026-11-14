import { useEffect, useState } from "preact/hooks";
import { clearQuiz as clearQuizLocal, isReview, quizUnits } from "./modes.js";
import { emptyStats, loadStats, recordAnswer, recordReviewAnswer, resetReview as resetReviewLocal, saveStats } from "./stats.js";

// Public by design: access is limited by the database's row level security.
const SUPABASE_URL = "https://dpgueseaeqhjytqpqxuo.supabase.co";
const SUPABASE_KEY = "sb_publishable_RmsubX2iqdAk2NWGZ3mlqw_6K-vTURp";
// Accounts have no e-mail: the nick becomes the local part of a technical address.
const DOMAIN = "mozgobum.invalid";
const SESSION_KEY = "sb-dpgueseaeqhjytqpqxuo-auth-token";
const VIEWING_KEY = "szkolne-quizy:viewing";

export const NICK = /^[a-z0-9_]{3,20}$/;
export const MIN_PASSWORD = 6;
// Logins are case-insensitive; the nick is shown as it was typed.
export const normalizeNick = (nick) => nick.trim().toLowerCase();

const state = { status: "guest", profile: null, kids: [], viewing: null, stats: emptyStats() };
const listeners = new Set();
const set = (patch) => {
  Object.assign(state, patch);
  listeners.forEach((l) => l());
};

let client;
async function supabase() {
  if (!client) {
    const { createClient } = await import("@supabase/supabase-js");
    client = createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  return client;
}

const storage = {
  get: (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set: (key, value) => {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch {
      // Only a convenience: the choice is not remembered.
    }
  },
};

// The API returns at most 1000 rows per request (max_rows), so bigger tables are read in pages.
const PAGE = 1000;

async function fetchAll(sb, table, columns, childId, order) {
  const rows = [];
  for (let from = 0; ; from += PAGE) {
    let query = sb.from(table).select(columns).eq("child_id", childId);
    for (const column of order) query = query.order(column);
    const { data, error } = await query.range(from, from + PAGE - 1);
    if (error) throw error;
    rows.push(...data);
    if (data.length < PAGE) return rows;
  }
}

async function fetchStats(childId) {
  const sb = await supabase();
  const [units, reviews, keys] = await Promise.all([
    fetchAll(sb, "unit_stats", "unit, asked, wrong, streak", childId, ["unit"]),
    fetchAll(sb, "review_stats", "review, last", childId, ["review"]),
    fetchAll(sb, "review_keys", "review, key, streak", childId, ["review", "key"]),
  ]);
  const stats = emptyStats();
  for (const { unit, asked, wrong, streak } of units) stats.units[unit] = { asked, wrong, streak };
  for (const { review, last } of reviews) stats.reviews[review] = { keys: {}, last };
  for (const { review, key, streak } of keys) stats.reviews[review].keys[key] = streak;
  return stats;
}

async function loadAccount() {
  const sb = await supabase();
  const { data: { session }, error: sessionError } = await sb.auth.getSession();
  // A phone waking up has no network yet: the refresh fails, but the stored session is still good.
  if (sessionError && storage.get(SESSION_KEY)) throw sessionError;
  if (!session) {
    set({ status: "guest", profile: null, kids: [], viewing: null, stats: loadStats() });
    return;
  }
  const { data: profile, error } = await sb.from("profiles").select("id, nick: display_nick, role").eq("id", session.user.id).single();
  if (error) throw error;
  if (profile.role === "child") {
    set({ status: "child", profile, kids: [], viewing: null, stats: await fetchStats(profile.id) });
    return;
  }
  const { data: kids } = await sb.from("profiles").select("id, nick: display_nick").eq("parent_id", profile.id).order("nick");
  const viewing = kids.find((k) => k.id === storage.get(VIEWING_KEY)) ?? null;
  set({ status: "parent", profile, kids, viewing, stats: viewing ? await fetchStats(viewing.id) : emptyStats() });
}

async function reload() {
  try {
    await loadAccount();
  } catch {
    // Offline or the project is paused: keep what is shown.
  }
}

// Guests never load the Supabase client; a stored session means someone signed in on this device.
export function startAccount() {
  // A stored session on a "guest" means the page opened offline: the account comes back with the network.
  const refresh = () => {
    if (document.visibilityState === "visible" && (state.status !== "guest" || storage.get(SESSION_KEY))) reload();
  };
  // Another device may have played in the meantime.
  document.addEventListener("visibilitychange", refresh);
  window.addEventListener("online", refresh);
  // A parent watching an open tab sees the child's newest answers on every page.
  window.addEventListener("hashchange", () => state.status === "parent" && state.viewing && reload());

  if (!storage.get(SESSION_KEY)) {
    set({ status: "guest", stats: loadStats() });
    return;
  }
  set({ status: "loading" });
  reload().then(() => state.status === "loading" && set({ status: "guest", stats: loadStats() }));
}

const LOGIN_ERRORS = { invalid_credentials: "Zły nick lub hasło." };
const failed = (error, messages = {}) => messages[error?.code] ?? "Coś poszło nie tak. Spróbuj jeszcze raz.";

function checkForm(nick, password) {
  if (!NICK.test(nick)) return "Nick: 3–20 znaków – litery bez polskich znaków, cyfry lub _.";
  if (password.length < MIN_PASSWORD) return `Hasło musi mieć co najmniej ${MIN_PASSWORD} znaków.`;
  return null;
}

// Each returns an error message for the form, or null on success.
export async function signIn(nick, password) {
  const name = normalizeNick(nick);
  const sb = await supabase();
  const { error } = await sb.auth.signInWithPassword({ email: `${name}@${DOMAIN}`, password });
  if (error) return failed(error, LOGIN_ERRORS);
  await reload();
  return null;
}

export async function signUpParent(nick, password) {
  const name = normalizeNick(nick);
  const invalid = checkForm(name, password);
  if (invalid) return invalid;
  const sb = await supabase();
  const { error } = await sb.auth.signUp({ email: `${name}@${DOMAIN}`, password, options: { data: { nick: nick.trim() } } });
  if (error) return failed(error, { user_already_exists: "Ten nick jest już zajęty." });
  await reload();
  return null;
}

// Only this device: mum and dad share one parent account on their own phones.
export async function signOut() {
  const sb = await supabase();
  await sb.auth.signOut({ scope: "local" });
  storage.set(VIEWING_KEY, null);
  set({ status: "guest", profile: null, kids: [], viewing: null, stats: loadStats() });
}

export async function addChild(nick, password) {
  const name = normalizeNick(nick);
  const invalid = checkForm(name, password);
  if (invalid) return invalid;
  const sb = await supabase();
  const { error } = await sb.functions.invoke("create-child", { body: { nick: nick.trim(), password } });
  if (error) {
    const body = await error.context?.json?.().catch(() => null);
    return body?.error === "nick_taken" ? "Ten nick jest już zajęty." : failed(null);
  }
  await reload();
  return null;
}

export async function viewChild(id) {
  storage.set(VIEWING_KEY, id);
  await reload();
}

// Guests keep their stats in this browser; a child's go to the database, a parent's preview records nothing.
export function answer(quiz, q, ok) {
  if (state.status === "parent") return;
  const review = isReview(quiz);
  let next = recordAnswer(state.stats, q.unit, ok);
  if (review) next = recordReviewAnswer(next, quiz.review, q.key, ok);
  set({ stats: next });
  if (state.status === "guest") saveStats(next);
  else supabase().then((sb) => sb.rpc("record_answer", {
    p_unit: q.unit, p_ok: ok, p_review: review ? quiz.review : null, p_key: review ? q.key : null,
  }));
}

export async function resetReview(review) {
  if (state.status === "guest") {
    const next = resetReviewLocal(state.stats, review);
    saveStats(next);
    set({ stats: next });
    return;
  }
  const child = state.status === "child" ? state.profile.id : state.viewing?.id;
  if (!child) return;
  const sb = await supabase();
  await sb.rpc("reset_review", { p_child: child, p_review: review });
  await reload();
}

export async function clearQuiz(quiz) {
  if (state.status === "guest") {
    const next = isReview(quiz) ? resetReviewLocal(state.stats, quiz.review) : clearQuizLocal(state.stats, quiz);
    saveStats(next);
    set({ stats: next });
    return;
  }
  if (state.status !== "parent" || !state.viewing) return;
  if (isReview(quiz)) return resetReview(quiz.review);
  const sb = await supabase();
  await sb.rpc("clear_units", { p_child: state.viewing.id, p_units: quizUnits(quiz) });
  await reload();
}

export function useAccount() {
  const [, rerender] = useState(0);
  // Guest stats live in localStorage, which may have changed since the last page (or test).
  useState(() => state.status === "guest" && (state.stats = loadStats()));
  useEffect(() => {
    const listener = () => rerender((n) => n + 1);
    listeners.add(listener);
    return () => listeners.delete(listener);
  }, []);
  return {
    ...state,
    canClear: state.status === "guest" || (state.status === "parent" && !!state.viewing),
  };
}
