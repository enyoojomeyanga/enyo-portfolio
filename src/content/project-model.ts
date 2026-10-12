export type ProjectStatus = "built" | "building" | "exploring";
export type Discipline = "engineering" | "graphic-design" | "local-visibility";
export type ThumbnailVariant = "terminal" | "portrait" | "app-mockup";
export type ProjectCover = { src: string; alt: string; objectPosition?: string };
export type ProjectScreenshot = { id: string; src: string; alt: string; width: number; height: number; caption: string };
export type ProjectDemo = { url: string; title: string; description: string };
export type Project = {
  slug: string; title: string; discipline: Discipline; status: ProjectStatus;
  publication: "draft" | "published"; stack: string[]; summary: string;
  problem: string; approach: string; implementation: string; result: string;
  learned: string; improve: string; repoUrl: string | null; liveUrl: string | null;
  thumbnail: ThumbnailVariant; cover: ProjectCover | null; gallery: ProjectScreenshot[]; demo: ProjectDemo | null;
};
export type WorkListing = Pick<Project, "slug" | "title" | "discipline" | "status" | "stack" | "summary" | "thumbnail" | "cover">;
export const projectStatuses: ProjectStatus[] = ["built", "building", "exploring"];
export function isProjectStatus(value: string): value is ProjectStatus {
  return projectStatuses.includes(value as ProjectStatus);
}
function fail(path: string, message: string): never { throw new Error(`Project content: ${path} ${message}`); }
function object(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return fail(path, "must be an object");
  return value as Record<string, unknown>;
}
function text(value: unknown, path: string, allowEmpty = false): string {
  if (typeof value !== "string" || (!allowEmpty && !value.trim())) return fail(path, "must be a non-empty string");
  // Historical content contains encoded apostrophes; CMS editors enter plain text.
  return value.replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
}
function url(value: unknown, path: string, local = false): string | null {
  if (value === null || value === undefined) return null;
  const result = text(value, path);
  if (/[\s\\\u0000-\u001f\u007f]/.test(result)) return fail(path, "contains invalid URL characters");
  if (local && result.startsWith("/") && !result.startsWith("//")) return result;
  try { const parsed = new URL(result); if (parsed.protocol === "https:" && !parsed.username && !parsed.password) return result; } catch {}
  return fail(path, local ? "must be a site-relative path or HTTPS URL" : "must be an HTTPS URL");
}
export function parseProjectCatalog(value: unknown): Project[] {
  const catalog = object(value, "catalog");
  if (catalog.schemaVersion !== 1) return fail("schemaVersion", "must be 1");
  if (!Array.isArray(catalog.projects)) return fail("projects", "must be an array");
  const projects = catalog.projects.map((entry: unknown, index: number): Project => {
    const path = `projects[${index}]`; const data = object(entry, path);
    const slug = text(data.slug, `${path}.slug`);
    if (!/^[a-z][a-z0-9-]*$/.test(slug)) return fail(`${path}.slug`, "must be a lowercase URL slug");
    if (data.publication !== "draft" && data.publication !== "published") return fail(`${path}.publication`, "must be draft or published");
    if (data.discipline !== "engineering" && data.discipline !== "graphic-design" && data.discipline !== "local-visibility") return fail(`${path}.discipline`, "is not a supported discipline");
    if (data.status !== "built" && data.status !== "building" && data.status !== "exploring") return fail(`${path}.status`, "must be built, building or exploring");
    if (data.thumbnail !== "terminal" && data.thumbnail !== "portrait" && data.thumbnail !== "app-mockup") return fail(`${path}.thumbnail`, "is not a supported thumbnail");
    if (!Array.isArray(data.stack)) return fail(`${path}.stack`, "must be an array");
    let cover: ProjectCover | null = null;
    if (data.cover !== null && data.cover !== undefined) {
      const image = object(data.cover, `${path}.cover`); const src = url(image.src, `${path}.cover.src`, true);
      if (!src) return fail(`${path}.cover.src`, "is required");
      cover = { src, alt: text(image.alt, `${path}.cover.alt`), ...(image.objectPosition === undefined ? {} : { objectPosition: text(image.objectPosition, `${path}.cover.objectPosition`) }) };
    }
    const gallery: ProjectScreenshot[] = [];
    if (data.gallery !== undefined) {
      if (!Array.isArray(data.gallery)) return fail(`${path}.gallery`, "must be an array");
      data.gallery.forEach((entry: unknown, imageIndex: number) => {
        const p = `${path}.gallery[${imageIndex}]`; const image = object(entry, p);
        const imageId = text(image.id, `${p}.id`);
        if (!/^[a-z][a-z0-9-]*$/.test(imageId)) return fail(`${p}.id`, "must be a lowercase stable ID");
        const src = url(image.src, `${p}.src`, true);
        if (!src) return fail(`${p}.src`, "is required");
        if (typeof image.width !== "number" || !Number.isInteger(image.width) || image.width <= 0) return fail(`${p}.width`, "must be a positive integer");
        if (typeof image.height !== "number" || !Number.isInteger(image.height) || image.height <= 0) return fail(`${p}.height`, "must be a positive integer");
        gallery.push({ id: imageId, src, alt: text(image.alt, `${p}.alt`), width: image.width, height: image.height, caption: image.caption === undefined ? "" : text(image.caption, `${p}.caption`, true) });
      });
      if (new Set(gallery.map((image) => image.id)).size !== gallery.length) return fail(`${path}.gallery`, "contains duplicate IDs");
    }
    let demo: ProjectDemo | null = null;
    if (data.demo !== undefined && data.demo !== null) {
      const item = object(data.demo, `${path}.demo`); const demoUrl = url(item.url, `${path}.demo.url`);
      if (!demoUrl) return fail(`${path}.demo.url`, "is required");
      demo = { url: demoUrl, title: text(item.title, `${path}.demo.title`), description: item.description === undefined ? "" : text(item.description, `${path}.demo.description`, true) };
    }
    return {
      slug, publication: data.publication, discipline: data.discipline, status: data.status,
      title: text(data.title, `${path}.title`), summary: text(data.summary, `${path}.summary`, data.publication === "draft"),
      stack: data.stack.map((tag, i) => text(tag, `${path}.stack[${i}]`)), thumbnail: data.thumbnail, cover, gallery, demo,
      problem: text(data.problem, `${path}.problem`, true), approach: text(data.approach, `${path}.approach`, true),
      implementation: text(data.implementation, `${path}.implementation`, true), result: text(data.result, `${path}.result`, true),
      learned: text(data.learned, `${path}.learned`, true), improve: text(data.improve, `${path}.improve`, true),
      repoUrl: url(data.repoUrl, `${path}.repoUrl`), liveUrl: url(data.liveUrl, `${path}.liveUrl`),
    };
  });
  if (new Set(projects.map((project) => project.slug)).size !== projects.length) return fail("projects", "contains duplicate slugs");
  return projects;
}
