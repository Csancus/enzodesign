import Link from "next/link";
import ContactFormSection from "./ContactFormSection";

export type CityLandingPageProps = {
  city: string;
  locative: string;
  ablative: string;
  dative: string;
  distanceKm: number;
  driveMin: number;
  slug: string;
  description: string;
  neighborCities: { name: string; locative: string; href: string }[];
};

const PRODUCTS = [
  { label: "Chesterfield kanapék", href: "/butoraink/kanapek/chesterfield-kanapek" },
  { label: "Ivone kollekció", href: "/butoraink/kanapek/ivone-kanapek" },
  { label: "Fotelek", href: "/butoraink/fotelek" },
  { label: "Franciaágyak", href: "/butoraink/franciaagyak" },
  { label: "Egyedi bútor", href: "/butoraink/egyedi-butor" },
];

export default async function CityLandingPage({
  city,
  locative,
  ablative,
  dative,
  distanceKm,
  driveMin,
  slug,
  description,
  neighborCities,
}: CityLandingPageProps) {
  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white">Főoldal</Link>
          <span>/</span>
          <span className="text-[#b8924a]">Bútor {locative}</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#1c1c1c] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-4">
            Kárpitozott bútor – {city} körzete
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kárpitozott bútor {locative}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#rendeles"
              className="bg-[#b8924a] hover:bg-[#a07a3a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
            >
              Árajánlatot kérek
            </a>
            <Link
              href="/butoraink"
              className="border-2 border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
            >
              Bútoraink megtekintése
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#b8924a] py-6 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: `${distanceKm} km`, label: `Nagykanizsától` },
            { value: `~${driveMin} perc`, label: "autóval" },
            { value: "100+", label: "szövetféle" },
            { value: "3+10 év", label: "garancia" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-white font-bold text-xl">{value}</p>
              <p className="text-white/80 text-xs uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content 1 */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Miért érdemes {ablative} az Enzo Designhoz fordulni?
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Az Enzo Design Nagykanizsán, {distanceKm} km-re {ablative} közel 20 éve gyárt egyedi
              kárpitozott bútorokat. 2000 nm-es bemutatótermünkben személyesen megtekintheted és
              kipróbálhatod a modelleket – majd pontosan olyan méretben, szövetben és kivitelben
              rendelheted meg, ahogy neked illik.
            </p>
            <p>
              A különbség a bolthoz képest: nem készletes darabokat árulunk, hanem minden bútort
              rendelésre gyártunk tömörfa szerkezettel, prémium szövettel – és 3 év kárpitgaranciával,
              10 év vázgaranciával adjuk ki a kezünkből.
            </p>
            <ul className="space-y-2 mt-4">
              {[
                "Kanapé, fotel, franciaágy és szék egyedi méretben",
                "100+ szövet és bőr közül választhatsz",
                "Házhozszállítás az egész országba, beleértve {city} körzetét",
                "Árajánlat 2 munkanapon belül",
                "Gyártási idő: 4–6 hét",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{item.replace("{city}", city)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-[#f5f0e8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Termékek {dative}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PRODUCTS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-white p-4 hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a] border border-gray-100"
              >
                {p.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main content 2: how to order */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Hogyan rendelhetsz {ablative}?
          </h2>
          <ol className="space-y-5 text-gray-700">
            {[
              {
                n: "01",
                title: "Kapcsolatfelvétel",
                desc: "Töltsd ki az alábbi űrlapot, vagy hívj minket a +36 30 377 8983-as számon. Küldj egy képet, ami alapján elkezdhetjük az egyeztetést.",
              },
              {
                n: "02",
                title: "Szabad konzultáció",
                desc: "Megbeszéljük a méretet, szövetet, funkciót. Ha teheted, látogass el bemutatótermünkbe Nagykanizsán – a szövetmintákat személyesen is meg lehet nézni.",
              },
              {
                n: "03",
                title: "Árajánlat 2 napon belül",
                desc: "Pontosan tudod, mennyit fizetsz – rejtett költségek nélkül.",
              },
              {
                n: "04",
                title: "Gyártás és szállítás",
                desc: `Gyártás 4–6 hét. Szállítás az első zárt ajtóig – ${city} körzetébe is.`,
              },
            ].map(({ n, title, desc }) => (
              <li key={n} className="flex gap-4">
                <span className="text-[#b8924a] font-bold text-lg min-w-[2.5rem]">{n}</span>
                <div>
                  <p className="font-semibold text-[#1c1c1c] mb-1">{title}</p>
                  <p className="text-sm leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#f5f0e8] px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold text-[#1c1c1c] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Gyakori kérdések
          </h2>
          <div className="space-y-6">
            {[
              {
                q: `Szállítotok ${dative}?`,
                a: `Igen, az ország bármely pontjára, köztük ${city} körzetébe is szállítjuk a bútorokat az első zárt ajtóig. A szállítás díját az árajánlatban tüntetjük fel.`,
              },
              {
                q: "Kell-e előre bejelentkezni a bemutatóterembe?",
                a: "Nem kötelező, de ajánlott, hogy szakemberünk biztosan rendelkezésre álljon. Hívj minket a +36 30 377 8983-as számon.",
              },
              {
                q: "Milyen anyagokból lehet választani?",
                a: "Több mint 100 szövetféléből és valódi bőrből választhatsz. Szövetmintákat postán is küldünk, ha személyesen nem tudsz eljönni.",
              },
              {
                q: "Mennyibe kerül egy kanapé?",
                a: "A Chesterfield kanapéink 399.810 Ft-tól, fotelek 324.380 Ft-tól, franciaágyak 351.160 Ft-tól elérhetők. Egyedi megrendelésnél pontos árajánlatot 2 napon belül küldünk.",
              },
              {
                q: "Mennyi ideig tart a gyártás?",
                a: "Általában 4–6 hét a megrendeléstől számítva. Ha sürgős, kérdezz rá az aktuális kapacitásra.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#e8ddd0] pb-5">
                <p className="font-semibold text-[#1c1c1c] mb-2">{q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <ContactFormSection />

      {/* Other cities */}
      {neighborCities.length > 0 && (
        <section className="py-12 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Más városokból is kiszállítunk
            </p>
            <div className="flex flex-wrap gap-3">
              {neighborCities.map((nc) => (
                <Link
                  key={nc.href}
                  href={nc.href}
                  className="text-sm border border-gray-200 px-4 py-2 text-[#7d6142] hover:border-[#b8924a] hover:text-[#b8924a] transition-colors"
                >
                  Bútor {nc.locative} →
                </Link>
              ))}
              <Link
                href="/blog/butorbolt-nagykanizsán"
                className="text-sm border border-gray-200 px-4 py-2 text-[#7d6142] hover:border-[#b8924a] hover:text-[#b8924a] transition-colors"
              >
                Bútorbolt Nagykanizsán →
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
