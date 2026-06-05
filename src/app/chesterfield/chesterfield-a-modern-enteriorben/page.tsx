import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

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

      <PageHero
        moduleId="chesterfield-modern-enteriorben:hero"
        defaults={{
          label: "Chesterfield",
          title: "A Chesterfield a modern enteriőrben",
          subtitle: "Bár a Chesterfield kanapé klasszikus stílusa a 18. századig nyúlik vissza, ma is tökéletesen beilleszthető a legmodernebb lakberendezési trendekbe. Legyen szó minimalista nappaliról, indusztriális loftról vagy vintage hálószobáról, a Chesterfield bútorok kortalan eleganciát visznek bármilyen térbe.",
        }}
      />

      {/* Banner kép */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(180px, 28vw, 360px)" }}>
        <Image
          src="/images/chesterfield-modern-enterior-banner.webp"
          alt="Chesterfield kanapé modern enteriőrben"
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
            A Chesterfield a modern enteriőrben
          </h2>

          <div className="space-y-6 text-gray-600 leading-relaxed text-base">
            <p>
              A Chesterfield népszerűsége nem csupán történelmi értékének köszönhető – formavilága és variálhatósága révén ma is megállja a helyét a modern otthonokban. A klasszikus barna vagy fekete bőrkanapé kiválóan illik egy elegáns nappaliba, míg egy világos színű bársony Chesterfield romantikus hangulatot adhat egy hálószobának vagy olvasósaroknak.
            </p>
            <p>
              A letisztult skandináv stílus kedvelői számára egy szürkéskék, vékonyabb lábakon álló változat lehet a megfelelő választás. A loft és indusztriális terekhez pedig a sötét bőr és a szegecselt részletek illenek leginkább, különösen, ha fém és fa bútorokkal kombinálják.
            </p>
            <p>
              A modern belsőépítészet egyik fő iránya a kontrasztokkal való játék – ebben a Chesterfield kiváló eszköz lehet. Egy ultramodern konyha mellé elhelyezett klasszikus kanapé nemcsak stílusbeli kontrasztot ad, hanem egyedivé is teszi az enteriőrt.
            </p>
            <p>
              A funkcionalitás is kiemelkedő: a Chesterfield ülőgarnitúrák gyakran mélyebb ülőrésszel rendelkeznek, ami ideális a pihenéshez, olvasáshoz vagy vendégek fogadásához. Egyes modern modellek már ágyneműtartóval, ággyá alakítható kivitelben vagy moduláris formában is elérhetők.
            </p>
            <p>
              Bár sokan klasszikus bútorként tekintenek rá, a Chesterfield valójában egy rendkívül sokoldalú darab, amely könnyedén illeszthető bármilyen stílushoz – és éppen ezért egyre többen választják modern otthonaik központi elemeként.
            </p>
          </div>
        </div>
      </section>

      {/* Képgaléria */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/chesterfield-modern-enterior-1.webp"
                alt="Chesterfield kanapé elegáns modern nappaliban"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/chesterfield-modern-enterior-2.webp"
                alt="Chesterfield bőrkanapé indusztriális enteriőrben"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/chesterfield-modern-enterior-3.webp"
                alt="Chesterfield skandináv stílusú lakásban"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/chesterfield-modern-enterior-4.webp"
                alt="Chesterfield vintage hálószoba enteriőr"
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

      <ContactFormSection />
    </>
  );
}
