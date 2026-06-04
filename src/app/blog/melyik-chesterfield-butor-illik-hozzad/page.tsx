import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Melyik Chesterfield bútor illik hozzád? – Enzo Design",
  description: "Stíluskalauz Chesterfield bútorokhoz: szék, puff, étkezőszék, forgószék – melyik illik hozzád és a lakásodba?",
};

export default function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Melyik Chesterfield bútor illik hozzád?</span>
        </div>
      </nav>
      <PageHero title="Melyik Chesterfield bútor illik hozzád? – Stíluskalauz színekhez és formákhoz" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Chesterfield bútorok" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A Chesterfield bútorok időtlen eleganciát és karaktert kölcsönöznek bármilyen enteriőrnek,
              legyen szó fotelről, étkezőszékről vagy puffról. De melyik típus illik legjobban hozzád?
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield szék – ahol a komfort és a stílus találkozik
            </h2>
            <p>
              A klasszikus Chesterfield szék magas háttámlájával, elegáns gombolásával és ívelt karfáival
              nappaliba, dolgozószobába vagy olvasósarokba illeszkedik. Gyakori felhasználások: kiegészítő
              ülőhelyként kanapé mellett, vállalati irodákba és tárgyalókba, kávézók és boutique üzletek
              belső tereihez. A bőr vagy bársony kárpit garantálja a tartósságot, míg a masszív fakeret
              hosszú évekre szóló befektetés.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield puff – kicsi, de sokoldalú
            </h2>
            <p>
              Sokan alábecsülik a Chesterfield puff szerepét, pedig egy jól megválasztott darab egyszerre
              több funkcióban is szolgál: lábpihentetőként, extra ülőhelyként, vagy tárolós változatként.
              A puffok gyakran azonos kárpitozással készülnek a kanapéval, így a garnitúra egységes és
              harmonikus megjelenést kap.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield étkezőszék – a kifinomult vacsorák kísérője
            </h2>
            <p>
              A Chesterfield étkezőszék letisztultabb formában, gombolással és ívelt vonalvezetéssel készül.
              Ideális rusztikus vagy vintage étkezőkbe, vendéglátóhelyekre, vagy home office munkaszékként.
              Anyagválasztéka – bőr, bársony, velúr – praktikussá és könnyen tisztíthatóvá teszi.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield forgószék – luxus az irodában
            </h2>
            <p>
              A Chesterfield forgószék egyedi megjelenésével prémium munkahelyet teremt ügyvédi irodákban,
              vezetői szobákban vagy home office berendezésekben. Kombinálja az irodai komfortot a tradicionális
              Chesterfield stílussal, gördülékeny mozgást és ergonomikus kialakítást kínálva.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              A színek jelentése a Chesterfield bútorok világában
            </h2>
            <p>
              A színválasztás meghatározza a tér hangulatát. A zöld fotel előtűnik natúr tónusú nappaliban,
              míg a kék verzió nyugalmat sugall. A barna és a bézs klasszikus bőrhatást ad, a szürke pedig
              modern, skandináv stílusba illeszkedik. Az Enzo Design-nél minden Chesterfield bútor
              teljesen egyedi szín- és anyagkombinációban rendelhető.
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
      <ContactFormSection />
    </>
  );
}
