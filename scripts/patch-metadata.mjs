import fs from "fs";
import path from "path";

const BASE = "https://enzodesign.hu";
const SRC = path.resolve("src/app");

// { file (relative to src/app), title?, description?, canonical, ogImage, noIndex? }
const PATCHES = [
  {
    file: "adatkezelesi-szabalyzat/page.tsx",
    canonical: "/adatkezelesi-szabalyzat",
    ogImage: "/images/chesterfield-w1.webp",
    noIndex: true,
  },
  {
    file: "akcio/page.tsx",
    canonical: "/akcio",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "blog/page.tsx",
    description: "Kárpitozott bútorokról, Chesterfieldről, egyedi rendelésről és enteriőr trendekről – az Enzo Design blog.",
    canonical: "/blog",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "butoraink/egyedi-butor/page.tsx",
    description: "Egyedi kárpitozott bútor gyártótól: küldj egy képet és 2 napon belül árajánlatot kapsz. Tömörfa szerkezet, 100+ szövet, 3 év garancia.",
    canonical: "/butoraink/egyedi-butor",
    ogImage: "/images/egyedi-w1.webp",
  },
  {
    file: "butoraink/fotelek/page.tsx",
    canonical: "/butoraink/fotelek",
    ogImage: "/images/fotelek-w1.webp",
  },
  {
    file: "butoraink/franciaagyak/page.tsx",
    canonical: "/butoraink/franciaagyak",
    ogImage: "/images/franciaaggy-w3.webp",
  },
  {
    file: "butoraink/kanapek/page.tsx",
    canonical: "/butoraink/kanapek",
    ogImage: "/images/olds-club-w1.webp",
  },
  {
    file: "butoraink/karpitoszovetek/page.tsx",
    title: "Kárpitszövetek – Enzo Design",
    description: "Több mint 100 kárpitszövet – bársony, bőr, sennilé. AI, AT, MA, AG szövetcsaládok. Prémium minőség, hosszú élettartam.",
    canonical: "/butoraink/karpitoszovetek",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "butoraink/page.tsx",
    canonical: "/butoraink",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "butoraink/szek-zsamoly-falvedo/page.tsx",
    canonical: "/butoraink/szek-zsamoly-falvedo",
    ogImage: "/images/szek-w2.webp",
  },
  {
    file: "butorgyartas/anyagok/page.tsx",
    title: "Alapanyagok a bútorgyártásban – Enzo Design",
    description: "Tömörfa, rugók, szivacs, prémium kárpitszövetek – megtudhatja, milyen alapanyagokból készülnek az Enzo Design bútorai. Tartósság és esztétika.",
    canonical: "/butorgyartas/anyagok",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "butorgyartas/butorgyartas-folyamata/page.tsx",
    title: "A bútorgyártás menete – Enzo Design",
    description: "A tervezéstől a kiszállításig – az Enzo Design bútorgyártási folyamata: 6 lépéses minőségellenőrzött gyártás, 10 év vázgaranciával.",
    canonical: "/butorgyartas/butorgyartas-folyamata",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "butorgyartas/page.tsx",
    title: "Bútorgyártás – Enzo Design",
    canonical: "/butorgyartas",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "butorgyartas/tervezes/page.tsx",
    title: "A bútortervezés alapjai – Enzo Design",
    description: "A bútortervezés folyamata: mérettől a formáig, anyagválasztástól az ügyfél-egyeztetésig. Hogyan lesz az ötletedből kész bútor az Enzo Designnál.",
    canonical: "/butorgyartas/tervezes",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "butorvalaszto/page.tsx",
    canonical: "/butorvalaszto",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "chesterfield-kollekcio/page.tsx",
    title: "Chesterfield Kollekció – Enzo Design",
    description: "Közel 20 éve gyártunk Chesterfield bútorokat tömörfa szerkezettel, minőségi szövettel vagy bőr bevonattal. Az elegancia szimbóluma – 399.810 Ft-tól.",
    canonical: "/chesterfield-kollekcio",
    ogImage: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
  },
  {
    file: "design-butorok/page.tsx",
    title: "Design Bútorok – Enzo Design",
    description: "A Design kollekció modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz. 444.240 Ft-tól.",
    canonical: "/design-butorok",
    ogImage: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp",
  },
  {
    file: "ivone-kollekcio/page.tsx",
    title: "Ivone Kollekció – Enzo Design",
    description: "A klasszikus elegancia és a modern kényelem tökéletes találkozása – steppelt háttámla, ívelt karfák, fotel és kanapé szériában. 444.240 Ft-tól.",
    canonical: "/ivone-kollekcio",
    ogImage: "/images/ivone-w1.webp",
  },
  {
    file: "joker-kollekcio/page.tsx",
    title: "Joker Kollekció – Enzo Design",
    description: "A Joker kollekció prémium szövetborítással és mélyen gombolt háttámlával – modern Chesterfield ihlette vonalakkal. 399.810 Ft-tól.",
    canonical: "/joker-kollekcio",
    ogImage: "/images/joker-w1.webp",
  },
  {
    file: "kapcsolat-es-rendeles/page.tsx",
    title: "Kapcsolat és Rendelés – Enzo Design",
    description: "Lépjen kapcsolatba az Enzo Designnal – töltse ki az űrlapot és 24 órán belül visszahívjuk. 8800 Nagykanizsa, Egry József utca 7.",
    canonical: "/kapcsolat-es-rendeles",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "karpitozott-butor-uzleti-ugyfeleknek/page.tsx",
    canonical: "/karpitozott-butor-uzleti-ugyfeleknek",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "new-york-kollekcio/page.tsx",
    title: "New York Kollekció – Enzo Design",
    description: "A New York kollekció a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Személyre szabható – 399.810 Ft-tól.",
    canonical: "/new-york-kollekcio",
    ogImage: "/images/new-york-w5.webp",
  },
  {
    file: "olds-club-kollekcio/page.tsx",
    title: "Old's Club Kollekció – Enzo Design",
    description: "Az Old's Club kollekció letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. 444.240 Ft-tól.",
    canonical: "/olds-club-kollekcio",
    ogImage: "/images/olds-club-w1.webp",
  },
  {
    file: "rendeles-menete/page.tsx",
    canonical: "/rendeles-menete",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "rolunk/page.tsx",
    canonical: "/rolunk",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "vasarloi-visszajelzesek/page.tsx",
    canonical: "/vasarloi-visszajelzesek",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "chesterfield/a-chesterfield-kanape-eredete/page.tsx",
    title: "A Chesterfield kanapé eredete – Enzo Design",
    description: "A Chesterfield kanapé 300 éves brit örökség. Hogyan vált a 4. Chesterfield Earl bútorstílusa időtálló ikonná? Eredet, hagyomány és mai formák.",
    canonical: "/chesterfield/a-chesterfield-kanape-eredete",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "chesterfield/chesterfield-a-modern-enteriorben/page.tsx",
    canonical: "/chesterfield/chesterfield-a-modern-enteriorben",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "chesterfield/chesterfield-anyagok-es-gyartai-technikak/page.tsx",
    title: "Chesterfield – Anyagok és gyártási technikák – Enzo Design",
    description: "Chesterfield bútorok anyagai és gyártási technikái: tömörfa váz, kézzel feszített kárpit, gombolt háttámla, prémium szövetek és bőr.",
    canonical: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "chesterfield/chesterfield-stilus-es-formajegyek/page.tsx",
    canonical: "/chesterfield/chesterfield-stilus-es-formajegyek",
    ogImage: "/images/chesterfield-w1.webp",
  },
  // blog posts
  {
    file: "blog/agyazhato-chesterfield-kanape/page.tsx",
    canonical: "/blog/agyazhato-chesterfield-kanape",
    ogImage: "/images/chesterfield-borszovet-boritasu.webp",
  },
  {
    file: "blog/bor-fotel/page.tsx",
    canonical: "/blog/bor-fotel",
    ogImage: "/images/blog-bor-fotel-cover.webp",
  },
  {
    file: "blog/butorbolt-nagykanizsán/page.tsx",
    canonical: "/blog/butorbolt-nagykanizsán",
    ogImage: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
  },
  {
    file: "blog/egyedi-butor-keszittetes/page.tsx",
    canonical: "/blog/egyedi-butor-keszittetes",
    ogImage: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
  },
  {
    file: "blog/kanape-zalaegerszegen/page.tsx",
    canonical: "/blog/kanape-zalaegerszegen",
    ogImage: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
  },
  {
    file: "blog/melyik-chesterfield-butor-illik-hozzad/page.tsx",
    canonical: "/blog/melyik-chesterfield-butor-illik-hozzad",
    ogImage: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
  },
  {
    file: "blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni/page.tsx",
    canonical: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni",
    ogImage: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp",
  },
  {
    file: "blog/miert-idotallo-valasztas-a-chesterfield-kanape/page.tsx",
    canonical: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape",
    ogImage: "/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp",
  },
  {
    file: "blog/modern-chesterfield-kanape/page.tsx",
    canonical: "/blog/modern-chesterfield-kanape",
    ogImage: "/images/chesterfield-w1.webp",
  },
  {
    file: "blog/tomorfa-butor/page.tsx",
    canonical: "/blog/tomorfa-butor",
    ogImage: "/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp",
  },
];

function patchFile(filePath, patch) {
  let src = fs.readFileSync(filePath, "utf8");
  const orig = src;

  // Skip if alternates already present
  if (src.includes("alternates:") && src.includes("openGraph:")) {
    // Still may need title/description/robots fixes
  }

  // Fix title if needed
  if (patch.title) {
    src = src.replace(
      /(\s*title:\s*)"([^"]*?)"/,
      (m, pre) => `${pre}"${patch.title}"`
    );
  }

  // Fix description if needed
  if (patch.description) {
    // Handle multiline description
    src = src.replace(
      /(\s*description:\s*)"([^"]*?)"/s,
      (m, pre) => `${pre}"${patch.description}"`
    );
    // Also handle template literal or wrapped strings
    if (!src.includes(`"${patch.description}"`)) {
      // Try replacing description: \n    "..." pattern
      src = src.replace(
        /(\s*description:\s*\n\s*)"([^"]*?)"/,
        (m, pre) => `${pre}"${patch.description}"`
      );
    }
  }

  // Build the fields to insert
  const toInsert = [];

  if (!src.includes("alternates:")) {
    toInsert.push(
      `  alternates: { canonical: "${BASE}${patch.canonical}" },`
    );
  }

  if (!src.includes("openGraph:")) {
    // Get title and description from current (possibly already patched) src
    const titleMatch = src.match(/title:\s*"([^"]+)"/);
    const descMatch = src.match(/description:\s*(?:\n\s*)?"([^"]+)"/s);
    const ogTitle = titleMatch ? titleMatch[1] : patch.title || "";
    const ogDesc = descMatch ? descMatch[1] : patch.description || "";

    toInsert.push(
      `  openGraph: {`,
      `    title: "${ogTitle}",`,
      `    description: "${ogDesc}",`,
      `    url: "${BASE}${patch.canonical}",`,
      `    images: [{ url: "${patch.ogImage}", width: 1920, height: 800 }],`,
      `  },`
    );
  }

  if (patch.noIndex && !src.includes("robots:")) {
    toInsert.push(`  robots: { index: false, follow: false },`);
  }

  if (toInsert.length > 0) {
    // Find the closing }; of the metadata object
    // We need to find the last }; that closes the metadata export
    const metaStart = src.indexOf("export const metadata");
    if (metaStart === -1) {
      console.log(`  SKIP (no metadata): ${patch.file}`);
      return;
    }

    // Count braces from metaStart to find the end
    let depth = 0;
    let i = metaStart;
    let endIdx = -1;
    while (i < src.length) {
      if (src[i] === "{") depth++;
      else if (src[i] === "}") {
        depth--;
        if (depth === 0) {
          endIdx = i;
          break;
        }
      }
      i++;
    }

    if (endIdx === -1) {
      console.log(`  ERROR (no closing brace): ${patch.file}`);
      return;
    }

    // Insert before the closing brace
    const insertStr = "\n" + toInsert.join("\n") + "\n";
    src = src.slice(0, endIdx) + insertStr + src.slice(endIdx);
  }

  if (src !== orig) {
    fs.writeFileSync(filePath, src, "utf8");
    console.log(`  PATCHED: ${patch.file}`);
  } else {
    console.log(`  UNCHANGED: ${patch.file}`);
  }
}

let patched = 0;
let errors = 0;
for (const patch of PATCHES) {
  const filePath = path.join(SRC, patch.file);
  if (!fs.existsSync(filePath)) {
    console.log(`  MISSING: ${patch.file}`);
    errors++;
    continue;
  }
  try {
    patchFile(filePath, patch);
    patched++;
  } catch (e) {
    console.error(`  ERROR ${patch.file}: ${e.message}`);
    errors++;
  }
}
console.log(`\nDone: ${patched} processed, ${errors} errors.`);
