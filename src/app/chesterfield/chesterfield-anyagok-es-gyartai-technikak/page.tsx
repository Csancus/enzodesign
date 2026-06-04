import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Chesterfield – Anyagok és gyártási technikák" };

export default async function Page() {
  return (
    <>
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
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            A Chesterfield bútorok minősége nem véletlen – mögöttük évszázados kézműves hagyomány és tudás rejlik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Hagyományos és modern anyagok
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A klasszikus Chesterfield bútorok kizárólag prémium minőségű valódi bőrből készültek.
                A bőr mellett a fa váz is kulcsfontosságú: a tömörfa szerkezet garantálja a tartósságot és a stabilitást.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A modern változatokban bársony, mikroszálas szövetek és újrahasznosított anyagok is megjelennek,
                lehetővé téve, hogy a Chesterfield stílus különböző enteriőrökbe is beilleszkedjen.
              </p>

              <h3 className="text-lg font-bold text-[#1c1c1c] mt-6 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Gyártási technikák
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Mély gombolás (button-tufting) – precíz, kézzel végzett művelet",
                  "Párnázás: hagyományos lószőr és gyapjú vs. modern szivacs",
                  "Rugórendszer: klasszikus spirálrugók vagy modern habszivacs alap",
                  "Kézzel készített részletek: sárgaréz szegecs, faragott lábak, gondos varrás",
                ].map(t => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0 mt-1.5" />{t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Gyártási folyamat" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp" alt="Kárpit anyag" fill className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Chesterfield kanapé" fill className="object-cover" />
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
