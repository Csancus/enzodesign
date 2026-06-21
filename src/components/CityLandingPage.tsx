import Link from "next/link";
import { Suspense } from "react";
import ContactFormSection from "./ContactFormSection";
import SlideshowModule from "./modules/SlideshowModule";
import StepsSection from "./sections/StepsSection";
import RolunkSection from "./sections/RolunkSection";
import EgyediSection from "./sections/EgyediSection";
import ReviewsSection from "./sections/ReviewsSection";
import FaqSection from "./sections/FaqSection";

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
  return (
    <>
      {/* Slider — same as homepage, with city-specific H1 in the white card */}
      <Suspense fallback={<div style={{ height: "clamp(320px,48vw,560px)" }} className="bg-gray-100" />}>
        <SlideshowModule moduleId="home:slideshow" heading={`Bútorbolt ${city} – Kárpitozott bútor`} />
      </Suspense>

      {/* Stats bar */}
      <section className="bg-[#b8924a] py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
          {[
            { value: `${distanceKm} km`, label: `Nagykanizsától` },
            { value: `~${driveMin} perc`, label: "autóval" },
            { value: "100+", label: "szövetféle" },
            { value: "3+10 év", label: "garancia" },
            { value: "Online", label: "rendelési lehetőség" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-white font-bold text-xl">{value}</p>
              <p className="text-white/80 text-xs uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us — city-specific */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Bútorbolt {city} – Miért érdemes az Enzo Designhoz fordulni?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Az Enzo Design Nagykanizsán, {distanceKm} km-re {ablative} közel 20 éve gyárt egyedi
              kárpitozott bútorokat. 2000 nm-es bemutatótermünkben személyesen megtekintheted és
              kipróbálhatod a modelleket – majd pontosan olyan méretben, szövetben és kivitelben
              rendelheted meg, ahogy neked illik.
            </p>
            <p>
              A különbség a bolthoz képest: nem készletes darabokat árulunk, hanem minden bútort
              rendelésre gyártunk tömörfa szerkezettel, prémium szövettel – és 3 év kárpitgaranciával,
              10 év vázgaranciával adjuk ki a kezünkből.
            </p>
            <ul className="space-y-2 mt-4">
              {[
                "Kanapé, fotel, franciaágy és szék egyedi méretben",
                "100+ szövet és bőr közül választhatsz",
                `Házhozszállítás az egész országba, beleértve ${city} körzetét`,
                "Árajánlat 2 munkanapon belül",
                "Gyártási idő: 4–6 hét",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
      <StepsSection moduleId="home:steps" isAdmin={false} />

      {/* Rólunk */}
      <RolunkSection moduleId="home:rolunk" isAdmin={false} />

      {/* Megrendelésre készített bútorok */}
      <EgyediSection moduleId="home:egyedi" isAdmin={false} />

      {/* Értékelések */}
      <ReviewsSection isAdmin={false} />

      {/* FAQ — accordion */}
      <FaqSection moduleId="global:faq" isAdmin={false} />

      {/* Contact form */}
      <ContactFormSection />

      {/* Delivery coverage */}
      <section className="py-12 bg-[#f5f0e8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-bold text-[#1c1c1c] mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kiszállítás {city} és az egész országba
          </h2>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Bútorait az első zárt ajtóig szállítjuk – {locative} és a környező városokba, egész
            Magyarországra, valamint külföldre is: <strong>Ausztriába, Szlovéniába,
            Horvátországba és Németországba</strong> egyaránt vállalunk kiszállítást.
          </p>
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
