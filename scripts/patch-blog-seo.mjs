import fs from "fs";
import path from "path";

const SRC = path.resolve("src/app/blog");

const POSTS = [
  {
    slug: "agyazhato-chesterfield-kanape",
    readTime: "2 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 520,
    articleSection: "Chesterfield bútorok",
    toc: [
      "Mit jelent az, hogy ágyazható Chesterfield kanapé?",
      "Miért jobb, mint egy hagyományos kihúzható kanapé?",
      "Ágyazható Chesterfield kanapé GYIK",
    ],
  },
  {
    slug: "bor-fotel",
    readTime: "3 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 650,
    articleSection: "Fotelek",
    toc: [
      "Bőrfotel típusok – melyik illik hozzád?",
      "Hogyan illik a bőr fotel a különböző enteriőr stílusokhoz?",
      "GYIK – Bőr fotel",
    ],
  },
  {
    slug: "butorbolt-nagykanizsán",
    readTime: "2 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 600,
    articleSection: "Bútor vásárlás",
    toc: [
      "Miért érdemes az Enzo Design bútorboltot választani Nagykanizsán?",
      "Milyen típusú bútorok közül válogathatsz?",
    ],
  },
  {
    slug: "egyedi-butor-keszittetes",
    readTime: "1 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 500,
    articleSection: "Egyedi bútor",
    toc: [
      "Vizuális kiindulópont – kép alapján is dolgozunk",
      "Anyagválasztás – több mint 100 szövetféleség",
      "Szakmai konzultáció és a folyamat lépései",
    ],
  },
  {
    slug: "kanape-zalaegerszegen",
    readTime: "3 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 560,
    articleSection: "Kanapé vásárlás",
    toc: [
      "Milyen típusú kanapék közül válogathatsz?",
      "Mire érdemes figyelni kanapévásárlásakor?",
      "Kanapé vásárlás GYIK",
    ],
  },
  {
    slug: "melyik-chesterfield-butor-illik-hozzad",
    readTime: "2 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 590,
    articleSection: "Chesterfield bútorok",
    toc: [
      "Chesterfield bútor típusok",
      "A színek jelentése a Chesterfield bútorok világában",
      "Stíluskalauz enteriőr típusonként",
    ],
  },
  {
    slug: "miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni",
    readTime: "2 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 610,
    articleSection: "Bútor vásárlás",
    toc: [
      "5 ok, amiért érdemes gyártótól vásárolni",
      "Összehasonlítás: gyártótól vs. bútorboltból",
      "GYIK – Gyártói vásárlás",
    ],
  },
  {
    slug: "miert-idotallo-valasztas-a-chesterfield-kanape",
    readTime: "2 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 550,
    articleSection: "Chesterfield bútorok",
    toc: [
      "A Chesterfield kanapé története – egy brit ikon születése",
      "Egyedi gyártás és a teljes Chesterfield szett",
    ],
  },
  {
    slug: "modern-chesterfield-kanape",
    readTime: "3 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 700,
    articleSection: "Chesterfield bútorok",
    toc: [
      "Mi is az a modern Chesterfield kanapé?",
      "A forma időtlen, az anyag rugalmas",
      "GYIK – Modern Chesterfield kanapé",
    ],
  },
  {
    slug: "tomorfa-butor",
    readTime: "1 perc",
    date: "2025. június 1.",
    dateIso: "2025-06-01",
    wordCount: 460,
    articleSection: "Bútorgyártás",
    toc: [
      "Mi az a tömörfa és miért érdemes választani?",
      "Tömörfa vs. MDF – melyik jobb?",
    ],
  },
];

function buildInsert(post) {
  const tocItems = post.toc
    .map((item, i) => `          <li className="flex items-start gap-2 text-sm text-[#1c1c1c]"><span className="text-[#b8924a] font-bold min-w-[1.5rem]">${i + 1}.</span><span>${item}</span></li>`)
    .join("\n");

  return `
      {/* Reading time + publish date */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime="${post.dateIso}">${post.date}</time>
          <span aria-hidden="true">·</span>
          <span>${post.readTime} olvasás</span>
        </div>
      </div>

      {/* TOC */}
      <nav aria-label="Tartalomjegyzék" className="bg-[#f5f0e8] border-b border-[#e8ddd0]">
        <div className="max-w-3xl mx-auto px-4 py-5">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Tartalomjegyzék</p>
          <ol className="space-y-1">
${tocItems}
          </ol>
        </div>
      </nav>

`;
}

let patched = 0;
for (const post of POSTS) {
  const file = path.join(SRC, post.slug, "page.tsx");
  if (!fs.existsSync(file)) {
    console.log(`MISSING: ${post.slug}`);
    continue;
  }

  let src = fs.readFileSync(file, "utf8");
  const orig = src;

  // 1. Update dateModified in jsonLd
  src = src.replace(/"dateModified": "[\d-]+"/, `"dateModified": "2026-06-19"`);

  // 2. Add wordCount + articleSection + mainEntityOfPage to jsonLd (if not already present)
  if (!src.includes('"wordCount"')) {
    const urlMatch = src.match(/"url": "(https:\/\/www\.enzodesign\.hu[^"]+)"/);
    const url = urlMatch ? urlMatch[1] : `https://www.enzodesign.hu/blog/${post.slug}`;
    src = src.replace(
      /("url": "https:\/\/www\.enzodesign\.hu[^"]*",\n)(};)/,
      `$1  "wordCount": ${post.wordCount},\n  "articleSection": "${post.articleSection}",\n  "mainEntityOfPage": { "@type": "WebPage", "@id": "${url}" },\n$2`
    );
  }

  // 3. Insert reading time bar + TOC after </nav> and before <PageBuilderPage
  // Pattern: "      </nav>\n\n      <PageBuilderPage"
  const navClose = "      </nav>\n\n      <PageBuilderPage";
  if (src.includes(navClose) && !src.includes("Tartalomjegyzék")) {
    const insert = buildInsert(post);
    src = src.replace(navClose, `      </nav>\n${insert}      <PageBuilderPage`);
  }

  if (src !== orig) {
    fs.writeFileSync(file, src, "utf8");
    console.log(`PATCHED: ${post.slug}`);
    patched++;
  } else {
    console.log(`UNCHANGED: ${post.slug}`);
  }
}

console.log(`\nDone: ${patched}/${POSTS.length} patched.`);
