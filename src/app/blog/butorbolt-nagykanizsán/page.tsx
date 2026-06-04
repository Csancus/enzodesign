import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bútorbolt Nagykanizsán – Enzo Design",
  description: "Prémium kárpitozott bútorok helyi megvásárlásával és kiszállításával – az Enzo Design nagykanizsai bemutatóterme.",
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
            <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Enzo Design bemutatóterem" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Ha prémium kárpitozott bútort keres Nagykanizsán vagy a közelben, az Enzo Design a legjobb választás.
              2000 nm-es telephelyünkön közel 20 éve gyártunk egyedi kanapékat, foteleket és franciaágyakat – közvetlenül a gyártótól.
            </p>
            <p>
              Bemutatótermünkben személyesen megtekintheti a különböző kollekciók darabjait: Old's Club, Ivone, Chesterfield,
              New York, Joker, Design és Cannes modellek állnak rendelkezésre. A szövetmintatárat is helyszínen végig lehet
              nézni – több mint 100 féle szövetből és valódi olasz bőrből lehet választani.
            </p>
            <p>
              A megrendelés menete egyszerű: egyeztetjük az igényeket, szövet- és méretválasztás után 4–6 héten belül
              elkészül a bútor és házhoz szállítjuk az ország bármely pontjára.
            </p>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Miért érdemes közvetlenül a gyártótól vásárolni?
            </h2>
            <p>
              Közvetítők nélkül dolgozunk, ami versenyképes árakat jelent. Emellett minden bútort kézzel ellenőrzünk,
              tömörfa szerkezettel készítünk és 3 év termékgaranciával, 10 év vázgaranciával adjuk ki a kezünkből.
            </p>
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
      <ContactFormSection />
    </>
  );
}
