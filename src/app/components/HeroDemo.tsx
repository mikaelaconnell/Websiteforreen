"use client";

import { useEffect, useState } from "react";

// Step timeline (advances every 900ms):
// 0 idle, 1 tick Cramps, 2 tick Fatigue, 3 press Log,
// 4-6 show insight card, 7 reset pause
const CHIPS = ["Cramps", "Fatigue", "Low energy"];

// Cursor position per step, relative to the card (percentages).
const CURSOR_POS: Record<number, { x: string; y: string }> = {
  0: { x: "80%", y: "88%" },
  1: { x: "22%", y: "46%" },
  2: { x: "55%", y: "46%" },
  3: { x: "50%", y: "78%" },
  4: { x: "80%", y: "88%" },
};

export default function HeroDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 8), 900);
    return () => clearInterval(id);
  }, []);

  const cursor = CURSOR_POS[Math.min(step, 4)];
  const chipOn = (i: number) => (i === 0 && step >= 1) || (i === 1 && step >= 2);
  const pressed = step === 3;
  const showInsight = step >= 4 && step <= 6;

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm">
      <div className="relative rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-baseline justify-between">
          <p className="font-serif text-xl text-accent">Today</p>
          <p className="text-xs text-muted">Cycle day 21</p>
        </div>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted">
          How do you feel?
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CHIPS.map((chip, i) => (
            <span
              key={chip}
              className="rounded-full border px-3.5 py-1.5 text-sm transition-all duration-300"
              style={{
                background: chipOn(i) ? "#45101c" : "transparent",
                color: chipOn(i) ? "#faf6ed" : "#45101c",
                borderColor: chipOn(i) ? "#45101c" : "#e6ddd2",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
        <div
          className="mt-5 rounded-full bg-accent px-5 py-2.5 text-center text-sm text-cream transition-transform duration-200"
          style={{ transform: pressed ? "scale(0.96)" : "scale(1)" }}
        >
          Log today
        </div>

        {/* Animated cursor dot */}
        <div
          className="pointer-events-none absolute z-20 h-4 w-4 rounded-full bg-rose/90 ring-4 ring-rose/25 transition-all duration-700 ease-in-out"
          style={{ left: cursor.x, top: cursor.y }}
        />
      </div>

      {/* Insight card pops in */}
      <div
        className="absolute -bottom-8 -right-3 sm:-right-8 z-30 rounded-2xl bg-cream px-5 py-4 shadow-xl transition-all duration-500"
        style={{
          opacity: showInsight ? 1 : 0,
          transform: showInsight ? "translateY(0)" : "translateY(12px)",
        }}
      >
        <p className="text-xs text-muted">Pattern found</p>
        <p className="mt-1 text-sm font-medium text-accent">
          Fatigue peaks in your luteal phase
        </p>
      </div>
    </div>
  );
}
