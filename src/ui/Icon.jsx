import { ICONS } from "../icons.js";

export function Icon({ name, class: cls = "" }) {
  return <span class={`icon ${cls}`} aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONS[name] ?? "" }} />;
}
