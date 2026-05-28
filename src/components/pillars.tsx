import Link from "next/link";

const programs = [
  {
    label: "01 / DSCR",
    title: "DSCR rental loans.",
    body: "Long-term financing underwritten on the property's debt service coverage ratio rather than personal income — built for buy-and-hold rental investors scaling beyond conventional limits.",
    bestFor: "Buy-and-hold investors · LLC-titled rentals",
    icon: BuildingIcon,
  },
  {
    label: "02 / Fix & Flip",
    title: "Fix & flip / rehab capital.",
    body: "Short-term financing for the acquisition and renovation of residential investment properties intended for resale, with light, moderate, or heavy rehab structures.",
    bestFor: "Residential rehabbers · Clear resale exits",
    icon: WrenchIcon,
  },
  {
    label: "03 / Bridge",
    title: "Bridge & transitional.",
    body: "Short-term capital to acquire, reposition, or stabilize a property ahead of permanent financing or sale — structured around a defined exit and a defensible business plan.",
    bestFor: "Time-sensitive deals · Reposition plays",
    icon: BridgeIcon,
  },
];

export function Pillars() {
  return (
    <section id="solutions" className="relative bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
              Loan programs
            </span>
            <h2 className="font-display mt-5 text-3xl leading-tight text-ink sm:text-4xl">
              Capital structured
              <br className="hidden sm:block" /> to the strategy.
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted">
              A snapshot of the most common programs we arrange. Each is for
              business or investment purposes only, secured by non-owner-occupied
              real estate.
            </p>
          </div>
          <Link
            href="/loan-programs"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            View all 7 programs
            <span
              aria-hidden
              className="transition group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-rule ring-1 ring-rule sm:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.label}
              className="group relative flex flex-col gap-5 bg-paper p-7 transition hover:bg-cream sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 items-center gap-2 rounded-full bg-ink px-3 text-[11px] font-medium uppercase tracking-[0.18em] text-lime">
                  <p.icon />
                  {p.label}
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink sm:text-3xl">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink/60">
                Best for · {p.bestFor}
              </p>
              <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-ink">
                Start a profile
                <span
                  aria-hidden
                  className="transition group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M4 21V5a1 1 0 011-1h6a1 1 0 011 1v4h8a1 1 0 011 1v11H4zm3-3h2v-2H7v2zm0-4h2v-2H7v2zm0-4h2V8H7v2zm4 8h2v-2h-2v2zm0-4h2v-2h-2v2zm4 4h2v-2h-2v2zm0-4h2v-2h-2v2z" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M22 6.5l-3.5 3.5-3-3L19 3.5a5 5 0 00-6.7 6.2L3 19l2 2 9.3-9.3a5 5 0 006.2-6.7l1.5 1.5z" />
    </svg>
  );
}
function BridgeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M3 18V8M21 18V8M3 8c4-3 14-3 18 0M7 18v-6M12 18v-7M17 18v-6M2 18h20" />
    </svg>
  );
}
