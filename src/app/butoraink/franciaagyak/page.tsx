import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Franciaágyak",
  description: "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. 351.160 Ft-tól, tömörfa szerkezettel.",
};

const BEDS = [
  { name: "Bilbao Franciaágy", tagline: "Kényelmedre", price: "351.160 Ft-tól", image: "/images/e7ad8b_335724cf7ec5471c89807f009900353d.webp" },
  { name: "Madrid Franciaágy", tagline: "Hálószobád éke", price: "351.160 Ft-tól", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp" },
  { name: "További ágyak", tagline: "Modern és klasszikus darabok", price: "Egyéni árajánlat", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp" },
  { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", price: "Egyéni árajánlat", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" },
];

const EXTRAS = [
  { label: "Fix ágyrácsok", price: "+97.800 Ft" },
  { label: "Kárpitozott tároló fiók", price: "+209.550 Ft" },
  { label: "Vastag alap", price: "+69.850 Ft" },
];

export default function FranciaagyakPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Bútoraink</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Franciaágyak
          </h1>
          <p className="mt-4 text-gray-300">
            Klasszikus elegancia és modern letisztultság – egyedi méretben és szövetválasztékkal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {BEDS.map((bed) => (
              <div key={bed.name} className="border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
                  <Image src={bed.image} alt={bed.name} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>{bed.name}</h2>
                  <p className="text-[#7d6142] text-sm font-medium mb-1">{bed.tagline}</p>
                  <p className="text-sm font-semibold text-gray-700">{bed.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Extrák */}
          <div className="bg-[#f5f0e8] p-8 max-w-xl">
            <h3 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Opcionális kiegészítők</h3>
            <div className="space-y-3">
              {EXTRAS.map((e) => (
                <div key={e.label} className="flex justify-between items-center py-2 border-b border-[#ede6d8]">
                  <span className="text-gray-700 text-sm">{e.label}</span>
                  <span className="font-semibold text-[#7d6142] text-sm">{e.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">Garancia: 3 év termék / 10 év váz. Gyártási idő: 4–6 hét.</p>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
