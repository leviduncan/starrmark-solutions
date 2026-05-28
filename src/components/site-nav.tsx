import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/loan-programs", label: "Loan Programs" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <nav className="absolute inset-x-4 top-4 z-20 sm:inset-x-6 sm:top-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-ink/40 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
        <Link href="/" className="flex items-baseline gap-1.5 pl-2">
          <span className="font-display text-base text-white">StarrMark</span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-lime">
            Solutions
          </span>
        </Link>

        <ul className="hidden items-center gap-1 text-sm text-white/80 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3 py-1.5 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/start"
            className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition hover:bg-lime-2"
          >
            Start Your Loan Profile
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
