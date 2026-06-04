import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Szeretne egyedi bútort?",
  subtitle: "Vegye fel velünk a kapcsolatot – 24 órán belül visszahívjuk!",
  phone: "+36 30 377 8983",
  buttonText: "Rendelés",
  buttonHref: "/kapcsolat-es-rendeles",
  bgColor: "#ffffff",
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
  { key: "phone", label: "Telefonszám (opcionális)", type: "text" },
  { key: "buttonText", label: "Gomb felirat", type: "text" },
  { key: "buttonHref", label: "Gomb link", type: "text" },
  { key: "bgColor", label: "Háttérszín (pl. #ffffff)", type: "text" },
];

type InitialConfig = Partial<typeof DEFAULT>;

export default async function CtaSection({
  moduleId,
  isAdmin,
  initialConfig = {},
}: {
  moduleId: string;
  isAdmin: boolean;
  initialConfig?: InitialConfig;
}) {
  const stored = await getModuleConfig(moduleId);
  const hasBlob = Object.keys(stored as object).length > 0;
  const cfg = hasBlob
    ? { ...DEFAULT, ...initialConfig, ...(stored as typeof DEFAULT) }
    : { ...DEFAULT, ...initialConfig };

  return (
    <section className="relative py-16 text-center" style={{ backgroundColor: cfg.bgColor }}>
      <div className="max-w-2xl mx-auto px-4">
        {cfg.title && (
          <h2
            className="text-2xl font-bold text-[#1c1c1c] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {cfg.title}
          </h2>
        )}
        {cfg.subtitle && (
          <p className="text-gray-600 mb-8">{cfg.subtitle}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {cfg.phone && (
            <a
              href={`tel:${cfg.phone.replace(/\s/g, "")}`}
              className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm"
            >
              {cfg.phone}
            </a>
          )}
          {cfg.buttonText && cfg.buttonHref && (
            <Link
              href={cfg.buttonHref}
              className="border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-4 transition-colors text-sm"
            >
              {cfg.buttonText}
            </Link>
          )}
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
