# Reen Website Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh the existing one-page Reen marketing site with Ease-style rounded panels, pill chips, scroll motion, a Maeva-style spinning dial section, an animated app showcase, and a single "Join the waitlist" call to action, then deploy to the existing Vercel project.

**Architecture:** Single Next.js 16 App Router page (`src/app/page.tsx`, client component) plus three new small components (Reveal, Dial, AppShowcase) and an extracted WaitlistForm. All motion is CSS + IntersectionObserver + one scroll listener; no new dependencies.

**Tech Stack:** Next.js 16.2.4, React 19, Tailwind CSS 4 (CSS-first `@theme` config in globals.css), next/font (DM Sans + Abhaya Libre), FormSubmit AJAX for the waitlist.

## Global Constraints

- Palette: background `#fbf7ee`, wine accent `#45101c`, rose accent `#942143`, alt panel `#f0ece4`, cream text on wine `#faf6ed`. Do NOT use Ease's greens.
- Every call to action reads exactly "Join the waitlist".
- Launch status copy: "Coming soon to the App Store". Never claim the app is live.
- No em dashes in any copy, code, or comments. Use colons, semicolons, commas, or periods.
- No personal names in code or content. Waitlist form delivers to mikaelac14@gmail.com (an email address is acceptable; a person's full name is not).
- All motion respects `prefers-reduced-motion: reduce`.
- Verify with `npm run build` (must pass) and visual checks via `npm run dev` in the browser.
- Repo: `~/reen-website`. This is her private repo; committing and deploying is allowed. Commit after each task.

## File Structure

- Modify `src/app/globals.css`: add rose accent token, shared component classes (label pill, chip, pill button, panel), reveal/parallax/cursor keyframes, reduced-motion guard.
- Modify `src/app/layout.tsx`: metadata copy (remove em dash, update description status).
- Create `src/app/components/WaitlistForm.tsx`: extracted form, new email, new button text.
- Create `src/app/components/Reveal.tsx`: IntersectionObserver fade-up wrapper.
- Create `src/app/components/Dial.tsx`: wine spinning-dial section content.
- Create `src/app/components/AppShowcase.tsx`: layered screenshots + animated cursor.
- Rewrite `src/app/page.tsx`: new section structure using the above.

---

### Task 1: Theme foundation + WaitlistForm extraction

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Create: `src/app/components/WaitlistForm.tsx`

**Interfaces:**
- Produces CSS utility classes used by all later tasks: `.label-pill`, `.chip`, `.btn-pill`, `.panel`, `.reveal`, `.reveal.is-visible`.
- Produces `WaitlistForm` component: `export default function WaitlistForm({ darkMode }: { darkMode?: boolean })`.

- [ ] **Step 1: Replace `src/app/globals.css` with the extended theme**

```css
@import "tailwindcss";

@theme inline {
  --color-background: #fbf7ee;
  --color-foreground: #2b1218;
  --color-muted: #7d6a6e;
  --color-accent: #45101c;
  --color-rose: #942143;
  --color-cream: #faf6ed;
  --color-accent-light: #faf6ed;
  --color-border: #e6ddd2;
  --color-section-alt: #f0ece4;
  --font-sans: var(--font-dm-sans);
  --font-serif: var(--font-abhaya-libre);
}

body {
  background: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
}

::selection {
  background: #45101c;
  color: #fbf7ee;
}

/* Shared components */
.label-pill {
  display: inline-block;
  border-radius: 9999px;
  padding: 0.375rem 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  background: rgba(148, 33, 67, 0.1);
  color: #942143;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 9999px;
  background: #fff;
  padding: 0.625rem 1.25rem;
  font-size: 0.9rem;
  color: #45101c;
  box-shadow: 0 1px 2px rgba(69, 16, 28, 0.06);
}

.chip::before {
  content: "";
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 9999px;
  background: #942143;
}

.btn-pill {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 9999px;
  background: #45101c;
  color: #faf6ed;
  padding: 1rem 1.75rem;
  font-size: 1rem;
  transition: background 0.2s ease, transform 0.2s ease;
}

.btn-pill:hover {
  background: #942143;
  transform: translateY(-1px);
}

.panel {
  border-radius: 1.5rem;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Showcase cursor loop: move, tap, move, tap */
@keyframes cursor-path {
  0%   { transform: translate(0, 0); }
  20%  { transform: translate(-90px, -60px); }
  28%  { transform: translate(-90px, -60px) scale(0.85); }
  34%  { transform: translate(-90px, -60px) scale(1); }
  60%  { transform: translate(30px, -130px); }
  68%  { transform: translate(30px, -130px) scale(0.85); }
  74%  { transform: translate(30px, -130px) scale(1); }
  100% { transform: translate(0, 0); }
}

@keyframes card-pop {
  0%, 30%  { opacity: 0; transform: translateY(10px) scale(0.96); }
  38%, 88% { opacity: 1; transform: translateY(0) scale(1); }
  100%     { opacity: 0; transform: translateY(10px) scale(0.96); }
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .parallax-float {
    transform: none !important;
  }
  .cursor-dot, .pop-card {
    animation: none !important;
  }
  .pop-card {
    opacity: 1 !important;
  }
}
```

- [ ] **Step 2: Update `src/app/layout.tsx` metadata (em dash removal, status copy)**

Replace the `metadata` export only; leave fonts and markup as they are:

```tsx
export const metadata: Metadata = {
  title: "Reen: Hormonal Health, Reimagined",
  description:
    "Reen is an AI-powered hormonal health companion that connects your cycle, symptoms, wearables, and labs so you can finally understand why you feel this way. Coming soon to the App Store.",
};
```

- [ ] **Step 3: Create `src/app/components/WaitlistForm.tsx`**

Move the form out of page.tsx with the new email, email-only field, and new button text:

```tsx
"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm({ darkMode = false }: { darkMode?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://formsubmit.co/ajax/mikaelac14@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submit failed");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <p className={`text-base mt-4 ${darkMode ? "text-cream/90" : "text-muted"}`}>
        You&apos;re on the list! We&apos;ll be in touch soon.
      </p>
    );
  }

  const inputClass = darkMode
    ? "flex-1 rounded-full border border-white/30 bg-transparent px-5 py-3.5 text-sm placeholder-white/50 outline-none focus:border-white transition-colors"
    : "flex-1 rounded-full border border-border bg-white px-5 py-3.5 text-sm placeholder-muted outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input type="email" name="email" placeholder="Your email" required className={inputClass} />
        <input type="hidden" name="_subject" value="New Reen waitlist signup" />
        <button
          type="submit"
          disabled={loading}
          className={`btn-pill shrink-0 ${darkMode ? "!bg-cream !text-accent hover:!bg-white" : ""}`}
        >
          {loading ? "Joining..." : "Join the waitlist"}
          <span aria-hidden>→</span>
        </button>
      </div>
      {error && (
        <p className={`text-sm mt-3 ${darkMode ? "text-cream/80" : "text-rose"}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 4: Point page.tsx at the new component (temporary shim)**

In `src/app/page.tsx`: delete the inline `WaitlistForm` function (lines 6-56) and add
`import WaitlistForm from "./components/WaitlistForm";` after the existing imports.
Change the two "Join Waitlist" strings (nav button, section heading) to "Join the waitlist".

- [ ] **Step 5: Verify build**

Run: `cd ~/reen-website && npm run build`
Expected: compiles with no errors.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "Extract waitlist form, extend theme tokens and shared styles"
```

---

### Task 2: Reveal component, nav, hero

**Files:**
- Create: `src/app/components/Reveal.tsx`
- Modify: `src/app/page.tsx` (nav + hero sections)

**Interfaces:**
- Consumes: `.reveal` CSS from Task 1, `WaitlistForm`.
- Produces: `Reveal` component: `export default function Reveal({ children, className, delay }: { children: React.ReactNode; className?: string; delay?: number })`. Wraps children in a div that gains `.is-visible` when scrolled into view.

- [ ] **Step 1: Create `src/app/components/Reveal.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Rebuild the nav in page.tsx**

Simplify navLinks to `#mission` (label "Why Reen"), `#app` ("The App"), `#focus` ("Focus Areas"), `#science` ("Science"). The right-side button becomes:

```tsx
<a href="#waitlist" className="btn-pill !py-2.5 !px-5 !text-sm hidden md:inline-flex">
  Join the waitlist
</a>
```

Keep the mobile hamburger behavior as is (with the new links plus a "Join the waitlist" entry).

- [ ] **Step 3: Rebuild the hero as an Ease-style split panel**

Replace the current hero section with a rounded panel: text left, floating phone screenshot right with parallax drift. Uses a `parallaxY` state set by a scroll listener in `Home` (see Task 6 wiring; add the state now):

```tsx
{/* Hero */}
<section className="px-4 pt-6 sm:px-6 lg:px-10">
  <div className="panel bg-section-alt px-6 py-16 sm:px-12 lg:px-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
    <div>
      <p className="label-pill mb-6">Coming soon to the App Store</p>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.05]">
        Finally understand why you feel this way.
      </h1>
      <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
        Reen connects your cycle, symptoms, wearables, and labs into one clear
        picture of your hormonal health. Be one of the first users.
      </p>
      <a href="#waitlist" className="btn-pill mt-8 w-full sm:w-auto sm:min-w-72">
        Join the waitlist <span aria-hidden>→</span>
      </a>
    </div>
    <div className="relative flex justify-center lg:justify-end">
      <div
        className="parallax-float w-60 sm:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white/70"
        style={{ transform: `translateY(${parallaxY * -0.06}px)` }}
      >
        <Image src="/images/app-home.png" alt="Reen app home screen" width={390} height={844} className="w-full h-auto" priority />
      </div>
      <div
        className="parallax-float absolute -left-2 bottom-6 hidden sm:block w-44 rounded-3xl overflow-hidden shadow-xl border-4 border-white/70"
        style={{ transform: `translateY(${parallaxY * 0.04}px)` }}
      >
        <Image src="/images/app-insights.png" alt="Reen app insights screen" width={390} height={844} className="w-full h-auto" />
      </div>
    </div>
  </div>
</section>
```

Add to the top of `Home`:

```tsx
const [parallaxY, setParallaxY] = useState(0);

useEffect(() => {
  const onScroll = () => setParallaxY(window.scrollY);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

(`import { useState, useEffect } from "react";` and keep `"use client"` at top.)

- [ ] **Step 4: Verify visually**

Run: `npm run dev`, open http://localhost:3000.
Expected: rounded alt-cream hero panel, serif headline, label pill, wine pill button that turns rose on hover, phone cards drifting slightly on scroll.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "Add Reveal component, rebuild nav and hero as rounded split panel"
```

---

### Task 3: Spinning dial section

**Files:**
- Create: `src/app/components/Dial.tsx`
- Modify: `src/app/page.tsx` (insert section after hero, id="mission")

**Interfaces:**
- Consumes: nothing from other components.
- Produces: `export default function Dial()`; self-contained full section content rendered inside a wine panel in page.tsx.

- [ ] **Step 1: Create `src/app/components/Dial.tsx`**

Behavior: three stops on an arc. Active stop auto-advances every 4 seconds; clicking a numeral jumps to it and resets the timer. The arc group rotates via CSS transform so the active stop sits at the top; word + line crossfade beneath the apex.

```tsx
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

  // Stops sit at -60, 0, +60 degrees around the circle top.
  const rotation = (1 - active) * 60 - 60;

  return (
    <div className="text-center text-cream">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight max-w-2xl mx-auto">
        What if your health was...
      </h2>
      <div className="relative mx-auto mt-10 h-72 w-full max-w-xl overflow-hidden sm:h-80">
        <div
          className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
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
                className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/60 font-serif text-lg transition-all duration-700"
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
        <div className="absolute left-1/2 top-36 -translate-x-1/2 w-full max-w-md px-6">
          <div className="mx-auto mb-4 h-8 w-px bg-cream/60" />
          <p key={STOPS[active].word} className="font-serif text-3xl">
            {STOPS[active].word}
          </p>
          <p className="mt-2 text-sm text-cream/80 leading-relaxed">
            {STOPS[active].line}
          </p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Insert the section in page.tsx after the hero**

```tsx
{/* What if: spinning dial */}
<section id="mission" className="px-4 pt-6 sm:px-6 lg:px-10">
  <div className="panel bg-accent px-6 py-20 sm:px-12 lg:py-28">
    <Reveal>
      <Dial />
    </Reveal>
  </div>
</section>
```

Remove the old `#mission` mission section (the wine text block) since the dial replaces it.

- [ ] **Step 3: Verify visually**

Open http://localhost:3000: wine rounded panel; arc with I, II, III; auto-rotation every 4 seconds bringing each numeral to the top; word and line changing; clicking a numeral jumps the dial. Check on a narrow viewport (responsive mode, 390px) that numerals remain tappable and text does not overflow.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "Add spinning dial mission section"
```

---

### Task 4: Problem, stats, focus areas, science restyle

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `Reveal`, `.label-pill`, `.panel`, `.chip` from earlier tasks.

- [ ] **Step 1: Replace the stats section with an Ease-style problem statement + stats**

```tsx
{/* The problem */}
<section className="px-6 py-20 lg:px-12 max-w-5xl mx-auto">
  <Reveal>
    <span className="label-pill">The problem</span>
    <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif leading-snug">
      Women wait years for answers. Symptoms get dismissed, data gets
      scattered, and conditions like PCOS and endometriosis take 7 to 10
      years to diagnose.
    </h2>
  </Reveal>
  <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-10 text-left">
    {stats.map((stat, i) => (
      <Reveal key={stat.value} delay={i * 100}>
        <p className="text-4xl sm:text-5xl font-serif text-rose">{stat.value}</p>
        <p className="mt-3 text-sm text-muted leading-relaxed">{stat.label}</p>
      </Reveal>
    ))}
  </div>
</section>
```

Keep the existing `stats` array unchanged.

- [ ] **Step 2: Restyle focus areas as rounded cards in an alt panel**

Wrap in a `panel bg-section-alt`, add a `label-pill` reading "Focus areas", keep the `focusAreas` array, render each card as `bg-white rounded-3xl p-8` with a serif title and muted description, each card in a `Reveal` with `delay={i * 100}`. Fix the perimenopause description to remove its em dash: "Get your perimenopause stage, symptom forecasting, personalized HRT guidance, and whole-body aging insights. No more guessing." Apply the same em dash sweep to the fertility and symptoms descriptions.

- [ ] **Step 3: Restyle the science section**

Keep the `science` array (icons included). Wrap the section in `panel bg-accent text-cream`, label pill reading "The science" (style it `bg-cream/10 text-cream` via className override), icons rendered in `text-cream`, descriptions `text-cream/70`. Sweep em dashes from descriptions (replace with periods or colons). Add closing line under the grid: `<p className="mt-12 text-center text-sm text-cream/60">Reen informs and prepares. It never diagnoses.</p>`

- [ ] **Step 4: Remove the Services accordion and How It Works accordion sections**

Delete the `services` and `howItWorks` arrays, the `Accordion` component, and both sections. The chips in the showcase (Task 5) and dial cover this content. (YAGNI: fewer, stronger sections.)

- [ ] **Step 5: Verify visually, then commit**

Expected: problem statement with rose stats, focus cards in cream panel, wine science panel.

```bash
git add -A && git commit -m "Restyle problem, focus, and science sections; drop accordions"
```

---

### Task 5: App showcase with animated cursor

**Files:**
- Create: `src/app/components/AppShowcase.tsx`
- Modify: `src/app/page.tsx` (replace the old alternating showcase, section id="app")

**Interfaces:**
- Consumes: `.chip`, cursor keyframes (`cursor-path`, `card-pop`) from Task 1, images in `public/images/`.
- Produces: `export default function AppShowcase({ parallaxY }: { parallaxY: number })`.

- [ ] **Step 1: Create `src/app/components/AppShowcase.tsx`**

Left column: heading, copy, chips. Right column: layered phone screenshots with parallax offsets, an animated cursor dot looping over the tracking screen, and a small "logged" card that pops in synced to the cursor taps.

```tsx
"use client";

import Image from "next/image";

const CHIPS = [
  "Daily tracking",
  "Cycle insights",
  "Wearable sync",
  "Lab results",
  "AI doctor reports",
];

export default function AppShowcase({ parallaxY }: { parallaxY: number }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div>
        <span className="label-pill">The app</span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif leading-snug">
          Track it once. Understand it forever.
        </h2>
        <p className="mt-5 text-base text-muted max-w-md leading-relaxed">
          Log your cycle, symptoms, and labs in seconds. Reen turns every entry
          into patterns you can see and reports your doctor can use.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {CHIPS.map((chip) => (
            <span key={chip} className="chip">{chip}</span>
          ))}
        </div>
        <a href="#waitlist" className="btn-pill mt-10 w-full sm:w-auto sm:min-w-72">
          Join the waitlist <span aria-hidden>→</span>
        </a>
      </div>
      <div className="relative h-[480px] sm:h-[560px]">
        <div
          className="parallax-float absolute right-0 top-0 w-56 sm:w-64 rounded-[2rem] overflow-hidden shadow-xl border-6 border-white/70"
          style={{ transform: `translateY(${parallaxY * -0.03}px)` }}
        >
          <Image src="/images/app-reports.png" alt="Reen app reports screen" width={390} height={844} className="w-full h-auto" />
        </div>
        <div
          className="parallax-float absolute left-0 bottom-0 z-10 w-60 sm:w-72 rounded-[2rem] overflow-hidden shadow-2xl border-6 border-white"
          style={{ transform: `translateY(${parallaxY * 0.02}px)` }}
        >
          <Image src="/images/app-track.png" alt="Reen app tracking screen" width={390} height={844} className="w-full h-auto" />
          <div
            className="cursor-dot absolute bottom-24 right-16 z-20 h-5 w-5 rounded-full bg-accent/80 ring-4 ring-accent/25"
            style={{ animation: "cursor-path 6s ease-in-out infinite" }}
          />
        </div>
        <div
          className="pop-card absolute left-8 top-16 z-20 rounded-2xl bg-white px-5 py-4 shadow-lg"
          style={{ animation: "card-pop 6s ease-in-out infinite" }}
        >
          <p className="text-xs text-muted">Logged today</p>
          <p className="mt-1 text-sm font-medium text-accent">Fatigue, day 21</p>
          <p className="mt-1 text-xs text-rose">Pattern found: luteal phase</p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Replace the old showcase section in page.tsx**

Delete the `appFeatures` array and the old alternating showcase section. Insert:

```tsx
{/* App showcase */}
<section id="app" className="px-4 pt-6 sm:px-6 lg:px-10">
  <div className="panel bg-section-alt px-6 py-16 sm:px-12 lg:px-16 lg:py-24 overflow-hidden">
    <Reveal>
      <AppShowcase parallaxY={parallaxY} />
    </Reveal>
  </div>
</section>
```

with `import AppShowcase from "./components/AppShowcase";`.

- [ ] **Step 3: Verify visually**

Expected: two layered phones drifting at different speeds, wine cursor dot looping and "tapping" (scale dip), the "Logged today" card popping in and out on the same 6 second cycle, chips wrapping cleanly, button hover turns rose. Check 390px viewport: cards scale down, no horizontal scroll.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "Add animated app showcase with layered screens and cursor demo"
```

---

### Task 6: Final waitlist panel, footer, mobile and reduced-motion pass

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Rebuild the waitlist section as a wine rounded panel**

```tsx
{/* Waitlist */}
<section id="waitlist" className="px-4 py-6 sm:px-6 lg:px-10">
  <div className="panel bg-accent text-cream px-6 py-20 sm:px-12 lg:py-28 text-center">
    <Reveal>
      <span className="label-pill !bg-cream/10 !text-cream">Be one of the first</span>
      <h2 className="mt-6 text-4xl sm:text-5xl font-serif">Join the waitlist</h2>
      <p className="mt-4 text-sm sm:text-base text-cream/70 max-w-lg mx-auto leading-relaxed">
        Reen is coming soon to the App Store. Sign up and be one of the first
        users when we launch.
      </p>
      <div className="mt-10">
        <WaitlistForm darkMode />
      </div>
    </Reveal>
  </div>
</section>
```

- [ ] **Step 2: Simplify the footer**

Keep the wordmark and copyright; replace the footer mailto with `hello` styling only if an address is wanted; otherwise drop the email link entirely (owner email should not be displayed publicly; the form already routes messages). Footer links mirror the nav links.

- [ ] **Step 3: Full page mobile pass**

In responsive mode at 390px width, scroll the entire page. Fix anything that overflows horizontally, stacks badly, or is unreadable. Panels should keep 1rem side gutters (`px-4`).

- [ ] **Step 4: Reduced-motion check**

In devtools, emulate `prefers-reduced-motion: reduce`. Expected: no reveal animation (content visible immediately), no cursor loop, pop card statically visible, no parallax jitter.

- [ ] **Step 5: Build and commit**

Run: `npm run build` (expected: clean).

```bash
git add -A && git commit -m "Rebuild waitlist panel and footer, mobile and reduced-motion pass"
```

---

### Task 7: Full verification and deploy

**Files:** none new.

- [ ] **Step 1: Verify the complete page in the browser**

`npm run dev`, walk the page top to bottom on desktop and 390px. Confirm: every CTA reads "Join the waitlist"; no em dashes anywhere in rendered copy (search page source for the character); status copy says "Coming soon to the App Store"; dial rotates and is clickable; showcase animates.

- [ ] **Step 2: Grep the source for banned characters and old email**

Run: `grep -rn "—" src/ ; grep -rn "mikaelaconnell14" src/`
Expected: no matches from either.

- [ ] **Step 3: Deploy to production**

Run: `cd ~/reen-website && npx vercel --prod`
Expected: deploys to the existing project; note the production URL (reen-website.vercel.app).

- [ ] **Step 4: Test the live form**

Submit a real test email through the live site. FormSubmit requires one-time activation for a new destination address: the owner must click the activation link that arrives at mikaelac14@gmail.com, then a second test submission should arrive as a normal email. Coordinate with the owner for the activation click.

- [ ] **Step 5: Commit any final fixes and push**

```bash
git add -A && git commit -m "Final polish from live verification" && git push
```

(Only commit if there are changes.)

---

### Task 8: Custom domain reen-health.com

**Files:** none.

- [ ] **Step 1: Get explicit owner approval for the purchase**

Confirm in chat: buying reen-health.com through Vercel, roughly $15-20/year, charged to the Vercel account payment method. Do not proceed without a yes.

- [ ] **Step 2: Buy and attach**

Run: `npx vercel domains buy reen-health.com` then `npx vercel domains add reen-health.com reen-website` (adjust to CLI prompts; if the CLI flow requires the dashboard, walk the owner through it).

- [ ] **Step 3: Verify**

Run: `curl -s -o /dev/null -w "%{http_code}" https://reen-health.com`
Expected: 200 (allow a few minutes for DNS). Confirm the site renders at the new domain.

## Self-review notes

- Spec coverage: nav/hero (T2), dial (T3), problem/focus/science (T4), showcase + cursor (T5), waitlist/footer/mobile/reduced-motion (T6), form email + test (T1/T7), deploy (T7), domain (T8). Services/How-it-works accordions intentionally dropped (spec lists sections 1-9; accordions were not in the spec's structure).
- Copy rules enforced via T7 Step 2 grep.
- Types consistent: `WaitlistForm({darkMode})`, `Reveal({children, className, delay})`, `Dial()`, `AppShowcase({parallaxY})`.
