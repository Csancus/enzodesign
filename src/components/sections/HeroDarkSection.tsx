import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  label: "",
  title: "Hero cím",
  subtitle: "",
};

const SCHEMA: FieldDef[] = [
  { key: "label", label: "Felirat (arany, kis betű)", type: "text" },
  { key: "title", label: "Főcím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
];

export default async function HeroDarkSection({
  moduleId,
  isAdmin,
}: {
  moduleId: string;
  isAdmin: boolean;
}) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative py-12 sm:py-24 text-center bg-[#1c1c1c] overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto px-4">
        {cfg.label && (
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">
            {cfg.label}
          </p>
        )}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h1>
        {cfg.subtitle && (
          <p className="text-gray-300 text-lg leading-relaxed">{cfg.subtitle}</p>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
