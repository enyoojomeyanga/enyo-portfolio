import { EmailDraft } from "@/components/contact/email-draft";
import { Fragment } from "react";
import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { getContactContent } from "@/content/contact-content";
import { SocialIcon } from "@/components/social-icon";
import styles from "./contact.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getContactContent();
  return { title: `${content.seo.title} — ${profile.fullName}`, description: content.seo.description };
}
const platformLabels = { github: "GitHub", linkedin: "LinkedIn", x: "X", instagram: "Instagram", facebook: "Facebook" };
function publicUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password ? value : null; } catch { return null; }
}
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string | string[] }> }) {
  const params = await searchParams;
  const requestedTopic = typeof params.topic === "string" ? params.topic : null;
  const content = await getContactContent();
  const topics = [...content.topics.items].sort((a, b) => Number(b.id === requestedTopic) - Number(a.id === requestedTopic));
  const email = /^[^\s@?#]+@[^\s@?#]+\.[^\s@?#]+$/.test(profile.email) && !profile.email.startsWith("PLACEHOLDER") ? profile.email : null;
  const social = content.social.platforms.filter((platform) => platform === "github" || platform === "linkedin").flatMap((platform) => {
    const href = publicUrl(profile.links[platform]);
    return href ? [{ platform, href }] : [];
  });
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <div>
          <p className={styles.eyebrow}><span aria-hidden="true" />{content.intro.label}</p>
          <h1>{content.intro.heading.map((line, index) => <Fragment key={index}>{index > 0 && <br />}{index === content.intro.heading.length - 1 ? <em>{line}</em> : line}</Fragment>)}</h1>
          <p className={styles.lead}>{content.intro.description}</p>
        </div>
      </header>
      {content.topics.items.length > 0 && <section className={styles.topics} aria-labelledby="topics-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.topics.label}</p>
          <h2 id="topics-heading">{content.topics.heading}</h2>
          <p>{email ? content.topics.description : content.emailUnavailable}</p>
        </div>
        <div className={styles.topicGrid}>
          {topics.map((topic) => {
            const body = topic.template ?? `Hi Enyo-ojo,\n\n${topic.prompts.join("\n\n")}\n\nThanks,`;
            return <article key={topic.id} className={`${styles.topicCard} ${requestedTopic === topic.id ? styles.selectedTopic : ""}`}>
              {requestedTopic === topic.id && <p className={styles.topicHint}>Suggested for your enquiry</p>}
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              {email && <EmailDraft email={email} subject={topic.subject} template={body} topic={topic.title} />}
            </article>;
          })}
        </div>
      </section>}
      {social.length > 0 && <section className={styles.socialSection} aria-labelledby="social-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{content.social.label}</p>
          <h2 id="social-heading">{content.social.heading}</h2>
        </div>
        <div className={styles.socialLinks}>{social.map(({ platform, href }) => <a key={platform} href={href} target="_blank" rel="noopener noreferrer"><SocialIcon platform={platform} /><span className={styles.profileText}><strong>{platformLabels[platform]}</strong><span>{platform === "github" ? "Code & repositories" : "Professional profile"}</span></span><span className={styles.profileArrow} aria-hidden="true">↗</span></a>)}</div>
      </section>}
    </div>
  );
}
