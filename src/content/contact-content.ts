import { cache } from "react";
import source from "./contact-content.json";

export type SocialPlatform = "github" | "linkedin" | "x" | "instagram" | "facebook";
export type ContactTopic = { id: string; title: string; description: string; subject: string; prompts: string[]; template?: string };
export type ContactContent = {
  schemaVersion: 1;
  seo: { title: string; description: string };
  intro: { label: string; heading: string[]; description: string };
  emailUnavailable: string;
  topics: { label: string; heading: string; description: string; items: ContactTopic[] };
  social: { label: string; heading: string; platforms: SocialPlatform[] };
};
function object(value: unknown, path: string): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw Error(`Contact content: ${path} must be an object`);
  return value as Record<string, unknown>;
}
function text(value: unknown, path: string): string {
  if (typeof value !== "string" || !value.trim()) throw Error(`Contact content: ${path} must be a non-empty string`);
  return value;
}
function strings(value: unknown, path: string): string[] {
  if (!Array.isArray(value) || !value.length) throw Error(`Contact content: ${path} must be a non-empty array`);
  return value.map((entry, index) => text(entry, `${path}[${index}]`));
}
export function parseContactContent(value: unknown): ContactContent {
  const root = object(value, "page");
  if (root.schemaVersion !== 1) throw Error("Contact content: schemaVersion must be 1");
  const seo = object(root.seo, "seo"), intro = object(root.intro, "intro"), topics = object(root.topics, "topics"), social = object(root.social, "social");
  if (!Array.isArray(topics.items)) throw Error("Contact content: topics.items must be an array");
  const items = topics.items.map((entry, index) => {
    const p = `topics.items[${index}]`, item = object(entry, p), id = text(item.id, `${p}.id`);
    if (!/^[a-z][a-z0-9-]*$/.test(id)) throw Error(`Contact content: ${p}.id must be a stable lowercase ID`);
    return { id, title: text(item.title, `${p}.title`), description: text(item.description, `${p}.description`), subject: text(item.subject, `${p}.subject`), prompts: strings(item.prompts, `${p}.prompts`), ...(item.template === undefined ? {} : { template: text(item.template, `${p}.template`) }) };
  });
  if (new Set(items.map((item) => item.id)).size !== items.length) throw Error("Contact content: topic IDs must be unique");
  const platforms = strings(social.platforms, "social.platforms").map((value): SocialPlatform => {
    if (value !== "github" && value !== "linkedin" && value !== "x" && value !== "instagram" && value !== "facebook") throw Error(`Contact content: unsupported platform ${value}`);
    return value;
  });
  if (new Set(platforms).size !== platforms.length) throw Error("Contact content: social platforms must be unique");
  return {
    schemaVersion: 1,
    seo: { title: text(seo.title, "seo.title"), description: text(seo.description, "seo.description") },
    intro: { label: text(intro.label, "intro.label"), heading: strings(intro.heading, "intro.heading"), description: text(intro.description, "intro.description") },
    emailUnavailable: root.emailUnavailable === undefined ? text(object(root.direct, "direct").emailUnavailable, "direct.emailUnavailable") : text(root.emailUnavailable, "emailUnavailable"),
    topics: { label: text(topics.label, "topics.label"), heading: text(topics.heading, "topics.heading"), description: text(topics.description, "topics.description"), items },
    social: { label: text(social.label, "social.label"), heading: text(social.heading, "social.heading"), platforms },
  };
}
// Future CMS source boundary; metadata and page share one validated request.
export const getContactContent = cache(async () => parseContactContent(source));
