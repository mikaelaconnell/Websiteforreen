"use client";

import { useState } from "react";

const focusAreas = [
  {
    title: "Undiagnosed Symptoms",
    description:
      "We decode chronic pelvic pain, painful periods, irregular bleeding, digestive and urinary tract issues with precision risk scores for gynecological conditions like endometriosis and PCOS.",
  },
  {
    title: "Perimenopause & Menopause",
    description:
      "Get your perimenopause stage, symptom forecasting, personalized HRT guidance, and whole-body aging insights — no more guessing.",
  },
  {
    title: "Fertility & Reproductive Health",
    description:
      "Reproductive age, miscarriage risk, genetic factors, and nutrient deficiencies — with personalized egg preservation timeline and IVF insights.",
  },
  {
    title: "Gynecological Cancer Risk",
    description:
      "Comprehensive cancer risk assessment analyzes genetic predispositions, hormonal patterns, and inflammatory markers for early detection and prevention.",
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

function Accordion({
  items,
}: {
  items: { title: string; content: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl">
      {items.map((item, i) => (
        <div key={item.title} className="border-b border-gray-200">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between py-5 text-left"
          >
            <span className="text-lg tracking-wide">{item.title}</span>
            <span className="text-xl text-muted ml-4">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <p className="pb-5 text-sm text-muted leading-relaxed">
              {item.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-6 lg:px-16">
        <span className="text-xl font-semibold tracking-tight">reen</span>
        <a
          href="#waitlist"
          className="text-sm uppercase tracking-widest hover:text-muted transition-colors"
        >
          Get Early Access
        </a>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-tight max-w-3xl">
          Women&apos;s health, decoded.
        </h1>
        <p className="mt-6 text-base text-muted max-w-2xl leading-relaxed">
          Advanced testing and care delivery for fertility, chronic gynecologic
          symptoms, hormonal imbalances, perimenopause, and reproductive cancer
          screening. Launching Spring 2026.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="mt-4 w-full max-w-lg rounded-full border border-gray-300 px-5 py-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors"
        />
        <button className="mt-6 rounded-full bg-foreground px-8 py-3 text-sm uppercase tracking-widest text-background hover:bg-gray-800 transition-colors">
          Get Early Access
        </button>
      </section>

      {/* Focus Areas */}
      <section className="px-8 py-20 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-4">
          Precision Medicine. Personal Results.
        </h2>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {focusAreas.map((area) => (
            <div key={area.title} className="text-center">
              <div className="aspect-[3/4] bg-gray-100 mb-6" />
              <h3 className="text-lg font-serif mb-3">{area.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission + Stats */}
      <section className="bg-[#6c63ff] text-white px-8 py-20 lg:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif max-w-3xl mx-auto">
          AI-powered precision medicine, built for women.
        </h2>
        <p className="mt-4 text-sm opacity-80 max-w-3xl mx-auto leading-relaxed">
          Women want more control over their health. The standard of care is too
          slow, too reactive, too one-size-fits-all, or non-existent. We are
          here to change that.
        </p>
      </section>

      <section className="px-8 py-20 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-4xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-4xl sm:text-5xl font-serif text-muted">
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Science */}
      <section className="bg-[#e8e4f0] px-8 py-20 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-16">
          The Science
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {science.map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Accordion */}
      <section className="px-8 py-20 lg:px-16">
        <p className="text-center text-base text-muted max-w-3xl mx-auto leading-relaxed mb-12">
          Delivering female-focused science, precision medicine and concierge
          care at an accessible price. Rewriting women&apos;s health testing
          with actionable answers and holistic support. This is healthcare that
          finally puts women first.
        </p>
        <Accordion items={services} />
        <div className="text-center mt-10">
          <a
            href="#waitlist"
            className="text-sm uppercase tracking-widest underline underline-offset-4 hover:text-muted transition-colors"
          >
            Join the Waitlist
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-8 py-20 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-serif text-center mb-12">
          How It Works
        </h2>
        <Accordion items={howItWorks} />
        <div className="text-center mt-10">
          <a
            href="#waitlist"
            className="text-sm uppercase tracking-widest underline underline-offset-4 hover:text-muted transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </section>

      {/* Testing Areas */}
      <section className="px-8 py-20 lg:px-16 text-center">
        <p className="text-sm uppercase tracking-widest text-muted mb-8">
          Advanced at-home testing
        </p>
        <div className="space-y-4 max-w-2xl mx-auto">
          {testingAreas.map((area) => (
            <p key={area} className="text-2xl sm:text-3xl font-serif">
              {area}
            </p>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="px-8 py-20 lg:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif mb-4">
          Join the Waitlist
        </h2>
        <p className="text-sm text-muted mb-10">
          Launching Spring 2026: AI-powered insights revealing the root causes
          of women&apos;s health.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="mt-4 w-full max-w-lg mx-auto rounded-full border border-gray-300 px-5 py-3 text-sm bg-transparent outline-none focus:border-foreground transition-colors block"
        />
        <button className="mt-6 rounded-full bg-foreground px-8 py-3 text-sm uppercase tracking-widest text-background hover:bg-gray-800 transition-colors">
          Get Early Access
        </button>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 lg:px-16 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>
            &copy; {new Date().getFullYear()} Reen. All rights reserved.
          </span>
          <a
            href="mailto:mikaelaconnell14@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            mikaelaconnell14@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
