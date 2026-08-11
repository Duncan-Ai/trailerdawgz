import Script from "next/script";

const CTA_HREF = "#book";

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

function CtaButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={CTA_HREF}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent-2 to-accent px-8 py-4 text-base font-extrabold uppercase tracking-wide text-black shadow-lg shadow-accent/20 transition-transform hover:scale-[1.02] active:scale-[0.99] ${className}`}
    >
      {children}
      <svg
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ================= NAV ================= */}
      <header className="sticky top-0 z-30 border-b border-border/80 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-accent-2 to-accent text-black">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M2 7h12v7H2V7Zm13 2h4l3 3v2h-2a2 2 0 1 1-4 0h-1V9ZM6.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
              </svg>
            </span>
            <span className="font-display text-xl tracking-wide">TRAILER DAWGZ</span>
          </a>
          <a
            href={CTA_HREF}
            className="rounded-md border border-accent/40 px-4 py-2 text-sm font-bold uppercase tracking-wide text-accent transition-colors hover:bg-accent/10"
          >
            Book My Strategy Call
          </a>
        </div>
      </header>

      <main id="top" className="flex flex-1 flex-col">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
            {/* Left: copy */}
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                <span className="h-2 w-2 rounded-full bg-accent" />
                For Trailer Lots Done Fighting Over The Same 6 Recycled Facebook Leads
              </p>

              <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Exclusive, Ready-To-Buy Trailer Buyers —{" "}
                <span className="text-gradient">Delivered To Your Lot Every Single Week.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                We build you a lead machine for <strong className="text-foreground">dump trailers, hauling trailers,
                and everything on wheels.</strong> We run the ads, our AI books the appointments, and you
                close the deals. No shared leads. No tire-kickers. No excuses.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CtaButton>Book My Free Strategy Call</CtaButton>
                <span className="text-sm text-muted">
                  Free competitor ad report. No contracts. No pressure.
                </span>
              </div>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "100% exclusive leads — never shared",
                  "AI follow-up in under 60 seconds",
                  "Free CRM built for your lot",
                  "Free high-converting website",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: VSL */}
            <div className="lg:pl-4">
              <div className="rounded-2xl border border-border bg-surface p-3 shadow-xl shadow-black/10">
                <p className="px-2 pb-3 pt-1 text-center text-sm font-semibold uppercase tracking-wider text-accent">
                  ▶ Watch This First — 4 Min
                </p>
                {/*
                  ============================================================
                  VSL GOES HERE
                  Drop in your video embed (YouTube / Wistia / Vimeo / <video>).
                  Replace the placeholder block below with your <iframe> and
                  keep the aspect-video wrapper for a responsive 16:9 player.
                  ============================================================
                */}
                <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-2">
                  <div className="bg-grid absolute inset-0 opacity-30" />
                  <div className="relative flex flex-col items-center gap-4 text-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-2 to-accent text-black shadow-lg shadow-accent/40 transition-transform hover:scale-105">
                      <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9" fill="currentColor" aria-hidden="true">
                        <path d="M8 5v14l11-7L8 5Z" />
                      </svg>
                    </span>
                    <p className="max-w-xs px-4 text-sm font-medium text-muted">
                      How trailer dealers are booking their calendars solid — without lifting a finger.
                    </p>
                  </div>
                </div>
                <p className="px-2 pb-1 pt-3 text-center text-xs text-muted">
                  Turn your sound on. This is the exact system we install on your lot.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BOOK / STRATEGY CALL ================= */}
        <section id="book" className="relative overflow-hidden scroll-mt-20 border-b border-border bg-surface/40">
          <div className="hazard absolute inset-x-0 top-0 h-2 opacity-80" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
          <div className="relative mx-auto w-full max-w-3xl px-5 py-16 text-center sm:py-20">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              Free Strategy Call
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight sm:text-6xl">
              See Exactly What Your Competitors Are Spending —{" "}
              <span className="text-gradient">Free.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
              Book your free strategy call and we&apos;ll pull back the curtain on your local competition&apos;s ads,
              show you where the opportunity is, and map out how we&apos;d fill your lot with exclusive, qualified
              buyers. Walk away with a plan whether we work together or not.
            </p>

            <p className="mx-auto mt-6 max-w-md text-sm text-muted">
              📍 Limited spots each month — we only take a handful of lots per market to keep leads exclusive.
              Grab a time that works for you below.
            </p>

            {/* ============ BOOKING CALENDAR ============ */}
            <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-xl shadow-black/10 sm:p-3">
              <iframe
                src="https://link.mobilehomeguys.ai/widget/booking/S1JGD7tDR81CX4H5KAbI"
                allow="payment"
                scrolling="no"
                id="S1JGD7tDR81CX4H5KAbI_1786372684260"
                title="Book your free Trailer Dawgz strategy call"
                style={{
                  width: "100%",
                  minHeight: "720px",
                  border: "none",
                  overflow: "hidden",
                }}
              />
            </div>

            <ul className="mx-auto mt-10 flex max-w-lg flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
              {[
                "Free competitor ad report",
                "No contracts",
                "Trailer dealers only",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Script
            src="https://link.mobilehomeguys.ai/js/form_embed.js"
            strategy="afterInteractive"
          />
        </section>

        {/* ================= PAIN / AGITATION ================= */}
        <section className="border-b border-border bg-surface/40">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              You&apos;ve got inventory sitting on the lot.{" "}
              <span className="text-muted">The problem was never the trailers.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              It&apos;s the leads. Or the lack of them. If any of this sounds like your week, keep reading —
              because we fixed it.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "You&apos;re buying leads that 5 other lots bought too — and racing to the phone first.",
                "By the time you call back, they already bought from someone quicker.",
                "Your marketing “guy” runs boosted posts and calls it a strategy.",
                "You&apos;re a closer, not a chaser — but you spend all day chasing dead leads.",
                "Weekends and after-hours leads go cold before you ever see them.",
                "You have no idea what your competitors are spending — or what&apos;s working for them.",
              ].map((pain, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm3.5 5.5-1-1L10 9 7.5 6.5l-1 1L9 10l-2.5 2.5 1 1L10 11l2.5 2.5 1-1L11 10l2.5-2.5Z" />
                    </svg>
                  </span>
                  <p
                    className="text-sm leading-6 text-foreground"
                    dangerouslySetInnerHTML={{ __html: pain }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-10 text-lg font-semibold text-foreground">
              Here&apos;s the truth: <span className="text-accent">whoever follows up fastest wins the sale.</span>{" "}
              So we made sure that&apos;s always you.
            </p>
          </div>
        </section>

        {/* ================= OFFER STACK ================= */}
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                The Trailer Dawgz System
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Everything You Need To Sell More Trailers.{" "}
                <span className="text-gradient">Done For You.</span>
              </h2>
              <p className="mt-4 text-lg text-muted">
                We don&apos;t hand you a login and wish you luck. We build the whole machine, plug it into your
                lot, and run it.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                {
                  tag: "Exclusive Qualified Leads",
                  title: "Leads that are yours and yours alone",
                  body: "Ready-to-buy dump trailer and hauling trailer buyers, matched to your inventory and your territory. Never resold. Never shared. When a lead comes in, you're the only lot that gets the call.",
                },
                {
                  tag: "AI Follow-Up & Appointment Setting",
                  title: "Every lead worked in 60 seconds — 24/7",
                  body: "The instant someone raises their hand, our AI texts, calls, and emails them, answers their questions, handles the follow-up, and books them straight onto your calendar. Nights, weekends, holidays. It never sleeps and it never forgets.",
                },
                {
                  tag: "Free CRM — Included",
                  title: "See every lead, every deal, every dollar",
                  body: "A full CRM built for your lot, set up for you, and yours to keep. Every conversation and appointment in one place so nothing — and nobody — falls through the cracks. No extra fee. No catch.",
                },
                {
                  tag: "Free Website — Included",
                  title: "A lot that sells while you sleep",
                  body: "A fast, high-converting website designed to turn clicks into booked appointments and showcase your trailers like they deserve. We build it, we host it, and it's included. Free.",
                },
              ].map((f) => (
                <div
                  key={f.tag}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-accent/50"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100" />
                  <p className="inline-flex rounded-md bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                    {f.tag}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold text-foreground">{f.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="border-b border-border bg-surface/40">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                Dead Simple
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
                Three Steps To A Full Calendar
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "We Build The Machine",
                  body: "Website, CRM, and ad campaigns dialed in to your trailers and your zip codes. You approve it. We launch it. Usually live within days.",
                },
                {
                  n: "02",
                  title: "AI Works Every Lead",
                  body: "The second a buyer raises their hand, our AI texts, calls, and follows up relentlessly until they book — so no lead ever goes cold again.",
                },
                {
                  n: "03",
                  title: "You Close On Appointments",
                  body: "You show up to real appointments with real buyers who already want a trailer. You do what you do best — close deals and move inventory.",
                },
              ].map((s) => (
                <div key={s.n} className="relative rounded-2xl border border-border bg-surface p-8">
                  <span className="font-display text-5xl text-accent/40">{s.n}</span>
                  <h3 className="mt-4 text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <CtaButton>Book My Free Strategy Call</CtaButton>
            </div>
          </div>
        </section>

        {/* ================= WHO IT'S FOR ================= */}
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:py-20">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Built For Trailer Dealers. <span className="text-muted">Only.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted">
              We&apos;re not a do-everything agency. We speak trailer. If you sell any of these, we know exactly
              how to fill your lot with buyers.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Dump Trailers",
                "Hauling & Utility Trailers",
                "Equipment & Flatbed Trailers",
                "Enclosed / Cargo Trailers",
                "Gooseneck & Deckover",
                "Car Haulers",
                "Landscape Trailers",
                "Livestock & Stock Trailers",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= GUARANTEE ================= */}
        <section className="bg-surface/40">
          <div className="mx-auto w-full max-w-4xl px-5 py-16 sm:py-20">
            <div className="rounded-2xl border border-accent/40 bg-surface p-8 sm:p-12">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">
                Our Promise To You
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
                We Take On The Risk. You Just Show Up And Close.
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                We&apos;re so confident in this system that we&apos;ll prove it before you ever commit. On your free
                strategy call we&apos;ll hand you a report on exactly what your competitors are running for ads —
                and show you the gaps you can drive a trailer straight through. If we can&apos;t show you a clear
                path to more booked appointments, we&apos;ll tell you flat out. No fluff. No hard sell.
              </p>
              <div className="mt-8">
                <CtaButton>Book My Free Strategy Call</CtaButton>
              </div>
            </div>
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
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Trailer Dawgz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
