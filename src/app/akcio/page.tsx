import type { Metadata } from "next";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";

export const metadata: Metadata = {
  title: "Akciók",
  description: "Folyamatosan változó bútor akcióink – vásároljon közvetlenül a gyártótól.",
};

const AKCIO_IMAGES = [
  { src: "/images/9a0b1d_5ebafef06aa546a39a29c57d5d9e834b.webp", alt: "Akciós bútor 1" },
  { src: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", alt: "Akciós bútor 2" },
  { src: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", alt: "Akciós bútor 3" },
];

export default function AkcioPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Ajánlataink</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            FIGYELJE FOLYAMATOSAN VÁLTOZÓ AKCIÓINKAT
          </h1>
          <p className="text-[#b8924a] text-xl font-medium">Vásároljon közvetlenül a gyártótól!</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {AKCIO_IMAGES.map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden shadow-md">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="bg-[#f5f0e8] p-8 text-center">
            <p className="text-gray-600 leading-relaxed mb-4">
              Aktuális akcióinkról érdeklődjön telefonon vagy töltse ki az alábbi kapcsolatfelvételi
              űrlapot – hamarosan keresni fogjuk!
            </p>
            <a href="tel:+36303778983" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              +36 30 377 8983
            </a>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
