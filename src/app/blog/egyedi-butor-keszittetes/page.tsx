import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Egyedi bútor készíttetés – személyre szabva | Enzo Design",
  description: "Útmutató egyedi bútor rendeléséhez: ötlettől a kész bútorzig. Méret, szín és anyag szabadon választható. Árajánlat 2 napon belül, gyártás 4–6 hét. Enzo Design.",

  alternates: { canonical: "https://enzodesign.hu/blog/egyedi-butor-keszittetes" },
  openGraph: {
    title: "Egyedi bútor készíttetés – személyre szabva | Enzo Design",
    description: "Útmutató egyedi bútor rendeléséhez: ötlettől a kész bútorzig. Méret, szín és anyag szabadon választható. Árajánlat 2 napon belül, gyártás 4–6 hét. Enzo Design.",
    url: "https://enzodesign.hu/blog/egyedi-butor-keszittetes",
    images: [{ url: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Egyedi bútor készíttetés – személyre szabva",
  "description": "Útmutató egyedi bútor rendeléséhez: ötlettől a kész bútorzig. Méret, szín és anyag szabadon választható. Árajánlat 2 napon belül, gyártás 4–6 hét.",
  "image": "https://www.enzodesign.hu/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-07",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/egyedi-butor-keszittetes",
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
            <span className="text-[#b8924a]">Egyedi bútor készíttetés</span>
          </div>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:egyedi-butor-keszittetes"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Egyedi bútor készíttetés",
              subtitle: "Az egyedi kárpitozott bútor nem csupán egy funkcionális tárgy – egyfajta személyes nyilatkozat is. Ha van egy elképzelésed, amit nem találsz meg a boltokban, az egyedi megrendelés a legjobb megoldás.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
              alt: "Enzo Design műhely – egyedi bútor gyártás Nagykanizsán",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "1. Vizuális kiindulópont – kép alapján is dolgozunk",
              body: "A legtöbb vásárló képpel, Pinterestes inspirációval vagy akár egy vázlattal érkezik. Ez a legjobb kiindulópont: minél konkrétabb az elképzelés, annál pontosabb árajánlatot tudunk adni. Akár egy régi bútort is megmutathat, amit meg szeretne újítani vagy másoltatni.\n\n2. Méretek és funkció – gondold át előre\nMilyen teret szeretnél bebútorozni és milyen méretek férnek el?\nSzükséges-e ágyazható funkció?\nKell-e tárolóhely alatta?\nMilyen szélességgel, milyen mélységgel képzeled el?\n\n3. Anyagválasztás – több mint 100 szövetféleség\nTömörfa szerkezettel dolgozunk, amelyre prémium szöveteket vagy bőröket kárpitozunk. A szövetmintatárból helyszínen is lehet válogatni.\n\nValódi bőr: tartós, patinás öregedés, könnyen tisztítható, légáteresztő.\nBársony: luxus megjelenés, puha tapintás, szép mélységű szín.\nMikroszálas: praktikus, foltálló, könnyen tisztítható, kisállat-barát.\nSennilé / lenvászon: természetes hatás, modern megjelenés.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "4. Szakmai konzultáció és hogyan indul a folyamat?",
              body: "A gyártó nemcsak kézműves, hanem tanácsadó is. Megmutatjuk, mi fog működni az adott méretben és formában, és mi az, amire érdemes figyelni. Ha az eredeti ötleted néhány ponton módosítást igényel a stabilitás vagy a tartósság érdekében, azt nyíltan elmondjuk – és közösen megtaláljuk a legjobb megoldást.\n\n5. Rugalmasság\nSzinte bármilyen egyedi kárpitozott bútort el tudunk készíteni. Ha egy látott darabot más szövetben, más méretben, vagy más kartámasz-megoldással szeretnéd, azt is meg tudjuk valósítani.\n\nHogyan indul a folyamat?\n1. Telefonon vagy e-mailben felveszed a kapcsolatot\n2. Konzultáció – személyesen Nagykanizsán vagy online\n3. Árajánlat 2 napon belül\n4. Szövet- és méretegyeztetés\n5. Gyártás – 4–6 hét\n6. Házhozszállítás az ország bármely pontjára\n\nGYIK – Egyedi bútor rendelés\n\nLehetek-e ott a gyártás során?\nIgen, a műhely megtekinthető személyes látogatás alkalmával Nagykanizsán.\n\nMit tegyek, ha nem vagyok biztos a méretben?\nSzakembereink segítenek a tér felmérésében és a megfelelő konfiguráció kiválasztásában.\n\nKaphatok-e mintaanyagokat?\nIgen, szövetmintákat tudunk küldeni postán, hogy otthon is megtekintsd az anyagokat természetes fényben.",
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
            <Link href="/butoraink/egyedi-butor" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Egyedi bútor rendelés →
            </Link>
            <Link href="/butoraink/karpitoszovetek" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Kárpitszövetek megtekintése →
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
              { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
              { title: "Tömörfa bútor", href: "/blog/tomorfa-butor" },
              { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
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
