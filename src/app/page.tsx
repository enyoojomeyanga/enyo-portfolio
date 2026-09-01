import Link from "next/link";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { exploringTopics } from "@/content/exploring";
import { StatusBadge } from "@/components/status-badge";
import { SectionLabel } from "@/components/section-label";
import { ProjectThumbnail } from "@/components/project-thumbnail";

export default function Home() {
  return (
    <>
{/* Hero */}
<section className="relative overflow-hidden border-b border-(--color-border) bg-white">
  <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 text-left sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full bg-[#0077FF]"
      />
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#555650]">
        {profile.role}
      </p>
      <span
        aria-hidden="true"
        className="h-px w-10 bg-[#0077FF]"
      />
    </div>

    <div className="mt-10">
      <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
        <span style={{ color: "#0077FF" }}>Enyo-ojo</span>{" "}
        <span style={{ color: "#1F1426" }}>Excel</span>{" "}
        <span style={{ color: "#0077FF" }}>Meyanga</span>
      </h1>

      <p className="mt-8 max-w-3xl font-sans text-lg leading-relaxed text-[#555650] sm:text-xl lg:text-2xl">
        {profile.tagline}
      </p>
    </div>

    <div className="mt-12 flex flex-wrap gap-4">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm text-[#0077FF] transition-transform duration-200 hover:-translate-y-0.5"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 55%), linear-gradient(rgba(0,119,255,0.15), rgba(0,119,255,0.15))",
        }}
      >
        View my work
        <span aria-hidden="true">↗</span>
      </Link>

      <Link
        href="/contact"
        className="rounded-md border border-[#0077FF] bg-transparent px-5 py-2.5 font-mono text-sm text-[#0077FF] transition-transform duration-200 hover:-translate-y-0.5"
      >
        Get in touch
      </Link>
    </div>
  </div>
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
            const items =
              status === "exploring"
                ? exploringTopics.map((topic) => ({
                    key: topic.title,
                    href: topic.href,
                    title: topic.title,
                    external: true,
                  }))
                : statusProjects.map((project) => ({
                    key: project.slug,
                    href: `/work/${project.slug}`,
                    title: project.title,
                    external: false,
                  }));

            return (
              <div
                key={status}
                className="border-b border-(--color-border) py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
              >
                <StatusBadge status={status} />

                <ul className="mt-5 space-y-3">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <li key={item.key}>
                        <Link
                          href={item.href}
                          className="group flex items-center gap-2"
                        >
                          <span
                            className="font-mono text-xs text-(--color-ink-faint) transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden="true"
                          >
                            ↗
                          </span>

                          <span className="font-display text-sm font-medium text-(--color-ink) transition-colors group-hover:text-(--color-primary)">
                            {item.title}
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

                <Link
                  href="/work"
                  className="mt-5 inline-flex font-mono text-xs uppercase tracking-[0.14em] text-(--color-primary) transition-colors hover:text-(--color-primary-hover)"
                >
                  View all {status} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>

{/* Selected Work */}
      <section
        className="bg-gradient-to-br from-(--color-primary-field)/10 via-(--color-accent)/10 to-(--color-accent)/15"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>
                Selected work
              </SectionLabel>

              <p className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-(--color-ink) sm:text-3xl">
                A few things I&apos;ve built, explored, and learned from.
              </p>
            </div>

            <Link
              href="/work"
              className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-(--color-primary) transition-colors hover:text-(--color-primary-hover)"
            >
              View all work →
            </Link>
          </div>

          <ul className="mt-10 divide-y divide-(--color-border)/60">
            {projects.slice(0, 3).map((project, index) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex flex-col gap-4 py-6 transition-colors sm:flex-row sm:items-center sm:gap-6"
                >
                  <span className="font-mono text-sm text-(--color-primary)">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ProjectThumbnail variant={project.thumbnail} />

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-(--color-ink) transition-colors group-hover:text-(--color-primary)">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-(--color-ink-muted)">
                      {project.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-(--color-surface) px-2.5 py-0.5 font-mono text-[11px] text-(--color-ink-muted)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
                    <StatusBadge status={project.status} />

                    <span
                      className="font-mono text-sm text-(--color-ink-faint) transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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