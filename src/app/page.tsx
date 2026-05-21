import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

const POPULAR_PRODUCTS = [
  {
    name: "Old's Club",
    tagline: "2-es kanapé",
    price: "444.240 Ft-tól",
    image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
    href: "/butoraink/kanapek/olds-club-kanapek",
  },
  {
    name: "Ivone",
    tagline: "2-es kanapé",
    price: "444.240 Ft-tól",
    image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp",
    href: "/butoraink/kanapek/ivone-kanapek",
  },
  {
    name: "Chesterfield",
    tagline: "2-es kanapé",
    price: "399.810 Ft-tól",
    image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
    href: "/butoraink/kanapek/chesterfield-kanapek",
  },
  {
    name: "Cannes-Nizza",
    tagline: "Sarokkanapé",
    price: "367.340 Ft-tól",
    image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp",
    href: "/butoraink/kanapek/cannes-kanapek",
  },
  {
    name: "Fotelek",
    tagline: "Minden stílusban",
    price: "82.820 Ft-tól",
    image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp",
    href: "/butoraink/fotelek",
  },
  {
    name: "Étterem, hotel, üzleti bútorok",
    tagline: "Éttermi székek",
    price: "76.200 Ft-tól",
    image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp",
    href: "/karpitozott-butor-uzleti-ugyfeleknek",
  },
];

const STEPS = [
  { step: "01", title: "Nyers fa", desc: "Tömörfa alapanyag helyi megmunkálással", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" },
  { step: "02", title: "Minőségi anyagok", desc: "Nagy kopásállóságú szövetek és rugók", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp" },
  { step: "03", title: "Kézi összeszerelés", desc: "Varrat, rugózás, kárpitozás gondos kézimunkával", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp" },
  { step: "04", title: "Házhozszállítás", desc: "Kész bútor szállítása az első ajtóig", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO – teljes szélességű kép */}
      <section className="relative min-h-[75vh] flex items-end justify-center overflow-hidden bg-[#1c1c1c]">
        <Image
          src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
          alt="Enzo Design – Egyedi kárpitozott bútorok"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 w-full bg-gradient-to-t from-black/80 to-transparent pt-32 pb-16 px-4 text-center text-white">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Egyedi és azonnal elérhető kárpitozott bútorok
          </h1>
          <p className="text-xl md:text-2xl text-[#b8924a] font-light mb-6">Közvetlenül a gyártótól</p>
          <Link
            href="/butoraink"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors text-sm"
          >
            Tovább
          </Link>
        </div>
      </section>

      {/* TAGLINE SZEKCIÓ – fehér, középre igazított */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#7d6142] text-sm font-semibold uppercase tracking-wider mb-3">20 éves tapasztalat</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            20 éves tapasztalattal rendelkező magyar bútorgyártó cég vagyunk
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Célunk minőségi, tömörfa-szerkezettel és nagy kopásállóságú szövettel borított
            bútorokat készíteni, elérhető áron.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[
              { label: "Év tapasztalat", value: "20+" },
              { label: "Termékgarancia", value: "3 év" },
              { label: "Vázgarancia", value: "10 év" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#7d6142]" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
          <Link
            href="/butoraink"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors text-sm"
          >
            Tovább
          </Link>
        </div>
      </section>

      {/* FÁTÓL A KANAPÉIG – képekkel */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Gyártási folyamat</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1c1c1c]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Fától a kanapéig
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-5 text-center">
                  <div
                    className="text-4xl font-bold text-[#f0ebe3] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-[#1c1c1c] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGNÉPSZERŰBB BÚTORAINK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Kollekciónkból</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1c1c1c]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Legnépszerűbb bútoraink
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_PRODUCTS.map((product) => (
              <Link key={product.name} href={product.href} className="group block bg-white overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-[#b8924a] uppercase tracking-wider mb-1">{product.tagline}</p>
                  <h3 className="text-lg font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                    {product.name}
                  </h3>
                  <p className="text-[#7d6142] font-semibold text-sm">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/butoraink"
              className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors text-sm"
            >
              Összes bútor
            </Link>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
