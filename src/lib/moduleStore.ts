import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "modules.json");

async function readLocalStore(): Promise<Record<string, unknown>> {
  try {
    const content = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return {};
  }
}

async function writeLocalStore(store: Record<string, unknown>): Promise<void> {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(store, null, 2));
}

export async function getModuleConfig(id: string): Promise<Record<string, unknown>> {
  if (process.env.KV_REST_API_URL) {
    try {
      const { kv } = await import("@vercel/kv");
      const config = await kv.get<Record<string, unknown>>(id);
      return config ?? {};
    } catch {
      return {};
    }
  }
  const store = await readLocalStore();
  return (store[id] as Record<string, unknown>) ?? {};
}

export async function setModuleConfig(id: string, config: Record<string, unknown>): Promise<void> {
  if (process.env.KV_REST_API_URL) {
    const { kv } = await import("@vercel/kv");
    await kv.set(id, config);
    return;
  }
  const store = await readLocalStore();
  store[id] = config;
  await writeLocalStore(store);
}
