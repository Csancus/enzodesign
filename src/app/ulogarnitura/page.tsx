import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QualitySection from "@/components/QualitySection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";
import StepsSection from "@/components/sections/StepsSection";
import { ft, getPricingMap } from "@/lib/productPricing";
import { resolveProductImages } from "@/lib/productImages";

const BASE = "https://www.enzodesign.hu";
const URL = `${BASE}/ulogarnitura`;

/** Árak és képek a termékoldalról öröklődnek (CMS-felülírással). Árat ide ne írj. */
const DEFS = [
  { pageId: "olds-club-kanapek", name: "Old's Club", style: "Karakteres, kerek formák", href: "/butoraink/kanapek/olds-club-kanapek", image: "/images/olds-club-a1.webp" },
  { pageId: "ivone-kanapek", name: "Ivone", style: "Puha, modern vonalak", href: "/butoraink/kanapek/ivone-kanapek", image: "/images/ivone-a1.webp" },
  { pageId: "design-kanapek", name: "Design", style: "Letisztult, kortárs", href: "/butoraink/kanapek/design-kanapek", image: "/images/design-a1.webp" },
  { pageId: "chesterfield-kanapek", name: "Chesterfield", style: "Klasszikus, gombolt", href: "/butoraink/kanapek/chesterfield-kanapek", image: "/images/chesterfield-a1.webp" },
  { pageId: "new-york-kanapek", name: "New York", style: "Elegáns, időtlen", href: "/butoraink/kanapek/new-york-kanapek", image: "/images/new-york-a1.webp" },
  { pageId: "joker-kanapek", name: "Joker", style: "Gáláns, magas háttámla", href: "/butoraink/kanapek/joker-kanapek", image: "/images/joker-a1.webp" },
];
const CANNES_DEF = { pageId: "cannes-kanapek", name: "Cannes", style: "Sarokkanapé, állítható fejtámla", href: "/butoraink/kanapek/cannes-kanapek", image: "/images/cannes-a1.webp" };

async function load() {
  const prices = await getPricingMap([...DEFS.map((d) => d.pageId), CANNES_DEF.pageId]);
  const collections = await Promise.all(
    DEFS.map(async (d) => {
      const p = prices[d.pageId];
      const imgs = await resolveProductImages(d.href, [d.image]);
      const fotel = p.fotel?.alap ?? 0, ketto = p.ketSzemelyes?.alap ?? 0, harom = p.haromSzemelyes?.alap ?? 0, sarok = p.sarok?.alap ?? 0;
      return { ...d, fotel, ketto, harom, sarok, agy: p.agyFunkcio ?? 0, szett: fotel && ketto && harom ? fotel + ketto + harom : 0, image: imgs[0] ?? d.image };
    }),
  );
  const cp = prices[CANNES_DEF.pageId];
  const cannesImgs = await resolveProductImages(CANNES_DEF.href, [CANNES_DEF.image]);
  const cannes = { ...CANNES_DEF, sarok: cp.sarok?.alap ?? 0, agy: cp.agyFunkcio ?? 0, image: cannesImgs[0] ?? CANNES_DEF.image };
  return { collections, cannes };
}
type Data = Awaited<ReturnType<typeof load>>;
const min = (xs: number[]) => Math.min(...xs.filter((n) => n > 0));

const summary = ({ collections, cannes }: Data) => {
  const agyMin = min([...collections.map((c) => c.agy), cannes.agy]);
  const agyMax = Math.max(...collections.map((c) => c.agy), cannes.agy);
  return {
    szettFrom: min(collections.map((c) => c.szett)),
    szettMax: Math.max(...collections.map((c) => c.szett)),
    sarokFrom: min([...collections.map((c) => c.sarok), cannes.sarok]),
    sarokKollekcio: min(collections.map((c) => c.sarok)),
    agyMin,
    agyMax,
    agyNote: agyMax > agyMin ? ` (Old's Club: ${ft(agyMax)})` : "",
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const s = summary(await load());
  return {
    title: "Ülőgarnitúra egyedi méretben – sarokkanapé, ágyazható kanapé gyártótól",
    description: `Ülőgarnitúra, sarokkanapé és ágyazható kanapé egyedi méretben, közvetlenül a nagykanizsai gyártótól. 3-2-1 szett ${ft(s.szettFrom)}-tól, sarokkanapé ${ft(s.sarokFrom)}-tól. 100+ szövet, bőr, 3+10 év garancia, országos szállítás.`,
    alternates: { canonical: URL },
    openGraph: {
      title: "Ülőgarnitúra egyedi méretben – sarokkanapé, ágyazható kanapé gyártótól | Enzo Design",
      description: "Ülőgarnitúra, sarokkanapé és ágyazható kanapé egyedi méretben a gyártótól. 100+ szövet, bőr, 3+10 év garancia.",
      url: URL,
      images: [{ url: "/images/olds-club-a1.webp", width: 1920, height: 800 }],
    },
  };
}

export default async function UlogarnituraPage() {
  const data = await load();
  const { collections, cannes } = data;
  const s = summary(data);

  const TYPES = [
    { title: "3-2-1 ülőgarnitúra", text: "A klasszikus szett: 3 személyes és 2 személyes kanapé egy fotellel, azonos szövetből vagy bőrből. Nagyobb nappaliba, ahol többen ülnek le egyszerre.", price: `${ft(s.szettFrom)}-tól`, note: "a legkedvezőbb kollekcióból, alap szövettel" },
    { title: "Sarokkanapé", text: "L alakú, jobb- vagy baloldali sarokkal, a fal hosszához méretezve. A Cannes állítható fejtámlával készül, a többi kollekció a saját stílusában.", price: `${ft(s.sarokFrom)}-tól`, note: `Cannes sarokkanapé; kollekciós sarok ${ft(s.sarokKollekcio)}-tól` },
    { title: "Ágyazható kanapé", text: "Bármelyik 2 vagy 3 személyes kanapénkhoz és sarokkanapéhoz kérhető ágyfunkció. Vendégágynak, kis lakásba, nyaralóba.", price: `+${ft(s.agyMin)}-tól`, note: `felár a választott kanapé árához${s.agyNote}` },
    { title: "U alakú és egyedi garnitúra", text: "Nagy családi nappaliba, panorámás térbe: U alak, dupla sarok, beépített puff, extra mély ülés. Rajz vagy fotó alapján megtervezzük.", price: "Egyedi ár", note: "árajánlat 2 napon belül" },
  ];

  const FAQ = [
    {
      q: "Mennyibe kerül egy ülőgarnitúra a gyártótól?",
      a: `A 3-2-1 ülőgarnitúra (3 személyes + 2 személyes kanapé + fotel) ${ft(s.szettFrom)}-tól készül alap kopásálló szövettel a legkedvezőbb kollekcióból, ${ft(s.szettMax)}-tól a legdrágábból. A sarokkanapé ${ft(s.sarokFrom)}-tól (Cannes), a kollekciós sarokkanapék ${ft(s.sarokKollekcio)}-tól indulnak. Bőrrel és egyedi mérettel az ár változik, ezért a pontos árajánlatot 2 napon belül küldjük.`,
    },
    { q: "Készül a sarokkanapé egyedi méretben?", a: "Igen. A sarokkanapé hosszát, a sarok irányát (jobb vagy bal), az ülésmélységet és a háttámla magasságát is a helyiséghez igazítjuk. Elég egy alaprajz vagy két méret, a többit megtervezzük." },
    { q: "Lehet ágyazható az ülőgarnitúra?", a: `Bármelyik kanapénkhoz és sarokkanapéhoz kérhető ágyfunkció ${ft(s.agyMin)}-tól${s.agyNote} felárral. Az ágyazható kanapé kihúzva alkalmi vendégágyként használható, a kárpit és a váz ugyanaz, mint a fix változatnál.` },
    { q: "Milyen szövetből és bőrből választhatok?", a: "Több mint 100 szövetszín közül választhatsz, 50 000 martindale kopásállósággal, ami családi és kisállatos használatra is elég. Valódi bőrből is készítjük. A mintákat a nagykanizsai bemutatóteremben megnézheted, vagy postán elküldjük." },
    { q: "Mennyi idő a gyártás és hogyan szállítjátok?", a: "A gyártás jellemzően 4–6 hét a méret és a szövet véglegesítésétől. Az egész országba házhoz szállítunk, a bútort a helyére visszük. Nagykanizsán és környékén saját autóval, távolabbra futárszolgálattal." },
    { q: "Milyen garancia jár az ülőgarnitúrára?", a: "3 év teljes körű garancia és 10 év a tömörfa vázra. Mivel saját üzemünkben készül, évek múlva is vállalunk javítást és átkárpitozást." },
  ];

  const STEPS = [
    { n: "1", title: "Méret és stílus", text: "Elküldöd a helyiség méretét vagy egy alaprajzot, és kiválasztod a kollekciót. Ha nem tudod, a Bútorválasztó segít." },
    { n: "2", title: "Szövet és árajánlat", text: "Szövet- vagy bőrmintát választasz, mi 2 napon belül konkrét árat adunk. Bemutatótermünkben ki is próbálhatod a modelleket." },
    { n: "3", title: "Gyártás és szállítás", text: "4–6 hét alatt elkészítjük Nagykanizsán, majd házhoz szállítjuk és a helyére tesszük az egész országban." },
  ];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ülőgarnitúrák és sarokkanapék egyedi méretben – Enzo Design",
    url: URL,
    numberOfItems: collections.length + 1,
    itemListElement: [
      ...collections.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `${c.name} ülőgarnitúra`,
          image: `${BASE}${c.image}`,
          url: `${BASE}${c.href}`,
          brand: { "@type": "Brand", name: "Enzo Design" },
          offers: { "@type": "AggregateOffer", lowPrice: min([c.fotel, c.ketto, c.harom, c.sarok]), highPrice: Math.max(c.fotel, c.ketto, c.harom, c.sarok), priceCurrency: "HUF", offerCount: 4, availability: "https://schema.org/MadeToOrder", url: `${BASE}${c.href}` },
        },
      })),
      {
        "@type": "ListItem",
        position: collections.length + 1,
        item: {
          "@type": "Product",
          name: "Cannes sarokkanapé",
          image: `${BASE}${cannes.image}`,
          url: `${BASE}${cannes.href}`,
          brand: { "@type": "Brand", name: "Enzo Design" },
          offers: { "@type": "Offer", price: cannes.sarok, priceCurrency: "HUF", availability: "https://schema.org/MadeToOrder", url: `${BASE}${cannes.href}` },
        },
      },
    ],
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE },
      { "@type": "ListItem", position: 2, name: "Bútoraink", item: `${BASE}/butoraink` },
      { "@type": "ListItem", position: 3, name: "Ülőgarnitúrák", item: URL },
    ],
  };

  const cell = (n: number, strong = false) => (
    <td className={`px-4 py-3 text-right tabular-nums ${strong ? "font-semibold text-[#7d6142]" : ""}`}>{n ? `${ft(n)}${strong ? "-tól" : ""}` : <span className="text-gray-300">–</span>}</td>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="relative bg-[#f5f0ea] py-16 sm:py-28 overflow-hidden">
        <Image src="/images/olds-club-a1.webp" alt="Ülőgarnitúra egyedi méretben az Enzo Design műhelyéből" fill priority sizes="100vw" className="object-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <nav className="text-xs text-gray-500 mb-4" aria-label="Morzsamenü">
            <Link href="/" className="hover:text-[#7d6142]">Főoldal</Link> / <Link href="/butoraink" className="hover:text-[#7d6142]">Bútoraink</Link> / <span className="text-[#7d6142]">Ülőgarnitúrák</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            Ülőgarnitúra egyedi méretben, közvetlenül a gyártótól
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            3-2-1 szett, sarokkanapé vagy ágyazható kanapé – a nappalid méretére szabva, 100+ szövetből vagy valódi bőrből, tömörfa vázzal. Nagykanizsán készül, az egész országba házhoz szállítjuk. 3+10 év garancia.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Ülőgarnitúra oldal – Kérek árajánlatot" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot
            </TrackedLink>
            <a href="#ulogarnitura-arak" className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kollekciók és árak
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#b8924a] py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[{ v: "100+", l: "szövetszín és bőr" }, { v: "4–6 hét", l: "gyártási idő" }, { v: "3+10 év", l: "garancia" }, { v: "2 nap", l: "árajánlat" }].map((x) => (
            <div key={x.l}>
              <p className="text-white font-bold text-xl">{x.v}</p>
              <p className="text-white/80 text-xs uppercase tracking-wider">{x.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TÍPUSOK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Milyen ülőgarnitúrát rendelhetsz?
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Nincs raktárról árusított, fix méretű bútor: minden garnitúrát a te helyiségedre gyártunk. Az alábbi négy forma a leggyakoribb kiindulás.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TYPES.map((t) => (
              <div key={t.title} className="border border-gray-200 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>{t.title}</h3>
                <p className="text-gray-600 mt-2 flex-1">{t.text}</p>
                <p className="mt-4 text-[#b8924a] font-semibold">
                  {t.price} <span className="text-gray-400 font-normal text-sm">– {t.note}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOLLEKCIÓK ÉS ÁRAK */}
      <section id="ulogarnitura-arak" className="py-20 bg-[#f5f0ea] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Kollekciók és induló árak
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Minden kollekcióból összeállítható teljes ülőgarnitúra: fotel, 2 és 3 személyes kanapé, sarokkanapé. Az árak alap szövettel, tájékoztató jellegűek.
          </p>
          <p className="md:hidden text-xs text-gray-400 mb-2">Húzd oldalra a táblázatot →</p>
          <div className="overflow-x-auto bg-white border border-gray-200">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-gray-500">
                  <th className="text-left px-4 py-3 border-b-2 border-[#b8924a]">Kollekció</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">Fotel</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">2 személyes</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">3 személyes</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">Sarokkanapé</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">3-2-1 szett</th>
                </tr>
              </thead>
              <tbody>
                {collections.map((c) => (
                  <tr key={c.pageId} className="border-b border-gray-100 hover:bg-[#f5f0e8]/60">
                    <td className="px-4 py-3">
                      <Link href={c.href} className="flex items-center gap-3 group">
                        <span className="relative w-14 h-10 shrink-0 overflow-hidden bg-[#f5f0ea]">
                          <Image src={c.image} alt={`${c.name} ülőgarnitúra`} fill sizes="56px" className="object-cover" />
                        </span>
                        <span>
                          <span className="font-semibold text-[#1c1c1c] group-hover:text-[#7d6142] block">{c.name}</span>
                          <span className="text-xs text-gray-500">{c.style}</span>
                        </span>
                      </Link>
                    </td>
                    {cell(c.fotel)}{cell(c.ketto)}{cell(c.harom)}{cell(c.sarok)}{cell(c.szett, true)}
                  </tr>
                ))}
                <tr className="border-b border-gray-100 hover:bg-[#f5f0e8]/60">
                  <td className="px-4 py-3">
                    <Link href={cannes.href} className="flex items-center gap-3 group">
                      <span className="relative w-14 h-10 shrink-0 overflow-hidden bg-[#f5f0ea]">
                        <Image src={cannes.image} alt="Cannes sarokkanapé állítható fejtámlával" fill sizes="56px" className="object-cover" />
                      </span>
                      <span>
                        <span className="font-semibold text-[#1c1c1c] group-hover:text-[#7d6142] block">{cannes.name}</span>
                        <span className="text-xs text-gray-500">{cannes.style}</span>
                      </span>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-300">–</td>
                  <td className="px-4 py-3 text-right text-gray-300">–</td>
                  <td className="px-4 py-3 text-right text-gray-300">–</td>
                  {cell(cannes.sarok, true)}
                  <td className="px-4 py-3 text-right text-gray-300">–</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Ágyfunkció bármelyik kanapéhoz +{ft(s.agyMin)}-tól{s.agyNote}. Valódi bőr kivitel és egyedi méret esetén az ár eltér; a pontos árajánlatot 2 napon belül küldjük.
          </p>
          <p className="text-center mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
            <Link href="/butoraink/karpitoszovetek" className="text-[#b8924a] underline">Szövetek, bőrök és színek →</Link>
            <Link href="/sarokkanape" className="text-[#b8924a] underline">Sarokkanapé egyedi méretben →</Link>
            <Link href="/agyazhato-kanape" className="text-[#b8924a] underline">Ágyazható kanapé →</Link>
            <Link href="/borkanape" className="text-[#b8924a] underline">Bőrkanapé →</Link>
            <Link href="/kanape-arak" className="text-[#b8924a] underline">Kanapé árak →</Link>
          </p>
        </div>
      </section>

      {/* MIÉRT GYÁRTÓTÓL */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Miért a gyártótól rendelj ülőgarnitúrát?
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Nincs kereskedői ár: a nagykanizsai üzemünkből egyenesen hozzád kerül.",
                "A méret a tiéd, nem a katalógusé: hosszúság, ülésmélység, sarokirány, ágyfunkció.",
                "Tömörfa váz, 50 000 martindale szövet vagy valódi bőr – 3 év teljes és 10 év vázgarancia.",
                "Egy kézben a tervezés, gyártás és szállítás, ezért évek múlva is javítjuk, átkárpitozzuk.",
                "Közel 20 év, több ezer elkészült kanapé és garnitúra.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" className="inline-block mt-6 text-sm text-[#b8924a] underline">
              Miért éri meg közvetlenül a bútorgyártótól vásárolni? →
            </Link>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/ivone-a1.webp" alt="Ivone ülőgarnitúra egyedi szövettel" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* LÉPÉSEK */}
      <section className="py-16 bg-[#f5f0ea]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-10 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Így rendelsz ülőgarnitúrát tőlünk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((x) => (
              <div key={x.n} className="bg-white border border-gray-200 p-6">
                <p className="text-[#b8924a] text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{x.n}</p>
                <h3 className="text-lg font-bold text-[#1c1c1c] mt-2">{x.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{x.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <Link href="/rendeles-menete" className="text-[#b8924a] underline">A rendelés menete részletesen →</Link>
            <Link href="/butorvalaszto" className="text-[#b8924a] underline">Bútorválasztó: melyik stílus illik hozzád? →</Link>
          </p>
        </div>
      </section>

      <StepsSection moduleId="home:steps" isAdmin={false} />
      <QualitySection />

      {/* GYIK */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Gyakori kérdések az ülőgarnitúráról
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
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Ülőgarnitúra oldal – alsó CTA" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot ülőgarnitúrára
            </TrackedLink>
          </div>
        </div>
      </section>

      <QuoteSlider />
      <ContactFormSection />
    </>
  );
}
