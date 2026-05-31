import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fotelek – Enzo Design",
  description: "Fotel kollekciók: Old's Club, Ivone, Design, Chesterfield, New York, Joker – 82.820 Ft-tól.",
};

const CARDS = [
  { name: "Old's Club Fotel", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/fotelek/olds-club-fotel" },
  { name: "Ivone Fotel", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/fotelek/ivone-fotel" },
  { name: "Design Fotel", tagline: "Modern minőség", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butoraink/fotelek/design-fotel" },
  { name: "Chesterfield Fotel", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butoraink/fotelek/chesterfield-fotel" },
  { name: "New York Fotel", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/fotelek/new-york-fotel" },
  { name: "Joker Fotel", tagline: "Elegáns bútor, bárhova", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/fotelek/joker-fotel" },
  { name: "További Fotelek", tagline: "Kényelem, karfával", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek/tovabbi-fotelek" },
  { name: "Egyedi Fotelek", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti Fotelek, székek", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const DESC = "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak. Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni. Mindegyik bútorunk egyedi színben, anyagmintával, méretben és kopásállóság-erősséggel (martindale) kérhető.";

export default function FotelekPage() {
  return (
    <>
      {/* FELSŐ BANNER */}
      <section className="flex h-[260px] overflow-hidden">
        <div className="w-[60%] flex">
          <div className="w-1/2 relative">
            <Image src="/images/nsplsh_76b6c7badc3843cfa19665d5dfc4a2de.webp" alt="" fill className="object-cover" priority />
          </div>
          <div className="w-1/2 relative">
            <Image src="/images/nsplsh_77bc8dc09854455aad4201a444e3d5c6.webp" alt="" fill className="object-cover object-right" priority />
          </div>
        </div>
        <div className="w-[40%] bg-white flex flex-col justify-center px-8 py-6">
          <h1 className="text-2xl font-bold text-[#b8924a] mb-3">Fotelek</h1>
          <p className="text-xs text-gray-700 leading-relaxed mb-3">{DESC}</p>
          <Link href="/kapcsolat-es-rendeles" className="text-xs text-[#b8924a] underline">
            Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni. Mindegyik bútorunk egyedi...
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-[#f9f9f9]">
        <div className="max-w-xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-gray-700 mb-2">Mindegyik bútorunkat ajánljuk:</p>
          <ul className="text-left inline-block list-disc list-inside space-y-1 text-xs text-gray-600">
            <li>Egyedi szín</li>
            <li>Anyagmintával</li>
            <li>Méretben</li>
            <li>Kopásállóság-erősséggel (martindale) kérhető</li>
            <li>és leadható Súligneni laddigat (martindale) kárfelt.</li>
          </ul>
        </div>
      </section>

      {/* FOTELEK GRID */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-xl font-bold text-[#b8924a] mb-1">Fotelek</h2>
          <p className="text-xs text-gray-600 mb-1">
            Válassza az a 2000 Bútorainkból nagy funkcióit és legjobb kötőivel.<br />
            A Bútoraink elkülönöli és anyagmintájából fennáll és mi mindenkinek.
          </p>
          <Link href="/kapcsolat-es-rendeles" className="text-xs text-[#b8924a] underline block mb-6">
            Fotel típusok, stílusítettsel kérhető tárokban
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDS.map((c) => (
              <Link key={c.name} href={c.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-2">
                  <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[#b8924a] text-sm font-semibold hover:underline">{c.name}</h3>
                <p className="text-xs text-gray-500">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KÁRPIT ANYAGOK */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-xl font-bold text-[#b8924a] mb-2">Nagy kopásállóságú, minőségi kárpit anyagok</h2>
          <p className="text-xs text-gray-600 mb-4 max-w-2xl">
            Alapvetően minimum 50.000 martindale-es, nagy kopásállóságú anyagokkal dolgozunk,
            de nem ritka a 100.000 martindale feletti termék sem. Tetszőleges szín, anyag és
            kopásállóság választható.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { img: "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.png", code: "AI", type: "Bársony szövet", mart: ">100.000", ossz: "100% PES", suruseg: "370 g/m²" },
              { img: "/images/0e0445_d1fcd2e300084e7094699e57e927f139.png", code: "AI", type: "Prémium bársony", mart: ">100.000", ossz: "100% PES", suruseg: "450 g/m²" },
            ].map((f, i) => (
              <div key={i}>
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image src={f.img} alt={f.type} fill className="object-cover" />
                </div>
                <p className="text-sm font-bold text-gray-800 mb-1">{f.code}</p>
                <p className="text-xs text-gray-600">Kopásállóság (mart.) ~ {f.mart}</p>
                <p className="text-xs text-gray-600">Összetétel: {f.ossz}</p>
                <p className="text-xs text-gray-600">Sűrűség: {f.suruseg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
