import { useState } from "preact/hooks";
import { allQuestions, reviewScope, statsPath } from "../content.js";
import { pytan, typowZadan } from "../format.js";
import { progress } from "../modes.js";
import { href } from "../router.js";
import { resetReview, useAccount } from "../account.js";
import { Confirm } from "./Confirm.jsx";
import { Icon } from "./Icon.jsx";
import { Meter } from "./Meter.jsx";

// A mastered review untouched this long gets a reminder to check that nothing was forgotten.
const REMIND_AFTER_DAYS = 3;
const DAY = 24 * 60 * 60 * 1000;

// A chapter review (sprawdzian, kartkówka) or a subchapter summary, with its stats link and reminder.
export function ReviewBanner({ review: r }) {
  const { stats } = useAccount();
  const [confirming, setConfirming] = useState(false);
  const { done, total } = progress(r, stats);
  const last = stats.reviews[r.review]?.last;
  const days = last ? Math.floor((Date.now() - Date.parse(last)) / DAY) : 0;
  const remind = total > 0 && done === total && days >= REMIND_AFTER_DAYS;
  const scope = r.parent ? "" : reviewScope(r);

  const reset = async () => {
    await resetReview(r.review);
    location.hash = href(r.path);
  };

  return (
    <>
      <div class="banner banner--review hue">
        <span class="tile tile--banner"><Icon name="assignment_turned_in" /></span>
        <div class="banner-text">
          {!r.parent && <span class="eyebrow">{r.eyebrow ?? "Podsumowanie rozdziału"}</span>}
          <h2 class="heading--4">{r.title}</h2>
          <span class="meta">{done}/{total} {allQuestions(r).every((q) => q.skill) ? typowZadan(total) : pytan(total)}{scope ? ` · ${scope}` : ""}</span>
          <Meter done={done} total={total} thin />
        </div>
        <span class="banner-actions">
          <a class="icon-btn stats-btn" href={href(statsPath(r))} aria-label={`Statystyki · ${r.title}`} title="Statystyki">
            <Icon name="bar_chart" />
          </a>
          <a class="btn" href={href(r.path)} aria-label={`Graj · ${r.title}`}>Graj</a>
        </span>
      </div>

      {remind && (
        <div class="review-hint">
          <p>
            Ostatnia runda {days} dni temu. Może warto sprawdzić się jeszcze raz, czy nic się nie zapomniało?
          </p>
          <button class="btn btn--secondary" onClick={() => setConfirming(true)}>Zacznij od nowa</button>
        </div>
      )}

      {confirming && (
        <Confirm
          text={<>Wyzerować postęp „{r.title}”?<br />Zaczniesz od nowa.</>}
          onYes={reset}
          onNo={() => setConfirming(false)}
        />
      )}
    </>
  );
}
