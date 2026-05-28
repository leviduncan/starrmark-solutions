export function ImportantDisclosure({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light";
  return (
    <aside
      role="note"
      aria-label="Important disclosure"
      className={[
        "relative rounded-r-lg border-l-4 p-5 text-xs leading-relaxed",
        isLight
          ? "border-amber-500/70 bg-amber-50/60 text-ink/80"
          : "border-lime/70 bg-white/[0.04] text-white/75",
        className,
      ].join(" ")}
    >
      <p
        className={[
          "mb-2 font-medium uppercase tracking-[0.18em]",
          isLight ? "text-amber-700" : "text-lime",
        ].join(" ")}
      >
        Important Disclosure
      </p>
      <p>
        StarrMark Solutions LLC is a Private Money Broker and Capital Advisor.
        We are not a lender, mortgage broker, or mortgage banker, and we do
        not originate, underwrite, fund, or service loans. All financing
        arranged through StarrMark is for business, commercial, or investment
        purposes only, secured by non-owner-occupied real estate, and is not
        intended for personal, family, or household use. Loan terms,
        eligibility, and final approvals are determined solely by third-party
        lenders.
      </p>
    </aside>
  );
}
