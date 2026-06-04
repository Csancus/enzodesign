import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  label: "",
  title: "Oldal cím",
  subtitle: "",
  image: "",
  buttonText: "",
  buttonHref: "",
};

const SCHEMA: FieldDef[] = [
  { key: "label", label: "Kis felirat (arany, felül)", type: "text" },
  { key: "title", label: "Cím (H1)", type: "text" },
  { key: "subtitle", label: "Alcím / leírás", type: "textarea" },
  { key: "image", label: "Háttérkép (halványan, opcionális)", type: "image" },
  { key: "buttonText", label: "Gomb felirat (opcionális)", type: "text" },
  { key: "buttonHref", label: "Gomb link", type: "text" },
];

export default async function HeroLightSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative bg-[#f5f0ea] py-24 text-center overflow-hidden">
      {cfg.image && (
        <Image src={cfg.image} alt={cfg.title} fill className="object-cover opacity-10" priority />
      )}
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {cfg.label && (
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">{cfg.label}</p>
        )}
        <h1
          className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h1>
        {cfg.subtitle && (
          <p className="text-gray-600 text-lg leading-relaxed mb-6 whitespace-pre-line">{cfg.subtitle}</p>
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
