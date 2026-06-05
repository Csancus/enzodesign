import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bőr fotel: Időtálló kényelem és stílus egyetlen bútordarabban – Enzo Design",
  description: "Miért érdemes valódi bőr fotelt választani? Típusok, enteriőr tippek, karbantartás és árak – minden, amit a bőr fotelről tudni érdemes.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Bőr fotel</span>
        </div>
      </nav>
      <PageHero moduleId="blog-bor-fotel:hero" defaults={{ title: "Bőr fotel" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image
              src="/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp"
              alt="Bőr fotel – Enzo Design Chesterfield"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A bőr fotel nem csupán bútor – életérzés. Egy szobában elhelyezve azonnal elegáns, karakteres hangulatot
              teremt, és évtizedek alatt sem veszít szépségéből. Épp ellenkezőleg: a valódi bőr idővel patinát kap,
              amelynek saját varázsa van. Ha egyszer jó minőségű bőr fotelt veszel, azt egy életre megveszed.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mi is az a bőr fotel, és miért számít prémium választásnak?
            </h2>
            <p>
              A bőr fotel három fő előnnyel rendelkezik a szövettel szemben:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tartósság:</strong> Megfelelő ápolással évtizedekig megőrzi formáját és megjelenését.</li>
              <li><strong>Természetes légáteresztés:</strong> A valódi bőr alkalmazkodik a testhőmérséklethez – nem melegít fel nyáron és nem hűti le télen.</li>
              <li><strong>Esztétika:</strong> Az idővel kialakuló patina egyedi karaktert ad a bútornak.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Bőrfotel típusok – melyik illik hozzád?
            </h2>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Relax fotel</h3>
            <p>
              Állítható háttámlával és kihúzható lábzsámollyal – ideális tévénézéshez és pihenéshez.
              Általában mechanikus vagy elektromos dönthető mechanizmussal készül.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Olvasó fotel</h3>
            <p>
              Mélyebb ülőrésszel és magas háttámlával, kifejezetten hosszabb ülésre tervezve.
              Legtöbbször olvasósarokba, könyvtárszobába vagy hálószobába kerül.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Karfás bőrfotel</h3>
            <p>
              Klasszikus forma, tekintélyes megjelenéssel. Tárgyalókba, irodákba és elegáns nappalikba egyaránt
              kiváló választás.
            </p>
            <h3 className="text-lg font-semibold text-[#1c1c1c]">Chesterfield bőrfotel</h3>
            <p>
              Mélyen gombolt háttámlával és ívelt karfákkal – a brit klasszikus stílus csúcsa.
              Leginkább vintage, klasszikus vagy tradicionális enteriőrbe illik, de modern kontrasztként is megállja a helyét.
            </p>

            <div className="relative aspect-[16/7] overflow-hidden my-8">
              <Image
                src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
                alt="Chesterfield bőr fotel részlet"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Hogyan illik a bőr fotel a különböző enteriőr stílusokhoz?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { style: "Modern / minimalista", desc: "Fekete vagy szürke bőrfotel, karcsú falábakon – tiszta vonalak, kevés dekoráció." },
                { style: "Klasszikus / tradicionális", desc: "Barna vagy konyak árnyalatú Chesterfield fotel, fa bútorok és keleti szőnyeg társaságában." },
                { style: "Loft / indusztriális", desc: "Sötét bőr, szegecselt részletek, fém és betonfelületek mellett." },
                { style: "Irodai tér", desc: "Fekete bőrfotel – státuszszimbólum és praktikus, könnyen tisztítható megoldás egyszerre." },
              ].map((item) => (
                <div key={item.style} className="bg-[#f5f0e8] p-4">
                  <p className="font-semibold text-[#1c1c1c] text-sm mb-1">{item.style}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Bőr vagy szövet?
            </h2>
            <p>
              Mindkettőnek megvan az előnye. A bőr tartósabb, könnyebben tisztítható és idővel patinaszerű felületet kap
              – ideális klasszikus, elegáns enteriőrbe. A szövet puhábbnak érződik, több szín és minta közül lehet
              választani, és egyes esetekben hőszabályozóbb is lehet.
            </p>
            <p>
              Chesterfield foteleink mindkét anyagban rendelhetők. A bőr változat ára 421.695 Ft-tól indul,
              a szövet változaté 324.380 Ft-tól – mindkettő tömörfa szerkezettel, 3+10 év garanciával.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mire figyelj vásárláskor?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bőr típusa:</strong> Valódi, full-grain bőr a legtartósabb. Az olcsóbb bevonatolt (bonded) bőr hamarabb kopik.</li>
              <li><strong>Méret:</strong> A fotelnek arányban kell lennie a szobával – se ne uraljon mindent, se ne vesszen el.</li>
              <li><strong>Szín:</strong> Sötét árnyalatok rejtik a kopást, világos bőr elegánsabb, de gondosabb ápolást igényel.</li>
              <li><strong>Ápolás:</strong> Évente 1-2x bőrápoló krémmel kezelendő, kerüld a közvetlen napsugárzást.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Karbantartási tippek
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Havonta portold le száraz, puha ruhával.</li>
              <li>Félévente kezeld bőrápoló termékkel – ez megőrzi a rugalmasságát.</li>
              <li>Kerüld a közvetlen napfényt – elfakítja a bőrt.</li>
              <li>Friss foltot azonnal töröld fel száraz kendővel.</li>
            </ul>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Érdekli a bőr fotel? Kérdezzen bátran!</p>
            <Link href="/butoraink/fotelek/chesterfield-fotel" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              Foteljeink árai
            </Link>
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
