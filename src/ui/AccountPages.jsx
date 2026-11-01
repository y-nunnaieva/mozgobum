import { useState } from "preact/hooks";
import { addChild, MIN_PASSWORD, signIn, signOut, signUpParent, useAccount, viewChild } from "../account.js";
import { href } from "../router.js";
import { Icon } from "./Icon.jsx";

export const LOGIN_ID = "logowanie";
export const SIGNUP_ID = "rejestracja";
export const PARENT_ID = "rodzic";
export const ACCOUNT_ID = "konto";
export const ACCOUNT_PAGES = [LOGIN_ID, SIGNUP_ID, PARENT_ID, ACCOUNT_ID];

// Nick + password form shared by sign-in, parent sign-up and adding a child.
function NickForm({ submit, label, repeat, newPassword, onDone }) {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [again, setAgain] = useState("");
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (repeat && password !== again) return setError("Hasła się różnią.");
    setBusy(true);
    const message = await submit(nick, password);
    setBusy(false);
    setError(message);
    if (!message) {
      setNick("");
      setPassword("");
      setAgain("");
      onDone?.();
    }
  };

  return (
    <form class="account-form" onSubmit={onSubmit}>
      <label class="field">
        <span>Nick</span>
        <input
          class="text-input"
          value={nick}
          onInput={(e) => setNick(e.currentTarget.value)}
          autoComplete="username"
          autoCapitalize="none"
          spellcheck={false}
          required
        />
      </label>
      <label class="field">
        <span>Hasło{newPassword ? ` (min. ${MIN_PASSWORD} znaków)` : ""}</span>
        <input
          class="text-input"
          type="password"
          value={password}
          onInput={(e) => setPassword(e.currentTarget.value)}
          autoComplete={newPassword ? "new-password" : "current-password"}
          required
        />
      </label>
      {repeat && (
        <label class="field">
          <span>Powtórz hasło</span>
          <input
            class="text-input"
            type="password"
            value={again}
            onInput={(e) => setAgain(e.currentTarget.value)}
            autoComplete="new-password"
            required
          />
        </label>
      )}
      {error && <p class="form-error" role="alert">{error}</p>}
      <button class="btn account-submit" type="submit" disabled={busy}>{label}</button>
    </form>
  );
}

const BackHome = () => (
  <a class="pill" href={href("")}><Icon name="arrow_back" class="pill-icon" /><span class="pill-text">Strona główna</span></a>
);

const goAfterLogin = () => {
  location.hash = href("");
};

export function LoginPage() {
  return (
    <main class="view account-page">
      <BackHome />
      <h1>Zaloguj się</h1>
      <NickForm submit={signIn} label="Zaloguj się" onDone={goAfterLogin} />
      <p class="muted">
        Rodzic? <a class="text-link" href={href(SIGNUP_ID)}>Załóż konto rodzica</a> – konta dzieci zakładasz potem u siebie.
      </p>
    </main>
  );
}

export function SignupPage() {
  return (
    <main class="view account-page">
      <BackHome />
      <h1>Konto rodzica</h1>
      <p class="muted">Wymyśl nick i hasło. Nie podajesz e-maila. Na to samo konto możecie zalogować się oboje, każde na swoim telefonie.</p>
      <NickForm submit={signUpParent} label="Załóż konto" repeat newPassword onDone={() => (location.hash = href(PARENT_ID))} />
      <p class="muted">Masz już konto? <a class="text-link" href={href(LOGIN_ID)}>Zaloguj się</a></p>
    </main>
  );
}

export function ParentPage() {
  const { status, profile, kids, viewing } = useAccount();
  const [adding, setAdding] = useState(false);
  if (status !== "parent") return <SignedOut />;

  const pick = async (id) => {
    await viewChild(id);
    location.hash = href("");
  };

  return (
    <main class="view account-page">
      <BackHome />
      <header class="account-head">
        <h1>Dzieci</h1>
        <p class="muted">Zalogowano jako rodzic: <b>{profile.nick}</b></p>
      </header>
      {kids.length > 0 ? (
        <ul class="kid-list">
          {kids.map((k) => (
            <li key={k.id}>
              <button class={`kid${viewing?.id === k.id ? " kid--current" : ""}`} onClick={() => pick(k.id)}>
                <span class="tile tile--section"><Icon name="face" /></span>
                <span class="kid-name">{k.nick}</span>
                <span class="kid-action">{viewing?.id === k.id ? "Oglądasz" : "Zobacz postęp"}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nie masz jeszcze konta dziecka.</p>
      )}
      {adding ? (
        <section class="block">
          <h2 class="heading--4">Nowe konto dziecka</h2>
          <p class="muted">Dziecko loguje się tym nickiem i hasłem na swoim urządzeniu.</p>
          <NickForm submit={addChild} label="Dodaj dziecko" newPassword onDone={() => setAdding(false)} />
        </section>
      ) : (
        <button class="btn btn--secondary account-add" onClick={() => setAdding(true)}>
          <Icon name="person_add" />Dodaj dziecko
        </button>
      )}
      <SignOutButton />
    </main>
  );
}

export function ChildAccountPage() {
  const { status, profile } = useAccount();
  if (status !== "child") return <SignedOut />;
  return (
    <main class="view account-page">
      <BackHome />
      <header class="account-head">
        <h1>Cześć, {profile.nick}!</h1>
        <p class="muted">Twój postęp zapisuje się na koncie, więc widzisz go na każdym urządzeniu.</p>
      </header>
      <SignOutButton />
    </main>
  );
}

function SignOutButton() {
  const out = async () => {
    await signOut();
    location.hash = href("");
  };
  return (
    <button class="link account-logout" onClick={out}>
      <Icon name="logout" class="pill-icon" />Wyloguj się
    </button>
  );
}

function SignedOut() {
  return (
    <main class="view account-page">
      <BackHome />
      <h1>Nie jesteś zalogowany</h1>
      <a class="btn account-submit" href={href(LOGIN_ID)}>Zaloguj się</a>
    </main>
  );
}

// Shown on every page while a parent looks at a child's progress.
export function ViewingBar() {
  const { status, viewing } = useAccount();
  if (status !== "parent") return null;
  return (
    <a class="viewing-bar" href={href(PARENT_ID)}>
      <Icon name="visibility" />
      <span>{viewing ? <>Podgląd: <b>{viewing.nick}</b></> : "Wybierz dziecko, żeby zobaczyć postęp"}</span>
      <span class="viewing-change">zmień</span>
    </a>
  );
}

export function accountHref(status) {
  if (status === "parent") return href(PARENT_ID);
  if (status === "child") return href(ACCOUNT_ID);
  return href(LOGIN_ID);
}
