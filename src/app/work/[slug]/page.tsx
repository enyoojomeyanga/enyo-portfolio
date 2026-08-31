import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { StatusBadge } from "@/components/status-badge";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — ${profile.fullName}` };
}

const SECTIONS: { key: keyof typeof projects[number]; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "implementation", label: "Implementation" },
  { key: "result", label: "Result" },
  { key: "learned", label: "What I learned" },
  { key: "improve", label: "What I'd improve" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/work"
        className="font-mono text-xs uppercase tracking-widest text-(--color-ink-faint) hover:text-(--color-primary)"
      >
        ← Work
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
          {project.title}
        </h1>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-3 font-mono text-xs text-(--color-ink-faint)">
        {project.stack.join(" · ")}
      </p>

      <p className="mt-6 text-lg text-(--color-ink-muted)">
        {project.summary}
      </p>

      <div className="mt-12 space-y-10">
        {SECTIONS.map(({ key, label }) => (
          <div key={key}>
            <h2 className="font-mono text-xs uppercase tracking-widest text-(--color-primary)">
              {label}
            </h2>
            <p className="mt-2 leading-relaxed text-(--color-ink-muted)">
              {project[key] as string}
            </p>
          </div>
        ))}
      </div>

      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-block rounded-md border border-(--color-border-strong) px-5 py-2.5 font-mono text-sm text-(--color-ink) transition-colors hover:border-(--color-primary) hover:text-(--color-primary)"
        >
          View repository →
        </a>
      )}
    </section>
  );
}
