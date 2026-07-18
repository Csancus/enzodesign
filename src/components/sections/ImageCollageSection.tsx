import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "",
  images: [
    { src: "/images/9a0b1d_13e53dff0c704be6b672061708d151e6.webp", alt: "Akciós franciaágy" },
    { src: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp", alt: "Chesterfield akció" },
    { src: "/images/9a0b1d_8e6019a82db14e7d8ee1abb2168d6472.webp", alt: "Super Sale bútor akció" },
  ] as { src: string; alt: string }[],
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
  // Filter out stale Wix CDN URLs that no longer resolve
  const validImages = (cfg.images ?? []).filter((img) => !img.src?.includes("wixstatic.com"));
  const images = validImages.length ? validImages : DEFAULT.images;

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
