import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT_IMAGES = [
  { src: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp", alt: "Chesterfield kanapé" },
  { src: "/images/e7ad8b_a6ef192520f14d18bb7296848c319c17.webp", alt: "Modern chesterfield kanapé" },
  { src: "/images/e7ad8b_aca61fd0c27746da9f91a44377825085.webp", alt: "U alakú kanapé" },
  { src: "/images/e7ad8b_a6f2120917464fd084a819fbd6828556.webp", alt: "Modern kanapé" },
  { src: "/images/9a0b1d_e2873d90b1d04241a6382d7da598e821.webp", alt: "Egyedi bútor" },
  { src: "/images/e7ad8b_1a5a2fd2adb04b7cbf6faa50280714d4.webp", alt: "Egyedi bőr fotel" },
  { src: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", alt: "Modern kanapé" },
  { src: "/images/e7ad8b_bc066bd9f28f4fbab4b31b619d02e1ff.webp", alt: "Kék modern chesterfield kanapé" },
  { src: "/images/e7ad8b_68c0304ad1514869b9827831425d131b.webp", alt: "Chesterfield falvédő" },
  { src: "/images/e7ad8b_ebf6019015ea4512933aacab43daaf4a.webp", alt: "Chesterfield zsámoly" },
  { src: "/images/9a0b1d_b9e3df81bc2441c9964ba64f28230495f003.webp", alt: "Egyedi bútor" },
];

const DEFAULT = {
  title: "Megrendelésre készített bútorok",
  desc: "Egyedi megrendelésre is vállalunk bármilyen bútorkészítést",
  buttonText: "Tovább",
  buttonHref: "/butoraink/egyedi-butor",
  images: DEFAULT_IMAGES,
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "desc", label: "Leírás", type: "textarea" },
  { key: "buttonText", label: "Gomb felirat", type: "text" },
  { key: "buttonHref", label: "Gomb link", type: "text" },
  { key: "images", label: "Galéria képek", type: "array", itemFields: [
    { key: "src", label: "Kép", type: "image" },
    { key: "alt", label: "Alt szöveg", type: "text" },
  ]},
];

export default async function EgyediSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const images = cfg.images?.length ? cfg.images : DEFAULT_IMAGES;

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h2>
        <p className="text-sm text-gray-500 mb-8">{cfg.desc}</p>

        {/* Masonry mosaic */}
        <div
          style={{ columns: "3 220px", columnGap: "6px" }}
          className="mb-8"
        >
          {images.map((img, i) => (
            <div key={i} style={{ breakInside: "avoid", marginBottom: "6px" }}>
              <Image
                src={img.src}
                alt={img.alt || `Egyedi bútor ${i + 1}`}
                width={0}
                height={0}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <Link
          href={cfg.buttonHref}
          className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-xs"
        >
          {cfg.buttonText}
        </Link>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, images }} schema={SCHEMA} />}
    </section>
  );
}
