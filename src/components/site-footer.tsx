import Link from "next/link";

const columns = [
  {
    title: "Site",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Loan Programs", href: "/loan-programs" },
      { label: "Contact", href: "/contact" },
      { label: "Start Your Loan Profile", href: "/start" },
    ],
  },
  {
    title: "Loan programs",
    links: [
      { label: "DSCR", href: "/loan-programs#dscr" },
      { label: "Fix & Flip", href: "/loan-programs#fix-flip" },
      { label: "Bridge", href: "/loan-programs#bridge" },
      { label: "Ground-Up Construction", href: "/loan-programs#ground-up" },
      { label: "Small Commercial", href: "/loan-programs#small-commercial" },
      { label: "Rental Portfolio", href: "/loan-programs#rental-portfolio" },
      { label: "Land", href: "/loan-programs#land" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="font-display text-lg text-white">StarrMark</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-lime">
              Solutions
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm text-white/55">
            Private capital, brokered with judgment. Serving real estate
            investors across the Carolina Lowcountry.
          </p>
        </div>

        {columns.map((c) => (
          <div key={c.title}>
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              {c.title}
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {c.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-white/75 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <li>
              <a
                href="mailto:hello@starrmarksolutions.com"
                className="text-white/75 transition hover:text-white"
              >
                hello@starrmarksolutions.com
              </a>
            </li>
            <li>
              <a
                href="tel:+18430000000"
                className="text-white/75 transition hover:text-white"
              >
                (843) 000-0000
              </a>
            </li>
            <li className="text-white/75">Charleston &amp; the Lowcountry, SC</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <p className="text-[11px] leading-relaxed text-white/45">
            <span className="font-semibold text-white/65">Important disclosure: </span>
            StarrMark Solutions LLC is a Private Money Broker and Capital
            Advisor. We are not a lender, mortgage broker, or mortgage banker,
            and we do not originate, underwrite, fund, or service loans. All
            financing arranged through StarrMark is for business, commercial,
            or investment purposes only, secured by non-owner-occupied real
            estate, and is not intended for personal, family, or household use.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} StarrMark Solutions LLC. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms
            </Link>
            <Link href="/disclosures" className="hover:text-white/70">
              Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
