import Image from "next/image";
import type { WorkListing } from "@/content/projects";
import { siteContent } from "@/content/site-content";
import { HomeArtwork } from "@/components/home/home-artwork";
import styles from "@/app/work/work.module.css";

export function workImage(project: WorkListing) {
  return project.cover ?? siteContent.projectImages[project.slug];
}
export function WorkMedia({ project, sizes }: { project: WorkListing; sizes: string }) {
  const image = workImage(project);
  if (image?.src && image.alt) return (
    <Image src={image.src} alt={image.alt} fill sizes={sizes}
      className={styles.image} style={{ objectPosition: image.objectPosition ?? "center" }}
      unoptimized={image.src.startsWith("https://") || image.src.startsWith("http://")} />
  );
  if (project.slug === "go-reloaded") return (
    <div className="enyo-art enyo-art-terminal" aria-hidden="true">
      <div className="enyo-art-terminal-window">
        <div className="enyo-art-chrome"><i /><i /><i /><span>go-reloaded · text transformation</span></div>
        <div className="enyo-terminal-code"><span>$ go run . input.txt output.txt</span><strong>66 (hex) → 102</strong><span>text processing / Go</span></div>
      </div>
      <div className="enyo-art-orbit" />
    </div>
  );
  if (["portfolio-website", "ai-study-companion", "ascii-art-generator"].includes(project.slug)) return <HomeArtwork slug={project.slug} />;
  return <div className={styles.genericArtwork} aria-hidden="true"><span>{project.title.slice(0, 1)}</span></div>;
}
