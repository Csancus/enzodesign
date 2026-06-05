import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Melyik Chesterfield bútor illik hozzád? – Stíluskalauz színekhez és formákhoz – Enzo Design",
  description: "Stíluskalauz Chesterfield bútorokhoz: szék, puff, étkezőszék, forgószék – és melyik szín illik az enteriőrödhöz. Teljesen személyre szabható.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Melyik Chesterfield bútor illik hozzád?</span>
        </div>
      </nav>
      <PageHero moduleId="blog-melyik-chesterfield-butor-illik-hozzad:hero" defaults={{ title: "Melyik Chesterfield bútor illik hozzád? – Stíluskalauz színekhez és formákhoz" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp" alt="Chesterfield bútor kollekció" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A Chesterfield bútorok időtlen eleganciát és karaktert kölcsönöznek bármilyen enteriőrnek.
              De nem csak kanapé létezik ebből a stílusból – és nem is mindegy, melyik darabot választod,
              milyen térbe és milyen célra. Ez az útmutató segít megtalálni a hozzád illő darabot.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield szék – ahol a komfort és a stílus találkozik
            </h2>
            <p>
              A klasszikus Chesterfield szék magas háttámlájával, elegáns gombolásával és ívelt karfáival
              kiváló kiegészítő ülőhely nappaliba vagy olvasósarokba. Bőr vagy bársony kárpit garantálja
              a tartósságot, a masszív fakeret pedig hosszú évekre szóló befektetés.
            </p>
            <p><strong>Ideális helyek:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Kiegészítő ülőhelyként kanapé mellé</li>
              <li>Vállalati irodákba, tárgyalókba</li>
              <li>Kávézók, boutique üzletek belső tereihez</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield puff – kicsi, de sokoldalú
            </h2>
            <p>
              Sokan alábecsülik a Chesterfield puff szerepét, pedig egyszerre több funkcióban is szolgál:
              lábpihentetőként a fotel előtt, extra ülőhelyként vendégek fogadásakor, vagy tárolós változatban
              praktikus rendszerezőként. Általában a kanapéval azonos kárpitozással készül – így a garnitúra
              egységes és harmonikus marad.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield étkezőszék – a kifinomult vacsorák kísérője
            </h2>
            <p>
              Az étkezőszék változat letisztultabb formában, de ugyanolyan gombolással és ívelt vonalvezetéssel
              készül. Rusztikus vagy vintage étkezőkbe, elegáns vendéglátóhelyekre, de home office munkaszékként
              is kiváló választás. Bőr, bársony és velúr kárpitban egyaránt elérhető.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield forgószék – luxus az irodában
            </h2>
            <p>
              A Chesterfield forgószék egyedi megjelenésével prémium munkahelyet teremt. Ügyvédi irodákba,
              vezetői szobákba vagy home office berendezésbe ideális – kombinálja az irodai komfortot a
              tradicionális Chesterfield stílussal.
            </p>

            <div className="relative aspect-[16/7] overflow-hidden my-8">
              <Image src="/images/chesterfield-klasszikus-stilus.webp" alt="Chesterfield klasszikus stílus" fill className="object-cover" />
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              A színek jelentése a Chesterfield bútorok világában
            </h2>
            <p>
              A szín nem csak esztétikai döntés – meghatározza a tér hangulatát és az egész enteriőr jellegét.
            </p>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f0e8]">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Szín</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Hatás és jelentés</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Ajánlott stílus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Zöld</td>
                    <td className="border border-gray-200 px-4 py-2">Frissítő, természetközeli, kifinomult</td>
                    <td className="border border-gray-200 px-4 py-2">Modern, eklektikus</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Kék / tengerészkék</td>
                    <td className="border border-gray-200 px-4 py-2">Mély elegancia, intellektuális hangulat</td>
                    <td className="border border-gray-200 px-4 py-2">Skandináv, minimalista</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Barna / konyak</td>
                    <td className="border border-gray-200 px-4 py-2">Klasszikus, tekintélyt sugárzó</td>
                    <td className="border border-gray-200 px-4 py-2">Tradicionális, vintage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Szürke / bézs</td>
                    <td className="border border-gray-200 px-4 py-2">Modern, letisztult, semleges</td>
                    <td className="border border-gray-200 px-4 py-2">Skandináv, loft</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Melyiket válaszd?
            </h2>
            <p>
              Ha a nappalidba keresel, és a kanapé mellé illő kiegészítő ülőhelyre van szükséged, a szék
              vagy fotel a legjobb választás. Ha kisebb teret bútorozol be és minden négyzetméter számít,
              egy puff tökéletes kiegészítő. Ha étkezőt rendezed be stílusosan, az étkezőszék a nyerő.
            </p>
            <p>
              Az Enzo Design-nél minden Chesterfield bútor teljesen egyedi szín- és anyagkombinációban
              rendelhető – segítünk megtalálni a hozzád és az otthonodhoz legjobban illő darabot.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Nézze meg Chesterfield kollekciónkat!</p>
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
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
              { title: "Bőr fotel", href: "/blog/bor-fotel" },
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
