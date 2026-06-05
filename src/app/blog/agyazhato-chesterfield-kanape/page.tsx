import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Ágyazható Chesterfield kanapé – stílus és praktikum egy bútorban – Enzo Design",
  description: "Az ágyazható Chesterfield kanapé ötvözi a klasszikus stílust a kényelmes vendégágy funkcióval – ideális kis lakásba és vendégszobába.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Ágyazható Chesterfield kanapé</span>
        </div>
      </nav>
      <PageHero moduleId="blog-agyazhato-chesterfield-kanape:hero" defaults={{ title: "Ágyazható Chesterfield kanapé – stílus és praktikum egy bútorban" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/chesterfield-borszovet-boritasu.webp" alt="Ágyazható Chesterfield kanapé" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A kárpitozott Chesterfield kanapé önmagában is designkincs – de ha kiegészítik egy ágyazható
              funkcióval, rendkívül sokoldalú bútorrá válik. Ideális azok számára, akik nem akarnak
              kompromisszumot kötni az esztétika és a praktikusság között.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mit jelent az, hogy ágyazható Chesterfield kanapé?
            </h2>
            <p>
              Ez a bútortípus a klasszikus Chesterfield esztétikát ötvözi egy praktikus vendégágy mechanizmussal.
              A jellegzetes kartámaszok, a mélyen gombolt kárpitozás és a masszív váz megmarad – miközben a bútor
              belsejében egy diszkrét kihúzható alvófelület lapul. Kétfős alvásra alkalmas, prémium bársony
              vagy valódi bőr kárpitozással.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rejtett kihúzható ágymechanizmus</li>
              <li>Kényelmes fekvőfelület két személy számára</li>
              <li>Tartós kárpit bársonyban vagy valódi bőrben</li>
              <li>Stabil vázkonstrukció, hosszú élettartammal</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mikor ideális az ágyazható változat?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Kisebb lakásban</strong> – ahol a nappalit alkalmanként vendégszobává is kell alakítani.</li>
              <li><strong>Stúdióapartmanban</strong> – ahol minden négyzetméter számít.</li>
              <li><strong>Home office-ban</strong> – ahol a kanapé egyszerre munkahely-kiegészítő és vendégágy.</li>
            </ul>
            <p>
              Az ágyazható funkció opcionálisan rendelhető minden Enzo Design kanapéhoz, felárért.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Ágyazható Chesterfield vs. hagyományos kihúzható kanapé
            </h2>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f0e8]">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Szempont</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Chesterfield ágyazható</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Hagyományos kihúzható</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Stílus</td>
                    <td className="border border-gray-200 px-4 py-2">Klasszikus, elegáns</td>
                    <td className="border border-gray-200 px-4 py-2">Minimalista, modern</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Anyag</td>
                    <td className="border border-gray-200 px-4 py-2">Prémium bőr vagy bársony</td>
                    <td className="border border-gray-200 px-4 py-2">Szintetikus szövetek</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Kényelem</td>
                    <td className="border border-gray-200 px-4 py-2">Magas háttámla, vastag párnázás</td>
                    <td className="border border-gray-200 px-4 py-2">Változó</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Élettartam</td>
                    <td className="border border-gray-200 px-4 py-2">Évtizedek, tömörfa vázzal</td>
                    <td className="border border-gray-200 px-4 py-2">Átlagos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Miért jobb, mint egy hagyományos kihúzható kanapé?
            </h2>
            <p>
              A hagyományos kihúzható kanapék általában nem nyújtanak prémium megjelenést. Az ágyazható
              Chesterfield ellenben napközben elegáns nappali bútor, éjszaka kényelmes vendégágy –
              minőségi kivitelezéssel, tartós szerkezettel. Az ágyfunkció felára 190.500 Ft, és
              minden kollekciónkhoz elérhető.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Chesterfield ágyazható kanapé szett – a teljes kép
            </h2>
            <p>
              A teljes Chesterfield szett tartalmazhat:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Két- vagy háromszemelyese kanapé ágyazható funkcióval</li>
              <li>Illő fotel (szintén Chesterfield stílusban)</li>
              <li>Puff vagy zsámoly</li>
              <li>Opcionális sarokelem vagy napágy</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Milyen szín a nyerő?
            </h2>
            <p>
              A semleges tónusok – bézs, szürke, tengerészkék – a legsokszínűbbek és legkönnyebben
              kombinálhatók más bútorokkal. De élénkebb árnyalatok (smaragdzöld, mélykék, bordó)
              is elérhetők, ha karakteresebb megjelenést szeretnél.
            </p>
            <p>
              Az Enzo Design-nél minden ágyazható Chesterfield kanapé teljesen személyre szabható:
              méretben, szövetben, színben és egyéb kiegészítőkben is.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Érdekli az ágyazható változat? Kérjen árajánlatot!</p>
            <a href="tel:+36303778983" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              +36 30 377 8983
            </a>
          </div>

          <div className="mt-6">
            <Link href="/blog" className="text-[#7d6142] font-semibold hover:underline text-sm">← Vissza a bloghoz</Link>
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
                {a.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
