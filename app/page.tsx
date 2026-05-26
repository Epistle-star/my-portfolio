import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { ProfilePortrait } from "@/components/profile-portrait";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Ebube Epistle Onunwor Portfolio",
  description:
    "Official portfolio of Ebube Epistle Onunwor (Epistle, Ebube, Onunwor), Backend Engineer and Technical Lead based in Port Harcourt.",
  keywords: [
    "Ebube Epistle Onunwor",
    "Epistle",
    "Ebube",
    "Onunwor",
    "Backend Engineer Nigeria",
    "Technical Lead Port Harcourt",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="hero-glow pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      />
      <section className="animate-rise-delayed rounded-3xl border border-border/70 bg-card/80 p-7 shadow-2xl shadow-primary/10 md:p-10">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_260px]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-secondary">
              SOFTWARE ENGINEER & TECHNICAL LEAD
            </p>
            <h1 className="mt-4 max-w-4xl text-balance font-heading text-3xl leading-tight text-foreground md:text-5xl">
              Building digital products that feel reliable from day one.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              I am {portfolioData.name}. I design robust software solutions,
              lead teams through complexity, and help businesses ship software
              that scales.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6 text-sm">
                <Link href="/projects">Explore Projects</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 text-sm">
                <Link href="/contact">
                  Hire Me <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-accent" />
                {portfolioData.location}
              </span>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href={`tel:${portfolioData.contact.phone}`}>
                <Phone className="size-4 text-accent" />
                {portfolioData.contact.phone}
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href={`mailto:${portfolioData.contact.email}`}>
                <Mail className="size-4 text-secondary" />
                {portfolioData.contact.email}
              </a>
            </div>
          </div>
          <ProfilePortrait
            name={portfolioData.name}
            initials={portfolioData.initials}
            imageUrl={portfolioData.profileImageUrl}
          />
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {portfolioData.highlights.map((item) => (
          <article key={item.label} className="section-card section-card-hover">
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className="mt-2 font-heading text-4xl text-foreground">
              {item.value}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <Link href="/about" className="section-card section-card-hover block">
          <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
            ABOUT
          </p>
          <h2 className="mt-3 font-heading text-3xl">My Story and Approach</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            See my background, education, and what makes my engineering style
            practical and business-aware.
          </p>
        </Link>

        <Link
          href="/experience"
          className="section-card section-card-hover block">
          <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
            EXPERIENCE
          </p>
          <h2 className="mt-3 font-heading text-3xl">
            Leadership and Delivery
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Explore key contributions across Interspace Music, JeeDrop, and
            other technical initiatives.
          </p>
        </Link>

        <Link
          href="/projects"
          className="section-card section-card-hover block">
          <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
            PROJECTS
          </p>
          <h2 className="mt-3 font-heading text-3xl">Product Builds</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Browse selected products including live links and implementation
            stack summaries.
          </p>
        </Link>

        <Link href="/contact" className="section-card section-card-hover block">
          <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
            CONTACT
          </p>
          <h2 className="mt-3 font-heading text-3xl">Let&apos;s Collaborate</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            Reach out directly for opportunities, projects, consulting, or
            technical leadership engagements.
          </p>
        </Link>
      </section>
    </div>
  );
}
