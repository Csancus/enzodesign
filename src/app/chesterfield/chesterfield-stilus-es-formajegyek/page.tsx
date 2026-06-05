import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

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

      <PageBuilderPage
        pageId="chesterfield:stilus-es-formajegyek"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Chesterfield",
              title: "Stílus és formajegyek",
              subtitle: "A Chesterfield kanapék stílusa és formai megoldásai évszázadok óta alig változtak – és pont ez a legfőbb erősségük. Jellegzetes, mély gombolás, párnázott karfák, egyenes háttámla, gyakran bőrből készült burkolat – mindezek együtt határozzák meg a Chesterfield karakterét. Ezek az elemek nemcsak esztétikailag egyediek, de a tartósságot és a kényelmet is szolgálják.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/chesterfield-stilus-formajegyek-banner.webp",
              alt: "Chesterfield kanapé stílus és formajegyek",
              height: "360",
            },
          },
          {
            type: "editorial-grid",
            config: {
              imageLeft: "/images/chesterfield-gombolasos-technika.webp",
              imageLeftAlt: "Chesterfield kanapé mély gombolásos technika",
              imageRightTop: "/images/chesterfield-karfa-formajegy.webp",
              imageRightTopAlt: "Chesterfield kanapé hengerelt karfa részlet",
              imageRightBottom: "/images/chesterfield-bor-kanape-reszlet.webp",
              imageRightBottomAlt: "Chesterfield bőr kanapé részlet",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Stílus és formajegyek",
              body: "A Chesterfield kanapé legmeghatározóbb jellemzője a mély gombolásos technika, amit eredetileg azért alkalmaztak, hogy a bútor ne veszítsen a formájából. Ez a technika nemcsak díszítőelem, hanem a kárpit tartását is szolgálja. A gombok precíz elhelyezése és az anyag feszessége garantálja a minőséget.\n\nA másik ikonikus elem a tekintélyes, hengerelt karfa, ami gyakran a háttámla vonalával egy magasságban fut. Ez a harmonikus arányokkal kialakított szerkezet egyensúlyt teremt a bútor megjelenésében, és egyúttal kényelmes támaszt is nyújt.\n\nAz anyaghasználat szintén meghatározó. A klasszikus Chesterfield modellek kizárólag magas minőségű, valódi bőrből készültek. Ma már azonban elérhetők különféle szövetborításokkal is, amelyek lehetővé teszik, hogy a bútor illeszkedjen a modern enteriőrökhöz. A bársonyos kárpit vagy akár a lenvászon bevonat új színt és stílust vihet a klasszikus formába.\n\nA Chesterfield formajegyek egyedisége nemcsak a lakberendezők körében népszerű, hanem azok számára is, akik hosszú távra terveznek. Egy jól megválasztott Chesterfield bútor több generációt is kiszolgálhat, és közben sem veszít patinás megjelenéséből.\n\nAz időtállóság, a részletgazdag kidolgozás és a kézműves precizitás miatt a Chesterfield stílus egy életre szóló befektetés, mely minden térben karakteres központi elemmé válik.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          { type: "contact" },
        ]}
      />

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
    </>
  );
}
