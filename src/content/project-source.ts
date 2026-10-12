import { cache } from "react";
import { projects } from "./projects";

// Future CMS boundary: fetch the published catalog server-side, validate it with
// parseProjectCatalog and filter publication before returning any public data.
// React cache shares reads per request; it is not persistent CMS revalidation.
export const getProjects = cache(async () => projects);
