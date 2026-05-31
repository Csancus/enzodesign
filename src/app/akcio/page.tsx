import type { Metadata } from "next";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Akciók – Enzo Design",
  description: "Figyelje folyamatosan változó akcióinkat – vásároljon közvetlenül a gyártótól.",
};

export default function AkcioPage() {
  return (
    <>
      {/* FEJLÉC SZÖVEG */}
      <section className="pt-12 pb-4 bg-white text-center px-4">
        <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
          FIGYELJE FOLYAMATOSAN VÁLTOZÓ AKCIÓINKAT
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]">
          Vásároljon közvetlenül a gyártótól!
        </h1>
      </section>

      {/* NAGY KÉP – középre igazítva */}
      <section className="bg-white pb-4 flex justify-center px-4">
        <div className="relative w-full max-w-sm" style={{ aspectRatio: "4/3" }}>
          <Image
            src="/images/akciok-1.jpg"
            alt="Akciós bútor"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* KÉT KÉP EGYMÁS MELLETT */}
      <section className="bg-white pb-10 px-4">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-3">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/akciok-2.jpg" alt="Chesterfield akció" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/akciok-3.jpg" alt="Super Sale" fill className="object-cover" />
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
