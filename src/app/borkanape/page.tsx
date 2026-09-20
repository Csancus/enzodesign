import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";

const BASE = "https://www.enzodesign.hu";
const URL = `${BASE}/borkanape`;

export const metadata: Metadata = {
  title: "Bőrkanapé valódi bőrből, egyedi méretben – gyártótól, 619 750 Ft-tól",
  description:
    "Bőrkanapé valódi, olasz bőrből, tömörfa vázzal, egyedi méretben. Chesterfield bőrkanapé 619 750 Ft-tól, bőr fotel 421 695 Ft-tól, bőr sarokkanapé 787 740 Ft-tól. Közvetlenül a nagykanizsai gyártótól, 3+10 év garancia, országos szállítás.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Bőrkanapé valódi bőrből, egyedi méretben – gyártótól | Enzo Design",
    description: "Valódi bőr, tömörfa váz, kézi kárpitozás. Chesterfield, Old's Club, Design és további kollekciók bőrből, egyedi méretben.",
    url: URL,
    images: [{ url: "/images/slide1.webp", width: 1920, height: 800 }],
  },
};

const ft = (n: number) => `${n.toLocaleString("hu-HU").replace(/ /g, " ")} Ft`;

/** Valódi bőr árak a termékoldalakról (Old's Club: a CMS-ben tárolt ár) – ha ott változik, itt is frissítendő. */
const MODELS = [
  { name: "Chesterfield", style: "Kézzel gombolt, a bőrkanapé klasszikusa", fotel: 421695, ketto: 619750, harom: 847255, sarok: 1156170, href: "/butoraink/kanapek/chesterfield-kanapek", image: "/images/slide1.webp", alt: "Barna bőr Chesterfield kanapé sárga díszpárnákkal" },
  { name: "New York", style: "Elegáns, időtlen vonalak bőrben", fotel: 421695, ketto: 619750, harom: 847255, sarok: 1156170, href: "/butoraink/kanapek/new-york-kanapek", image: "/images/new-york-a1.webp", alt: "New York bőrkanapé" },
  { name: "Joker", style: "Magas háttámla, gáláns megjelenés", fotel: 421695, ketto: 619750, harom: 847255, sarok: 1156170, href: "/butoraink/kanapek/joker-kanapek", image: "/images/joker-a1.webp", alt: "Joker bőrkanapé" },
  { name: "Old's Club", style: "Karakteres, kerek formák, klubhangulat", fotel: 468545, ketto: 667510, harom: 919170, sarok: 1262412, href: "/butoraink/kanapek/olds-club-kanapek", image: "/images/popular-olds-club.webp", alt: "Barna bőr Old's Club kétszemélyes kanapé" },
  { name: "Ivone", style: "Puha, modern vonalak", fotel: 468545, ketto: 677510, harom: 919170, sarok: 1262412, href: "/butoraink/kanapek/ivone-kanapek", image: "/images/ivone-a1.webp", alt: "Ivone bőrkanapé" },
  { name: "Design", style: "Letisztult, kortárs bőrkanapé", fotel: 468545, ketto: 677510, harom: 919170, sarok: 1262412, href: "/butoraink/kanapek/design-kanapek", image: "/images/e7ad8b_a6ef192520f14d18bb7296848c319c17.webp", alt: "Barna bőr modern kanapé hengerpárnákkal" },
  { name: "Cannes sarok", style: "Modern sarokkanapé állítható fejtámlákkal", fotel: 0, ketto: 0, harom: 0, sarok: 787740, href: "/butoraink/kanapek/cannes-kanapek", image: "/images/cannes-a1.webp", alt: "Cannes bőr sarokkanapé" },
];

const FAQ = [
  {
    q: "Mennyibe kerül egy valódi bőrkanapé?",
    a: "A 2 személyes bőrkanapé 619 750 Ft-tól (Chesterfield, New York, Joker), a 3 személyes 847 255 Ft-tól, a bőr sarokkanapé 787 740 Ft-tól (Cannes) indul. A bőr fotel 421 695 Ft-tól készül. Az árak tájékoztató jellegűek, az alapkonfigurációra vonatkoznak; egyedi méretnél és bőrválasztásnál változnak, a pontos árajánlatot 2 napon belül küldjük.",
  },
  {
    q: "Valódi bőr vagy műbőr?",
    a: "Valódi bőr, ezen belül olasz bőrt is kínálunk. Műbőrt nem ajánlunk kanapéra, mert 3–5 év alatt repedezik és hámlik; a valódi bőr évtizedekig szép marad, és patinásodik. A bőrmintákat a nagykanizsai bemutatóteremben megnézheted, vagy postán elküldjük.",
  },
  {
    q: "Miért drágább a bőrkanapé a szövetnél?",
    a: "A bőr alapanyag ára többszöröse a szövetnek, és a szabása több munka: a bőr természetes hibáit ki kell kerülni, a gombolt Chesterfield-háttámlát pedig kézzel kell kialakítani. A váz és a rugózás ugyanaz, mint a szövetes változatnál, ezért az árkülönbség kizárólag a kárpitból adódik.",
  },
  {
    q: "Hogyan kell ápolni a bőrkanapét?",
    a: "Havonta egyszer száraz vagy enyhén nedves puha ronggyal letörölni, évente egyszer-kétszer bőrápolóval kezelni. Ne tedd radiátor vagy erős napsütés közelébe, mert kiszárad. Foltot azonnal itasd fel, ne dörzsöld. Ennyi kell ahhoz, hogy 15–20 évig szép maradjon.",
  },
  {
    q: "Kisállat és gyerek mellé jó a bőrkanapé?",
    a: "A bőr könnyen tisztítható, nem szívja be a szagokat, ezért gyerek mellé jó. Kutya- és macskakarom viszont nyomot hagy rajta; ilyenkor a sűrű szövésű, 50 000 martindale kopásállóságú szövetet ajánljuk inkább, vagy a bőrt a nappali kevésbé használt részére.",
  },
  {
    q: "Készül egyedi méretben és színben?",
    a: "Igen. A hossz, az ülésmélység és a karfa a helyiséghez igazítható, a bőr színe többféle barna, fekete, bézs és színes árnyalat közül választható. Gyártási idő 4–6 hét, garancia 3 év a kárpitra és 10 év a tömörfa vázra.",
  },
];

export default function BorkanapePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Bőrkanapék egyedi méretben – Enzo Design",
    url: URL,
    numberOfItems: MODELS.length,
    itemListElement: MODELS.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${m.name} bőrkanapé`,
        image: `${BASE}${m.image}`,
        url: `${BASE}${m.href}`,
        brand: { "@type": "Brand", name: "Enzo Design" },
        material: "Valódi bőr",
        offers: { "@type": "AggregateOffer", lowPrice: m.fotel || m.sarok, highPrice: m.sarok, priceCurrency: "HUF", offerCount: m.fotel ? 4 : 1, availability: "https://schema.org/MadeToOrder", url: `${BASE}${m.href}` },
      },
    })),
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE },
      { "@type": "ListItem", position: 2, name: "Kanapék", item: `${BASE}/butoraink/kanapek` },
      { "@type": "ListItem", position: 3, name: "Bőrkanapé", item: URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="relative bg-[#f5f0ea] py-16 sm:py-28 overflow-hidden">
        <Image src="/images/slide1.webp" alt="Barna bőr Chesterfield kanapé nappaliban" fill priority sizes="100vw" className="object-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <nav className="text-xs text-gray-500 mb-4" aria-label="Morzsamenü">
            <Link href="/" className="hover:text-[#7d6142]">Főoldal</Link> / <Link href="/butoraink/kanapek" className="hover:text-[#7d6142]">Kanapék</Link> / <span className="text-[#7d6142]">Bőrkanapé</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            Bőrkanapé valódi bőrből, egyedi méretben
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kézzel kárpitozott bőrkanapé és bőr fotel tömörfa vázon, olasz valódi bőrből. Chesterfield, Old&apos;s Club, Design és további kollekciók, a nappalidhoz méretezve, közvetlenül a nagykanizsai gyártótól. 2 személyes bőrkanapé 619 750 Ft-tól.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Bőrkanapé oldal – Kérek árajánlatot" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot
            </TrackedLink>
            <a href="#borkanape-arak" className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kollekciók és árak
            </a>
          </div>
        </div>
      </section>

      {/* MIÉRT BŐR */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3]">
            <Image src="/images/chesterfield-enzo.webp" alt="Bőr Chesterfield kanapé az Enzo Design nagykanizsai üzemében" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Miért valódi bőr, és miért a gyártótól?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A bőrkanapé az a bútor, amit nem 5, hanem 20 évre vesz az ember. Ezért nálunk a bőr alatt is ugyanaz a tömörfa váz és rugózás van, mint a legdrágább darabjainkban, és a bőrt kézzel szabjuk, hogy a természetes rajzolat a helyére kerüljön.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Valódi bőr, olasz bőr választékkal – műbőrt nem ajánlunk.",
                "Tömörfa váz, 10 év vázgarancia, 3 év kárpitgarancia.",
                "Egyedi hossz, ülésmélység, karfa; jobbos vagy balos sarok.",
                "Bőr fotel, 2 és 3 személyes kanapé, sarokkanapé és zsámoly egy garnitúrában, azonos bőrből.",
                "Nincs kereskedői árrés: a nagykanizsai üzemből egyenesen hozzád.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/blog/bor-fotel" className="inline-block mt-6 text-sm text-[#b8924a] underline">
              Cikk: bőr fotel – mire figyelj vásárlás előtt →
            </Link>
          </div>
        </div>
      </section>

      {/* ÁRAK */}
      <section id="borkanape-arak" className="py-20 bg-[#f5f0ea] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Bőrkanapé és bőr fotel árak kollekciónként
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Valódi bőrrel, tájékoztató árak az alapkonfigurációra. Egyedi méret és bőrválasztás módosítja; a pontos árajánlatot 2 napon belül küldjük.
          </p>
          <p className="md:hidden text-xs text-gray-400 mb-2">Húzd oldalra a táblázatot →</p>
          <div className="overflow-x-auto bg-white border border-gray-200">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-gray-500">
                  <th className="text-left px-4 py-3 border-b-2 border-[#b8924a]">Kollekció</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">Bőr fotel</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">2 személyes</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">3 személyes</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">Sarokkanapé</th>
                </tr>
              </thead>
              <tbody>
                {MODELS.map((m) => (
                  <tr key={m.name} className="border-b border-gray-100 hover:bg-[#f5f0e8]/60">
                    <td className="px-4 py-3">
                      <Link href={m.href} className="flex items-center gap-3 group">
                        <span className="relative w-14 h-10 shrink-0 overflow-hidden bg-[#f5f0ea]">
                          <Image src={m.image} alt={m.alt} fill sizes="56px" className="object-cover" />
                        </span>
                        <span>
                          <span className="font-semibold text-[#1c1c1c] group-hover:text-[#7d6142] block">{m.name}</span>
                          <span className="text-xs text-gray-500">{m.style}</span>
                        </span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">{m.fotel ? `${ft(m.fotel)}-tól` : <span className="text-gray-300">–</span>}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{m.ketto ? `${ft(m.ketto)}-tól` : <span className="text-gray-300">–</span>}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{m.harom ? `${ft(m.harom)}-tól` : <span className="text-gray-300">–</span>}</td>
                    <td className="px-4 py-3 text-right tabular-nums font-semibold text-[#7d6142]">{ft(m.sarok)}-tól</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Ágyfunkció bőrkanapéhoz is kérhető, 190 500 Ft-tól. Szövettel ugyanezek a modellek olcsóbbak, lásd a <Link href="/kanape-arak" className="underline">kanapé árak</Link> összefoglalót.
          </p>
        </div>
      </section>

      {/* BŐR VS SZÖVET */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Bőr vagy szövet? Így döntsd el
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f0ea] border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-[#1c1c1c]">Bőrkanapét válassz, ha…</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {["évtizedekre vásárolsz, és jó, ha a bútor patinásodik", "könnyen tisztítható, szagot nem szívó felület kell (gyerek, allergia)", "reprezentatív nappalit, dolgozószobát, irodát rendezel be", "klasszikus Chesterfield vagy klubhangulatú Old's Club a cél"].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-[#b8924a]">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f5f0ea] border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-[#1c1c1c]">Szövetet válassz, ha…</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {["kutya vagy macska is használja a kanapét", "meleg tapintás és színes, bársonyos felület kell", "alacsonyabb az induló költségkeret – ugyanaz a váz, olcsóbb kárpit", "több mint 100 szín közül akarsz választani"].map((t) => (
                  <li key={t} className="flex items-start gap-2"><span className="text-[#b8924a]">✓</span><span>{t}</span></li>
                ))}
              </ul>
              <Link href="/butoraink/karpitoszovetek" className="inline-block mt-4 text-sm text-[#b8924a] underline">Kárpitszövetek és bőrök megtekintése →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GYIK */}
      <section className="py-16 bg-[#f5f0ea]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Gyakori kérdések a bőrkanapéról
          </h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="group bg-white border border-gray-200 p-5">
                <summary className="cursor-pointer font-semibold text-[#1c1c1c] list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-[#b8924a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Bőrkanapé oldal – alsó CTA" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot bőrkanapéra
            </TrackedLink>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/sarokkanape" className="text-[#b8924a] underline">Sarokkanapé</Link>
            <Link href="/agyazhato-kanape" className="text-[#b8924a] underline">Ágyazható kanapé</Link>
            <Link href="/chesterfield" className="text-[#b8924a] underline">Chesterfield</Link>
            <Link href="/kanape-arak" className="text-[#b8924a] underline">Kanapé árak</Link>
          </p>
        </div>
      </section>

      <QuoteSlider />
      <ContactFormSection />
    </>
  );
}
