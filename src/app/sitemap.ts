import type { MetadataRoute } from "next";
import { getProjects } from "@/content/project-source";
import { SITE_URL } from "@/lib/site-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  return [
    ...["", "/about", "/work", "/contact"].map((path) => ({ url: `${SITE_URL}${path}` })),
    ...projects.filter((project) => project.publication === "published").map((project) => ({ url: `${SITE_URL}/work/${project.slug}` })),
  ];
  // Add lastModified only when the content source has real modification dates.
}
