export type PublicationStatus = "draft" | "published";
export type TextSegment = { text: string; href?: string };
export type AboutParagraph = { id: string; children: TextSegment[] };
export type AboutStory = { status: PublicationStatus; label: string; title: string; paragraphs: AboutParagraph[] };
export type AboutSectionBase = { id: string; status: PublicationStatus; label: string; heading: string[]; intro?: string };
export type JourneySection = AboutSectionBase & {
  type: "journey";
  milestones: { id: string; label: string; title: string; paragraphs: AboutParagraph[] }[];
  turningPoint: AboutStory;
};
export type LearningSection = AboutSectionBase & {
  type: "learning";
  checksLabel: string;
  checks: { id: string; title: string; text: string }[];
  example: AboutStory;
};
export type ProseSection = AboutSectionBase & { type: "prose"; paragraphs: AboutParagraph[] };
export type CollaborationSection = AboutSectionBase & {
  type: "collaboration";
  paragraphs: AboutParagraph[];
  opportunities: { id: string; title: string; text: string }[];
  actions: { id: string; label: string; href: string; variant: "primary" | "secondary" }[];
};
export type AboutSection = JourneySection | LearningSection | ProseSection | CollaborationSection;
export type AboutPageContent = {
  schemaVersion: 1;
  seo: { title: string; description: string };
  intro: { label: string; heading: { text: string; accent: boolean }[]; lead: string; sideNote: string };
  sections: AboutSection[];
};

// Treat a future CMS response as unknown until it passes the same validation
// as the local JSON. Errors identify the exact editable field to correct.
function fail(path: string, message: string): never {
  throw new Error(`About content: ${path} ${message}`);
}
function object(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return fail(path, "must be an object");
  return value as Record<string, unknown>;
}
function text(value: unknown, path: string, allowEmpty = false): string {
  if (typeof value !== "string" || (!allowEmpty && !value.trim())) return fail(path, "must be a non-empty string");
  return value;
}
function array(value: unknown, path: string, min = 0): unknown[] {
  if (!Array.isArray(value) || value.length < min) return fail(path, `must be an array with at least ${min} item(s)`);
  return value;
}
function id(value: unknown, path: string): string {
  const result = text(value, path);
  if (!/^[a-z][a-z0-9-]*$/.test(result)) return fail(path, "must use lowercase letters, digits and hyphens, starting with a letter");
  return result;
}
function unique<T extends { id: string }>(items: T[], path: string): T[] {
  if (new Set(items.map((item) => item.id)).size !== items.length) return fail(path, "contains duplicate IDs");
  return items;
}
function status(value: unknown, path: string): PublicationStatus {
  if (value !== "draft" && value !== "published") return fail(path, "must be draft or published");
  return value;
}
function href(value: unknown, path: string): string {
  const result = text(value, path);
  if (/[\s\\\u0000-\u001f\u007f]/.test(result)) return fail(path, "contains invalid URL characters");
  if (result.startsWith("/") && !result.startsWith("//")) return result;
  try {
    const url = new URL(result);
    if (url.protocol === "https:" && !url.username && !url.password) return result;
  } catch { /* Report a field error below. */ }
  return fail(path, "must be a site-relative path or an HTTPS URL");
}
function paragraphs(value: unknown, path: string, min = 0): AboutParagraph[] {
  return unique(array(value, path, min).map((entry, index) => {
    const p = `${path}[${index}]`;
    const data = object(entry, p);
    return {
      id: id(data.id, `${p}.id`),
      children: array(data.children, `${p}.children`, 1).map((child, childIndex) => {
        const c = `${p}.children[${childIndex}]`;
        const segment = object(child, c);
        return { text: text(segment.text, `${c}.text`), ...(segment.href === undefined ? {} : { href: href(segment.href, `${c}.href`) }) };
      }),
    };
  }), path);
}
function story(value: unknown, path: string): AboutStory {
  const data = object(value, path);
  const publication = status(data.status, `${path}.status`);
  return {
    status: publication,
    label: text(data.label, `${path}.label`),
    title: text(data.title, `${path}.title`, publication === "draft"),
    paragraphs: paragraphs(data.paragraphs, `${path}.paragraphs`, publication === "published" ? 1 : 0),
  };
}
function section(value: unknown, path: string): AboutSection {
  const data = object(value, path);
  const base: AboutSectionBase = {
    id: id(data.id, `${path}.id`),
    status: status(data.status, `${path}.status`),
    label: text(data.label, `${path}.label`),
    heading: array(data.heading, `${path}.heading`, 1).map((line, index) => text(line, `${path}.heading[${index}]`)),
    ...(data.intro === undefined ? {} : { intro: text(data.intro, `${path}.intro`, true) }),
  };
  const min = base.status === "published" ? 1 : 0;
  switch (data.type) {
    case "journey":
      return {
        ...base, type: "journey",
        milestones: unique(array(data.milestones, `${path}.milestones`, min).map((entry, index) => {
          const p = `${path}.milestones[${index}]`;
          const milestone = object(entry, p);
          return { id: id(milestone.id, `${p}.id`), label: text(milestone.label, `${p}.label`), title: text(milestone.title, `${p}.title`), paragraphs: paragraphs(milestone.paragraphs, `${p}.paragraphs`, 1) };
        }), `${path}.milestones`),
        turningPoint: story(data.turningPoint, `${path}.turningPoint`),
      };
    case "learning":
      return {
        ...base, type: "learning", checksLabel: text(data.checksLabel, `${path}.checksLabel`),
        checks: unique(array(data.checks, `${path}.checks`, min).map((entry, index) => {
          const p = `${path}.checks[${index}]`; const check = object(entry, p);
          return { id: id(check.id, `${p}.id`), title: text(check.title, `${p}.title`), text: text(check.text, `${p}.text`) };
        }), `${path}.checks`),
        example: story(data.example, `${path}.example`),
      };
    case "prose":
      return { ...base, type: "prose", paragraphs: paragraphs(data.paragraphs, `${path}.paragraphs`, min) };
    case "collaboration":
      return {
        ...base, type: "collaboration", paragraphs: paragraphs(data.paragraphs, `${path}.paragraphs`, min),
        opportunities: unique(array(data.opportunities, `${path}.opportunities`).map((entry, index) => {
          const p = `${path}.opportunities[${index}]`; const opportunity = object(entry, p);
          return { id: id(opportunity.id, `${p}.id`), title: text(opportunity.title, `${p}.title`), text: text(opportunity.text, `${p}.text`) };
        }), `${path}.opportunities`),
        actions: unique(array(data.actions, `${path}.actions`, min).map((entry, index) => {
          const p = `${path}.actions[${index}]`; const action = object(entry, p);
          if (action.variant !== "primary" && action.variant !== "secondary") return fail(`${p}.variant`, "must be primary or secondary");
          return { id: id(action.id, `${p}.id`), label: text(action.label, `${p}.label`), href: href(action.href, `${p}.href`), variant: action.variant };
        }), `${path}.actions`),
      };
    default:
      return fail(`${path}.type`, "must be journey, learning, prose or collaboration");
  }
}
export function parseAboutContent(value: unknown): AboutPageContent {
  const data = object(value, "page");
  if (data.schemaVersion !== 1) return fail("schemaVersion", "must be 1");
  const seo = object(data.seo, "seo"); const intro = object(data.intro, "intro");
  return {
    schemaVersion: 1,
    seo: { title: text(seo.title, "seo.title"), description: text(seo.description, "seo.description") },
    intro: {
      label: text(intro.label, "intro.label"),
      heading: array(intro.heading, "intro.heading", 1).map((entry, index) => {
        const p = `intro.heading[${index}]`; const line = object(entry, p);
        if (line.accent !== undefined && typeof line.accent !== "boolean") return fail(`${p}.accent`, "must be boolean");
        return { text: text(line.text, `${p}.text`), accent: line.accent === true };
      }),
      lead: text(intro.lead, "intro.lead"), sideNote: text(intro.sideNote, "intro.sideNote", true),
    },
    sections: unique(array(data.sections, "sections", 1).map((entry, index) => section(entry, `sections[${index}]`)), "sections"),
  };
}
