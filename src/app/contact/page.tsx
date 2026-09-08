import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: `Contact — ${profile.fullName}`,
};

const REASONS = [
  {
    number: "01",
    label: "TECHNICAL PROBLEM",
    trigger: "You have a problem worth understanding.",
    action:
      "Tell me what it is and let's understand it before deciding what to build.",
  },
  {
    number: "02",
    label: "WORK / COLLABORATION",
    trigger: "You're interested in working with me.",
    action:
      "Tell me what you're building, what you need, and where you think I can contribute.",
  },
  {
    number: "03",
    label: "OPPORTUNITY",
    trigger: "You have an opportunity or referral.",
    action:
      "Have something interesting in mind? I'd genuinely like to hear about it.",
  },
];

export default function ContactPage() {
  const hasEmail = !profile.email.startsWith("PLACEHOLDER");

  return (
    <main>
      <section className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-(--color-primary)"
            />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-(--color-ink-faint)">
              Contact / 04
            </p>
            <span
              aria-hidden="true"
              className="h-px w-12 bg-(--color-border-strong)"
            />
          </div>

          <h1 className="mt-8 max-w-3xl font-display text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-(--color-ink) sm:text-6xl lg:text-7xl">
            Have a problem
            <br />
            worth solving?
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
            I&apos;m interested in technical problems, ambitious ideas, useful
            products, and opportunities where thoughtful engineering actually
            matters.
          </p>
        </div>

        <div className="mt-20 border-t border-(--color-border)">
          <p className="py-5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-(--color-ink-faint)">
            What are you reaching out about?
          </p>

          <div className="border-b border-(--color-border)">
            {REASONS.map((reason) => (
              <div
                key={reason.number}
                className="group grid gap-5 border-t border-(--color-border) py-7 transition-transform duration-200 hover:translate-x-1 sm:grid-cols-[48px_190px_minmax(0,1fr)_24px] sm:items-center sm:gap-7 sm:py-8"
              >
                <span className="font-mono text-xs text-(--color-ink-faint)">
                  {reason.number}
                </span>

                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-(--color-primary)">
                  {reason.label}
                </p>

                <div>
                  <p className="font-display text-lg font-medium tracking-[-0.02em] text-(--color-ink) sm:text-xl">
                    {reason.trigger}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-(--color-ink-muted)">
                    {reason.action}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="font-mono text-lg text-(--color-ink-faint) transition-transform duration-200 group-hover:translate-x-1 group-hover:text-(--color-primary)"
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-(--color-border) pt-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-(--color-ink-faint)">
              Direct contact
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-(--color-ink-muted)">
              No elaborate contact funnel. If there&apos;s something worth
              discussing, start with the problem.
            </p>
          </div>

          <div>
            {hasEmail ? (
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-3 font-mono text-base text-(--color-primary) transition-colors duration-180 hover:text-(--color-primary-hover) sm:text-lg"
              >
                <span>{profile.email}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-180 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ) : (
              <p className="font-mono text-sm text-(--color-ink-faint)">
                [ Contact email pending — add real address in
                src/content/profile.ts ]
              </p>
            )}

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em]">
              {profile.links.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--color-ink-muted) transition-colors duration-180 hover:text-(--color-primary)"
                >
                  GitHub ↗
                </a>
              )}
              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--color-ink-muted) transition-colors duration-180 hover:text-(--color-primary)"
                >
                  LinkedIn ↗
                </a>
              )}
              {profile.links.facebook && (
                <a
                  href={profile.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--color-ink-faint) transition-colors duration-180 hover:text-(--color-primary)"
                >
                  Facebook ↗
                </a>
              )}
              {profile.links.x && (
                <a
                  href={profile.links.x}
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--color-ink-faint) transition-colors duration-180 hover:text-(--color-primary)"
                >
                  X ↗
                </a>
              )}
              {profile.links.instagram && (
                <a
                  href={profile.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-(--color-ink-faint) transition-colors duration-180 hover:text-(--color-primary)"
                >
                  Instagram ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-(--color-border) pt-8">
          <p className="max-w-2xl font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-(--color-ink) sm:text-3xl">
            Bring the problem. We&apos;ll figure out the rest.
          </p>
        </div>
      </section>
    </main>
  );
}
