import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Ágyazható Chesterfield kanapé – vendégágy és stílus egyben",
  description: "Az ágyazható Chesterfield kanapé elegáns nappalit és kényelmes vendégágyat kínál egy bútorban. Személyre szabható, kézzel készített, 3+10 év garanciával. Enzo Design.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Ágyazható Chesterfield kanapé – vendégágy és stílus egyben",
  "description": "Az ágyazható Chesterfield kanapé elegáns nappalit és kényelmes vendégágyat kínál egy bútorban. Személyre szabható, kézzel készített, 3+10 év garanciával.",
  "image": "https://www.enzodesign.hu/images/chesterfield-borszovet-boritasu.webp",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-07",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/agyazhato-chesterfield-kanape",
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
            <span className="text-[#b8924a]">Ágyazható Chesterfield kanapé</span>
          </div>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:agyazhato-chesterfield-kanape"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Ágyazható Chesterfield kanapé",
              subtitle: "A kárpitozott Chesterfield kanapé önmagában is designkincs – de ha kiegészítik egy ágyazható funkcióval, rendkívül sokoldalú bútorrá válik. Ideális azok számára, akik nem akarnak kompromisszumot kötni az esztétika és a praktikusság között.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/chesterfield-borszovet-boritasu.webp",
              alt: "Ágyazható Chesterfield kanapé – kihúzható ágymechanizmussal, bőr kárpitban",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Mit jelent az, hogy ágyazható Chesterfield kanapé?",
              body: "Ez a bútortípus a klasszikus Chesterfield esztétikát ötvözi egy praktikus vendégágy mechanizmussal. A jellegzetes kartámaszok, a mélyen gombolt kárpitozás és a masszív váz megmarad – miközben a bútor belsejében egy diszkrét kihúzható alvófelület lapul. Kétfős alvásra alkalmas, prémium bársony vagy valódi bőr kárpitozással.\n\nRejtett kihúzható ágymechanizmus\nKényelmes fekvőfelület két személy számára\nTartós kárpit bársonyban vagy valódi bőrben\nStabil vázkonstrukció, hosszú élettartammal\n\nMikor ideális az ágyazható változat?\nKisebb lakásban – ahol a nappalit alkalmanként vendégszobává is kell alakítani.\nStúdióapartmanban – ahol minden négyzetméter számít.\nHome office-ban – ahol a kanapé egyszerre munkahely-kiegészítő és vendégágy.\n\nAz ágyazható funkció opcionálisan rendelhető minden Enzo Design kanapéhoz, felárért (190.500 Ft).",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Miért jobb, mint egy hagyományos kihúzható kanapé?",
              body: "A hagyományos kihúzható kanapék általában nem nyújtanak prémium megjelenést. Az ágyazható Chesterfield ellenben napközben elegáns nappali bútor, éjszaka kényelmes vendégágy – minőségi kivitelezéssel, tartós szerkezettel.\n\nChesterfield ágyazható: Klasszikus, elegáns stílus – prémium bőr vagy bársony – magas háttámla, vastag párnázás – évtizedek, tömörfa vázzal.\nHagyományos kihúzható: Minimalista, modern stílus – szintetikus szövetek – változó kényelem – átlagos élettartam.\n\nSzínek és anyagok\nAz ágyazható Chesterfield is teljes mértékben személyre szabható: szövet, bőr, méret és szín szerint egyaránt. A semleges tónusok – bézs, szürke, tengerészkék – a legsokszínűbbek és legkönnyebben kombinálhatók más bútorokkal. De élénkebb árnyalatok (smaragdzöld, mélykék, bordó) is elérhetők, ha karakteresebb megjelenést szeretnél.\n\nGYIK – Kérdések az ágyazható Chesterfield kanapéról\n\nMennyi a felár az ágyazható funkcióért?\nAz ágyazható mechanizmus 190.500 Ft felárral rendelhető bármely Enzo Design kanapéhoz.\n\nMekkora fekvőfelületet biztosít?\nA kihúzott ágymechanizmus standard két személyes ágyméretű fekvőfelületet biztosít (kb. 140×190 cm).\n\nMilyen anyagban rendelhető?\nBársony, mikroszálas, valódi bőr és egyéb prémium szövetek közül lehet választani – összesen több mint 100 féle kárpitból.\n\nMennyi idő alatt készül el?\nAz egyedi megrendelések általában 4–6 hét alatt készülnek el a visszaigazolástól számítva.",
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
            <Link href="/butoraink/kanapek/chesterfield-kanapek" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Chesterfield kanapék →
            </Link>
            <Link href="/butoraink/kanapek" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Összes kanapé →
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
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
              { title: "Melyik Chesterfield illik hozzád?", href: "/blog/melyik-chesterfield-butor-illik-hozzad" },
              { title: "Miért időtálló a Chesterfield?", href: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape" },
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
