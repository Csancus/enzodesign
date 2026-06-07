import ContactForm from "./ContactForm";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import { getAdminStatus } from "@/lib/auth";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  label: "Kapcsolatfelvétel",
  title: "Rendelés és kapcsolat",
  subtitle: "Töltse ki az űrlapot és 24 órán belül visszahívjuk!",
};

const SCHEMA: FieldDef[] = [
  { key: "label", label: "Felső felirat (kis arany szöveg)", type: "text" },
  { key: "title", label: "Cím (H2)", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
];

export default async function ContactFormSection() {
  const [stored, isAdmin] = await Promise.all([
    getModuleConfig("global:contact-form-section"),
    getAdminStatus(),
  ]);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section id="rendeles" className="relative py-20 bg-[#f5f0e8]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">{cfg.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1c] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
            {cfg.title}
          </h2>
          <p className="text-gray-500 text-sm">{cfg.subtitle}</p>
        </div>
        <div className="bg-white p-4 sm:p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
      {isAdmin && (
        <EditBtn
          moduleId="global:contact-form-section"
          config={cfg as unknown as Record<string, unknown>}
          schema={SCHEMA}
          label="✏ Szekció szerkesztése"
        />
      )}
    </section>
  );
}
