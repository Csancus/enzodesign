import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  imageLeft: "/images/slide1.webp",
  imageLeftAlt: "Kép bal",
  imageRightTop: "/images/slide2.webp",
  imageRightTopAlt: "Kép jobb fent",
  imageRightBottom: "/images/slide3.webp",
  imageRightBottomAlt: "Kép jobb lent",
};

const SCHEMA: FieldDef[] = [
  { key: "imageLeft",          label: "Nagy kép (bal)",          type: "image" },
  { key: "imageLeftAlt",       label: "Nagy kép alt szöveg",     type: "text" },
  { key: "imageRightTop",      label: "Kis kép (jobb fent)",     type: "image" },
  { key: "imageRightTopAlt",   label: "Kis kép alt (jobb fent)", type: "text" },
  { key: "imageRightBottom",   label: "Kis kép (jobb lent)",     type: "image" },
  { key: "imageRightBottomAlt",label: "Kis kép alt (jobb lent)", type: "text" },
];

export default async function EditorialGridSection({
  moduleId,
  isAdmin,
}: {
  moduleId: string;
  isAdmin: boolean;
}) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative bg-white py-2">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-5 gap-2" style={{ height: "clamp(240px, 36vw, 500px)" }}>
          {/* Bal: nagy kép */}
          <div className="col-span-3 relative overflow-hidden">
            <Image
              src={cfg.imageLeft}
              alt={cfg.imageLeftAlt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Jobb: 2 kis kép */}
          <div className="col-span-2 flex flex-col gap-2">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={cfg.imageRightTop}
                alt={cfg.imageRightTopAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={cfg.imageRightBottom}
                alt={cfg.imageRightBottomAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
