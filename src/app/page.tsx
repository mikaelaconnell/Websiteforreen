export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-6 lg:px-16">
        <span className="text-xl font-semibold tracking-tight">reen</span>
        <a
          href="mailto:mikaelaconnell14@gmail.com"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </header>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">
          Coming Soon
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight max-w-2xl">
          Hormonal health,
          <br />
          reimagined.
        </h1>
        <p className="mt-6 text-lg text-muted max-w-md leading-relaxed">
          Reen combines cycle tracking with personalized insights powered by AI
          — built for women who want to understand their bodies better.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background">
            App Store — Coming Soon
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 lg:px-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">
              Track
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Log your cycle, symptoms, and mood with a clean, intuitive
              interface designed to feel effortless.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">
              Understand
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              AI-powered insights help you see patterns and understand what your
              body is telling you, cycle by cycle.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-3">
              Thrive
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Personalized recommendations for nutrition, exercise, and wellness
              tailored to each phase of your cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 lg:px-16 border-t border-accent-light">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} Reen. All rights reserved.</span>
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
