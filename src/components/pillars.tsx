const pillars = [
  {
    label: "Lending",
    title: "Loan origination, end-to-end.",
    body: "Application, KYC/KYB, decisioning, servicing, and collections — engineered as one system that compliance, underwriters, and borrowers all trust.",
    icon: VaultIcon,
  },
  {
    label: "Healthcare",
    title: "Revenue cycle, simplified.",
    body: "Eligibility, claims, denials, and patient billing automated for clinics and provider networks — HIPAA-aligned by design, not by patch.",
    icon: PulseIcon,
  },
  {
    label: "Financial Services",
    title: "Wealth, ops & advisory.",
    body: "Client onboarding, reporting, and back-office automation for RIAs, brokers, and family offices. Auditable, performant, ready for examiners.",
    icon: ChartIcon,
  },
];

export function Pillars() {
  return (
    <section
      id="solutions"
      className="relative bg-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-paper px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink/70 ring-1 ring-rule">
              Our practice
            </span>
            <h2 className="font-display mt-5 text-3xl leading-tight text-ink sm:text-4xl">
              Three verticals.
              <br className="hidden sm:block" /> One operating playbook.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            We focus where domain knowledge compounds — regulated industries
            where one good system replaces a hundred spreadsheets.
          </p>
        </div>

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
                Explore {p.label.toLowerCase()}
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

function VaultIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1h-2v2h-2v-2H8v2H6v-2H4a1 1 0 01-1-1V6a1 1 0 011-1zm8 3a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  );
}
function PulseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M3 21h18v-2H3v2zM5 17h2V9H5v8zm4 0h2V5H9v12zm4 0h2v-6h-2v6zm4 0h2v-9h-2v9z" />
    </svg>
  );
}
