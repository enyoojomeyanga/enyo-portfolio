import Link from "next/link";
import { Fragment } from "react";
import type { Metadata } from "next";
import { getAboutContent } from "@/content/about-content";
import { AboutSectionView } from "@/components/about/about-sections";
import styles from "./about.module.css";

export async function generateMetadata(): Promise<Metadata> {
  const content = await getAboutContent();
  return { title: content.seo.title, description: content.seo.description };
}

export default async function AboutPage() {
  const content = await getAboutContent();
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}><span aria-hidden="true" />{content.intro.label}</p>
        <h1>
          {content.intro.heading.map((line, index) => <Fragment key={index}>{index > 0 && <><br className={styles.desktopBreak} />{" "}</>}{line.accent ? <em>{line.text}</em> : line.text}</Fragment>)}
        </h1>
        <div className={content.intro.sideNote ? styles.introRow : styles.introSingle}>
          <p className={styles.lead}>{content.intro.lead}</p>
          {content.intro.sideNote && <p className={styles.sideNote}>{content.intro.sideNote}</p>}
        </div>
      </header>
      <nav className={styles.pageLinks} aria-label="On this About page">
        {content.sections.filter((section) => section.status === "published").map((section) => <Link key={section.id} href={`#about-${section.id}`}>{section.label}<span aria-hidden="true">↓</span></Link>)}
      </nav>
      {content.sections.filter((section) => section.status === "published").map((section) => <AboutSectionView key={section.id} section={section} />)}
    </div>
  );
}
