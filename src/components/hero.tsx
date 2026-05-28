import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="grid-bg absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 60% at 100% 0%, rgba(200,255,62,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(30,65,56,0.7) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-36 sm:pt-40 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Engineered for growth
          </span>

          <h1 className="font-display mt-6 text-5xl leading-[0.95] text-white sm:text-6xl lg:text-[5.25rem]">
            BUILT FOR
            <br />
            BOLD
            <br />
            BUSINESSES.
          </h1>

          <p className="mt-7 max-w-md text-base text-white/70 sm:text-lg">
            Strategy, software, and systems that compound. We help operators
            ship faster, sell smarter, and scale without breaking the
            machine.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition hover:bg-lime-2"
            >
              Start a project
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 px-5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-ink">
                <PlayIcon />
              </span>
              See our work
            </Link>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Trusted by teams at
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 text-white/55">
              <LogoMark>Helios</LogoMark>
              <LogoMark>Ironbark</LogoMark>
              <LogoMark>Northwind</LogoMark>
              <LogoMark>Pelagic</LogoMark>
            </div>
          </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
          <StatCard
            label="Avg. uplift"
            value="3.4×"
            sub="revenue per visitor in 90 days"
            tone="dark"
          />
          <StatCard
            label="Active engagements"
            value="42"
            sub="across SaaS, fintech & ops"
            tone="lime"
          />
          <DashboardCard className="col-span-2" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "dark" | "lime";
}) {
  const isLime = tone === "lime";
  return (
    <div
      className={[
        "relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 ring-1 ring-inset",
        isLime
          ? "bg-lime text-ink ring-lime-2"
          : "bg-white/[0.06] text-white ring-white/10 backdrop-blur",
      ].join(" ")}
    >
      <div className="flex items-start justify-between">
        <span
          className={
            "text-xs uppercase tracking-[0.18em] " +
            (isLime ? "text-ink/70" : "text-white/55")
          }
        >
          {label}
        </span>
        <span
          className={
            "grid h-7 w-7 place-items-center rounded-full " +
            (isLime ? "bg-ink text-lime" : "bg-white/10 text-white")
          }
        >
          <ArrowUpRightIcon />
        </span>
      </div>
      <div>
        <p className="font-display mt-6 text-4xl leading-none sm:text-5xl">
          {value}
        </p>
        <p
          className={
            "mt-2 text-xs " + (isLime ? "text-ink/70" : "text-white/60")
          }
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

function DashboardCard({ className = "" }: { className?: string }) {
  const bars = [38, 52, 44, 70, 58, 86, 64];
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl bg-white/[0.05] p-5 ring-1 ring-inset ring-white/10 backdrop-blur " +
        className
      }
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/55">
            This quarter
          </p>
          <p className="font-display mt-2 text-3xl text-white">
            $1.84M <span className="text-white/40">/ $2.0M</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-lime/15 px-2.5 py-1 text-xs font-medium text-lime ring-1 ring-lime/30">
          <span>▲</span> 24.6%
        </div>
      </div>

      <div className="mt-6 flex h-28 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex h-full flex-1 flex-col justify-end">
            <div
              className="w-full rounded-md"
              style={{
                height: `${h}%`,
                background:
                  i === 5
                    ? "linear-gradient(180deg, var(--lime) 0%, var(--lime-2) 100%)"
                    : "rgba(255,255,255,0.15)",
              }}
            />
            <span className="mt-2 text-[10px] uppercase tracking-wider text-white/35">
              {["M", "T", "W", "T", "F", "S", "S"][i]}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
        {[
          { k: "Pipeline", v: "$612K" },
          { k: "Closed", v: "$1.23M" },
          { k: "Velocity", v: "1.9d" },
        ].map((m) => (
          <div
            key={m.k}
            className="rounded-lg bg-white/[0.04] px-3 py-2 ring-1 ring-white/5"
          >
            <p className="text-white/50">{m.k}</p>
            <p className="mt-0.5 font-display text-base text-white">{m.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoMark({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium tracking-tight">
      <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
      {children}
    </div>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
