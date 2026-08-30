# Reen Website Refresh: Design

Date: 2026-08-30
Status: Approved by owner

## Goal

Refresh the existing Reen marketing site (Next.js app in this repo, deployed to the
existing Vercel project at reen-website.vercel.app) with a visual polish and updated
copy. The site's job is to collect early-user waitlist signups ahead of the App Store
launch. After deploy, attach the custom domain reen-health.com (confirmed available;
purchase requires explicit owner approval; roughly $15-20/year charged to the Vercel
account).

## Design direction

Two reference sites, combined:

- **maeva.health**: the palette and typographic elegance the site already uses.
  Cream background (#fbf7ee), deep wine text and accents (#45101c), rose secondary
  accent (#942143), serif display headlines (Abhaya Libre) with DM Sans body.
- **easehealth.com**: the layout and motion language. Large rounded soft-colored
  panels per section, short punchy copy, pill-shaped feature chips, floating layered
  app-UI cards, scroll-driven movement, one repeated call to action.

Explicitly NOT copying Ease's green color scheme. Reen keeps the Maeva palette.

## Page structure (single page, top to bottom)

1. **Nav**: Reen wordmark left; "Join the waitlist" pill button right (scrolls to form).
2. **Hero**: rounded panel, serif headline "Finally understand why you feel this way.",
   subline positioning Reen + "Coming soon to the App Store." Big pill button with
   arrow: "Join the waitlist". A floating app screenshot card beside or beneath the
   text with subtle parallax drift.
3. **Spinning dial section** (the Maeva-inspired centerpiece): full-width deep wine
   panel, cream text. Serif headline "What if your health was..." with an arc dial and
   three numbered stops (Roman numerals). The dial rotates on scroll progress or
   auto-advances every few seconds; each stop brings its word to the top with a line:
   - I. Understood: Your symptoms are signals. Reen connects them into patterns.
   - II. Connected: Cycle, sleep, labs, and wearables in one place.
   - III. Heard: Walk into appointments with a report your doctor takes seriously.
   Tappable on mobile.
4. **The problem**: small label pill ("The problem") + large serif statement about the
   7-10 year diagnostic delay women face for conditions like PCOS and endometriosis.
5. **App in action showcase** (Ease-style): rounded soft panel. Left: heading, short
   copy, pill chips (for example: Daily tracking, Cycle insights, Lab results, AI
   doctor reports). Right: layered overlapping cards built from the real app
   screenshots in public/images (app-home, app-track, app-insights, app-reports,
   app-learn), with an animated cursor that moves and taps inside the mock UI,
   popping up a small card (a symptom gets logged, then an insight appears).
   Pure CSS/JS animation, no video.
6. **Focus areas**: refined cards for Undiagnosed Symptoms, Perimenopause and
   Menopause, Fertility and Reproductive Health, Gynecological Cancer Risk.
7. **Science / trust**: keep existing pillar content, restyled with chips and rounded
   panels. Note that Reen informs and prepares; it never diagnoses.
8. **Final waitlist panel**: wine-colored rounded panel, serif headline inviting the
   visitor to be one of the first users, the signup form, and reassurance line.
9. **Footer**: minimal; wordmark, contact, small print.

## Motion

- Sections and cards fade/slide up as they enter the viewport (IntersectionObserver).
- Floating screenshot cards drift at slightly different speeds while scrolling
  (transform on scroll; respects prefers-reduced-motion).
- The dial rotates smoothly between stops.
- Animated cursor loop in the showcase section.

## Copy rules

- Every call to action reads "Join the waitlist".
- Launch status: "Coming soon to the App Store". Do not claim the app is live.
- No em dashes anywhere. No personal names in code or content.
- Tone: empathetic + evidence-minded, matching Maeva's clinical-meets-human voice.

## Waitlist form

- Keep the existing FormSubmit AJAX integration, changed to deliver to the owner's
  main Gmail (mikaelac14, replacing the old mikaelaconnell14 address).
- Collects email only. Success state: friendly "You're on the list" confirmation.
- Verify with a real test submission after deploy (FormSubmit requires a one-time
  activation click from the inbox on first use of a new address).

## Tech

- Same stack: Next.js 16 App Router, Tailwind 4, single page.tsx plus small
  components. No new dependencies unless needed for scroll animation (prefer none;
  IntersectionObserver + CSS is enough).
- Keep components in page.tsx unless it grows unwieldy; split out Dial and
  AppShowcase components for clarity.
- Mobile pass required: panels stack, dial is tappable, showcase cards scale down.

## Out of scope

- No new pages, blog, or CMS.
- No signup database (email delivery only).
- Domain purchase happens only after explicit owner go-ahead at deploy time.

## Success criteria

- Site builds clean and deploys to the existing Vercel project URL.
- Form submission arrives at the owner's inbox (tested).
- Scroll motion and dial work on desktop and phone.
- Lighthouse-reasonable performance (images optimized via next/image).
