import content from "./site-content.json";

// Presentation components depend on these fields rather than image file paths.
// The future CMS can replace this file-backed adapter with a database/storage adapter.
export type ImageAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const siteContent: {
  heroIntro: string;
  brandLogo: ImageAsset | null;
  projectImages: Record<string, ImageAsset | undefined>;
} = {
  heroIntro: content.heroIntro,
  brandLogo: content.brandLogo as ImageAsset | null,
  projectImages: content.projectImages as Record<string, ImageAsset | undefined>,
};
