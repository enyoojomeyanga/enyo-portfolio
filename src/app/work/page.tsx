import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { isDiscipline } from "@/content/disciplines";
import { WorkFilter } from "@/components/work/work-filter";

export const metadata: Metadata = {
  title: `Work — ${profile.fullName}`,
};

type WorkSearchParams = { discipline?: string | string[] };

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<WorkSearchParams>;
}) {
  const params = await searchParams;
  const category = typeof params.discipline === "string" ? params.discipline : "";
  const initialFilter = isDiscipline(category) ? category : "all";

  return (
    <main>
      <section className="mx-auto max-w-[1180px] px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12">
        <div>
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-(--color-primary)" />
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-(--color-primary)">
              Work / 03
            </p>
            <span aria-hidden="true" className="h-px w-10 bg-(--color-border-strong)" />
          </div>
          <h1 className="mt-9 max-w-5xl font-display text-[clamp(3.5rem,7vw,6.5rem)] font-semibold leading-[0.97] tracking-[-0.05em] text-(--color-ink)">
            What I&apos;ve built,<br />and what&apos;s in progress.
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
            This isn&apos;t a long list. It&apos;s an honest record of what I&apos;ve
            built, what I&apos;m building, and what I&apos;m still figuring out.
          </p>
        </div>

        <div className="mt-20">
          <div className="mb-7 flex items-center justify-between border-b border-(--color-border) pb-4">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.13em] text-(--color-ink-faint)">
              Selected projects
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-(--color-ink-faint)">
              {String(projects.length).padStart(2, "0")} entries
            </p>
          </div>
          <WorkFilter key={initialFilter} projects={projects} initialFilter={initialFilter} />
        </div>
      </section>
    </main>
  );
}
