import fs from "fs";
import path from "path";

const CITIES = [
  { slug: "butorbolt-zalaegerszegen", locative: "Zalaegerszegen", distanceKm: 30 },
  { slug: "butorbolt-kaposvaron",     locative: "Kaposváron",     distanceKm: 52 },
  { slug: "butorbolt-keszthelyen",    locative: "Keszthelyen",    distanceKm: 45 },
  { slug: "butorbolt-siofokon",       locative: "Siófokon",       distanceKm: 74 },
  { slug: "butorbolt-tapolcan",       locative: "Tapolcán",       distanceKm: 58 },
  { slug: "butorbolt-marcaliban",     locative: "Marcaliban",     distanceKm: 35 },
  { slug: "butorbolt-kormenden",      locative: "Körmenden",      distanceKm: 62 },
  { slug: "butorbolt-barcson",        locative: "Barcson",        distanceKm: 60 },
  { slug: "butorbolt-szigetvaron",    locative: "Szigetváron",    distanceKm: 65 },
];

for (const c of CITIES) {
  const file = path.resolve(`src/app/${c.slug}/page.tsx`);
  let src = fs.readFileSync(file, "utf8");

  const newTitle = `Bútorbolt ${c.locative} – Egyedi kárpit bútor | Enzo Design`;
  const newDesc  = `Bútorbolt ${c.locative}: egyedi bútor, kárpit kanapé, fotel az Enzo Designtól. Nagykanizsán, ${c.distanceKm} km-re – 3+10 év garancia, online rendelés.`;

  // Replace every occurrence of the old title and description (appears twice: metadata + openGraph)
  src = src.replace(/title: "Bútor [^"]+"/g, `title: "${newTitle}"`);
  src = src.replace(/description: "[^"]+"/g, `description: "${newDesc}"`);

  fs.writeFileSync(file, src, "utf8");
  console.log(`Updated: ${c.slug}`);
}
