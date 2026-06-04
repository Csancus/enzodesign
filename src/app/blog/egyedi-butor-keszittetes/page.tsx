import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van? – Enzo Design",
  description: "Útmutató egyedi bútor rendeléséhez: hogyan kommunikáld az ötleted, mire figyelj a méretezésnél, anyagválasztásnál és a gyártási folyamatnál.",
};

export default function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Egyedi bútor készíttetés</span>
        </div>
      </nav>
      <PageHero title="Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van?" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Enzo Design műhely" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Az egyedi kárpitozott bútor nem csupán egy funkcionális tárgy – egyfajta személyes
              nyilatkozat is. Ha van egy elképzelésed, amit nem találsz meg a boltokban, az egyedi
              megrendelés a legjobb megoldás.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              1. Vizuális kiindulópont
            </h2>
            <p>
              Egy kép vagy rajz alapján dolgozni remek kiindulópont. Ha van egy Pinterestes fotód,
              egy régi bútorod, amit megújítanál, vagy akár egy vázlatod, azt hozd magaddal a konzultációra.
              Minél konkrétabb az elképzelés, annál pontosabb árajánlatot tudunk adni.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              2. Méretek és funkció
            </h2>
            <p>
              Gondold át, milyen teret szeretnél bebútorozni. Szükséges-e ágyazható funkció?
              Kell-e tárolóhely alatta? Milyen szélesen, milyen mélységgel férne el? Ezeket a
              szempontokat érdemes már az első találkozó előtt átgondolni.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              3. Anyagválasztás
            </h2>
            <p>
              Tömörfa szerkezettel dolgozunk, amelyre prémium szöveteket vagy bőröket kárpitozunk.
              A szövetmintatárból helyszínen is lehet válogatni – több mint 100 szövetféleség és
              valódi olasz bőr áll rendelkezésre. Nagy kopásállóságú anyagokat ajánlunk, különösen
              ha kisgyerek vagy kisállat is van a háztartásban.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              4. Szakmai konzultáció
            </h2>
            <p>
              A gyártó nemcsak kézműves, hanem tanácsadó is. Megmutatjuk, mi fog működni
              az adott méretben és formában, és mi az, amire érdemes figyelni. Ha az eredeti
              ötleted néhány ponton módosítást igényel a stabilitás vagy a tartósság érdekében,
              azt nyíltan elmondjuk – és közösen megtaláljuk a legjobb megoldást.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              5. Rugalmasság
            </h2>
            <p>
              Szinte bármilyen egyedi kárpitozott bútort el tudunk készíteni. Ha egy látott darabot
              más szövetben, más méretben, vagy más kartámasz-megoldással szeretnéd, azt is meg
              tudjuk valósítani. Az elkészítési idő általában 4–6 hét.
            </p>
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
      <ContactFormSection />
    </>
  );
}
