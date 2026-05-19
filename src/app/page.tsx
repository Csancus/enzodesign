import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const POPULAR_PRODUCTS = [
  {
    name: "Old's Club",
    tagline: "2-es kanapé",
    price: "444.240 Ft-tól",
    image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp",
    href: "/butoraink/kanapek/olds-club-kanapek",
  },
  {
    name: "Ivone",
    tagline: "2-es kanapé",
    price: "444.240 Ft-tól",
    image: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
    href: "/butoraink/kanapek/ivone-kanapek",
  },
  {
    name: "Chesterfield",
    tagline: "2-es kanapé",
    price: "399.000 Ft-tól",
    image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
    href: "/butoraink/kanapek/chesterfield-kanapek",
  },
  {
    name: "Cannes-Nizza",
    tagline: "Sarokkanapé",
    price: "367.340 Ft-tól",
    image: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp",
    href: "/butoraink/kanapek/cannes-kanapek",
  },
  {
    name: "Fotelek",
    tagline: "Minden stílusban",
    price: "82.820 Ft-tól",
    image: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp",
    href: "/butoraink/fotelek",
  },
  {
    name: "Éttermi bútorok",
    tagline: "Székek",
    price: "76.200 Ft-tól",
    image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
    href: "/karpitozott-butor-uzleti-ugyfeleknek",
  },
];

const STEPS = [
  { step: "01", title: "Nyers fa", desc: "Tömörfa alapanyag helyi megmunkálással" },
  { step: "02", title: "Minőségi anyagok", desc: "Nagy kopásállóságú szövetek és rugók" },
  { step: "03", title: "Kézi összeszerelés", desc: "Varrat, rugózás, kárpitozás gondos kézimunkával" },
  { step: "04", title: "Házhozszállítás", desc: "Kész bútor szállítása az első ajtóig" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#1c1c1c]">
        <Image
          src="/images/hero-chesterfield.jpg"
          alt="Enzo Design – Egyedi kárpitozott bútorok"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Egyedi és azonnal elérhető kárpitozott bútorok
          </h1>
          <p className="text-xl md:text-2xl text-[#b8924a] font-light mb-4">Közvetlenül a gyártótól</p>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán. Tömörfa szerkezettel,
            prémium anyagokkal, versenyképes áron.
          </p>
          <Link
            href="/butoraink"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors text-sm"
          >
            Tovább
          </Link>
        </div>
      </section>

      {/* RÓLUNK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#7d6142] text-sm font-semibold uppercase tracking-wider mb-3">20 éves tapasztalat</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Magyar kézműves bútorok<br />versenyképes áron
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Bútoraink 2000 nm-es telephelyünkön készülnek Nagykanizsán. Tömör fával, nagy kopásállóságú
              szövetekkel és bőrökkel dolgozunk – és minden elkészített bútort kézzel ellenőrzünk.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gyártóként és kereskedőként is működünk, így közvetítő nélkül, reális áron juthat hozzá
              álombútoráros. Szinte bármilyen egyedi, kárpitozott bútort el tudunk készíteni egyedi szín,
              anyagminta, méret és kopásállóság szerint.
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
              href="/rolunk"
              className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
            >
              Rólunk
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/uzem.jpg" alt="Enzo Design műhely" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* FÁTÓL A KANAPÉIG */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#7d6142] text-sm font-semibold uppercase tracking-wider mb-2">Gyártási folyamat</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
              Fától a kanapéig
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-5xl font-bold text-[#ede6d8] mb-4 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGNÉPSZERŰBB BÚTOROK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#7d6142] text-sm font-semibold uppercase tracking-wider mb-2">Termékeink</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
              Legnépszerűbb bútoraink
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_PRODUCTS.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="group block border border-gray-100 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1c1c1c] text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">{product.tagline}</p>
                  <p className="text-[#7d6142] font-semibold text-sm">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/butoraink"
              className="inline-block bg-[#1c1c1c] hover:bg-[#7d6142] text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors text-sm"
            >
              Összes termék
            </Link>
          </div>
        </div>
      </section>

      {/* KONTAKT FORM */}
      <section className="py-20 bg-[#f5f0e8]" id="rendeles">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#7d6142] text-sm font-semibold uppercase tracking-wider mb-2">Kapcsolatfelvétel</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Rendelés és kapcsolat
            </h2>
            <p className="text-gray-600">
              Töltsd ki a kapcsolatfelvételi űrlapot és néhány héten belül nálad lehet álmaid bútora!
            </p>
          </div>
          <div className="bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
