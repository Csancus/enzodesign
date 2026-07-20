import { getModuleConfig } from "./moduleStore";

/**
 * Which product-detail page (if any) owns the images for a given card href.
 * Product pages under /butoraink/fotelek/<pid> and /butoraink/kanapek/<pid>
 * store their images in the `<pid>:images` module config (ProductPageTemplate).
 */
export function productIdFromHref(href: string): string | null {
  const m = href.match(/^\/butoraink\/(?:fotelek|kanapek)\/([a-z0-9-]+)$/);
  return m ? m[1] : null;
}

/**
 * Resolve the images to show for a summary/listing card by INHERITING them from
 * the linked product page's `<pid>:images` config (mainImage + gallery). Falls
 * back to the provided default images when the product page hasn't set any yet
 * (or when the href isn't a product-detail page).
 */
export async function resolveProductImages(href: string, fallback: string[]): Promise<string[]> {
  const pid = productIdFromHref(href);
  if (!pid) return fallback;
  const cfg = await getModuleConfig(`${pid}:images`);
  const main = cfg?.mainImage as string | undefined;
  const gallery = ((cfg?.gallery as { src: string }[] | undefined) ?? [])
    .map((g) => g.src)
    .filter(Boolean);
  const imgs = [main, ...gallery].filter(Boolean) as string[];
  // de-duplicate while preserving order
  const seen = new Set<string>();
  const unique = imgs.filter((s) => (seen.has(s) ? false : (seen.add(s), true)));
  return unique.length ? unique : fallback;
}
