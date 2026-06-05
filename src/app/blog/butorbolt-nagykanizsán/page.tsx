import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Bútorbolt Nagykanizsán: Prémium választék, személyesen és kiszállítással is elérhető – Enzo Design",
  description: "Prémium kárpitozott bútorok Nagykanizsán – egyedi kanapék, fotelok, Chesterfield kollekció. Személyes megtekintés és házhozszállítás az ország egész területére.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Bútorbolt Nagykanizsán</span>
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
              alt: "Enzo Design bemutatóterem Nagykanizsa",
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
