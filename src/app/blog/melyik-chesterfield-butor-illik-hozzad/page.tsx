import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Melyik Chesterfield bútor illik hozzád? Stíluskalauz",
  description: "Chesterfield szék, fotel, puff, étkezőszék vagy kanapé – stíluskalauz a típusokhoz, színekhez és az ideális enteriőrhez. Egyedi gyártás, 3+10 év garancia. Enzo Design.",

  alternates: { canonical: "https://enzodesign.hu/blog/melyik-chesterfield-butor-illik-hozzad" },
  openGraph: {
    title: "Melyik Chesterfield bútor illik hozzád? Stíluskalauz",
    description: "Chesterfield szék, fotel, puff, étkezőszék vagy kanapé – stíluskalauz a típusokhoz, színekhez és az ideális enteriőrhez. Egyedi gyártás, 3+10 év garancia. Enzo Design.",
    url: "https://enzodesign.hu/blog/melyik-chesterfield-butor-illik-hozzad",
    images: [{ url: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Melyik Chesterfield bútor illik hozzád? Stíluskalauz",
  "description": "Chesterfield szék, fotel, puff, étkezőszék vagy kanapé – stíluskalauz a típusokhoz, színekhez és az ideális enteriőrhez. Egyedi gyártás, 3+10 év garancia.",
  "image": "https://www.enzodesign.hu/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-07",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/melyik-chesterfield-butor-illik-hozzad",
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
            <span className="text-[#b8924a]">Melyik Chesterfield bútor illik hozzád?</span>
          </div>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:melyik-chesterfield-butor-illik-hozzad"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Melyik Chesterfield bútor illik hozzád?",
              subtitle: "A Chesterfield nem csak kanapé. Szék, puff, étkezőszék, forgószék – és minden típus más térbe, más célra ideális. Ez az útmutató segít megtalálni a hozzád illő darabot.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
              alt: "Chesterfield bútor kollekció – kanapé, fotel, szék, puff",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Chesterfield bútor típusok",
              body: "Chesterfield szék – ahol a komfort és a stílus találkozik\nA klasszikus Chesterfield szék magas háttámlájával, elegáns gombolásával és ívelt karfáival kiegészítő ülőhelyként nappaliba, dolgozószobába vagy olvasósarokba illeszkedik. Bőr vagy bársony kárpit garantálja a tartósságot, a masszív fakeret hosszú évekre szóló befektetés.\nIdeális helyek: kanapé mellé kiegészítőnek, vállalati irodákba, tárgyalókba, kávézók és boutique üzletek belső tereihez.\n\nChesterfield puff – kicsi, de sokoldalú\nSokan alábecsülik a Chesterfield puff szerepét, pedig egyszerre több funkcióban is szolgál: lábpihentetőként, extra ülőhelyként, vagy tárolós változatban. A puffok általában azonos kárpitozással készülnek a kanapéval – a garnitúra egységes marad.\n\nChesterfield étkezőszék – a kifinomult vacsorák kísérője\nLetisztultabb formában, de ugyanolyan gombolással és ívelt vonalvezetéssel készül. Rusztikus vagy vintage étkezőkbe, vendéglátóhelyekre, de home office munkaszékként is kiváló. Bőr, bársony és velúr kárpitban elérhető.\n\nChesterfield forgószék – luxus az irodában\nEgyedi megjelenésével prémium munkahelyet teremt ügyvédi irodákban, vezetői szobákban vagy home office berendezésekben. Kombinálja az irodai komfortot a tradicionális Chesterfield stílussal.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "A színek jelentése a Chesterfield bútorok világában",
              body: "Zöld: frissítő, természetközeli, kifinomult – modern és eklektikus enteriőrbe.\nKék / tengerészkék: mély elegancia, intellektuális hangulat – skandináv és minimalista stílusba.\nBarna / konyak: klasszikus, tekintélyt sugárzó – tradicionális és vintage terekben.\nSzürke / bézs: modern, letisztult, semleges – skandináv és loft stílusba.\n\nMelyiket válaszd?\nHa nappaliba keresel kiegészítő ülőhelyet, a szék vagy fotel a legjobb választás. Ha kisebb teret bútorozol és minden négyzetméter számít, a puff tökéletes kiegészítő. Ha étkezőt rendezed be stílusosan, az étkezőszék a nyerő.\n\nAz Enzo Design-nél minden Chesterfield bútor teljesen egyedi szín- és anyagkombinációban rendelhető – segítünk megtalálni az otthonodhoz legjobban illő darabot.\n\nGYIK – Chesterfield bútor típusok\n\nHol alkalmazható a Chesterfield stílus az irodában?\nChesterfield forgószék és kanapé egyaránt kiváló fogadószobákba, vezetői irodákba és tárgyalókba. Az elegáns megjelenés presztízsértéket ad a munkahelynek.\n\nRendelhető-e garnitúra egységes kárpitban?\nIgen – a kanapé mellé párosítható fotel, puff, étkezőszék és franciaágy is azonos szövetben és színben rendelhető.",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          { type: "contact" },
        ]}
      />

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Termékek megtekintése</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/chesterfield-kollekcio" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Chesterfield kollekció →
            </Link>
            <Link href="/butoraink/fotelek/chesterfield-fotel" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Chesterfield fotel →
            </Link>
            <Link href="/butoraink/kanapek/chesterfield-kanapek" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Chesterfield kanapék →
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
              { title: "Bőr fotel", href: "/blog/bor-fotel" },
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
