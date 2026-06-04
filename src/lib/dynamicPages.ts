import { getModuleConfig, setModuleConfig } from "./moduleStore";

export type DynamicPage = {
  id: string;
  title: string;
  slug: string;
  addedToNav: boolean;
  navParent: string | null;
  createdAt: number;
};

export async function getDynamicPages(): Promise<DynamicPage[]> {
  const stored = await getModuleConfig("site:dynamic-pages");
  return (stored.pages as DynamicPage[]) ?? [];
}

export async function saveDynamicPages(pages: DynamicPage[]): Promise<void> {
  await setModuleConfig("site:dynamic-pages", { pages });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i")
    .replace(/ó/g, "o").replace(/ö/g, "o").replace(/ő/g, "o")
    .replace(/ú/g, "u").replace(/ü/g, "u").replace(/ű/g, "u")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function pageKeyFromSlug(slug: string): string {
  return slug.replace(/^\//, "").replace(/\//g, ":");
}
