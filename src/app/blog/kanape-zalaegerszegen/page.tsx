import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kanapé Zalaegerszegen: Hogyan találod meg a tökéletes bútort otthonodba? – Enzo Design",
  description: "Kényelmes kanapét keresel Zalaegerszegen? Útmutató a típusokhoz, anyagokhoz és a vásárláshoz. Az Enzo Design Nagykanizsán – 30 km, házhozszállítással.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Kanapé Zalaegerszegen</span>
        </div>
      </nav>
      <PageHero moduleId="blog-kanape-zalaegerszegen:hero" defaults={{ title: "Kanapé Zalaegerszegen" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image
              src="/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp"
              alt="Kanapé Zalaegerszegen – Enzo Design"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Egy új kanapé kiválasztása nem csupán esztétikai kérdés – ez a döntés évekre meghatározza a nappalid
              hangulatát, kényelmed és az otthonod egész légkörét. Ha Zalaegerszegen keresel minőségi kanapét,
              érdemes szélesebb körben nézni: az Enzo Design Nagykanizsán, mindössze 30 km-re kínál prémium,
              kézzel készített kárpitozott bútorokat.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Milyen típusú kanapék közül válogathatsz?
            </h2>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Ágyazható kanapé</h3>
            <p>
              Kisebb lakásban ideális megoldás, ha vendégszoba nincs, de időnként vendégeket fogadsz. A modern
              ágyazható kanapék mechanizmusa megbízható, és kényelmes fekvőfelületet biztosítanak. Az Enzo Design
              kínálatában több modell is elérhető ágyazható kivitelben.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Klasszikus fix kanapé</h3>
            <p>
              Ha nem szükséges az ágyazható funkció, a fix kanapé általában kényelmesebb ülőfelületet és stabilabb
              szerkezetet kínál. Ezek jellemzően mélyebb ülőrésszel és tartósabb rugózással készülnek.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Sarokkanapé</h3>
            <p>
              Tágas nappaliba ideális, ahol maximálisan ki szeretnéd használni a teret. Az L- vagy U-alakú
              konfigurációk akár 5–7 személy számára is kényelmes ülőhelyet biztosítanak.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mire érdemes figyelni kanapévásárlásakor?
            </h2>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Méret és elhelyezés</h3>
            <p>
              Mérd fel a szoba méretét vásárlás előtt. A kanapénak legalább 40–50 cm szabad helyet kell hagynia
              minden oldalán a mozgáshoz. A sarokkanapénál figyelj a kijáratokra és az egyéb bútorok elhelyezésére.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Kárpit és anyaghasználat</h3>
            <p>
              A szövet kopásállóságát martindale-számmal mérik – legalább 50.000 értékig megbízható háztartási
              használatra. Kisgyermekes vagy kisállatos otthonban a mikroszálas vagy technikai szövet a legpraktikusabb.
              A valódi bőr elegáns és tartós, de gondosabb ápolást igényel.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Funkciók</h3>
            <p>
              Ágyazható mechanizmus, ágyneműtartó, USB-töltő – ezek ma már nem luxus, hanem praktikus kiegészítők.
              Döntsd el előre, hogy mire van szükséged a mindennapokban.
            </p>

            <div className="relative aspect-[16/7] overflow-hidden my-8">
              <Image
                src="/images/9a0b1d_8720015a57b84595a2f5a3a3abe73648.webp"
                alt="Prémium kanapé Zalaegerszeg közelében"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Hol vásárolj kanapét Zalaegerszeg közelében?
            </h2>
            <p>
              Az Enzo Design Nagykanizsán, mindössze 30 km-re található Zalaegerszegről. 2000 nm-es
              bemutatótermünkben személyesen megtekintheted és kipróbálhatod a modelleket.
              Legnépszerűbb modelljeink a zalaegerszegi vásárlók körében: Ivone, Old's Club és a Chesterfield kollekció.
              Mindhárom rendelhető kétszemélyes, háromszemelyese és sarokkanapé formában, több száz szövet- és bőrfajtával.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Szállítás Zalaegerszegre
            </h2>
            <p>
              Ha nem tudsz eljönni személyesen, bútorainkat az első biztonságos ajtóig szállítjuk az ország bármely
              pontjára, így Zalaegerszegre is. A szállítást a gyártás befejezésekor – általában 4–6 héttel a megrendelés
              után – koordináljuk, és előre egyeztetünk a pontos időpontról.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Tévhitek és tények a kanapévásárlásról
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f0e8]">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Tévhit</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Tény</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">A bőrkanapé kényelmetlen nyáron</td>
                    <td className="border border-gray-200 px-4 py-2">A valódi bőr légáteresztő és hőszabályozó</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Az ágyazható kanapé nem kényelmes</td>
                    <td className="border border-gray-200 px-4 py-2">A modern mechanizmusok kényelmes fekhelyet biztosítanak</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">A használt kanapé jobb ár/érték arányú</td>
                    <td className="border border-gray-200 px-4 py-2">Prémium new bútor 10–20 évig tart – olcsóbb hosszú távon</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Gyakran ismételt kérdések
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[#1c1c1c]">Mennyi idő alatt kapom meg a kanapémat?</p>
                <p>Egyedi megrendeléseknél általában 4–6 héttel a visszaigazolás után. Raktárkészletből gyorsabb is lehetséges.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1c]">Érdemes személyesen megnézni a kanapét vásárlás előtt?</p>
                <p>Mindenképpen ajánljuk – az anyag tapintása, a kényelem és a szín online nem ítélhető meg pontosan.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1c]">Lehet egyedi méretet rendelni?</p>
                <p>Igen, minden modellünk rendelhető egyedi méretben és kárpittal.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Rendelje meg kanapéját most!</p>
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
              { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
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
