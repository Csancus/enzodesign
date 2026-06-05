import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Modern Chesterfield kanapé – klasszikus stílus, kortalan eleganciával – Enzo Design",
  description: "A modern Chesterfield kanapé egyesíti a klasszikus formát a mai enteriőr trendekkel. Loft, skandináv, minimalista – minden stílusba illik. Testreszabható, kézzel készített.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Modern Chesterfield kanapé</span>
        </div>
      </nav>
      <PageHero moduleId="blog-modern-chesterfield-kanape:hero" defaults={{ title: "Modern Chesterfield kanapé" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image
              src="/images/chesterfield-modern-enterior-1.webp"
              alt="Modern Chesterfield kanapé elegáns nappaliban"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Sokan azt gondolják, hogy a Chesterfield kanapé csak klasszikus, ódivatú enteriőrbe illik.
              Ez azonban tévhit – a Chesterfield az egyik legjobban alkalmazkodó bútortípus, amely modern lakásban
              éppúgy otthon van, mint egy vintage vagy indusztriális stílusú térben. A kulcs az anyagválasztás
              és a szín.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mi is az a modern Chesterfield kanapé?
            </h2>
            <p>
              A modern Chesterfield a klasszikus stílus újragondolása: luxus és letisztultság ötvözete. Az eredeti forma
              – mélyen gombolt háttámla, ívelt kartámaszok, tömörfa szerkezet – megmarad, de az anyagok, a színek
              és a méretek a mai igényekhez igazodnak.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Letisztultabb vonalak, de megőrzött karakter</li>
              <li>Széles színpaletta: pasztelloktól a mélytónusú árnyalatokig</li>
              <li>Változatos anyagok: bársony, mikroszálas, prémium hatású szövetek, valódi bőr</li>
              <li>Rugalmas méretkonfigurációk</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Milyen enteriőrbe illik legjobban?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { style: "Loft / indusztriális", desc: "Sötét bőr, szegecselt részletek, fém és betonfelületek mellett – ez a kombináció igazi jellemet ad a térnek." },
                { style: "Skandináv", desc: "Szürkéskék vagy homokszín bársony változat, vékony falábakon – természetes anyagokkal kombinálva." },
                { style: "Modern minimalista", desc: "Egyszínű, semleges árnyalatú Chesterfield, kevés kiegészítővel – a forma önmagáért beszél." },
                { style: "Vintage / eklektikus", desc: "Barna vagy konyak bőr, fa bútorokkal és vintage részletekkel – időtlen elegancia." },
              ].map((item) => (
                <div key={item.style} className="bg-[#f5f0e8] p-4">
                  <p className="font-semibold text-[#1c1c1c] text-sm mb-1">{item.style}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative aspect-[16/7] overflow-hidden my-8">
              <Image
                src="/images/chesterfield-modern-enterior-2.webp"
                alt="Chesterfield kanapé indusztriális enteriőrben"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              A forma időtlen, az anyag rugalmas
            </h2>
            <p>
              Az Enzo Design Chesterfield kollekcióban több mint 100 szövet- és bőrfajtából lehet választani.
              A mélyen gombolt háttámla és az ívelt kartámaszok az eredeti formát tartják – de a szín, az anyag
              és a méret szabadon testreszabható. Legyen szó kétszemélyes kanapéról, háromszemelyesről vagy
              sarokkanapéról – minden konfiguráció elérhető, 399.810 Ft-tól.
            </p>

            <blockquote className="border-l-4 border-[#7d6142] pl-4 italic text-gray-500 my-6">
              „Bizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak." – Bernlef
            </blockquote>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mit érdemes mérlegelni a választáskor?
            </h2>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Méretek és elrendezés</h3>
            <p>
              A Chesterfield karfái és háttámlája miatt általában kissé nagyobb helyet igényel, mint egy hasonló
              befogadóképességű egyszerűbb kanapé. Mérd fel a teret, mielőtt döntesz – különösen kisebb lakásban.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Szín és anyag összehangolása</h3>
            <p>
              Ha a szoba többi bútora semleges tónusú, egy merészebb szín (például smaragdzöld bársony vagy mélykék)
              izgalmas kontrasztot adhat. Ha inkább harmonikus összképet szeretnél, válassz a falszínnel rokon árnyalatot.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Láb és részletek</h3>
            <p>
              A lábak magassága és anyaga sokat számít: magasabb, vékonyabb falábakon a Chesterfield könnyedebb,
              modernebb hatást kelt; alacsonyabb, tömörebb lábakon tradicionálisabb.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Kiegészítő bútorok
            </h2>
            <p>
              A Chesterfield kanapé mellé érdemes illő foteleket vagy puffot választani a teljes ülőgarnitúrához.
              Az Enzo Design kínálatában Chesterfield fotelok és zsámolyok is elérhetők, amelyek stílusban tökéletesen
              kiegészítik a kanapét.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Enzo Design – 100% kézzel készített, magyar műhelyben
            </h2>
            <p>
              Minden Chesterfield bútorunk Nagykanizsán, saját műhelyünkben készül kézzel. Tömörfa szerkezet,
              prémium rugózás, min. 50.000 martindale kopásállóságú kárpit – és 3 + 10 év garancia.
              Az ár, a méret és az anyag teljes mértékben testreszabható.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Gyakran ismételt kérdések
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-[#1c1c1c]">Mennyi idő alatt készül el az egyedi Chesterfield?</p>
                <p>Általában 4–6 hét a megrendelés visszaigazolásától számítva.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1c]">Elérhető-e nem bőr anyagban?</p>
                <p>Igen – bársony, mikroszálas, sennilé és egyéb prémium szövetek széles választékában.</p>
              </div>
              <div>
                <p className="font-semibold text-[#1c1c1c]">Hogyan kell karbantartani?</p>
                <p>Szövet esetén rendszeres porszívózás ajánlott. Bőr esetén félévente bőrápolóval kezelendő.</p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Rendelje meg Chesterfield kanapéját!</p>
            <Link href="/butoraink/kanapek/chesterfield-kanapek" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              Árak és kollekció
            </Link>
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
              { title: "Bőr fotel", href: "/blog/bor-fotel" },
              { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
              { title: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
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
