import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Rendelés menete – Enzo Design",
  description: "Rendelje meg álombútorát az Enzo Designtól – töltse ki az űrlapot és 24 órán belül visszahívjuk.",
};

const steps = [
  "Rendelését leadhatja személyesen telephelyünkön a 8800 Nagykanizsa, Egry József utca 7 szám alatt, vagy e-mailben az info@enzodesign.hu címen.",
  "Gyors egyeztetésre a +36303778983 -mas telefonszámot használják bizalommal, melyen bútortervezőnk érhető el.",
  "Országos szinten kiszállítjuk a bútort az első zárt ajtóig.",
  "Legegyszerűbb mód vagy a kapcsolat űrlap kitöltése itt a weboldalon, vagy emailben egy kép csatolása, melyre 2 napon belül árajánlatot adunk.",
  "E-mailes rendelés esetében kérjük adja meg a számlázási nevet, címet, céges rendelésnél pedig az adószámát is, valamint írja a megrendelni kívánt termék nevét, színét és darabszámát, vagy küldjön képet, amennyiben egyedi bútorról van szó.",
  "Kollégáink ennek alapján előlegbekérő szerződést küldenek, mely előleget utalással is ki tud egyenlíteni.",
];

export default function RendelesMenetePage() {
  return (
    <>
      <section className="bg-[#f5f0e8] py-20">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Rendelés</p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Rendelés menete
          </h1>
          <p className="text-gray-500 mb-8">
            Honlapunk nem webáruházként működik, ezért a rendelés menete a következő:
          </p>
          <div className="space-y-6">
            {steps.map((text, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="mt-1 w-7 h-7 bg-[#7d6142] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-[#1c1c1c] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-2xl font-bold text-[#1c1c1c] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Rendelési űrlap
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
