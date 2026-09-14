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
      <section className="mx-auto max-w-[1180px] px-5 pt-20 pb-0 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-(--color-primary)"
            />
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-(--color-ink-faint)">
              Contact 
            </p>
            <span
              aria-hidden="true"
              className="h-px w-12 bg-(--color-border-strong)"
            />
          </div>

          <h1 className="mt-8 max-w-3xl font-display text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-(--color-ink) sm:text-6xl lg:text-7xl">
            Have a problem
            <br />
            you need to solve?
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
            I'm interested in technical problems, ambitious ideas, useful
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
                  ⤵
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-(--color-border) pt-7 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-(--color-primary)">
              Direct contact
            </p>

            <p className="mt-4 max-w-sm font-display text-xl font-medium leading-tight tracking-[-0.025em] text-(--color-ink) sm:text-2xl">
              No elaborate contact funnel.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-(--color-ink-muted)">
              If there&apos;s something worth discussing, start with the problem.
            </p>
          </div>

          <div>
            {hasEmail ? (
              <div className="pt-1">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-(--color-ink-faint)">
                  Email
                </p>

                <a
                  href={`mailto:${profile.email}`}
                  className="group mt-3 inline-flex items-center gap-3 border-b border-(--color-primary)/30 pb-2 font-display text-xl font-medium tracking-[-0.025em] text-(--color-primary) transition-colors duration-200 hover:border-(--color-primary) hover:text-(--color-primary-hover) sm:text-2xl"
                >
                  <span>{profile.email}</span>

                  <span
                    aria-hidden="true"
                    className="text-lg transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>
            ) : (
              <p className="font-mono text-sm text-(--color-ink-faint)">
                [ Contact email pending — add real address in
                src/content/profile.ts ]
              </p>
            )}

            <div className="mt-8 flex items-center gap-2">
              {profile.links.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ink-muted) transition-all duration-200 hover:border-(--color-primary)/40 hover:bg-(--color-primary) hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18A10.9 10.9 0 0 1 12 6.1c.97 0 1.94.13 2.85.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16v3.05c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                </a>
              )}

              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ink-muted) transition-all duration-200 hover:border-(--color-primary)/40 hover:bg-(--color-primary) hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] fill-current"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45h3.56V9H3.54v11.45Z" />
                  </svg>
                </a>
              )}

              {profile.links.x && (
                <a
                  href={profile.links.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ink-muted) transition-all duration-200 hover:border-(--color-primary)/40 hover:bg-(--color-primary) hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[16px] w-[16px] fill-current"
                    aria-hidden="true"
                  >
                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.37l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.87h1.73L8.27 4H6.41L17.8 19.87Z" />
                  </svg>
                </a>
              )}

              {profile.links.instagram && (
                <a
                  href={profile.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ink-muted) transition-all duration-200 hover:border-(--color-primary)/40 hover:bg-(--color-primary) hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] fill-none stroke-current"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                  </svg>
                </a>
              )}

              {profile.links.facebook && (
                <a
                  href={profile.links.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border) text-(--color-ink-faint) transition-all duration-200 hover:border-(--color-primary)/40 hover:bg-(--color-primary) hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[17px] w-[17px] fill-current"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.04 1.46-4.04 4.14V10H7.5v3h2.73v8h3.27Z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          <p className="max-w-2xl font-display text-2xl font-medium leading-tight tracking-[-0.035em] text-(--color-ink) sm:text-3xl">
            Bring the problem. I'll figure out the rest.
          </p>
        </div>
      </section>
    </main>
  );
}
