export function Mascot({ mood = "happy", antenna = false, class: cls = "" }) {
  return (
    <span class={`mascot mascot--${mood} ${cls}`} aria-hidden="true">
      {antenna && <span class="mascot-antenna" />}
      <span class="mascot-eye mascot-eye--left" />
      <span class="mascot-eye mascot-eye--right" />
      <span class="mascot-cheek mascot-cheek--left" />
      <span class="mascot-cheek mascot-cheek--right" />
      <span class="mascot-mouth" />
    </span>
  );
}
