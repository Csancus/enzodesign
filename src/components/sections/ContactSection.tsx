import ContactForm from "@/components/ContactForm";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  label: "Kapcsolatfelvétel",
  title: "Rendelés és kapcsolat",
  subtitle: "Töltse ki az űrlapot és 24 órán belül visszahívjuk!",
};

const SCHEMA: FieldDef[] = [
  { key: "label", label: "Kis felirat (arany, felül)", type: "text" },
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím / leírás", type: "text" },
];

export default async function ContactSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section className="relative py-20 bg-[#f5f0e8]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          {cfg.label && (
            <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">{cfg.label}</p>
          )}
          {cfg.title && (
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {cfg.title}
            </h2>
          )}
          {cfg.subtitle && (
            <p className="text-gray-500 text-sm">{cfg.subtitle}</p>
          )}
        </div>
        <div className="bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
