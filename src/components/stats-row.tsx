const stats = [
  { value: "$2.4B+", label: "Loans originated through our platforms" },
  { value: "240+", label: "Provider locations on revenue cycle ops" },
  { value: "98%", label: "Client retention across active engagements" },
  { value: "0.34%", label: "Aggregate portfolio default rate" },
];

export function StatsRow() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-2" />
            By the numbers
          </span>
          <h2 className="font-display mt-6 text-3xl leading-tight text-ink sm:text-5xl">
            Operators who&apos;ve actually
            <br className="hidden sm:block" /> sat in the seat.
          </h2>
          <p className="mt-5 max-w-xl text-base text-muted">
            Our team has built and run lending books, provider RCM operations,
            and advisory back-office stacks. The systems we ship are the ones
            we wish we&apos;d had.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((s) => {
            const display = s.value.endsWith("+") ? s.value.slice(0, -1) : s.value;
            const hasPlus = s.value.endsWith("+");
            return (
              <div
                key={s.label}
                className="border-t-2 border-ink/15 pt-5"
              >
                <p className="font-display text-5xl text-ink sm:text-6xl">
                  {display}
                  {hasPlus && <span className="text-lime-2">+</span>}
                </p>
                <p className="mt-3 max-w-[16ch] text-xs leading-relaxed text-muted">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
