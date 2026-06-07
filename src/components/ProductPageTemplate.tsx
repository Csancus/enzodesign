import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "./ContactFormSection";
import PriceTable, { type FlexPriceRow } from "./PriceTable";
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

function getStartingPrice(rows: FlexPriceRow[]): number | null {
  const prices = rows
    .map((r) => parseInt(r.alap, 10))
    .filter((n) => !isNaN(n));
  return prices.length ? Math.min(...prices) : null;
}

function pricingToRows(pricing: Pricing): FlexPriceRow[] {
  const rows: FlexPriceRow[] = [];
  if (pricing.fotel)
    rows.push({ label: "Fotel", alap: String(pricing.fotel.alap), bor: pricing.fotel.bor ? String(pricing.fotel.bor) : "" });
  if (pricing.ketSzemelyes)
    rows.push({ label: "2 személyes kanapé", alap: String(pricing.ketSzemelyes.alap), bor: pricing.ketSzemelyes.bor ? String(pricing.ketSzemelyes.bor) : "" });
  if (pricing.haromSzemelyes)
    rows.push({ label: "3 személyes kanapé", alap: String(pricing.haromSzemelyes.alap), bor: pricing.haromSzemelyes.bor ? String(pricing.haromSzemelyes.bor) : "" });
  if (pricing.sarok)
    rows.push({ label: "Sarokkanapé", alap: String(pricing.sarok.alap), bor: pricing.sarok.bor ? String(pricing.sarok.bor) : "" });
  if (pricing.agyFunkcio)
    rows.push({ label: "+ Ágyfunkció", alap: String(pricing.agyFunkcio), bor: "" });
  return rows;
}

const DEFAULT_FOOTER =
  "Az árak tájékoztató jellegűek és az alapkonfigurációra vonatkoznak. Egyéni méret és anyagválasztás esetén az ár változhat. Gyártási idő: 4–6 hét. Garancia: 3 év (váz: 10 év).";

const PRICING_SCHEMA: FieldDef[] = [
  {
    key: "rows",
    label: "Ársorok (hozzáadhatsz újat is)",
    type: "array",
    itemFields: [
      { key: "label", label: "Megnevezés (pl. Fotel)", type: "text" },
      { key: "alap", label: "Alap szövet ár (Ft)", type: "text" },
      { key: "bor", label: "Prémium bőr ár (Ft, üres ha nincs)", type: "text" },
    ],
  },
  { key: "footer", label: "Lábjegyzet szöveg", type: "textarea" },
];

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

  // Pricing – flexible rows
  const defaultRows = pricingToRows(pricing);
  const storedRows = pricingCfg?.rows as FlexPriceRow[] | undefined;
  const priceRows: FlexPriceRow[] = storedRows && storedRows.length > 0 ? storedRows : defaultRows;
  const priceFooter = (pricingCfg?.footer as string) || DEFAULT_FOOTER;
  const pricingEditConfig: Record<string, unknown> = {
    rows: priceRows,
    footer: priceFooter,
  };

  const startingPrice = getStartingPrice(priceRows);

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
          <PriceTable rows={priceRows} footer={priceFooter} />
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
