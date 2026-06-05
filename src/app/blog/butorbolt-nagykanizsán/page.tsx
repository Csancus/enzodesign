import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

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
      <PageHero moduleId="blog-butorbolt-nagykanizsán:hero" defaults={{ title: "Bútorbolt Nagykanizsán" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image
              src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp"
              alt="Enzo Design bemutatóterem Nagykanizsa"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Ha megbízható és prémium minőségű bútorboltot keresel Nagykanizsán, az Enzo Design a legjobb választás.
              Közel 20 éve gyártunk kézzel készített, egyedi kárpitozott bútorokat – közvetlenül a gyártótól, közvetítők nélkül.
              2000 nm-es telephelyünkön személyesen megtekintheted a kollekció darabjait, próbálhatod az ülőbútorokat,
              és konzultálhatsz szakembereinkkel.
            </p>
            <p>
              Nagykanizsai bemutatótermünk könnyen elérhető a környező városokból is:
              Zalaegerszegről mindössze 30 km, Keszthelyről kb. 45 km, Kaposvárról kb. 55 km.
              Ha nem tudsz személyesen eljönni, az ország egész területére vállalunk házhozszállítást.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Miért érdemes az Enzo Design bútorboltot választani Nagykanizsán?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kézzel készített, prémium bútorok</strong> – minden darab egyedi, tömörfa szerkezettel és 3+10 év garanciával.</li>
              <li><strong>Egyedi megrendelés</strong> – méret, szín, szövet és forma mind testreszabható.</li>
              <li><strong>Minőségi anyagok</strong> – valódi olasz bőr, prémium szövetek, több mint 100 féle mintából.</li>
              <li><strong>Személyes konzultáció</strong> – szakembereink segítenek a választásban.</li>
              <li><strong>Kiszállítás</strong> – az ország bármely pontjára, az első ajtóig.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Milyen típusú bútorok közül válogathatsz?
            </h2>
            <p>
              Bemutatótermünkben széles kínálatból választhatsz, amelyet folyamatosan frissítünk az aktuális trendeknek megfelelően.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Nappali bútorok</h3>
            <p>
              Kanapék, fotelok és sarokülőgarnitúrák – kétszemélyes, háromszemelyestől egészen a nagyobb L-alakú konfigurációkig.
              Kínálatunkban megtalálhatók az ágyazható változatok is, amelyek praktikus megoldást nyújtanak kisebb lakásokban.
              Legnépszerűbb modelljeink: Old's Club, Ivone, Chesterfield, New York, Joker, Design és Cannes.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Chesterfield kollekció</h3>
            <p>
              Prémium Chesterfield kanapéink és foteleink a klasszikus brit stílust képviselik, modern anyagokkal és
              testreszabható méretben. Valódi olasz bőrben és prémium szövetben egyaránt rendelhetők.
            </p>

            <div className="relative aspect-[16/7] overflow-hidden my-8">
              <Image
                src="/images/9a0b1d_422ba4768edb46bbabf18c71920c58b5.webp"
                alt="Prémium kanapé kollekció Nagykanizsán"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Használt bútorbolt Nagykanizsán – érdemes-e inkább új bútor?
            </h2>
            <p>
              Sokan fontolgatják, hogy használt bútort vásárolnak az ár miatt. Ugyanakkor fontos mérlegelni a hosszú távú
              értéket: egy prémium, kézzel készített bútor 10–20 évig is kifogástalanul szolgál, míg egy olcsó vagy
              másodkézből vett darab hamar elveszítheti formáját és kényelmi tulajdonságait.
            </p>
            <p>
              Az Enzo Design bútorainak ára tartalmazza a minőségi alapanyagot, a kézimunkát és a garanciát.
              Ha hosszú távra tervezel, a közvetlen gyártói ár sokkal kedvezőbb befektetés, mint az első látásra
              olcsóbbnak tűnő, de hamar kopó alternatívák.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Bútorbolt Zalaegerszeg, Kaposvár és Keszthely környékén
            </h2>
            <p>
              Ha a közelben laksz, nagyon könnyen elérsz hozzánk:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Zalaegerszeg:</strong> kb. 30 km – mintegy 30 perc autóval</li>
              <li><strong>Keszthely:</strong> kb. 45 km – kb. 45 perc</li>
              <li><strong>Kaposvár:</strong> kb. 55 km – kb. 55 perc</li>
            </ul>
            <p>
              Ha nem tudsz eljönni személyesen, küldj üzenetet vagy hívj minket – minden kérdésre válaszolunk,
              és online is segítünk a szövet- és méretválasztásban.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Gyakran ismételt kérdések
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[#1c1c1c]">Hol található az Enzo Design bemutatóterme?</p>
                <p>Nagykanizsán, 2000 nm-es telephelyen. Pontos cím és nyitvatartás megtalálható a kapcsolat oldalon.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1c]">Lehetséges-e kiszállítást kérni?</p>
                <p>Igen, az ország egész területére vállalunk házhozszállítást. A szállítási feltételeket egyénileg egyeztetjük.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1c]">Mennyi idő alatt készül el a bútor?</p>
                <p>Az egyedi megrendelések általában 4–6 héten belül elkészülnek a megrendelés visszaigazolásától számítva.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1c]">Mitől prémium egy kárpitozott bútor?</p>
                <p>Tömörfa szerkezet, min. 50.000 martindale kopásállóságú kárpit, kézzel végzett kárpitozás és több éves garancia – ezek a legfontosabb mutatók.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Érdekli? Vegye fel velünk a kapcsolatot!</p>
            <a href="tel:+36303778983" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              +36 30 377 8983
            </a>
          </div>

          <div className="mt-6">
            <Link href="/blog" className="text-[#7d6142] font-semibold hover:underline text-sm">← Vissza a bloghoz</Link>
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
                {a.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
