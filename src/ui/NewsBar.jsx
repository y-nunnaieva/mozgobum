import { joinPl, useNews } from "../news.js";
import { Icon } from "./Icon.jsx";

export function NewsBar({ subjects }) {
  const [fresh, dismiss] = useNews(subjects);
  if (!fresh.length) return null;
  return (
    <div class="news-bar" role="status">
      <Icon name="campaign" />
      <span class="news-text">Nowe quizy z <b>{joinPl(fresh.map((s) => s.genitive))}</b></span>
      <button class="news-close" onClick={dismiss} aria-label="Zamknij" title="Zamknij">
        <Icon name="close" />
      </button>
    </div>
  );
}
