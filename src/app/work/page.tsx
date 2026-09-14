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
    <main>
      <section className="mx-auto max-w-[1180px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
        {/* Page header */}
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-(--color-primary)"
            />

            <p className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-(--color-primary)">
              Work / 03
            </p>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-(--color-border-strong)"
            />
          </div>

          <h1 className="mt-8 max-w-5xl font-display text-[clamp(3.5rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.06em] text-(--color-ink)">
            What I&apos;ve built,
            <br />
            and what&apos;s in progress.
          </h1>

          <p className="mt-7 max-w-2xl font-sans text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
            This isn&apos;t a long list. It&apos;s an honest record of what I&apos;ve
            built, what I&apos;m building, and what I&apos;m still figuring out.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-20">
          <div className="mb-5 flex items-center justify-between border-b border-(--color-border) pb-3">
            <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-(--color-ink-faint)">
              Selected projects
            </p>

            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-ink-faint)">
              {String(projects.length).padStart(2, "0")} entries
            </p>
          </div>

          <ul>
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="border-b border-(--color-border)"
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group grid gap-8 py-8 transition-colors duration-200 sm:py-10 lg:grid-cols-[80px_1fr_auto] lg:items-center lg:gap-10"
                >
                  {/* Number */}
                  <span className="font-display text-xl font-medium tracking-[-0.04em] text-(--color-primary)/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Project information */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.035em] text-(--color-ink) transition-colors duration-200 group-hover:text-(--color-primary) sm:text-3xl">
                        {project.title}
                      </h2>

                      <StatusBadge status={project.status} />
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-(--color-ink-muted) sm:text-base">
                      {project.summary}
                    </p>

                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-(--color-ink-faint)">
                      {project.stack.join(" · ")}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span
                    aria-hidden="true"
                    className="hidden text-2xl text-(--color-primary)/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--color-primary) lg:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}