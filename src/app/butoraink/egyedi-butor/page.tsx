import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import FabricsSection from "@/components/sections/FabricsSection";
import EditBtn from "@/components/admin/EditBtn";
import type { FieldDef } from "@/types/cms";

export const metadata: Metadata = {
  title: "Egyedi Bútor – Enzo Design",
  description: "Egyedi kárpitozott bútor gyártótól: küldj egy képet és 2 napon belül árajánlatot kapsz. Tömörfa szerkezet, 100+ szövet, 3 év garancia.",

  alternates: { canonical: "https://enzodesign.hu/butoraink/egyedi-butor" },
  openGraph: {
    title: "Egyedi Bútor – Enzo Design",
    description: "Egyedi kárpitozott bútor gyártótól: küldj egy képet és 2 napon belül árajánlatot kapsz. Tömörfa szerkezet, 100+ szövet, 3 év garancia.",
    url: "https://enzodesign.hu/butoraink/egyedi-butor",
    images: [{ url: "/images/egyedi-w1.webp", width: 1920, height: 800 }],
  },
};

const DEFAULT_GALLERY = [
  "/images/egyedi-w1.webp",
  "/images/egyedi-w2.webp",
  "/images/egyedi-w4.webp",
  "/images/egyedi-w6.webp",
  "/images/egyedi-w7.webp",
  "/images/egyedi-w8.webp",
  "/images/egyedi-w9.webp",
  "/images/egyedi-w10.webp",
];

const HERO_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "textarea" },
];
const FEATURES_SCHEMA: FieldDef[] = [
  { key: "intro", label: "Bevezető szöveg", type: "text" },
  { key: "body", label: "Felsorolás (soronként egy)", type: "textarea" },
];
const GALLERY_SCHEMA: FieldDef[] = [
  { key: "title", label: "Szekció cím", type: "text" },
  { key: "images", label: "Galéria képek", type: "array", itemFields: [{ key: "src", label: "Kép", type: "image" }] },
];

export default async function EgyediButorPage() {
  const isAdmin = await getAdminStatus();
  const [heroCfg, featuresCfg, galleryCfg] = await Promise.all([
    getModuleConfig("egyedi-butor:hero"),
    getModuleConfig("egyedi-butor:features"),
    getModuleConfig("egyedi-butor:gallery"),
  ]);

  const hero = {
    title: (heroCfg?.title as string) || "Egyedi bútor",
    subtitle: (heroCfg?.subtitle as string) || "Küldj egy képet vagy leírást, és mi elkészítjük álmaid bútorát. Tömörfa váz, prémium szövetek, egyedi méret.",
  };
  const featuresIntro = (featuresCfg?.intro as string) || "Mindegyik bútorunkat ajánljuk:";
  const featuresBody = (featuresCfg?.body as string) || "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával";
  const featuresItems = featuresBody.split("\n").map((s) => s.trim()).filter(Boolean);

  const galleryTitle = (galleryCfg?.title as string) || "Egyedi bútor";
  const rawGallery = galleryCfg?.images as { src: string }[] | undefined;
  const gallery = rawGallery ? rawGallery.map((g) => g.src).filter(Boolean) : DEFAULT_GALLERY;

  return (
    <>
      <section className="relative bg-[#f5f0e8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">ENZO DESIGN</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>{hero.title}</h1>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">{hero.subtitle}</p>
        </div>
        {isAdmin && <EditBtn moduleId="egyedi-butor:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />}
      </section>

      <section className="relative py-8 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm font-semibold text-[#b8924a] mb-3">{featuresIntro}</p>
          <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
            {featuresItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {isAdmin && <EditBtn moduleId="egyedi-butor:features" config={{ intro: featuresIntro, body: featuresBody }} schema={FEATURES_SCHEMA} label="✏ Felsorolás" />}
      </section>

      <section className="relative py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{galleryTitle}</h2>
          <Link href="/kapcsolat-es-rendeles" className="text-sm text-[#b8924a] underline block mb-8">Egyedi bútor rendelése →</Link>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={src} alt={`Egyedi bútor ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
        {isAdmin && <EditBtn moduleId="egyedi-butor:gallery" config={{ title: galleryTitle, images: gallery.map((src) => ({ src })) }} schema={GALLERY_SCHEMA} label="✏ Galéria" />}
      </section>

      <FabricsSection isAdmin={isAdmin} />
    </>
  );
}
