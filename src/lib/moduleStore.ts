import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "modules.json");
const configKey = (id: string) => `modules/${id.replace(/:/g, "--")}.json`;

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

export async function getModuleConfig(id: string): Promise<Record<string, unknown>> {
  if (!process.env.BLOB_STORE_ID) {
    return readLocalConfig(id);
  }
  try {
    const { head } = await import("@vercel/blob");
    const info = await head(configKey(id));
    const res = await fetch(info.url, { cache: "no-store" });
    return await res.json();
  } catch {
    return {};
  }
}

export async function setModuleConfig(id: string, config: Record<string, unknown>): Promise<void> {
  if (!process.env.BLOB_STORE_ID) {
    return writeLocalConfig(id, config);
  }
  const { put } = await import("@vercel/blob");
  await put(configKey(id), JSON.stringify(config), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}
