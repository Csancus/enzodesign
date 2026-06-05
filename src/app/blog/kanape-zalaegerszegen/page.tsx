import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Kanapé Zalaegerszegen: Hogyan találod meg a tökéletes bútort otthonodba? – Enzo Design",
  description: "Kényelmes kanapét keresel Zalaegerszegen? Útmutató a típusokhoz, anyagokhoz és a vásárláshoz. Az Enzo Design Nagykanizsán – 30 km, házhozszállítással.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Kanapé Zalaegerszegen</span>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:kanape-zalaegerszegen"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Kanapé Zalaegerszegen",
              subtitle: "Egy új kanapé kiválasztása nem csupán esztétikai kérdés – ez a döntés évekre meghatározza a nappalid hangulatát. Ha Zalaegerszegen keresel minőségi kanapét, az Enzo Design Nagykanizsán, 30 km-re várja.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
              alt: "Kanapé Zalaegerszegen – Enzo Design",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Milyen típusú kanapék közül válogathatsz?",
              body: "Ágyazható kanapé\nKisebb lakásban ideális megoldás, ha vendégszoba nincs, de időnként vendégeket fogadsz. A modern ágyazható kanapék mechanizmusa megbízható és kényelmes fekvőfelületet biztosítanak. Az Enzo Design kínálatában több modell elérhető ágyazható kivitelben.\n\nKlasszikus fix kanapé\nHa nem szükséges az ágyazható funkció, a fix kanapé általában kényelmesebb ülőfelületet és stabilabb szerkezetet kínál. Ezek jellemzően mélyebb ülőrésszel és tartósabb rugózással készülnek.\n\nSarokkanapé\nTágas nappaliba ideális, ahol maximálisan ki szeretnéd használni a teret. Az L- vagy U-alakú konfigurációk akár 5–7 személy számára is kényelmes ülőhelyet biztosítanak.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Mire érdemes figyelni kanapévásárlásakor?",
              body: "Méret és elhelyezés\nMérd fel a szoba méretét vásárlás előtt. A kanapénak legalább 40–50 cm szabad helyet kell hagynia minden oldalán a mozgáshoz. A sarokkanapénál figyelj a kijáratokra és az egyéb bútorok elhelyezésére.\n\nKárpit és anyaghasználat\nA szövet kopásállóságát martindale-számmal mérik – legalább 50.000 értékig megbízható háztartási használatra. Kisgyermekes vagy kisállatos otthonban a mikroszálas vagy technikai szövet a legpraktikusabb. A valódi bőr elegáns és tartós, de gondosabb ápolást igényel.\n\nFunkciók\nÁgyazható mechanizmus, ágyneműtartó, USB-töltő – ezek ma már praktikus kiegészítők. Döntsd el előre, mire van szükséged a mindennapokban.\n\nHol vásárolj kanapét Zalaegerszeg közelében?\nAz Enzo Design Nagykanizsán, mindössze 30 km-re található Zalaegerszegről. 2000 nm-es bemutatótermünkben személyesen megtekintheted és kipróbálhatod a modelleket. Legnépszerűbb modellek: Ivone, Old's Club és a Chesterfield kollekció.\n\nSzállítás Zalaegerszegre\nBútorainkat az első biztonságos ajtóig szállítjuk az ország bármely pontjára. A szállítást a gyártás befejezésekor – általában 4–6 héttel a megrendelés után – koordináljuk, és előre egyeztetünk a pontos időpontról.",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          { type: "contact" },
        ]}
      />

      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
              { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="bg-white p-4 hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a]">
                {a.title} ›
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
