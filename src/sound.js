import { useState } from "preact/hooks";

export const SOUND_KEY = "szkolne-quizy:sound";

const OFF = "off";

// at, duration: seconds; lowpass: cutoff in Hz, softens the harsh square wave.
const TONES = {
  correct: [
    { type: "triangle", frequency: 523, at: 0, duration: 0.12, volume: 0.22 },
    { type: "triangle", frequency: 659, at: 0.07, duration: 0.12, volume: 0.22 },
    { type: "triangle", frequency: 784, at: 0.14, duration: 0.12, volume: 0.22 },
    { type: "triangle", frequency: 1047, at: 0.21, duration: 0.4, volume: 0.24 },
  ],
  wrong: [
    { type: "square", frequency: 294, at: 0, duration: 0.17, volume: 0.2, lowpass: 1000 },
    { type: "square", frequency: 220, at: 0.17, duration: 0.36, volume: 0.22, lowpass: 900 },
  ],
};
const ATTACK = 0.008;
const SILENT = 0.0001;

let context = null;

export function isSoundOn() {
  try {
    return localStorage.getItem(SOUND_KEY) !== OFF;
  } catch {
    return true;
  }
}

export function useSound() {
  const [on, setOn] = useState(isSoundOn);
  const toggle = () => {
    const next = !on;
    try {
      if (next) localStorage.removeItem(SOUND_KEY);
      else localStorage.setItem(SOUND_KEY, OFF);
    } catch {
      // Not persisted; the choice is lost on reload and the sound comes back on.
    }
    setOn(next);
  };
  return [on, toggle];
}

// Browsers start the context suspended; it can only be resumed from a user gesture.
// Sound is a bonus: a failure here and below must never interrupt the round.
export function unlockSound() {
  try {
    if (!isSoundOn()) return null;
    const Context = window.AudioContext ?? window.webkitAudioContext;
    if (!Context) return null;
    context ??= new Context();
    if (context.state !== "running") context.resume().catch(() => {});
    return context;
  } catch {
    return null;
  }
}

export function playAnswerSound(ok) {
  const ctx = unlockSound();
  if (!ctx) return;
  try {
    for (const { type, frequency, at, duration, volume, lowpass } of ok ? TONES.correct : TONES.wrong) {
      const start = ctx.currentTime + at;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = type;
      oscillator.frequency.value = frequency;
      // Ramps start and end above zero because an exponential ramp cannot touch it; a hard edge would click.
      gain.gain.setValueAtTime(SILENT, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + ATTACK);
      gain.gain.exponentialRampToValueAtTime(SILENT, start + duration);
      let output = oscillator;
      if (lowpass) {
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = lowpass;
        output = oscillator.connect(filter);
      }
      output.connect(gain).connect(ctx.destination);
      oscillator.start(start);
      oscillator.stop(start + duration);
    }
  } catch {
    // Silence is fine.
  }
}
