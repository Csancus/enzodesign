import fs from "fs";
import path from "path";

const CITIES = [
  { slug: "butorbolt-zalaegerszegen", locative: "Zalaegerszegen", city: "Zalaegerszeg" },
  { slug: "butorbolt-kaposvaron",     locative: "Kaposváron",     city: "Kaposvár" },
  { slug: "butorbolt-keszthelyen",    locative: "Keszthelyen",    city: "Keszthely" },
  { slug: "butorbolt-siofokon",       locative: "Siófokon",       city: "Siófok" },
  { slug: "butorbolt-tapolcan",       locative: "Tapolcán",       city: "Tapolca" },
  { slug: "butorbolt-marcaliban",     locative: "Marcaliban",     city: "Marcali" },
  { slug: "butorbolt-kormenden",      locative: "Körmenden",      city: "Körmend" },
  { slug: "butorbolt-barcson",        locative: "Barcson",        city: "Barcs" },
  { slug: "butorbolt-szigetvaron",    locative: "Szigetváron",    city: "Szigetvár" },
];

for (const c of CITIES) {
  const file = path.resolve(`src/app/${c.slug}/page.tsx`);
  let src = fs.readFileSync(file, "utf8");
  // Replace "Bútorbolt [locative]" with "Bútorbolt [city]" everywhere in metadata
  src = src.replaceAll(`Bútorbolt ${c.locative}`, `Bútorbolt ${c.city}`);
  fs.writeFileSync(file, src, "utf8");
  console.log(`Fixed: ${c.slug}`);
}
