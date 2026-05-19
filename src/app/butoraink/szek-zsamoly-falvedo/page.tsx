import type { Metadata } from "next";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Székek, Zsámolyok, Falvédők",
  description: "Kárpitozott székek 76.000 Ft-tól, zsámolyok és falvédők egyedi méretben.",
};

export default function SzekZsamolyPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Bútoraink</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Székek, zsámolyok, falvédők
          </h1>
          <p className="mt-4 text-gray-300">
            Székek 76.000 Ft-tól, fotelek 90.000 Ft-tól – egyedi szín, méret és anyag.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Székek és zsámolyok" fill className="object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Kárpitozott székek és zsámolyok</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A funkció és esztétika tökéletes ötvözete. Klasszikus gombolt háttámlás modellektől a modern letisztult dizájnig mindenben készítünk.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nézd végig a képeket, vagy küldj egy képet Pinterestről vagy a Google-ből és mi elkészítjük neked.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#f5f0e8] p-4 text-center">
                  <div className="text-2xl font-bold text-[#7d6142]">76.200</div>
                  <div className="text-xs text-gray-500 mt-1">Ft-tól – székek</div>
                </div>
                <div className="bg-[#f5f0e8] p-4 text-center">
                  <div className="text-2xl font-bold text-[#7d6142]">90.170</div>
                  <div className="text-xs text-gray-500 mt-1">Ft-tól – fotelek</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "Vízlepergető anyag opció", "Bőr kivitel is rendelhető", "3 év garancia / 10 év váz"].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
