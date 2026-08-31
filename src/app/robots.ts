import type { MetadataRoute } from "next";

// TODO(confirm): keep in sync with SITE_URL in src/app/layout.tsx and src/app/sitemap.ts
const SITE_URL = "https://enyo-portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}