"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project, Discipline } from "@/content/projects";
import { StatusBadge } from "@/components/status-badge";
import { ProjectThumbnail } from "@/components/project-thumbnail";

type Filter = "all" | Discipline;

const filters: { label: string; value: Filter }[] = [
  { label: "All work", value: "all" },
  { label: "Engineering & AI", value: "engineering" },
  { label: "Graphic design", value: "graphic-design" },
  { label: "Local business visibility", value: "local-visibility" },
];

export function WorkFilter({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.discipline === activeFilter);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-b border-(--color-border) pb-6"
        aria-label="Filter projects by discipline"
      >
        {filters.map((filter) => {
          const active = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.08em] transition-colors ${
                active
                  ? "border-(--color-primary) bg-(--color-primary) text-white"
                  : "border-(--color-border) bg-white/40 text-(--color-ink-muted) hover:border-(--color-primary) hover:text-(--color-primary)"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-(--color-ink-muted)">
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </p>

      {filteredProjects.length > 0 ? (
        <ul className="mt-4 border-t border-(--color-border)">
          {filteredProjects.map((project, index) => (
            <li key={project.slug} className="border-b border-(--color-border)">
              <Link
                href={`/work/${project.slug}`}
                className="project-row group flex flex-col gap-5 py-8 sm:grid sm:grid-cols-[48px_160px_minmax(0,1fr)_auto] sm:items-center sm:gap-7"
              >
                <span className="font-display text-xs text-(--color-primary)">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ProjectThumbnail variant={project.thumbnail} />

                <div className="min-w-0">
                  <h2 className="font-display text-[1.35rem] font-semibold tracking-[-0.025em] text-(--color-ink) transition-colors group-hover:text-(--color-primary)">
                    {project.title}
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-(--color-ink-muted)">
                    {project.summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-(--color-border) bg-white/50 px-2.5 py-1 font-mono text-[10px] text-(--color-ink-muted)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <StatusBadge status={project.status} />
                  <span
                    aria-hidden="true"
                    className="project-arrow font-mono text-sm text-(--color-ink-faint) transition-all group-hover:translate-x-1 group-hover:text-(--color-primary)"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-12 text-sm leading-relaxed text-(--color-ink-muted)">
          No projects in this discipline yet. Work will appear here as it is
          added.
        </p>
      )}
    </div>
  );
}
