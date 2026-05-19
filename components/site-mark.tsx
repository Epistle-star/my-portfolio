import Link from "next/link";

export function SiteMark() {
  return (
    <Link href="/" className="group inline-flex items-center gap-3">
      <span className="logo-badge" aria-hidden>
        EO
      </span>
      <span className="hidden text-sm font-semibold tracking-wider text-foreground sm:block">
        Ebube Onunwor
      </span>
    </Link>
  );
}
