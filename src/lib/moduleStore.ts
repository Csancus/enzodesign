import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { cache } from "react";
import { revalidatePath } from "next/cache";

const DATA_FILE = path.join(process.cwd(), "data", "modules.json");

async function readLocalConfig(id: string): Promise<Record<string, unknown>> {
  try {
    const content = await readFile(DATA_FILE, "utf-8");
    const store = JSON.parse(content);
    return (store[id] as Record<string, unknown>) ?? {};
  } catch {
    return {};
  }
}

async function writeLocalConfig(id: string, config: Record<string, unknown>): Promise<void> {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  let store: Record<string, unknown> = {};
  try {
    store = JSON.parse(await readFile(DATA_FILE, "utf-8"));
  } catch {}
  store[id] = config;
  await writeFile(DATA_FILE, JSON.stringify(store, null, 2));
}

// Per-request cache (React cache): dedupes the full-table fetch within a single
// render pass, but is NEVER shared across requests or serverless instances.
// This is deliberate — a module-level TTL cache would go stale per instance on
// Vercel (a save on instance A leaves instance B serving old data until its TTL
// expires), which made edits appear not to save. Freshness on every request beats
// a shared cache here: the table is tiny and pages already render dynamically.
const loadAllConfigs = cache(
  async (): Promise<Record<string, Record<string, unknown>>> => {
    const { getSupabaseAdmin } = await import("@/lib/supabase");
    const { data, error } = await getSupabaseAdmin()
      .from("module_configs")
      .select("id, config") as { data: { id: string; config: Record<string, unknown> }[] | null; error: unknown };
    if (error || !data) return {};
    return Object.fromEntries(data.map((r) => [r.id, r.config]));
  }
);

export async function getModuleConfig(id: string): Promise<Record<string, unknown>> {
  if (!process.env.SUPABASE_URL) {
    return readLocalConfig(id);
  }
  try {
    const all = await loadAllConfigs();
    return all[id] ?? {};
  } catch {
    return {};
  }
}

export async function setModuleConfig(id: string, config: Record<string, unknown>): Promise<void> {
  if (!process.env.SUPABASE_URL) {
    return writeLocalConfig(id, config);
  }
  const { getSupabaseAdmin } = await import("@/lib/supabase");
  const { error } = await (getSupabaseAdmin()
    .from("module_configs") as any)
    .upsert({ id, config, updated_at: new Date().toISOString() });
  if (error) throw new Error(error.message);
  // Bust Next's Full Route Cache so any statically-cached route re-renders with
  // fresh data. Reads are per-request (no cross-instance cache to invalidate).
  revalidatePath("/", "layout");
}
