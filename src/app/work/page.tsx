import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { StatusBadge } from "@/components/status-badge";

export const metadata: Metadata = {
  title: `Work — ${profile.fullName}`,
};

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-(--color-primary)">
        Work
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
        What I&apos;ve built, and what&apos;s in progress
      </h1>
      <p className="mt-6 max-w-2xl text-(--color-ink-muted)">
        This isn&apos;t a long list — it&apos;s an honest one. Each entry
        reflects real work, tagged by its actual state.
      </p>

      <ul className="mt-12 divide-y divide-(--color-border) border-t border-(--color-border)">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="font-display text-lg font-semibold text-(--color-ink) group-hover:text-(--color-primary)">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-(--color-ink-muted)">
                  {project.summary}
                </p>
                <p className="mt-2 font-mono text-xs text-(--color-ink-faint)">
                  {project.stack.join(" · ")}
                </p>
              </div>
              <StatusBadge status={project.status} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
