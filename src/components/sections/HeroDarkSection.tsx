import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  label: "",
  title: "Oldal cím",
  subtitle: "",
  buttonText: "",
  buttonHref: "",
};

const SCHEMA: FieldDef[] = [
  { key: "label", label: "Kis felirat (arany, felül)", type: "text" },
  { key: "title", label: "Cím (H1)", type: "text" },
  { key: "subtitle", label: "Alcím / leírás", type: "textarea" },
  { key: "buttonText", label: "Gomb felirat (opcionális)", type: "text" },
  { key: "buttonHref", label: "Gomb link", type: "text" },
];

export default async function HeroDarkSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative bg-[#1c1c1c] py-24 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
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
          <p className="text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-line">{cfg.subtitle}</p>
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
