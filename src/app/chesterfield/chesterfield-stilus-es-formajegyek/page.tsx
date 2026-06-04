import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Chesterfield – Stílus és formajegyek" };

export default function Page() {
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
        title="Stílus és formajegyek"
        imageSrc="/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp"
      />

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            A Chesterfield kanapék stílusa és formai megoldásai évszázadok óta alig változtak – ez a letisztult konzervativizmus az, ami mindmáig vonzóvá teszi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                A mély gombolás technikája
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A „mély gombolásos technika" (deep tufting) a Chesterfield megkülönböztető jegye – egyszerre esztétikus és funkcionális,
                mivel segít megőrizni a bútor formáját az évek során. A precízen kézzel elvégzett művelet minden gombnál egyforma mélységet és feszességet kíván.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A jellegzetes ívelt, visszahajló kartámaszok szintén meghatározó formaelem – ezek adják a Chesterfield karakterének nagy részét.
                A sárgaréz szegecsdíszítés és a faragott, néha gömbös lábak tovább erősítik a klasszikus megjelenést.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A klasszikus modellek hagyományosan valódi bőrből készültek, de a modern változatokban
                már bársony, len és mikroszálas szövetek is megjelennek – a formavilág azonban változatlan maradt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A részletgazdag kidolgozás és a kézműves precizitás teszi a Chesterfield bútort életre szóló befektetéssé,
                amely minden korban megőrzi aktualitását.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Gyártási folyamat" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp" alt="Kárpit részlet" fill className="object-cover" />
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
