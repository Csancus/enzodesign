import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = { title: "Chesterfield – Stílus és formajegyek" };

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Stílus és formajegyek</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Stílus és formajegyek
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>A mély gombolás technikája</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A „mély gombolásos technika" (deep tufting) a Chesterfield megkülönböztető jegye – egyszerre esztétikus és funkcionális,
                mivel segít megőrizni a bútor formáját az évek során.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A klasszikus Chesterfield modellek hagyományosan valódi bőrből készültek, de a modern változatokban
                már bársony, len és mikroszálas szövetek is megjelennek.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                A részletgazdag kidolgozás és a kézműves precizitás teszi a Chesterfield bútort életre szóló befektetéssé.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Jellegzetes elemek: ívelt, visszahajló kartámaszok; szegecsek (nit nail trim); faragott, néha gömbös lábak.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp" alt="Chesterfield stílus" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
