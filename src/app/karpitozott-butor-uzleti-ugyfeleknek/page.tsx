import type { Metadata } from "next";
import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";
import EditBtn from "@/components/admin/EditBtn";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Kárpitozott bútor üzleti ügyfeleknek – Enzo Design",
  description: "Egyedi bútor üzleti ügyfeleknek – bútorbolt Nagykanizsán, online rendelés. Éttermeknek, szállodáknak tömörfa szerkezettel, nagy kopásállóságú anyagokkal.",

  alternates: { canonical: "https://enzodesign.hu/karpitozott-butor-uzleti-ugyfeleknek" },
  openGraph: {
    title: "Kárpitozott bútor üzleti ügyfeleknek – Enzo Design",
    description: "Egyedi bútor üzleti ügyfeleknek – bútorbolt Nagykanizsán, online rendelés. Éttermeknek, szállodáknak tömörfa szerkezettel, nagy kopásállóságú anyagokkal.",
    url: "https://enzodesign.hu/karpitozott-butor-uzleti-ugyfeleknek",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const HERO_SCHEMA: FieldDef[] = [
  { key: "tagline", label: "Kis felső felirat", type: "text" },
  { key: "title", label: "Főcím", type: "text" },
  { key: "body", label: "Leírás", type: "textarea" },
];

const INTRO_SCHEMA: FieldDef[] = [
  { key: "body", label: "Bevezető szöveg (bekezdések \\n\\n-nel elválasztva)", type: "textarea" },
];

const SEGMENTS_SCHEMA: FieldDef[] = [
  {
    key: "items",
    label: "Szegmens kártyák",
    type: "array",
    itemFields: [
      { key: "title", label: "Cím", type: "text" },
      { key: "desc", label: "Leírás", type: "textarea" },
      { key: "image", label: "Kép", type: "image" },
    ],
  },
];

const BENEFITS_SCHEMA: FieldDef[] = [
  { key: "title", label: "Szekció cím", type: "text" },
  { key: "items", label: "Előnyök (soronként egy)", type: "textarea" },
];

const REFS_SCHEMA: FieldDef[] = [
  { key: "title", label: "Szekció cím", type: "text" },
  {
    key: "images",
    label: "Referencia képek",
    type: "array",
    itemFields: [{ key: "src", label: "Kép URL", type: "image" }],
  },
];

export default async function UzletiButorPage() {
  const isAdmin = await getAdminStatus();

  const [heroCfg, introCfg, segmentsCfg, benefitsCfg, refsCfg] = await Promise.all([
    getModuleConfig("uzleti:hero"),
    getModuleConfig("uzleti:intro"),
    getModuleConfig("uzleti:segments"),
    getModuleConfig("uzleti:benefits"),
    getModuleConfig("uzleti:refs"),
  ]);

  const hero = {
    tagline: (heroCfg.tagline as string) || "Üzleti megrendelések",
    title: (heroCfg.title as string) || "Éttermeknek, szállodáknak, rendelőknek, fogadóterekbe",
    body: (heroCfg.body as string) || "2000 nm-es üzemünkben rendszeresen gyártunk nem csak lakossági, hanem üzleti megrendelésre is termékeket. Tömörfa szerkezettel, nagy kopásállóságú anyagokkal dolgozunk, így a bútor forgalmas helyeken is hosszú élettartammal rendelkezik.",
  };

  const defaultIntro = "Minden ügyfelünkkel egyedileg foglalkozunk.\n\nTelefonos vagy emailes egyeztetést követően ingyenes helyszíni egyeztetéssel rövid határidőn belül elkészítjük a kért bútorokat.\n\nNézd meg referenciáinkat és kérj árajánlatot!";
  const introBody = (introCfg.body as string) || defaultIntro;
  const introParagraphs = introBody.split("\n\n").map((p) => p.trim()).filter(Boolean);

  const defaultSegments = [
    { title: "Szálloda, fogadótér", desc: "Örömmel készítünk azonos designban többféle, egyedi méretű terméket.", image: "/images/uzleti-szalloda.webp" },
    { title: "Rendelő", desc: "Egy orvosi rendelő nem lehetne autentikus egy Chesterfield kanapé vagy néhány fotel nélkül.", image: "/images/uzleti-rendelo.webp" },
    { title: "Étterem, kávézó", desc: "Teljes, nagy teherbírású szetteket gyártunk kis kávézók vagy nagy éttermek részére.", image: "/images/uzleti-etterem.webp" },
    { title: "Airbnb", desc: "Egyedi, kisebb helységű Airbnb-k számára készítünk okos és vagány megoldásokat.", image: "/images/uzleti-airbnb.webp" },
  ];
  const segmentsItems = (segmentsCfg.items as typeof defaultSegments | undefined) ?? defaultSegments;

  const defaultBenefits = "Nagy teherbírású kárpit anyagok (>100.000 martindale)\nTömörfa váz – 10 év vázgarancia\nEgyedi méret, szín és kialakítás\nTömegtermelési lehetőség – 2000 nm-es üzem\nIngyenes helyszíni egyeztetés\nRövid határidő – 4–6 hét";
  const benefits = {
    title: (benefitsCfg.title as string) || "Miért válasszon minket üzleti célra?",
    items: (benefitsCfg.items as string) || defaultBenefits,
  };
  const benefitsList = benefits.items.split("\n").map((s) => s.trim()).filter(Boolean);

  const defaultRefsImages = [
    { src: "/images/uzleti-ref1.webp" },
    { src: "/images/uzleti-ref2.webp" },
    { src: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp" },
  ];
  const refs = {
    title: (refsCfg.title as string) || "Referenciák és inspirációk",
    images: (refsCfg.images as { src: string }[] | undefined) ?? defaultRefsImages,
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1c1c1c] py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-4">{hero.tagline}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            {hero.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{hero.body}</p>
          <a href="#kapcsolat" className="inline-block bg-[#b8924a] hover:bg-[#7d6142] text-white font-bold uppercase tracking-wider px-10 py-4 transition-colors text-sm">
            Ajánlatot kérek
          </a>
        </div>
        {isAdmin && (
          <EditBtn moduleId="uzleti:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />
        )}
      </section>

      {/* INTRO SZÖVEG */}
      <section className="relative py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {introParagraphs.map((p, i) => (
            <p key={i} className={`text-gray-600 leading-relaxed mb-4 ${i === 0 ? "text-lg text-gray-700" : ""}`}>
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <a href="tel:+36303778983" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              +36 30 377 8983
            </a>
            <a href="mailto:info@enzodesign.hu" className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              info@enzodesign.hu
            </a>
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="uzleti:intro" config={{ body: introBody }} schema={INTRO_SCHEMA} label="✏ Bevezető" />
        )}
      </section>

      {/* 4 SZEGMENS */}
      <section className="relative pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {segmentsItems.map((s) => (
              <div key={s.title} className="group">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="uzleti:segments" config={{ items: segmentsItems }} schema={SEGMENTS_SCHEMA} label="✏ Szegmensek" />
        )}
      </section>

      {/* ELŐNYÖK */}
      <section className="relative py-16 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                {benefits.title}
              </h2>
              <ul className="space-y-3 text-sm text-gray-700 mb-8">
                {benefitsList.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#b8924a] flex-shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#kapcsolat" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
                Ajánlatot kérek
              </a>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Üzleti bútor gyártás" fill className="object-cover" />
            </div>
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="uzleti:benefits" config={benefits} schema={BENEFITS_SCHEMA} label="✏ Előnyök" />
        )}
      </section>

      {/* REFERENCIÁK */}
      <section className="relative py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            {refs.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {refs.images.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] overflow-hidden">
                <Image src={img.src} alt={`Referencia ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="uzleti:refs" config={refs} schema={REFS_SCHEMA} label="✏ Referenciák" />
        )}
      </section>

      <div id="kapcsolat">
        <ContactFormSection />
      </div>
    </>
  );
}
