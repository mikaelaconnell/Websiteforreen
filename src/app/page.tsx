"use client";

import { useState } from "react";
import Image from "next/image";

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
    title: "Better Sampling",
    description:
      "Menstrual fluid holds a treasure-trove of information traditional blood tests miss.",
  },
  {
    title: "Machine Learning & AI",
    description:
      "Advanced algorithms uncover patterns across millions of data points to personalize insights for every woman.",
  },
  {
    title: "Advanced Sequencing",
    description: "Reveals deeper patterns in women's health.",
  },
  {
    title: "Longitudinal Tracking",
    description:
      "Continuous testing reveals how your health changes over time — catching shifts before symptoms appear.",
  },
  {
    title: "Holistic Integration",
    description:
      "Your body is an interconnected network — our models integrate many layers of information into one complete picture.",
  },
  {
    title: "Risk Insights + Action Plan",
    description:
      "Predictive models identify early warning signs and personalize care based on your unique risk profile.",
  },
];

const services = [
  {
    title: "Screening & Early Detection",
    content:
      "Proactive screening powered by AI catches warning signs early — before they become diagnoses. We analyze biomarkers, symptoms, and patterns to give you clarity.",
  },
  {
    title: "Precision Insights",
    content:
      "Your data tells a story. We use machine learning to decode it — delivering personalized, actionable health insights tailored to your body.",
  },
  {
    title: "Concierge Care",
    content:
      "Connect with clinicians who understand your results and your goals. Holistic support that puts you at the center.",
  },
];

const howItWorks = [
  {
    title: "1. Collect Your Samples",
    content:
      "Simple at-home collection kits delivered to your door. No clinic visits needed.",
  },
  {
    title: "2. Visualize Your Data",
    content:
      "Our AI platform analyzes your samples and presents clear, visual insights about your hormonal health.",
  },
  {
    title: "3. Meet with Clinicians",
    content:
      "Review your results with specialized women's health clinicians who create a personalized plan.",
  },
  {
    title: "4. Rewrite Your Future",
    content:
      "Ongoing monitoring and AI-powered recommendations help you take control of your health trajectory.",
  },
];

const testingAreas = [
  "Fertility & Reproductive Health",
  "Endometriosis, PCOS & More",
  "Hormone & Metabolic Health",
  "Perimenopause & Menopause",
  "Gynecologic Cancer Risk",
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
          care. Advanced testing and personalized insights for fertility,
          hormonal imbalances, perimenopause, and reproductive cancer screening.
        </p>
        <a
          href="#waitlist"
          className="mt-10 inline-flex rounded-full bg-foreground px-8 py-3.5 text-sm uppercase tracking-widest text-background hover:bg-foreground/90 transition-colors"
        >
          Get Early Access
        </a>
        {/* Hero phone mockup */}
        <div className="mt-16 relative">
          <div className="mx-auto w-64 sm:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-foreground/10">
            <Image
              src="/images/app-home.png"
              alt="Reen app home screen"
              width={390}
              height={844}
              className="w-full h-auto"
              priority
            />
          </div>
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
            <div key={area.title} className="text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-serif mb-3">{area.title}</h3>
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-border/50" />
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
        <p className="text-center text-lg sm:text-xl font-serif max-w-4xl mx-auto leading-relaxed mb-16">
          Delivering female-focused science, precision medicine and concierge
          care at an accessible price. Rewriting women&apos;s health testing
          with actionable answers and holistic support. This is healthcare that
          finally puts women first.
        </p>
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

      {/* Testing Areas */}
      <section className="px-6 py-24 lg:px-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8">
          Advanced at-home testing
        </p>
        <div className="space-y-5 max-w-2xl mx-auto">
          {testingAreas.map((area) => (
            <p key={area} className="text-2xl sm:text-3xl lg:text-4xl font-serif">
              {area}
            </p>
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
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm placeholder-white/50 outline-none focus:border-white transition-colors"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm placeholder-white/50 outline-none focus:border-white transition-colors"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="mt-4 w-full max-w-lg mx-auto rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm placeholder-white/50 outline-none focus:border-white transition-colors block"
        />
        <button className="mt-6 rounded-full bg-white text-accent px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-white/90 transition-colors">
          Get Early Access
        </button>
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
