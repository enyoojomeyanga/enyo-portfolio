"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Discipline, Project } from "@/content/projects";
import { disciplines } from "@/content/disciplines";
import { StatusBadge } from "@/components/status-badge";
import { ProjectThumbnail } from "@/components/project-thumbnail";

type Filter = "all" | Discipline;

const filters: { label: string; value: Filter }[] = [
  { label: "All work", value: "all" },
  ...disciplines.map((discipline) => ({ label: discipline.name, value: discipline.slug })),
];

export function WorkFilter({
  projects,
  initialFilter = "all",
}: {
  projects: Project[];
  initialFilter?: Filter;
}) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<Filter>(initialFilter);

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.discipline === activeFilter);

  function changeFilter(value: Filter) {
    setActiveFilter(value);
    // Keep URLs shareable; landing from a homepage service card selects this category.
    router.replace(value === "all" ? "/work" : `/work?discipline=${value}`, { scroll: false });
  }

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 border-b border-(--color-border) pb-6"
        role="group"
        aria-label="Filter projects by discipline"
      >
        {filters.map((filter) => {
          const active = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => changeFilter(filter.value)}
              aria-pressed={active}
              className={`min-h-11 rounded-full border px-4 py-2 font-sans text-xs font-semibold transition-colors ${
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

      <p className="mt-6 font-mono text-xs uppercase tracking-[0.09em] text-(--color-ink-muted)">
        {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
      </p>

      {filteredProjects.length > 0 ? (
        <ul className="mt-5 border-t border-(--color-border)">
          {filteredProjects.map((project, index) => (
            <li key={project.slug} className="border-b border-(--color-border)">
              <Link
                href={`/work/${project.slug}`}
                className="project-row group flex flex-col gap-5 py-8 sm:grid sm:grid-cols-[48px_160px_minmax(0,1fr)_auto] sm:items-center sm:gap-7"
              >
                <span className="font-display text-xl text-(--color-primary)">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <ProjectThumbnail variant={project.thumbnail} project={project} />
                <div className="min-w-0">
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.025em] text-(--color-ink) transition-colors group-hover:text-(--color-primary)">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-(--color-ink-muted)">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-(--color-border) bg-white/50 px-2.5 py-1 font-mono text-[11px] text-(--color-ink-muted)"
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
                    className="project-arrow text-xl text-(--color-ink-faint) transition-all group-hover:translate-x-1 group-hover:text-(--color-primary)"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-12 text-base leading-relaxed text-(--color-ink-muted)">
          No projects in this discipline yet. Work will appear here as it is added.
        </p>
      )}
    </div>
  );
}
