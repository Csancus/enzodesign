import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";

const BASE = "https://www.enzodesign.hu";
const URL = `${BASE}/agyazhato-kanape`;

export const metadata: Metadata = {
  title: "Ágyazható kanapé egyedi méretben – gyártótól, 590 310 Ft-tól",
  description:
    "Ágyazható kanapé kihúzható ágymechanizmussal, kb. 140×190 cm fekvőfelülettel, 2 és 3 személyes vagy sarok kivitelben. 590 310 Ft-tól alap szövettel, közvetlenül a nagykanizsai gyártótól. Tömörfa váz, 100+ szövet, bőr, 3+10 év garancia.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Ágyazható kanapé egyedi méretben – gyártótól | Enzo Design",
    description: "Kihúzható ágymechanizmus bármelyik kollekciónkhoz, kb. 140×190 cm fekvőfelület. Egyedi méretben, a gyártótól.",
    url: URL,
    images: [{ url: "/images/chesterfield-a5.webp", width: 1920, height: 800 }],
  },
};

const ft = (n: number) => `${n.toLocaleString("hu-HU").replace(/ /g, " ")} Ft`;

/** Kanapé alap (szövet) ár + ágyfunkció felár a termékoldalakról – ha ott változik, itt is frissítendő. */
const MODELS = [
  { name: "Chesterfield", ketto: 399810, harom: 497890, sarok: 735515, agy: 190500, href: "/butoraink/kanapek/chesterfield-kanapek", image: "/images/chesterfield-a5.webp", alt: "Ágyazható Chesterfield kanapé" },
  { name: "New York", ketto: 399810, harom: 497890, sarok: 735515, agy: 190500, href: "/butoraink/kanapek/new-york-kanapek", image: "/images/new-york-a1.webp", alt: "New York kanapé ágyfunkcióval" },
  { name: "Joker", ketto: 399810, harom: 497890, sarok: 735515, agy: 190500, href: "/butoraink/kanapek/joker-kanapek", image: "/images/joker-a1.webp", alt: "Joker kanapé ágyfunkcióval" },
  { name: "Old's Club", ketto: 444240, harom: 553210, sarok: 817240, agy: 210000, href: "/butoraink/kanapek/olds-club-kanapek", image: "/images/olds-club-a1.webp", alt: "Old's Club kanapé ágyfunkcióval" },
  { name: "Ivone", ketto: 444240, harom: 553210, sarok: 817240, agy: 190500, href: "/butoraink/kanapek/ivone-kanapek", image: "/images/ivone-a1.webp", alt: "Ivone kanapé ágyfunkcióval" },
  { name: "Design", ketto: 444240, harom: 553210, sarok: 817240, agy: 190500, href: "/butoraink/kanapek/design-kanapek", image: "/images/design-a1.webp", alt: "Design kanapé ágyfunkcióval" },
  { name: "Cannes sarok", ketto: 0, harom: 0, sarok: 367340, agy: 190500, href: "/butoraink/kanapek/cannes-kanapek", image: "/images/cannes-a1.webp", alt: "Cannes ágyazható sarokkanapé" },
];

const FAQ = [
  {
    q: "Mennyibe kerül egy ágyazható kanapé?",
    a: "A kanapé árához jön az ágyfunkció felára: 190 500 Ft-tól (az Old's Club kollekciónál 210 000 Ft). Így a 2 személyes ágyazható Chesterfield, New York vagy Joker kanapé 590 310 Ft-tól, az ágyazható Cannes sarokkanapé 557 840 Ft-tól indul alap szövettel. Az árak tájékoztató jellegűek; egyedi méretnél, bőrnél és szövetválasztásnál változnak, a pontos árajánlatot 2 napon belül küldjük.",
  },
  {
    q: "Mekkora a fekvőfelület?",
    a: "A kihúzott ágymechanizmus körülbelül 140×190 cm-es, két személyes fekvőfelületet ad. Egyedi méretű kanapénál a fekvőfelület is ehhez igazodik; ha rendszeres alvásra kell, a méretezésnél ezt előre jelezd, hogy a váz és a mechanizmus ehhez készüljön.",
  },
  {
    q: "Mindennapi alvásra alkalmas?",
    a: "Az ágyazható kanapé elsősorban vendégágy és alkalmi alvóhely, ezt őszintén mondjuk. Ha valaki minden éjjel rajta alszik, kérj hozzá keményebb ülés-habot és a méretezésnél teljes értékű fekvőfelületet; ilyen kérésre is készítünk, csak előre kell tudnunk.",
  },
  {
    q: "Melyik kollekcióhoz kérhető ágyfunkció?",
    a: "Mindegyikhez: Chesterfield, New York, Joker, Old's Club, Ivone és Design kollekció 2 és 3 személyes kanapéihoz és sarokkanapéihoz, valamint a Cannes sarokkanapéhoz. A mechanizmus a kárpit alatt van, kihajtva sem látszik a bútor stílusán.",
  },
  {
    q: "Látszik a mechanizmus, romlik tőle a kényelem?",
    a: "Nem. Ülőkanapéként ugyanolyan, mint a fix változat: a mechanizmus az ülőrész alatt, a tömörfa vázban van elrejtve. Az ülésmagasság és a háttámla nem változik, a kihúzás egy mozdulattal, szerszám nélkül megy.",
  },
  {
    q: "Mennyi a gyártási idő és hogyan szállítjátok?",
    a: "4–6 hét a méret és a szövet véglegesítésétől. Az egész országba házhoz szállítjuk, az első zárt ajtóig. Garancia: 3 év a kárpitra, 10 év a vázra.",
  },
];

export default function AgyazhatoKanapePage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Ágyazható kanapék egyedi méretben – Enzo Design",
    url: URL,
    numberOfItems: MODELS.length,
    itemListElement: MODELS.map((m, i) => {
      const low = (m.ketto || m.sarok) + m.agy;
      const high = m.sarok + m.agy;
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: `Ágyazható ${m.name} kanapé`,
          image: `${BASE}${m.image}`,
          url: `${BASE}${m.href}`,
          brand: { "@type": "Brand", name: "Enzo Design" },
          offers: { "@type": "AggregateOffer", lowPrice: low, highPrice: high, priceCurrency: "HUF", offerCount: m.ketto ? 3 : 1, availability: "https://schema.org/MadeToOrder", url: `${BASE}${m.href}` },
        },
      };
    }),
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Főoldal", item: BASE },
      { "@type": "ListItem", position: 2, name: "Kanapék", item: `${BASE}/butoraink/kanapek` },
      { "@type": "ListItem", position: 3, name: "Ágyazható kanapé", item: URL },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* HERO */}
      <section className="relative bg-[#f5f0ea] py-16 sm:py-28 overflow-hidden">
        <Image src="/images/chesterfield-a5.webp" alt="Ágyazható kanapé az Enzo Design műhelyéből" fill priority sizes="100vw" className="object-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <nav className="text-xs text-gray-500 mb-4" aria-label="Morzsamenü">
            <Link href="/" className="hover:text-[#7d6142]">Főoldal</Link> / <Link href="/butoraink/kanapek" className="hover:text-[#7d6142]">Kanapék</Link> / <span className="text-[#7d6142]">Ágyazható kanapé</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            Ágyazható kanapé egyedi méretben, kihúzható ágymechanizmussal
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nappal kanapé, éjjel kb. 140×190 cm-es vendégágy. Bármelyik kollekciónkhoz kérhető, 2 és 3 személyes vagy sarok kivitelben, a helyiséghez méretezve. Tömörfa váz, 100+ szövet vagy valódi bőr, közvetlenül a nagykanizsai gyártótól. 590 310 Ft-tól.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Ágyazható oldal – Kérek árajánlatot" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot
            </TrackedLink>
            <a href="#agyazhato-arak" className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kollekciók és árak
            </a>
          </div>
        </div>
      </section>

      {/* HOGYAN MŰKÖDIK */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] order-last md:order-first">
            <Image src="/images/chesterfield-a5.webp" alt="Ágyazható Chesterfield kanapé nappaliban" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Hogyan működik az ágyazható kanapénk?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Az ülőrész alá kihúzható ágymechanizmust építünk, ami egy mozdulattal nyílik, és kb. 140×190 cm-es, két személyes fekvőfelületet ad. Összecsukva semmi nem látszik belőle: a kanapé kívülről ugyanaz, mint a fix változat.
            </p>
            <ul className="space-y-3 text-gray-700">
              {[
                "Bármelyik kollekció 2 és 3 személyes kanapéjához és sarokkanapéjához kérhető.",
                "Az ülésmagasság, a háttámla és a karfa nem változik az ágyfunkciótól.",
                "Tömörfa váz, 10 év vázgarancia – a mechanizmus is ebbe van beépítve.",
                "50 000 martindale kopásállóságú szövet vagy valódi bőr, 100+ színben.",
                "Egyedi méret: a fekvőfelület is a te kanapédhoz igazodik.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/blog/agyazhato-chesterfield-kanape" className="inline-block mt-6 text-sm text-[#b8924a] underline">
              Cikk: ágyazható Chesterfield kanapé – vendégágy és stílus egyben →
            </Link>
          </div>
        </div>
      </section>

      {/* ÁRAK */}
      <section id="agyazhato-arak" className="py-20 bg-[#f5f0ea] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Ágyazható kanapé árak kollekciónként
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Kanapé alap szövettel + ágyfunkció felár. Tájékoztató árak az alapkonfigurációra; egyedi méret, bőr és szövetválasztás módosítja.
          </p>
          <p className="md:hidden text-xs text-gray-400 mb-2">Húzd oldalra a táblázatot →</p>
          <div className="overflow-x-auto bg-white border border-gray-200">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="text-xs uppercase tracking-wide text-gray-500">
                  <th className="text-left px-4 py-3 border-b-2 border-[#b8924a]">Kollekció</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">Ágyfunkció felár</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">2 személyes ágyazható</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">3 személyes ágyazható</th>
                  <th className="text-right px-4 py-3 border-b-2 border-[#b8924a]">Ágyazható sarok</th>
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
                        <span className="font-semibold text-[#1c1c1c] group-hover:text-[#7d6142]">{m.name}</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">+{ft(m.agy)}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{m.ketto ? `${ft(m.ketto + m.agy)}-tól` : <span className="text-gray-300">–</span>}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{m.harom ? `${ft(m.harom + m.agy)}-tól` : <span className="text-gray-300">–</span>}</td>
                    <td className="px-4 py-3 text-right tabular-nums font-semibold text-[#7d6142]">{ft(m.sarok + m.agy)}-tól</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Valódi bőrrel a kanapé ára magasabb, lásd a kollekciók oldalát vagy a <Link href="/kanape-arak" className="underline">kanapé árak</Link> összefoglalót.
          </p>
        </div>
      </section>

      {/* KINEK */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Kinek való az ágyazható kanapé?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Vendégszoba nélküli lakásba", d: "Ha nincs külön szoba a vendégeknek, a nappali kanapéja éjjel kétszemélyes ággyá alakul, nappal pedig nem látszik rajta semmi." },
              { t: "Nyaralóba, apartmanba", d: "A Balaton-parti és falusi vendégházakban ez a leggyakoribb kérés: több fekvőhely ugyanannyi négyzetméteren, strapabíró, tisztítható szövettel." },
              { t: "Kis lakásba, garzonba", d: "Egy 2 személyes ágyazható kanapé egyedi méretben pontosan a fal hosszához készül, így nem kell külön ágy és külön kanapé." },
            ].map((s) => (
              <div key={s.t} className="bg-[#f5f0ea] border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-[#1c1c1c]">{s.t}</h3>
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
            Gyakori kérdések az ágyazható kanapéról
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
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Ágyazható oldal – alsó CTA" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot ágyazható kanapéra
            </TrackedLink>
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link href="/sarokkanape" className="text-[#b8924a] underline">Sarokkanapé</Link>
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
