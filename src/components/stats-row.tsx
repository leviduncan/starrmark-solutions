const stats = [
  { value: "12+", label: "Years building software for operators" },
  { value: "150K+", label: "Users on products we shipped last year" },
  { value: "98%", label: "Client retention across active engagements" },
  { value: "$40M+", label: "Influenced revenue, tracked end-to-end" },
];

export function StatsRow() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-2" />
            About us
          </span>
          <h2 className="font-display mt-6 text-3xl leading-tight text-ink sm:text-5xl">
            A senior crew that ships
            <br className="hidden sm:block" /> like founders, not vendors.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-t-2 border-ink/15 pt-5"
            >
              <p className="font-display text-5xl text-ink sm:text-6xl">
                {s.value.replace("+", "")}
                <span className="text-lime-2">+</span>
              </p>
              <p className="mt-3 max-w-[14ch] text-xs leading-relaxed text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
