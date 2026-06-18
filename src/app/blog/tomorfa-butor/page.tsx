import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Tömörfa bútor – tartós befektetés, 20–30 éves élettartam",
  description: "Miért érdemes tömörfa bútort választani MDF helyett? Tartósság, természetes anyag, 20–30 éves élettartam és 10 év vázgarancia. Enzo Design, Nagykanizsa.",

  alternates: { canonical: "https://enzodesign.hu/blog/tomorfa-butor" },
  openGraph: {
    title: "Tömörfa bútor – tartós befektetés, 20–30 éves élettartam",
    description: "Miért érdemes tömörfa bútort választani MDF helyett? Tartósság, természetes anyag, 20–30 éves élettartam és 10 év vázgarancia. Enzo Design, Nagykanizsa.",
    url: "https://enzodesign.hu/blog/tomorfa-butor",
    images: [{ url: "/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp", width: 1920, height: 800 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Tömörfa bútor – tartós befektetés, 20–30 éves élettartam",
  "description": "Miért érdemes tömörfa bútort választani MDF helyett? Tartósság, természetes anyag, 20–30 éves élettartam és 10 év vázgarancia.",
  "image": "https://www.enzodesign.hu/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp",
  "datePublished": "2025-06-01",
  "dateModified": "2026-06-07",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/tomorfa-butor",
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
            <span className="text-[#b8924a]">Tömörfa bútor</span>
          </div>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:tomorfa-butor"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?",
              subtitle: "Sokan azt gondolják, hogy a tömörfa bútorok a múlt relikviái. Ez tévhit. A tömörfa nemcsak örök divat, hanem a minőség, a fenntarthatóság és a stílus egyik legfőbb képviselője.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp",
              alt: "Tömörfa bútor gyártás – kézimunka, természetes faanyag",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Mi az a tömörfa és miért érdemes választani?",
              body: `Ellentétben az MDF (közepes sűrűségű farostlemez) vagy forgácslap anyagokkal, a tömörfa valódi, egybefüggő fatömbökből áll. Természetes, strapabíró, és egyedi erezetmintája miatt minden darab megismételhetetlen. Az Enzo Design bútoraiban kizárólag tömörfa vázat alkalmazunk – ez az alapja a 10 éves vázgaranciánknak.\n\nTévhitek vs. valóság:\n„Drága és nem éri meg" › Hosszú távon olcsóbb, mert 20–30 évig is tart.\n„Régimódi, nem illik modern lakásba" › Modern szövetekkel és dizájnnal kortárs megjelenésű.\n„Nem látszik, mindegy milyen az alap" › A váz határozza meg a bútor tartósságát és formáját.\n\nMiért érdemes tömörfát választani?\nTartósság több generáción át – egy jó minőségű tömörfa vázú bútor 20–30 évig is kiszolgál.\nTermészetes anyag – nem tartalmaz mesterséges ragasztóanyagokat.\nEsztétika – meleg, otthonos hatást kelt, amit semmilyen más anyag nem tud visszaadni.\nKombinálhatóság – szövetekkel, fémekkel és kortárs stílusokkal egyaránt harmonizál.`,
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Tömörfa vs. MDF – melyik jobb?",
              body: "Élettartam: Tömörfa 20–30+ év – MDF / forgácslap 5–10 év.\nSzilárdság: Tömörfa kiváló – MDF közepes.\nNedvességérzékenység: Tömörfa alacsony – MDF magas.\nÁr: Tömörfa magasabb kezdeti – MDF alacsonyabb kezdeti.\nHossú távú érték: Tömörfa sokkal jobb – MDF gyorsabban amortizálódik.\n\nBefektetés, ami megtérül\nEgy tömörfa bútor nem 5–10 évre szól, hanem 20–30-ra is. Ha jól választasz, a bútor az otthonod értékét is növeli. Az Enzo Design esetében ez tömörfa váz + prémium kárpit + kézi összeszerelés kombinációját jelenti – mindhárom tényező együtt garantálja a hosszú élettartamot és a 3+10 éves garanciát.\n\nGYIK – Tömörfa bútor\n\nMilyen fafajt használ az Enzo Design?\nKizárólag kiváló minőségű, szárított tömörfát alkalmazunk a bútorváz gyártásához – ez biztosítja a stabilitást és az évtizedes élettartamot.\n\nNehézebb-e a tömörfa bútor szállítani?\nIgen, nehezebb, mint az MDF-alapú társai – de ez a tartósság és a robusztusság mellékhatása. A szállítást mi intézzük, az első ajtóig.\n\nJavítható-e évek után egy tömörfa bútor?\nIgen – a kárpit cserélhető, újrakárpitozható, a váz általában évtizedekig megőrzi állapotát.",
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
            <Link href="/butoraink/egyedi-butor" className="inline-block border border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white text-sm font-semibold px-4 py-2 transition-colors">
              Egyedi bútor rendelés →
            </Link>
            <Link href="/butorgyartas" className="inline-block border border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142] text-sm font-semibold px-4 py-2 transition-colors">
              Bútorgyártás folyamata →
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
              { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
              { title: "Egyedi bútor készíttetés", href: "/blog/egyedi-butor-keszittetes" },
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
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
