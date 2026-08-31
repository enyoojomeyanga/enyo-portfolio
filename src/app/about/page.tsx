import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: `About — ${profile.fullName}`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-(--color-primary)">
        About
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
        Direction, not credentials
      </h1>

      <div className="mt-10 space-y-6 text-(--color-ink-muted) leading-relaxed">
        <p>
          I&apos;m {profile.fullName}, working toward becoming an{" "}
          {profile.role}. I&apos;m early in that journey — I don&apos;t
          present myself as a senior engineer, and I won&apos;t pretend to
          be one here. What I can show is direction: the problems I care
          about, the way I approach them, and the work that&apos;s come out
          of it so far.
        </p>
        <p>
          I spent roughly six months working in Go before moving into
          Python, which is where I&apos;m building now. That move wasn&apos;t
          about chasing whatever is trendy — it&apos;s the language most
          directly connected to where I&apos;m headed: building AI-powered
          systems that solve real, specific problems.
        </p>
        <p>
          I&apos;m interested in two kinds of problems. The first is brought
          to me — someone has a process that&apos;s slow, repetitive, or
          stressful, and I want to understand it well enough to build
          something that actually helps. The second is the kind I notice
          myself, in workflows or systems that could clearly work better
          than they do.
        </p>
        <p>
          I don&apos;t think the interesting part is &ldquo;using AI.&rdquo;
          The interesting part is the problem underneath, and whether the
          solution actually reduces the effort someone has to put in. If it
          doesn&apos;t do that, it isn&apos;t done.
        </p>
        <p>
          When something breaks — and it does — my approach is the same:
          understand what went wrong, adapt, and try again. The{" "}
          <Link
            href="/work"
            className="text-(--color-primary) underline underline-offset-4 hover:text-(--color-primary-hover)"
          >
            work
          </Link>{" "}
          section shows that process more honestly than I could describe it
          here.
        </p>
      </div>
    </section>
  );
}
