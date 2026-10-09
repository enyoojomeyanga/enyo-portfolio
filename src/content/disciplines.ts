import type { Discipline } from "@/content/projects";

// One catalog for the homepage service cards and both project filters.
// Later, the CMS can supply this catalog without changing UI components.
export type DisciplineEntry = {
  slug: Discipline;
  name: string;
  description: string;
  icon: "cpu" | "palette" | "pin";
  color: "blue" | "purple" | "green";
};

export const disciplines: DisciplineEntry[] = [
  {
    slug: "engineering",
    name: "Engineering & AI",
    description: "Intelligent solutions for real-world problems, from prototypes to practical tools.",
    icon: "cpu",
    color: "blue",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    description: "Visual identities that communicate clearly and make an impression.",
    icon: "palette",
    color: "purple",
  },
  {
    slug: "local-visibility",
    name: "Local Business Visibility",
    description: "Helping local businesses strengthen their presence and get found online.",
    icon: "pin",
    color: "green",
  },
];

export function isDiscipline(value: string): value is Discipline {
  return disciplines.some((discipline) => discipline.slug === value);
}
