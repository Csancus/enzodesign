import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  bgColor: "#f5f0e8",
  items: [] as { value: string; label: string }[],
};

const SCHEMA: FieldDef[] = [
  { key: "bgColor", label: "Háttérszín (pl. #f5f0e8)", type: "text" },
  { key: "items", label: "Statisztikák", type: "array", itemFields: [
    { key: "value", label: "Érték (pl. 2000 nm)", type: "text" },
    { key: "label", label: "Felirat (pl. Telephely)", type: "text" },
  ]},
];

type InitialConfig = Partial<typeof DEFAULT>;

export default async function StatsSection({
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

  const items = cfg.items?.length ? cfg.items : [];

  return (
    <section className="relative py-12" style={{ backgroundColor: cfg.bgColor }}>
      <div className="max-w-5xl mx-auto px-4">
        {items.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((s, i) => (
              <div key={i} className="bg-white p-6 text-center">
                <div
                  className="text-2xl font-bold text-[#7d6142]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-sm">Adj hozzá statisztikákat a szerkesztőben.</p>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, items }} schema={SCHEMA} />}
    </section>
  );
}
