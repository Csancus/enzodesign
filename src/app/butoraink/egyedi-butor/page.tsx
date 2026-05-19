import type { Metadata } from "next";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Egyedi Bútor",
  description: "Egyedi kárpitozott bútor rendelés. Küldj egy képet és mi elkészítjük álmaid bútorát.",
};

export default function EgyediButorPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Személyre szabott</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Egyedi bútor
          </h1>
          <p className="mt-4 text-gray-300 text-lg">Ami neked tetszik! :)</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Elkészítjük álombútorod
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Küldj el egy képet, egyeztessünk és elkészítjük álombútorod! Szinte bármilyen egyedi,
              kárpitozott bútort el tudunk készíteni – egyedi szín, anyagminta, méret és
              kopásállóság-erősség (martindale) szerint.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Egyedi 2-es fotel ára: <strong>360.000 Ft-tól</strong>
            </p>
            <div className="bg-[#f5f0e8] p-6 mb-6">
              <h3 className="font-semibold text-[#1c1c1c] mb-3">Hogyan működik?</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                {[
                  "Küldj képet Pinterestről, Google-ből vagy saját ötletedről",
                  "Egyeztetjük a méreteket, szövetet, részleteket",
                  "Árajánlatot készítünk 24 órán belül",
                  "50% előleg után megkezdődik a gyártás",
                  "4–6 hét alatt kész és kiszállítjuk",
                ].map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 bg-[#7d6142] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <ul className="space-y-1 text-sm text-gray-700">
              {["Több mint 100 szövetfajta", "Természetes bőr opció", "Egyedi méret és forma", "3 év garancia / 10 év váz"].map(f => (
                <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 bg-[#7d6142] flex-shrink-0" />{f}</li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Egyedi bútor" fill className="object-cover" />
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
