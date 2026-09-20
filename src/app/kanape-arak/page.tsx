import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";

const BASE = "https://www.enzodesign.hu";
const URL = `${BASE}/kanape-arak`;

export const metadata: Metadata = {
  title: "Kanapé árak 2026 – mennyibe kerül egy egyedi kanapé a gyártótól?",
  description:
    "Egyedi kanapé árak kollekciónként: 2 személyes kanapé 399 810 Ft-tól, 3 személyes 497 890 Ft-tól, sarokkanapé 367 340 Ft-tól, fotel 324 380 Ft-tól, bőrrel 619 750 Ft-tól. Mi befolyásolja az árat, hogyan kérj árajánlatot. Nagykanizsai gyártó, 3+10 év garancia.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Kanapé árak – mennyibe kerül egy egyedi kanapé a gyártótól? | Enzo Design",
    description: "Teljes ártáblázat kollekciónként, szövettel és bőrrel, és ami az árat befolyásolja.",
    url: URL,
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const ft = (n: number) => `${n.toLocaleString("hu-HU").replace(/ /g, " ")} Ft`;

/** Árak a termékoldalakról (Old's Club: a CMS-ben tárolt ár) – ha ott változik, itt is frissítendő. */
type Row = { name: string; href: string; fotel: [number, number]; ketto: [number, number]; harom: [number, number]; sarok: [number, number]; agy: number };
const ROWS: Row[] = [
  { name: "Chesterfield", href: "/butoraink/kanapek/chesterfield-kanapek", fotel: [324380, 421695], ketto: [399810, 619750], harom: [497890, 847255], sarok: [735515, 1156170], agy: 190500 },
  { name: "New York", href: "/butoraink/kanapek/new-york-kanapek", fotel: [324380, 421695], ketto: [399810, 619750], harom: [497890, 847255], sarok: [735515, 1156170], agy: 190500 },
  { name: "Joker", href: "/butoraink/kanapek/joker-kanapek", fotel: [324380, 421695], ketto: [399810, 619750], harom: [497890, 847255], sarok: [735515, 1156170], agy: 190500 },
  { name: "Old's Club", href: "/butoraink/kanapek/olds-club-kanapek", fotel: [360420, 468545], ketto: [444240, 667510], harom: [553210, 919170], sarok: [817240, 1262412], agy: 210000 },
  { name: "Ivone", href: "/butoraink/kanapek/ivone-kanapek", fotel: [360420, 468545], ketto: [444240, 677510], harom: [553210, 919170], sarok: [817240, 1262412], agy: 190500 },
  { name: "Design", href: "/butoraink/kanapek/design-kanapek", fotel: [360420, 468545], ketto: [444240, 677510], harom: [553210, 919170], sarok: [817240, 1262412], agy: 190500 },
];
const CANNES = { name: "Cannes sarokkanapé", href: "/butoraink/kanapek/cannes-kanapek", sarok: [367340, 787740] as [number, number], agy: 190500 };

const FACTORS = [
  { t: "Méret", d: "A 2 személyes és a 3 személyes kanapé között kb. 100 000 Ft a különbség, a sarokkanapé a 3 személyes ára felett indul. Egyedi hossz vagy mélyebb ülés a felhasznált váz- és kárpitmennyiség arányában drágít, nem külön „egyedi felárral”." },
  { t: "Szövet vagy bőr", d: "A legnagyobb tétel. Az alap ár 50 000 martindale kopásállóságú szövettel értendő; a valódi bőr ugyanarra a vázra a 2 személyesnél kb. 220 000 Ft-tal, a sarokkanapénál kb. 420 000 Ft-tal több. Bársony és prémium szövetcsalád a kettő között van." },
  { t: "Ágyfunkció", d: "Kihúzható ágymechanizmus bármelyik kanapéhoz: 190 500 Ft (Old's Club: 210 000 Ft). Kb. 140×190 cm fekvőfelület." },
  { t: "Forma és részletek", d: "Gombolt háttámla (Chesterfield), állítható fejtámla (Cannes), U alak, ottomán vég, díszszegés, választott láb – ezek a kollekciótól függően benne vannak az alapárban vagy tételes felárak, amit az árajánlatban látni fogsz." },
  { t: "Szállítás", d: "Az egész országba az első zárt ajtóig szállítunk. A szállítási díj a távolságtól függ, és az árajánlatban külön soron szerepel, hogy ne legyen meglepetés." },
];

const FAQ = [
  {
    q: "Mennyibe kerül egy egyedi kanapé 2026-ban a gyártótól?",
    a: "Nálunk a 2 személyes kanapé 399 810 Ft-tól, a 3 személyes 497 890 Ft-tól, a sarokkanapé 367 340 Ft-tól (Cannes) illetve 735 515 Ft-tól (kollekciós), a fotel 324 380 Ft-tól indul alap szövettel. Valódi bőrrel a 2 személyes 619 750 Ft-tól. Ezek tájékoztató, alapkonfigurációs árak; a pontos árat a méret és a kárpit ismeretében 2 napon belül adjuk.",
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

export default function KanapeArakPage() {
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
    numberOfItems: ROWS.length + 1,
    itemListElement: [
      ...ROWS.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `${r.name} kanapé`,
          url: `${BASE}${r.href}`,
          brand: { "@type": "Brand", name: "Enzo Design" },
          offers: { "@type": "AggregateOffer", lowPrice: r.fotel[0], highPrice: r.sarok[1], priceCurrency: "HUF", offerCount: 8, availability: "https://schema.org/MadeToOrder", url: `${BASE}${r.href}` },
        },
      })),
      {
        "@type": "ListItem",
        position: ROWS.length + 1,
        item: {
          "@type": "Product",
          name: CANNES.name,
          url: `${BASE}${CANNES.href}`,
          brand: { "@type": "Brand", name: "Enzo Design" },
          offers: { "@type": "AggregateOffer", lowPrice: CANNES.sarok[0], highPrice: CANNES.sarok[1], priceCurrency: "HUF", offerCount: 2, availability: "https://schema.org/MadeToOrder", url: `${BASE}${CANNES.href}` },
        },
      },
    ],
  };

  const cell = (p: [number, number]) => (
    <td className="px-3 py-3 text-right tabular-nums whitespace-nowrap">
      <span className="block">{ft(p[0])}</span>
      <span className="block text-xs text-gray-500">bőr: {ft(p[1])}</span>
    </td>
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
            { l: "Fotel", v: "324 380 Ft-tól", h: "/butoraink/fotelek" },
            { l: "2 személyes kanapé", v: "399 810 Ft-tól", h: "/butoraink/kanapek" },
            { l: "3 személyes kanapé", v: "497 890 Ft-tól", h: "/butoraink/kanapek" },
            { l: "Sarokkanapé", v: "367 340 Ft-tól", h: "/sarokkanape" },
          ].map((k) => (
            <Link key={k.l} href={k.h} className="bg-[#f5f0ea] border border-gray-200 p-5 hover:border-[#7d6142] transition-colors">
              <p className="text-xs uppercase tracking-wide text-gray-500">{k.l}</p>
              <p className="mt-1 text-lg sm:text-xl font-bold text-[#7d6142] tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>{k.v}</p>
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
                {ROWS.map((r) => (
                  <tr key={r.name} className="border-b border-gray-100 hover:bg-[#f5f0e8]/60 align-top">
                    <td className="px-3 py-3"><Link href={r.href} className="font-semibold text-[#1c1c1c] hover:text-[#7d6142]">{r.name}</Link></td>
                    {cell(r.fotel)}{cell(r.ketto)}{cell(r.harom)}{cell(r.sarok)}
                    <td className="px-3 py-3 text-right tabular-nums whitespace-nowrap">{ft(r.agy)}</td>
                  </tr>
                ))}
                <tr className="border-b border-gray-100 hover:bg-[#f5f0e8]/60 align-top">
                  <td className="px-3 py-3"><Link href={CANNES.href} className="font-semibold text-[#1c1c1c] hover:text-[#7d6142]">Cannes</Link><span className="block text-xs text-gray-500">csak sarokkanapé</span></td>
                  <td className="px-3 py-3 text-right text-gray-300">–</td>
                  <td className="px-3 py-3 text-right text-gray-300">–</td>
                  <td className="px-3 py-3 text-right text-gray-300">–</td>
                  {cell(CANNES.sarok)}
                  <td className="px-3 py-3 text-right tabular-nums whitespace-nowrap">{ft(CANNES.agy)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Az árak tájékoztató jellegűek és az alapkonfigurációra vonatkoznak. Egyéni méret és anyagválasztás esetén az ár változhat. Gyártási idő: 4–6 hét. Garancia: 3 év (váz: 10 év). Székek 76 200 Ft-tól, kisfotelek 82 820 Ft-tól a <Link href="/butoraink/fotelek/tovabbi-fotelek" className="underline">további fotelek</Link> oldalon.
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
              { t: "Kis nappali", d: "2 személyes Chesterfield kanapé ágyfunkcióval, alap szövettel", v: ft(399810 + 190500), h: "/agyazhato-kanape" },
              { t: "Családi nappali", d: "Cannes sarokkanapé állítható fejtámlákkal, alap szövettel", v: ft(367340), h: "/sarokkanape" },
              { t: "Reprezentatív szalon", d: "Chesterfield 3-2-1 ülőgarnitúra valódi bőrrel", v: ft(847255 + 619750 + 421695), h: "/ulogarnitura" },
            ].map((e) => (
              <Link key={e.t} href={e.h} className="bg-white border border-gray-200 p-6 hover:border-[#7d6142] transition-colors block">
                <p className="text-xs uppercase tracking-wide text-gray-500">{e.t}</p>
                <p className="mt-2 text-gray-700 text-sm">{e.d}</p>
                <p className="mt-3 text-xl font-bold text-[#7d6142] tabular-nums" style={{ fontFamily: "var(--font-heading)" }}>{e.v}-tól</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
