import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";
import VideoSection from "@/components/sections/VideoSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import EditBtn from "@/components/admin/EditBtn";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Rólunk – Enzo Design",
  description: "Bútorbolt Nagykanizsán – közel 20 éve gyártunk egyedi bútorodat: kanapé, fotel, franciaágy. Online rendelés is lehetséges, 2000 nm-es bemutatóterem.",

  alternates: { canonical: "https://enzodesign.hu/rolunk" },
  openGraph: {
    title: "Rólunk – Enzo Design",
    description: "Bútorbolt Nagykanizsán – közel 20 éve gyártunk egyedi bútorodat: kanapé, fotel, franciaágy. Online rendelés is lehetséges, 2000 nm-es bemutatóterem.",
    url: "https://enzodesign.hu/rolunk",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const STORY_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "p1", label: "1. bekezdés", type: "textarea" },
  { key: "p2", label: "2. bekezdés", type: "textarea" },
  { key: "p3", label: "3. bekezdés", type: "textarea" },
  { key: "p4", label: "4. bekezdés", type: "textarea" },
  { key: "quote", label: "Idézet szövege", type: "textarea" },
  { key: "quoteAuthor", label: "Idézet szerzője", type: "text" },
  { key: "image", label: "Kép (jobb oldalon)", type: "image" },
];

const TOP_IMAGE_SCHEMA: FieldDef[] = [
  { key: "image", label: "Felső nagy kép", type: "image" },
];

const STATS_SCHEMA: FieldDef[] = [
  {
    key: "items",
    label: "Statisztika kártyák",
    type: "array",
    itemFields: [
      { key: "label", label: "Felirat (pl. Alapítva)", type: "text" },
      { key: "value", label: "Érték (pl. 2015)", type: "text" },
    ],
  },
];

const CTA_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím szöveg", type: "textarea" },
  { key: "phone", label: "Telefonszám", type: "text" },
];

export default async function RolunkPage() {
  const isAdmin = await getAdminStatus();

  const [storyCfg, statsCfg, ctaCfg, topImageCfg] = await Promise.all([
    getModuleConfig("rolunk:story"),
    getModuleConfig("rolunk:stats"),
    getModuleConfig("rolunk:cta"),
    getModuleConfig("rolunk:topimage"),
  ]);

  const story = {
    title: (storyCfg.title as string) || "Történetünk",
    p1: (storyCfg.p1 as string) || "Nagykanizsán közel 20 éve készítünk bútorokat melyeket főleg Magyarországon és Németországban, de Európa szerte használnak.",
    p2: (storyCfg.p2 as string) || "A minőség elsődleges számunkra, ezért kizárólag tömörfa szerkezettel és nagy kopásállóságú anyagokkal dolgozunk.",
    p3: (storyCfg.p3 as string) || "Mivel mi vagyunk a gyártó és az eladó is, ezért nincs extra reklámköltségünk, így reális áron tudjuk adni bútoraink.",
    p4: (storyCfg.p4 as string) || "2000 nm-es üzemünkben bármilyen egyedi, vagy típusbútort el tudunk készíteni lakásokba, kávézókba, éttermekbe vagy szállodákba is.",
    quote: (storyCfg.quote as string) || "Bizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak.",
    quoteAuthor: (storyCfg.quoteAuthor as string) || "Bernlef",
    image: (storyCfg.image as string) || "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
  };

  const topImage = (topImageCfg.image as string) || "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp";

  const defaultStats = [
    { label: "Alapítva", value: "2015" },
    { label: "Telephely", value: "2000 nm" },
    { label: "Tapasztalat", value: "~20 év" },
    { label: "Garancia", value: "3+10 év" },
  ];
  const statsItems = (statsCfg.items as { label: string; value: string }[] | undefined) ?? defaultStats;

  const cta = {
    title: (ctaCfg.title as string) || "Egyedi bútort szeretne?",
    subtitle: (ctaCfg.subtitle as string) || "Vegye fel velünk a kapcsolatot – 24 órán belül visszahívjuk!",
    phone: (ctaCfg.phone as string) || "+36 30 377 8983",
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "url": "https://enzodesign.hu/rolunk",
    "name": "Rólunk – Enzo Design",
    "description": "Bútorbolt Nagykanizsán – közel 20 éve gyártunk egyedi bútorodat: kanapé, fotel, franciaágy.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Enzo Design",
      "url": "https://enzodesign.hu",
      "foundingDate": "2005",
      "description": "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán. Tömörfa szerkezet, prémium szövetek, 3+10 év garancia.",
      "telephone": "+36303778983",
      "email": "info@enzodesign.hu",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Egry József utca 7.",
        "addressLocality": "Nagykanizsa",
        "postalCode": "8800",
        "addressCountry": "HU",
      },
      "sameAs": [
        "https://www.facebook.com/enzodesignbutor/",
        "https://www.instagram.com/enzodesignbutor/",
        "https://www.tiktok.com/@enzodesign2015",
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <PageHero
        moduleId="hero:rolunk"
        defaults={{ label: "Rólunk", title: "Rólunk", subtitle: "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán." }}
      />

      <section className="relative bg-white pt-12 pb-0">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src={topImage}
              alt="Enzo Design kanapé"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="rolunk:topimage" config={{ image: topImage }} schema={TOP_IMAGE_SCHEMA} label="✏ Felső kép" />
        )}
      </section>

      {/* TÖRTÉNETÜNK */}
      <section className="relative py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {story.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{story.p1}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{story.p2}</p>
            <p className="text-gray-600 leading-relaxed mb-4">{story.p3}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{story.p4}</p>
            <blockquote className="border-l-4 border-[#7d6142] pl-4 italic text-gray-500 mb-6">
              „{story.quote}"
              <footer className="mt-2 text-sm not-italic font-medium text-[#7d6142]">– {story.quoteAuthor}</footer>
            </blockquote>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={story.image} alt="Enzo Design telephely" fill className="object-cover" />
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="rolunk:story" config={story} schema={STORY_SCHEMA} label="✏ Történetünk" />
        )}
      </section>

      <VideoSection moduleId="rolunk:video" isAdmin={isAdmin} />

      {/* STATISZTIKÁK */}
      <section className="relative py-12 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsItems.map((s) => (
              <div key={s.label} className="bg-white p-6 text-center">
                <div className="text-2xl font-bold text-[#7d6142]" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="rolunk:stats" config={{ items: statsItems }} schema={STATS_SCHEMA} label="✏ Statisztikák" />
        )}
      </section>

      {/* CTA */}
      <section className="relative py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {cta.title}
          </h2>
          <p className="text-gray-600 mb-8">{cta.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${cta.phone.replace(/\s/g, "")}`} className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm">
              {cta.phone}
            </a>
            <Link href="/kapcsolat-es-rendeles" className="border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm">
              Rendelés
            </Link>
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="rolunk:cta" config={cta} schema={CTA_SCHEMA} label="✏ CTA szekció" />
        )}
      </section>

      <ReviewsSection isAdmin={isAdmin} showAll />
      <ContactFormSection />
    </>
  );
}
