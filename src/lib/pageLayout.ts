import { getModuleConfig, setModuleConfig } from "./moduleStore";
import { randomUUID } from "crypto";
export { SECTION_TYPES } from "./sectionTypes";

export type SectionEntry = { id: string; type: string };
export type PageLayout = { sections: SectionEntry[] };

const DEFAULT_LAYOUTS: Record<string, PageLayout> = {
  home: {
    sections: [
      { id: "home:slideshow", type: "slideshow" },
      { id: "home:rolunk", type: "rolunk" },
      { id: "home:steps", type: "steps" },
      { id: "home:popular", type: "popular" },
      { id: "home:egyedi", type: "egyedi" },
      { id: "home:contact", type: "contact" },
    ],
  },
};

export async function getPageLayout(pageId: string): Promise<PageLayout> {
  const stored = await getModuleConfig(`page:${pageId}`);
  if (Array.isArray((stored as { sections?: unknown }).sections)) {
    return stored as unknown as PageLayout;
  }
  return DEFAULT_LAYOUTS[pageId] ?? { sections: [] };
}

export async function savePageLayout(pageId: string, layout: PageLayout): Promise<void> {
  await setModuleConfig(`page:${pageId}`, layout as unknown as Record<string, unknown>);
}

export function newSectionId(type: string): string {
  return `section:${type}:${randomUUID().slice(0, 8)}`;
}
