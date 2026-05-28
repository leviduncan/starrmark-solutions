export function TrustHeading() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-2" />
          Why investors work with us
        </span>
        <h2 className="font-display mt-6 text-4xl leading-[1.02] text-ink sm:text-6xl">
          A BROKER THAT
          <br />
          THINKS LIKE AN OPERATOR.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
          Our incentive is the right structure for the deal, not a single
          product on a shelf. Each submission is built around the questions a
          capital source will ask, with the documentation organized to answer
          them.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 lg:grid-cols-3">
        <FeatureCard variant="dark">
          <p className="text-xs uppercase tracking-[0.2em] text-lime">
            Packaging
          </p>
          <h3 className="font-display mt-3 text-2xl text-white">
            Lender-ready submissions.
          </h3>
          <p className="mt-2 text-sm text-white/65">
            Complete, organized deal packages — borrower narrative, financials,
            comps, exit — so capital sources can move with confidence instead
            of asking for the same thing twice.
          </p>
          <ChartArt />
        </FeatureCard>

        <FeatureCard variant="light">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
            Posture
          </p>
          <h3 className="font-display mt-3 text-2xl text-ink">
            Broker, not lender.
          </h3>
          <p className="mt-2 text-sm text-muted">
            We don&apos;t have a quota on one product. We&apos;ll point you to
            the right capital structure — or tell you it isn&apos;t a deal
            we&apos;d underwrite ourselves.
          </p>
          <RingArt />
        </FeatureCard>

        <FeatureCard variant="light">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
            Context
          </p>
          <h3 className="font-display mt-3 text-2xl text-ink">
            Lowcountry on the ground.
          </h3>
          <p className="mt-2 text-sm text-muted">
            Charleston, Summerville, Goose Creek, Moncks Corner — submarkets
            we know well enough to read past the comps and price the actual
            risk.
          </p>
          <LedgerArt />
        </FeatureCard>
      </div>
    </section>
  );
}

function FeatureCard({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "dark" | "light";
}) {
  return (
    <div
      className={[
        "relative flex flex-col gap-3 overflow-hidden rounded-2xl p-7 ring-1",
        variant === "dark"
          ? "bg-ink text-white ring-ink-2"
          : "bg-cream text-ink ring-rule",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function ChartArt() {
  return (
    <div className="mt-6 flex flex-col gap-2">
      {[
        { label: "Borrower narrative", w: 90 },
        { label: "Financials & rent roll", w: 78 },
        { label: "Comps & valuation", w: 84 },
        { label: "Exit & timeline", w: 70 },
      ].map((row) => (
        <div key={row.label}>
          <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/55">
            <span>{row.label}</span>
            <span className="text-lime">✓</span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-lime"
              style={{ width: `${row.w}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function RingArt() {
  return (
    <div className="mt-6 grid h-32 grid-cols-7 items-end gap-1.5">
      {[18, 22, 16, 10, 8, 4, 2].map((share, i) => (
        <div key={i} className="flex h-full flex-col items-center justify-end">
          <div
            className="w-full rounded-md"
            style={{
              height: `${share * 4 + 10}%`,
              background:
                i === 0
                  ? "var(--ink)"
                  : i === 1
                    ? "rgba(10,29,24,0.7)"
                    : "rgba(10,29,24,0.35)",
            }}
          />
        </div>
      ))}
      <div className="col-span-7 mt-1 flex justify-between text-[9px] uppercase tracking-wider text-muted">
        <span>DSCR</span>
        <span>Bridge</span>
        <span>Other</span>
      </div>
    </div>
  );
}

function LedgerArt() {
  const cities = ["Charleston", "Summerville", "Goose Creek", "Moncks Corner"];
  return (
    <div className="mt-6 flex flex-col gap-2">
      {cities.map((c, i) => (
        <div
          key={c}
          className="flex items-center justify-between rounded-xl bg-paper px-3 py-2.5 ring-1 ring-rule"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-ink">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-[10px] font-mono text-lime">
              {String(i + 1).padStart(2, "0")}
            </span>
            {c}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted">
            Active
          </span>
        </div>
      ))}
    </div>
  );
}
