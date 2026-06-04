import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "",
  columns: "3",
  cards: [] as { name: string; tagline: string; image: string; href: string }[],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím (opcionális)", type: "text" },
  { key: "columns", label: "Oszlopok száma (2 / 3)", type: "text" },
  { key: "cards", label: "Kártyák", type: "array", itemFields: [
    { key: "name", label: "Név", type: "text" },
    { key: "tagline", label: "Tagline / leírás", type: "text" },
    { key: "image", label: "Kép", type: "image" },
    { key: "href", label: "Link URL", type: "text" },
  ]},
];

type InitialConfig = Partial<typeof DEFAULT>;

export default async function CardGridSection({
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

  const cards = cfg.cards?.length ? cfg.cards : [];
  const cols = cfg.columns === "2" ? 2 : 3;

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {cfg.title && (
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            {cfg.title}
          </h2>
        )}
        {cards.length > 0 ? (
          <div
            className="grid gap-6"
            style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
          >
            {cards.map((card, i) => (
              <Link key={i} href={card.href || "#"} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <Image
                    src={card.image || "/images/slide1.jpg"}
                    alt={card.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs text-[#b8924a] uppercase tracking-wide mb-0.5">{card.tagline}</p>
                <p className="text-sm font-bold text-[#1c1c1c] group-hover:text-[#7d6142] transition-colors">
                  {card.name}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 text-sm">Adj hozzá kártyákat a szerkesztőben.</p>
        )}
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, cards }} schema={SCHEMA} />}
    </section>
  );
}
