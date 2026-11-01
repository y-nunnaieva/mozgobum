import { chapterMeta } from "../format.js";
import { hardUnits } from "../modes.js";
import { href } from "../router.js";
import { useAccount } from "../account.js";
import { Icon } from "./Icon.jsx";
import { ProgressMeta } from "./ProgressMeta.jsx";
import { ReviewBanner } from "./ReviewBanner.jsx";

export function ChapterPage({ subject: s, chapter: c }) {
  const own = [...c.subchapters, ...c.practices];
  const { stats } = useAccount();
  const hard = hardUnits(c.hard, stats).length;

  return (
    <main class="view chapter-page">
      <a class="pill" href={href(s.id)}><Icon name="arrow_back" class="pill-icon" /><span class="pill-text">{s.name}</span></a>
      <header class="page-head">
        <span class="tile tile--num tile--head">{c.id}</span>
        <div>
          <h1>{c.title}</h1>
          <p class="muted">
            {chapterMeta(c)}
          </p>
        </div>
      </header>

      <div class="quiz-list">
        {own.map((q) => (
          <a key={q.path} class="banner banner--quiz hue" href={href(q.path)}>
            <span class={`tile tile--banner${q.number ? " tile--num" : ""}`}>{q.number ?? q.icon}</span>
            <div class="banner-text">
              <h2 class="heading--5">{q.title}</h2>
              <ProgressMeta quiz={q} stats={stats} />
            </div>
            <Icon name="arrow_forward" class="banner-arrow" />
          </a>
        ))}
      </div>

      {c.reviews.map((r) => <ReviewBanner key={r.path} review={r} />)}

      {hard > 0 && (
        <div class="banner banner--hard hue">
          <span class="tile tile--banner"><Icon name="local_fire_department" /></span>
          <div class="banner-text">
            <span class="eyebrow">Do powtórki</span>
            <h2 class="heading--4">Moje trudne pytania</h2>
            <span class="meta">{hard} – znikają po 2 dobrych odpowiedziach z rzędu</span>
          </div>
          <a class="btn" href={href(c.hard.path)} aria-label="Graj · Moje trudne pytania">Graj</a>
        </div>
      )}
    </main>
  );
}
