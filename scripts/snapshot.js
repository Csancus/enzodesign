#!/usr/bin/env node
// Usage: node scripts/snapshot.js [label]
// Creates a DB backup + git tag. Requires .env.local with SUPABASE_URL and SUPABASE_SERVICE_KEY.

const https = require("https");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

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

async function fetchRows(url, key) {
  return new Promise((resolve, reject) => {
    const u = new URL(`${url}/rest/v1/module_configs?select=*&order=id&limit=2000`);
    const opts = {
      hostname: u.hostname,
      path: u.pathname + u.search,
      headers: { apikey: key, Authorization: `Bearer ${key}` },
    };
    https.get(opts, (res) => {
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve(JSON.parse(Buffer.concat(chunks))));
    }).on("error", reject);
  });
}

(async () => {
  const env = loadEnv();
  const { SUPABASE_URL, SUPABASE_SERVICE_KEY } = env;
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
    console.error("Hiányzik a SUPABASE_URL vagy SUPABASE_SERVICE_KEY a .env.local fájlból");
    process.exit(1);
  }

  const today = new Date().toISOString().slice(0, 10);
  const label = process.argv[2] ? `-${process.argv[2].replace(/\s+/g, "-")}` : "";
  const filename = `${today}${label}.json`;
  const outPath = path.resolve(__dirname, "../backups", filename);
  const tagName = `snapshot-${today}${label}`;

  console.log("📦 DB exportálása...");
  const rows = await fetchRows(SUPABASE_URL, SUPABASE_SERVICE_KEY);
  const snapshot = { snapshot_date: today, label: label.slice(1) || null, rows };
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2));
  console.log(`✅ ${rows.length} sor mentve → backups/${filename}`);

  console.log("🏷  Git tag létrehozása...");
  try {
    execSync(`git add backups/${filename}`);
    execSync(`git commit -m "snapshot: ${today}${label}"`);
    execSync(`git tag ${tagName}`);
    execSync("git push");
    execSync("git push --tags");
    console.log(`✅ Tag: ${tagName}`);
    console.log("\nVissza tudsz állni ezzel:");
    console.log(`  git checkout ${tagName}          # kód visszaállítása`);
    console.log(`  node scripts/restore.js backups/${filename}  # DB visszaállítása`);
  } catch (e) {
    console.error("Git hiba:", e.message);
  }
})();
