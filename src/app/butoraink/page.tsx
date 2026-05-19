import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { FABRICS } from "@/data/products";

export const metadata: Metadata = {
  title: "Bútoraink",
  description: "Kanapék, fotelek, franciaágyak, székek – 2000 nm-es telephelyünkön készülnek. Tömörfa, prémium szövetek.",
};

const CATEGORIES = [
  {
    title: "Kanapék",
    href: "/butoraink/kanapek",
    image: "https://static.wixstatic.com/media/9a0b1d_13e53dff0c704be6b672061708d151e6~mv2.jpg",
    desc: "Old's Club, Ivone, Design, Chesterfield, New York, Joker, Cannes",
  },
  {
    title: "Fotelek",
    href: "/butoraink/fotelek",
    image: "https://static.wixstatic.com/media/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6~mv2.jpg",
    desc: "90.170 Ft-tól – minden kollekció fotelban is elérhető",
  },
  {
    title: "Franciaágyak",
    href: "/butoraink/franciaagyak",
    image: "https://static.wixstatic.com/media/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472~mv2.jpg",
    desc: "Bilbao, Madrid, további modellek – 351.160 Ft-tól",
  },
  {
    title: "Székek, zsámolyok, falvédők",
    href: "/butoraink/szek-zsamoly-falvedo",
    image: "https://static.wixstatic.com/media/9a0b1d_105ca1ce5db54feab5001b7ec13a9499~mv2.jpg",
    desc: "76.200 Ft-tól – egyedi tervezés lehetséges",
  },
  {
    title: "Egyedi bútor",
    href: "/butoraink/egyedi-butor",
    image: "https://static.wixstatic.com/media/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965~mv2.jpg",
    desc: "Ami neked tetszik! Küldj egy képet és mi elkészítjük.",
  },
  {
    title: "Bútorválasztó",
    href: "/butorvalaszto",
    image: "https://static.wixstatic.com/media/9a0b1d_13e53dff0c704be6b672061708d151e6~mv2.jpg",
    desc: "Segítünk megtalálni az ideális bútort 3 egyszerű lépésben",
  },
];

export default function ButorainkPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Termékeink</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Bútoraink
          </h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel
            és bőrökkel dolgozunk – és minden elkészített bútort kézzel ellenőrzünk.
          </p>
        </div>
      </section>

      {/* KATEGÓRIÁK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#1c1c1c] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {cat.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EGYEDI LEÍRÁS */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Minden bútor egyedi
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Gyártóink lévén versenyképes árakat tudunk kínálni. Minden elkészített bútorunk egyedi szín,
            anyagminta, méret és kopásállóság-erősség (martindale) szerint kérhető.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <strong>3 év garancia</strong> a termékre, <strong>10 év garancia</strong> a vázszerkezetre.
            Gyártási idő: 4–6 hét.
          </p>
        </div>
      </section>

      {/* KÁRPITSZÖVETEK */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-12" style={{ fontFamily: "var(--font-heading)" }}>
            Kárpitszövetek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FABRICS.map((fabric) => (
              <div key={fabric.code} className="border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#1c1c1c] text-white font-bold text-sm px-3 py-1">{fabric.code}</span>
                  <span className="font-semibold text-[#1c1c1c]">{fabric.type}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                  <div><span className="font-medium">Kopásállóság:</span> {fabric.martindale} martindale</div>
                  <div><span className="font-medium">Összetétel:</span> {fabric.composition}</div>
                  {fabric.density !== "–" && (
                    <div><span className="font-medium">Sűrűség:</span> {fabric.density}</div>
                  )}
                  <div><span className="font-medium">Színek:</span> {fabric.colors} szín</div>
                </div>
                <ul className="space-y-1">
                  {fabric.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#7d6142] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6 italic">
            Keressen bennünket további szövetválasztékkal kapcsolatban – több mint 100 féle szövetből választhat.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Rendelés és kapcsolat
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Töltsd ki a kapcsolatfelvételi űrlapot és néhány héten belül nálad lehet álmaid bútora!
          </p>
          <div className="bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
