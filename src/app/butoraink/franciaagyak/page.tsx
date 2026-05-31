import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franciaágyak – Enzo Design",
  description: "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. 351.160 Ft-tól, tömörfa szerkezettel.",
};

const BEDS_ROW1 = [
  { name: "Bilbao franciaágy", tagline: "Kényelmedre", image: "/images/e7ad8b_335724cf7ec5471c89807f009900353d.webp", href: "/butoraink/franciaagyak" },
  { name: "Madrid franciaágy", tagline: "Hálószobád éke", image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", href: "/butoraink/franciaagyak" },
  { name: "További ágyak", tagline: "Kísértő és zseniális darabok", image: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", href: "/butoraink/franciaagyak" },
];

const BEDS_ROW2 = [
  { name: "Egyedi megoldások", tagline: "Elkészítjük álombútorod", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp", href: "/butoraink/egyedi-butor" },
  { name: "Üzleti ágyak, garnitúrák", tagline: "Vásárlóid kényelmére", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const DESC = "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak. Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni. Mindegyik bútorunk egyedi színben, anyagmintával, méretben és kopásállóság-erősséggel (martindale) kérhető.";

export default function FranciaagyakPage() {
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
          <h1 className="text-2xl font-bold text-[#b8924a] mb-3">Ágyak</h1>
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

      {/* FRANCIAÁGYAK GRID */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-xl font-bold text-[#b8924a] mb-1">Franciaágyak</h2>
          <p className="text-xs text-gray-600 mb-1">
            Válassza az a 2000 Bútorainkból nagy funkcióit és legjobb kötőivel.<br />
            A Bútoraink elkülönöli és anyagmintájából fennáll és mi mindenkinek.
          </p>
          <Link href="/kapcsolat-es-rendeles" className="text-xs text-[#b8924a] underline block mb-6">
            Ágyaknál kereskedni a Kanapénál elindult táblán
          </Link>

          {/* Sor 1: 3 ágy */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {BEDS_ROW1.map((b) => (
              <Link key={b.name} href={b.href} className="group block">
                <div className="relative aspect-square overflow-hidden mb-2">
                  <Image src={b.image} alt={b.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[#b8924a] text-sm font-semibold hover:underline">{b.name}</h3>
                <p className="text-xs text-gray-500">{b.tagline}</p>
              </Link>
            ))}
          </div>

          {/* Sor 2: 2 kártya */}
          <div className="grid grid-cols-2 gap-6">
            {BEDS_ROW2.map((b) => (
              <Link key={b.name} href={b.href} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden mb-2">
                  <Image src={b.image} alt={b.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-[#b8924a] text-sm font-semibold hover:underline">{b.name}</h3>
                <p className="text-xs text-gray-500">{b.tagline}</p>
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
              { img: "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.png", code: "AI", mart: ">100.000", ossz: "100% PES", suruseg: "370 g/m²" },
              { img: "/images/0e0445_d1fcd2e300084e7094699e57e927f139.png", code: "AI", mart: ">100.000", ossz: "100% PES", suruseg: "450 g/m²" },
            ].map((f, i) => (
              <div key={i}>
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image src={f.img} alt="Kárpit anyag" fill className="object-cover" />
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
