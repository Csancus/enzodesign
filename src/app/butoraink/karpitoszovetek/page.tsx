import type { Metadata } from "next";
import ContactFormSection from "@/components/ContactFormSection";
import { FABRICS } from "@/data/products";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kárpitszövetek",
  description: "Több mint 100 kárpitszövet – bársony, bőr, sennilé. AI, AT, MA, AG szövetcsaládok.",
};

export default function KarpitszovetsekPage() {
  return (
    <>
      <PageHero label="Anyagok" title="Kárpitszövetek" subtitle="Több mint 100 szövetfajtából választhat." />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {FABRICS.map((fabric) => (
              <div key={fabric.code} className="border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#1c1c1c] text-white font-bold text-sm px-3 py-1">{fabric.code}</span>
                  <span className="font-semibold text-[#1c1c1c]">{fabric.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div><span className="font-medium">Kopásállóság:</span> {fabric.martindale} martindale</div>
                  <div><span className="font-medium">Összetétel:</span> {fabric.composition}</div>
                  {fabric.density !== "–" && <div><span className="font-medium">Sűrűség:</span> {fabric.density}</div>}
                  <div><span className="font-medium">Szín:</span> {fabric.colors} szín</div>
                </div>
                <ul className="space-y-1">
                  {fabric.features.map(f => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#7d6142] rounded-full flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm italic">
            Keressen bennünket további szövetválasztékkal kapcsolatban – több mint 100 féle szövetből választhat,
            beleértve olasz valódi bőrt is.
          </p>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
