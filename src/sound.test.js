// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

let SOUND_KEY, isSoundOn, playAnswerSound;

function fakeContext(state = "suspended") {
  const frequencies = [];
  const resume = vi.fn(() => Promise.resolve());
  class FakeContext {
    state = state;
    currentTime = 0;
    destination = {};
    resume = resume;
    createOscillator() {
      const frequency = {
        set value(v) {
          frequencies.push(v);
        },
      };
      return { frequency, connect: (node) => node, start: vi.fn(), stop: vi.fn() };
    }
    createBiquadFilter() {
      return { frequency: {}, connect: (node) => node };
    }
    createGain() {
      return { gain: { setValueAtTime: vi.fn(), exponentialRampToValueAtTime: vi.fn() }, connect: (node) => node };
    }
  }
  return { FakeContext, frequencies, resume };
}

// The module keeps one audio context, so each test needs a fresh copy.
beforeEach(async () => {
  localStorage.clear();
  vi.resetModules();
  ({ SOUND_KEY, isSoundOn, playAnswerSound } = await import("./sound.js"));
});

afterEach(() => {
  delete window.AudioContext;
});

describe("answer sound", () => {
  it("is on by default", () => {
    expect(isSoundOn()).toBe(true);
  });

  it("plays different tones for a correct and a wrong answer", () => {
    const { FakeContext, frequencies } = fakeContext();
    window.AudioContext = FakeContext;
    playAnswerSound(true);
    const correct = frequencies.splice(0);
    playAnswerSound(false);
    expect(correct).toEqual([523, 659, 784, 1047]);
    expect(frequencies).toEqual([294, 220]);
  });

  it("resumes a suspended context", () => {
    const { FakeContext, resume } = fakeContext();
    window.AudioContext = FakeContext;
    playAnswerSound(true);
    expect(resume).toHaveBeenCalled();
  });

  it("stays silent when turned off", () => {
    const { FakeContext, frequencies } = fakeContext();
    window.AudioContext = FakeContext;
    localStorage.setItem(SOUND_KEY, "off");
    playAnswerSound(true);
    expect(frequencies).toEqual([]);
  });

  it("does not throw without Web Audio support", () => {
    expect(() => playAnswerSound(true)).not.toThrow();
  });
});
