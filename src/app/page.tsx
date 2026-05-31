import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

const STEPS = [
  { title: "Nyers fa – 100% tömörfa alapanyagokkal", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" },
  { title: "Minőségi – kellékek anyagokkal", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp" },
  { title: "Kárpitozás – gondos kézimunkával", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp" },
  { title: "Ülőgarnitúra – kész a hazahozatalra", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp" },
];

const POPULAR = [
  { name: "Old's Club", desc: "Karakteres elegancia, széles ülőfelület", price: "444.240 Ft-tól", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/kanapek/olds-club-kanapek" },
  { name: "Ivone", desc: "Nappalid éke, steppelt háttámla", price: "444.240 Ft-tól", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek/ivone-kanapek" },
  { name: "Chesterfield", desc: "A bútor, aminek történelme van", price: "399.810 Ft-tól", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek/chesterfield-kanapek" },
  { name: "Cannes-Nizza", desc: "Sarokkanapé, modern kialakítással", price: "367.340 Ft-tól", image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", href: "/butoraink/kanapek/cannes-kanapek" },
  { name: "Fotelek", desc: "Minden stílusban, széles választék", price: "82.820 Ft-tól", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek" },
  { name: "Étterem, hotel", desc: "Üzleti célú kárpitozott bútorok", price: "76.200 Ft-tól", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
];

const EGYEDI = [
  "/images/d56f41_1856f7e2d27f49c0970c4b84722b089d.webp",
  "/images/d56f41_25474a021ee44234972eec82773e58de.webp",
  "/images/d56f41_2d00c16047994b71b258082850454298.webp",
  "/images/d56f41_33f0883f221f432e82f585c99d9462af.webp",
  "/images/d56f41_4ac620604ed74e9abf233f78ead4d1fd.webp",
  "/images/d56f41_6112327234134a6b97efea35c3078ddc.webp",
  "/images/d56f41_76121739e60c481ea7e2318fab374f6f.webp",
  "/images/d56f41_8e5df897a0fb4ab9a8fa551ab9cd1aca.webp",
  "/images/d56f41_a25e75c7652549a3af801f54936bd8d3.webp",
  "/images/d56f41_dd930fc9676a45d2bebb9bf32d374552.webp",
  "/images/d56f41_de20568c06f34c3698094c6e96b0f85a.webp",
  "/images/d56f41_e3451012000b429eaf87d375a4c9060f.webp",
];

export default function HomePage() {
  return (
    <>
      {/* HERO – két kép egymás mellett, fehér kártya a közepén */}
      <section className="relative overflow-hidden">
        <div className="flex h-[400px] md:h-[520px]">
          <div className="w-1/2 relative">
            <Image
              src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
              alt="Chesterfield kanapé"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="w-1/2 relative">
            <Image
              src="/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp"
              alt="Enzo Design szoba"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white text-center px-8 py-7 max-w-[280px] w-full shadow-sm pointer-events-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image src="/images/logo.png" alt="Enzo Design" width={44} height={34} className="object-contain" />
            </div>
            <p className="text-[#1c1c1c] text-xs leading-relaxed mb-4">
              Egyedi és azonnal elérhető kárpitozott bútorok<br />közvetlenül a gyártótól.
            </p>
            <Link
              href="/butoraink"
              className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-2 transition-colors text-xs"
            >
              Tovább
            </Link>
          </div>
        </div>
      </section>

      {/* RÓLUNK – olívazöld */}
      <section className="py-14 text-white text-center" style={{ backgroundColor: "#7a7a3a" }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Rólunk</h2>
          <p className="text-sm leading-relaxed mb-3 opacity-90">
            20 éves tapasztalattal rendelkező magyar bútorgyártó cég vagyunk. Célunk minőségi, tömörfa-szerkezettel
            és nagy kopásállóságú szövettel borított bútorokat készíteni, elérhető áron. Üzleteinkben megveheti
            bútorait és azonnal hazaviheti. A minőség, az elérhető ár és a garancia hármasával kínáljuk bútorainkat.
          </p>
          <p className="text-sm leading-relaxed mb-5 opacity-90">
            Mivel gyártók vagyunk, nincs extra reklámköltségünk. Közvetlenül a fogyasztónak, reális áron értékesítünk –
            így a feljebbi minőséget más vállalkozásoknál megszokott árakon kaphatja meg.
          </p>
          <div className="relative w-20 h-20 mx-auto mb-6 overflow-hidden rounded">
            <Image src="/images/9a0b1d_1946145440dc499d9ea4522e3df74f8a.png" alt="Enzo Design" fill className="object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {[
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>, label: "Ingyenes szállítás" },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: "Minőség ellenőrzés" },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, label: "Garancia" },
              { svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 mx-auto mb-1"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, label: "Személyes vásárlás" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                {item.svg}
                <div className="text-xs opacity-90 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FÁTÓL A KANAPÉIG */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] text-center mb-8">Fától a kanapéig</h2>
          <div className="grid grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <div key={i} className="text-center">
                <div className="relative aspect-square overflow-hidden mb-2">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <p className="text-xs text-gray-600 leading-tight">{s.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEGNÉPSZERŰBB BÚTORAINK */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] text-center mb-2">Legnépszerűbb bútoraink</h2>
          <p className="text-center text-xs text-gray-500 mb-8">Válasszon kollekciónkból az Ön igényei szerint</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {POPULAR.map((p) => (
              <div key={p.name} className="text-center">
                <div className="relative aspect-[4/3] overflow-hidden mb-2">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                </div>
                <p className="text-xs text-gray-500 mb-1 leading-tight">{p.desc}</p>
                <p className="text-xs font-bold text-[#1c1c1c] mb-1">{p.name}</p>
                <p className="text-xs text-[#7d6142] mb-2">{p.price}</p>
                <Link
                  href={p.href}
                  className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white text-xs px-3 py-1 transition-colors"
                >
                  Tovább
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEGRENDELÉSRE KÉSZÍTETT BÚTOROK */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-2">Megrendelésre készített bútorok</h2>
          <p className="text-xs text-gray-500 mb-8">Egyedi megrendelésre is vállalunk bármilyen bútorkészítést, bútorunkat akciójával elvek</p>
          <div className="grid grid-cols-4 gap-1 mb-8">
            {EGYEDI.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={src} alt={`Egyedi bútor ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
          <Link
            href="/butoraink/egyedi-butor"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-xs"
          >
            Tovább
          </Link>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
