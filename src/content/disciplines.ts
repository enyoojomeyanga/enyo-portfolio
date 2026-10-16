import type { Discipline } from "@/content/projects";

// One catalog for the homepage service cards and both project filters.
// Later, the CMS can supply this catalog without changing UI components.
export type DisciplineEntry = {
  slug: Discipline;
  name: string;
  description: string;
  icon: "cpu" | "palette" | "pin";
  color: "blue" | "purple" | "green";
  focus: string;
  examples: string[];
  contactTopic: string;
};

export const disciplines: DisciplineEntry[] = [
  {
    slug: "engineering",
    name: "Engineering & AI",
    description: "Intelligent solutions for real-world problems, from prototypes to practical tools.",
    icon: "cpu",
    color: "blue",
    focus: "Software that handles practical tasks, with AI considered where it can help. Browse the working tools and projects in progress below.",
    examples: ["Task automation", "Practical software tools", "AI-assisted workflows"],
    contactTopic: "technical",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    description: "Visual identities that communicate clearly and make an impression.",
    icon: "palette",
    color: "purple",
    focus: "Visual communication for a business, product or idea. Start with what the audience needs to understand, then discuss the design that supports it.",
    examples: ["Brand visuals", "Social media graphics", "Clear visual communication"],
    contactTopic: "design-visibility",
  },
  {
    slug: "local-visibility",
    name: "Local Business Visibility",
    description: "Helping local businesses strengthen their presence and get found online.",
    icon: "pin",
    color: "green",
    focus: "A clearer online presence for a local business. Discuss how people find your business, what information they need, and where your current presence needs attention.",
    examples: ["Google Business Profile", "Business information", "Local discovery"],
    contactTopic: "design-visibility",
  },
];

export function isDiscipline(value: string): value is Discipline {
  return disciplines.some((discipline) => discipline.slug === value);
}
