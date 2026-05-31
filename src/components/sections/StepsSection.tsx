import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Fától a kanapéig",
  steps: [
    { title: "Nyers fa – 100% tömörfa alapanyagokkal", image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" },
    { title: "Minőségi kellékek anyagokkal", image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp" },
    { title: "Kárpitozás – gondos kézimunkával", image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp" },
    { title: "Ülőgarnitúra – kész a hazahozatalra", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp" },
  ],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "steps", label: "Lépések", type: "array", itemFields: [
    { key: "title", label: "Felirat", type: "text" },
    { key: "image", label: "Kép", type: "image" },
  ]},
];

export default async function StepsSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const steps = cfg.steps?.length ? cfg.steps : DEFAULT.steps;

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-xl font-bold text-[#1c1c1c] text-center mb-8">{cfg.title}</h2>
        <div className={`grid gap-4`} style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="relative aspect-square overflow-hidden mb-2">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <p className="text-xs text-gray-600 leading-tight">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, steps }} schema={SCHEMA} />}
    </section>
  );
}
