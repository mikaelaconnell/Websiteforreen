import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Reen",
  description: "The terms that apply when you use the Reen app and website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <Link href="/" className="text-xs text-muted hover:text-foreground transition-colors">
        &larr; Back to reen-health.com
      </Link>

      <h1 className="font-serif text-4xl mt-6 mb-2">Terms of Service</h1>
      <p className="text-xs text-muted mb-10">Effective date: September 14, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="font-serif text-2xl mb-2">Acceptance of these terms</h2>
          <p>
            By creating an account or using the Reen app or website, you agree to these
            terms and to the{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            . If you do not agree, please do not use Reen.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">What Reen is (and is not)</h2>
          <p>
            Reen is an informational and organizational tool for tracking cycles, symptoms,
            medications, lab results, and wearable metrics, and for generating summaries you
            can discuss with your healthcare provider. Reen is not a medical device and does
            not provide medical advice, diagnosis, or treatment. Content in the app,
            including articles, insights, and generated reports, is for educational purposes
            only. Never disregard professional medical advice or delay seeking it because of
            something you read in Reen.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Your account and responsibilities</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>You must provide accurate account information and keep your password secure.</li>
            <li>You are responsible for the accuracy of the health data you log.</li>
            <li>You may not use Reen to harm others, break the law, or attempt to access other users&apos; data.</li>
            <li>
              You can delete your account and all data at any time in Settings &gt; Delete
              Account.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Limitation of liability</h2>
          <p>
            Reen is provided &quot;as is&quot; without warranties of any kind. To the fullest
            extent permitted by law, Reen and its creators are not liable for any indirect,
            incidental, or consequential damages arising from your use of the app or
            website, or from decisions made based on information presented in them.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The effective date above reflects
            the latest revision, and continued use of Reen after changes means you accept
            the updated terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Governing law</h2>
          <p>These terms are governed by the laws of the State of New York, USA.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:mikaelaconnell14@gmail.com" className="underline">
              mikaelaconnell14@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
