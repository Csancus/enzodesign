import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Chesterfield stílus és formajegyek – Enzo Design",
  description: "A Chesterfield kanapék jellegzetes stílusjegyei: mély gombolás, párnázott karfák, egyenes háttámla. Ismerje meg a klasszikus forma titkát.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Stílus és formajegyek</span>
        </div>
      </nav>

      <PageHero
        moduleId="chesterfield-stilus-es-formajegyek:hero"
        defaults={{
          label: "Chesterfield",
          title: "Stílus és formajegyek",
          subtitle: "A Chesterfield kanapék stílusa és formai megoldásai évszázadok óta alig változtak – és pont ez a legfőbb erősségük. Jellegzetes, mély gombolás, párnázott karfák, egyenes háttámla, gyakran bőrből készült burkolat – mindezek együtt határozzák meg a Chesterfield karakterét.",
        }}
      />

      {/* Banner kép */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(200px, 30vw, 380px)" }}>
        <Image
          src="/images/chesterfield-stilus-formajegyek-banner.webp"
          alt="Chesterfield kanapé stílus és formajegyek"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Fő szöveges tartalom */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2
            className="text-3xl font-bold text-[#1c1c1c] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Stílus és formajegyek
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed text-base">
            <p>
              A Chesterfield kanapé legmeghatározóbb jellemzője a mély gombolásos technika, amit eredetileg azért alkalmaztak, hogy a bútor ne veszítsen a formájából. Ez a technika nemcsak díszítőelem, hanem a kárpit tartását is szolgálja. A gombok precíz elhelyezése és az anyag feszessége garantálja a minőséget.
            </p>
            <p>
              A másik ikonikus elem a tekintélyes, hengerelt karfa, ami gyakran a háttámla vonalával egy magasságban fut. Ez a harmonikus arányokkal kialakított szerkezet egyensúlyt teremt a bútor megjelenésében, és egyúttal kényelmes támaszt is nyújt.
            </p>
            <p>
              Az anyaghasználat szintén meghatározó. A klasszikus Chesterfield modellek kizárólag magas minőségű, valódi bőrből készültek. Ma már azonban elérhetők különféle szövetborításokkal is, amelyek lehetővé teszik, hogy a bútor illeszkedjen a modern enteriőrökhöz. A bársonyos kárpit vagy akár a lenvászon bevonat új színt és stílust vihet a klasszikus formába.
            </p>
            <p>
              A Chesterfield formajegyek egyedisége nemcsak a lakberendezők körében népszerű, hanem azok számára is, akik hosszú távra terveznek. Egy jól megválasztott Chesterfield bútor több generációt is kiszolgálhat, és közben sem veszít patinás megjelenéséből.
            </p>
            <p>
              Az időtállóság, a részletgazdag kidolgozás és a kézműves precizitás miatt a Chesterfield stílus egy életre szóló befektetés, mely minden térben karakteres központi elemmé válik.
            </p>
          </div>
        </div>
      </section>

      {/* Képgaléria */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden col-span-1">
              <Image
                src="/images/chesterfield-gombolasos-technika.webp"
                alt="Chesterfield kanapé mély gombolásos technika"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden col-span-1">
              <Image
                src="/images/chesterfield-karfa-formajegy.webp"
                alt="Chesterfield kanapé hengerelt karfa részlet"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden col-span-1">
              <Image
                src="/images/chesterfield-bor-kanape-reszlet.webp"
                alt="Chesterfield bőr kanapé részlet"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden col-span-1">
              <Image
                src="/images/chesterfield-szovetes-kanape.webp"
                alt="Chesterfield szövetes kanapé modern enteriőrben"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kapcsolódó cikkek */}
      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete" },
              { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
              { title: "A Chesterfield a modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben" },
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
