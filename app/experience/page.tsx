import { portfolioData } from "@/lib/portfolio-data";

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <div className="section-card">
        <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
          EXPERIENCE
        </p>
        <h1 className="mt-3 font-heading text-4xl md:text-5xl">
          Work That Moves Products Forward
        </h1>
      </div>

      <div className="grid gap-4">
        {portfolioData.experience.map((item) => (
          <article key={item.company} className="section-card">
            <p className="text-xs font-semibold tracking-wider text-accent">
              {item.period}
            </p>
            <h2 className="mt-2 font-heading text-2xl">{item.role}</h2>
            <p className="text-sm text-secondary">{item.company}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
              {item.achievements.map((entry) => (
                <li key={entry}>• {entry}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
