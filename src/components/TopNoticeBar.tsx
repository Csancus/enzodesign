import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

export const TOP_NOTICE_MODULE_ID = "topbar:notice";

// Alapból KIKAPCSOLVA: a korábbi FSC-felirat már nem érvényes, csak akkor
// jelenik meg bármi, ha az admin bekapcsolja és beírja a saját szövegét.
const DEFAULT = {
  enabled: false,
  text: "",
  image: "",
  bgColor: "#2d4a1e",
  textColor: "#ffffff",
};

const SCHEMA: FieldDef[] = [
  { key: "enabled", label: "Sáv megjelenítése (be/ki)", type: "boolean" },
  { key: "text", label: "Szöveg", type: "text" },
  { key: "image", label: "Logó / ikon (opcionális)", type: "image" },
  { key: "bgColor", label: "Háttérszín (pl. #2d4a1e)", type: "text" },
  { key: "textColor", label: "Szövegszín (pl. #ffffff)", type: "text" },
];

export default async function TopNoticeBar({ isAdmin }: { isAdmin: boolean }) {
  const stored = await getModuleConfig(TOP_NOTICE_MODULE_ID);
  const cfg = { ...DEFAULT, ...(stored as Partial<typeof DEFAULT>) };
  const enabled = cfg.enabled === true;

  // Kikapcsolva: a látogató semmit sem lát; az admin egy vékony jelzősávot kap,
  // hogy vissza tudja kapcsolni.
  if (!enabled) {
    if (!isAdmin) return null;
    return (
      <div className="bg-gray-100 border-b border-dashed border-gray-300 text-[11px] text-gray-500 py-1 px-4 flex items-center justify-center gap-3">
        <span>Felső sáv – kikapcsolva (csak adminként látszik)</span>
        <EditBtn
          moduleId={TOP_NOTICE_MODULE_ID}
          config={cfg}
          schema={SCHEMA}
          label="✏ Felső sáv"
          positionClass=""
        />
      </div>
    );
  }

  return (
    <div
      className="text-xs py-1.5 px-4 flex items-center justify-center gap-2"
      style={{ backgroundColor: cfg.bgColor, color: cfg.textColor }}
    >
      {cfg.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={cfg.image} alt="" className="h-5 w-auto" />
      )}
      {cfg.text && <span className="text-center leading-snug">{cfg.text}</span>}
      {isAdmin && (
        <EditBtn
          moduleId={TOP_NOTICE_MODULE_ID}
          config={cfg}
          schema={SCHEMA}
          label="✏ Felső sáv"
          positionClass=""
        />
      )}
    </div>
  );
}
