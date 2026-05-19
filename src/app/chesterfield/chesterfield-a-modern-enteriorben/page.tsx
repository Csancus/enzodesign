import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Chesterfield a modern enteriőrben" };

export default function Page() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">A modern enteriőrben</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            A Chesterfield a modern enteriőrben
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>Örök érvényű stílus</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Chesterfield bútor a 18. századi gyökerek ellenére „tökéletesen illik a legmodernebb enteriőr trendekhez",
                legyen szó minimalista, ipari vagy vintage stílusról.
              </p>
              <div className="space-y-4 mt-6">
                {[
                  { style: "Elegáns nappali", desc: "Klasszikus barna/fekete bőr Chesterfield – időtálló, prémium hatás." },
                  { style: "Hálószoba / olvasósarok", desc: "Világos bársony változat – puha, meleg, nőies eleganciával." },
                  { style: "Skandináv stílus", desc: "Szürke-kék modell vékony lábakon – könnyű, légies hatás." },
                  { style: "Ipari loft", desc: "Sötét bőr szegecses részletekkel – erős karakterű választás." },
                ].map(s => (
                  <div key={s.style} className="border-l-2 border-[#7d6142] pl-4">
                    <h3 className="font-semibold text-[#1c1c1c] text-sm">{s.style}</h3>
                    <p className="text-gray-500 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Chesterfield modern enteriőrben" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>Rendelés és kapcsolat</h2>
          <div className="bg-white p-8 shadow-sm"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
