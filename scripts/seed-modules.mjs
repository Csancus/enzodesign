// Seed all default module configs into Supabase
// Run: node scripts/seed-modules.mjs

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://lpeqwacpgxiqqmptfakn.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwZXF3YWNwZ3hpcXFtcHRmYWtuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTE0MzY5OSwiZXhwIjoyMDk2NzE5Njk5fQ.iURD1ZAvNGKqUntUGIEGnRabJr0fk7vR9QF8R0a5oxE";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY, { auth: { persistSession: false } });

const defaults = {
  "hero:rolunk": { label: "Rólunk", title: "Rólunk", subtitle: "Közel 20 éve gyártunk egyedi kárpitozott bútorokat Nagykanizsán." },
  "hero:kapcsolat": { label: "Lépjen kapcsolatba velünk", title: "Kapcsolat, rendelés", subtitle: "Töltse ki az alábbi űrlapot és 24 órán belül visszahívjuk!" },
  "hero:rendeles-menete": { label: "Rendelés", title: "Rendelés menete" },
  "hero:karpitoszovetek": { label: "Anyagok", title: "Kárpitszövetek", subtitle: "Több mint 100 szövetfajtából választhat." },
  "hero:blog": { title: "Blog", label: "Írások" },
  "hero:vasarloi-visszajelzesek": { label: "Vélemények", title: "Vásárlói visszajelzések", subtitle: "Amit ügyfeleink mondanak rólunk" },
  "hero:butoraink": { label: "ENZO DESIGN", title: "Bútoraink", subtitle: "Kárpitozott bútorok – egyedi méretben, választott szövettel, közvetlenül a gyártótól." },
  "akcio:hero": { label: "Akciók", title: "Vásároljon közvetlenül a gyártótól!", subtitle: "Aktuálisan akciós kárpitozott bútoraink – limitált ideig, közvetlen gyártói áron." },
  "adatkezelesi-szabalyzat:hero": { title: "Adatkezelési Szabályzat" },
  "butorgyartas:hero": { title: "A bútorgyártás világa – ahol a funkcionalitás találkozik az esztétikummal", subtitle: "A bútorok otthonaink, irodáink és közösségi tereink alapvető részei." },
  "butorgyartas-tervezes:hero": { title: "A bútortervezés alapjai – Az ötlettől a formáig" },
  "butorgyartas-anyagok:hero": { title: "Alapanyagok a bútorgyártásban – A tartósság és esztétika alapkövei" },
  "butorgyartas-butorgyartas-folyamata:hero": { title: "A bútorgyártás menete – A részletek mestersége" },
  "chesterfield-a-chesterfield-kanape-eredete:hero": { title: "A Chesterfield kanapé eredete" },
  "chesterfield-chesterfield-anyagok-es-gyartai-technikak:hero": { title: "Anyagok és gyártási technikák" },
  "rendeles-menete:content": { title: "Rendelés menete", body: "Honlapunk nem webáruházként működik, ezért a rendelés menete a következő:\n\nRendelését leadhatja személyesen telephelyünkön a 8800 Nagykanizsa, Egry József utca 7 szám alatt, vagy e-mailben az info@enzodesign.hu címen.\n\nGyors egyeztetésre a +36303778983 -mas telefonszámot használják bizalommal, melyen bútortervezőnk érhető el.\n\nOrszágos szinten kiszállítjuk a bútort az első zárt ajtóig.\n\nLegegyszerűbb mód vagy a kapcsolat űrlap kitöltése itt a weboldalon, vagy emailben egy kép csatolása, melyre 2 napon belül árajánlatot adunk.\n\nE-mailes rendelés esetében kérjük adja meg a számlázási nevet, címet, céges rendelésnél pedig az adószámát is, valamint írja a megrendelni kívánt termék nevét, színét és darabszámát, vagy küldjön képet, amennyiben egyedi bútorról van szó.\n\nKollégáink ennek alapján előlegbekérő szerződést küldenek, mely előleget utalással is ki tud egyenlíteni.\n\nVisszaküldést kizárólag hibás termék esetén fogadunk el.", align: "left" },
  "rolunk:video": { src: "/videos/rolunk.mp4", title: "", bgColor: "#1c1c1c" },
  "butoraink:intro": { body: "Bútoraink 2000 nm-es telephelyünkön készülnek. Tömör fával, nagy kopásállóságú szövetekkel és bőrökkel dolgozunk, és minden elkészített bútorunkat kézzel ellenőrzünk. Mivel gyártók vagyunk, áraink versenyképesek maradnak.", features: "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával" },
  "kanapek-listing:hero": { title: "Kanapék", subtitle: "Válasszon a 2000 nm-es gyárunkból, vagy kérjen egyedi ajánlatot. A Bútoraink szövete és anyagmintája szabadon választható." },
  "kanapek-listing:features": { intro: "Mindegyik bútorunkat ajánljuk:", body: "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával" },
  "kanapek-listing:grid": { title: "Kanapék", subtitle: "Válasszon a 2000 nm-es gyárunkból, kért méretben és anyagmintával." },
  "fotelek-listing:hero": { title: "Fotelek", subtitle: "Válasszon a 2000 nm-es gyárunkból, vagy kérjen egyedi ajánlatot." },
  "fotelek-listing:features": { intro: "Mindegyik bútorunkat ajánljuk:", body: "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával" },
  "fotelek-listing:grid": { title: "Fotelek", subtitle: "Válasszon a 2000 nm-es gyárunkból, kért méretben és anyagmintával." },
  "franciaagyak-listing:hero": { title: "Franciaágyak", subtitle: "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. Tömörfa szerkezettel, prémium szövetekkel." },
  "franciaagyak-listing:features": { intro: "Mindegyik bútorunkat ajánljuk:", body: "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával" },
  "franciaagyak-listing:grid": { title: "Franciaágyak" },
  "szek-listing:hero": { title: "Szék, zsámoly, falvédő", subtitle: "Kárpitozott székek, zsámolyok és falvédők – egyedi méretben és szövettel." },
  "szek-listing:features": { intro: "Mindegyik bútorunkat ajánljuk:", body: "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával" },
  "szek-listing:grid": { title: "Szék, zsámoly, falvédő" },
  "egyedi-butor:hero": { title: "Egyedi bútor", subtitle: "Küldj egy képet vagy leírást, és mi elkészítjük álmaid bútorát. Tömörfa váz, prémium szövetek, egyedi méret." },
  "egyedi-butor:features": { intro: "Mindegyik bútorunkat ajánljuk:", body: "Egyedi szín és anyagminta választással\nTetszőleges méretben\nVálasztható kopásállóság-erősséggel (martindale)\nTömörfa szerkezettel, 10 év váz-garanciával" },
  "egyedi-butor:gallery": { title: "Egyedi bútor", images: [{ src: "/images/egyedi-w1.webp" }, { src: "/images/egyedi-w2.webp" }, { src: "/images/egyedi-w4.webp" }, { src: "/images/egyedi-w6.webp" }, { src: "/images/egyedi-w7.webp" }, { src: "/images/egyedi-w8.webp" }, { src: "/images/egyedi-w9.webp" }, { src: "/images/egyedi-w10.webp" }] },
  "akcio:products": { sectionTitle: "Aktuális akciók", products: [{ name: "Chesterfield kanapé – sötét szövet", badge: "CHESTERFIELD AKCIÓ", mainImage: "/images/chesterfield-w2.webp", image2: "/images/chesterfield-w3.webp", originalPrice: "553000", salePrice: "498000", saleEnds: "2026-07-31", href: "/butoraink/kanapek/chesterfield-kanapek" }, { name: "Chesterfield kanapé – bézs szövet", badge: "CHESTERFIELD AKCIÓ", mainImage: "/images/chesterfield-w1.webp", image2: "/images/chesterfield-w4.webp", originalPrice: "498000", salePrice: "448000", saleEnds: "2026-07-31", href: "/butoraink/kanapek/chesterfield-kanapek" }, { name: "Kárpitozott franciaágy", badge: "SUPER SALE", mainImage: "/images/franciaaggy-w1.webp", image2: "/images/franciaaggy-w2.webp", originalPrice: "392100", salePrice: "315000", saleEnds: "2026-07-31", href: "/butoraink/franciaagyak" }, { name: "Lila fotel", badge: "SUPER SALE", mainImage: "/images/fotelek-w1.webp", originalPrice: "82820", salePrice: "75000", saleEnds: "2026-07-31", href: "/butoraink/fotelek" }] },
  "kanapek-card:olds-club": { name: "Old's Club Kanapék", tagline: "Karakteres elegancia", href: "/butoraink/kanapek/olds-club-kanapek", images: ["/images/olds-club-w1.webp", "/images/olds-club-w2.webp", "/images/olds-club-w4.webp"] },
  "kanapek-card:ivone": { name: "Ivone kanapék", tagline: "Nappalid éke", href: "/butoraink/kanapek/ivone-kanapek", images: ["/images/ivone-w1.webp", "/images/ivone-w5.webp", "/images/ivone-w7.webp"] },
  "kanapek-card:design": { name: "Design Kanapék", tagline: "Modern minőség", href: "/butoraink/kanapek/design-kanapek", images: ["/images/design-w1.webp", "/images/design-w2.webp", "/images/design-w4.webp"] },
  "kanapek-card:chesterfield": { name: "Chesterfield kanapék", tagline: "A bútor, aminek történelme van", href: "/butoraink/kanapek/chesterfield-kanapek", images: ["/images/chesterfield-w1.webp", "/images/chesterfield-w2.webp", "/images/chesterfield-w3.webp"] },
  "kanapek-card:new-york": { name: "New York kanapék", tagline: "Klasszikus stílus", href: "/butoraink/kanapek/new-york-kanapek", images: ["/images/new-york-w1.webp", "/images/new-york-w2.webp", "/images/new-york-w4.webp"] },
  "kanapek-card:joker": { name: "Joker Kanapék", tagline: "Gáláns megjelenés", href: "/butoraink/kanapek/joker-kanapek", images: ["/images/joker-w1.webp", "/images/joker-w3.webp", "/images/joker-w4.webp"] },
  "kanapek-card:cannes": { name: "Cannes Kanapé", tagline: "A modern sarok", href: "/butoraink/kanapek/cannes-kanapek", images: ["/images/cannes-w1.webp", "/images/cannes-w2.webp", "/images/cannes-w3.webp"] },
  "fotelek-card:olds-club": { name: "Old's Club Fotel", tagline: "Karakteres elegancia", href: "/butoraink/fotelek/olds-club-fotel", images: ["/images/fotelek-w1.webp"] },
  "fotelek-card:ivone": { name: "Ivone Fotel", tagline: "Nappalid éke", href: "/butoraink/fotelek/ivone-fotel", images: ["/images/ivone-w1.webp"] },
  "fotelek-card:design": { name: "Design Fotel", tagline: "Modern minőség", href: "/butoraink/fotelek/design-fotel", images: ["/images/design-w1.webp"] },
  "fotelek-card:chesterfield": { name: "Chesterfield Fotel", tagline: "A bútor, aminek történelme van", href: "/butoraink/fotelek/chesterfield-fotel", images: ["/images/chesterfield-w4.webp"] },
  "fotelek-card:new-york": { name: "New York Fotel", tagline: "Klasszikus stílus", href: "/butoraink/fotelek/new-york-fotel", images: ["/images/new-york-w5.webp"] },
  "fotelek-card:joker": { name: "Joker Fotel", tagline: "Elegáns bútor, bárhova", href: "/butoraink/fotelek/joker-fotel", images: ["/images/joker-w1.webp"] },
  "fotelek-card:tovabbi": { name: "További Fotelek", tagline: "Kényelem, karfával", href: "/butoraink/fotelek/tovabbi-fotelek", images: ["/images/fotelek-w2.webp", "/images/fotelek-w3.webp"] },
  "franciaagyak-card:bilbao": { name: "Bilbao franciaágy", tagline: "Kényelmedre", href: "/butoraink/franciaagyak", images: ["/images/franciaaggy-w3.webp", "/images/franciaaggy-w6.webp"] },
  "franciaagyak-card:madrid": { name: "Madrid franciaágy", tagline: "Hálószobád éke", href: "/butoraink/franciaagyak", images: ["/images/franciaaggy-w2.webp", "/images/franciaaggy-w5.webp"] },
  "franciaagyak-card:tovabbi": { name: "További ágyak", tagline: "Kísértő és zseniális darabok", href: "/butoraink/franciaagyak", images: ["/images/franciaaggy-w1.webp", "/images/franciaaggy-w4.webp"] },
  "szek-card:szek": { name: "Szék, zsámoly, falvédő", tagline: "Sok féle választék", href: "/butoraink/szek-zsamoly-falvedo", images: ["/images/szek-w2.webp", "/images/szek-w9.webp"] },

  // --- RÓLUNK ---
  "rolunk:story": {
    title: "Történetünk",
    p1: "Nagykanizsán közel 20 éve készítünk bútorokat melyeket főleg Magyarországon és Németországban, de Európa szerte használnak.",
    p2: "A minőség elsődleges számunkra, ezért kizárólag tömörfa szerkezettel és nagy kopásállóságú anyagokkal dolgozunk.",
    p3: "Mivel mi vagyunk a gyártó és az eladó is, ezért nincs extra reklámköltségünk, így reális áron tudjuk adni bútoraink.",
    p4: "2000 nm-es üzemünkben bármilyen egyedi, vagy típusbútort el tudunk készíteni lakásokba, kávézókba, éttermekbe vagy szállodákba is.",
    quote: "Bizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak.",
    quoteAuthor: "Bernlef",
  },
  "rolunk:stats": {
    items: [
      { label: "Alapítva", value: "2015" },
      { label: "Telephely", value: "2000 nm" },
      { label: "Tapasztalat", value: "~20 év" },
      { label: "Garancia", value: "3+10 év" },
    ],
  },
  "rolunk:cta": {
    title: "Egyedi bútort szeretne?",
    subtitle: "Vegye fel velünk a kapcsolatot – 24 órán belül visszahívjuk!",
    phone: "+36 30 377 8983",
  },

  // --- CHESTERFIELD KATEGÓRIA ---
  "chesterfield:hero": {
    title: "A Chesterfield",
    body: "A Chesterfield bútorok az elegancia, a hagyomány és a stílus tökéletes kombinációi. A mély gombolás, a bőrborítás és a karakteres formavilág évszázadok óta a luxus és a kifinomult ízlés szimbólumai. Legyen szó klasszikus bőrkanapéról vagy modern újragondolásról, a Chesterfield mindig időtálló választás.",
  },
  "chesterfield:subtopics": {
    sectionTitle: "Ismerkedj meg a Chesterfieldel",
    items: [
      { title: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete", desc: "Fedezd fel, hogyan született meg a Chesterfield kanapé legendája az angol arisztokrácia világában! A stílusos bútor gyökerei egészen a 18. századig nyúlnak vissza, és máig az elegancia szimbóluma maradt." },
      { title: "Chesterfield stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek", desc: "Mi teszi a Chesterfieldtet igazán különlegessé? Ismerd meg a jellegzetes gombolást, mély ülőrészt, bőrborítást és díszes karfákat – a formai jegyeket, amik ikonikus bútordarabbá tették." },
      { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak", desc: "A Chesterfield bútorok nemcsak szépek, hanem időtállók is – de vajon mitől? Bemutatjuk a leggyakoribb bőr- és kárpitfajtákat, illetve a tradicionális kézműves technikákat, amelyek a minőséget garantálják." },
      { title: "A Chesterfield a modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben", desc: "Bár klasszikus darab, a Chesterfield remekül illeszkedik a mai modern terekbe is. Inspirációk és tippek arra, hogyan kombinálhatod ezt az időtlen bútort a mai stílusokkal – legyen az minimalista, loft vagy vintage." },
    ],
  },
  "chesterfield:eternal": {
    title: "A Chesterfield örök",
    body: "Közel 20 éve gyártunk Chesterfield bútorokat. Mondhatni, ők már családtagok. Rendelj tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel és minőségi szövettel vagy bőr bevonattal.",
  },

  // --- ÜZLETI OLDAL ---
  "uzleti:hero": {
    tagline: "Üzleti megrendelések",
    title: "Éttermeknek, szállodáknak, rendelőknek, fogadóterekbe",
    body: "2000 nm-es üzemünkben rendszeresen gyártunk nem csak lakossági, hanem üzleti megrendelésre is termékeket. Tömörfa szerkezettel, nagy kopásállóságú anyagokkal dolgozunk, így a bútor forgalmas helyeken is hosszú élettartammal rendelkezik.",
  },
  "uzleti:intro": {
    body: "Minden ügyfelünkkel egyedileg foglalkozunk.\n\nTelefonos vagy emailes egyeztetést követően ingyenes helyszíni egyeztetéssel rövid határidőn belül elkészítjük a kért bútorokat.\n\nNézd meg referenciáinkat és kérj árajánlatot!",
  },
  "uzleti:segments": {
    items: [
      { title: "Szálloda, fogadótér", desc: "Örömmel készítünk azonos designban többféle, egyedi méretű terméket.", image: "/images/uzleti-szalloda.webp" },
      { title: "Rendelő", desc: "Egy orvosi rendelő nem lehetne autentikus egy Chesterfield kanapé vagy néhány fotel nélkül.", image: "/images/uzleti-rendelo.webp" },
      { title: "Étterem, kávézó", desc: "Teljes, nagy teherbírású szetteket gyártunk kis kávézók vagy nagy éttermek részére.", image: "/images/uzleti-etterem.webp" },
      { title: "Airbnb", desc: "Egyedi, kisebb helységű Airbnb-k számára készítünk okos és vagány megoldásokat.", image: "/images/uzleti-airbnb.webp" },
    ],
  },
  "uzleti:benefits": {
    title: "Miért válasszon minket üzleti célra?",
    items: "Nagy teherbírású kárpit anyagok (>100.000 martindale)\nTömörfa váz – 10 év vázgarancia\nEgyedi méret, szín és kialakítás\nTömegtermelési lehetőség – 2000 nm-es üzem\nIngyenes helyszíni egyeztetés\nRövid határidő – 4–6 hét",
  },
  "uzleti:refs": {
    title: "Referenciák és inspirációk",
    images: [
      { src: "/images/uzleti-ref1.webp" },
      { src: "/images/uzleti-ref2.webp" },
      { src: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp" },
    ],
  },

  // --- BÚTORGYÁRTÁS ---
  "butorgyartas:subtopics": {
    items: [
      { title: "Bútortervezés", href: "/butorgyartas/tervezes", desc: "CAD modellezés, ergonómia, fenntarthatóság." },
      { title: "Alapanyagok", href: "/butorgyartas/anyagok", desc: "Tömörfa, kárpit, szövet – mi számít a minőségben?" },
      { title: "A bútorgyártás menete", href: "/butorgyartas/butorgyartas-folyamata", desc: "Tervezéstől a kész darabig – hogyan készül egy bútor?" },
    ],
  },
  "butorgyartas:content": {
    title: "Kézműves precizitás modern technológiával",
    p1: "A bútorgyártás komplex, precíz folyamat, ahol minden fázis hatással van a végső minőségre. A munkafolyamat a tervezéstől indul, és az anyagbeszerzésen, alkatrészelőkészítésen, összeszerelésen, kárpitozáson át vezet a kész darabig.",
    p2: "Automatizált berendezéseket (CNC marók, lézervágók) és hagyományos kézimunkát egyaránt alkalmazunk – a részletmunka, kárpitozás és végső kikészítés kézzel történik.",
    quote: "Egy jól megmunkált sarok, feszesen húzott kárpit, precízen illeszkedő elemek – ezek mind hozzájárulnak a bútor karakteréhez és tartósságához.",
  },
};

const rows = Object.entries(defaults).map(([id, config]) => ({ id, config, updated_at: new Date().toISOString() }));

const { error, data } = await supabase.from("module_configs").upsert(rows, { onConflict: "id" });

if (error) {
  console.error("Error:", error.message);
  process.exit(1);
}

console.log(`Seeded ${rows.length} module configs into Supabase.`);
