/**
 * Kattintásmérés a /szamok oldalhoz – a Supabase `module_configs` tábla egyetlen
 * sorában (`szamok:counters`) tárolt JSON-nal.
 *
 * A tárolt JSON alakja:
 *   {
 *     "2026-09-09": { "rendeles_gomb": 4, "telefon_klikk": 2 },     // napi összesítés
 *     "_oldalak":   { "telefon_klikk": { "/": 2 } },                // melyik oldalról
 *     "_cimkek":    { "rendeles_gomb": { "Fejléc": 3 } },           // mire kattintottak
 *     "_teszt":     { days: {...}, pages: {...}, labels: {...} }    // fejlesztői alapvonal
 *   }
 *
 * FONTOS – adatvédelem: kizárólag aggregált darabszámot tárolunk esemény, oldal
 * és címke szerint. Se IP, se user agent, se azonosító, se süti, se localStorage.
 * Egyetlen sorból sem lehet visszakövetkeztetni arra, hogy ki kattintott.
 *
 * Párhuzamos írás: optimista zárolás az `updated_at` oszlopra (feltételes UPDATE),
 * ütközésnél újraolvasunk és újrapróbálunk. Modul-szintű cache szándékosan NINCS
 * (Vercel multi-instance – lásd moduleStore.ts).
 */
import { getSupabaseAdmin } from "@/lib/supabase";

export const ROW_ID = "szamok:counters";
export const PAGES_KEY = "_oldalak";
export const LABELS_KEY = "_cimkek";
export const TEST_KEY = "_teszt";

/** Engedélyezett eseménynevek – bármi más elutasítva. */
export const EVENTS = [
  "rendeles_gomb",
  "ajanlatkeres_gomb",
  "telefon_klikk",
  "email_klikk",
  "hero_gomb",
  "cta_gomb",
  "termek_kartya",
  "menu_klikk",
  "urlap_kuldes",
  "urlap_siker",
  "social_klikk",
] as const;

export type EventName = (typeof EVENTS)[number];

/** Emberi nevek a /szamok oldal fejlécéhez. */
export const EVENT_LABELS: Record<EventName, string> = {
  rendeles_gomb: "„Rendelés” gomb",
  ajanlatkeres_gomb: "Ajánlatkérés gomb",
  telefon_klikk: "Telefonszám",
  email_klikk: "E-mail cím",
  hero_gomb: "Hero / slideshow gomb",
  cta_gomb: "Egyéb CTA gomb",
  termek_kartya: "Termékkártya",
  menu_klikk: "Menüpont",
  urlap_kuldes: "Űrlap elküldve",
  urlap_siker: "Sikeres űrlapküldés",
  social_klikk: "Social ikon",
};

export const META_KEYS = [PAGES_KEY, LABELS_KEY, TEST_KEY];

type Counters = Record<string, unknown>;
type DayCounts = Record<string, number>;
type Breakdown = Record<string, Record<string, number>>;

/** Budapest szerinti YYYY-MM-DD (a szerver UTC-ben jár). */
export function today(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Budapest",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * Útvonal-tisztítás. Csak a saját oldalaink útvonalát fogadjuk el, hogy szemét
 * ne tudja felfújni a tárolót. Query stringet és hash-t eldobunk.
 */
export function cleanPath(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  let p = raw.split("?")[0].split("#")[0].trim();
  try {
    p = decodeURIComponent(p);
  } catch {
    /* marad ahogy jött */
  }
  if (!p.startsWith("/")) return null;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  if (p === "") p = "/";
  if (p.length > 120) return null;
  // ékezetes slug is előfordul (pl. /blog/butorbolt-nagykanizsán)
  if (!/^\/[\p{L}\p{N}/\-._]*$/u.test(p)) return null;
  return p;
}

/**
 * Címke-tisztítás: melyik gombra, termékre, menüpontra kattintottak. Csak a
 * saját felületünkről érkező, rövid szöveget engedünk be – szabad szöveget nem.
 */
export function cleanLabel(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const l = raw.trim().replace(/\s+/g, " ");
  if (!l || l.length > 80) return null;
  return l;
}

type Row = { data: Counters; updatedAt: string | null; exists: boolean };

function table() {
  // A projekt Supabase-kliense típus nélküli – a moduleStore is így használja.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return getSupabaseAdmin().from("module_configs") as any;
}

async function readRow(): Promise<Row> {
  const { data, error } = await table()
    .select("config, updated_at")
    .eq("id", ROW_ID)
    .maybeSingle();
  if (error) throw new Error(error.message);
  if (!data) return { data: {}, updatedAt: null, exists: false };
  return {
    data: (data.config as Counters) ?? {},
    updatedAt: (data.updated_at as string) ?? null,
    exists: true,
  };
}

/** Feltételes írás: csak akkor sikerül, ha közben senki nem írta a sort. */
async function writeRow(data: Counters, prev: Row): Promise<boolean> {
  const now = new Date().toISOString();
  if (!prev.exists) {
    const { error } = await table().insert({ id: ROW_ID, config: data, updated_at: now });
    if (error) {
      if (error.code === "23505") return false; // valaki közben létrehozta
      throw new Error(error.message);
    }
    return true;
  }
  let q = table().update({ config: data, updated_at: now }).eq("id", ROW_ID);
  q = prev.updatedAt ? q.eq("updated_at", prev.updatedAt) : q.is("updated_at", null);
  const { data: rows, error } = await q.select("id");
  if (error) throw new Error(error.message);
  return Array.isArray(rows) && rows.length > 0;
}

/**
 * Egyszerre sok kattintásnál (pl. 10+ párhuzamos kérés) körönként csak egy író
 * nyer, a többi újrapróbál – ezért kell bőven több kör, mint amennyi egyszerre
 * várható, növekvő, véletlenített várakozással.
 */
const MAX_ATTEMPTS = 15;

function backoff(attempt: number) {
  const ms = 40 + attempt * 60 + Math.random() * 120;
  return new Promise((r) => setTimeout(r, ms));
}

export async function readCounters(): Promise<Counters> {
  const { data } = await readRow();
  return data;
}

function bump(target: Breakdown, event: string, key: string) {
  target[event] = target[event] || {};
  target[event][key] = (target[event][key] || 0) + 1;
}

/** Atomi növelés: feltételes írás, ütközés esetén újrapróbál. */
export async function increment(
  event: string,
  page: string | null,
  label: string | null,
): Promise<boolean> {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const row = await readRow();
    const data = row.data;
    const day = today();

    const days = (data[day] as DayCounts) || {};
    days[event] = (days[event] || 0) + 1;
    data[day] = days;

    if (page) {
      const pages = (data[PAGES_KEY] as Breakdown) || {};
      bump(pages, event, page);
      data[PAGES_KEY] = pages;
    }
    if (label) {
      const labels = (data[LABELS_KEY] as Breakdown) || {};
      bump(labels, event, label);
      data[LABELS_KEY] = labels;
    }

    if (await writeRow(data, row)) return true;
    await backoff(attempt);
  }
  return false;
}

/**
 * Az aktuális állást fejlesztői teszt-alapvonalként rögzíti: ami eddig
 * összejött, az próbálgatás volt, nem valódi látogató. A /szamok oldal ezt
 * külön jelöli és levonja.
 */
export async function markAsTest() {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const row = await readRow();
    const data = row.data;

    const days: Record<string, DayCounts> = {};
    for (const [k, v] of Object.entries(data)) {
      if (META_KEYS.includes(k)) continue;
      days[k] = { ...(v as DayCounts) };
    }
    data[TEST_KEY] = {
      days,
      pages: JSON.parse(JSON.stringify(data[PAGES_KEY] || {})),
      labels: JSON.parse(JSON.stringify(data[LABELS_KEY] || {})),
    };

    if (await writeRow(data, row)) return data[TEST_KEY];
    await backoff(attempt);
  }
  return null;
}
