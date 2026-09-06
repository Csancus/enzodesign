import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";
import { imageAlt } from "@/lib/imageAlt";

const DEFAULT = {
  image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
  imagePosition: "left",
  title: "Cím",
  body: "Szöveg tartalma...",
  linkText: "",
  linkHref: "",
};

const SCHEMA: FieldDef[] = [
  { key: "image", label: "Kép", type: "image" },
  { key: "imagePosition", label: "Kép pozíció (left / right)", type: "text" },
  { key: "title", label: "Cím", type: "text" },
  { key: "body", label: "Szöveg", type: "textarea" },
  { key: "linkText", label: "Gomb felirat", type: "text" },
  { key: "linkHref", label: "Gomb link", type: "text" },
];

export default async function ImageTextSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const imgLeft = cfg.imagePosition !== "right";

  return (
    <section className="relative py-14 bg-white">
      <div className={`max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 ${imgLeft ? "" : "md:flex-row-reverse"}`}>
        <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden">
          <Image src={cfg.image} alt={imageAlt(cfg.title)} fill className="object-cover" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4">{cfg.title}</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 whitespace-pre-line">{cfg.body}</p>
          {cfg.linkText && cfg.linkHref && (
            <Link href={cfg.linkHref} className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white text-sm font-semibold px-6 py-2 transition-colors">
              {cfg.linkText}
            </Link>
          )}
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
