import { getModuleConfig, setModuleConfig } from "./moduleStore";
export { slugify } from "./slugify";

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


export function pageKeyFromSlug(slug: string): string {
  return slug.replace(/^\//, "").replace(/\//g, ":");
}
