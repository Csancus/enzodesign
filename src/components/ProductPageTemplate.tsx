import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "./ContactFormSection";
import PriceTable from "./PriceTable";

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
  return (
    <>
      {/* BREADCRUMB */}
      <nav className="bg-[#f5f0e8] px-4 py-3 text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-gray-500">
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

      {/* HERO */}
      <section className="bg-[#1c1c1c] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">{tagline}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {name}
            </h1>
            <p className="text-gray-300 leading-relaxed mb-8">{description}</p>
            <div className="flex flex-wrap gap-3">
              {features.map((f) => (
                <span key={f} className="bg-[#2d2d2d] text-gray-300 text-xs px-3 py-1.5 border border-[#444]">
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={image} alt={name} fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* ÁRAK */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Áraink
          </h2>
          <PriceTable pricing={pricing} />

          <div className="mt-8 bg-[#f5f0e8] p-6">
            <h3 className="font-semibold text-[#1c1c1c] mb-3">Alapcsomag tartalmaz:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Tömörfa váz",
                "Prémium szivacs",
                "Prémium rugórendszer",
                "50.000 martindale szövet",
                "3 év termékgarancia",
                "10 év vázgarancia",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      {gallery.length > 0 && (
        <section className="py-12 bg-[#f5f0e8]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Galéria
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((img, i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image src={img} alt={`${name} - ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-[#1c1c1c] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            Tetszik ez a bútor?
          </h2>
          <p className="text-gray-400 mb-6">Vegye fel velünk a kapcsolatot – segítünk megtalálni az ideális konfigurációt!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+36303778983" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              +36 30 377 8983
            </a>
            <Link href="#rendeles" className="border-2 border-white hover:bg-white hover:text-[#1c1c1c] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Rendelés
            </Link>
          </div>
        </div>
      </section>

      {/* FORM */}
      <ContactFormSection />
    </>
  );
}
