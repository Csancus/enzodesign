import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Egyedi Bútor – Enzo Design",
  description: "Egyedi kárpitozott bútor rendelés. Küldj egy képet és mi elkészítjük álmaid bútorát.",
};

const GALLERY = [
  "/images/d56f41_1856f7e2d27f49c0970c4b84722b089d.webp",
  "/images/d56f41_25474a021ee44234972eec82773e58de.webp",
  "/images/d56f41_2d00c16047994b71b258082850454298.webp",
  "/images/d56f41_33f0883f221f432e82f585c99d9462af.webp",
  "/images/d56f41_4ac620604ed74e9abf233f78ead4d1fd.webp",
  "/images/d56f41_6112327234134a6b97efea35c3078ddc.webp",
  "/images/d56f41_76121739e60c481ea7e2318fab374f6f.webp",
  "/images/d56f41_8e5df897a0fb4ab9a8fa551ab9cd1aca.webp",
];

const DESC = "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, ezért áraink továbbra is nagyon versenyképesek maradnak. Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni. Mindegyik bútorunk egyedi színben, anyagmintával, méretben és kopásállóság-erősséggel (martindale) kérhető.";

export default function EgyediButorPage() {
  return (
    <>
      {/* FELSŐ BANNER */}
      <section className="flex h-[260px] overflow-hidden">
        <div className="w-[60%] relative">
          <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="" fill className="object-cover" priority />
        </div>
        <div className="w-[40%] bg-white flex flex-col justify-center px-8 py-6">
          <h1 className="text-2xl font-bold text-[#b8924a] mb-3">Egyedi bútor</h1>
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

      {/* EGYEDI BÚTOR GALÉRIA */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-xl font-bold text-[#b8924a] mb-1">Egyedi bútor</h2>
          <p className="text-xs text-gray-600 mb-1">
            Válassza az a 2000 Bútorainkból nagy funkcióit és legjobb kötőivel.<br />
            A Bútoraink elkülönöli és anyagmintájából fennáll és mi mindenkinek.
          </p>
          <Link href="/kapcsolat-es-rendeles" className="text-xs text-[#b8924a] underline block mb-6">
            Egyedi bútor rendelése
          </Link>
          <div className="grid grid-cols-4 grid-rows-2 gap-2">
            {GALLERY.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={src} alt={`Egyedi bútor ${i + 1}`} fill className="object-cover" />
              </div>
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
