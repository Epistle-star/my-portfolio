import { Download, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <div className="section-card">
        <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
          CONTACT
        </p>
        <h1 className="mt-3 font-heading text-4xl md:text-5xl">
          Let&apos;s Build Something Valuable
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
          I am available for software projects, backend engineering projects,
          technical leadership, and product-focused consulting.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="section-card">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <Mail className="size-4 text-secondary" /> Email
          </p>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="mt-3 block text-sm text-muted-foreground hover:text-foreground">
            {portfolioData.contact.email}
          </a>
        </article>

        <article className="section-card">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <Phone className="size-4 text-accent" /> Phone
          </p>
          <a
            href={`tel:${portfolioData.contact.phone}`}
            className="mt-3 block text-sm text-muted-foreground hover:text-foreground">
            {portfolioData.contact.phone}
          </a>
        </article>

        <article className="section-card">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <MapPin className="size-4 text-primary" /> Location
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            {portfolioData.location}
          </p>
        </article>
      </div>

      <div className="section-card">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6 text-sm">
            <a href={`mailto:${portfolioData.contact.email}`}>Email Me</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-6 text-sm">
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-6 text-sm">
            <a href="/Ebube_Onunwor_CV.PDF" download>
              <Download className="size-4" /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
