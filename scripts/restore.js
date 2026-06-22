#!/usr/bin/env node
// Usage: node scripts/restore.js backups/2026-06-22.json
// Törli az összes module_configs sort és visszaírja a snapshotból.

const https = require("https");
const fs = require("fs");
const path = require("path");

function loadEnv() {
  const envPath = path.resolve(__dirname, "../.env.local");
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  const env = {};
  for (const line of lines) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) env[m[1].trim()] = m[2].trim();
  }
  return env;
}

function req(method, url, key, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const data = body ? JSON.stringify(body) : undefined;
    const opts = {
      method,
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
        ...(data ? { "Content-Length": Buffer.byteLength(data) } : {}),
      },
    };
    const r = https.request(opts, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString() }));
    });
    r.on("error", reject);
    if (data) r.write(data);
    r.end();
  });
}

(async () => {
  const snapshotPath = process.argv[2];
  if (!snapshotPath) {
    console.error("Használat: node scripts/restore.js backups/YYYY-MM-DD.json");
    process.exit(1);
  }

  const env = loadEnv();
  const { SUPABASE_URL, SUPABASE_SERVICE_KEY: KEY } = env;
  const base = `${SUPABASE_URL}/rest/v1/module_configs`;

  const { rows, snapshot_date } = JSON.parse(fs.readFileSync(path.resolve(snapshotPath), "utf-8"));
  console.log(`♻️  Visszaállítás: ${snapshot_date} (${rows.length} sor)`);

  console.log("🗑  Meglévő sorok törlése...");
  const del = await req("DELETE", `${base}?id=neq.`, KEY);
  if (del.status >= 300) { console.error("Törlési hiba:", del.status, del.body); process.exit(1); }

  console.log("📥 Sorok visszaírása...");
  for (const row of rows) {
    const ins = await req("POST", base, KEY, row);
    if (ins.status >= 300) {
      console.error(`Hiba (${row.id}):`, ins.status, ins.body);
    }
  }
  console.log(`✅ Visszaállítás kész (${rows.length} sor).`);
})();
