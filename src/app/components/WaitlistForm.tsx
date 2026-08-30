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
      const res = await fetch("https://formsubmit.co/ajax/0bd17603eb8d0a6e9128996df53d8325", {
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
