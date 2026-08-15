import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You're Booked — Trailer Dawgz",
  description:
    "Your Trailer Dawgz strategy call is booked. Check your email for your call details and Zoom link.",
  robots: { index: false, follow: false },
};

function Check() {
  return (
    <svg
      className="mt-1 h-5 w-5 flex-none text-accent"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ThankYou() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ================= NAV ================= */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-5 py-4 sm:justify-start">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-accent-2 to-accent text-black">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M2 7h12v7H2V7Zm13 2h4l3 3v2h-2a2 2 0 1 1-4 0h-1V9ZM6.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </span>
            <span className="font-display text-xl tracking-wide">TRAILER DAWGZ</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col">
        {/* ================= CONFIRMATION ================= */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="hazard absolute inset-x-0 top-0 h-2 opacity-80" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
          <div className="relative mx-auto w-full max-w-3xl px-5 py-16 text-center sm:py-24">
            {/* Success badge */}
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-2 to-accent text-black shadow-lg shadow-accent/30">
              <svg viewBox="0 0 24 24" className="h-11 w-11" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>

            <p className="mt-6 text-sm font-bold uppercase tracking-widest text-accent">
              Your Call Is Booked
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
              You&apos;re In. <span className="text-gradient">Let&apos;s Fill Your Lot.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
              Nice move. Your free strategy call is officially on the calendar — and we&apos;ll be
              pulling your competitors&apos; ads before we hop on so you walk away with real answers.
            </p>

            {/* Check your email callout */}
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-accent/40 bg-surface p-6 text-left sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" strokeLinejoin="round" />
                    <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Check your email 📩</h2>
                  <p className="mt-2 leading-7 text-muted">
                    We just sent your <strong className="text-foreground">call details and Zoom link</strong> to
                    the email address you booked with. Add it to your calendar now so you don&apos;t miss it —
                    and if you don&apos;t see it in a few minutes, check your <strong className="text-foreground">spam
                    or promotions</strong> folder.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BEFORE THE CALL ================= */}
        <section>
          <div className="mx-auto w-full max-w-3xl px-5 py-16 sm:py-20">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                Before We Talk
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                How To Get The Most Out Of Your Call
              </h2>
            </div>

            <ul className="mx-auto mt-10 grid max-w-xl gap-4">
              {[
                "Confirm the appointment in your email and add it to your calendar.",
                "Save the Zoom link somewhere you'll find it 5 minutes before we start.",
                "Jump on from somewhere quiet where you can see your screen.",
                "Come with your numbers — what a sale is worth and how many trailers you want to move.",
                "Show up on time — spots are limited and we keep these calls exclusive per market.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface p-5 text-left"
                >
                  <Check />
                  <span className="text-sm leading-6 text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mx-auto mt-10 max-w-xl text-center text-lg font-semibold text-foreground">
              See you on the call. <span className="text-accent">Let&apos;s go move some trailers.</span>
            </p>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-accent-2 to-accent text-black">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M2 7h12v7H2V7Zm13 2h4l3 3v2h-2a2 2 0 1 1-4 0h-1V9ZM6.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </span>
            <span className="font-display text-lg tracking-wide">TRAILER DAWGZ</span>
          </div>
          <p className="text-sm text-muted">
            Exclusive leads &amp; AI appointment setting for trailer dealers.
          </p>
          <p className="text-xs text-muted">© 2026 Trailer Dawgz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
