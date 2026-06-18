import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bőr fotel – prémium kárpitozott fotel | Enzo Design",
  description: "Miért érdemes valódi bőr fotelt választani? Típusok, enteriőr tippek, karbantartás és árak 421 695 Ft-tól. Személyre szabható, kézzel készített, 3+10 év garancia.",

  alternates: { canonical: "https://enzodesign.hu/blog/bor-fotel" },
  openGraph: {
    title: "Bőr fotel – prémium kárpitozott fotel | Enzo Design",
    description: "Miért érdemes valódi bőr fotelt választani? Típusok, enteriőr tippek, karbantartás és árak 421 695 Ft-tól. Személyre szabható, kézzel készített, 3+10 év garancia.",
    url: "https://enzodesign.hu/blog/bor-fotel",
    images: [{ url: "/images/blog-bor-fotel-cover.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Bőr fotel – prémium kárpitozott fotel",
  "description": "Miért érdemes valódi bőr fotelt választani? Típusok, enteriőr tippek, karbantartás és árak 421 695 Ft-tól. Személyre szabható, kézzel készített, 3+10 év garancia.",
  "image": "https://www.enzodesign.hu/images/blog-bor-fotel-cover.webp",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-07",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/bor-fotel",
};

export default async function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <div>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Bőr fotel</span>
          </div>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:bor-fotel"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Bőr fotel: Időtálló kényelem és stílus",
              subtitle: "A bőr fotel nem csupán bútor – életérzés. Elegáns, tartós, és évtizedek alatt sem veszít szépségéből. Épp ellenkezőleg: a valódi bőr idővel patinát kap, amelynek saját varázsa van.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/blog-bor-fotel-cover.webp",
              alt: "Bőr fotel – Enzo Design prémium kárpitozott bútorok",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Bőrfotel típusok – melyik illik hozzád?",
              body: "Relax fotel\nÁllítható háttámlával és kihúzható lábzsámollyal – ideális tévénézéshez és pihenéshez. Általában mechanikus vagy elektromos dönthető mechanizmussal készül.\n\nOlvasó fotel\nMélyebb ülőrésszel és magas háttámlával, kifejezetten hosszabb ülésre tervezve. Legtöbbször olvasósarokba, könyvtárszobába vagy hálószobába kerül.\n\nKarfás bőrfotel\nKlasszikus forma, tekintélyes megjelenéssel. Tárgyalókba, irodákba és elegáns nappalikba egyaránt kiváló választás.\n\nChesterfield bőrfotel\nMélyen gombolt háttámlával és ívelt karfákkal – a brit klasszikus stílus csúcsa. Vintage, klasszikus vagy tradicionális enteriőrbe illik, de modern kontrasztként is megállja a helyét.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Hogyan illik a bőr fotel a különböző enteriőr stílusokhoz?",
              body: "Modern / minimalista: Fekete vagy szürke bőrfotel, karcsú falábakon – tiszta vonalak, kevés dekoráció.\n\nKlasszikus / tradicionális: Barna vagy konyak árnyalatú Chesterfield fotel, fa bútorok és keleti szőnyeg társaságában.\n\nLoft / indusztriális: Sötét bőr, szegecselt részletek, fém és betonfelületek mellett.\n\nIrodai tér: Fekete bőrfotel – státuszszimbólum és praktikus, könnyen tisztítható megoldás egyszerre.\n\nBőr vagy szövet?\nA bőr tartósabb, könnyebben tisztítható és idővel patinaszerű felületet kap – ideális klasszikus, elegáns enteriőrbe. A szövet puhábbnak érződik, több szín és minta közül lehet választani. Chesterfield foteleink mindkét anyagban rendelhetők: bőr változat 421.695 Ft-tól, szövet változat 324.380 Ft-tól – tömörfa szerkezettel, 3+10 év garanciával.\n\nKarbantartási tippek\nHavonta portold le száraz, puha ruhával.\nFélévente kezeld bőrápoló termékkel – ez megőrzi rugalmasságát.\nKerüld a közvetlen napfényt – elfakítja a bőrt.\nFriss foltot azonnal töröld fel száraz kendővel.",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          {
            type: "text-block",
            config: {
              title: "GYIK – Gyakori kérdések a bőr fotelekről",
              body: "Valódi bőrt használ az Enzo Design?\nIgen – prémium minőségű valódi olasz bőrt kínálunk, de elérhetők alternatív, könnyebben tisztítható bőrhatású anyagok is.\n\nMilyen színekben kérhető?\nSzinte bármilyen színben – a klasszikus fekete és barna mellett sötétzöld, bordó vagy akár tengerészkék árnyalat is választható.\n\nMilyen gyakran kell tisztítani?\nHavonta portalanítás száraz, puha ruhával elegendő. Félévente bőrápolóval érdemes kezelni.\n\nMit érdemes tudni a bőrfotel és a szövetfotel különbségéről?\nA bőr tartósabb és könnyebben tisztítható – hosszú távon jobb befektetés. A szövet puhábbnak érződik és olcsóbb belépőáron elérhető. Mindkét anyag elérhető az Enzo Design foteleknél.\n\nTévhitek és valóság:\n\"A bőr fotel nyáron izzasztó, télen hideg\" → A valódi bőr lélegzik, hőszabályzó tulajdonságokkal bír.\n\"A bőr mindig bőrbarna\" → Ma már széles színválaszték érhető el – akár pasztell vagy élénk árnyalatokban is.\n\"Bőr fotelt csak klasszikus stílushoz lehet választani\" → A modern formatervezésnek köszönhetően bármilyen enteriőrbe illeszthető.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          { type: "contact" },
        ]}
      />

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Termékek megtekintése</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/butoraink/fotelek/chesterfield-fotel" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Chesterfield fotel →
            </Link>
            <Link href="/butoraink/fotelek" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Összes fotel →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
              { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
              { title: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="bg-white p-4 hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a]">
                {a.title} ›
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
