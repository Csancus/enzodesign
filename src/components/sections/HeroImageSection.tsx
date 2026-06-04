import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  image: "/images/slide1.jpg",
  label: "",
  title: "Hero cím",
  subtitle: "",
  buttonText: "",
  buttonHref: "",
  textColor: "white",
  overlayOpacity: "40",
};

const SCHEMA: FieldDef[] = [
  { key: "image", label: "Háttérkép", type: "image" },
  { key: "label", label: "Felirat (kis betű)", type: "text" },
  { key: "title", label: "Főcím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
  { key: "buttonText", label: "Gomb felirat (opcionális)", type: "text" },
  { key: "buttonHref", label: "Gomb link", type: "text" },
  { key: "textColor", label: "Szöveg szín: white vagy black", type: "text" },
  { key: "overlayOpacity", label: "Sötétítés % (0–90)", type: "text" },
];

export default async function HeroImageSection({
  moduleId,
  isAdmin,
}: {
  moduleId: string;
  isAdmin: boolean;
}) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const opacity = Math.min(90, Math.max(0, parseInt(cfg.overlayOpacity) || 40)) / 100;
  const isLight = cfg.textColor === "black";

  return (
    <section className="relative py-32 text-center overflow-hidden" style={{ minHeight: 420 }}>
      <Image src={cfg.image} alt={cfg.title} fill className="object-cover object-center" priority />
      <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${opacity})` }} />
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {cfg.label && (
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">
            {cfg.label}
          </p>
        )}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-4 ${isLight ? "text-[#1c1c1c]" : "text-white"}`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h1>
        {cfg.subtitle && (
          <p className={`text-lg leading-relaxed mb-8 ${isLight ? "text-gray-700" : "text-gray-200"}`}>
            {cfg.subtitle}
          </p>
        )}
        {cfg.buttonText && cfg.buttonHref && (
          <Link
            href={cfg.buttonHref}
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
          >
            {cfg.buttonText}
          </Link>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
