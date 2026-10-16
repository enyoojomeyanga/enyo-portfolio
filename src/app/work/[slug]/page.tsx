import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { getProjects } from "@/content/project-source";
import { disciplines } from "@/content/disciplines";
import { StatusBadge } from "@/components/status-badge";
import { CaseNavigation } from "@/components/work/case-navigation";
import { ProjectGallery } from "@/components/work/project-gallery";
import { InteractiveDemo } from "@/components/work/interactive-demo";
import { WorkMedia, workImage } from "@/components/work/work-media";
import styles from "../work.module.css";

export async function generateStaticParams() {
  return (await getProjects()).map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = (await getProjects()).find((item) => item.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — ${profile.fullName}`, description: project.summary };
}
const sectionDefinitions = [
  { key: "problem", label: "The problem" },
  { key: "approach", label: "The decisions" },
  { key: "implementation", label: "What I built" },
  { key: "result", label: "The current result" },
  { key: "learned", label: "What I learned" },
  { key: "improve", label: "What comes next" },
] as const;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projects = await getProjects();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];
  if (!project) notFound();
  type TextKey = (typeof sectionDefinitions)[number]["key"];
  const sections: { key: TextKey | "screenshots" | "demo"; label: string }[] = [];
  for (const definition of sectionDefinitions) {
    if (project[definition.key].trim()) sections.push(definition);
    if (definition.key === "implementation") {
      if (project.gallery.length) sections.push({ key: "screenshots", label: "Screenshots" });
      if (project.demo) sections.push({ key: "demo", label: "Try the project" });
    }
  }
  const discipline = disciplines.find((item) => item.slug === project.discipline);
  const readingMinutes = Math.max(1, Math.ceil(sectionDefinitions.map(({ key }) => project[key]).join(" ").split(/\s+/).filter(Boolean).length / 200));
  const previous = projects[index - 1];
  const next = projects[index + 1];
  return (
    <div className={styles.detailPage}>
      <Link href="/work" className={styles.back}><span aria-hidden="true">←</span> Return to work</Link>
      <header className={styles.projectIntro}>
        <div className={styles.projectIdentity}>
          <div className={styles.projectMeta}><Link href={`/work?discipline=${project.discipline}`}>{discipline?.name}</Link><StatusBadge status={project.status} /></div>
          <h1>{project.title}</h1>
          <p className={styles.lead}>{project.summary}</p>
          <div className={styles.tags}>{project.stack.filter((tag) => tag !== "In Progress").map((tag) => <span key={tag}>{tag}</span>)}</div>
          {(project.repoUrl || project.liveUrl) && <div className={styles.actions}>
            {project.liveUrl && <a className={styles.primary} href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit live project <span aria-hidden="true">↗</span></a>}
            {project.repoUrl && <a className={styles.primary} href={project.repoUrl} target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>}
          </div>}
        </div>
        <figure className={styles.projectFigure}>
          <div className={styles.detailCover}><WorkMedia project={project} sizes="(max-width: 900px) 90vw, 45vw" /></div>
          <figcaption>{workImage(project)?.src ? "Project image" : "Illustration of the project; not a product screenshot."}</figcaption>
        </figure>
      </header>
      <dl className={styles.projectFacts} aria-label="Project overview">
        <div><dt>Progress</dt><dd>{project.status === "built" ? "Working project" : project.status === "building" ? "Work in progress" : "Early investigation"}</dd></div>
        <div><dt>Reading time</dt><dd>About {readingMinutes} {readingMinutes === 1 ? "minute" : "minutes"}</dd></div>
        <div><dt>Available to explore</dt><dd>{[project.repoUrl && "Source code", project.liveUrl && "Live project", project.gallery.length > 0 && "Screenshots", project.demo && "Demo"].filter(Boolean).join(" · ") || "Project notes"}</dd></div>
      </dl>
      {sections.length > 0 && <div className={styles.caseLayout}>
        <CaseNavigation sections={sections.map(({ key, label }) => ({ id: key, label }))} />
        <article className={styles.caseArticle} aria-label={`${project.title} case study`}>
          {sections.map(({ key, label }) => (
            <section key={key} id={key} className={styles.caseSection} aria-labelledby={`${key}-heading`}>
              <h2 id={`${key}-heading`} tabIndex={-1}>{label}</h2>
              {key === "screenshots" ? <ProjectGallery images={project.gallery} />
                : key === "demo" ? project.demo && <InteractiveDemo demo={project.demo} />
                : project[key].split(/\n\s*\n/).filter((paragraph) => paragraph.trim()).map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
            </section>
          ))}
        </article>
      </div>}
      <aside className={styles.projectConversation}><div><h2>Have a related problem?</h2><p>Use this project as a starting point for a conversation about your own brief.</p></div><Link className={styles.primary} href={`/contact?topic=${discipline?.contactTopic ?? "technical"}#topics-heading`}>Discuss a project <span aria-hidden="true">→</span></Link></aside>
      {(previous || next) && <nav className={styles.adjacent} aria-label="Other projects">
        {previous && <Link href={`/work/${previous.slug}`}><span>Previous project</span><strong><span aria-hidden="true">← </span>{previous.title}</strong></Link>}
        {next && <Link className={styles.nextProject} href={`/work/${next.slug}`}><span>Next project</span><strong>{next.title}<span aria-hidden="true"> →</span></strong></Link>}
      </nav>}
    </div>
  );
}
