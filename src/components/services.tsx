const services = [
  {
    tag: "01 / Lending",
    title: "Loan origination & servicing",
    body: "Application flows, KYC/KYB, decision engines, and servicing portals — connected to your funding sources and credit policies, not built around them.",
  },
  {
    tag: "02 / Healthcare",
    title: "Revenue cycle management",
    body: "Eligibility verification, claims, denial workflows, and patient billing. Reduce A/R days without dropping below the compliance floor.",
  },
  {
    tag: "03 / Financial Services",
    title: "Back-office automation",
    body: "Client onboarding, performance reporting, and reconciliation built for RIAs, brokers, and family offices. Examiner-ready by default.",
  },
];

export function Services() {
  return (
    <section id="work" className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
              How we deliver
            </span>
            <h2 className="font-display mt-6 text-4xl leading-tight text-ink sm:text-5xl">
              Solutions to grow and
              <br /> secure your book.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Three practice areas, one team. Each engagement bundles strategy,
            implementation, and a 24-month operating roadmap.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.tag} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  tag,
  title,
  body,
  index,
}: {
  tag: string;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream ring-1 ring-rule transition hover:ring-ink/20">
      <div className="relative h-44 overflow-hidden">
        <ServiceArt variant={index} />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted">
          {tag}
        </span>
        <h3 className="font-display text-2xl text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{body}</p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-ink">
          Talk to our team
          <span aria-hidden className="transition group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </article>
  );
}

function ServiceArt({ variant }: { variant: number }) {
  if (variant === 0) {
    return (
      <div className="absolute inset-0 grid grid-cols-6 gap-1 bg-ink p-3">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              background:
                i % 7 === 3
                  ? "var(--lime)"
                  : i % 4 === 0
                    ? "rgba(255,255,255,0.12)"
                    : "rgba(255,255,255,0.05)",
            }}
          />
        ))}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg bg-paper/95 px-3 py-2 text-xs text-ink">
          <span className="font-medium">Funded volume</span>
          <span className="rounded-full bg-lime px-2 py-0.5 text-[11px] font-semibold">
            +18.4%
          </span>
        </div>
      </div>
    );
  }
  if (variant === 1) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-lime-soft">
        <svg viewBox="0 0 200 100" className="h-full w-full">
          <defs>
            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--ink)" />
              <stop offset="100%" stopColor="var(--ink-3)" />
            </linearGradient>
          </defs>
          <path
            d="M0 80 L30 60 L60 70 L90 40 L120 55 L160 25 L200 35 L200 100 L0 100 Z"
            fill="url(#grad)"
            opacity="0.9"
          />
          <path
            d="M0 80 L30 60 L60 70 L90 40 L120 55 L160 25 L200 35"
            fill="none"
            stroke="var(--lime-2)"
            strokeWidth="2.5"
          />
        </svg>
        <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-paper/90 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-ink ring-1 ring-rule">
          A/R days ↓
        </div>
      </div>
    );
  }
  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 bg-ink p-3">
      {[
        "intake",
        "KYC",
        "fund",
        "report",
        "ACAT",
        "rebal",
        "review",
        "audit",
        "renew",
      ].map((step, i) => (
        <div
          key={step}
          className="flex items-center justify-center rounded-md text-[10px] uppercase tracking-wider"
          style={{
            background:
              i === 4 || i === 7
                ? "var(--lime)"
                : "rgba(255,255,255,0.07)",
            color: i === 4 || i === 7 ? "var(--ink)" : "rgba(255,255,255,0.7)",
          }}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
