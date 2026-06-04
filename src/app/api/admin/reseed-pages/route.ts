import { NextResponse } from "next/server";
import { getAdminStatus } from "@/lib/auth";
import { readFile, writeFile } from "fs/promises";
import path from "path";

export async function POST() {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.BLOB_STORE_ID) {
    const DATA_FILE = path.join(process.cwd(), "data", "modules.json");
    try {
      const content = await readFile(DATA_FILE, "utf-8");
      const store = JSON.parse(content) as Record<string, unknown>;
      for (const key of Object.keys(store)) {
        if (key.startsWith("page:")) delete store[key];
      }
      await writeFile(DATA_FILE, JSON.stringify(store, null, 2));
    } catch {}
    return NextResponse.json({ ok: true, deleted: 0 });
  }

  const { list, del } = await import("@vercel/blob");
  const { blobs } = await list({ prefix: "modules/page--" });
  if (blobs.length > 0) {
    await del(blobs.map((b) => b.url));
  }
  return NextResponse.json({ ok: true, deleted: blobs.length });
}
