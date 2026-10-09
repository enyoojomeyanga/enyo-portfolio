"use client";

import { useState } from "react";
import Link from "next/link";
import type { Discipline, Project } from "@/content/projects";
import { ProjectMedia } from "./project-media";
import { disciplines } from "@/content/disciplines";

type Filter = "all" | Discipline;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All work" },
  ...disciplines.map((item) => ({ value: item.slug, label: item.name })),
];

export function HomeProjects({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.discipline === filter);

  return (
    <div>
      <div className="enyo-work-section-heading">
        <div>
          <div className="enyo-eyebrow"><span/> Selected work</div>
          <h2 className="enyo-section-title">What I&apos;ve built,<br/>and what&apos;s in progress.</h2>
        </div>
        <div className="enyo-filter-controls" aria-label="Filter selected work by discipline">
          <div className="enyo-filter-buttons">
            {filters.map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={option.value === filter}
                onClick={() => setFilter(option.value)}
                className={`enyo-filter-button ${filter === option.value ? "is-active" : ""}`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <span className="enyo-entry-count">{String(filtered.length).padStart(2, "0")} entries</span>
        </div>
      </div>

      {filtered.length ? (
        <div className="enyo-work-grid">
          {filtered.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="enyo-work-card">
              <div className="enyo-work-art-wrap">
                <ProjectMedia project={project}/>
                <span className={`enyo-art-status enyo-art-status-${project.status}`}>{project.status === "built" ? "Built" : project.status === "building" ? "Building" : "Exploring"}</span>
              </div>
              <div className="enyo-work-card-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="enyo-work-card-footer">
                  <div className="enyo-tech-tags">{project.stack.filter((tag) => tag !== "In Progress").slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="enyo-arrow" aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="enyo-no-projects">
          <p>No published projects in this category yet.</p>
          <span>Projects will appear here when there&apos;s real work to show.</span>
        </div>
      )}
    </div>
  );
}
