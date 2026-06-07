import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  image: "/images/slide1.jpg",
  alt: "Banner",
  title: "",
  subtitle: "",
  linkText: "",
  linkHref: "",
  height: "300",
};

const SCHEMA: FieldDef[] = [
  { key: "image", label: "Kép", type: "image" },
  { key: "alt", label: "Alt szöveg (SEO)", type: "text" },
  { key: "title", label: "Felirat (opcionális)", type: "text" },
  { key: "subtitle", label: "Al-felirat (opcionális)", type: "text" },
  { key: "linkText", label: "Gomb felirat", type: "text" },
  { key: "linkHref", label: "Gomb link", type: "text" },
  { key: "height", label: "Magasság px-ben (pl. 300)", type: "text" },
];

export default async function BannerSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: `clamp(180px, 40vw, ${cfg.height}px)` }}>
      <Image src={cfg.image} alt={cfg.alt} fill className="object-cover object-center" />
      {(cfg.title || cfg.subtitle || cfg.linkText) && (
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
          {cfg.title && <h2 className="text-xl sm:text-3xl font-bold mb-2">{cfg.title}</h2>}
          {cfg.subtitle && <p className="text-sm mb-4 opacity-90">{cfg.subtitle}</p>}
          {cfg.linkText && cfg.linkHref && (
            <Link href={cfg.linkHref} className="bg-[#b8924a] hover:bg-[#a07840] text-white text-sm font-semibold px-6 py-2 transition-colors">
              {cfg.linkText}
            </Link>
          )}
        </div>
      )}
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
