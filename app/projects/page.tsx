"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState<
    Record<string, boolean>
  >({});

  const filters = useMemo(() => {
    const stackValues = portfolioData.projects.flatMap(
      (project) => project.stack,
    );
    return ["All", ...Array.from(new Set(stackValues))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioData.projects;
    }

    return portfolioData.projects.filter((project) =>
      project.stack.includes(activeFilter),
    );
  }, [activeFilter]);

  const getPreviewText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }

    return `${text.slice(0, maxLength).trimEnd()}...`;
  };

  const toggleProject = (projectName: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectName]: !prev[projectName],
    }));
  };

  return (
    <section className="space-y-8">
      <div className="section-card">
        <p className="text-xs font-semibold tracking-[0.2em] text-secondary">
          PROJECTS
        </p>
        <h1 className="mt-3 font-heading text-4xl md:text-5xl">
          Selected Product Builds
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Use filters to quickly explore project types and technical focus
          areas.
        </p>
      </div>

      <div className="section-card">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`filter-chip ${isActive ? "filter-chip-active" : ""}`}>
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project, index) => {
          const isExpanded = Boolean(expandedProjects[project.name]);
          const visibleSummary = isExpanded
            ? project.summary
            : getPreviewText(project.summary, 150);
          const visibleContributions = isExpanded
            ? project.contributions
            : project.contributions.slice(0, 1);

          return (
            <article
              key={project.name}
              className="section-card section-card-hover project-card-enter overflow-hidden"
              style={{ animationDelay: `${index * 70}ms` }}>
              {project.imageUrl && (
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                    }}
                  />
                </div>
              )}
              <h2 className="font-heading text-2xl">{project.name}</h2>
              <p className="mt-2 inline-flex rounded-full border border-border/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-secondary">
                {project.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {visibleSummary}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/90">
                {visibleContributions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => toggleProject(project.name)}
                className="mt-4 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                {isExpanded ? "View Less" : "View More"}
              </button>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                {project.liveUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      View Live <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-dashed border-border px-3 py-1 text-xs text-muted-foreground">
                    Live link coming soon
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
