import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { getProjects } from "@/content/project-source";
import { isDiscipline } from "@/content/disciplines";
import { isProjectStatus } from "@/content/project-model";
import { WorkFilter } from "@/components/work/work-filter";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: `Work — ${profile.fullName}`,
  description: `Explore ${profile.fullName}'s projects by discipline and progress, with the problem, decisions, results and lessons behind each one.`,
};
type WorkSearchParams = { discipline?: string | string[]; status?: string | string[] };
export default async function WorkPage({ searchParams }: { searchParams: Promise<WorkSearchParams> }) {
  const [params, projects] = await Promise.all([searchParams, getProjects()]);
  const category = typeof params.discipline === "string" ? params.discipline : "";
  const progress = typeof params.status === "string" ? params.status : "";
  const listings = projects.map(({ slug, title, discipline, status, stack, summary, thumbnail, cover }) => ({ slug, title, discipline, status, stack, summary, thumbnail, cover }));
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}><span aria-hidden="true" /> Work</p>
        <h1>Projects, <em>in context.</em></h1>
        <p className={styles.lead}>Browse by discipline or progress. Open a project to see the problem, the decisions behind it, and what I learned.</p>
      </header>
      <section aria-label="Project directory">
        <WorkFilter projects={listings} initialFilter={isDiscipline(category) ? category : "all"} initialStatus={isProjectStatus(progress) ? progress : "all"} />
      </section>
    </div>
  );
}
