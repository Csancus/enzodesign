import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT_IMAGES = [
  "/images/d56f41_1856f7e2d27f49c0970c4b84722b089d.webp", "/images/d56f41_25474a021ee44234972eec82773e58de.webp",
  "/images/d56f41_2d00c16047994b71b258082850454298.webp", "/images/d56f41_33f0883f221f432e82f585c99d9462af.webp",
  "/images/d56f41_4ac620604ed74e9abf233f78ead4d1fd.webp", "/images/d56f41_6112327234134a6b97efea35c3078ddc.webp",
  "/images/d56f41_76121739e60c481ea7e2318fab374f6f.webp", "/images/d56f41_8e5df897a0fb4ab9a8fa551ab9cd1aca.webp",
  "/images/d56f41_a25e75c7652549a3af801f54936bd8d3.webp", "/images/d56f41_dd930fc9676a45d2bebb9bf32d374552.webp",
  "/images/d56f41_de20568c06f34c3698094c6e96b0f85a.webp", "/images/d56f41_e3451012000b429eaf87d375a4c9060f.webp",
];

const DEFAULT = {
  title: "Megrendelésre készített bútorok",
  desc: "Egyedi megrendelésre is vállalunk bármilyen bútorkészítést",
  buttonText: "Tovább",
  buttonHref: "/butoraink/egyedi-butor",
  images: DEFAULT_IMAGES.map((src) => ({ src, alt: "Egyedi bútor" })),
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
  const images = cfg.images?.length ? cfg.images : DEFAULT.images;
  const cols = Math.min(images.length, 4);

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-[#1c1c1c] mb-2">{cfg.title}</h2>
        <p className="text-xs text-gray-500 mb-8">{cfg.desc}</p>
        <div className="grid gap-1 mb-8" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {images.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden">
              <Image src={img.src} alt={img.alt || `Egyedi bútor ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <Link href={cfg.buttonHref} className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-xs">
          {cfg.buttonText}
        </Link>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, images }} schema={SCHEMA} />}
    </section>
  );
}
