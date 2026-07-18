import type { Metadata } from "next";
import BlogArticle from "@/components/BlogArticle";

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
  "datePublished": "2025-06-17",
  "dateModified": "2026-06-19",
  "author": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://www.enzodesign.hu" },
  "url": "https://www.enzodesign.hu/blog/tomorfa-butor",
  "wordCount": 460,
  "articleSection": "Bútorgyártás",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.enzodesign.hu/blog/tomorfa-butor" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticle
        slug="tomorfa-butor"
        defaults={{
          category: "Bútorgyártás",
          title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?",
          date: "2025. június 17.",
          readTime: "4 perc olvasás",
          coverImage: "/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp",
          coverAlt: "Tömörfa bútor gyártás – kézimunka, természetes faanyag",
          intro:
            "Sokan azt gondolják, hogy a tömörfa bútorok a múlt relikviái. Ez tévhit. A tömörfa nemcsak örök divat, hanem a minőség, a fenntarthatóság és a stílus egyik legfőbb képviselője.",
          blocks: [
            {
              heading: "Mi az a tömörfa és miért érdemes választani?",
              body: `Ellentétben az MDF (közepes sűrűségű farostlemez) vagy forgácslap anyagokkal, a tömörfa valódi, egybefüggő fatömbökből áll. Természetes, strapabíró, és egyedi erezetmintája miatt minden darab megismételhetetlen. Az Enzo Design bútoraiban kizárólag tömörfa vázat alkalmazunk – ez az alapja a 10 éves vázgaranciánknak.\n\nTévhitek vs. valóság:\n„Drága és nem éri meg" › Hosszú távon olcsóbb, mert 20–30 évig is tart.\n„Régimódi, nem illik modern lakásba" › Modern szövetekkel és dizájnnal kortárs megjelenésű.\n„Nem látszik, mindegy milyen az alap" › A váz határozza meg a bútor tartósságát és formáját.\n\nMiért érdemes tömörfát választani?\nTartósság több generáción át – egy jó minőségű tömörfa vázú bútor 20–30 évig is kiszolgál.\nTermészetes anyag – nem tartalmaz mesterséges ragasztóanyagokat.\nEsztétika – meleg, otthonos hatást kelt, amit semmilyen más anyag nem tud visszaadni.\nKombinálhatóság – szövetekkel, fémekkel és kortárs stílusokkal egyaránt harmonizál.`,
            },
            {
              heading: "Tömörfa vs. MDF – melyik jobb?",
              body: `Élettartam: Tömörfa 20–30+ év – MDF / forgácslap 5–10 év.\nSzilárdság: Tömörfa kiváló – MDF közepes.\nNedvességérzékenység: Tömörfa alacsony – MDF magas.\nÁr: Tömörfa magasabb kezdeti – MDF alacsonyabb kezdeti.\nHosszú távú érték: Tömörfa sokkal jobb – MDF gyorsabban amortizálódik.\n\nBefektetés, ami megtérül\nEgy tömörfa bútor nem 5–10 évre szól, hanem 20–30-ra is. Ha jól választasz, a bútor az otthonod értékét is növeli. Az Enzo Design esetében ez tömörfa váz + prémium kárpit + kézi összeszerelés kombinációját jelenti – mindhárom tényező együtt garantálja a hosszú élettartamot és a 3+10 éves garanciát.\n\nGYIK – Tömörfa bútor\n\nMilyen fafajt használ az Enzo Design?\nKizárólag kiváló minőségű, szárított tömörfát alkalmazunk a bútorváz gyártásához – ez biztosítja a stabilitást és az évtizedes élettartamot.\n\nNehézebb-e a tömörfa bútor szállítani?\nIgen, nehezebb, mint az MDF-alapú társai – de ez a tartósság és a robusztusság mellékhatása. A szállítást mi intézzük, az első ajtóig.\n\nJavítható-e évek után egy tömörfa bútor?\nIgen – a kárpit cserélhető, újrakárpitozható, a váz általában évtizedekig megőrzi állapotát.`,
            },
          ],
        }}
        related={[
          { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
          { title: "Egyedi bútor készíttetés", href: "/blog/egyedi-butor-keszittetes" },
          { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
        ]}
      />
    </>
  );
}
