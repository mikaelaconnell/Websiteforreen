import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Reen",
  description: "How Reen collects, uses, stores, and deletes your data.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16">
      <Link href="/" className="text-xs text-muted hover:text-foreground transition-colors">
        &larr; Back to reen-health.com
      </Link>

      <h1 className="font-serif text-4xl mt-6 mb-2">Privacy Policy</h1>
      <p className="text-xs text-muted mb-10">Effective date: September 14, 2026</p>

      <div className="space-y-8 text-sm leading-relaxed text-foreground/90">
        <section>
          <h2 className="font-serif text-2xl mb-2">Who we are</h2>
          <p>
            Reen is a hormonal health companion app for iOS. This policy explains what
            information the Reen app and this website collect, how it is used, where it is
            stored, and how you can delete it.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Information we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Account information:</strong> your name, email address, password
              (stored only as a secure hash), and optionally your date of birth and the
              health conditions you select.
            </li>
            <li>
              <strong>Health information you log:</strong> cycles, daily logs, symptoms,
              medications, and lab results you choose to enter in the app.
            </li>
            <li>
              <strong>Apple Health data (optional):</strong> if you connect Apple Health,
              Reen reads heart rate, heart rate variability, sleep, and temperature to power
              readiness and cycle insights. You can disconnect at any time in the Health app,
              and Reen never writes to or reads from Apple Health without your permission.
            </li>
            <li>
              <strong>Waitlist email:</strong> if you join the waitlist on this website, we
              store the email address you submit so we can contact you about the launch.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">How we use your information</h2>
          <p>
            Your data is used only to provide app functionality: showing your history,
            computing cycle and readiness insights, and generating health report summaries
            you can share with your clinician. Report summaries are produced by an AI
            service processing your logged data on our servers. We do not sell your data,
            and we do not share it with third parties for advertising.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Where your data is stored</h2>
          <p>
            Your account and health data are stored in an encrypted database hosted on
            Google Cloud in the United States. Data is encrypted in transit and at rest.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Deleting your account and data</h2>
          <p>
            You can permanently delete your account and all associated data directly in the
            app: open <strong>Settings &gt; Delete Account</strong> and confirm with your
            password. Deletion is immediate and removes your account, cycles, daily logs,
            symptoms, medications, lab results, reports, and any connected device records
            from our servers. This cannot be undone.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Not medical advice</h2>
          <p>
            Reen provides educational information and data summaries. It does not provide
            medical advice, diagnosis, or treatment. Always consult a qualified healthcare
            provider about your health.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-2">Contact</h2>
          <p>
            Questions about this policy or your data? Email{" "}
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
