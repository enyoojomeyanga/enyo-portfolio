import { cache } from "react";
import localContent from "./about-content.json";
import { parseAboutContent, type AboutPageContent } from "./about-content-model";

// The only source adapter. Replace localContent with your CMS's published-page
// response later, map it to AboutPageContent and keep validation at this boundary.
// React cache shares the result between the page and generateMetadata per request.
// This is not an authenticated draft-preview or CMS persistence layer.
export const getAboutContent = cache(async (): Promise<AboutPageContent> => {
  return parseAboutContent(localContent);
});
