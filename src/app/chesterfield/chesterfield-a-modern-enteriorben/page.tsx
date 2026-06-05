import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "A Chesterfield a modern enteriőrben – Enzo Design",
  description: "Hogyan illik a klasszikus Chesterfield kanapé a modern otthonba? Minimalista, skandináv, loft és vintage stílusú terekhez egyaránt tökéletes.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">A modern enteriőrben</span>
        </div>
      </nav>

      <PageBuilderPage
        pageId="chesterfield:modern-enteriorben"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Chesterfield",
              title: "A Chesterfield a modern enteriőrben",
              subtitle: "Bár a Chesterfield kanapé klasszikus stílusa a 18. századig nyúlik vissza, ma is tökéletesen beilleszthető a legmodernebb lakberendezési trendekbe. Legyen szó minimalista nappaliról, indusztriális loftról vagy vintage hálószobáról, a Chesterfield bútorok kortalan eleganciát visznek bármilyen térbe.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/chesterfield-modern-enterior-banner.webp",
              alt: "Chesterfield kanapé modern enteriőrben",
              height: "360",
            },
          },
          {
            type: "editorial-grid",
            config: {
              imageLeft: "/images/chesterfield-modern-enterior-1.webp",
              imageLeftAlt: "Chesterfield kanapé elegáns modern nappaliban",
              imageRightTop: "/images/chesterfield-modern-enterior-2.webp",
              imageRightTopAlt: "Chesterfield bőrkanapé indusztriális enteriőrben",
              imageRightBottom: "/images/chesterfield-modern-enterior-3.webp",
              imageRightBottomAlt: "Chesterfield skandináv stílusú lakásban",
            },
          },
          {
            type: "text-block",
            config: {
              title: "A Chesterfield a modern enteriőrben",
              body: "A Chesterfield népszerűsége nem csupán történelmi értékének köszönhető – formavilága és variálhatósága révén ma is megállja a helyét a modern otthonokban. A klasszikus barna vagy fekete bőrkanapé kiválóan illik egy elegáns nappaliba, míg egy világos színű bársony Chesterfield romantikus hangulatot adhat egy hálószobának vagy olvasósaroknak.\n\nA letisztult skandináv stílus kedvelői számára egy szürkéskék, vékonyabb lábakon álló változat lehet a megfelelő választás. A loft és indusztriális terekhez pedig a sötét bőr és a szegecselt részletek illenek leginkább, különösen, ha fém és fa bútorokkal kombinálják.\n\nA modern belsőépítészet egyik fő iránya a kontrasztokkal való játék – ebben a Chesterfield kiváló eszköz lehet. Egy ultramodern konyha mellé elhelyezett klasszikus kanapé nemcsak stílusbeli kontrasztot ad, hanem egyedivé is teszi az enteriőrt.\n\nA funkcionalitás is kiemelkedő: a Chesterfield ülőgarnitúrák gyakran mélyebb ülőrésszel rendelkeznek, ami ideális a pihenéshez, olvasáshoz vagy vendégek fogadásához. Egyes modern modellek már ágyneműtartóval, ággyá alakítható kivitelben vagy moduláris formában is elérhetők.\n\nBár sokan klasszikus bútorként tekintenek rá, a Chesterfield valójában egy rendkívül sokoldalú darab, amely könnyedén illeszthető bármilyen stílushoz – és éppen ezért egyre többen választják modern otthonaik központi elemeként.",
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
              { title: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
              { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
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
