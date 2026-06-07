import type { Metadata } from "next";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import FabricsSection from "@/components/sections/FabricsSection";
import ProductImageCarousel from "@/components/ProductImageCarousel";

export const metadata: Metadata = {
  title: "Kanapék – Enzo Design",
  description: "Kanapé kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker, Cannes – egyedi méretben és szövetben.",
};

const CARDS = [
  {
    name: "Old's Club Kanapék",
    tagline: "Karakteres elegancia",
    images: [
      "https://static.wixstatic.com/media/0e0445_26ed1417f8174764ab6d8d87944fae4f~mv2.png/v1/fill/w_194,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0445_26ed1417f8174764ab6d8d87944fae4f~mv2.png",
      "https://static.wixstatic.com/media/e7ad8b_3fa161a4e7b74434bff25cc640badfed~mv2.jpg/v1/fill/w_194,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e7ad8b_3fa161a4e7b74434bff25cc640badfed~mv2.jpg",
      "https://static.wixstatic.com/media/e7ad8b_7d4917d9067047f4a03874f615da5103~mv2.jpg/v1/fill/w_194,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e7ad8b_7d4917d9067047f4a03874f615da5103~mv2.jpg",
      "https://static.wixstatic.com/media/0e0445_50fa04b863b54e4abc10490cc84b903c~mv2.png/v1/fill/w_194,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0445_50fa04b863b54e4abc10490cc84b903c~mv2.png",
      "https://static.wixstatic.com/media/e7ad8b_3e850ebefb7f4de791cf4a4d08804eca~mv2.jpg/v1/fill/w_194,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e7ad8b_3e850ebefb7f4de791cf4a4d08804eca~mv2.jpg",
      "https://static.wixstatic.com/media/d56f41_8730eebebb7849668031c3ee3fa5f624~mv2.jpg/v1/fill/w_194,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d56f41_8730eebebb7849668031c3ee3fa5f624~mv2.jpg",
      "https://static.wixstatic.com/media/0e0445_c570567962c44821978fc817c4298c17~mv2.png/v1/fill/w_194,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0e0445_c570567962c44821978fc817c4298c17~mv2.png",
    ],
    href: "/butoraink/kanapek/olds-club-kanapek",
  },
  { name: "Ivone kanapék", tagline: "Nappalid éke", images: ["/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp"], href: "/butoraink/kanapek/ivone-kanapek" },
  { name: "Design Kanapék", tagline: "Modern minőség", images: ["/images/e7ad8b_d510cf607aca449c835d847344231393.webp"], href: "/butoraink/kanapek/design-kanapek" },
  { name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", images: ["/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"], href: "/butoraink/kanapek/chesterfield-kanapek" },
  { name: "New York kanapék", tagline: "Klasszikus stílus", images: ["/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp"], href: "/butoraink/kanapek/new-york-kanapek" },
  { name: "Joker Kanapék", tagline: "Gáláns megjelenés", images: ["/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp"], href: "/butoraink/kanapek/joker-kanapek" },
  { name: "Cannes Kanapé", tagline: "A modern sarok", images: ["/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp"], href: "/butoraink/kanapek/cannes-kanapek" },
  { name: "Egyedi kanapé", tagline: "Elkészítjük álombútorod", images: ["/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp"], href: "/butoraink/egyedi-butor" },
  { name: "Üzleti bútor, kanapé", tagline: "Vásárlóid kényelmére", images: ["/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp"], href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

export default async function KanapekPage() {
  const isAdmin = await getAdminStatus();

  return (
    <>
      {/* HERO */}
      <section className="bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Kanapék
          </h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Válasszon a 2000 nm-es gyárunkból, vagy kérjen egyedi ajánlatot. A Bútoraink szövete és anyagmintája szabadon választható.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#b8924a] mb-3">Mindegyik bútorunkat ajánljuk:</p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            <li>Egyedi szín és anyagminta választással</li>
            <li>Tetszőleges méretben</li>
            <li>Választható kopásállóság-erősséggel (martindale)</li>
            <li>Tömörfa szerkezettel, 10 év váz-garanciával</li>
          </ul>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>Kanapék</h2>
          <p className="text-sm text-gray-500 mb-1">
            Válasszon a 2000 nm-es gyárunkból, kért méretben és anyagmintával.
          </p>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">
            Egyedi kanapét is elkészítünk →
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDS.map((c) => (
              <Link key={c.name} href={c.href} className="group block">
                <ProductImageCarousel images={c.images} alt={c.name} />
                <h3 className="text-[#b8924a] text-sm font-semibold group-hover:underline">{c.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
