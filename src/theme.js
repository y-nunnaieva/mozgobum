import { useState } from "preact/hooks";

export const THEME_KEY = "szkolne-quizy:theme";

const systemTheme = () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function storedTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch {
    return null;
  }
}

// Until the user picks a theme, none is stored and the CSS follows the system setting.
export function useTheme() {
  const [theme, setTheme] = useState(() => storedTheme() ?? systemTheme());
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Not persisted; the choice still applies until reload.
    }
    setTheme(next);
  };
  return [theme, toggle];
}
