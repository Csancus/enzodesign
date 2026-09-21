/**
 * Egyetlen árforrás a termékoldalakhoz ÉS az összefoglaló oldalakhoz
 * (/kanape-arak, /sarokkanape, /agyazhato-kanape, /borkanape, /ulogarnitura, /chesterfield).
 *
 * Sorrend: a CMS-ben mentett `${pageId}:pricing` sor (ProductPageTemplate ártáblázat-szerkesztő)
 * felülírja a kódban lévő alapértelmezést. Így ha az admin a termékoldalon átír egy árat,
 * minden összefoglaló oldal automatikusan követi – nem kell kézzel tükrözni.
 */
import type { FlexPriceRow } from "@/components/PriceTable";
import { getModuleConfig } from "@/lib/moduleStore";

export type PriceEntry = { alap: number; bor?: number };
export type Pricing = {
  fotel?: PriceEntry;
  ketSzemelyes?: PriceEntry;
  haromSzemelyes?: PriceEntry;
  sarok?: PriceEntry;
  agyFunkcio?: number;
};

/** Kód-alapértelmezések termékoldalanként (pageId = ProductPageTemplate pageId). */
export const PRODUCT_PRICING: Record<string, Pricing> = {
  "cannes-kanapek": { sarok: { alap: 367340, bor: 787740 }, agyFunkcio: 190500 },
  "chesterfield-kanapek": { fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 },
  "design-kanapek": { fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 677510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 },
  "ivone-kanapek": { fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 677510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 },
  "joker-kanapek": { fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 },
  "new-york-kanapek": { fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 },
  "olds-club-kanapek": { fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 667510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 },
  "chesterfield-fotel": { fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 },
  "design-fotel": { fotel: { alap: 82820, bor: 120000 } },
  "ivone-fotel": { fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 667510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 },
  "joker-fotel": { fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 },
  "new-york-fotel": { fotel: { alap: 324380, bor: 421695 }, ketSzemelyes: { alap: 399810, bor: 619750 }, haromSzemelyes: { alap: 497890, bor: 847255 }, sarok: { alap: 735515, bor: 1156170 }, agyFunkcio: 190500 },
  "olds-club-fotel": { fotel: { alap: 360420, bor: 468545 } },
  "tovabbi-fotelek": { fotel: { alap: 82820 } },
  "design-butorok": { fotel: { alap: 360420, bor: 468545 }, ketSzemelyes: { alap: 444240, bor: 677510 }, haromSzemelyes: { alap: 553210, bor: 919170 }, sarok: { alap: 817240, bor: 1262412 }, agyFunkcio: 190500 },
};

/** Ártáblázat-sorok a ProductPageTemplate-hez (a CMS-szerkesztő ugyanezt a formát menti). */
export function pricingToRows(pricing: Pricing): FlexPriceRow[] {
  const rows: FlexPriceRow[] = [];
  const s = (n?: number) => (n ? String(n) : "");
  if (pricing.fotel) rows.push({ label: "Fotel", alap: s(pricing.fotel.alap), bor: s(pricing.fotel.bor) });
  if (pricing.ketSzemelyes) rows.push({ label: "2 személyes kanapé", alap: s(pricing.ketSzemelyes.alap), bor: s(pricing.ketSzemelyes.bor) });
  if (pricing.haromSzemelyes) rows.push({ label: "3 személyes kanapé", alap: s(pricing.haromSzemelyes.alap), bor: s(pricing.haromSzemelyes.bor) });
  if (pricing.sarok) rows.push({ label: "Sarokkanapé", alap: s(pricing.sarok.alap), bor: s(pricing.sarok.bor) });
  if (pricing.agyFunkcio) rows.push({ label: "+ Ágyfunkció", alap: s(pricing.agyFunkcio), bor: "" });
  return rows;
}

const num = (v: unknown): number | undefined => {
  const n = parseInt(String(v ?? "").replace(/\D/g, ""), 10);
  return Number.isFinite(n) && n > 0 ? n : undefined;
};

/** A CMS-ben mentett sorokból vissza a strukturált árba – a címke szövege alapján ismerjük fel a tételt. */
export function rowsToPricing(rows: FlexPriceRow[], fallback: Pricing = {}): Pricing {
  const out: Pricing = { ...fallback };
  for (const r of rows) {
    const label = (r.label || "").toLowerCase();
    const alap = num(r.alap);
    const bor = num(r.bor);
    if (label.startsWith("+") || /ágyfunkci/.test(label)) {
      if (alap) out.agyFunkcio = alap;
    } else if (/sarok/.test(label)) {
      if (alap) out.sarok = { alap, bor };
    } else if (/(^|\D)2\s*szem|kett[őo]s|kétszem/.test(label)) {
      if (alap) out.ketSzemelyes = { alap, bor };
    } else if (/(^|\D)3\s*szem|hárm|háromszem/.test(label)) {
      if (alap) out.haromSzemelyes = { alap, bor };
    } else if (/fotel|szék/.test(label)) {
      // a "Fotel" sor; a "Székek" sort (tovabbi-fotelek) nem írjuk a fotelre, ha van külön fotel sor
      if (alap && (!/szék/.test(label) || !out.fotel)) out.fotel = { alap, bor };
    }
  }
  return out;
}

/**
 * Az érvényes ár egy termékoldalhoz: CMS-felülírás, ha van, különben kód-alapértelmezés.
 * Kérésenként a moduleStore React cache-e dedupolja az olvasást.
 */
export async function getEffectivePricing(pageId: string): Promise<Pricing> {
  const fallback = PRODUCT_PRICING[pageId] ?? {};
  try {
    const cfg = await getModuleConfig(`${pageId}:pricing`);
    const rows = cfg?.rows as FlexPriceRow[] | undefined;
    if (rows && rows.length > 0) return rowsToPricing(rows, fallback);
  } catch {
    /* CMS nem elérhető: kód-alapértelmezés */
  }
  return fallback;
}

/** Több termékoldal ára egyszerre, pageId szerint indexelve. */
export async function getPricingMap(pageIds: string[]): Promise<Record<string, Pricing>> {
  const list = await Promise.all(pageIds.map((id) => getEffectivePricing(id)));
  return Object.fromEntries(pageIds.map((id, i) => [id, list[i]]));
}

/** "1 222 080 Ft" – nem törő szóköz helyett sima szóköz, hogy a keresőben és a schema-ban is jól nézzen ki. */
export const ft = (n: number) => `${n.toLocaleString("hu-HU").replace(/ /g, " ")} Ft`;
