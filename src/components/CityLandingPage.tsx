import Link from "next/link";
import { Suspense } from "react";
import ContactFormSection from "./ContactFormSection";
import SlideshowModule from "./modules/SlideshowModule";
import StepsSection from "./sections/StepsSection";
import RolunkSection from "./sections/RolunkSection";
import EgyediSection from "./sections/EgyediSection";
import ReviewsSection from "./sections/ReviewsSection";
import FaqSection from "./sections/FaqSection";
import EditBtn from "@/components/admin/EditBtn";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const STATS_SCHEMA: FieldDef[] = [
  {
    key: "items",
    label: "Statisztika elemek",
    type: "array",
    itemFields: [
      { key: "value", label: "Érték (pl. 100+)", type: "text" },
      { key: "label", label: "Felirat", type: "text" },
    ],
  },
];

const WHY_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "intro", label: "Bevezető (bekezdéseket üres sor választ el)", type: "textarea" },
  { key: "bullets", label: "Felsorolás (soronként egy)", type: "textarea" },
];

const DELIVERY_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "body", label: "Szöveg", type: "textarea" },
];

export type CityLandingPageProps = {
  city: string;
  locative: string;
  ablative: string;
  dative: string;
  distanceKm: number;
  driveMin: number;
  slug: string;
  description: string;
  neighborCities: { name: string; locative: string; href: string }[];
};

const PRODUCTS = [
  { label: "Kanapék", href: "/butoraink/kanapek" },
  { label: "Fotelek", href: "/butoraink/fotelek" },
  { label: "Franciaágyak", href: "/butoraink/franciaagyak" },
  { label: "Egyedi bútor", href: "/butoraink/egyedi-butor" },
  { label: "Szék, zsámoly, falvédő", href: "/butoraink/szek-zsamoly-falvedo" },
  { label: "Kárpitszövetek", href: "/butoraink/karpitoszovetek" },
];

export default async function CityLandingPage({
  city,
  locative,
  ablative,
  dative,
  distanceKm,
  driveMin,
  slug,
  description,
  neighborCities,
}: CityLandingPageProps) {
  const isAdmin = await getAdminStatus();

  const [statsCfg, whyCfg, deliveryCfg] = await Promise.all([
    getModuleConfig(`city:${slug}:stats`),
    getModuleConfig(`city:${slug}:why`),
    getModuleConfig(`city:${slug}:delivery`),
  ]);

  // Stats bar — city-specific, editable
  const defaultStats = [
    // Nagykanizsán (0 km) a távolság/menetidő értelmetlen – ilyenkor kihagyjuk
    ...(distanceKm > 0
      ? [
          { value: `${distanceKm} km`, label: `Nagykanizsától` },
          { value: `~${driveMin} perc`, label: "autóval" },
        ]
      : []),
    { value: "100+", label: "szövetféle" },
    { value: "3+10 év", label: "garancia" },
    { value: "Online", label: "rendelési lehetőség" },
  ];
  const storedStats = statsCfg?.items as { value: string; label: string }[] | undefined;
  const statItems = storedStats && storedStats.length > 0 ? storedStats : defaultStats;

  // Why choose us — city-specific, editable
  const defaultWhy = {
    title: `Bútorbolt ${city} – Miért érdemes az Enzo Designhoz fordulni?`,
    intro:
      (distanceKm > 0
        ? `Az Enzo Design Nagykanizsán, ${distanceKm} km-re ${ablative} közel 20 éve gyárt egyedi kárpitozott bútorokat.`
        : `Az Enzo Design Nagykanizsán közel 20 éve gyárt egyedi kárpitozott bútorokat.`) +
      ` 2000 nm-es bemutatótermünkben személyesen megtekintheted és kipróbálhatod a modelleket – majd pontosan olyan méretben, szövetben és kivitelben rendelheted meg, ahogy neked tetszik.` +
      `\n\n` +
      `A különbség a bolthoz képest: nem készletes darabokat árulunk, hanem minden bútort rendelésre gyártunk tömörfa szerkezettel, prémium szövettel – és 3 év kárpitgaranciával, 10 év vázgaranciával adjuk ki a kezünkből.`,
    bullets: [
      "Kanapé, fotel, franciaágy és szék egyedi méretben",
      "100+ szövet és bőr közül választhatsz",
      `Házhozszállítás az egész országba, beleértve ${city} körzetét`,
      "Árajánlat 2 munkanapon belül",
      "Gyártási idő: 4–6 hét",
    ].join("\n"),
  };
  const why = {
    title: (whyCfg?.title as string) || defaultWhy.title,
    intro: (whyCfg?.intro as string) || defaultWhy.intro,
    bullets: (whyCfg?.bullets as string) || defaultWhy.bullets,
  };
  const whyParagraphs = why.intro.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean);
  const whyBullets = why.bullets.split("\n").map((s) => s.trim()).filter(Boolean);

  // Delivery — city-specific, editable
  const defaultDelivery = {
    title: `Kiszállítás ${city} és az egész országba`,
    body: `Bútorait az első zárt ajtóig szállítjuk – ${locative} és a környező városokba, egész Magyarországra, valamint külföldre is: Ausztriába, Szlovéniába, Horvátországba és Németországba egyaránt vállalunk kiszállítást.`,
  };
  const delivery = {
    title: (deliveryCfg?.title as string) || defaultDelivery.title,
    body: (deliveryCfg?.body as string) || defaultDelivery.body,
  };

  return (
    <>
      {/* Slider — same as homepage, with city-specific H1 in the white card */}
      <Suspense fallback={<div style={{ height: "clamp(320px,48vw,560px)" }} className="bg-gray-100" />}>
        <SlideshowModule moduleId="home:slideshow" heading={`Bútorbolt ${city} – Kárpitozott bútor`} />
      </Suspense>

      {/* Stats bar */}
      <section className="relative bg-[#b8924a] py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
          {statItems.map(({ value, label }, i) => (
            <div key={`${label}-${i}`}>
              <p className="text-white font-bold text-xl">{value}</p>
              <p className="text-white/80 text-xs uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
        {isAdmin && (
          <EditBtn moduleId={`city:${slug}:stats`} config={{ items: statItems }} schema={STATS_SCHEMA} label="✏ Statisztika" positionClass="absolute top-2 right-2" />
        )}
      </section>

      {/* Why choose us — city-specific */}
      <section className="relative py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {why.title}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {whyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="space-y-2 mt-4">
              {whyBullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId={`city:${slug}:why`} config={why} schema={WHY_SCHEMA} label="✏ Miért minket" />
        )}
      </section>

      {/* Products */}
      <section className="py-12 bg-[#f5f0e8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Termékkategóriáink
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRODUCTS.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a] border border-gray-100"
              >
                {p.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Steps — Fától a kanapéig */}
      <StepsSection moduleId="home:steps" isAdmin={isAdmin} />

      {/* Rólunk */}
      <RolunkSection moduleId="home:rolunk" isAdmin={isAdmin} />

      {/* Megrendelésre készített bútorok */}
      <EgyediSection moduleId="home:egyedi" isAdmin={isAdmin} />

      {/* Értékelések */}
      <ReviewsSection isAdmin={isAdmin} />

      {/* FAQ — accordion */}
      <FaqSection moduleId="global:faq" isAdmin={isAdmin} />

      {/* Contact form */}
      <ContactFormSection />

      {/* Delivery coverage */}
      <section className="relative py-12 bg-[#f5f0e8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-bold text-[#1c1c1c] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {delivery.title}
          </h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed whitespace-pre-line">
            {delivery.body}
          </p>
          {isAdmin && (
            <EditBtn moduleId={`city:${slug}:delivery`} config={delivery} schema={DELIVERY_SCHEMA} label="✏ Kiszállítás" />
          )}
          {neighborCities.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {neighborCities.map((nc) => (
                <Link
                  key={nc.href}
                  href={nc.href}
                  className="text-sm border border-gray-200 px-4 py-2 text-[#7d6142] hover:border-[#b8924a] hover:text-[#b8924a] transition-colors bg-white"
                >
                  Bútor {nc.locative} →
                </Link>
              ))}
              <Link
                href="/blog/butorbolt-nagykanizsán"
                className="text-sm border border-gray-200 px-4 py-2 text-[#7d6142] hover:border-[#b8924a] hover:text-[#b8924a] transition-colors bg-white"
              >
                Bútorbolt Nagykanizsán →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
