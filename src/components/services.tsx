const points = [
  {
    n: "01",
    title: "Broker, not lender",
    body: "Our incentive is the right structure for the deal, not a single product on a shelf.",
  },
  {
    n: "02",
    title: "Operator perspective",
    body: "Deal review grounded in operations, governance, and how projects actually get executed.",
  },
  {
    n: "03",
    title: "Lowcountry context",
    body: "Submarket knowledge across Charleston, Summerville, Goose Creek, and Moncks Corner.",
  },
  {
    n: "04",
    title: "Lender-ready packaging",
    body: "Complete, organized submissions so capital sources can move with confidence.",
  },
  {
    n: "05",
    title: "Plain communication",
    body: "Clear status, clear expectations, and a clear no when a deal isn't a fit.",
  },
  {
    n: "06",
    title: "Capital across the stack",
    body: "Private and institutional sources covering DSCR, bridge, construction, and small commercial.",
  },
];

export function Services() {
  return (
    <section id="approach" className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
            What makes StarrMark different
          </span>
          <h2 className="font-display mt-6 text-4xl leading-tight text-ink sm:text-5xl">
            A DIFFERENT POSTURE
            <br /> ON PRIVATE MONEY.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.n} className="border-t-2 border-ink/15 pt-5">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-lime-2">
                {p.n}
              </span>
              <h3 className="font-display mt-3 text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
