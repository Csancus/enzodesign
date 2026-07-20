import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QuoteSlider from "@/components/QuoteSlider";
import EditBtn from "@/components/admin/EditBtn";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Chesterfield Bútorok – Kanapék és Fotelek | Enzo Design",
  description: "Chesterfield kanapék és fotelek közel 20 éve. Tömörfa váz, prémium szövet vagy bőr bevonat, 3+10 év garanciával. Egyedi méretben, közvetlenül a gyártótól.",
  alternates: { canonical: "https://www.enzodesign.hu/chesterfield" },
  openGraph: {
    title: "Chesterfield Bútorok – Kanapék és Fotelek | Enzo Design",
    description: "Chesterfield kanapék és fotelek közel 20 éve. Tömörfa váz, prémium szövet vagy bőr bevonat, 3+10 év garanciával. Egyedi méretben, közvetlenül a gyártótól.",
    url: "https://www.enzodesign.hu/chesterfield",
    images: [{ url: "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp", width: 1920, height: 800 }],
  },
};

const HERO_SCHEMA: FieldDef[] = [
  { key: "title", label: "Főcím", type: "text" },
  { key: "body", label: "Leírás szöveg", type: "textarea" },
  { key: "image", label: "Háttérkép", type: "image" },
];

const SUBTOPICS_SCHEMA: FieldDef[] = [
  { key: "sectionTitle", label: "Szekció cím", type: "text" },
  {
    key: "items",
    label: "Témakör kártyák",
    type: "array",
    itemFields: [
      { key: "title", label: "Cím", type: "text" },
      { key: "href", label: "Link (URL)", type: "url" },
      { key: "desc", label: "Leírás", type: "textarea" },
    ],
  },
];

const ETERNAL_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "body", label: "Szöveg", type: "textarea" },
];

export default async function ChesterfieldPage() {
  const isAdmin = await getAdminStatus();

  const [heroCfg, subtopicsCfg, eternalCfg] = await Promise.all([
    getModuleConfig("chesterfield:hero"),
    getModuleConfig("chesterfield:subtopics"),
    getModuleConfig("chesterfield:eternal"),
  ]);

  const hero = {
    title: (heroCfg.title as string) || "A Chesterfield",
    body: (heroCfg.body as string) || "A Chesterfield bútorok az elegancia, a hagyomány és a stílus tökéletes kombinációi. A mély gombolás, a bőrborítás és a karakteres formavilág évszázadok óta a luxus és a kifinomult ízlés szimbólumai. Legyen szó klasszikus bőrkanapéról vagy modern újragondolásról, a Chesterfield mindig időtálló választás.",
    image: (heroCfg.image as string) || "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp",
  };

  const defaultSubtopics = [
    { title: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete", desc: "Fedezd fel, hogyan született meg a Chesterfield kanapé legendája az angol arisztokrácia világában! A stílusos bútor gyökerei egészen a 18. századig nyúlnak vissza, és máig az elegancia szimbóluma maradt." },
    { title: "Chesterfield stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek", desc: "Mi teszi a Chesterfieldtet igazán különlegessé? Ismerd meg a jellegzetes gombolást, mély ülőrészt, bőrborítást és díszes karfákat – a formai jegyeket, amik ikonikus bútordarabbá tették." },
    { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak", desc: "A Chesterfield bútorok nemcsak szépek, hanem időtállók is – de vajon mitől? Bemutatjuk a leggyakoribb bőr- és kárpitfajtákat, illetve a tradicionális kézműves technikákat, amelyek a minőséget garantálják." },
    { title: "A Chesterfield a modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben", desc: "Bár klasszikus darab, a Chesterfield remekül illeszkedik a mai modern terekbe is. Inspirációk és tippek arra, hogyan kombinálhatod ezt az időtlen bútort a mai stílusokkal – legyen az minimalista, loft vagy vintage." },
  ];
  const subtopicsSectionTitle = (subtopicsCfg.sectionTitle as string) || "Ismerkedj meg a Chesterfieldel";
  const subtopicsItems = (subtopicsCfg.items as typeof defaultSubtopics | undefined) ?? defaultSubtopics;

  const eternal = {
    title: (eternalCfg.title as string) || "A Chesterfield örök",
    body: (eternalCfg.body as string) || "Közel 20 éve gyártunk Chesterfield bútorokat. Mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel és minőségi szövettel vagy bőr bevonattal.",
  };

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#f5f0ea] py-16 sm:py-32 text-center overflow-hidden">
        <Image src={hero.image} alt="Chesterfield kanapé" fill priority className="object-cover opacity-10" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            {hero.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">{hero.body}</p>
        </div>
        {isAdmin && (
          <EditBtn moduleId="chesterfield:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />
        )}
      </section>

      {/* ISMERKEDJ MEG A CHESTERFIELDEL */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            {subtopicsSectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subtopicsItems.map((t) => (
              <Link key={t.href} href={t.href} className="group border border-gray-200 p-6 hover:border-[#7d6142] hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.title}
                </h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
                <span className="text-[#7d6142] text-sm font-semibold mt-3 inline-block">Tovább →</span>
              </Link>
            ))}
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="chesterfield:subtopics" config={{ sectionTitle: subtopicsSectionTitle, items: subtopicsItems }} schema={SUBTOPICS_SCHEMA} label="✏ Témakörök" />
        )}
      </section>

      {/* A CHESTERFIELD ÖRÖK */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            {eternal.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">{eternal.body}</p>
          <Link href="/butoraink" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
            Lássam a bútorokat
          </Link>
        </div>
        {isAdmin && (
          <EditBtn moduleId="chesterfield:eternal" config={eternal} schema={ETERNAL_SCHEMA} label="✏ Örök szekció" />
        )}
      </section>

      <QuoteSlider />
      <ContactFormSection />
    </>
  );
}
