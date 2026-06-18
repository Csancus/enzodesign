import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Modern Chesterfield kanapé – klasszikus forma, mai anyagok",
  description: "Modern Chesterfield kanapé loft, skandináv és minimalista enteriőrbe. 100+ szövet és bőr – kézzel készített, tömörfa váz, 399 810 Ft-tól. Enzo Design.",

  alternates: { canonical: "https://enzodesign.hu/blog/modern-chesterfield-kanape" },
  openGraph: {
    title: "Modern Chesterfield kanapé – klasszikus forma, mai anyagok",
    description: "Modern Chesterfield kanapé loft, skandináv és minimalista enteriőrbe. 100+ szövet és bőr – kézzel készített, tömörfa váz, 399 810 Ft-tól. Enzo Design.",
    url: "https://enzodesign.hu/blog/modern-chesterfield-kanape",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Modern Chesterfield kanapé – klasszikus forma, mai anyagok",
  "description": "Modern Chesterfield kanapé loft, skandináv és minimalista enteriőrbe. 100+ szövet és bőr – kézzel készített, tömörfa váz, 399 810 Ft-tól.",
  "image": "https://www.enzodesign.hu/images/chesterfield-modern-enterior-1.webp",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-07",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/modern-chesterfield-kanape",
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
            <span className="text-[#b8924a]">Modern Chesterfield kanapé</span>
          </div>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:modern-chesterfield-kanape"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Modern Chesterfield kanapé",
              subtitle: "Sokan azt gondolják, hogy a Chesterfield csak klasszikus enteriőrbe illik – ez tévhit. A Chesterfield az egyik legjobban alkalmazkodó bútortípus, amely modern lakásban éppúgy otthon van, mint vintage térben.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/chesterfield-modern-enterior-1.webp",
              alt: "Modern Chesterfield kanapé elegáns nappaliban – loft és minimalista stílusban",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Mi is az a modern Chesterfield kanapé?",
              body: "A modern Chesterfield a klasszikus stílus újragondolása: luxus és letisztultság ötvözete. Az eredeti forma – mélyen gombolt háttámla, ívelt kartámaszok, tömörfa szerkezet – megmarad, de az anyagok, a színek és a méretek a mai igényekhez igazodnak.\n\nLetisztultabb vonalak, de megőrzött karakter\nSzéles színpaletta: pasztelloktól a mélytónusú árnyalatokig\nVáltozatos anyagok: bársony, mikroszálas, prémium hatású szövetek, valódi bőr\nRugalmas méretkonfigurációk\n\nMilyen enteriőrbe illik legjobban?\nLoft / indusztriális: Sötét bőr, szegecselt részletek, fém és betonfelületek mellett – igazi jellem.\nSkandináv: Szürkéskék vagy homokszín bársony változat, vékony falábakon, természetes anyagokkal kombinálva.\nModern minimalista: Egyszínű, semleges árnyalatú Chesterfield, kevés kiegészítővel – a forma önmagáért beszél.\nVintage / eklektikus: Barna vagy konyak bőr, fa bútorokkal és vintage részletekkel.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/blog-modern-chesterfield-2.webp",
              alt: "Modern Chesterfield kanapé indusztriális és skandináv enteriőrben",
              height: "360",
            },
          },
          {
            type: "text-block",
            config: {
              title: "A forma időtlen, az anyag rugalmas",
              body: "Az Enzo Design Chesterfield kollekcióban több mint 100 szövet- és bőrfajtából lehet választani. A mélyen gombolt háttámla és az ívelt kartámaszok az eredeti formát tartják – de a szín, az anyag és a méret szabadon testreszabható. Legyen szó kétszemélyes kanapéról, háromszemelyesről vagy sarokkanapéról – minden konfiguráció elérhető, 399.810 Ft-tól.\n\nMit érdemes mérlegelni a választáskor?\nMéretek: A Chesterfield karfái és háttámlája miatt általában kissé nagyobb helyet igényel. Mérd fel a teret vásárlás előtt.\nSzín és anyag összehangolása: Ha a szoba többi bútora semleges, egy merészebb szín izgalmas kontrasztot adhat.\nLáb és részletek: Magasabb, vékonyabb falábakon a Chesterfield könnyedebb, modernebb hatást kelt.\n\nEnzo Design – 100% kézzel készített, magyar műhelyben\nMinden Chesterfield bútorunk Nagykanizsán, saját műhelyünkben készül kézzel. Tömörfa szerkezet, prémium rugózás, min. 50.000 martindale kopásállóságú kárpit – és 3+10 év garancia. Az ár, a méret és az anyag teljes mértékben testreszabható.\n\nMennyi idő alatt készül el az egyedi Chesterfield?\nÁltalában 4–6 hét a megrendelés visszaigazolásától számítva.",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          {
            type: "text-block",
            config: {
              title: "GYIK – Kérdések a modern Chesterfield kanapéról",
              body: "Mennyi idő alatt készül el egy egyedi modern Chesterfield kanapé?\nÁltalában 4–6 hét a megrendelés visszaigazolásától számítva, az anyagtól és a mérettől függően.\n\nLehet bőr helyett más kárpitot választani?\nTermészetesen! Széles bársony-, mikroszálas- és textilopcióból választhatsz. Minden anyag ellenőrzött minőségű, legalább 50.000 martindale kopásállóságú.\n\nHogyan tisztítható a kárpit?\nA legtöbb modern kárpit vízzel és semleges tisztítószerrel kezelhető. Rendeléskor pontosan tájékoztatjuk az anyagspecifikus ápolási tanácsokról.\n\nMilyen stílusba illik a modern Chesterfield?\nLoft: robusztus forma, sötét szín nyers felületekkel. Skandináv: homokszín bársony, vékony falábakon. Minimalista: semleges egyszínű, kevés kiegészítővel. Vintage: barna bőr, fa bútorokkal.\n\nTévhitek és valóság:\n\"Csak bőrből készülhet\" → A modern Chesterfield bársony, mikroszálas és egyéb textilekből is elérhető.\n\"Csak klasszikus lakásokba illik\" → A letisztult formák miatt modern enteriőrbe is tökéletesen illeszkedik.\n\"Mind ugyanúgy néz ki\" → Az egyedi gyártás miatt nincs két egyforma darab.",
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
            <Link href="/butoraink/kanapek/chesterfield-kanapek" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Chesterfield kanapék →
            </Link>
            <Link href="/chesterfield-kollekcio" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Teljes Chesterfield kollekció →
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
              { title: "Bőr fotel", href: "/blog/bor-fotel" },
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
