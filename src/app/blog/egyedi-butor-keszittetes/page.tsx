import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van? – Enzo Design",
  description: "Útmutató egyedi bútor rendeléséhez: hogyan kommunikáld az ötleted, mire figyelj a méretezésnél, anyagválasztásnál és a gyártási folyamatnál.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Egyedi bútor készíttetés</span>
        </div>
      </nav>
      <PageHero moduleId="blog-egyedi-butor-keszittetes:hero" defaults={{ title: "Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van?" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Enzo Design műhely egyedi bútor" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Az egyedi kárpitozott bútor nem csupán egy funkcionális tárgy – egyfajta személyes nyilatkozat is.
              Ha van egy elképzelésed, amit nem találsz meg a boltokban, az egyedi megrendelés a legjobb megoldás.
              Az Enzo Design közel 20 éve valósítja meg vásárlói álmait saját nagykanizsai műhelyében.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              1. Vizuális kiindulópont – kép alapján is dolgozunk
            </h2>
            <p>
              A legtöbb vásárló képpel, Pinterestes inspirációval vagy akár egy vázlattal érkezik. Ez a legjobb
              kiindulópont: minél konkrétabb az elképzelés, annál pontosabb árajánlatot tudunk adni és annál
              hamarabb el tudunk indulni a gyártással. Akár egy régi bútort is megmutathat, amit meg szeretne
              újítani vagy másoltatni.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              2. Méretek és funkció – gondold át előre
            </h2>
            <p>
              Mielőtt konzultációra jössz, érdemes átgondolni néhány alapkérdést:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Milyen teret szeretnél bebútorozni, és milyen méretek férnek el?</li>
              <li>Szükséges-e ágyazható funkció?</li>
              <li>Kell-e tárolóhely alatta?</li>
              <li>Milyen szélességgel, milyen mélységgel képzeled el?</li>
            </ul>
            <p>
              Ezeket a szempontokat nem kell pontosan tudnod – de minél többet átgondolsz, annál gördülékenyebb
              lesz az egyeztetés.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              3. Anyagválasztás – több mint 100 szövetféleség
            </h2>
            <p>
              Tömörfa szerkezettel dolgozunk, amelyre prémium szöveteket vagy bőröket kárpitozunk. A szövetmintatárból
              helyszínen is lehet válogatni – több mint 100 szövetféleség és valódi olasz bőr áll rendelkezésre.
              Kisgyermekes vagy kisállatos otthonba nagy kopásállóságú anyagokat ajánlunk (min. 50.000 martindale).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { anyag: "Valódi bőr", jellemzők: "Tartós, patinás öregedés, könnyen tisztítható, légáteresztő" },
                { anyag: "Bársony", jellemzők: "Luxus megjelenés, puha tapintás, szép mélységű szín" },
                { anyag: "Mikroszálas", jellemzők: "Praktikus, foltálló, könnyen tisztítható, kisállat-barát" },
                { anyag: "Sennilé / lenvászon", jellemzők: "Természetes hatás, modern megjelenés, közepes kopásállóság" },
              ].map((item) => (
                <div key={item.anyag} className="bg-[#f5f0e8] p-4">
                  <p className="font-semibold text-[#1c1c1c] text-sm mb-1">{item.anyag}</p>
                  <p className="text-gray-600 text-sm">{item.jellemzők}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              4. Szakmai konzultáció – mi tanácsadók is vagyunk
            </h2>
            <p>
              A gyártó nemcsak kézműves, hanem tanácsadó is. Megmutatjuk, mi fog működni az adott méretben
              és formában, és mi az, amire érdemes figyelni. Ha az eredeti ötleted néhány ponton módosítást
              igényel a stabilitás vagy a tartósság érdekében, azt nyíltan elmondjuk – és közösen megtaláljuk
              a legjobb megoldást.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              5. Rugalmasság – szinte bármit el tudunk készíteni
            </h2>
            <p>
              Ha egy látott darabot más szövetben, más méretben, vagy más kartámasz-megoldással szeretnéd,
              azt is meg tudjuk valósítani. Az elkészítési idő általában 4–6 hét a visszaigazolástól számítva.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Hogyan indul a folyamat?
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Telefonon vagy e-mailben felveszed a kapcsolatot</li>
              <li>Konzultáció – személyesen Nagykanizsán vagy online</li>
              <li>Árajánlat 2 napon belül</li>
              <li>Szövet- és méretegyeztetés</li>
              <li>Gyártás – 4–6 hét</li>
              <li>Házhozszállítás az ország bármely pontjára</li>
            </ol>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Van egy elképzelésed? Vegye fel velünk a kapcsolatot!</p>
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
              { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
              { title: "Tömörfa bútor", href: "/blog/tomorfa-butor" },
              { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
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
