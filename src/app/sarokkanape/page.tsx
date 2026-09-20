import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";

const BASE = "https://www.enzodesign.hu";
const URL = `${BASE}/sarokkanape`;

export const metadata: Metadata = {
  title: "Sarokkanapé egyedi méretben – gyártótól, 367 340 Ft-tól",
  description:
    "Sarokkanapé egyedi méretben, jobb- vagy baloldali sarokkal, ágyazható kivitelben is. Cannes sarokkanapé 367 340 Ft-tól, Chesterfield sarok 735 515 Ft-tól. Tömörfa váz, 100+ szövet, bőr, 3+10 év garancia, országos szállítás a nagykanizsai gyártótól.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Sarokkanapé egyedi méretben – gyártótól, 367 340 Ft-tól | Enzo Design",
    description: "Sarokkanapé a helyiséghez méretezve, jobb- vagy baloldali sarokkal, ágyazható kivitelben is. Közvetlenül a gyártótól.",
    url: URL,
    images: [{ url: "/images/cannes-w1.webp", width: 1920, height: 800 }],
  },
};

const ft = (n: number) => `${n.toLocaleString("hu-HU").replace(/ /g, " ")} Ft`;

/** Alap (szövet) és bőr árak a termékoldalakról – ha ott változik, itt is frissítendő. */
const MODELS = [
  { name: "Cannes sarokkanapé", style: "Modern, állítható fejtámlákkal, tágas ülőfelület", alap: 367340, bor: 787740, agy: 190500, href: "/butoraink/kanapek/cannes-kanapek", image: "/images/cannes-a1.webp", alt: "Cannes sarokkanapé állítható fejtámlákkal" },
  { name: "Chesterfield sarokkanapé", style: "Klasszikus, kézzel gombolt háttámla, ívelt karfa", alap: 735515, bor: 1156170, agy: 190500, href: "/butoraink/kanapek/chesterfield-kanapek", image: "/images/chesterfield-a3.webp", alt: "Chesterfield sarokkanapé gombolt háttámlával" },
  { name: "New York sarokkanapé", style: "Elegáns, időtlen vonalak", alap: 735515, bor: 1156170, agy: 190500, href: "/butoraink/kanapek/new-york-kanapek", image: "/images/new-york-a1.webp", alt: "New York sarokkanapé" },
  { name: "Joker sarokkanapé", style: "Magas háttámla, gáláns megjelenés", alap: 735515, bor: 1156170, agy: 190500, href: "/butoraink/kanapek/joker-kanapek", image: "/images/joker-a1.webp", alt: "Joker sarokkanapé" },
  { name: "Old's Club sarokkanapé", style: "Karakteres, kerek formák", alap: 817240, bor: 1262412, agy: 210000, href: "/butoraink/kanapek/olds-club-kanapek", image: "/images/olds-club-a1.webp", alt: "Old's Club sarokkanapé" },
  { name: "Ivone sarokkanapé", style: "Puha, modern vonalak", alap: 817240, bor: 1262412, agy: 190500, href: "/butoraink/kanapek/ivone-kanapek", image: "/images/ivone-a1.webp", alt: "Ivone sarokkanapé" },
  { name: "Design sarokkanapé", style: "Letisztult, kortárs", alap: 817240, bor: 1262412, agy: 190500, href: "/butoraink/kanapek/design-kanapek", image: "/images/design-a1.webp", alt: "Design sarokkanapé" },
];

const FAQ = [
  {
    q: "Mennyibe kerül egy egyedi sarokkanapé?",
    a: "A Cannes sarokkanapé 367 340 Ft-tól, a Chesterfield, New York és Joker sarokkanapé 735 515 Ft-tól, az Old's Club, Ivone és Design sarok 817 240 Ft-tól készül alap kopásálló szövettel. Valódi bőrrel 787 740 Ft-tól. Az ágyfunkció felára 190 500 Ft-tól. Az árak tájékoztató jellegűek, egyedi méretnél és szövetválasztásnál változnak; a pontos árajánlatot 2 napon belül küldjük.",
  },
  {
    q: "Jobbos vagy balos sarokkanapét kérjek?",
    a: "A sarok iránya attól függ, melyik oldalon van a fal vagy a hosszabb szabad rész. Szemből nézve, ha a hosszú fekvő rész jobbra esik, jobbos sarokkanapé kell. Ha nem vagy biztos benne, küldj egy alaprajzot vagy fotót, és mi megmondjuk.",
  },
  {
    q: "Mekkora lehet a sarokkanapé?",
    a: "Nincs szabvány méret: a két szár hosszát, az ülésmélységet és a háttámla magasságát a helyiséghez igazítjuk. Kis nappaliba 220×160 cm-es, nagy családi térbe 320×220 cm-es vagy U alakú kivitel is készül. Az ajtók és a lépcsőház méretét is figyelembe vesszük a szállításhoz.",
  },
  {
    q: "Lehet ágyazható a sarokkanapé?",
    a: "Igen. Bármelyik sarokkanapéhoz kérhető kihúzható ágymechanizmus, ami körülbelül 140×190 cm-es fekvőfelületet ad. A felár 190 500 Ft-tól indul, az Old's Club kollekciónál 210 000 Ft.",
  },
  {
    q: "Milyen szövetet érdemes választani sarokkanapéhoz?",
    a: "A sarokkanapét naponta és sokan használják, ezért 50 000 martindale kopásállóságú szövetet ajánlunk, több mint 100 színben. Kisállat és gyerek mellé a sűrű szövésű, könnyen tisztítható szövetek a jók; a bársony és a valódi bőr a nappali reprezentatív részébe.",
  },
  {
    q: "Mennyi idő alatt készül el és hogyan szállítjátok?",
    a: "4–6 hét a méret és a szövet véglegesítésétől. Az egész országba házhoz szállítjuk, az első zárt ajtóig. A sarokkanapé elemekből áll, így a lépcsőházban és a bejárati ajtón is átfér.",
  },
];

export default function SarokkanapePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sarokkanapék egyedi méretben – Enzo Design",
    url: URL,
    numberOfItems: MODELS.length,
    itemListElement: MODELS.map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: m.name,
        image: `${BASE}${m.image}`,
        url: `${BASE}${m.href}`,
        brand: { "@type": "Brand", name: "Enzo Design" },
        offers: { "@type": "AggregateOffer", lowPrice: m.alap, highPrice: m.bor, priceCurrency: "HUF", offerCount: 2, availability: "https://schema.org/MadeToOrder", url: `${BASE}${m.href}` },
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
      { "@type": "ListItem", position: 3, name: "Sarokkanapé", item: URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="relative bg-[#f5f0ea] py-16 sm:py-28 overflow-hidden">
        <Image src="/images/cannes-w1.webp" alt="Sarokkanapé egyedi méretben az Enzo Design műhelyéből" fill priority sizes="100vw" className="object-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <nav className="text-xs text-gray-500 mb-4" aria-label="Morzsamenü">
            <Link href="/" className="hover:text-[#7d6142]">Főoldal</Link> / <Link href="/butoraink/kanapek" className="hover:text-[#7d6142]">Kanapék</Link> / <span className="text-[#7d6142]">Sarokkanapé</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            Sarokkanapé egyedi méretben, a nappalid falához szabva
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Jobbos vagy balos sarok, a két szár hossza centire a helyiséghez, ágyfunkcióval is. Hét kollekcióból, tömörfa vázzal, 100+ szövetből vagy valódi bőrből, közvetlenül a nagykanizsai gyártótól. 367 340 Ft-tól.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Sarokkanapé oldal – Kérek árajánlatot" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot
            </TrackedLink>
            <a href="#sarokkanape-arak" className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Modellek és árak
            </a>
          </div>
        </div>
      </section>

      {/* MIÉRT EGYEDI */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Miért egyedi méretű sarokkanapét?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A bútoráruházi sarokkanapé fix méretű: vagy 20 centi kilóg a fal mellől, vagy nem fér el a radiátor és az ajtó között. Nálunk a méret a kiindulópont, nem a végeredmény.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "A két szár hosszát, az ülésmélységet és a háttámla magasságát te adod meg – vagy mi mérjük fel fotó és alaprajz alapján.",
                "Jobbos, balos, U alakú vagy nyitott végű (ottomános) kivitel.",
                "Kihúzható ágymechanizmus bármelyik modellhez, kb. 140×190 cm fekvőfelülettel.",
                "Tömörfa váz, 10 év vázgarancia; 50 000 martindale szövet vagy valódi bőr.",
                "Elemekből áll, ezért szűk lépcsőházba és panelbe is bevihető.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3]">
            <Image src="/images/e7ad8b_aca61fd0c27746da9f91a44377825085.webp" alt="Világosszürke U alakú sarokkanapé egyedi méretben, LED-világítással" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* MODELLEK ÉS ÁRAK */}
      <section id="sarokkanape-arak" className="py-20 bg-[#f5f0ea] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Sarokkanapé modellek és induló árak
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Alap kopásálló szövettel, illetve valódi bőrrel. Az árak tájékoztató jellegűek és az alapkonfigurációra vonatkoznak; egyedi méretnél és szövetválasztásnál változnak.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODELS.map((m) => (
              <Link key={m.name} href={m.href} className="group bg-white border border-gray-200 hover:border-[#7d6142] hover:shadow-md transition-all flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0ea]">
                  <Image src={m.image} alt={m.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#1c1c1c] group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{m.name}</h3>
                  <p className="text-gray-500 text-sm mt-1 flex-1">{m.style}</p>
                  <dl className="mt-3 text-sm space-y-1">
                    <div className="flex justify-between"><dt className="text-gray-500">Szövettel</dt><dd className="font-semibold text-[#7d6142] tabular-nums">{ft(m.alap)}-tól</dd></div>
                    <div className="flex justify-between"><dt className="text-gray-500">Valódi bőrrel</dt><dd className="font-semibold text-[#7d6142] tabular-nums">{ft(m.bor)}-tól</dd></div>
                    <div className="flex justify-between"><dt className="text-gray-500">+ ágyfunkció</dt><dd className="tabular-nums text-gray-700">{ft(m.agy)}</dd></div>
                  </dl>
                  <span className="text-[#7d6142] text-sm font-semibold mt-4 inline-block">A kollekció oldala →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MÉRETVÉTEL */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Hogyan add meg a méretet?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: "1", t: "Mérd le a falat", d: "A két fal hosszát, ahová a sarok kerül, és jelöld be az ajtót, ablakot, radiátort. Egy telefonnal készített fotó és két szám elég." },
              { n: "2", t: "Válassz irányt és formát", d: "Jobbos vagy balos sarok, kell-e ágyfunkció, ottomán vég vagy U alak. Ha bizonytalan vagy, mi javaslunk a fotó alapján." },
              { n: "3", t: "Szövet és árajánlat", d: "Kiválasztod a kollekciót és a szövetet (mintát postázunk), mi 2 napon belül konkrét árat adunk. Gyártás 4–6 hét, szállítás házhoz." },
            ].map((s) => (
              <div key={s.n} className="bg-[#f5f0ea] border border-gray-200 p-6">
                <p className="text-[#b8924a] text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{s.n}</p>
                <h3 className="text-lg font-bold text-[#1c1c1c] mt-2">{s.t}</h3>
                <p className="text-gray-600 text-sm mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GYIK */}
      <section className="py-16 bg-[#f5f0ea]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Gyakori kérdések a sarokkanapéról
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
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Sarokkanapé oldal – alsó CTA" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot sarokkanapéra
            </TrackedLink>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/agyazhato-kanape" className="text-[#b8924a] underline">Ágyazható kanapé</Link>
            <Link href="/borkanape" className="text-[#b8924a] underline">Bőrkanapé</Link>
            <Link href="/ulogarnitura" className="text-[#b8924a] underline">Ülőgarnitúra</Link>
            <Link href="/kanape-arak" className="text-[#b8924a] underline">Kanapé árak</Link>
          </p>
        </div>
      </section>

      <QuoteSlider />
      <ContactFormSection />
    </>
  );
}
