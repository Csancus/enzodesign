import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Chesterfield puff – elegáns zsámoly a nappaliba | Enzo Design",
  description: "A Chesterfield puff egyszerre lábzsámoly, extra ülőhely és dekorációs elem. Egyedi méretben, bőrben vagy szövetben, tömörfa szerkezettel – közvetlenül a gyártótól.",
  alternates: { canonical: "https://enzodesign.hu/blog/chesterfield-puff" },
  openGraph: {
    title: "Chesterfield puff – elegáns zsámoly a nappaliba",
    description: "A Chesterfield puff egyszerre lábzsámoly, extra ülőhely és dekorációs elem. Egyedi méretben, bőrben vagy szövetben, tömörfa szerkezettel – közvetlenül a gyártótól.",
    url: "https://enzodesign.hu/blog/chesterfield-puff",
    images: [{ url: "/images/szek-w5.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Chesterfield puff – elegáns zsámoly a nappaliba",
  "description": "A Chesterfield puff egyszerre lábzsámoly, extra ülőhely és dekorációs elem. Egyedi méretben, bőrben vagy szövetben, tömörfa szerkezettel.",
  "image": "https://www.enzodesign.hu/images/szek-w5.webp",
  "datePublished": "2026-06-23",
  "dateModified": "2026-06-23",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/chesterfield-puff",
  "wordCount": 560,
  "articleSection": "Chesterfield bútorok",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/chesterfield-puff" },
};

export default async function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <div>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-[#b8924a]">Chesterfield puff</span>
          </div>
        </div>
      </nav>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3 text-sm text-gray-500">
          <time dateTime="2026-06-23">2026. június 23.</time>
          <span aria-hidden="true">·</span>
          <span>3 perc olvasás</span>
        </div>
      </div>

      <nav aria-label="Tartalomjegyzék" className="bg-[#f5f0e8] border-b border-[#e8ddd0]">
        <div className="max-w-3xl mx-auto px-4 py-5">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Tartalomjegyzék</p>
          <ol className="space-y-1">
            <li className="flex items-start gap-2 text-sm text-[#1c1c1c]"><span className="text-[#b8924a] font-bold min-w-[1.5rem]">1.</span><span>Mi a Chesterfield puff?</span></li>
            <li className="flex items-start gap-2 text-sm text-[#1c1c1c]"><span className="text-[#b8924a] font-bold min-w-[1.5rem]">2.</span><span>Mire jó a puff a nappaliban?</span></li>
            <li className="flex items-start gap-2 text-sm text-[#1c1c1c]"><span className="text-[#b8924a] font-bold min-w-[1.5rem]">3.</span><span>Anyagok, méretek, rendelés</span></li>
            <li className="flex items-start gap-2 text-sm text-[#1c1c1c]"><span className="text-[#b8924a] font-bold min-w-[1.5rem]">4.</span><span>GYIK – Chesterfield puff</span></li>
          </ol>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:chesterfield-puff"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Chesterfield puff – elegáns zsámoly a nappaliba",
              subtitle: "A Chesterfield puff az egyik legtöbbféleképpen használható bútordarab, amit megvehetsz. Lábzsámoly, extra ülőhely, dohányzóasztal-helyettes – és mindeközben a nappalid egyik legszebb dísze.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/szek-w5.webp",
              alt: "Chesterfield puff – kárpitozott zsámoly elegáns nappaliban",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Mi a Chesterfield puff?",
              body: "A Chesterfield puff (más néven Chesterfield zsámoly vagy ottoman) a klasszikus Chesterfield stílus kompakt változata. Jellegzetessége a mély gombolt kárpitozás – ugyanaz a technika, ami a kanapékat és foteleket is ikonikus megjelenésükkel ruházza fel.\n\nMíg a hagyományos kanapénál a gombolás a hát- és kartámaszon látható, a puffnál az ülőfelület tetejét díszíti. Az eredmény: egy tömör, elegáns tárgy, amely önmagában is figyelmet érdemel.\n\nA Chesterfield puff főbb jellemzői:\nMély gombolt kárpitozás az ülőfelületen\nTömörfa láb – általában sötét, fényes kivitelben\nPremi szövet vagy valódi bőr borítás\nEgyedi méretben rendelhető\nIllik a Chesterfield kanapé és fotel mellé, de önállóan is megállja a helyét",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/chesterfield-a1.webp",
              alt: "Chesterfield stílusú kárpitozott bútor részlet – gombolt technika",
              height: "360",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Mire jó a puff a nappaliban?",
              body: "A puff igazi multifunkcionális bútor – attól függően, hogyan helyezed el, egészen más szerepet tölthet be.\n\nLábzsámoly – a fotel vagy kanapé előtt elhelyezve azonnal növeli a kényelmet: pihentesd rajta a lábad, miközben az ülőbútor mélyen tartja a tested.\n\nExtra ülőhely – vendégek érkezésekor azonnal mobilizálható, nem vesz el sok helyet, és nem lóg ki az enteriőrből.\n\nDohányzóasztal-helyettes – egy kerek vagy szögletes tálca ráfektetve máris stabil felületet ad italnak, könyvnek, távirányítónak.\n\nDekorációs fókuszpont – a helyiség közepén, egy szőnyegen elhelyezve önálló hangsúlyos elem lesz, amely köré szervezhető a bútorozás.\n\nHol a legjobb elhelyezni?\nChesterfield kanapé elé – matching set hatás, összefogott enteriőr\nFotel mellé vagy elé – lábzsámoly funkcióban\nÁgy tövébe – hálószobában is elegáns megoldás\nDolgozo sarokba – kiegészítő ülőhely, ami nem foglal sok helyet",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Anyagok, méretek, rendelés",
              body: "Az Enzo Design Chesterfield puffjai egyedileg készülnek – méretük, kárpitjuk és színük szerint teljesen személyre szabhatók.\n\nMéretek\nA leggyakoribb méret 60×60 cm vagy 70×70 cm alaplappal, magassága 40–45 cm között mozog. Hosszúkás ottomán változat esetén 120×60 cm is lehetséges. Konkrét méretigénnyel rendelők esetén más méretet is vállalunk.\n\nAnyagok\nBársony – a legkeresettebb Chesterfield puff anyag; gazdag felület, intenzív szín\nMikroszálas bársony – könnyebben tisztítható, foltálló változat\nValódi bőr – luxus megjelenés, hosszú élettartam\nEco bőr – bőr hatású, gazdaságosabb alternatíva\nBútorvászon / textilszövet – visszafogottabb, skandináv stílushoz is illik\n\nSzínek\nA legkelendőbb árnyalatok Chesterfield puffhoz: mustársárga, smaragdzöld, sötétkék, homokbézs, grafit. De összesen 200+ féle kárpitból választhatsz – köztük mintásak is.\n\nGarancia\nMinden Enzo Design puffra 3 év garancia vonatkozik, a váz esetén 10 éves szavatossággal.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "GYIK – Chesterfield puff",
              body: "Mennyi idő alatt készül el egy Chesterfield puff?\nEgyedi megrendelés esetén általában 4–6 hét az átfutási idő. Készletről elérhető daraboknál ennél rövidebb is lehet.\n\nVan-e tisztítható Chesterfield puff?\nIgen – a mikroszálas és az eco bőr kivitel foltálló anyagból készül. Valódi bőr esetén speciális bőrápoló szükséges.\n\nRendelhető-e matching setben a kanapéval?\nAgen – a puffot ugyanabból az anyagból és színből rendelheted meg, mint a kanapét vagy fotelt. Így egységes, összehangolt enteriőrt kapsz.\n\nMekkora a szállítási idő?\nMagyarországra ingyenes szállítás, a kiszállítás a gyártást követő 1–2 héten belül történik.",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          { type: "contact" },
        ]}
      />

      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Termékek megtekintése</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/butoraink/szek-zsamoly-falvedo" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Zsámolyok és puffok →
            </Link>
            <Link href="/butoraink/fotelek" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Fotelek →
            </Link>
            <Link href="/chesterfield-kollekcio" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Chesterfield Kollekció →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
              { title: "Bőr fotel – időtálló kényelem", href: "/blog/bor-fotel" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="bg-white p-4 hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a]">
                {a.title} ›
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
