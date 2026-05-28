const pillars = [
  {
    label: "Strategy",
    title: "Sharpened positioning",
    body: "We sit with your team, your data, and your customers — then ship a story your market actually wants to buy.",
    icon: CompassIcon,
  },
  {
    label: "Build",
    title: "Software that ships",
    body: "Lean engineering pods that put real product in front of real users on a cadence your competitors can't match.",
    icon: BoltIcon,
  },
  {
    label: "Scale",
    title: "Systems that compound",
    body: "Automation, analytics, and ops that turn good months into a baseline — without doubling headcount.",
    icon: OrbitIcon,
  },
];

export function Pillars() {
  return (
    <section
      id="solutions"
      className="relative bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-rule ring-1 ring-rule sm:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="group relative flex flex-col gap-5 bg-paper p-7 transition hover:bg-cream sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 items-center gap-2 rounded-full bg-ink px-3 text-xs font-medium uppercase tracking-[0.18em] text-lime">
                  <p.icon />
                  {p.label}
                </span>
              </div>
              <h3 className="font-display text-2xl text-ink sm:text-3xl">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
              <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-ink">
                Learn more
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

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M13 2L3 14h7l-1 8 11-14h-7l1-6z" />
    </svg>
  );
}
function OrbitIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
    </svg>
  );
}
