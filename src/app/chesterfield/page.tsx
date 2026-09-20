import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import QuoteSlider from "@/components/QuoteSlider";
import TrackedLink from "@/components/TrackedLink";
import EditBtn from "@/components/admin/EditBtn";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const BASE = "https://www.enzodesign.hu";

export const metadata: Metadata = {
  title: "Chesterfield kanapé és fotel gyártótól – 324 380 Ft-tól",
  description:
    "Chesterfield kanapé 2 és 3 személyes, sarok és ágyazható kivitelben, Chesterfield fotel és puff. Tömörfa váz, kézi gombolás, szövet vagy bőr. Egyedi méretben a nagykanizsai gyártótól, 3+10 év garancia.",
  alternates: { canonical: `${BASE}/chesterfield` },
  openGraph: {
    title: "Chesterfield kanapé és fotel gyártótól – 324 380 Ft-tól | Enzo Design",
    description:
      "Chesterfield kanapé, fotel és puff egyedi méretben, közvetlenül a gyártótól. Tömörfa váz, kézi gombolás, szövet vagy bőr, 3+10 év garancia.",
    url: `${BASE}/chesterfield`,
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

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

const ft = (n: number) => `${n.toLocaleString("hu-HU").replace(/ /g, " ")} Ft`;

/** Árak a Chesterfield termékoldalak alap (szövet) árai – ha ott változik, itt is frissítendő. */
const PRODUCTS = [
  {
    name: "Chesterfield fotel",
    price: 324380,
    unit: "szövettel",
    desc: "Mély gombolt háttámla, ívelt kartámasz, tömörfa váz. Bőrrel 421 695 Ft-tól.",
    href: "/butoraink/fotelek/chesterfield-fotel",
    image: "/images/chesterfield-a4.webp",
    alt: "Chesterfield fotel mély gombolt háttámlával",
  },
  {
    name: "Chesterfield kanapé, 2 személyes",
    price: 399810,
    unit: "szövettel",
    desc: "Kisebb nappaliba, dolgozószobába. Bőrrel 619 750 Ft-tól.",
    href: "/butoraink/kanapek/chesterfield-kanapek",
    image: "/images/chesterfield-a1.webp",
    alt: "2 személyes Chesterfield kanapé",
  },
  {
    name: "Chesterfield kanapé, 3 személyes",
    price: 497890,
    unit: "szövettel",
    desc: "A klasszikus méret. Bőrrel 847 255 Ft-tól, egyedi hosszban is.",
    href: "/butoraink/kanapek/chesterfield-kanapek",
    image: "/images/chesterfield-a2.webp",
    alt: "3 személyes Chesterfield kanapé nappaliban",
  },
  {
    name: "Chesterfield sarokkanapé",
    price: 735515,
    unit: "szövettel",
    desc: "Jobb- vagy baloldali sarokkal, a helyiséghez méretezve. Bőrrel 1 156 170 Ft-tól.",
    href: "/butoraink/kanapek/chesterfield-kanapek",
    image: "/images/chesterfield-a3.webp",
    alt: "Chesterfield sarokkanapé",
  },
  {
    name: "Ágyazható Chesterfield kanapé",
    price: 190500,
    unit: "felár a kanapé árához",
    desc: "Bármelyik kanapéhoz kérhető ágyfunkció, vendégágynak. Hogyan működik, mire figyelj?",
    href: "/blog/agyazhato-chesterfield-kanape",
    image: "/images/chesterfield-a5.webp",
    alt: "Ágyazható Chesterfield kanapé",
  },
  {
    name: "Chesterfield puff és zsámoly",
    price: 0,
    unit: "",
    desc: "Lábtartó, extra ülőhely, a garnitúrával azonos szövetből vagy bőrből.",
    href: "/blog/chesterfield-puff",
    image: "/images/szek-w5.webp",
    alt: "Chesterfield puff",
  },
];

const FAQ = [
  {
    q: "Mennyibe kerül egy Chesterfield kanapé?",
    a: "A 2 személyes Chesterfield kanapé 399 810 Ft-tól, a 3 személyes 497 890 Ft-tól, a sarokkanapé 735 515 Ft-tól készül alap kopásálló szövettel. A valódi bőr kivitel 619 750 Ft-tól indul. Az ágyfunkció felára 190 500 Ft. Pontos árat a méret és a szövet ismeretében 2 napon belül adunk.",
  },
  {
    q: "Szövet vagy bőr Chesterfield kanapét válasszak?",
    a: "A bőr a klasszikus, évtizedekig szép, de drágább és hidegebb tapintású. A 50 000 martindale kopásállóságú szövet családi használatra, kisállat mellé is jó választás, és több mint 100 színből választható. Mindkettőt ugyanarra a tömörfa vázra építjük.",
  },
  {
    q: "Készül egyedi méretben is?",
    a: "Igen. A hosszúság, az ülésmélység és a kartámasz szélessége is a helyiséghez igazítható, a sarokkanapé oldalirányát te választod. A gyártás jellemzően 4–6 hét.",
  },
  {
    q: "Milyen garancia jár rá?",
    a: "3 év teljes körű garancia és 10 év garancia a tömörfa vázra. A bútor Nagykanizsán, a saját üzemünkben készül, ezért javítást és utólagos átkárpitozást is vállalunk.",
  },
  {
    q: "Megnézhetem élőben?",
    a: "A 2000 m²-es nagykanizsai bemutatótermünkben több Chesterfield kanapé és fotel is kipróbálható, a szövet- és bőrmintákat pedig postán is elküldjük. Az egész országba házhoz szállítunk.",
  },
];

export default async function ChesterfieldPage() {
  const isAdmin = await getAdminStatus();

  const [heroCfg, subtopicsCfg, eternalCfg] = await Promise.all([
    getModuleConfig("chesterfield:hero"),
    getModuleConfig("chesterfield:subtopics"),
    getModuleConfig("chesterfield:eternal"),
  ]);

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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Chesterfield kanapék és fotelek – Enzo Design",
    url: `${BASE}/chesterfield`,
    numberOfItems: PRODUCTS.filter((p) => p.price > 0 && p.unit === "szövettel").length,
    itemListElement: PRODUCTS.filter((p) => p.price > 0 && p.unit === "szövettel").map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: `${BASE}${p.image}`,
        url: `${BASE}${p.href}`,
        brand: { "@type": "Brand", name: "Enzo Design" },
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "HUF",
          availability: "https://schema.org/MadeToOrder",
          url: `${BASE}${p.href}`,
        },
      },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="relative bg-[#f5f0ea] py-16 sm:py-28 text-center overflow-hidden">
        <Image src={hero.image} alt="Chesterfield kanapé" fill priority className="object-cover opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Gyártótól, Nagykanizsáról</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1c1c1c]" style={{ fontFamily: "var(--font-heading)" }}>
            {hero.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">{hero.body}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink
              href="/kapcsolat-es-rendeles"
              event="ajanlatkeres_gomb"
              label="Chesterfield oldal – Kérek árajánlatot"
              className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
            >
              Kérek árajánlatot
            </TrackedLink>
            <a
              href="#chesterfield-arak"
              className="inline-block border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
            >
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
                  <h3 className="text-lg font-bold text-[#1c1c1c] group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                    {p.name}
                  </h3>
                  {p.price > 0 ? (
                    <p className="mt-1 text-[#b8924a] font-semibold">
                      {p.unit === "szövettel" ? `${ft(p.price)}-tól` : `+${ft(p.price)}`}{" "}
                      <span className="text-gray-400 font-normal text-sm">{p.unit}</span>
                    </p>
                  ) : (
                    <p className="mt-1 text-[#b8924a] font-semibold">Egyedi ár</p>
                  )}
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
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.title}
                </h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
                <span className="text-[#7d6142] text-sm font-semibold mt-3 inline-block">Tovább →</span>
              </Link>
            ))}
          </div>
        </div>
        {isAdmin && (
          <EditBtn moduleId="chesterfield:subtopics" config={{ sectionTitle: subtopicsSectionTitle, items: subtopicsItems }} schema={SUBTOPICS_SCHEMA} label="✏ Témakörök" />
        )}
      </section>

      {/* GYIK */}
      <section className="py-16 bg-[#f5f0ea]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Gyakori kérdések a Chesterfield kanapéról
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
        </div>
      </section>

      {/* A CHESTERFIELD ÖRÖK */}
      <section className="relative py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            {eternal.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 max-w-2xl mx-auto">{eternal.body}</p>
          <TrackedLink
            href="/kapcsolat-es-rendeles"
            event="ajanlatkeres_gomb"
            label="Chesterfield oldal – alsó CTA"
            className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
          >
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
