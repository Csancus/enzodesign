import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "./ContactFormSection";
import PriceTable from "./PriceTable";
import { formatPrice } from "@/data/products";

type Pricing = {
  fotel?: { alap: number; bor?: number };
  ketSzemelyes?: { alap: number; bor?: number };
  haromSzemelyes?: { alap: number; bor?: number };
  sarok?: { alap: number; bor?: number };
  agyFunkcio?: number;
};

type Props = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  pricing: Pricing;
  features: string[];
  gallery?: string[];
  breadcrumb: { label: string; href: string }[];
};

function getStartingPrice(pricing: Pricing): number | null {
  const prices = [
    pricing.fotel?.alap,
    pricing.ketSzemelyes?.alap,
    pricing.haromSzemelyes?.alap,
    pricing.sarok?.alap,
  ].filter(Boolean) as number[];
  return prices.length ? Math.min(...prices) : null;
}

export default function ProductPageTemplate({
  name,
  tagline,
  description,
  image,
  pricing,
  features,
  gallery = [],
  breadcrumb,
}: Props) {
  const startingPrice = getStartingPrice(pricing);

  return (
    <>
      {/* BREADCRUMB */}
      <nav className="bg-[#f5f0e8] px-4 py-3 text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-500 flex-wrap">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {i === breadcrumb.length - 1 ? (
                <span className="text-[#7d6142] font-medium">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-[#7d6142]">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </div>
      </nav>

      {/* FEJLÉC – fehér háttér, bal szöveg */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">{tagline}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {name}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">{description}</p>
          {startingPrice && (
            <p className="text-2xl font-bold text-[#7d6142] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {formatPrice(startingPrice)}-tól
            </p>
          )}
          <a
            href="#rendeles"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
          >
            Megrendelem, vagy ajánlatot kérek
          </a>
        </div>
      </section>

      {/* KÉPEK – portrait arány, 2 kép egymás mellett ha van galéria, különben 1 */}
      <section className="bg-[#f5f0e8] py-10">
        <div className="max-w-4xl mx-auto px-4">
          {gallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={image} alt={name} fill className="object-cover" priority />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={gallery[0]} alt={`${name} – 2`} fill className="object-cover" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={image} alt={name} fill className="object-cover" priority />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                <Image src={image} alt={name} fill className="object-cover opacity-70" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* RÉSZLETEK */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Részletek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Árak
          </h2>
          <PriceTable pricing={pricing} />
        </div>
      </section>

      {/* ANYAGOK ÉS TISZTÍTÁS */}
      <section className="py-10 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-[#1c1c1c] mb-2 text-sm uppercase tracking-wide">Anyagok és tisztítás</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mintatermünkben rengeteg magas minőségű, vízlepergető, állat- és gyermekbarát
              és könnyen tisztítható szövet közül választhatod ki az igazit az új bútorodra.
              Elérhető prémium minőségű valódi olasz bőrben is.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#1c1c1c] mb-2 text-sm uppercase tracking-wide">Garancia</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              3 év gyártói garancia vonatkozik a teljes termékre, továbbá 10 év a szerkezetre.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#1c1c1c] mb-2 text-sm uppercase tracking-wide">Gyártás és szállítás</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Várható gyártási idő: 4–6 hét. Szállítás az első zárt ajtóig.
              A személyre szabhatóság nálunk nem csak üres ígéret!
            </p>
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      {gallery.length > 1 && (
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {gallery.slice(1).map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image src={img} alt={`${name} – ${i + 2}`} fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FORM */}
      <div id="rendeles">
        <ContactFormSection />
      </div>
    </>
  );
}
