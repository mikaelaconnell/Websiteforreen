"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

function WaitlistForm({ darkMode = false }: { darkMode?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formsubmit.co/ajax/mikaelaconnell14@gmail.com", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <p className={`text-sm mt-6 ${darkMode ? "text-white/80" : "text-muted"}`}>
        You&apos;re on the list! We&apos;ll be in touch.
      </p>
    );
  }

  const inputClass = darkMode
    ? "flex-1 rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm placeholder-white/50 outline-none focus:border-white transition-colors"
    : "flex-1 rounded-full border border-gray-300 bg-transparent px-5 py-3 text-sm placeholder-muted outline-none focus:border-foreground transition-colors";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        <input type="text" name="firstName" placeholder="First Name" required className={inputClass} />
        <input type="text" name="lastName" placeholder="Last Name" required className={inputClass} />
      </div>
      <input type="email" name="email" placeholder="Email" required className={`mt-4 w-full ${inputClass}`} />
      <button
        type="submit"
        disabled={loading}
        className={`mt-6 rounded-full px-8 py-3.5 text-sm uppercase tracking-widest transition-colors ${
          darkMode
            ? "bg-white text-accent hover:bg-white/90"
            : "bg-foreground text-background hover:bg-foreground/90"
        }`}
      >
        {loading ? "Submitting..." : "Get Early Access"}
      </button>
    </form>
  );
}

const appFeatures = [
  {
    title: "Home",
    subtitle: "Your daily dashboard",
    description:
      "Cycle day tracking, health metrics, readiness insights, and symptom logging — all at a glance.",
    image: "/images/app-home.png",
  },
  {
    title: "Track",
    subtitle: "Log everything that matters",
    description:
      "Period flow, symptoms, medications, mood, and energy — beautifully organized and effortless to use.",
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
      "Get your perimenopause stage, symptom forecasting, personalized HRT guidance, and whole-body aging insights — no more guessing.",
    image: "/images/focus-menopause.jpg",
  },
  {
    title: "Fertility & Reproductive Health",
    description:
      "Reproductive age, miscarriage risk, genetic factors, and nutrient deficiencies — with personalized egg preservation timeline and IVF insights.",
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
  { value: "20%", label: "Of women struggle with infertility" },
  { value: "7 years", label: "To receive a diagnosis for endometriosis" },
  { value: "1 in 3", label: "Women receive poor care for perimenopause" },
  { value: "106,000", label: "New cases of gynecological cancers yearly" },
];

const science = [
  {
    title: "Better Data Collection",
    description:
      "Comprehensive self-reported symptoms, cycle data, lab results, and doctor visit notes — the information traditional care overlooks.",
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
      "Passively sync Apple Health, Oura Ring, and Whoop — HRV, sleep, temperature, and recovery data feed your health picture automatically.",
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
      "Continuous data collection reveals how your health changes over time — catching shifts before symptoms appear.",
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
      "Your body is an interconnected network — Reen integrates many layers of information into one complete picture.",
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

const services = [
  {
    title: "Free — Screening & Early Detection",
    content:
      "Proactive screening powered by AI catches warning signs early. Cycle tracking, symptom logging, wearable sync, and basic insights — all free.",
  },
  {
    title: "Premium — Precision Insights ($14.99/mo)",
    content:
      "Deep personalized analysis, trend detection, AI-generated doctor advocacy reports, full lab tracking, and condition-specific modules for PCOS, perimenopause, and fertility.",
  },
  {
    title: "Ask Reen — AI Health Assistant",
    content:
      "Ask questions in plain language and get personalized, evidence-based answers grounded in medical literature and your own tracked data. \"Why am I so tired during my luteal phase?\" — Reen knows.",
  },
];

const howItWorks = [
  {
    title: "1. Log Your Data",
    content:
      "Track your cycle, symptoms, medications, lab results, and doctor visits. Connect Apple Health, Oura, or Whoop to sync biometrics automatically.",
  },
  {
    title: "2. See Your Patterns",
    content:
      "Reen's AI analyzes your data and surfaces insights — symptom-cycle correlations, risk scores, and trend detection across every cycle.",
  },
  {
    title: "3. Generate Reports",
    content:
      "Create comprehensive doctor advocacy reports combining all your tracked data — designed to bring to appointments so you get heard.",
  },
  {
    title: "4. Take Control",
    content:
      "Use personalized risk assessments, condition-specific insights, and evidence-based recommendations to advocate for your own health.",
  },
];

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#focus", label: "Focus Areas" },
  { href: "#science", label: "Science" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#waitlist", label: "Join Waitlist" },
];

function Accordion({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item, i) => (
        <div key={item.title} className="border-b border-border">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-6 text-left"
          >
            <span className="text-lg sm:text-xl font-serif">{item.title}</span>
            <span className="text-2xl text-muted ml-4 shrink-0">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-40 pb-6" : "max-h-0"
            }`}
          >
            <p className="text-sm text-muted leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <a
            href="#waitlist"
            className="hidden md:inline-flex rounded-full bg-accent px-5 py-2 text-xs uppercase tracking-widest text-white hover:bg-accent/90 transition-colors"
          >
            Join Waitlist
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
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-28 sm:py-36 lg:py-44 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">
          Launching Spring 2026
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] max-w-4xl">
          Paving a new standard for hormonal health
        </h1>
        <p className="mt-8 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          Because your body doesn&apos;t stay the same — and neither should your
          care. AI-powered insights combining your cycle data, symptoms,
          wearables, and labs — for fertility, hormonal imbalances,
          perimenopause, and cancer risk screening.
        </p>
        <div className="mt-10 w-full max-w-lg">
          <WaitlistForm />
        </div>
      </section>

      {/* Mission */}
      <section
        id="mission"
        className="bg-accent text-white px-6 py-24 lg:px-12 text-center"
      >
        <p className="text-xs uppercase tracking-[0.3em] opacity-60 mb-6">
          Our Mission
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif max-w-3xl mx-auto leading-tight">
          AI-powered precision medicine, built for women.
        </h2>
        <p className="mt-6 text-sm sm:text-base opacity-70 max-w-2xl mx-auto leading-relaxed">
          Women want more control over their health. The standard of care is too
          slow, too reactive, too one-size-fits-all, or non-existent. We are
          here to change that.
        </p>
      </section>

      {/* Stats */}
      <section className="px-6 py-24 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-5xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-serif text-accent">
                {stat.value}
              </p>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section id="focus" className="px-6 py-24 lg:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">
          What We Cover
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
          Precision Medicine. Personal Results.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="bg-white/60 rounded-lg p-8 text-center hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-serif mb-4">{area.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Science */}
      <section id="science" className="bg-[#f0ece4] px-6 py-24 lg:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">
          Our Approach
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
          The Science
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {science.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center text-accent">
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-24 lg:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">
          Plans
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
          Built to grow with you
        </h2>
        <Accordion items={services} />
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

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#f0ece4] px-6 py-24 lg:px-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent text-center mb-4">
          Your Journey
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
          How It Works
        </h2>
        <Accordion items={howItWorks} />
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
          <a
            href="mailto:mikaelaconnell14@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            mikaelaconnell14@gmail.com
          </a>
        </div>
        <p className="text-center text-xs text-muted mt-6">
          &copy; {new Date().getFullYear()} Reen. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
