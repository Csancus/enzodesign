import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "",
  images: [] as { src: string; alt: string }[],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím (opcionális)", type: "text" },
  {
    key: "images",
    label: "Képek (3-asával nő a sor)",
    type: "array",
    itemFields: [
      { key: "src", label: "Kép", type: "image" },
      { key: "alt", label: "Alt szöveg", type: "text" },
    ],
  },
];

export default async function ImageCollageSection({
  moduleId,
  isAdmin,
}: {
  moduleId: string;
  isAdmin: boolean;
}) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const images = cfg.images?.length ? cfg.images : [];

  return (
    <section className="relative py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {cfg.title && (
          <h2
            className="text-2xl font-bold text-[#1c1c1c] mb-6 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cfg.title}
          </h2>
        )}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {images.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt || `Kép ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-sm py-8">
            Adj hozzá képeket a szerkesztőben.
          </p>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, images }} schema={SCHEMA} />}
    </section>
  );
}
