export function TrustHeading() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-2" />
          Why teams pick us
        </span>
        <h2 className="font-display mt-6 text-4xl leading-[1.02] text-ink sm:text-6xl">
          OPERATE WITH
          <br />
          EXACTING PRECISION.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted sm:text-lg">
          A senior crew of operators, engineers, and designers who&apos;ve built
          and sold the kind of business you&apos;re building. No layered agencies,
          no junior pyramid — just the people doing the work.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 lg:grid-cols-3">
        <FeatureCard variant="dark">
          <p className="text-xs uppercase tracking-[0.2em] text-lime">
            Defend
          </p>
          <h3 className="font-display mt-3 text-2xl text-white">
            Margin you can see.
          </h3>
          <p className="mt-2 text-sm text-white/65">
            Live dashboards across acquisition, retention, and unit economics
            — so the next call is obvious.
          </p>
          <ChartArt />
        </FeatureCard>

        <FeatureCard variant="light">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
            Secure
          </p>
          <h3 className="font-display mt-3 text-2xl text-ink">
            Pipeline you can trust.
          </h3>
          <p className="mt-2 text-sm text-muted">
            Forecasting tied to real telemetry, not vibes. Promised dates that
            ship.
          </p>
          <RingArt />
        </FeatureCard>

        <FeatureCard variant="light">
          <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
            Grow
          </p>
          <h3 className="font-display mt-3 text-2xl text-ink">
            Revenue you can compound.
          </h3>
          <p className="mt-2 text-sm text-muted">
            Tested playbooks, not novel theatre. Every win turns into a system.
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
  const heights = [30, 45, 55, 40, 70, 95, 60];
  return (
    <div className="mt-6 flex h-32 items-end gap-1.5">
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-md"
          style={{
            height: `${h}%`,
            background:
              i === 5
                ? "var(--lime)"
                : i === 4 || i === 6
                  ? "rgba(200,255,62,0.55)"
                  : "rgba(255,255,255,0.18)",
          }}
        />
      ))}
    </div>
  );
}

function RingArt() {
  const pct = 0.7;
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div className="mt-6 grid h-32 place-items-center">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="var(--rule)"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke="var(--ink)"
            strokeWidth="10"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - pct)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <p className="font-display text-2xl text-ink">70%</p>
            <p className="text-[10px] uppercase tracking-wider text-muted">
              in process
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LedgerArt() {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <div className="rounded-xl bg-paper p-3 ring-1 ring-rule">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-muted">
            Net income
          </span>
          <span className="rounded-full bg-lime-soft px-2 py-0.5 text-[10px] font-medium text-ink">
            +28.6%
          </span>
        </div>
        <p className="font-display mt-1 text-2xl text-ink">$234.98K</p>
      </div>
      <div className="rounded-xl bg-paper p-3 ring-1 ring-rule">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted">
          <span>MRR</span>
          <span>+9.4%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-rule">
          <div
            className="h-full rounded-full bg-ink"
            style={{ width: "62%" }}
          />
        </div>
      </div>
    </div>
  );
}
