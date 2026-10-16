import { profile } from "@/content/profile";
import { getProjects } from "@/content/project-source";
import { siteContent } from "@/content/site-content";
import { SITE_URL } from "@/lib/site-url";

// Regenerated on deployment from the same published catalog as the Work page.
export const dynamic = "force-static";

function line(value: string) {
  return value.replace(/&apos;|&#39;/g, "'").replace(/&amp;/g, "&").replace(/[\r\n]+/g, " ").replace(/([\\[\]])/g, "\\$1").trim();
}

export async function GET() {
  const projects = (await getProjects()).filter((project) => project.publication === "published");
  const summary = siteContent.heroIntro.trim() || "A personal portfolio covering engineering, AI-assisted development, visual communication and digital visibility.";
  const content = [
    `# ${line(profile.fullName)}`,
    "",
    `> ${line(summary)}`,
    "",
    "Projects distinguish Built (working projects), Building (work in progress), and Exploring (early investigation). Illustrations are not product screenshots. Use each project's current result and limitations when describing the work.",
    "",
    "## Pages",
    "",
    `- [Home](${SITE_URL}/): Identity, areas of work and selected projects.`,
    `- [About](${SITE_URL}/about): Background, learning and the choices behind the work.`,
    `- [Work](${SITE_URL}/work): Published projects by discipline and progress.`,
    `- [Contact](${SITE_URL}/contact): Topic-specific enquiries and professional profiles.`,
    "",
    "## Projects",
    "",
    ...projects.map((project) => `- [${line(project.title)}](${SITE_URL}/work/${project.slug}): ${project.status}. ${line(project.summary)}`),
    "",
    "## Optional",
    "",
    ...(["github", "linkedin"] as const).flatMap((platform) => {
      const href = profile.links[platform];
      return href ? [`- [${platform === "github" ? "GitHub" : "LinkedIn"}](${href}): Public ${platform === "github" ? "code and repositories" : "professional profile"}.`] : [];
    }),
    "",
  ].join("\n");
  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8", "X-Content-Type-Options": "nosniff" } });
}
