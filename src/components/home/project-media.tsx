import Image from "next/image";
import type { Project } from "@/content/projects";
import { siteContent } from "@/content/site-content";
import { HomeArtwork } from "./home-artwork";

export function ProjectMedia({ project }: { project: Project }) {
  const image = project.cover ?? siteContent.projectImages[project.slug];

  if (!image?.src || !image.alt) {
    return <HomeArtwork slug={project.slug} />;
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes="(max-width: 720px) 90vw, (max-width: 980px) 45vw, 25vw"
      className="enyo-project-image"
      style={{ objectPosition: image.objectPosition ?? "center" }}
      // CMS-hosted media may come from domains not known at build time.
      unoptimized={image.src.startsWith("http://") || image.src.startsWith("https://")}
    />
  );
}
