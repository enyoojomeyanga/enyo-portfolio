// Central source of truth for personal/professional identity.
// PLACEHOLDER values are marked explicitly and must be confirmed by
// Enyo-ojo before launch. Do not remove the markers without replacing
// them with real, confirmed information.

export const profile = {
  fullName: "Enyo-ojo Excel Meyanga",
  role: "AI Engineer",

  tagline:
    "Building intelligent systems that turn difficult, repetitive problems into simpler, more productive processes.",

  missionShort:
    "I work on the problems people bring me, and the ones I notice myself; turning them into working software.",

  // TODO(confirm): replace with real contact email
  email: "meyangaenyoojo@gmail.com",

  // TODO(confirm): add real profile URLs or remove the ones that don't apply
  links: {
    github: "https://github.com/enyoojomeyanga", // e.g. "https://github.com/username"
    linkedin: "https://linkedin.com/in/enyoojomeyanga", // e.g. "https://linkedin.com/in/username"
    facebook: "https://facebook.com/enyoojomeyanga",
    x:"https://x.com/enyoojomeyanga",
    instagram: "https://www.instagram.com/enyoojomeyanga/",
  },

  // TODO(confirm): location is optional — only include if Enyo-ojo wants it public
  location: null as string | null,

  currentFocus:
    "I'm currently focused on becoming a better AI Engineer. I build, break, learn, and repeat. Every single day.",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];