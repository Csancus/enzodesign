import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "A Chesterfield kanapé eredete" };

export default function Page() {
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
        title="A Chesterfield kanapé eredete"
        imageSrc="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
      />

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            A Chesterfield kanapé nem csupán egy bútordarab – története évszázadokra nyúlik vissza, és maga az elegancia és hagyomány szimbóluma.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Egy bútor, ami történelmet írt
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Chesterfield kanapé a 18. század közepén keletkezett. Egy történet szerint a 4. Chesterfield gróf,
                Philip Dormer Stanhope kérte fel udvari asztalosát, hogy készítsen olyan bútort, amely egyenes
                testtartást tesz lehetővé a ruha összegyűrődése nélkül.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Az eredeti bútorok valódi bőrrel voltak borítva, kézzel faragott lábakkal és precízen kivitelezett
                szegecsekkel díszítve. A viktoriánus korszakban az arisztokrácia körében rendkívül elterjedtek,
                majd klubokban és előkelő otthonokban egyaránt megjelentek.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A modern változatokban már különféle anyagok – bársony, len, mikroszálas szövetek – is megjelennek,
                mégis megőrizte jellegzetes gombolását és karakterét.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A Chesterfield bútor időtálló befektetés, amely több generáción átörökíthető – megtartja jellegzetes
                patinaját és megjelenését az évtizedek során.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp" alt="Chesterfield eredete" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp" alt="Kézműves részlet" fill className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp" alt="Chesterfield kanapé" fill className="object-cover" />
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
