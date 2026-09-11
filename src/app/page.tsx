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
      <section className="hero-section relative overflow-hidden">
        <div className="signal-field" aria-hidden="true" />

        <div className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-28">
          <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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
                <img
                  src="/images/Excel.jpg"
                  alt="Enyo-ojo Meyanga"
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-(--color-ink-faint)">
                <span>Current state</span>
                <span>01 / 05</span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-(--color-border) bg-(--color-border)">
                <div className="bg-(--color-bg) px-3 py-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
                    Current focus
                  </p>
                  <p className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-(--color-primary)">
                    AI Systems
                  </p>
                </div>

                <div className="bg-(--color-bg) px-3 py-3">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
                    Primary stack
                  </p>
                  <p className="mt-1 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-(--color-primary)">
                    Python
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CURRENT STATE
      ================================================== */}
      <section className="surface-section border-b border-(--color-border) bg-(--color-surface)">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel variant="blue">Current state</SectionLabel>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.35fr] lg:gap-16">
            <div>
              <p className="mt-6 max-w-md font-display text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl">
                Building toward something bigger.
              </p>

              <p className="mt-5 max-w-sm font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-white/50">
                Learning by building, breaking, testing, and rebuilding.
              </p>
            </div>

            <div>
              <div>
                <div className="flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
                    System status
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                    Live / 2026
                  </span>
                </div>

                <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 sm:grid-cols-3">
                  <div className="bg-white/[0.06] px-4 py-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/45">
                      Current focus
                    </p>

                    <p className="mt-2 font-display text-base font-medium tracking-[-0.02em] text-white">
                      AI Systems
                    </p>
                  </div>

                  <div className="bg-white/[0.06] px-4 py-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/45">
                      Primary stack
                    </p>

                    <p className="mt-2 font-display text-base font-medium tracking-[-0.02em] text-white">
                      Python
                    </p>
                  </div>

                  <div className="bg-white/[0.06] px-4 py-4">
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/45">
                      Status
                    </p>

                    <p className="mt-2 font-display text-base font-medium tracking-[-0.02em] text-white">
                      Building
                    </p>
                  </div>
                </div>

                <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                  {profile.currentFocus}
                </p>
              </div>

              <div className="mt-14 grid border-t border-white/20 sm:grid-cols-3">
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
                                className="group flex items-start gap-2"
                              >
                                <span
                                  className="
                                    pt-0.5 font-mono text-xs
                                    text-white/50
                                    transition-transform duration-180
                                    group-hover:translate-x-0.5
                                  "
                                  aria-hidden="true"
                                >
                                  ↗
                                </span>

                                <span
                                  className="
                                    font-display text-sm font-medium leading-snug
                                    text-white
                                    transition-colors duration-180
                                    group-hover:text-white/75
                                  "
                                >
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

        <div className="relative mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
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
                    py-8
                    sm:grid sm:grid-cols-[48px_160px_minmax(0,1fr)_auto]
                    sm:items-center sm:gap-7
                  "
                >
                  <span className="font-display text-xs text-(--color-primary)">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ProjectThumbnail variant={project.thumbnail} />

                  <div className="min-w-0">
                    <h3
                      className="
                        font-display text-[1.35rem] font-semibold
                        tracking-[-0.025em]
                        text-(--color-ink)
                        transition-colors duration-180
                        group-hover:text-(--color-primary)
                      "
                    >
                      {project.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-(--color-ink-muted)">
                      {project.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border border-(--color-border)
                            bg-white/50
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
                      className="
                        project-arrow
                        font-mono text-sm
                        text-(--color-ink-faint)
                        transition-all duration-200
                        group-hover:translate-x-1
                        group-hover:text-(--color-primary)
                      "
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
      <section className="surface-section border-b border-(--color-border) bg-(--color-surface)">
        <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel variant="blue">Approach (HOW I THINK)</SectionLabel>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">

            <div>
              <p className="max-w-3xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl">
                I care about the problem before I care about the technology
                used to solve it.
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                I'm interested in understanding what is actually
                difficult, finding where effort is being wasted, and building
                something that makes the work easier.
              </p>

              <div className="mt-8 grid grid-cols-2 border-t border-white/20">
                <div className="border-b border-r border-white/20 py-5 pr-5">
                  <span className="font-display text-lg font-medium text-white/70">
                    01
                  </span>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Question
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Start with the problem, not the tool.
                  </p>
                </div>

                <div className="border-b border-white/20 py-5 pl-5">
                  <span className="font-display text-lg font-medium text-white/70">
                    02
                  </span>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Understand
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Find what is actually difficult.
                  </p>
                </div>

                <div className="border-r border-white/20 py-5 pr-5">
                  <span className="font-display text-lg font-medium text-white/70">
                    03
                  </span>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Build
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Turn the idea into something usable.
                  </p>
                </div>

                <div className="py-5 pl-5">
                  <span className="font-display text-lg font-medium text-white/70">
                    04
                  </span>

                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                    Iterate
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    Learn from what breaks and improve it.
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="
                  mt-7 inline-flex
                  font-mono text-[10px] uppercase
                  tracking-[0.16em]
                  text-white/70
                  transition-colors duration-200
                  hover:text-(--color-section)
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
