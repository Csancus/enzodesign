import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";
import FaqAccordion from "./FaqAccordion";

const DEFAULT = {
  title: "Gyakran ismételt kérdések",
  items: [
    { question: "Mennyi idő alatt készül el a bútor?", answer: "Egyedi bútorok esetén általában 4–6 hét az átfutási idő. Raktárkészletből azonnali átvétel is lehetséges Nagykanizsán." },
    { question: "Tudnak-e egyedi méretre gyártani?", answer: "Igen, minden bútorunkat egyedi méretben is elkészítjük. Küldjön képet vagy leírást, és 2 napon belül árajánlatot adunk." },
    { question: "Van-e garancia a bútorokra?", answer: "Igen, 2 év garanciát vállalunk minden termékünkre. A tömörfa váz és a kárpit egyaránt garancia alá esik." },
    { question: "Hogyan zajlik a kiszállítás?", answer: "Országos szinten kiszállítjuk a bútort az első zárt ajtóig. A szállítás díja egyénileg kerül egyeztetésre." },
    { question: "Hogyan tudok rendelni?", answer: "Megrendelését leadhatja személyesen, e-mailben (info@enzodesign.hu) vagy a kapcsolat űrlapon keresztül. Céges rendelésnél kérjük adja meg az adószámát is." },
  ] as { question: string; answer: string }[],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "items", label: "Kérdések", type: "array", itemFields: [
    { key: "question", label: "Kérdés", type: "text" },
    { key: "answer", label: "Válasz", type: "textarea" },
  ]},
];

export default async function FaqSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const items = cfg.items?.length ? cfg.items : DEFAULT.items;

  return (
    <section className="relative py-14 bg-[#f5f0e8]">
      <div className="max-w-3xl mx-auto px-4">
        <h2
          className="text-2xl font-bold text-[#1c1c1c] mb-8 text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h2>
        <FaqAccordion items={items} />
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, items }} schema={SCHEMA} />}
    </section>
  );
}
