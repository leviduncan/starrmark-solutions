import Link from "next/link";

export function DarkCTA() {
  return (
    <section id="contact" className="bg-cream pb-20 pt-4 sm:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-ink p-10 text-white sm:p-14">
          <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(40% 80% at 100% 50%, rgba(200,255,62,0.18), transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/15">
                Ready when you are
              </span>
              <h2 className="font-display mt-6 text-4xl leading-none text-white sm:text-6xl">
                BUILD WITH A
                <br />
                PARTNER YOUR
                <br />
                <span className="text-lime">EXAMINERS TRUST.</span>
              </h2>
              <p className="mt-6 max-w-md text-base text-white/70">
                30 minutes, NDA included. Bring the workflow that&apos;s
                holding back your book — we&apos;ll tell you whether
                we&apos;re the right team to fix it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition hover:bg-lime-2"
                >
                  Book a consultation →
                </Link>
                <a
                  href="mailto:hello@starrmarksolutions.com"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 px-5 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
                >
                  hello@starrmarksolutions.com
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MetricChip label="Response" value="< 24h" tone="dark" />
              <MetricChip label="NDA on file" value="Day 1" tone="lime" />
              <MetricChip label="Pilots" value="6 weeks" tone="lime" />
              <MetricChip label="Compliance" value="SOC 2" tone="dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "dark" | "lime";
}) {
  const isLime = tone === "lime";
  return (
    <div
      className={[
        "rounded-2xl p-5 ring-1",
        isLime
          ? "bg-lime text-ink ring-lime-2"
          : "bg-white/6 text-white ring-white/10 backdrop-blur",
      ].join(" ")}
    >
      <p
        className={
          "text-xs uppercase tracking-[0.18em] " +
          (isLime ? "text-ink/70" : "text-white/55")
        }
      >
        {label}
      </p>
      <p className="font-display mt-3 text-2xl">{value}</p>
    </div>
  );
}
