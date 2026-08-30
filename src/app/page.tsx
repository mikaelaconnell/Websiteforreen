"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import WaitlistForm from "./components/WaitlistForm";
import Reveal from "./components/Reveal";
import Dial from "./components/Dial";
import HeroDemo from "./components/HeroDemo";

const appFeatures = [
  {
    title: "Home",
    subtitle: "Your daily dashboard",
    description:
      "Cycle day tracking, health metrics, readiness insights, and symptom logging, all at a glance.",
    image: "/images/app-home-card.png",
  },
  {
    title: "Track",
    subtitle: "Log everything that matters",
    description:
      "Period flow, symptoms, medications, mood, and energy, beautifully organized and effortless to use.",
    image: "/images/app-track.png",
  },
  {
    title: "Insights",
    subtitle: "See the patterns",
    description:
      "AI-powered health overview, cycle trends, symptom frequency analysis, and lab result tracking.",
    image: "/images/app-insights.png",
  },
  {
    title: "Reports",
    subtitle: "Clinical-grade summaries",
    description:
      "Generate HIPAA-compliant health reports for your doctor with one tap. Your data, professionally presented.",
    image: "/images/app-reports.png",
  },
  {
    title: "Learn",
    subtitle: "Knowledge library",
    description:
      "Curated clinical insights on endometriosis, PCOS, perimenopause, HRT, thyroid health, and more.",
    image: "/images/app-learn.png",
  },
];

const focusAreas = [
  {
    title: "Undiagnosed Symptoms",
    description:
      "We decode chronic pelvic pain, painful periods, irregular bleeding, digestive and urinary tract issues with precision risk scores for gynecological conditions like endometriosis and PCOS.",
    image: "/images/focus-symptoms.jpg",
  },
  {
    title: "Perimenopause & Menopause",
    description:
      "Get your perimenopause stage, symptom forecasting, personalized HRT guidance, and whole-body aging insights. No more guessing.",
    image: "/images/focus-menopause.jpg",
  },
  {
    title: "Fertility & Reproductive Health",
    description:
      "Reproductive age, miscarriage risk, genetic factors, and nutrient deficiencies, with personalized egg preservation timeline and IVF insights.",
    image: "/images/focus-fertility.jpg",
  },
  {
    title: "Gynecological Cancer Risk",
    description:
      "Comprehensive cancer risk assessment analyzes genetic predispositions, hormonal patterns, and inflammatory markers for early detection and prevention.",
    image: "/images/focus-cancer.jpg",
  },
];

const stats = [
  {
    value: "1 in 5",
    label: "US women are unable to get pregnant after a year of trying (CDC)",
  },
  {
    value: "11 years",
    label: "Average wait for an endometriosis diagnosis in the US",
  },
  {
    value: "40%",
    label: "Of women report being misdiagnosed when seeking perimenopause care",
  },
  {
    value: "110,000+",
    label: "New US gynecologic cancer cases expected each year",
  },
];

const science = [
  {
    title: "Better Data Collection",
    description:
      "Comprehensive self-reported symptoms, cycle data, lab results, and doctor visit notes: the information traditional care overlooks.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <rect x="10" y="6" width="28" height="36" rx="3" />
        <line x1="16" y1="16" x2="32" y2="16" />
        <line x1="16" y1="22" x2="28" y2="22" />
        <line x1="16" y1="28" x2="30" y2="28" />
        <circle cx="34" cy="34" r="8" fill="#f0ece4" stroke="currentColor" />
        <path d="M34 30v4h4" />
      </svg>
    ),
  },
  {
    title: "Machine Learning & AI",
    description:
      "Advanced algorithms uncover patterns across your data to personalize insights for your unique biology.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="24" cy="14" r="4" />
        <circle cx="12" cy="30" r="4" />
        <circle cx="36" cy="30" r="4" />
        <circle cx="24" cy="38" r="4" />
        <line x1="24" y1="18" x2="12" y2="26" />
        <line x1="24" y1="18" x2="36" y2="26" />
        <line x1="12" y1="34" x2="24" y2="34" />
        <line x1="36" y1="34" x2="24" y2="34" />
      </svg>
    ),
  },
  {
    title: "Wearable Integration",
    description:
      "Passively sync Apple Health, Oura Ring, and Whoop: HRV, sleep, temperature, and recovery data feed your health picture automatically.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <rect x="16" y="8" width="16" height="32" rx="8" />
        <rect x="19" y="16" width="10" height="10" rx="2" />
        <circle cx="24" cy="21" r="3" />
        <path d="M10 20 Q6 24, 10 28" />
        <path d="M38 20 Q42 24, 38 28" />
      </svg>
    ),
  },
  {
    title: "Longitudinal Tracking",
    description:
      "Continuous data collection reveals how your health changes over time, catching shifts before symptoms appear.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M8 36 L16 28 L22 32 L30 18 L40 22" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="22" r="2" fill="currentColor" />
        <line x1="8" y1="40" x2="42" y2="40" />
        <line x1="8" y1="10" x2="8" y2="40" />
      </svg>
    ),
  },
  {
    title: "Holistic Integration",
    description:
      "Your body is an interconnected network. Reen integrates many layers of information into one complete picture.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="10" />
        <circle cx="24" cy="24" r="4" />
        <line x1="24" y1="4" x2="24" y2="8" />
        <line x1="24" y1="40" x2="24" y2="44" />
        <line x1="4" y1="24" x2="8" y2="24" />
        <line x1="40" y1="24" x2="44" y2="24" />
      </svg>
    ),
  },
  {
    title: "Risk Insights + Action Plan",
    description:
      "Predictive models identify early warning signs and personalize care based on your unique risk profile.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
        <path d="M24 6 L42 18 V34 L24 44 L6 34 V18 Z" />
        <polyline points="16,24 22,30 34,18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "#mission", label: "Why Reen" },
  { href: "#app", label: "The App" },
  { href: "#focus", label: "Focus Areas" },
  { href: "#science", label: "Science" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const onScroll = () => setParallaxY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          <a href="/" className="text-2xl font-serif font-bold tracking-tight">
            reen
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#waitlist" className="btn-pill !py-2.5 !px-5 !text-sm hidden md:inline-flex">
            Join the waitlist
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden px-6 pb-4 flex flex-col gap-3">
            {[...navLinks, { href: "#waitlist", label: "Join the waitlist" }].map(
              ({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-muted hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              )
            )}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="panel bg-section-alt px-6 py-16 sm:px-10 lg:px-14 lg:py-24 flex flex-col justify-center">
            <p className="label-pill mb-6 self-start">Coming soon to the App Store</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight leading-[1.05]">
              Finally understand why you feel this way.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              Reen connects your cycle, symptoms, wearables, and labs into one
              clear picture of your hormonal health. Be one of the first users.
            </p>
            <a href="#waitlist" className="btn-pill mt-8 w-full sm:w-auto sm:min-w-72 self-start">
              Join the waitlist <span aria-hidden>→</span>
            </a>
          </div>
          <div className="panel bg-accent relative overflow-hidden min-h-[24rem] md:min-h-[28rem] flex items-center justify-center px-6 py-16">
            <svg
              viewBox="0 0 600 600"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <path
                  key={i}
                  d={`M -20 ${80 + i * 75} C 180 ${80 + i * 75}, 260 300, 620 300`}
                  fill="none"
                  stroke="#faf6ed"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  className="hero-line"
                  style={{ animationDelay: `${i * 0.25}s` }}
                />
              ))}
            </svg>
            <HeroDemo />
          </div>
        </div>
      </section>

      {/* What if: spinning dial */}
      <section id="mission" className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="panel bg-accent px-6 py-20 sm:px-12 lg:py-28 overflow-hidden">
          <Reveal>
            <Dial />
          </Reveal>
        </div>
      </section>

      {/* The problem */}
      <section className="px-6 py-20 lg:px-12 max-w-5xl mx-auto">
        <Reveal>
          <span className="label-pill">The problem</span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif leading-snug">
            Women wait years for answers. Symptoms get dismissed, data gets
            scattered, and conditions like PCOS and endometriosis take close to
            a decade to diagnose.
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

      {/* Focus Areas */}
      <section id="focus" className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="panel bg-section-alt px-6 py-16 sm:px-12 lg:py-20">
          <Reveal className="text-center">
            <span className="label-pill">Focus areas</span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-serif mb-14">
              Precision medicine. Personal results.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 100}>
                <div className="bg-white rounded-3xl p-8 h-full hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-serif mb-4">{area.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Science */}
      <section id="science" className="px-4 pt-6 sm:px-6 lg:px-10">
        <div className="panel bg-accent text-cream px-6 py-16 sm:px-12 lg:py-20">
          <Reveal className="text-center">
            <span className="label-pill !bg-cream/10 !text-cream">Our approach</span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-serif mb-16">The science</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {science.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-cream">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-cream/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-14 text-center text-sm text-cream/60">
            Reen informs and prepares. It never diagnoses.
          </p>
        </div>
      </section>

      {/* App Showcase */}
      <section className="px-6 py-24 lg:px-12 bg-[#f0ece4]">
        <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">
          The App
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-6">
          Everything you need, in one place
        </h2>
        <p className="text-sm text-muted text-center max-w-xl mx-auto mb-16 leading-relaxed">
          Five powerful tabs designed to help you track, understand, and take
          control of your hormonal health.
        </p>
        <div className="space-y-24 max-w-5xl mx-auto">
          {appFeatures.map((feature, i) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-12 lg:gap-20 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="w-56 sm:w-64 shrink-0 rounded-[2.5rem] overflow-hidden shadow-xl border-6 border-white/60">
                <Image
                  src={feature.image}
                  alt={`Reen app ${feature.title} screen`}
                  width={390}
                  height={844}
                  className="w-full h-auto"
                />
              </div>
              <div className={`flex-1 ${i % 2 === 0 ? "lg:text-left" : "lg:text-right"} text-center`}>
                <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">
                  {feature.subtitle}
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-md mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="bg-accent text-white px-6 py-24 lg:px-12 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] opacity-60 mb-4">
          Be the first
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif mb-4">
          Join the Waitlist
        </h2>
        <p className="text-sm opacity-70 mb-10 max-w-lg mx-auto">
          Launching Spring 2026: AI-powered insights revealing the root causes
          of women&apos;s health.
        </p>
        <WaitlistForm darkMode />
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 lg:px-12 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span className="font-serif text-base text-foreground">reen</span>
          <div className="flex gap-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#waitlist" className="hover:text-foreground transition-colors">
            Join the waitlist
          </a>
        </div>
        <p className="text-center text-xs text-muted mt-6">
          &copy; {new Date().getFullYear()} Reen. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
