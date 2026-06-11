import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { unstable_cache, revalidateTag } from "next/cache";

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

// Load all module configs from Supabase in one query, cached for 1 hour.
const loadAllSupabaseConfigs = unstable_cache(
  async (): Promise<Record<string, Record<string, unknown>>> => {
    const { getSupabaseAdmin } = await import("@/lib/supabase");
    const { data, error } = await getSupabaseAdmin()
      .from("module_configs")
      .select("id, config") as { data: { id: string; config: Record<string, unknown> }[] | null; error: unknown };
    if (error || !data) return {};
    return Object.fromEntries(data.map((r) => [r.id, r.config]));
  },
  ["module-configs"],
  { revalidate: 3600, tags: ["module-configs"] }
);

export async function getModuleConfig(id: string): Promise<Record<string, unknown>> {
  if (!process.env.SUPABASE_URL) {
    return readLocalConfig(id);
  }
  try {
    const all = await loadAllSupabaseConfigs();
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
  revalidateTag("module-configs", "max");
}
