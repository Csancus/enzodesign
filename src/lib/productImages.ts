import { getModuleConfig } from "./moduleStore";

/**
 * Product-detail page id from a card href, or null.
 * /butoraink/fotelek/<pid> and /butoraink/kanapek/<pid> store images in `<pid>:images`.
 */
export function productIdFromHref(href: string): string | null {
  const m = href.match(/^\/butoraink\/(?:fotelek|kanapek)\/([a-z0-9-]+)$/);
  return m ? m[1] : null;
}

/** Collect images from a module config, supporting both product ({mainImage, gallery:[{src}]}) and gallery/card ({images:[{src}]}) shapes. */
async function imagesFromConfig(id: string): Promise<string[]> {
  const cfg = await getModuleConfig(id);
  const main = typeof cfg?.mainImage === "string" ? [cfg.mainImage as string] : [];
  const gallery = ((cfg?.gallery as { src: string }[] | undefined) ?? []).map((g) => g?.src);
  const images = ((cfg?.images as { src: string }[] | undefined) ?? []).map((g) => g?.src);
  const all = [...main, ...gallery, ...images].filter(Boolean) as string[];
  const seen = new Set<string>();
  return all.filter((s) => (seen.has(s) ? false : (seen.add(s), true)));
}

/**
 * Resolve the images a summary/listing card should show by INHERITING them from
 * the page the card links to (single source of truth). Falls back to the given
 * defaults when the source page has no images set yet.
 *
 * Sources by href:
 *  - /butoraink/(fotelek|kanapek)/<pid>          → `<pid>:images` (product page)
 *  - /butoraink/egyedi-butor                     → `egyedi-butor:gallery`
 *  - /karpitozott-butor-uzleti-ugyfeleknek       → `uzleti:refs`
 *  - /butoraink/franciaagyak       (+ cardId)    → `franciaagyak-card:<cardId>`
 *  - /butoraink/szek-zsamoly-falvedo (+ cardId)  → `szek-card:<cardId>`
 */
export async function resolveProductImages(href: string, fallback: string[], cardId?: string): Promise<string[]> {
  let sourceId: string | null = null;
  const pid = productIdFromHref(href);
  if (pid) sourceId = `${pid}:images`;
  else if (href === "/butoraink/egyedi-butor") sourceId = "egyedi-butor:gallery";
  else if (href === "/karpitozott-butor-uzleti-ugyfeleknek") sourceId = "uzleti:refs";
  else if (cardId && href === "/butoraink/franciaagyak") sourceId = `franciaagyak-card:${cardId}`;
  else if (cardId && href === "/butoraink/szek-zsamoly-falvedo") sourceId = `szek-card:${cardId}`;

  if (!sourceId) return fallback;
  const imgs = await imagesFromConfig(sourceId);
  return imgs.length ? imgs : fallback;
}
