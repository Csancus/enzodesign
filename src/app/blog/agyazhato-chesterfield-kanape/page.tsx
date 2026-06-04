import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ágyazható Chesterfield kanapé – stílus és praktikum egy bútorban – Enzo Design",
  description: "Az ágyazható Chesterfield kanapé ötvözi a klasszikus stílust a kényelmes vendégágy funkcióval – ideális kis lakásba és vendégszobába.",
};

export default function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Ágyazható Chesterfield kanapé</span>
        </div>
      </nav>
      <PageHero title="Ágyazható Chesterfield kanapé – stílus és praktikum egy bútorban" />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Ágyazható Chesterfield kanapé" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A kárpitozott Chesterfield kanapé önmagában is designkincs, de ha kiegészítik egy
              ágyazható funkcióval, rendkívül sokoldalú bútorrá válik. Ideális azok számára, akik
              nem akarnak kompromisszumot kötni az esztétika és a praktikusság között.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Mi az az ágyazható Chesterfield kanapé?
            </h2>
            <p>
              Ez a bútortípus a klasszikus Chesterfield esztétikát ötvözi egy praktikus vendégágy
              mechanizmussal. A jellegzetes kartámaszok, a gombolt kárpitozás és a masszív váz
              megmarad – miközben a bútor belsejében egy diszkrét kihúzható alvófelület lapul.
              Kétfős alvásra alkalmas, prémium bársony vagy valódi bőr kárpitozással.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Mikor ideális az ágyazható változat?
            </h2>
            <p>
              Kisebb lakásokban, ahol a nappalit vendégszobává is kell alakítani alkalmanként.
              Stúdióapartmanokban, ahol minden négyzetméter számít. Home office-ban, ahol a
              kanapé egyszerre munkahely-kiegészítő és vendégágy. Az ágyazható funkció opcionálisan
              rendelhető minden Enzo Design kanapéhoz.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Miért jobb, mint egy hagyományos kihúzható kanapé?
            </h2>
            <p>
              A hagyományos kihúzható kanapék általában nem nyújtanak prémium megjelenést.
              Az ágyazható Chesterfield ellenben napközben elegáns nappali bútor, éjszaka kényelmes
              vendégágy – minőségi kivitelezéssel, tartós szerkezettel. Az ágyfunkció felára
              190.500 Ft, és minden kollekciónkhoz elérhető.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Színek és anyagok
            </h2>
            <p>
              Az ágyazható Chesterfield is teljes mértékben személyre szabható: szövet, bőr,
              méret és szín szerint egyaránt. A semleges tónusok – bézs, szürke, tengerészkék –
              sokoldalúak, de élénkebb árnyalatokra is lehetőség van.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Érdekli az ágyazható változat? Kérjen árajánlatot!</p>
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
