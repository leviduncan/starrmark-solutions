const submarkets = [
  {
    name: "Charleston",
    detail: "Peninsula, West Ashley, James Island, Mt. Pleasant",
  },
  { name: "Summerville", detail: "Dorchester County, Nexton, Cane Bay" },
  { name: "Goose Creek", detail: "Berkeley County, Carnes Crossroads" },
  { name: "Moncks Corner", detail: "Lakes & Berkeley submarkets" },
];

export function StatsRow() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <div
        className="absolute inset-x-0 z-0 h-full opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 20% 0%, rgba(200,255,62,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Local market focus
          </span>
          <h2 className="font-display mt-6 text-4xl leading-[1.02] text-white sm:text-5xl">
            GROUNDED IN THE
            <br />
            <span className="text-lime">LOWCOUNTRY.</span>
          </h2>
          <p className="mt-6 max-w-md text-base text-white/70">
            We work primarily across the Charleston region — submarkets we
            know well enough to read past the comps. That context shapes how
            we package a deal and which capital sources we bring to it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/60">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 ring-1 ring-white/10">
              <span className="font-mono text-lime">(843)</span>
              area code
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 ring-1 ring-white/10">
              Berkeley · Charleston · Dorchester counties
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {submarkets.map((s, i) => (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-2xl bg-white/6 p-5 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-lime">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-2 text-2xl text-white">
                {s.name}
              </h3>
              <p className="mt-1 text-xs text-white/55">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
