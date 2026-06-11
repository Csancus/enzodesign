import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { unstable_cache, revalidateTag } from "next/cache";

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

// Load all module configs from Blob in a single list() call, cached for 1 hour.
// This replaces individual head() calls (1 operation each) with a single list()
// call shared across all requests in the cache window.
const loadAllBlobConfigs = unstable_cache(
  async (): Promise<Record<string, Record<string, unknown>>> => {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: "modules/" });
    const entries = await Promise.all(
      blobs.map(async (b) => {
        const id = b.pathname
          .replace(/^modules\//, "")
          .replace(/\.json$/, "")
          .replace(/--/g, ":");
        try {
          const res = await fetch(b.url, { cache: "no-store" });
          const data = await res.json();
          return [id, data] as const;
        } catch {
          return [id, {}] as const;
        }
      })
    );
    return Object.fromEntries(entries);
  },
  ["module-configs"],
  { revalidate: 3600, tags: ["module-configs"] }
);

export async function getModuleConfig(id: string): Promise<Record<string, unknown>> {
  if (!process.env.BLOB_STORE_ID) {
    return readLocalConfig(id);
  }
  try {
    const all = await loadAllBlobConfigs();
    return all[id] ?? {};
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
  // Invalidate the cached config list so next read picks up the change
  revalidateTag("module-configs", "max");
}
