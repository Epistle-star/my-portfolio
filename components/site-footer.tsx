import { ArrowUpRight } from "lucide-react";

import { portfolioData } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-muted-foreground md:px-10">
        <p>Crafted to turn bold ideas into lasting digital impact.</p>
        <a
          className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          href={`mailto:${portfolioData.contact.email}`}>
          Start a conversation <ArrowUpRight className="size-4" />
        </a>
      </div>
    </footer>
  );
}
