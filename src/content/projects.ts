import localCatalog from "./projects.json";
import { parseProjectCatalog } from "./project-model";
export type { Project, ProjectStatus, Discipline, ThumbnailVariant, ProjectCover, ProjectScreenshot, ProjectDemo, WorkListing } from "./project-model";

// Compatibility for existing local-content consumers, including the homepage.
// Drafts never enter the public collection.
export const projects = parseProjectCatalog(localCatalog).filter((project) => project.publication === "published");
