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

const HOME_INJECT: SectionEntry[] = [
  { id: "global:reviews", type: "reviews" },
  { id: "global:faq",     type: "faq" },
];

export async function getPageLayout(pageId: string): Promise<PageLayout> {
  const stored = await getModuleConfig(`page:${pageId}`);
  if (!Array.isArray((stored as { sections?: unknown }).sections)) {
    return DEFAULT_LAYOUTS[pageId] ?? { sections: [] };
  }
  const layout = stored as unknown as PageLayout;

  if (pageId === "home") {
    const ids = new Set(layout.sections.map((s) => s.id));
    const missing = HOME_INJECT.filter((s) => !ids.has(s.id));
    if (missing.length > 0) {
      const contactIdx = layout.sections.findIndex((s) => s.type === "contact");
      const insertAt = contactIdx >= 0 ? contactIdx : layout.sections.length;
      layout.sections.splice(insertAt, 0, ...missing);
      await savePageLayout(pageId, layout);
    }
  }

  return layout;
}

export async function savePageLayout(pageId: string, layout: PageLayout): Promise<void> {
  await setModuleConfig(`page:${pageId}`, layout as unknown as Record<string, unknown>);
}

export function newSectionId(type: string): string {
  return `section:${type}:${randomUUID().slice(0, 8)}`;
}
