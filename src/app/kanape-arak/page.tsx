import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QualitySection from "@/components/QualitySection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";
import StepsSection from "@/components/sections/StepsSection";
import { ft, getPricingMap, type Pricing } from "@/lib/productPricing";

const BASE = "https://www.enzodesign.hu";
const URL = `${BASE}/kanape-arak`;

/** Az árak a termékoldalakról öröklődnek (CMS-felülírással). Árat ide ne írj. */
const DEFS = [
  { pageId: "chesterfield-kanapek", name: "Chesterfield", href: "/butoraink/kanapek/chesterfield-kanapek" },
  { pageId: "new-york-kanapek", name: "New York", href: "/butoraink/kanapek/new-york-kanapek" },
  { pageId: "joker-kanapek", name: "Joker", href: "/butoraink/kanapek/joker-kanapek" },
  { pageId: "olds-club-kanapek", name: "Old's Club", href: "/butoraink/kanapek/olds-club-kanapek" },
  { pageId: "ivone-kanapek", name: "Ivone", href: "/butoraink/kanapek/ivone-kanapek" },
  { pageId: "design-kanapek", name: "Design", href: "/butoraink/kanapek/design-kanapek" },
  { pageId: "cannes-kanapek", name: "Cannes", href: "/butoraink/kanapek/cannes-kanapek", note: "csak sarokkanapé" },
];
const EXTRA_IDS = ["tovabbi-fotelek"];

type Row = (typeof DEFS)[number] & { p: Pricing };
const min = (xs: (number | undefined)[]) => Math.min(...xs.filter((n): n is number => !!n && n > 0));

async function load() {
  const prices = await getPricingMap([...DEFS.map((d) => d.pageId), ...EXTRA_IDS]);
  const rows: Row[] = DEFS.map((d) => ({ ...d, p: prices[d.pageId] }));
  const summary = {
    fotel: min(rows.map((r) => r.p.fotel?.alap)),
    ketto: min(rows.map((r) => r.p.ketSzemelyes?.alap)),
    harom: min(rows.map((r) => r.p.haromSzemelyes?.alap)),
    sarok: min(rows.map((r) => r.p.sarok?.alap)),
    sarokKollekcio: min(rows.filter((r) => r.pageId !== "cannes-kanapek").map((r) => r.p.sarok?.alap)),
    kettoBor: min(rows.map((r) => r.p.ketSzemelyes?.bor)),
    agy: min(rows.map((r) => r.p.agyFunkcio)),
    agyMax: Math.max(...rows.map((r) => r.p.agyFunkcio ?? 0)),
    szek: prices["tovabbi-fotelek"]?.fotel?.alap,
  };
  return { rows, summary };
}
type Summary = Awaited<ReturnType<typeof load>>["summary"];

export async function generateMetadata(): Promise<Metadata> {
  const { summary: s } = await load();
  return {
    title: "Kanapé árak 2026 – mennyibe kerül egy egyedi kanapé a gyártótól?",
    description: `Egyedi kanapé árak kollekciónként: 2 személyes kanapé ${ft(s.ketto)}-tól, 3 személyes ${ft(s.harom)}-tól, sarokkanapé ${ft(s.sarok)}-tól, fotel ${ft(s.fotel)}-tól, bőrrel ${ft(s.kettoBor)}-tól. Mi befolyásolja az árat, hogyan kérj árajánlatot. Nagykanizsai gyártó, 3+10 év garancia.`,
    alternates: { canonical: URL },
    openGraph: {
      title: "Kanapé árak – mennyibe kerül egy egyedi kanapé a gyártótól? | Enzo Design",
      description: "Teljes ártáblázat kollekciónként, szövettel és bőrrel, és ami az árat befolyásolja.",
      url: URL,
      images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
    },
  };
}

function buildFaq(s: Summary) {
  return [
    {
      q: "Mennyibe kerül egy egyedi kanapé 2026-ban a gyártótól?",
      a: `Nálunk a 2 személyes kanapé ${ft(s.ketto)}-tól, a 3 személyes ${ft(s.harom)}-tól, a sarokkanapé ${ft(s.sarok)}-tól (Cannes) illetve ${ft(s.sarokKollekcio)}-tól (kollekciós), a fotel ${ft(s.fotel)}-tól indul alap szövettel. Valódi bőrrel a 2 személyes ${ft(s.kettoBor)}-tól. Ezek tájékoztató, alapkonfigurációs árak; a pontos árat a méret és a kárpit ismeretében 2 napon belül adjuk.`,
    },
    {
      q: "Miért olcsóbb a gyártótól, mint a bútoráruházban?",
      a: "Mert nincs közben kereskedő, viszonteladói árrés és bemutatóterem-bérlet nagyvárosi plázában. A bútor a nagykanizsai üzemünkből egyenesen hozzád megy. Ugyanezért tudunk egyedi méretet adni: nem raktárkészletet árulunk, hanem rendelésre gyártunk.",
    },
    {
      q: "Az árak áfával értendők?",
      a: "Igen, a feltüntetett árak bruttó, áfát tartalmazó fogyasztói árak. Céges rendelésnél az árajánlaton a nettó és a bruttó ár is szerepel.",
    },
    {
      q: "Hogyan kapok pontos árajánlatot?",
      a: "Küldj egy fotót vagy leírást a helyiségről és a kívánt méretről a kapcsolati űrlapon vagy az info@enzodesign.hu címre, válaszd ki a kollekciót és a szövetet, és 2 napon belül tételes árajánlatot küldünk. Ha szükséges, szövetmintát postázunk.",
    },
    {
      q: "Kell előleget fizetni?",
      a: "Igen. A megrendelés után előlegbekérő szerződést küldünk, az előleg átutalással fizethető, a fennmaradó összeg átadáskor esedékes. A gyártási idő 4–6 hét.",
    },
    {
      q: "Mi van, ha később megváltoztatnám a méretet vagy a szövetet?",
      a: "A gyártás megkezdéséig módosítható, ekkor új árajánlatot adunk. Gyártás közben a váz már készül, ezért a méret nem, a szövet bizonyos fázisig még változtatható; erről kollégánk a megrendeléskor tájékoztat.",
    },
  ];
}

export default async function KanapeArakPage() {
  const { rows, summary: s } = await load();
  const FAQ = buildFaq(s);
  const chester = rows.find((r) => r.pageId === "chesterfield-kanapek")!.p;
  const cannes = rows.find((r) => r.pageId === "cannes-kanapek")!.p;
  const borDiffKetto = (chester.ketSzemelyes?.bor ?? 0) - (chester.ketSzemelyes?.alap ?? 0);
  const borDiffSarok = (chester.sarok?.bor ?? 0) - (chester.sarok?.alap ?? 0);
  const round10k = (n: number) => Math.round(n / 10000) * 10000;

  const FACTORS = [
    { t: "Méret", d: `A 2 személyes és a 3 személyes kanapé között kb. ${ft(round10k((chester.haromSzemelyes?.alap ?? 0) - (chester.ketSzemelyes?.alap ?? 0)))} a különbség, a sarokkanapé a 3 személyes ára felett indul. Egyedi hossz vagy mélyebb ülés a felhasznált váz- és kárpitmennyiség arányában drágít, nem külön „egyedi felárral”.` },
    { t: "Szövet vagy bőr", d: `A legnagyobb tétel. Az alap ár 50 000 martindale kopásállóságú szövettel értendő; a valódi bőr ugyanarra a vázra a 2 személyesnél kb. ${ft(round10k(borDiffKetto))}-tal, a sarokkanapénál kb. ${ft(round10k(borDiffSarok))}-tal több. Bársony és prémium szövetcsalád a kettő között van.` },
    { t: "Ágyfunkció", d: `Kihúzható ágymechanizmus bármelyik kanapéhoz: ${ft(s.agy)}${s.agyMax > s.agy ? `–${ft(s.agyMax)}` : ""} kollekciótól függően. Kb. 140×190 cm fekvőfelület.` },
    { t: "Forma és részletek", d: "Gombolt háttámla (Chesterfield), állítható fejtámla (Cannes), U alak, ottomán vég, díszszegés, választott láb – ezek a kollekciótól függően benne vannak az alapárban vagy tételes felárak, amit az árajánlatban látni fogsz." },
    { t: "Szállítás", d: "Az egész országba az első zárt ajtóig szállítunk. A szállítási díj a távolságtól függ, és az árajánlatban külön soron szerepel, hogy ne legyen meglepetés." },
  ];

  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE },
      { "@type": "ListItem", position: 2, name: "Kanapék", item: `${BASE}/butoraink/kanapek` },
      { "@type": "ListItem", position: 3, name: "Kanapé árak", item: URL },
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Kanapé árak kollekciónként – Enzo Design",
    url: URL,
    numberOfItems: rows.length,
    itemListElement: rows.map((r, i) => {
      const all = [r.p.fotel, r.p.ketSzemelyes, r.p.haromSzemelyes, r.p.sarok].filter(Boolean) as { alap: number; bor?: number }[];
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `${r.name} kanapé`,
          url: `${BASE}${r.href}`,
          brand: { "@type": "Brand", name: "Enzo Design" },
          offers: { "@type": "AggregateOffer", lowPrice: min(all.map((x) => x.alap)), highPrice: Math.max(...all.map((x) => x.bor ?? x.alap)), priceCurrency: "HUF", offerCount: all.length * 2, availability: "https://schema.org/MadeToOrder", url: `${BASE}${r.href}` },
        },
      };
    }),
  };

  const cell = (e?: { alap: number; bor?: number }) =>
    e ? (
      <td className="px-3 py-3 text-right tabular-nums whitespace-nowrap">
        <span className="block">{ft(e.alap)}</span>
        {e.bor ? <span className="block text-xs text-gray-500">bőr: {ft(e.bor)}</span> : null}
      </td>
    ) : (
      <td className="px-3 py-3 text-right text-gray-300">–</td>
    );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="bg-[#f5f0ea] py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <nav className="text-xs text-gray-500 mb-4" aria-label="Morzsamenü">
            <Link href="/" className="hover:text-[#7d6142]">Főoldal</Link> / <Link href="/butoraink/kanapek" className="hover:text-[#7d6142]">Kanapék</Link> / <span className="text-[#7d6142]">Kanapé árak</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            Mennyibe kerül egy egyedi kanapé a gyártótól?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nem titkoljuk az árakat: itt van minden kollekciónk induló ára fotelre, 2 és 3 személyes kanapéra és sarokkanapéra, szövettel és valódi bőrrel. Utána elmondjuk, mi mozgatja az árat, és hogyan kapsz 2 napon belül pontos ajánlatot.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a href="#artablazat" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Ártáblázat
            </a>
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Kanapé árak oldal – Kérek árajánlatot" className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Pontos árajánlatot kérek
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* GYORS ÖSSZEFOGLALÓ */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { l: "Fotel", v: s.fotel, h: "/butoraink/fotelek" },
            { l: "2 személyes kanapé", v: s.ketto, h: "/butoraink/kanapek" },
            { l: "3 személyes kanapé", v: s.harom, h: "/butoraink/kanapek" },
            { l: "Sarokkanapé", v: s.sarok, h: "/sarokkanape" },
          ].map((k) => (
            <Link key={k.l} href={k.h} className="bg-[#f5f0ea] border border-gray-200 p-5 hover:border-[#7d6142] transition-colors">
              <p className="text-xs uppercase tracking-wide text-gray-500">{k.l}</p>
              <p className="mt-1 text-lg sm:text-xl font-bold text-[#7d6142] tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>{ft(k.v)}-tól</p>
              <p className="text-xs text-gray-400 mt-1">alap szövettel</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ÁRTÁBLÁZAT */}
      <section id="artablazat" className="py-20 bg-[#f5f0ea] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Kanapé árak kollekciónként, szövettel és bőrrel
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Bruttó, tájékoztató árak az alapkonfigurációra. Első sor: alap kopásálló szövet; alatta: valódi bőr. Egyedi méret és szövetválasztás módosítja.
          </p>
          <p className="md:hidden text-xs text-gray-400 mb-2">Húzd oldalra a táblázatot →</p>
          <div className="overflow-x-auto bg-white border border-gray-200">
            <table className="w-full min-w-[820px] text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-gray-500">
                  <th className="text-left px-3 py-3 border-b-2 border-[#b8924a]">Kollekció</th>
                  <th className="text-right px-3 py-3 border-b-2 border-[#b8924a]">Fotel</th>
                  <th className="text-right px-3 py-3 border-b-2 border-[#b8924a]">2 személyes</th>
                  <th className="text-right px-3 py-3 border-b-2 border-[#b8924a]">3 személyes</th>
                  <th className="text-right px-3 py-3 border-b-2 border-[#b8924a]">Sarokkanapé</th>
                  <th className="text-right px-3 py-3 border-b-2 border-[#b8924a]">+ Ágyfunkció</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.pageId} className="border-b border-gray-100 hover:bg-[#f5f0e8]/60 align-top">
                    <td className="px-3 py-3">
                      <Link href={r.href} className="font-semibold text-[#1c1c1c] hover:text-[#7d6142]">{r.name}</Link>
                      {"note" in r && r.note ? <span className="block text-xs text-gray-500">{r.note}</span> : null}
                    </td>
                    {cell(r.p.fotel)}{cell(r.p.ketSzemelyes)}{cell(r.p.haromSzemelyes)}{cell(r.p.sarok)}
                    <td className="px-3 py-3 text-right tabular-nums whitespace-nowrap">{r.p.agyFunkcio ? ft(r.p.agyFunkcio) : "–"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Az árak tájékoztató jellegűek és az alapkonfigurációra vonatkoznak. Egyéni méret és anyagválasztás esetén az ár változhat. Gyártási idő: 4–6 hét. Garancia: 3 év (váz: 10 év).
            {s.szek ? <> Székek és kisfotelek {ft(s.szek)}-tól a <Link href="/butoraink/fotelek/tovabbi-fotelek" className="underline">további fotelek</Link> oldalon.</> : null}
          </p>
        </div>
      </section>

      {/* MI BEFOLYÁSOLJA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-10 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Mi befolyásolja egy egyedi kanapé árát?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACTORS.map((f, i) => (
              <div key={f.t} className="border border-gray-200 p-6 flex gap-4">
                <span className="text-[#b8924a] text-3xl font-bold shrink-0" style={{ fontFamily: "var(--font-heading)" }}>{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1c1c1c]">{f.t}</h3>
                  <p className="text-gray-600 text-sm mt-2">{f.d}</p>
                </div>
              </div>
            ))}
            <div className="border-2 border-[#b8924a] bg-[#f5f0ea] p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-[#1c1c1c]">Amit nem fizetsz meg nálunk</h3>
              <p className="text-gray-600 text-sm mt-2">Kereskedői árrést, plázabérletet, raktárkészletet. A bútor a nagykanizsai üzemből egyenesen hozzád megy, ezért lehet egyedi méretben is ugyanennyi.</p>
              <Link href="/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" className="mt-3 text-sm text-[#b8924a] underline">Miért éri meg a gyártótól vásárolni? →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PÉLDÁK */}
      <section className="py-16 bg-[#f5f0ea]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Három tipikus összeállítás, induló árral
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Kis nappali", d: "2 személyes Chesterfield kanapé ágyfunkcióval, alap szövettel", v: (chester.ketSzemelyes?.alap ?? 0) + (chester.agyFunkcio ?? 0), h: "/agyazhato-kanape" },
              { t: "Családi nappali", d: "Cannes sarokkanapé állítható fejtámlákkal, alap szövettel", v: cannes.sarok?.alap ?? 0, h: "/sarokkanape" },
              { t: "Reprezentatív szalon", d: "Chesterfield 3-2-1 ülőgarnitúra valódi bőrrel", v: (chester.haromSzemelyes?.bor ?? 0) + (chester.ketSzemelyes?.bor ?? 0) + (chester.fotel?.bor ?? 0), h: "/ulogarnitura" },
            ].map((e) => (
              <Link key={e.t} href={e.h} className="bg-white border border-gray-200 p-6 hover:border-[#7d6142] transition-colors block">
                <p className="text-xs uppercase tracking-wide text-gray-500">{e.t}</p>
                <p className="mt-2 text-gray-700 text-sm">{e.d}</p>
                <p className="mt-3 text-xl font-bold text-[#7d6142] tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>{ft(e.v)}-tól</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <StepsSection moduleId="home:steps" isAdmin={false} />
      <QualitySection />

      {/* GYIK */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Gyakori kérdések a kanapé árakról
          </h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="group bg-[#f5f0ea] border border-gray-200 p-5">
                <summary className="cursor-pointer font-semibold text-[#1c1c1c] list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-[#b8924a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Kanapé árak oldal – alsó CTA" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Pontos árajánlatot kérek 2 napon belül
            </TrackedLink>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/sarokkanape" className="text-[#b8924a] underline">Sarokkanapé</Link>
            <Link href="/agyazhato-kanape" className="text-[#b8924a] underline">Ágyazható kanapé</Link>
            <Link href="/borkanape" className="text-[#b8924a] underline">Bőrkanapé</Link>
            <Link href="/ulogarnitura" className="text-[#b8924a] underline">Ülőgarnitúra</Link>
            <Link href="/chesterfield" className="text-[#b8924a] underline">Chesterfield</Link>
          </p>
        </div>
      </section>

      <QuoteSlider />
      <ContactFormSection />
    </>
  );
}
