import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";
import Image from "next/image";
import Link from "next/link";

export type Fabric = {
  code: string;
  name: string;
  image: string;
  martindale: string;
  composition: string;
  density: string;
  colors: string;
  fabricType: string;
  description: string;
};

export type ExtraFabric = {
  code: string;
  image: string;
  description: string;
};

type Config = {
  title: string;
  subtitle: string;
  fabrics: Fabric[];
  extraTitle: string;
  extraFabrics: ExtraFabric[];
};

export const FABRICS_MODULE_ID = "global:fabrics";

const DEFAULT: Config = {
  title: "Nagy kopásállóságú, minőségi kárpit anyagok",
  subtitle: "Használt anyagaink magas minőségű gyártóktól érkeznek. Alapvetően minimum 30.000 martindale-es anyagokkal dolgozunk, de nem ritka a 100.000 martindale feletti termék sem. Tetszőleges szín, anyag és kopásállóság választható.",
  fabrics: [
    {
      code: "AI",
      name: "Prémium bársony szövet",
      image: "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.png",
      martindale: "> 100 000",
      composition: "100% PES",
      density: "370 g/m² ± 5%",
      colors: "01 bézs, 02 homok, 03 világosbarna, 04 szürkésbarna, 05 sötétbarna, 06 mályva, 07 rózsaszín, 08 világoskék, 09 acélkék, 10 indigókék, 11 sötétkék, 12 türkiz, 13 sötétzöld, 14 világoszöld, 15 arany, 16 téglaszín, 17 ciklámen, 18 lila, 19 ezüstszürke, 20 szürke, 21 sötétszürke, 22 fekete",
      fabricType: "Bársony szövet",
      description: "Puha tapintású, mégis magas kopásállósággal rendelkező, selymesen fénylő bársony bútorszövet. Lángmentes és folyadéklepergető kikészítéssel. Baba- és állatbarát termék.",
    },
    {
      code: "AT",
      name: "Prémium bársony – gazdag színvilág",
      image: "/images/0e0445_d1fcd2e300084e7094699e57e927f139.png",
      martindale: "> 100 000",
      composition: "100% PES",
      density: "450 g/m² ± 5%",
      colors: "01 tej, 02 beige, 03 homok, 04 latte, 05 étcsokoládé, 06 csokoládébarna, 07 karamellbarna, 08 gesztenyebarna, 09 világos aranybarna, 10 sötét aranybarna, 11 olívazöld, 12 kekizöld, 13 olajkék, 14 gerle, 15 ezüstszürke, 16 korall, 17 téglaszín, 18 egérszürke, 19 bazaltszürke, 20 grafit",
      fabricType: "Bársony szövet",
      description: "Kifinomult, elegáns megjelenésű, gazdag színvilággal rendelkező bársony szövet. Baba-, állat- és környezetbarát, égéskésleltetett tanúsítvánnyal. Folyadéklepergető kikészítéssel.",
    },
    {
      code: "MA",
      name: "Bársony – vízlepergető, 51 szín",
      image: "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.png",
      martindale: "100 000",
      composition: "100% POLYESTER",
      density: "–",
      colors: "51 árnyalat (bézs, szürke, barna, kék, zöld, piros és sok más szín)",
      fabricType: "Bársony szövet",
      description: "Rendkívül strapabíró, magas kopásállóságú bársony. Extra vízlepergető kikészítéssel. 51 szín közül választható.",
    },
    {
      code: "AG",
      name: "Prémium bársony – ágyvégekre",
      image: "/images/0e0445_d1fcd2e300084e7094699e57e927f139.png",
      martindale: "> 50 000",
      composition: "100% PES",
      density: "340 g/m² ± 5%",
      colors: "6801 lila, 6802 szőlő, 6803 burgundi, 6804 cékla, 6805 fekete, 6806 ezüst, 6807 szürke, 6808 taupe, 6809 tejeskávé, 6810 krém, 6811 gerle, 6812 tej, 6813 menta, 6814 kolóniál",
      fabricType: "Bársony szövet",
      description: "Különleges bársony szövet, garantált prémium érzéssel. Tökéletes választás ágyvégekre.",
    },
  ],
  extraTitle: "További gyakran használt anyagaink",
  extraFabrics: [
    {
      code: "AJ",
      image: "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.png",
      description: "Puha tapintású prémium bársony, finom márvány hatással. Passzol modern és klasszikus terekbe egyaránt.",
    },
    {
      code: "AA",
      image: "/images/0e0445_d1fcd2e300084e7094699e57e927f139.png",
      description: "Egyedi dizájnt nyújtó modern mintás, puha tapintású bútorszövet. Rendkívül strapabíró, könnyen kezelhető.",
    },
    {
      code: "AW",
      image: "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.png",
      description: "Puha tapintású mikrobársony, amelyet a tenger hullámai ihlettek. Baba- és állatbarát, folyadéklepergető kikészítéssel.",
    },
  ],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Bevezető szöveg", type: "textarea" },
  { key: "fabrics", label: "Szövetek", type: "array", itemFields: [
    { key: "code", label: "Kód (pl. AI)", type: "text" },
    { key: "name", label: "Szövet neve", type: "text" },
    { key: "image", label: "Kép", type: "image" },
    { key: "martindale", label: "Kopásállóság (martindale)", type: "text" },
    { key: "composition", label: "Összetétel", type: "text" },
    { key: "density", label: "Sűrűség (g/m²)", type: "text" },
    { key: "colors", label: "Elérhető színek", type: "textarea" },
    { key: "fabricType", label: "Szövet típus", type: "text" },
    { key: "description", label: "Leírás", type: "textarea" },
  ]},
  { key: "extraTitle", label: "További anyagok – cím", type: "text" },
  { key: "extraFabrics", label: "További anyagok", type: "array", itemFields: [
    { key: "code", label: "Kód", type: "text" },
    { key: "image", label: "Kép", type: "image" },
    { key: "description", label: "Leírás", type: "textarea" },
  ]},
];

export default async function FabricsSection({
  moduleId = FABRICS_MODULE_ID,
  isAdmin,
}: {
  moduleId?: string;
  isAdmin: boolean;
}) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as Config) };
  const fabrics = cfg.fabrics?.length ? cfg.fabrics : DEFAULT.fabrics;
  const extraFabrics = cfg.extraFabrics?.length ? cfg.extraFabrics : DEFAULT.extraFabrics;

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-2">Anyagaink</p>
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            {cfg.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{cfg.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {fabrics.map((fabric, i) => (
            <div key={i} className="border border-gray-100 overflow-hidden shadow-sm">
              {fabric.image && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={fabric.image} alt={fabric.name} fill className="object-cover" />
                  <span className="absolute top-3 left-3 bg-[#1c1c1c] text-white text-xs font-bold px-2 py-1">
                    {fabric.code}
                  </span>
                </div>
              )}
              <div className="p-5">
                <h3 className="font-bold text-[#1c1c1c] mb-3">{fabric.name}</h3>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-3 text-xs text-gray-600 mb-3">
                  <div><span className="font-medium text-gray-700">Kopásállóság:</span> {fabric.martindale} martindale</div>
                  <div><span className="font-medium text-gray-700">Összetétel:</span> {fabric.composition}</div>
                  {fabric.density && fabric.density !== "–" && (
                    <div><span className="font-medium text-gray-700">Sűrűség:</span> {fabric.density}</div>
                  )}
                  <div><span className="font-medium text-gray-700">Szövet típus:</span> {fabric.fabricType}</div>
                </div>
                {fabric.colors && (
                  <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                    <span className="font-medium text-gray-700">Szín: </span>{fabric.colors}
                  </p>
                )}
                {fabric.description && (
                  <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {fabric.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {extraFabrics.length > 0 && (
          <>
            <h3 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              {cfg.extraTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {extraFabrics.map((ef, i) => (
                <div key={i} className="border border-gray-100 overflow-hidden shadow-sm">
                  {ef.image && (
                    <div className="relative aspect-square overflow-hidden">
                      <Image src={ef.image} alt={ef.code} fill className="object-cover" />
                      <span className="absolute top-2 left-2 bg-[#1c1c1c] text-white text-xs font-bold px-2 py-0.5">
                        {ef.code}
                      </span>
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{ef.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center">
          <Link
            href="/butoraink/karpitoszovetek"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
          >
            Összes kárpitszövet megtekintése
          </Link>
        </div>
      </div>
      {isAdmin && (
        <EditBtn
          moduleId={moduleId}
          config={{ ...cfg, fabrics, extraFabrics }}
          schema={SCHEMA}
        />
      )}
    </section>
  );
}
