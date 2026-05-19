import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import { ARMCHAIR_COLLECTIONS } from "@/data/products";

export const metadata: Metadata = {
  title: "Fotelek",
  description: "Fotel kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker – 82.820 Ft-tól.",
};

export default function FotelekPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Bútoraink</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Fotelek
          </h1>
          <p className="mt-4 text-gray-300">
            Székek 76.000 Ft-tól, fotelek 90.000 Ft-tól – tömörfa szerkezettel, prémium anyagokkal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARMCHAIR_COLLECTIONS.map((item) => (
              <Link
                key={item.slug}
                href={`/butoraink/fotelek/${item.slug}`}
                className="group block overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.name}
                  </h2>
                  <p className="text-[#7d6142] text-sm font-medium mb-2">{item.tagline}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                  <p className="mt-3 text-sm font-semibold text-[#7d6142]">
                    {item.pricing.fotel?.alap.toLocaleString("hu-HU")} Ft-tól
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
