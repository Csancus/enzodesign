import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";
import FaqAccordion from "./FaqAccordion";

const DEFAULT = {
  title: "Gyakran ismételt kérdések",
  items: [
    { question: "Mennyi idő alatt készül el a bútor?", answer: "Egyedi megrendelés esetén az átfutási idő általában 4–6 hét, az aktuális rendelésállomány és a választott anyagoktól függően. Ha sürgős a határidő, kérjük jelezze érdeklődésekor – lehetőség szerint alkalmazkodunk. Raktárkészletből elérhető daraboknál azonnal elviheti a bútort nagykanizsai bemutatótermünkből." },
    { question: "Tudnak-e egyedi méretre gyártani?", answer: "Igen, minden bútorunkat elkészítjük egyedi méretben is. Elég ha küld egy képet, vázlatot vagy leírást az elképzeléséről, és 1–2 munkanapon belül személyre szabott árajánlatot küldünk. Kisebb méreteltéréstől egészen teljesen egyedi formáig mindent vállalunk – ez az egyik legnagyobb előnyünk, hogy közvetlenül gyártóként dolgozunk." },
    { question: "Van-e garancia a bútorokra?", answer: "Igen, termékeinkre 3 év garanciát vállalunk, a tömörfa vázelemekre pedig 10 éves szerkezeti garanciát biztosítunk. A garancia kiterjed a kárpitra, a rugózásra és az összes szerkezeti elemre egyaránt. Meghibásodás esetén felvesszük Önnel a kapcsolatot és egyeztetjük a javítás vagy csere lehetőségét." },
    { question: "Hogyan zajlik a kiszállítás, és mennyibe kerül?", answer: "Bútorait az ország egész területére kiszállítjuk az első zárt ajtóig. A szállítás díja a mérettől, súlytól és a célállomástól függ – pontos összeget az árajánlatban adunk meg. Nagykanizsa környékén saját fuvarral szállítunk, távolabb megbízható fuvarozó partnerrel dolgozunk. Kérésre a beemeléssel kapcsolatos részleteket is egyeztetjük." },
    { question: "Hogyan tudok rendelni?", answer: "Megrendelését leadhatja személyesen nagykanizsai bemutatótermünkben, e-mailben (info@enzodesign.hu), telefonon (+36 30 377 8983) vagy a weboldalon található kapcsolati űrlapon keresztül. Az egyedi bútoroknál általában egy rövid egyeztetési folyamat előzi meg a megrendelést: méretek, anyag, szín és forma. Céges megrendelésnél kérjük adja meg az adószámát is – számlát természetesen állítunk ki." },
    { question: "Milyen anyagokból és szövetekből lehet választani?", answer: "Bútoraink vázát főként tömörfából készítjük, ami tartósságban messze felülmúlja az MDF vagy forgácslap alapú megoldásokat. A kárpitozáshoz széles szövet- és bőrválasztékból dolgozunk: velúr, strukturált, vízálló és prémium szövetek, valamint valódi és műbőr egyaránt elérhető. Konkrét mintákat és anyagmintákat bemutatótermünkben személyesen is megtekinthet." },
    { question: "Meg lehet-e nézni a bútorokat személyesen?", answer: "Természetesen! Nagykanizsán van bemutatótermünk, ahol személyesen megtekintheti és kipróbálhatja kész bútoraink egy részét. Lehetőség van az anyagminták, színek és kárpitszövetek helyszíni megismerésére is. A látogatás előtt javasoljuk időpontot egyeztetni (+36 30 377 8983), hogy munkatársunk biztosan rendelkezésre álljon és személyre szabottan mutassa be a lehetőségeket." },
    { question: "Vállalnak-e üzleti, céges megrendelést?", answer: "Igen, szívesen dolgozunk üzleti ügyfelekkel: éttermek, hotelek, irodák, fodrászatok és más vállalkozások számára egyaránt készítünk kárpitozott bútorokat. Nagyobb tételnél kedvező nagykereskedelmi árat tudunk ajánlani. Céges megrendelésnél számlát állítunk ki, az átfutási időt pedig az igényekhez igazítjuk. Vegye fel velünk a kapcsolatot, és egyeztetjük a részleteket." },
    { question: "Mit jelent az, hogy közvetlenül gyártótól vásárolok?", answer: "Az Enzo Design nem kereskedő, hanem maga a gyártó: a bútorok a mi műhelyünkben készülnek el, közvetítő nélkül. Ez azt jelenti, hogy Ön közvetlenül a készítőtől vesz, ami 30–40%-os árelőnyt eredményezhet a bolti árakhoz képest. Emellett rugalmasabb az egyedi igények kiszolgálása, rövidebb az átfutási idő, és ha bármi kérdése van, közvetlenül a gyártóval egyeztet." },
    { question: "Elvállalnak kárpit-javítást vagy régi bútor felújítását?", answer: "Igen, vállalunk kárpit-felújítást és javítást is. Ha van egy meglévő bútor – akár régi Chesterfield, akár más kárpitozott darab –, amit meg szeretne újítani, kérjen tőlünk ajánlatot. A felújítás általában jóval kedvezőbb, mint egy új bútor vásárlása, és az eredeti szerkezet megőrzésével hosszú évekre megmenti a kedvenc bútorait." },
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
    </>
  );
}
