import Image from "next/image";

import { portfolioData } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="section-card">
        <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
          WHO AM I
        </p>
        <div className="mt-3 grid items-center gap-6 md:grid-cols-[1fr_200px]">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl">Who I Am</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">
              {portfolioData.bio}
            </p>
          </div>
          <div className="relative h-[20rem] w-full overflow-hidden rounded-2xl border border-border/70 shadow-lg shadow-primary/15">
            <Image
              src="/portrait-2.png"
              alt={`${portfolioData.name} portrait`}
              fill
              className="object-cover object-top"
              sizes="200px"
              priority
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="section-card">
          <h2 className="font-heading text-2xl">Professional Edge</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              Designing practical backend architecture for production use.
            </li>
            <li>
              Leading technical direction while keeping delivery realistic.
            </li>
            <li>Combining product thinking with engineering execution.</li>
          </ul>
        </article>

        <article className="section-card">
          <h2 className="font-heading text-2xl">Education</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {portfolioData.education.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
