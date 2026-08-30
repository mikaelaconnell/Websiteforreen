"use client";

import { useEffect, useRef, useState } from "react";

const STOPS = [
  {
    numeral: "I",
    word: "Understood",
    line: "Your symptoms are signals. Reen connects them into patterns.",
  },
  {
    numeral: "II",
    word: "Connected",
    line: "Cycle, sleep, labs, and wearables in one place.",
  },
  {
    numeral: "III",
    word: "Heard",
    line: "Walk into appointments with a report your doctor takes seriously.",
  },
];

export default function Dial() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setActive((a) => (a + 1) % STOPS.length);
    }, 4000);
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // Stops sit 60 degrees apart; rotating the group by this puts the active one on top.
  const rotation = (1 - active) * 60;

  return (
    <div className="text-center text-cream">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight max-w-2xl mx-auto">
        What if your health was...
      </h2>
      <div className="relative mx-auto mt-10 h-80 w-full max-w-xl overflow-hidden sm:h-96">
        <div
          className="absolute left-1/2 top-24 h-[520px] w-[520px] transition-transform duration-700 ease-in-out"
          style={{
            marginLeft: "-260px",
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div className="absolute inset-0 rounded-full border border-cream/40" />
          {STOPS.map((stop, i) => {
            const angle = ((i - 1) * 60 - 90) * (Math.PI / 180);
            const x = 260 + 260 * Math.cos(angle);
            const y = 260 + 260 * Math.sin(angle);
            return (
              <button
                key={stop.numeral}
                onClick={() => {
                  setActive(i);
                  startTimer();
                }}
                className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-cream/60 font-serif text-lg transition-all duration-700"
                style={{
                  left: x,
                  top: y,
                  transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                  background: i === active ? "#faf6ed" : "transparent",
                  color: i === active ? "#45101c" : "#faf6ed",
                }}
                aria-label={`Show: ${stop.word}`}
              >
                {stop.numeral}
              </button>
            );
          })}
        </div>
        <div className="absolute left-1/2 top-40 w-full max-w-md -translate-x-1/2 px-6">
          <div className="mx-auto mb-4 h-8 w-px bg-cream/60" />
          <div key={STOPS[active].word} className="word-fade">
            <p className="font-serif text-3xl">{STOPS[active].word}</p>
            <p className="mt-2 text-sm text-cream/80 leading-relaxed">
              {STOPS[active].line}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
