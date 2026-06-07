import Image from "next/image";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Fától a kanapéig",
  steps: [
    { title: "Nyers fától, helyi megmunkálással", image: "/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp" },
    { title: "Minőségi, ülésálló anyagokkal", image: "/images/e7ad8b_1df77688fc3245228fbb11d74a0e4a1a.webp" },
    { title: "Varrással, rugózással, összeállítással", image: "/images/9a0b1d_1144c9b382414e1aa48f590fe582dd2b.webp" },
    { title: "Kész kanapéig, majd az otthonodig", image: "/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp" },
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
    <section id="fatol-a-kanapeig" className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-1"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h2>
        <div className="w-16 h-0.5 bg-[#b8924a] mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <div key={i} className="">
              <div className="relative aspect-[286/335] overflow-hidden mb-3">
                <Image src={s.image} alt={s.title} fill className="object-cover" />
              </div>
              <p className="text-sm text-[#7d6142] leading-snug">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, steps }} schema={SCHEMA} />}
    </section>
  );
}
