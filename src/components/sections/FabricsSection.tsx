import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";
import Image from "next/image";

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
  subtitle: "Használt anyagaink magas minőségű gyártóktól érkeznek. Alapvetően minimum 50.000 martindale-es, nagy kopásállóságú anyagokkal dolgozunk, de nem ritka a 100.000 martindale feletti termék sem.\n\nTetszőleges szín, anyag és kopásállóság választható.",
  fabrics: [
    {
      code: "AI",
      name: "AI",
      image: "/images/e7ad8b_0fbc585b253d43d5a806495623cf13a4.webp",
      martindale: "> 100 000",
      composition: "100% PES",
      density: "370 g/m² ± 5%",
      colors: "01 bézs, 02 homok, 03 világosbarna, 04 szürkésbarna, 05 sötétbarna, 06 mályva, 07 rózsaszín, 08 világoskék, 09 acélkék, 10 indigókék, 11 sötétkék, 12 türkiz, 13 sötétzöld, 14 világoszöld, 15 arany, 16 téglaszín, 17 ciklámen, 18 lila, 19 ezüstszürke, 20 szürke, 21 sötétszürke, 22 fekete",
      fabricType: "bársony szövet",
      description: "Puha tapintású, mégis magas kopásállósággal rendelkező selymesen fénylő bársony bútorszövet. Lángmentes illetve folyadéklepergető kikészítéssel. Baba és állatbarát termék.",
    },
    {
      code: "AT",
      name: "AT",
      image: "/images/e7ad8b_1df77688fc3245228fbb11d74a0e4a1a.webp",
      martindale: "> 100 000",
      composition: "100% PES",
      density: "450 g/m² ± 5%",
      colors: "01 tej, 02 beige, 03 homok, 04 latte, 05 étcsokoládé, 06 csokoládébarna, 07 karamellbarna, 08 gesztenyebarna, 09 világos aranybarna, 10 sötét aranybarna, 11 olívazöld, 12 kekizöld, 13 olajkék, 14 gerle, 15 ezüstszürke, 16 korall, 17 téglaszín, 18 egérszürke, 19 bazaltszürke, 20 grafit",
      fabricType: "bársony szövet",
      description: "Kifinomult, elegáns megjelenésű, gazdag színvilággal rendelkező bársony szövet. Kiemelkedő tartóssága mellett olyan extra tulajdonságokkal rendelkezik, mint a baba, állat és környezetbarát illetve az égéskésleltetett tanúsítvány. Mindemellett folyadéklepergető kikészítéssel is ellátták, hogy ne kelljen többé a foltok miatt bosszankodni.",
    },
    {
      code: "MA",
      name: "MA",
      image: "/images/e7ad8b_b09a1e9ade984e15a2ec9e9ee92e7e3e.webp",
      martindale: "100 000",
      composition: "100% POLYESTER",
      density: "–",
      colors: "49 színárnyalat",
      fabricType: "bársony szövet",
      description: "Egyszínű / 49 színárnyalat. Extra tulajdonság: Vízlepergető.",
    },
    {
      code: "AG",
      name: "AG",
      image: "/images/0e0445_50fa04b863b54e4abc10490cc84b903c.webp",
      martindale: "> 50 000",
      composition: "100% PES",
      density: "340 g/m² ± 5%",
      colors: "6801 sötétkék, 6802 szőlő, 6803 burgundi, 6804 cékla, 6805 fekete, 6806 ezüst, 6807 szürke, 6808 taupe, 6809 tejeskávé, 6810 krém, 6811 gerle, 6812 tej, 6813 menta, 6814 kolóniál",
      fabricType: "bársony szövet",
      description: "Ezzel a különleges bársony szövettel garantált a prémium érzés és hatás. Tökéletes választás ágyvégekre.",
    },
  ],
  extraTitle: "Gyakran használt anyagaink jellemzői:",
  extraFabrics: [
    {
      code: "AJ",
      image: "",
      description: "Puha tapintású, mégis magas kopásállósággal rendelkező prémium bársony bútorszövet. Finom márvány hatása teszi igazán különlegessé. Jól passzol modern és klasszikus terekbe egyaránt.",
    },
    {
      code: "AA",
      image: "",
      description: "Egyedi dizájnt nyújtó modern mintás, puha tapintású bútorszövet. Rendkívül strapabíró kialakításának és könnyű kezelhetőségének köszönhetően széleskörűen felhasználható.",
    },
    {
      code: "AW",
      image: "",
      description: "Egy puha tapintású mikrobársony kollekció, amelyet a tenger hullámai ihlettek. Kifejezetten ajánlott családok részére, hiszen baba és állatbarát tulajdonsággal rendelkezik. Mindemellett folyadéklepergető kikészítéssel is ellátták a könnyebb tisztántartás érdekében.",
    },
  ],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Bevezető szöveg", type: "textarea" },
  { key: "fabrics", label: "Szövetek", type: "array", itemFields: [
    { key: "code", label: "Kód (pl. AI)", type: "text" },
    { key: "name", label: "Megjelenített név", type: "text" },
    { key: "image", label: "Kép", type: "image" },
    { key: "martindale", label: "Kopásállóság (martindale)", type: "text" },
    { key: "composition", label: "Összetétel", type: "text" },
    { key: "density", label: "Sűrűség (g/m²)", type: "text" },
    { key: "colors", label: "Elérhető színek", type: "textarea" },
    { key: "fabricType", label: "Szövet típus", type: "text" },
    { key: "description", label: "Termék jellemzők", type: "textarea" },
  ]},
  { key: "extraTitle", label: "További anyagok – cím", type: "text" },
  { key: "extraFabrics", label: "További anyagok", type: "array", itemFields: [
    { key: "code", label: "Kód", type: "text" },
    { key: "image", label: "Kép (opcionális)", type: "image" },
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

        {/* Header */}
        <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          {cfg.title}
        </h2>
        <div className="text-gray-600 text-sm leading-relaxed mb-10 max-w-3xl">
          {cfg.subtitle.split("\n").map((line, i) => (
            <p key={i} className={line === "" ? "mt-3" : ""}>{line}</p>
          ))}
        </div>

        {/* Fabric cards – 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {fabrics.map((fabric, i) => (
            <div key={i} className="bg-white">
              {fabric.image && (
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image src={fabric.image} alt={fabric.code} fill className="object-cover" />
                </div>
              )}
              <p className="text-sm font-bold text-[#1c1c1c] mb-3">{fabric.code}</p>
              <div className="text-xs text-gray-600 space-y-1.5 mb-3">
                <p><span className="font-medium">Kopásállóság (martindale):</span> {fabric.martindale}</p>
                <p><span className="font-medium">Összetétel:</span> {fabric.composition}</p>
                {fabric.density && fabric.density !== "–" && (
                  <p><span className="font-medium">Terület sűrűség (g/m²):</span> {fabric.density}</p>
                )}
                <p><span className="font-medium">Szín:</span> {fabric.colors}</p>
                <p><span className="font-medium">Szövet típus:</span> {fabric.fabricType}</p>
              </div>
              {fabric.description && (
                <div className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                  <p className="font-medium text-gray-600 mb-1">Termék jellemzők:</p>
                  <p>{fabric.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Separator + contact note */}
        <p className="text-sm text-gray-500 italic text-center border-t border-gray-200 pt-8 mb-10">
          Keressen bennünket további szövetválasztékkal kapcsolatban – több mint 100 féle szövetből választhat.
        </p>

        {/* Extra fabrics – text only */}
        {extraFabrics.length > 0 && (
          <div>
            <p className="text-sm font-semibold text-[#1c1c1c] mb-4">{cfg.extraTitle}</p>
            <div className="space-y-4">
              {extraFabrics.map((ef, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-sm font-bold text-[#7d6142] w-8 flex-shrink-0">{ef.code}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{ef.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
