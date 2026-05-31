import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Galéria",
  columns: "3",
  images: [] as { src: string; alt: string }[],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "columns", label: "Oszlopok száma (2 / 3 / 4)", type: "text" },
  { key: "images", label: "Képek", type: "array", itemFields: [
    { key: "src", label: "Kép", type: "image" },
    { key: "alt", label: "Alt szöveg", type: "text" },
  ]},
];

export default async function GallerySection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const cols = Math.max(2, Math.min(4, parseInt(cfg.columns) || 3));

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {cfg.title && <h2 className="text-xl font-bold text-[#1c1c1c] text-center mb-8">{cfg.title}</h2>}
        {cfg.images?.length > 0 ? (
          <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {cfg.images.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image src={img.src} alt={img.alt || `Kép ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-sm">Adj hozzá képeket a szerkesztőben.</p>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
