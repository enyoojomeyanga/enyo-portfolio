"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Discipline, ProjectStatus, WorkListing } from "@/content/projects";
import { disciplines } from "@/content/disciplines";
import { StatusBadge } from "@/components/status-badge";
import { WorkMedia, workImage } from "./work-media";
import styles from "@/app/work/work.module.css";

type Filter = "all" | Discipline;
type Progress = "all" | ProjectStatus;
const filters: { value: Filter; label: string }[] = [{ value: "all", label: "All work" }, ...disciplines.map((item) => ({ value: item.slug, label: item.name }))];
const progressFilters: { value: Progress; label: string }[] = [{ value: "all", label: "All progress" }, { value: "built", label: "Built" }, { value: "building", label: "Building" }, { value: "exploring", label: "Exploring" }];

export function WorkFilter({ projects, initialFilter = "all", initialStatus = "all" }: { projects: WorkListing[]; initialFilter?: Filter; initialStatus?: Progress }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const filtered = projects.filter((project) => (initialFilter === "all" || project.discipline === initialFilter) && (initialStatus === "all" || project.status === initialStatus));
  function changeFilter(discipline: Filter, status: Progress) {
    const params = new URLSearchParams();
    if (discipline !== "all") params.set("discipline", discipline);
    if (status !== "all") params.set("status", status);
    startTransition(() => router.push(params.size ? `/work?${params}` : "/work", { scroll: false }));
  }
  return (
    <div>
      <div className={styles.filters}>
        <div role="group" aria-label="Filter by discipline" className={styles.filterGroup}>
          <p className={styles.filterLabel}>Discipline</p>
          <div className={styles.filterButtons}>{filters.map((filter) => <button key={filter.value} type="button" disabled={pending} aria-pressed={initialFilter === filter.value} className={`${styles.filterButton} ${initialFilter === filter.value ? styles.active : ""}`} onClick={() => changeFilter(filter.value, initialStatus)}>{filter.label}</button>)}</div>
        </div>
        <div role="group" aria-label="Filter by progress" className={styles.filterGroup}>
          <p className={styles.filterLabel}>Progress</p>
          <div className={styles.filterButtons}>{progressFilters.map((filter) => <button key={filter.value} type="button" disabled={pending} aria-pressed={initialStatus === filter.value} className={`${styles.filterButton} ${initialStatus === filter.value ? styles.active : ""}`} onClick={() => changeFilter(initialFilter, filter.value)}>{filter.label}</button>)}</div>
        </div>
      </div>
      <div className={styles.resultsHeader}>
        <p role="status" aria-live="polite">{pending ? "Updating projects…" : `${filtered.length} ${filtered.length === 1 ? "project" : "projects"}${initialFilter === "all" && initialStatus === "all" ? " in the directory" : " match your filters"}`}</p>
        {(initialFilter !== "all" || initialStatus !== "all") && <button type="button" className={styles.reset} disabled={pending} onClick={() => changeFilter("all", "all")}>Clear filters <span aria-hidden="true">×</span></button>}
      </div>
      <div aria-busy={pending}>
        {filtered.length ? (
          <ul className={styles.projectList}>
            {filtered.map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className={styles.projectCard}>
                  <div className={styles.cover}>
                    <WorkMedia project={project} sizes="(max-width: 760px) 90vw, 280px" />
                    {!workImage(project)?.src && <span className={styles.illustrationLabel}>Illustration</span>}
                  </div>
                  <div className={styles.projectCopy}>
                    <div className={styles.projectMeta}><span>{disciplines.find((item) => item.slug === project.discipline)?.name}</span><StatusBadge status={project.status} /></div>
                    <h2>{project.title}</h2>
                    <p>{project.summary}</p>
                    <div className={styles.tags}>{project.stack.filter((tag) => tag !== "In Progress").map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <span className={styles.projectAction}>Read project <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <h2>No projects match these filters.</h2>
            <p>{projects.length ? "Try another discipline or progress status. I’ll add work here as there is real progress to share." : "Projects will appear here when there is real work to share."}</p>
            {(initialFilter !== "all" || initialStatus !== "all") && <button type="button" className={styles.primary} disabled={pending} onClick={() => changeFilter("all", "all")}>Show all work <span aria-hidden="true">→</span></button>}
          </div>
        )}
      </div>
    </div>
  );
}
