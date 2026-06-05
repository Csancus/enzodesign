import type { Metadata } from "next";
import Link from "next/link";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni? – Enzo Design",
  description: "5 ok, amiért érdemes egyenesen a gyártótól rendelni bútort – ár, egyediség, minőség, közvetlen kommunikáció és magyar munka.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Miért éri meg közvetlenül a bútorgyártótól vásárolni?</span>
        </div>
      </nav>

      <PageBuilderPage
        pageId="blog:miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni"
        defaultSections={[
          {
            type: "hero-light",
            config: {
              label: "Blog",
              title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?",
              subtitle: "A bútorvásárlás hosszú távú befektetés. Amikor bútort keresel otthonodba vagy irodádba, érdemes elgondolkodnod azon, hogy miért lehet jobb döntés egyenesen a gyártótól rendelni – akár 30–40%-kal kedvezőbb áron.",
              bgColor: "#ffffff",
            },
          },
          {
            type: "banner",
            config: {
              image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp",
              alt: "Enzo Design gyártóüzem kézimunka",
              height: "420",
            },
          },
          {
            type: "text-block",
            config: {
              title: "5 ok, amiért érdemes gyártótól vásárolni",
              body: "1. Elkerülheted a felárat\nA bútorboltok áraikba beépítik a disztribúciós, raktározási és közvetítői költségeket. Az Enzo Design közvetlenül a végfogyasztóval dolgozik – ezek a rejtett költségek teljesen elmaradnak. Versenyképes árat kapsz prémium minőségért.\n\n2. Egyediség, amit nem kapsz meg a boltokban\nBoltban csak azt kapod, ami van. A gyártónál lehetőséged van teljesen egyedi, személyre szabott bútor rendelésére. Az Enzo Design akár egy fotó alapján is elkészíti, amit megálmodtál – saját méretben, a te szöveteddel és színeddel.\n\n3. Hosszabb élettartam és garancia\nAz Enzo Design bútorai tömörfa szerkezettel és nagy kopásállóságú szövettel készülnek. 3 év termékgaranciával és 10 év vázgaranciával adjuk ki a bútorokat – ez ritka a piacon.\n\n4. Közvetlen kommunikáció\nNem kell üzeneteket közvetíteni egy eladón keresztül. Közvetlen kapcsolatban lehetsz a tervezőkkel és kivitelezőkkel – kérdés esetén 2 napon belül árajánlatot adunk.\n\n5. Magyar munka támogatása\nA hazai gyártás támogatása nemcsak gazdasági, hanem erkölcsi döntés is. Az Enzo Design Nagykanizsán, közel 20 éve gyárt egyedi kárpitozott bútorokat – helyi szakemberek munkájával, prémium anyagokból.",
              align: "left",
              bgColor: "#ffffff",
            },
          },
          {
            type: "text-block",
            config: {
              title: "Összehasonlítás: gyártótól vs. bútorboltból",
              body: "Ár: Gyártói ár, felár nélkül – vs. – közvetítői felár beépítve.\nEgyediség: Teljes testreszabás – vs. – csak raktárkészletből.\nGarancia: 3 + 10 év – vs. – általában 1–2 év.\nKommunikáció: Közvetlen a gyártóval – vs. – közvetítőn át.\nÉlettartam: 20–30+ év tömörfával – vs. – átlagos, gyorsabb kopás.\n\nA bútorboltok korlátozott kínálattal dolgoznak, míg az Enzo Design személyre szabott, egyedi bútorok készítésére képes – minden négyzetméternyi és minden szövettípusban, amit megálmodsz.",
              align: "left",
              bgColor: "#f5f0e8",
            },
          },
          { type: "contact" },
        ]}
      />

      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Egyedi bútor készíttetés", href: "/blog/egyedi-butor-keszittetes" },
              { title: "Tömörfa bútor", href: "/blog/tomorfa-butor" },
              { title: "Bútorbolt Nagykanizsán", href: "/blog/butorbolt-nagykanizsán" },
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
