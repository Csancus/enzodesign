import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QualitySection from "@/components/QualitySection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";
import StepsSection from "@/components/sections/StepsSection";
import EditBtn from "@/components/admin/EditBtn";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import { ft, getPricingMap } from "@/lib/productPricing";
import { resolveProductImages } from "@/lib/productImages";
import type { FieldDef } from "@/types/cms";

const BASE = "https://www.enzodesign.hu";
const KANAPE = "/butoraink/kanapek/chesterfield-kanapek";
const FOTEL = "/butoraink/fotelek/chesterfield-fotel";

/** Az árak a Chesterfield termékoldalakról öröklődnek (CMS-felülírással). Árat ide ne írj. */
async function loadPrices() {
  const p = await getPricingMap(["chesterfield-kanapek", "chesterfield-fotel"]);
  const k = p["chesterfield-kanapek"];
  const f = p["chesterfield-fotel"];
  const [kanapeImgs, fotelImgs] = await Promise.all([resolveProductImages(KANAPE, ["/images/chesterfield-a1.webp"]), resolveProductImages(FOTEL, ["/images/chesterfield-a4.webp"])]);
  return {
    fotel: f.fotel ?? k.fotel,
    ketto: k.ketSzemelyes,
    harom: k.haromSzemelyes,
    sarok: k.sarok,
    agy: k.agyFunkcio ?? 0,
    kanapeImg: kanapeImgs[0] ?? "/images/chesterfield-a1.webp",
    fotelImg: fotelImgs[0] ?? "/images/chesterfield-a4.webp",
  };
}
type Prices = Awaited<ReturnType<typeof loadPrices>>;
const from = (e?: { alap: number }) => (e?.alap ? `${ft(e.alap)}-tól` : "egyedi ár");
const bor = (e?: { bor?: number }) => (e?.bor ? `Bőrrel ${ft(e.bor)}-tól.` : "");

export async function generateMetadata(): Promise<Metadata> {
  const P = await loadPrices();
  const min = ft(Math.min(...[P.fotel?.alap, P.ketto?.alap].filter((n): n is number => !!n)));
  return {
    title: `Chesterfield kanapé és fotel gyártótól – ${min}-tól`,
    description: "Chesterfield kanapé 2 és 3 személyes, sarok és ágyazható kivitelben, Chesterfield fotel és puff. Tömörfa váz, kézi gombolás, szövet vagy bőr. Egyedi méretben a nagykanizsai gyártótól, 3+10 év garancia.",
    alternates: { canonical: `${BASE}/chesterfield` },
    openGraph: {
      title: `Chesterfield kanapé és fotel gyártótól – ${min}-tól | Enzo Design`,
      description: "Chesterfield kanapé, fotel és puff egyedi méretben, közvetlenül a gyártótól. Tömörfa váz, kézi gombolás, szövet vagy bőr, 3+10 év garancia.",
      url: `${BASE}/chesterfield`,
      images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
    },
  };
}

const HERO_SCHEMA: FieldDef[] = [
  { key: "title", label: "Főcím", type: "text" },
  { key: "body", label: "Leírás szöveg", type: "textarea" },
  { key: "image", label: "Háttérkép", type: "image" },
];
const SUBTOPICS_SCHEMA: FieldDef[] = [
  { key: "sectionTitle", label: "Szekció cím", type: "text" },
  {
    key: "items",
    label: "Témakör kártyák",
    type: "array",
    itemFields: [
      { key: "title", label: "Cím", type: "text" },
      { key: "href", label: "Link (URL)", type: "url" },
      { key: "desc", label: "Leírás", type: "textarea" },
    ],
  },
];
const ETERNAL_SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "body", label: "Szöveg", type: "textarea" },
];

function buildProducts(P: Prices) {
  return [
    { name: "Chesterfield fotel", price: from(P.fotel), desc: `Mély gombolt háttámla, ívelt kartámasz, tömörfa váz. ${bor(P.fotel)}`, href: FOTEL, image: P.fotelImg, alt: "Chesterfield fotel mély gombolt háttámlával", schema: P.fotel },
    { name: "Chesterfield kanapé, 2 személyes", price: from(P.ketto), desc: `Kisebb nappaliba, dolgozószobába. ${bor(P.ketto)}`, href: KANAPE, image: P.kanapeImg, alt: "2 személyes Chesterfield kanapé", schema: P.ketto },
    { name: "Chesterfield kanapé, 3 személyes", price: from(P.harom), desc: `A klasszikus méret. ${bor(P.harom)} Egyedi hosszban is.`, href: KANAPE, image: "/images/chesterfield-a2.webp", alt: "3 személyes Chesterfield kanapé nappaliban", schema: P.harom },
    { name: "Chesterfield sarokkanapé", price: from(P.sarok), desc: `Jobb- vagy baloldali sarokkal, a helyiséghez méretezve. ${bor(P.sarok)}`, href: "/sarokkanape", image: "/images/chesterfield-a3.webp", alt: "Chesterfield sarokkanapé", schema: P.sarok },
    { name: "Ágyazható Chesterfield kanapé", price: P.agy ? `+${ft(P.agy)}` : "egyedi ár", desc: "Bármelyik kanapéhoz kérhető kihúzható ágymechanizmus, kb. 140×190 cm fekvőfelülettel – vendégágynak.", href: "/agyazhato-kanape", image: "/images/chesterfield-w2.webp", alt: "Ágyazható Chesterfield kanapé", schema: undefined },
    { name: "Chesterfield puff és zsámoly", price: "Egyedi ár", desc: "Lábtartó, extra ülőhely, a garnitúrával azonos szövetből vagy bőrből.", href: "/blog/chesterfield-puff", image: "/images/szek-w5.webp", alt: "Chesterfield puff", schema: undefined },
  ];
}

function buildFaq(P: Prices) {
  return [
    {
      q: "Mennyibe kerül egy Chesterfield kanapé?",
      a: `A 2 személyes Chesterfield kanapé ${from(P.ketto)}, a 3 személyes ${from(P.harom)}, a sarokkanapé ${from(P.sarok)} készül alap kopásálló szövettel. ${P.ketto?.bor ? `A valódi bőr kivitel ${ft(P.ketto.bor)}-tól indul.` : ""} ${P.agy ? `Az ágyfunkció felára ${ft(P.agy)}.` : ""} Pontos árat a méret és a szövet ismeretében 2 napon belül adunk.`,
    },
    { q: "Szövet vagy bőr Chesterfield kanapét válasszak?", a: "A bőr a klasszikus, évtizedekig szép, de drágább és hidegebb tapintású. A 50 000 martindale kopásállóságú szövet családi használatra, kisállat mellé is jó választás, és több mint 100 színből választható. Mindkettőt ugyanarra a tömörfa vázra építjük." },
    { q: "Készül egyedi méretben is?", a: "Igen. A hosszúság, az ülésmélység és a kartámasz szélessége is a helyiséghez igazítható, a sarokkanapé oldalirányát te választod. A gyártás jellemzően 4–6 hét." },
    { q: "Milyen garancia jár rá?", a: "3 év teljes körű garancia és 10 év garancia a tömörfa vázra. A bútor Nagykanizsán, a saját üzemünkben készül, ezért javítást és utólagos átkárpitozást is vállalunk." },
    { q: "Megnézhetem élőben?", a: "A 2000 m²-es nagykanizsai bemutatótermünkben több Chesterfield kanapé és fotel is kipróbálható, a szövet- és bőrmintákat pedig postán is elküldjük. Az egész országba házhoz szállítunk." },
  ];
}

export default async function ChesterfieldPage() {
  const [isAdmin, P, heroCfg, subtopicsCfg, eternalCfg] = await Promise.all([
    getAdminStatus(),
    loadPrices(),
    getModuleConfig("chesterfield:hero"),
    getModuleConfig("chesterfield:subtopics"),
    getModuleConfig("chesterfield:eternal"),
  ]);
  const PRODUCTS = buildProducts(P);
  const FAQ = buildFaq(P);

  const hero = {
    title: (heroCfg.title as string) || "Chesterfield kanapé és fotel közvetlenül a gyártótól",
    body:
      (heroCfg.body as string) ||
      "Közel 20 éve gyártunk Chesterfield bútorokat Nagykanizsán: kézzel gombolt háttámla, tömörfa váz, kopásálló szövet vagy valódi bőr. Kanapé 2 és 3 személyes, sarok és ágyazható kivitelben, hozzá illő fotel és puff – egyedi méretben, 3+10 év garanciával.",
    image: (heroCfg.image as string) || "/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp",
  };

  const defaultSubtopics = [
    { title: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete", desc: "Fedezd fel, hogyan született meg a Chesterfield kanapé legendája az angol arisztokrácia világában! A stílusos bútor gyökerei egészen a 18. századig nyúlnak vissza, és máig az elegancia szimbóluma maradt." },
    { title: "Chesterfield stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek", desc: "Mi teszi a Chesterfieldtet igazán különlegessé? Ismerd meg a jellegzetes gombolást, mély ülőrészt, bőrborítást és díszes karfákat – a formai jegyeket, amik ikonikus bútordarabbá tették." },
    { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak", desc: "A Chesterfield bútorok nemcsak szépek, hanem időtállók is – de vajon mitől? Bemutatjuk a leggyakoribb bőr- és kárpitfajtákat, illetve a tradicionális kézműves technikákat, amelyek a minőséget garantálják." },
    { title: "A Chesterfield a modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben", desc: "Bár klasszikus darab, a Chesterfield remekül illeszkedik a mai modern terekbe is. Inspirációk és tippek arra, hogyan kombinálhatod ezt az időtlen bútort a mai stílusokkal – legyen az minimalista, loft vagy vintage." },
  ];
  const subtopicsSectionTitle = (subtopicsCfg.sectionTitle as string) || "Ismerkedj meg a Chesterfieldel";
  const subtopicsItems = (subtopicsCfg.items as typeof defaultSubtopics | undefined) ?? defaultSubtopics;

  const eternal = {
    title: (eternalCfg.title as string) || "A Chesterfield örök",
    body: (eternalCfg.body as string) || "Közel 20 éve gyártunk Chesterfield bútorokat. Mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel és minőségi szövettel vagy bőr bevonattal.",
  };

  const priced = PRODUCTS.filter((p) => p.schema?.alap);
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chesterfield kanapék és fotelek – Enzo Design",
    url: `${BASE}/chesterfield`,
    numberOfItems: priced.length,
    itemListElement: priced.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: `${BASE}${p.image}`,
        url: `${BASE}${p.href}`,
        brand: { "@type": "Brand", name: "Enzo Design" },
        offers: { "@type": "AggregateOffer", lowPrice: p.schema!.alap, highPrice: p.schema!.bor ?? p.schema!.alap, priceCurrency: "HUF", offerCount: p.schema!.bor ? 2 : 1, availability: "https://schema.org/MadeToOrder", url: `${BASE}${p.href}` },
      },
    })),
  };
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative bg-[#f5f0ea] py-16 sm:py-28 text-center overflow-hidden">
        <Image src={hero.image} alt="Chesterfield kanapé" fill priority sizes="100vw" className="object-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Gyártótól, Nagykanizsáról</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            {hero.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">{hero.body}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Chesterfield oldal – Kérek árajánlatot" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Kérek árajánlatot
            </TrackedLink>
            <a href="#chesterfield-arak" className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Bútorok és árak
            </a>
          </div>
        </div>
        {isAdmin && <EditBtn moduleId="chesterfield:hero" config={hero} schema={HERO_SCHEMA} label="✏ Hero" />}
      </section>

      {/* TERMÉKEK ÉS ÁRAK */}
      <section id="chesterfield-arak" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-3 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Chesterfield bútoraink és áraink
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Az árak alap, 50 000 martindale kopásállóságú szövettel értendők. Minden darab egyedi méretben is kérhető, a szövet több mint 100 színből választható.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <Link key={p.name} href={p.href} className="group border border-gray-200 hover:border-[#7d6142] hover:shadow-md transition-all flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0ea]">
                  <Image src={p.image} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#1c1c1c] group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{p.name}</h3>
                  <p className="mt-1 text-[#b8924a] font-semibold">
                    {p.price} {p.schema ? <span className="text-gray-400 font-normal text-sm">szövettel</span> : null}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 flex-1">{p.desc}</p>
                  <span className="text-[#7d6142] text-sm font-semibold mt-4 inline-block">Részletek →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm">
            <Link href="/chesterfield-kollekcio" className="text-[#b8924a] underline">A teljes Chesterfield kollekció képekben →</Link>
            <Link href="/borkanape" className="text-[#b8924a] underline">Chesterfield bőrkanapé árak →</Link>
            <Link href="/agyazhato-kanape" className="text-[#b8924a] underline">Ágyazható Chesterfield →</Link>
            <Link href="/kanape-arak" className="text-[#b8924a] underline">Minden kanapé ára →</Link>
          </p>
        </div>
      </section>

      {/* MIÉRT TŐLÜNK */}
      <section className="py-16 bg-[#f5f0ea]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3]">
            <Image src="/images/chesterfield-enzo.webp" alt="Chesterfield kanapé az Enzo Design nagykanizsai üzemében" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Miért az Enzo Design Chesterfieldje?
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Saját üzem Nagykanizsán: nincs viszonteladói ár, közvetlenül a gyártótól veszed.",
                "Tömörfa váz és kézi gombolás – a Chesterfield úgy készül, ahogy 200 éve.",
                "Egyedi hossz, ülésmélység, sarokirány, ágyfunkció – a te nappalidhoz.",
                "100+ szövetszín és valódi bőr, 50 000 martindale kopásállóság.",
                "3 év teljes körű és 10 év vázgarancia, országos házhozszállítás.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="text-[#b8924a] mt-1">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/rendeles-menete" className="inline-block mt-6 text-sm text-[#b8924a] underline">
              Így zajlik a rendelés: méret, szövetminta, árajánlat 2 napon belül →
            </Link>
          </div>
        </div>
      </section>

      {/* ISMERKEDJ MEG A CHESTERFIELDEL */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            {subtopicsSectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subtopicsItems.map((t) => (
              <Link key={t.href} href={t.href} className="group border border-gray-200 p-6 hover:border-[#7d6142] hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{t.title}</h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
                <span className="text-[#7d6142] text-sm font-semibold mt-3 inline-block">Tovább →</span>
              </Link>
            ))}
          </div>
        </div>
        {isAdmin && <EditBtn moduleId="chesterfield:subtopics" config={{ sectionTitle: subtopicsSectionTitle, items: subtopicsItems }} schema={SUBTOPICS_SCHEMA} label="✏ Témakörök" />}
      </section>

      <StepsSection moduleId="home:steps" isAdmin={false} />
      <QualitySection />

      {/* GYIK */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Gyakori kérdések a Chesterfield kanapéról
          </h2>
          <div className="space-y-4">
            {FAQ.map((f) => (
              <details key={f.q} className="group bg-[#f5f0ea] border border-gray-200 p-5">
                <summary className="cursor-pointer font-semibold text-[#1c1c1c] list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-[#b8924a] group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* A CHESTERFIELD ÖRÖK */}
      <section className="relative py-20 bg-[#f5f0ea] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>{eternal.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">{eternal.body}</p>
          <TrackedLink href="/kapcsolat-es-rendeles" event="ajanlatkeres_gomb" label="Chesterfield oldal – alsó CTA" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
            Kérek árajánlatot Chesterfield bútorra
          </TrackedLink>
        </div>
        {isAdmin && <EditBtn moduleId="chesterfield:eternal" config={eternal} schema={ETERNAL_SCHEMA} label="✏ Örök szekció" />}
      </section>

      <QuoteSlider />
      <ContactFormSection />
    </>
  );
}
