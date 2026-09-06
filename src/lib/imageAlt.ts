const BRAND = "Enzo Design";
const FALLBACK = "Egyedi kárpitozott bútor";

/** Semmitmondó címkék, amik alt-szövegként se a képolvasónak, se a Google Képeknek nem mondanak semmit. */
const GENERIC = /^(k[ée]p|k[ée]pek|gal[ée]ria|banner|slide|slideshow|kép bal|kép jobb fent|kép jobb lent|image|photo)(\s*\d+)?$/i;

/**
 * Egységes, leíró alt-szöveg képekhez.
 *
 * Sosem ad vissza üres vagy általános szöveget, és a sorszámmal gondoskodik róla,
 * hogy egy galéria képei ne kapjanak egymás után azonos alt-ot.
 */
export function imageAlt(subject?: string | null, index?: number): string {
  const raw = (subject || "").trim().replace(/\s+/g, " ");
  const base = !raw || GENERIC.test(raw) ? FALLBACK : raw;
  const withBrand = /enzo\s*design/i.test(base) ? base : `${base} – ${BRAND}`;
  return typeof index === "number" ? `${withBrand} (${index + 1}. kép)` : withBrand;
}
