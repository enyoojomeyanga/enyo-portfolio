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
    <section className="mx-auto max-w-[1180px] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-12">
      <Link
        href="/work"
        className="
          inline-flex items-center gap-3
          rounded-full
          border border-(--color-border-strong)
          px-5 py-3
          font-mono text-xs font-medium uppercase
          tracking-[0.14em]
          text-(--color-ink-muted)
          transition-all duration-200
          hover:border-(--color-primary)
          hover:bg-(--color-primary)
          hover:text-white
        "
      >
        <span aria-hidden="true" className="text-base leading-none">
          ←
        </span>
        <span>Return</span>
      </Link>

      <div className="mt-8 ">
        <div>
          <p className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-(--color-primary)">
            Project / {String(projects.findIndex((p) => p.slug === project.slug) + 1).padStart(2, "0")}
          </p>
          <br/>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-(--color-ink)">
              {project.title}
            </h1>

            <StatusBadge status={project.status} />
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
            {project.summary}
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-5 sm:grid-cols-2">
        {SECTIONS.map(({ key, label }, index) => (
          <div
            key={key}
            className="
        rounded-[24px]
        border border-(--color-border)
        bg-(--color-surface-soft)
        p-6
        shadow-[0_8px_24px_rgba(11,16,32,0.04)]
        sm:p-7
      "
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-sm font-medium tracking-[-0.03em] text-(--color-primary)/60">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-(--color-primary)">
                {label}
              </h2>
            </div>

            <p className="mt-6 leading-7 text-(--color-ink-muted)">
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
          className="mt-16 inline-flex items-center gap-3 border-b border-(--color-primary)/30 pb-2 font-mono text-xs uppercase tracking-[0.16em] text-(--color-primary) transition-colors hover:border-(--color-primary) hover:text-(--color-primary-hover)"        >
          View repository →
        </a>
      )}
    </section>
  );
}
