import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Chesterfield – Anyagok és gyártási technikák – Enzo Design",
  description: "Chesterfield bútorok anyagai és gyártási technikái: tömörfa váz, kézzel feszített kárpit, gombolt háttámla, prémium szövetek és bőr.",
  alternates: { canonical: "https://enzodesign.hu/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
  openGraph: {
    type: "article",
    title: "Chesterfield – Anyagok és gyártási technikák – Enzo Design",
    description: "Chesterfield bútorok anyagai és gyártási technikái: tömörfa váz, kézzel feszített kárpit, gombolt háttámla, prémium szövetek és bőr.",
    url: "https://enzodesign.hu/chesterfield/chesterfield-anyagok-es-gyartai-technikak",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Chesterfield – Anyagok és gyártási technikák",
  "description": "Chesterfield bútorok anyagai és gyártási technikái: tömörfa váz, kézzel feszített kárpit, gombolt háttámla, prémium szövetek és bőr.",
  "url": "https://enzodesign.hu/chesterfield/chesterfield-anyagok-es-gyartai-technikak",
  "image": "https://enzodesign.hu/images/chesterfield-w1.webp",
  "inLanguage": "hu",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://enzodesign.hu", "logo": { "@type": "ImageObject", "url": "https://enzodesign.hu/images/logo.webp" } },
};

export default async function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Anyagok és gyártási technikák</span>
        </div>
      </nav>
      <PageHero
        moduleId="chesterfield-chesterfield-anyagok-es-gyartai-technikak:hero"
        defaults={{ title: "Anyagok és gyártási technikák" }}
      />

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            A Chesterfield bútorok minősége nem véletlen – mögöttük évszázados kézműves hagyomány és tudás rejlik. A választott alapanyagok és a gyártási technológiák nagyban meghatározzák a végeredmény tartósságát, komfortját és esztétikáját. Ebben a részben a leggyakrabban használt anyagokat, valamint a klasszikus és modern gyártási módszereket mutatjuk be.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Anyagok és gyártási technikák
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A klasszikus Chesterfield bútorok kizárólag prémium minőségű valódi bőrből készültek. A leggyakrabban használt típus a marhabőr, amely idővel patinásodik, egyedi karaktert adva a bútornak. A bőr mellett a fa váz is kulcsfontosságú: a tömörfa szerkezet garantálja a tartósságot és a stabilitást, akár évtizedeken át.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A modern változatoknál megjelentek alternatív anyagok is, mint a bársony, mikroszálas szövetek, vagy akár újrahasznosított textilek. Ezek lehetőséget adnak arra, hogy a Chesterfield kanapé illeszkedjen a különféle enteriőr stílusokhoz – a klasszikustól a modernig.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A gyártási folyamat egyik legfontosabb eleme a gombolásos technika kivitelezése. Ez egy precíz, kézzel végzett művelet, amely során a bútort mély gombokkal és varrásokkal látják el. A hagyományos módszerek szerint a kárpitosok természetes tömőanyagokat – például lószőrt, gyapjút – használnak, míg a mai ipari gyártás során modern habanyagok kerülnek előtérbe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A rugózás technikája is változatos lehet: a klasszikus spirálrugós rendszer rugalmas és tartós alátámasztást biztosít, míg az újabb modellek habszivacs alapú ülőfelülettel készülnek, ami kényelmesebb lehet a hétköznapi használathoz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A Chesterfield bútor minőségét tovább növelik a kézzel készített részletek, mint a szegecses díszítés, a kézzel faragott lábak vagy a gondosan megmunkált varrások. Ezek a részletek nemcsak esztétikai értéket képviselnek, hanem egyediséget és valódi kézműves minőséget is közvetítenek.
              </p>
            </div>

            <div className="space-y-3">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/1" }}>
                <Image src="/images/chesterfield-anyagok-panorama.webp" alt="Chesterfield anyagok és gyártási technikák" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-bor-anyag.webp" alt="Chesterfield bőr anyag" fill className="object-cover" />
                </div>
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-gyartasi-folyamat.webp" alt="Chesterfield gyártási folyamat" fill className="object-cover" />
                </div>
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-karpitos-munka.webp" alt="Chesterfield kárpitos munka" fill className="object-cover" />
                </div>
                <div className="relative aspect-[2/1] overflow-hidden">
                  <Image src="/images/chesterfield-tomofa-szerkezet.webp" alt="Chesterfield tömörfa szerkezet" fill className="object-cover" />
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
              { title: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete" },
              { title: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
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
