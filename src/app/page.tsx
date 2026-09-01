import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { StatusBadge } from "@/components/status-badge";
import { SectionLabel } from "@/components/section-label";

export default function Home() {
  return (
    <>
{/* Hero */}
<section className="relative overflow-hidden border-b border-(--color-border) bg-(--color-primary-field)">
  <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
    <SectionLabel>
      {profile.role}
    </SectionLabel>

    <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
      <div>
        <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-(--color-ink) sm:text-7xl lg:text-8xl">
          {profile.fullName}
        </h1>

        <p className="mt-8 max-w-3xl font-sans text-lg leading-relaxed text-(--color-ink-muted) sm:text-xl lg:text-2xl">
          {profile.tagline}
        </p>
      </div>

      <div className="max-w-sm border-l border-(--color-ink)/20 pl-5">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-(--color-ink-muted)">
          Currently
        </p>

        <p className="mt-3 font-sans text-sm leading-relaxed text-(--color-ink-muted)">
          {profile.missionShort}
        </p>
      </div>
    </div>

    <div className="mt-12 flex flex-wrap gap-4">
      <Link
        href="/work"
        className="rounded-md bg-(--color-dark) px-5 py-2.5 font-mono text-sm text-(--color-ink-inverse) transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-dark-soft) hover:shadow-lg"
      >
        Explore the work
      </Link>

      <Link
        href="/contact"
        className="rounded-md border border-(--color-ink)/30 px-5 py-2.5 font-mono text-sm text-(--color-ink) transition-all duration-200 hover:-translate-y-0.5 hover:border-(--color-ink) "
      >
        Work with me
      </Link>
    </div>
  </div>

  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[32px] border-(--color-ink)/5 sm:h-96 sm:w-96"
  />
</section>

{/* Current State */}
<section className="border-y border-(--color-border) bg-(--color-surface)">
  <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
    <SectionLabel>
      Current state
    </SectionLabel>

    <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
      <div>
        <p className="max-w-sm font-display text-2xl font-medium leading-snug tracking-tight text-(--color-ink) sm:text-3xl">
          Building toward something bigger.
        </p>
      </div>

      <div>
        <p className="max-w-2xl text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
          {profile.currentFocus}
        </p>

        <div className="mt-12 grid border-t border-(--color-border) sm:grid-cols-3">
          {(["built", "building", "exploring"] as const).map((status) => {
            const statusProjects = projects.filter(
              (project) => project.status === status
            );

            return (
              <div
                key={status}
                className="border-b border-(--color-border) py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
              >
                <StatusBadge status={status} />

                <ul className="mt-5 space-y-3">
                  {statusProjects.length > 0 ? (
                    statusProjects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          href={`/work/${project.slug}`}
                          className="group flex items-center justify-between gap-4"
                        >
                          <span className="font-display text-sm font-medium text-(--color-ink) transition-colors group-hover:text-(--color-primary)">
                            {project.title}
                          </span>

                          <span
                            className="font-mono text-xs text-(--color-ink-faint) transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="font-mono text-xs text-(--color-ink-faint)">
                      Nothing here yet.
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Selected Work */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionLabel>
          Selected work
        </SectionLabel>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl font-sans text-base leading-relaxed text-(--color-ink-muted)">
            A few things I&apos;ve built and explored so far.
          </p>

          <Link
            href="/work"
            className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-(--color-primary) transition-colors hover:text-(--color-primary-hover)"
          >
            View all work →
          </Link>
        </div>

        <ul className="mt-10 border-t border-(--color-border)">
  {projects.slice(0, 3).map((project) => (
    <li key={project.slug}>
      <Link
        href={`/work/${project.slug}`}
        className="group grid grid-cols-[3px_1fr] gap-5 border-b border-(--color-border) py-7 transition-colors hover:bg-(--color-surface) sm:grid-cols-[3px_1fr_auto] sm:gap-6 sm:px-4"
      >
        <span
          className="mt-1 h-full min-h-16 rounded-full bg-(--color-border-strong) transition-colors duration-200 group-hover:bg-(--color-primary)"
          aria-hidden="true"
        />

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-lg font-semibold tracking-tight text-(--color-ink) transition-colors group-hover:text-(--color-primary)">
              {project.title}
            </h3>

            <StatusBadge status={project.status} />
          </div>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-(--color-ink-muted)">
            {project.summary}
          </p>

          <p className="mt-3 font-mono text-[11px] text-(--color-ink-faint)">
            {project.stack.join(" · ")}
          </p>
        </div>

        <span
          className="hidden self-center font-mono text-sm text-(--color-ink-faint) transition-transform duration-200 group-hover:translate-x-1 sm:block"
          aria-hidden="true"
        >
          →
        </span>
      </Link>
    </li>
  ))}
</ul>
      </section>

{/* Approach */}
      <section className="border-y border-(--color-border) bg-(--color-surface)">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <SectionLabel>
            Approach
          </SectionLabel>

          <p className="mt-8 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight text-(--color-ink) sm:text-3xl">
            I care about the problem before I care about the technology used
            to solve it.
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-(--color-ink-muted)">
            I&apos;m interested in understanding what is actually difficult,
            finding where effort is being wasted, and building something that
            makes the work easier.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex font-mono text-xs uppercase tracking-[0.16em] text-(--color-primary) transition-colors hover:text-(--color-primary-hover)"
          >
            More on how I think →
          </Link>
        </div>
      </section>
    </>
  );
}