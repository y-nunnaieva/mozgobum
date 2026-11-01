import { paletteVar } from "../palette.js";
import { Icon } from "./Icon.jsx";

const BLOB_SHAPES = ["63% 37% 54% 46% / 55% 48% 52% 45%", "42% 58% 70% 30% / 45% 45% 55% 55%", "50% 50% 33% 67% / 55% 27% 73% 45%"];
// [x%, y%, icon size rem, rotation deg]
const STICKERS = [[6, 14, 5.4, -14], [44, 5, 4, 12], [93, 9, 6.2, 18], [97, 44, 4.6, -10], [72, 30, 3.6, 22], [4, 58, 4.4, 10], [30, 92, 5.8, -18], [62, 86, 4.2, 8], [88, 74, 5.6, -6]];
// A dot without y sits in the gap above the home subject grid (.backdrop-dot--gap).
const DOTS = [[22, null, 16], [58, 16, 12], [84, 60, 18], [38, 74, 14], [78, 95, 12], [12, 86, 16]];
const HOME_BLOBS = [[100, 2, 560, "yellow", 0], [0, 100, 480, "blue", 30], [66, 104, 300, "purple", 60], [-2, 30, 220, "teal", 10]];

// Decorative layer behind the page: soft blobs, scattered subject icons and small dots.
export function Backdrop({ subject, subjects }) {
  const colors = subject ? [subject.color, subject.alt] : subjects.map((s) => s.color);
  const blobs = subject
    ? [[100, 0, 540, subject.color, 0], [0, 100, 460, subject.alt, 40], [70, 106, 280, subject.color, 80]]
    : HOME_BLOBS;
  const icons = subject ? subject.icons : subjects.map((s) => s.glyph);

  return (
    <div class="backdrop" aria-hidden="true">
      {blobs.map(([x, y, w, c, r], i) => (
        <span key={`b${i}`} class="backdrop-blob" style={{ left: `${x}%`, top: `${y}%`, "--w": `${w}px`, borderRadius: BLOB_SHAPES[i % 3], "--bc": paletteVar(c), rotate: `${r}deg` }} />
      ))}
      {STICKERS.map(([x, y, s, r], i) => (
        <span key={`s${i}`} class="backdrop-sticker" style={{ left: `${x}%`, top: `max(${y}%, var(--sticker-top))`, "--s": `${s}rem`, "--bc": paletteVar(colors[i % colors.length]), rotate: `${r}deg` }}>
          <Icon name={icons[i % icons.length]} />
        </span>
      ))}
      {DOTS.map(([x, y, s], i) => (
        <span key={`d${i}`} class={`backdrop-dot${y === null ? " backdrop-dot--gap" : ""}`} style={{ left: `${x}%`, top: y === null ? undefined : `${y}%`, "--w": `${s}px`, "--bc": paletteVar(subject && i % 3 === 2 ? "yellow" : colors[i % colors.length]) }} />
      ))}
    </div>
  );
}
