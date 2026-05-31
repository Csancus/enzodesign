import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Cím",
  body: "Szöveg tartalma...",
  align: "center",
  bgColor: "#ffffff",
  textColor: "#1c1c1c",
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "body", label: "Szöveg", type: "textarea" },
  { key: "align", label: "Igazítás (left / center / right)", type: "text" },
  { key: "bgColor", label: "Háttérszín (pl. #ffffff)", type: "text" },
  { key: "textColor", label: "Szövegszín (pl. #1c1c1c)", type: "text" },
];

export default async function TextBlockSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };

  return (
    <section
      className="relative py-14 px-4"
      style={{ backgroundColor: cfg.bgColor, color: cfg.textColor, textAlign: cfg.align as "left" | "center" | "right" }}
    >
      <div className="max-w-3xl mx-auto">
        {cfg.title && <h2 className="text-2xl font-bold mb-4">{cfg.title}</h2>}
        {cfg.body && <p className="text-sm leading-relaxed whitespace-pre-line">{cfg.body}</p>}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={cfg} schema={SCHEMA} />}
    </section>
  );
}
