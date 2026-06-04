import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  image: "/images/slide1.jpg",
  alt: "Hero háttérkép",
  label: "",
  title: "Oldal cím",
  subtitle: "",
  buttonText: "",
  buttonHref: "",
  height: "480",
  overlay: "50",
};

const SCHEMA: FieldDef[] = [
  { key: "image", label: "Háttérkép", type: "image" },
  { key: "alt", label: "Alt szöveg (SEO)", type: "text" },
  { key: "label", label: "Kis felirat (arany, felül – opcionális)", type: "text" },
  { key: "title", label: "Cím (H1)", type: "text" },
  { key: "subtitle", label: "Alcím (opcionális)", type: "textarea" },
  { key: "buttonText", label: "Gomb felirat (opcionális)", type: "text" },
  { key: "buttonHref", label: "Gomb link", type: "text" },
  { key: "height", label: "Magasság px-ben (pl. 480)", type: "text" },
  { key: "overlay", label: "Sötétítés %-ban (0–90, pl. 50)", type: "text" },
];

export default async function HeroImageSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const overlayOpacity = Math.min(90, Math.max(0, parseInt(cfg.overlay) || 50)) / 100;

  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center text-center"
      style={{ minHeight: `${parseInt(cfg.height) || 480}px` }}
    >
      <Image src={cfg.image} alt={cfg.alt} fill className="object-cover object-center" priority />
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }} />
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16">
        {cfg.label && (
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">{cfg.label}</p>
        )}
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h1>
        {cfg.subtitle && (
          <p className="text-gray-200 text-lg leading-relaxed mb-6 whitespace-pre-line">{cfg.subtitle}</p>
        )}
        {cfg.buttonText && cfg.buttonHref && (
          <Link
            href={cfg.buttonHref}
            className="inline-block bg-[#b8924a] hover:bg-[#a07840] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
          >
            {cfg.buttonText}
          </Link>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
