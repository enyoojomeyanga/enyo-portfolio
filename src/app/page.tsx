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
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative overflow-hidden border-b border-(--color-border)">
        <div className="signal-field" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-28">
          <div className="grid items-end gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <div className="reveal flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-(--color-primary)"
                />

                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-(--color-ink-muted)">
                  {profile.role}
                </p>

                <span
                  aria-hidden="true"
                  className="h-px w-12 bg-(--color-border-strong)"
                />
              </div>

              <div className="mt-9">
                <h1 className="reveal max-w-5xl font-display text-[clamp(3.8rem,9vw,8rem)] font-semibold leading-[0.82] tracking-[-0.065em]">
                  <span className="text-(--color-primary)">Enyo-ojo</span>{" "}
                  <span className="text-(--color-ink)">Excel</span>{" "}
                  <span className="text-(--color-primary)">Meyanga</span>
                </h1>

                <p className="reveal reveal-delay mt-8 max-w-2xl font-sans text-lg leading-relaxed text-(--color-ink-muted) sm:text-xl lg:text-2xl">
                  {profile.tagline}
                </p>
              </div>

              <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="
                    primary-button
                    inline-flex items-center gap-3
                    rounded-xl px-5
                    font-mono text-xs uppercase
                    tracking-[0.12em]
                  "
                >
                  View my work
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/contact"
                  className="
                    secondary-button
                    inline-flex items-center
                    rounded-xl px-5
                    font-mono text-xs uppercase
                    tracking-[0.12em]
                  "
                >
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Image / artifact placeholder */}
            <div className="relative mx-auto w-full max-w-[390px] lg:ml-auto">
              <div className="absolute -right-3 -top-3 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
                IMAGE / 001
              </div>

              <div
                className="
                  relative aspect-[4/5]
                  overflow-hidden rounded-[28px]
                  border border-(--color-border)
                  bg-(--color-surface-soft)
                  shadow-[0_24px_70px_rgba(23,21,26,0.10)]
                "
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(124,58,237,0.16),transparent_32%),radial-gradient(circle_at_75%_75%,rgba(255,79,100,0.10),transparent_30%)]" />

                <div className="absolute inset-5 rounded-[20px] border border-(--color-border) bg-(--color-bg)/70">
                  <div className="flex h-full items-end p-5">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
                        CURRENT
                      </p>

                      <p className="mt-2 font-display text-xl font-semibold tracking-tight text-(--color-ink)">
                        2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-(--color-ink-faint)">
                <span>Current state</span>
                <span>01 / 05</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CURRENT STATE
      ================================================== */}
      <section className="border-b border-(--color-border) bg-(--color-surface)">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <SectionLabel>Current state</SectionLabel>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.8fr_1.7fr] lg:gap-24">
            <div>
              <p className="max-w-sm font-display text-3xl font-medium leading-[1.05] tracking-[-0.04em] text-(--color-ink) sm:text-4xl">
                Building toward something bigger.
              </p>

              <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
                02 / CURRENT STATE
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
                        }))
                      : statusProjects.map((project) => ({
                          key: project.slug,
                          href: `/work/${project.slug}`,
                          title: project.title,
                        }));

                  return (
                    <div
                      key={status}
                      className="
                        border-b border-(--color-border)
                        py-6
                        sm:border-b-0 sm:border-r sm:px-6
                        sm:first:pl-0 sm:last:border-r-0
                      "
                    >
                      <StatusBadge status={status} />

                      <ul className="mt-5 space-y-3">
                        {items.length > 0 ? (
                          items.map((item) => (
                            <li key={item.key}>
                              <Link
                                href={item.href}
                                className="
                                  group flex items-start gap-2
                                "
                              >
                                <span
                                  className="
                                    pt-0.5 font-mono text-xs
                                    text-(--color-ink-faint)
                                    transition-transform duration-180
                                    group-hover:translate-x-0.5
                                  "
                                  aria-hidden="true"
                                >
                                  ↗
                                </span>

                                <span className="font-display text-sm font-medium text-(--color-ink) transition-colors duration-180 group-hover:text-(--color-primary)">
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
                        className="
                          mt-5 inline-flex
                          font-mono text-[10px] uppercase
                          tracking-[0.14em] text-(--color-primary)
                          transition-colors duration-180
                          hover:text-(--color-primary-hover)
                        "
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

      {/* ==================================================
          SELECTED WORK
      ================================================== */}
      <section className="relative overflow-hidden border-b border-(--color-border)">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(124,58,237,0.10),transparent_26rem),radial-gradient(circle_at_90%_75%,rgba(255,79,100,0.07),transparent_25rem)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Selected work</SectionLabel>

              <p className="mt-5 max-w-2xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-(--color-ink) sm:text-4xl">
                A few things I&apos;ve built, explored, and learned from.
              </p>
            </div>

            <Link
              href="/work"
              className="
                shrink-0 font-mono text-[10px]
                uppercase tracking-[0.16em]
                text-(--color-primary)
                transition-colors duration-180
                hover:text-(--color-primary-hover)
              "
            >
              View all work →
            </Link>
          </div>

          <ul className="mt-12 border-t border-(--color-border)">
            {projects.slice(0, 3).map((project, index) => (
              <li key={project.slug} className="border-b border-(--color-border)">
                <Link
                  href={`/work/${project.slug}`}
                  className="
                    project-row group
                    flex flex-col gap-5
                    py-7
                    sm:grid sm:grid-cols-[42px_112px_1fr_auto]
                    sm:items-center sm:gap-6
                  "
                >
                  <span className="font-mono text-xs text-(--color-primary)">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ProjectThumbnail variant={project.thumbnail} />

                  <div className="min-w-0">
                    <h3
                      className="
                        font-display text-xl font-semibold
                        tracking-[-0.025em]
                        text-(--color-ink)
                        transition-colors duration-180
                        group-hover:text-(--color-primary)
                      "
                    >
                      {project.title}
                    </h3>

                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-(--color-ink-muted)">
                      {project.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border border-(--color-border)
                            bg-white/35
                            px-2.5 py-1
                            font-mono text-[10px]
                            text-(--color-ink-muted)
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <StatusBadge status={project.status} />

                    <span
                      className="project-arrow font-mono text-sm text-(--color-ink-faint)"
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

      {/* ==================================================
          APPROACH
      ================================================== */}
      <section className="border-b border-(--color-border) bg-(--color-surface)">
        <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <SectionLabel>Approach</SectionLabel>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-24">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
                04 / HOW I THINK
              </p>
            </div>

            <div>
              <p className="max-w-3xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-(--color-ink) sm:text-4xl">
                I care about the problem before I care about the technology
                used to solve it.
              </p>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-(--color-ink-muted)">
                I&apos;m interested in understanding what is actually
                difficult, finding where effort is being wasted, and building
                something that makes the work easier.
              </p>

              <Link
                href="/about"
                className="
                  mt-8 inline-flex
                  font-mono text-[10px] uppercase
                  tracking-[0.16em]
                  text-(--color-primary)
                  transition-colors duration-180
                  hover:text-(--color-primary-hover)
                "
              >
                More on how I think →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
