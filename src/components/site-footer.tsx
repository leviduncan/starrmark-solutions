import Link from "next/link";

const columns = [
  {
    title: "Solutions",
    links: ["Product", "Marketing", "Operations", "Data & AI"],
  },
  {
    title: "Company",
    links: ["About", "Work", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Insights", "Case studies", "Pricing", "FAQ"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-lime text-ink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2l2.39 6.95H22l-6.18 4.49L18.21 22 12 17.77 5.79 22l2.39-8.56L2 8.95h7.61z" />
              </svg>
            </span>
            <span className="font-display text-lg text-white">Starrmark</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-white/55">
            Engineered digital solutions for businesses ready to grow.
          </p>

          <div className="mt-8 flex items-center gap-3">
            {["X", "in", "GH"].map((s) => (
              <a
                key={s}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/[0.06] text-xs text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                {c.title}
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-white/75 transition hover:text-white"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Starrmark Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white/70">
              Terms
            </Link>
            <Link href="#" className="hover:text-white/70">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
