import Link from "next/link";

const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#company", label: "Company" },
  { href: "/posts", label: "Insights" },
];

export function SiteNav() {
  return (
    <nav className="absolute inset-x-4 top-4 z-20 sm:inset-x-6 sm:top-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-ink/40 px-4 py-2 backdrop-blur-md ring-1 ring-white/10">
        <Link href="/" className="flex items-center gap-2 pl-2">
          <Logo />
          <span className="font-display text-base text-white">Starrmark</span>
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
            href="#contact"
            className="hidden rounded-full px-4 py-2 text-sm text-white/80 hover:text-white sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink transition hover:bg-lime-2"
          >
            Get a quote
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <span
      aria-hidden
      className="grid h-7 w-7 place-items-center rounded-md bg-lime text-ink"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2l2.39 6.95H22l-6.18 4.49L18.21 22 12 17.77 5.79 22l2.39-8.56L2 8.95h7.61z" />
      </svg>
    </span>
  );
}
