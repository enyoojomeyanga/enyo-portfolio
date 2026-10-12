import content from "./site-content.json";

// Presentation components depend on these fields rather than image file paths.
// The future CMS can replace this file-backed adapter with a database/storage adapter.
export type ImageAsset = {
  src: string;
  alt: string;
  objectPosition?: string;
};

const mediaContent = content as typeof content & { brandLogoDark?: ImageAsset | null };

export const siteContent: {
  heroIntro: string;
  brandLogo: ImageAsset | null;
  brandLogoDark: ImageAsset | null;
  projectImages: Record<string, ImageAsset | undefined>;
} = {
  heroIntro: content.heroIntro,
  brandLogo: content.brandLogo as ImageAsset | null,
  brandLogoDark: mediaContent.brandLogoDark ?? {
    src: "/brand/emeyanga-symbol-reversed.svg",
    alt: "EMEYANGA reversed brand symbol",
  },
  projectImages: content.projectImages as Record<string, ImageAsset | undefined>,
};
