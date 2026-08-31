import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

// TODO(confirm): keep in sync with SITE_URL in src/app/layout.tsx and src/app/robots.ts
const SITE_URL = "https://enyo-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/work", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}