import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútorbolt Nagykanizsán – prémium kárpitozott bútorok",
  description: "Egyedi kárpitozott bútorok gyártótól Nagykanizsán – közel 20 éve. 2000 nm bemutatóterem, 100+ szövet, házhozszállítás az egész országba. Enzo Design.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Bútorbolt Nagykanizsán – prémium kárpitozott bútorok",
  "description": "Egyedi kárpitozott bútorok gyártótól Nagykanizsán – közel 20 éve. 2000 nm bemutatóterem, 100+ szövet, házhozszállítás az egész országba.",
  "image": "https://www.enzodesign.hu/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-07",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/butorbolt-nagykanizsán",
};

export default async function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Bútorbolt Nagykanizsán</span>
          </div>
          <time dateTime="2026-06-07" className="text-xs text-gray-500">Frissítve: 2026. június 7.</time>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:butorbolt-nagykanizsán"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Bútorbolt Nagykanizsán",
              subtitle: "Prémium kárpitozott bútorok helyi megvásárlásával és kiszállítással – az Enzo Design nagykanizsai bemutatóterme közel 20 éve kínál egyedi bútorokat gyártótól közvetlenül.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
              alt: "Enzo Design bemutatóterem Nagykanizsa – kárpitozott bútorok",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Miért érdemes az Enzo Design bútorboltot választani Nagykanizsán?",
              body: "Ha megbízható és prémium minőségű bútorboltot keresel Nagykanizsán, az Enzo Design a legjobb választás. Közel 20 éve gyártunk kézzel készített, egyedi kárpitozott bútorokat – közvetlenül a gyártótól, közvetítők nélkül. 2000 nm-es telephelyünkön személyesen megtekintheted a kollekció darabjait, kipróbálhatod az ülőbútorokat és konzultálhatsz szakembereinkkel.\n\nNagykanizsai bemutatótermünk könnyen elérhető a környező városokból is: Zalaegerszegről mindössze 30 km, Keszthelyről kb. 45 km, Kaposvárról kb. 55 km. Ha nem tudsz személyesen eljönni, az ország egész területére vállalunk házhozszállítást.\n\nKézzel készített, prémium bútorok – minden darab egyedi, tömörfa szerkezettel és 3+10 év garanciával.\nEgyedi megrendelés – méret, szín, szövet és forma mind testreszabható.\nMinőségi anyagok – valódi olasz bőr, prémium szövetek, több mint 100 féle mintából.\nSzemélyes konzultáció – szakembereink segítenek a választásban.\nKiszállítás – az ország bármely pontjára, az első ajtóig.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Milyen típusú bútorok közül válogathatsz?",
              body: "Bemutatótermünkben széles kínálatból választhatsz, amelyet folyamatosan frissítünk az aktuális trendeknek megfelelően.\n\nNappali bútorok\nKanapék, fotelok és sarokülőgarnitúrák – kétszemélyes, háromszemelyestől egészen a nagyobb L-alakú konfigurációkig. Ágyazható változatok is elérhetők, amelyek praktikus megoldást nyújtanak kisebb lakásokban. Legnépszerűbb modelljeink: Old's Club, Ivone, Chesterfield, New York, Joker, Design és Cannes.\n\nChesterfield kollekció\nPrémium Chesterfield kanapéink és foteleink a klasszikus brit stílust képviselik, modern anyagokkal és testreszabható méretben. Valódi olasz bőrben és prémium szövetben egyaránt rendelhetők.\n\nHasznált bútor vs. új prémium bútor\nSokan fontolgatják, hogy használt bútort vásárolnak az ár miatt. Ugyanakkor egy prémium, kézzel készített bútor 10–20 évig is kifogástalanul szolgál. Az Enzo Design bútorainak ára tartalmazza a minőségi alapanyagot, a kézimunkát és a garanciát – hosszú távon sokkal kedvezőbb befektetés.\n\nBútorbolt Zalaegerszeg, Kaposvár és Keszthely közelében\nZalaegerszeg: kb. 30 km – mintegy 30 perc autóval\nKeszthely: kb. 45 km – kb. 45 perc\nKaposvár: kb. 55 km – kb. 55 perc\n\nMennyi idő alatt készül el a bútor?\nAz egyedi megrendelések általában 4–6 héten belül elkészülnek a megrendelés visszaigazolásától számítva.",
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
            <Link href="/butoraink/kanapek" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Kanapék →
            </Link>
            <Link href="/butoraink/fotelek" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Fotelek →
            </Link>
            <Link href="/kapcsolat-es-rendeles" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Kapcsolat és nyitvatartás →
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
              { title: "Kanapé Zalaegerszegen", href: "/blog/kanape-zalaegerszegen" },
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
              { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
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
