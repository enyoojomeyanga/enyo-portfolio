import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { StatusBadge } from "@/components/status-badge";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="font-mono text-xs uppercase tracking-widest text-(--color-primary)">
          {profile.role}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-(--color-ink) sm:text-5xl">
          {profile.fullName}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-(--color-ink-muted)">
          {profile.tagline}
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-(--color-ink-faint)">
          {profile.missionShort}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/work"
            className="rounded-md bg-(--color-primary) px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-(--color-primary-hover)"
          >
            Explore the work
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-(--color-border-strong) px-5 py-2.5 font-mono text-sm text-(--color-ink) transition-colors hover:border-(--color-primary) hover:text-(--color-primary)"
          >
            Work with me
          </Link>
        </div>
      </section>

      {/* Trajectory strip — signature element: real status, not decoration */}
      <section className="border-y border-(--color-border) bg-(--color-surface)">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="font-mono text-xs uppercase tracking-widest text-(--color-ink-faint)">
            Current state
          </h2>
          <p className="mt-3 max-w-2xl text-(--color-ink-muted)">
            {profile.currentFocus}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="flex items-center gap-2 rounded-lg border border-(--color-border) bg-(--color-bg) px-3 py-2 text-sm text-(--color-ink) transition-colors hover:border-(--color-primary)"
              >
                <StatusBadge status={project.status} />
                <span className="font-medium">{project.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge to About */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="max-w-2xl text-(--color-ink-muted)">
          I care about the problem before I care about the technology used to
          solve it.{" "}
          <Link
            href="/about"
            className="text-(--color-primary) underline underline-offset-4 hover:text-(--color-primary-hover)"
          >
            More on how I think about this →
          </Link>
        </p>
      </section>
    </>
  );
}
