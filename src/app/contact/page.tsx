import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: `Contact — ${profile.fullName}`,
};

const REASONS = [
  {
    trigger: "You have a technical problem.",
    action: "Tell me what it is and let's understand it before anything else.",
  },
  {
    trigger: "You're interested in hiring or working with me.",
    action: "Reach out and let's talk about what you need.",
  },
  {
    trigger: "You have an opportunity or referral.",
    action: "I'd genuinely like to hear about it.",
  },
];

export default function ContactPage() {
  const hasEmail = !profile.email.startsWith("PLACEHOLDER");

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-(--color-primary)">
        Contact
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-(--color-ink) sm:text-4xl">
        Let&apos;s talk about it
      </h1>

      <ul className="mt-10 space-y-6">
        {REASONS.map((reason) => (
          <li
            key={reason.trigger}
            className="rounded-lg border border-(--color-border) bg-(--color-surface) p-5"
          >
            <p className="font-medium text-(--color-ink)">{reason.trigger}</p>
            <p className="mt-1 text-sm text-(--color-ink-muted)">
              {reason.action}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-lg border border-(--color-border-strong) bg-(--color-surface) p-6">
        {hasEmail ? (
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-lg text-(--color-primary) hover:text-(--color-primary-hover)"
          >
            {profile.email}
          </a>
        ) : (
          <p className="font-mono text-sm text-(--color-ink-faint)">
            [ Contact email pending — add real address in
            src/content/profile.ts ]
          </p>
        )}

        <div className="mt-4 flex gap-4 font-mono text-sm">
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-(--color-ink-muted) hover:text-(--color-primary)"
            >
              GitHub
            </a>
          )}
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-(--color-ink-muted) hover:text-(--color-primary)"
            >
              LinkedIn
            </a>
          )}
          {profile.links.facebook && (
            <a
              href={profile.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-(--color-ink-muted) hover:text-(--color-primary)"
            >
              Facebook
            </a>
          )}
          {profile.links.x && (
            <a
              href={profile.links.x}
              target="_blank"
              rel="noreferrer"
              className="text-(--color-ink-muted) hover:text-(--color-primary)"
            >
              X(formally Twitter)
            </a>
          )}
          {profile.links.instagram && (
            <a
              href={profile.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-(--color-ink-muted) hover:text-(--color-primary)"
            >
              Intagram
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
