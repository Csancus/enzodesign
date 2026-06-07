import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "./ContactFormSection";
import PriceTable from "./PriceTable";
import FabricsSection from "./sections/FabricsSection";
import ProductGallery from "./ProductGallery";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import { formatPrice } from "@/data/products";
import { getAdminStatus } from "@/lib/auth";
import type { FieldDef } from "@/types/cms";

type Pricing = {
  fotel?: { alap: number; bor?: number };
  ketSzemelyes?: { alap: number; bor?: number };
  haromSzemelyes?: { alap: number; bor?: number };
  sarok?: { alap: number; bor?: number };
  agyFunkcio?: number;
};

type Props = {
  pageId: string;
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

function n(v: unknown, fallback: number): number {
  const parsed = parseInt(String(v ?? ""), 10);
  return isNaN(parsed) ? fallback : parsed;
}

export default async function ProductPageTemplate({
  pageId,
  name,
  tagline,
  description,
  image,
  pricing,
  features,
  gallery = [],
  breadcrumb,
}: Props) {
  const isAdmin = await getAdminStatus();

  const [headerCfg, pricingCfg, featuresCfg, infoCfg, imagesCfg] =
    await Promise.all([
      getModuleConfig(`${pageId}:header`),
      getModuleConfig(`${pageId}:pricing`),
      getModuleConfig(`${pageId}:features`),
      getModuleConfig(`${pageId}:info`),
      getModuleConfig(`${pageId}:images`),
    ]);

  // Header
  const hdr = {
    name: (headerCfg?.name as string) || name,
    tagline: (headerCfg?.tagline as string) || tagline,
    description: (headerCfg?.description as string) || description,
  };
  const HEADER_SCHEMA: FieldDef[] = [
    { key: "name", label: "Termék neve", type: "text" },
    { key: "tagline", label: "Tagline (arany kis szöveg)", type: "text" },
    { key: "description", label: "Leírás", type: "textarea" },
  ];

  // Pricing
  const prc: Pricing = {
    fotel: pricing.fotel ? {
      alap: n(pricingCfg?.fotel_alap, pricing.fotel.alap),
      bor: pricing.fotel.bor !== undefined ? n(pricingCfg?.fotel_bor, pricing.fotel.bor) : undefined,
    } : undefined,
    ketSzemelyes: pricing.ketSzemelyes ? {
      alap: n(pricingCfg?.ket_alap, pricing.ketSzemelyes.alap),
      bor: pricing.ketSzemelyes.bor !== undefined ? n(pricingCfg?.ket_bor, pricing.ketSzemelyes.bor) : undefined,
    } : undefined,
    haromSzemelyes: pricing.haromSzemelyes ? {
      alap: n(pricingCfg?.harom_alap, pricing.haromSzemelyes.alap),
      bor: pricing.haromSzemelyes.bor !== undefined ? n(pricingCfg?.harom_bor, pricing.haromSzemelyes.bor) : undefined,
    } : undefined,
    sarok: pricing.sarok ? {
      alap: n(pricingCfg?.sarok_alap, pricing.sarok.alap),
      bor: pricing.sarok.bor !== undefined ? n(pricingCfg?.sarok_bor, pricing.sarok.bor) : undefined,
    } : undefined,
    agyFunkcio: pricing.agyFunkcio !== undefined ? n(pricingCfg?.agy_funkio, pricing.agyFunkcio) : undefined,
  };
  const PRICING_SCHEMA: FieldDef[] = [
    { key: "fotel_alap", label: "Fotel – alap ár (Ft)", type: "text" },
    { key: "fotel_bor", label: "Fotel – bőr ár (Ft)", type: "text" },
    { key: "ket_alap", label: "Kétszemélyes – alap ár (Ft)", type: "text" },
    { key: "ket_bor", label: "Kétszemélyes – bőr ár (Ft)", type: "text" },
    { key: "harom_alap", label: "Háromszemélyes – alap ár (Ft)", type: "text" },
    { key: "harom_bor", label: "Háromszemélyes – bőr ár (Ft)", type: "text" },
    { key: "sarok_alap", label: "Sarokkanapé – alap ár (Ft)", type: "text" },
    { key: "sarok_bor", label: "Sarokkanapé – bőr ár (Ft)", type: "text" },
    { key: "agy_funkio", label: "Ágyfunkció felár (Ft)", type: "text" },
  ];
  const pricingEditConfig: Record<string, unknown> = {
    fotel_alap: pricing.fotel?.alap ?? "",
    fotel_bor: pricing.fotel?.bor ?? "",
    ket_alap: pricing.ketSzemelyes?.alap ?? "",
    ket_bor: pricing.ketSzemelyes?.bor ?? "",
    harom_alap: pricing.haromSzemelyes?.alap ?? "",
    harom_bor: pricing.haromSzemelyes?.bor ?? "",
    sarok_alap: pricing.sarok?.alap ?? "",
    sarok_bor: pricing.sarok?.bor ?? "",
    agy_funkio: pricing.agyFunkcio ?? "",
    ...pricingCfg,
  };

  // Features
  const defaultFeaturesBody = features.join("\n");
  const featuresBody = (featuresCfg?.body as string) || defaultFeaturesBody;
  const featuresArr = featuresBody.split("\n").map((s) => s.trim()).filter(Boolean);
  const FEATURES_SCHEMA: FieldDef[] = [
    { key: "body", label: "Jellemzők (soronként egy)", type: "textarea" },
  ];

  // Info blocks
  const info = {
    anyagok: (infoCfg?.anyagok as string) || "Mintatermünkben rengeteg magas minőségű, vízlepergető, állat- és gyermekbarát és könnyen tisztítható szövet közül választhatod ki az igazit az új bútorodra. Elérhető prémium minőségű valódi olasz bőrben is.",
    garancia: (infoCfg?.garancia as string) || "3 év gyártói garancia vonatkozik a teljes termékre, továbbá 10 év a szerkezetre.",
    gyartas: (infoCfg?.gyartas as string) || "Várható gyártási idő: 4–6 hét. Szállítás az első zárt ajtóig. A személyre szabhatóság nálunk nem csak üres ígéret!",
  };
  const INFO_SCHEMA: FieldDef[] = [
    { key: "anyagok", label: "Anyagok és tisztítás szövege", type: "textarea" },
    { key: "garancia", label: "Garancia szövege", type: "textarea" },
    { key: "gyartas", label: "Gyártás és szállítás szövege", type: "textarea" },
  ];

  // Images
  const mainImage = (imagesCfg?.mainImage as string) || image;
  const rawGallery = imagesCfg?.gallery as { src: string }[] | undefined;
  const resolvedGallery: string[] = rawGallery
    ? rawGallery.map((g) => g.src).filter(Boolean)
    : gallery;
  const IMAGES_SCHEMA: FieldDef[] = [
    { key: "mainImage", label: "Fő kép", type: "image" },
    {
      key: "gallery",
      label: "Galéria képek",
      type: "array",
      itemFields: [{ key: "src", label: "Kép URL", type: "image" }],
    },
  ];
  const imagesEditConfig: Record<string, unknown> = {
    mainImage,
    gallery: resolvedGallery.map((src) => ({ src })),
  };

  const startingPrice = getStartingPrice(prc);

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

      {/* HEADER */}
      <section className="relative bg-white py-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">{hdr.tagline}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {hdr.name}
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">{hdr.description}</p>
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
        {isAdmin && (
          <EditBtn moduleId={`${pageId}:header`} config={{ name: hdr.name, tagline: hdr.tagline, description: hdr.description }} schema={HEADER_SCHEMA} label="✏ Fejléc" />
        )}
      </section>

      {/* KÉPEK */}
      <section className="relative bg-[#f5f0e8] py-10">
        <div className="max-w-4xl mx-auto px-4">
          {resolvedGallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={mainImage} alt={hdr.name} fill className="object-cover" priority />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={resolvedGallery[0]} alt={`${hdr.name} – 2`} fill className="object-cover" />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={mainImage} alt={hdr.name} fill className="object-cover" priority />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                <Image src={mainImage} alt={hdr.name} fill className="object-cover opacity-70" />
              </div>
            </div>
          )}
        </div>
        {isAdmin && (
          <EditBtn moduleId={`${pageId}:images`} config={imagesEditConfig} schema={IMAGES_SCHEMA} label="✏ Képek" />
        )}
      </section>

      {/* RÉSZLETEK + ÁRAK */}
      <section className="relative py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Részletek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {featuresArr.map((f) => (
              <div key={f} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Árak
          </h2>
          <PriceTable pricing={prc} />
        </div>
        {isAdmin && (
          <>
            <EditBtn moduleId={`${pageId}:features`} config={{ body: featuresBody }} schema={FEATURES_SCHEMA} label="✏ Jellemzők" />
            <EditBtn moduleId={`${pageId}:pricing`} config={pricingEditConfig} schema={PRICING_SCHEMA} label="✏ Árak" positionClass="absolute top-10 right-36" />
          </>
        )}
      </section>

      {/* ANYAGOK / GARANCIA / GYÁRTÁS */}
      <section className="relative py-10 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-[#1c1c1c] mb-2 text-sm uppercase tracking-wide">Anyagok és tisztítás</h3>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{info.anyagok}</p>
          </div>
          <div>
            <h3 className="font-bold text-[#1c1c1c] mb-2 text-sm uppercase tracking-wide">Garancia</h3>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{info.garancia}</p>
          </div>
          <div>
            <h3 className="font-bold text-[#1c1c1c] mb-2 text-sm uppercase tracking-wide">Gyártás és szállítás</h3>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{info.gyartas}</p>
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId={`${pageId}:info`} config={info} schema={INFO_SCHEMA} label="✏ Info blokkok" />
        )}
      </section>

      {/* GALÉRIA */}
      {resolvedGallery.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Képgaléria
            </h2>
            <ProductGallery images={resolvedGallery} name={hdr.name} />
          </div>
        </section>
      )}

      <FabricsSection isAdmin={isAdmin} />

      <div id="rendeles">
        <ContactFormSection />
      </div>
    </>
  );
}
