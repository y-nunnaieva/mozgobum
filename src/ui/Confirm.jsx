import { useEffect, useRef } from "preact/hooks";

// In-page dialog instead of confirm(), which is unreliable inside embedded webviews.
export function Confirm({ text, onYes, onNo }) {
  const noRef = useRef(null);
  useEffect(() => {
    noRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onNo();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onNo]);

  return (
    <div class="confirm" onClick={(e) => e.target === e.currentTarget && onNo()}>
      <div class="confirm-box" role="dialog" aria-modal="true" aria-labelledby="confirm-text">
        <p id="confirm-text">{text}</p>
        <div class="confirm-btns">
          {/* The safe answer stands out and has focus; "Tak" is the quieter one. */}
          <button class="btn btn--secondary" onClick={onYes}>Tak</button>
          <button class="btn" ref={noRef} onClick={onNo}>Nie</button>
        </div>
      </div>
    </div>
  );
}
