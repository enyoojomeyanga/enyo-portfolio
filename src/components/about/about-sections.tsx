import { Fragment } from "react";
import Link from "next/link";
import type { AboutParagraph, AboutSection, AboutSectionBase, AboutStory } from "@/content/about-content-model";
import styles from "@/app/about/about.module.css";

export function HeadingLines({ lines }: { lines: string[] }) {
  return lines.map((line, index) => <Fragment key={index}>{index > 0 && <br />}{line}</Fragment>);
}

export function Paragraphs({ items }: { items: AboutParagraph[] }) {
  return items.map((paragraph) => (
    <p key={paragraph.id}>
      {paragraph.children.map((segment, index) => segment.href
        ? <Link key={index} href={segment.href}>{segment.text}</Link>
        : <Fragment key={index}>{segment.text}</Fragment>)}
    </p>
  ));
}

function SectionIntro({ section }: { section: AboutSectionBase }) {
  return (
    <div className={styles.sectionIntro}>
      <p className={styles.eyebrow}>{section.label}</p>
      <h2 id={`${section.id}-heading`}><HeadingLines lines={section.heading} /></h2>
      {section.intro && <p>{section.intro}</p>}
    </div>
  );
}

function PersonalStory({ story }: { story: AboutStory }) {
  if (story.status !== "published") return null;
  return (
    <aside className={styles.personalStory} aria-label={story.label}>
      <p className={styles.kicker}>{story.label}</p>
      <h3>{story.title}</h3>
      <Paragraphs items={story.paragraphs} />
    </aside>
  );
}

export function AboutSectionView({ section }: { section: AboutSection }) {
  if (section.status !== "published") return null;
  switch (section.type) {
    case "journey":
      return (
        <section className={styles.journey} aria-labelledby={`${section.id}-heading`}>
          <SectionIntro section={section} />
          <div className={styles.sectionBody}>
            <ol className={styles.timeline}>
              {section.milestones.map((milestone, index) => (
                <li key={milestone.id}>
                  <span className={styles.stage} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className={styles.kicker}>{milestone.label}</p>
                    <h3>{milestone.title}</h3>
                    <Paragraphs items={milestone.paragraphs} />
                  </div>
                </li>
              ))}
            </ol>
            <PersonalStory story={section.turningPoint} />
          </div>
        </section>
      );
    case "learning":
      return (
        <section className={styles.learning} aria-labelledby={`${section.id}-heading`}>
          <SectionIntro section={section} />
          <div className={styles.learningDetail}>
            <p className={styles.listLabel}>{section.checksLabel}</p>
            <ul className={styles.checks}>
              {section.checks.map((check) => (
                <li key={check.id}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
                  <div><h3>{check.title}</h3><p>{check.text}</p></div>
                </li>
              ))}
            </ul>
            <PersonalStory story={section.example} />
          </div>
        </section>
      );
    case "prose":
      return (
        <section className={styles.interests} aria-labelledby={`${section.id}-heading`}>
          <SectionIntro section={section} />
          <div className={styles.prose}><Paragraphs items={section.paragraphs} /></div>
        </section>
      );
    case "collaboration":
      return (
        <section className={styles.next} aria-labelledby={`${section.id}-heading`}>
          <div className={styles.nextCopy}>
            <p className={styles.eyebrow}>{section.label}</p>
            <h2 id={`${section.id}-heading`}><HeadingLines lines={section.heading} /></h2>
            <div className={styles.nextParagraphs}><Paragraphs items={section.paragraphs} /></div>
            {section.opportunities.length > 0 && (
              <ul className={styles.opportunities}>
                {section.opportunities.map((opportunity) => <li key={opportunity.id}><h3>{opportunity.title}</h3><p>{opportunity.text}</p></li>)}
              </ul>
            )}
          </div>
          <div className={styles.actions}>
            {section.actions.map((action) => <Link key={action.id} className={action.variant === "primary" ? styles.primary : styles.secondary} href={action.href}>{action.label}<span aria-hidden="true">{action.variant === "primary" ? "→" : "↗"}</span></Link>)}
          </div>
        </section>
      );
  }
}
