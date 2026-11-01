import { useEffect, useState } from "preact/hooks";

const currentPath = () => decodeURIComponent(location.hash.replace(/^#\/?/, "")).replace(/\/$/, "");

export const href = (path) => `#/${path}`;

export function useHashPath() {
  const [path, setPath] = useState(currentPath);
  useEffect(() => {
    const onChange = () => {
      setPath(currentPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return path;
}
