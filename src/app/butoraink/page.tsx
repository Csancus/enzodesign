import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bútoraink – Enzo Design",
  description: "Kanapék, fotelek, franciaágyak – 2000 nm-es telephelyünkön készülnek. Tömörfa, prémium szövetek.",
};

const SOFA_CARDS = [
  { name: "Old's Club Kanapék", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/kanapek/olds-club-kanapek" },
  { name: "Ivone kanapék", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek/ivone-kanapek" },
  { name: "Design Kanapék", tagline: "Modern minőség", image: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp", href: "/butoraink/kanapek/design-kanapek" },
  { name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek/chesterfield-kanapek" },
  { name: "New York", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/kanapek/new-york-kanapek" },
  { name: "Joker Kanapék", tagline: "Gáláns megjelenés", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/kanapek/joker-kanapek" },
  { name: "Cannes Kanapé", tagline: "A modern sarok", image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", href: "/butoraink/kanapek/cannes-kanapek" },
  { name: "Egyedi kanapé", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti bútor, kanapé", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const ARMCHAIR_CARDS = [
  { name: "Old's Club Fotel", tagline: "Karakteres elegancia", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/fotelek/olds-club-fotel" },
  { name: "Ivone fotel", tagline: "Nappalid éke", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/fotelek/ivone-fotel" },
  { name: "Design Fotel", tagline: "Modern minőség", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp", href: "/butoraink/fotelek/design-fotel" },
  { name: "Chesterfield fotel", tagline: "A bútor, aminek történelme van", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp", href: "/butoraink/fotelek/chesterfield-fotel" },
  { name: "New York fotel", tagline: "Klasszikus stílus", image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", href: "/butoraink/fotelek/new-york-fotel" },
  { name: "Joker fotel", tagline: "Elegáns bútor, bárhova", image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp", href: "/butoraink/fotelek/joker-fotel" },
  { name: "További fotelek", tagline: "Kényelem, karfával", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek/tovabbi-fotelek" },
  { name: "Egyedi fotelek", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti fotelek, székek", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

function ProductGrid({ items }: { items: typeof SOFA_CARDS }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link key={item.name} href={item.href} className="group block">
          <div className="relative aspect-[4/3] overflow-hidden mb-2">
            <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <h3 className="text-[#b8924a] text-sm font-semibold hover:underline">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.tagline}</p>
        </Link>
      ))}
    </div>
  );
}

const DESC = "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak. Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni. Mindegyik bútorunk egyedi színben, anyagmintával, méretben és kopásállóság-erősséggel (martindale) kérhető.";

export default function ButorainkPage() {
  return (
    <>
      {/* FELSŐ BANNER */}
      <section className="flex h-[260px] overflow-hidden">
        <div className="w-[60%] flex">
          <div className="w-1/2 relative">
            <Image src="/images/nsplsh_76b6c7badc3843cfa19665d5dfc4a2de.webp" alt="" fill className="object-cover" priority />
          </div>
          <div className="w-1/2 relative">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="" fill className="object-cover" priority />
          </div>
        </div>
        <div className="w-[40%] bg-white flex flex-col justify-center px-8 py-6">
          <h1 className="text-2xl font-bold text-[#b8924a] mb-3">Bútoraink</h1>
          <p className="text-xs text-gray-700 leading-relaxed mb-3">{DESC}</p>
          <Link href="/kapcsolat-es-rendeles" className="text-xs text-[#b8924a] underline">
            Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni.
          </Link>
        </div>
      </section>

      {/* TELJES SZÉLESSÉGŰ BANNER */}
      <section className="relative h-[200px] overflow-hidden">
        <Image src="/images/e7ad8b_7ddbaba656fc44bea629677edb9d6d58.webp" alt="Enzo Design kollekcó" fill className="object-cover" />
      </section>

      {/* FEATURES */}
      <section className="py-6 bg-[#f9f9f9]">
        <div className="max-w-xl mx-auto px-4 text-center text-sm text-gray-700">
          <p className="font-medium mb-2">Mindegyik bútorunkat ajánljuk:</p>
          <ul className="text-left inline-block list-disc list-inside space-y-1 text-xs text-gray-600">
            <li>Egyedi szín választás</li>
            <li>Anyagminta szerint</li>
            <li>Tetszőleges méret</li>
            <li>Kopásállóság-erősséggel (martindale) kérhető</li>
            <li>és leadható Súligneni laddigat (martindale) kárfelt.</li>
          </ul>
        </div>
      </section>

      {/* KANAPÉK */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-xl font-bold text-[#b8924a] mb-1">Kanapék</h2>
          <p className="text-xs text-gray-600 mb-1">Válassza az a 2000 Bútorainkból nagy funkcióit és legjobb kötőivel.<br />A Bútoraink elkülönöli és anyagmintájából fennáll és mi mindenkinek.</p>
          <Link href="/butoraink/kanapek" className="text-xs text-[#b8924a] underline block mb-6">Kanapé típusok, stílusítettsel kérhető tárokban</Link>
          <ProductGrid items={SOFA_CARDS} />
        </div>
      </section>

      {/* FOTELEK */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-xl font-bold text-[#b8924a] mb-1">Fotelek</h2>
          <p className="text-xs text-gray-600 mb-1">Válassza az a 2000 Bútorainkból nagy funkcióit és legjobb kötőivel.<br />A Bútoraink elkülönöli és anyagmintájából fennáll és mi mindenkinek.</p>
          <Link href="/butoraink/fotelek" className="text-xs text-[#b8924a] underline block mb-6">Fotel típusok, stílusítettsel kérhető tárokban</Link>
          <ProductGrid items={ARMCHAIR_CARDS} />
        </div>
      </section>
    </>
  );
}
