import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "A Chesterfield kanapé eredete – Enzo Design",
  alternates: { canonical: "https://enzodesign.hu/chesterfield/a-chesterfield-kanape-eredete" },
  openGraph: {
    title: "A Chesterfield kanapé eredete – Enzo Design",
    description: "A Chesterfield kanapé 300 éves brit örökség. Hogyan vált a 4. Chesterfield Earl bútorstílusa időtálló ikonná? Eredet, hagyomány és mai formák.",
    url: "https://enzodesign.hu/chesterfield/a-chesterfield-kanape-eredete",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">A Chesterfield kanapé eredete</span>
        </div>
      </nav>
      <PageHero
        moduleId="chesterfield-a-chesterfield-kanape-eredete:hero"
        defaults={{ title: "A Chesterfield kanapé eredete" }}
      />

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            A Chesterfield kanapék stílusa és formai megoldásai évszázadok óta alig változtak – és pont ez a legfőbb erősségük. Jellegzetes, mély gombolás, párnázott karfák, egyenes háttámla, gyakran bőrből készült burkolat – mindezek együtt határozzák meg a Chesterfield karakterét. Ezek az elemek nemcsak esztétikailag egyediek, de a tartósságot és a kényelmet is szolgálják.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Stílus és formajegyek
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Chesterfield kanapé legmeghatározóbb jellemzője a mély gombolásos technika, amit eredetileg azért alkalmaztak, hogy a bútor ne veszítsen a formájából. Ez a technika nemcsak díszítőelem, hanem a kárpit tartását is szolgálja. A gombok precíz elhelyezése és az anyag feszessége garantálja a minőséget.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A másik ikonikus elem a tekintélyes, hengerelt karfa, ami gyakran a háttámla vonalával egy magasságban fut. Ez a harmonikus arányokkal kialakított szerkezet egyensúlyt teremt a bútor megjelenésében, és egyúttal kényelmes támaszt is nyújt.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Az anyaghasználat szintén meghatározó. A klasszikus Chesterfield modellek kizárólag magas minőségű, valódi bőrből készültek. Ma már azonban elérhetők különféle szövetborításokkal is, amelyek lehetővé teszik, hogy a bútor illeszkedjen a modern enteriőrökhöz. A bársonyos kárpit vagy akár a lenvászon bevonat új színt és stílust vihet a klasszikus formába.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Chesterfield formajegyek egyedisége nemcsak a lakberendezők körében népszerű, hanem azok számára is, akik hosszú távra terveznek. Egy jól megválasztott Chesterfield bútor több generációt is kiszolgálhat, és közben sem veszít patinás megjelenéséből.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Az időtállóság, a részletgazdag kidolgozás és a kézműves precizitás miatt a Chesterfield stílus egy életre szóló befektetés, mely minden térben karakteres központi elemmé válik.
              </p>
            </div>

            <div className="space-y-3">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/1" }}>
                <Image src="/images/chesterfield-stilusjegyek-panorama.webp" alt="Chesterfield kanapé stílusjegyek" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-gombolasos-technika.webp" alt="Chesterfield gombolásos technika" fill className="object-cover" />
                </div>
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-borszovet-boritasu.webp" alt="Chesterfield bőrszövet borítás" fill className="object-cover" />
                </div>
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-modern-enterior.webp" alt="Chesterfield modern enteriőrben" fill className="object-cover" />
                </div>
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-klasszikus-stilus.webp" alt="Chesterfield klasszikus stílus" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KAPCSOLÓDÓ CIKKEK */}
      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
              { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
              { title: "A Chesterfield a modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
            ].map(a => (
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
