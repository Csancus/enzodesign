export type ProductConfig = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  pricing: {
    fotel?: { alap: number; bor?: number };
    ketSzemelyes?: { alap: number; bor?: number };
    haromSzemelyes?: { alap: number; bor?: number };
    sarok?: { alap: number; bor?: number };
    agyFunkcio?: number;
  };
  features: string[];
  category: "kanapek" | "fotelek" | "franciaagyak" | "szekek";
};

export const SOFA_COLLECTIONS = [
  {
    slug: "olds-club-kanapek",
    name: "Old's Club",
    tagline: "Karakteres elegancia",
    description:
      "Az Old's Club kanapé letisztult formáival és maximális funkcionalitásával az elegancia és a kényelem tökéletes szintézise. Széles ülőfelület, puha háttámla – ideális pihenéshez és vendégfogadáshoz.",
    image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
    gallery: [],
    pricing: {
      fotel: { alap: 360420, bor: 468545 },
      ketSzemelyes: { alap: 444240, bor: 667510 },
      haromSzemelyes: { alap: 553210, bor: 919170 },
      sarok: { alap: 817240, bor: 1262412 },
      agyFunkcio: 190500,
    },
    features: ["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia"],
    category: "kanapek",
  },
  {
    slug: "ivone-kanapek",
    name: "Ivone",
    tagline: "Nappalid éke",
    description:
      "Az Ivone kanapé a klasszikus Chesterfield stílus modern újraértelmezése. Gyönyörűen steppelt háttámla és ülőfelület, íves kartámaszok – a modern elegancia megtestesítője.",
    image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp",
    gallery: [],
    pricing: {
      fotel: { alap: 360420, bor: 468545 },
      ketSzemelyes: { alap: 444240, bor: 677510 },
      haromSzemelyes: { alap: 553210, bor: 919170 },
      sarok: { alap: 817240, bor: 1262412 },
      agyFunkcio: 190500,
    },
    features: ["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia"],
    category: "kanapek",
  },
  {
    slug: "design-kanapek",
    name: "Design",
    tagline: "Modern minőség",
    description:
      "A Design kanapé modern formavilágával, letisztult vonalaival és elegáns steppelésével otthonod stílusos centerpiece-e lesz. Tömörfa váz, prémium anyagok.",
    image: "/images/e7ad8b_d510cf607aca449c835d847344231393.webp",
    gallery: [],
    pricing: {
      fotel: { alap: 360420, bor: 468545 },
      ketSzemelyes: { alap: 444240, bor: 677510 },
      haromSzemelyes: { alap: 553210, bor: 919170 },
      sarok: { alap: 817240, bor: 1262412 },
      agyFunkcio: 190500,
    },
    features: ["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia"],
    category: "kanapek",
  },
  {
    slug: "chesterfield-kanapek",
    name: "Chesterfield",
    tagline: "A bútor, aminek történelme van",
    description:
      "A Chesterfield kanapé az elegancia és a hagyomány szimbóluma. Mélyen gombolt háttámla, jellegzetes ívelt kartámaszok – egy igazán időtálló, karakteres darab.",
    image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
    gallery: [],
    pricing: {
      fotel: { alap: 324380, bor: 421695 },
      ketSzemelyes: { alap: 399810, bor: 619750 },
      haromSzemelyes: { alap: 497890, bor: 847255 },
      sarok: { alap: 735515, bor: 1156170 },
      agyFunkcio: 190500,
    },
    features: ["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia"],
    category: "kanapek",
  },
  {
    slug: "new-york-kanapek",
    name: "New York",
    tagline: "Klasszikus stílus",
    description:
      "A New York kanapé a klasszikus Chesterfield forma eleganciáját ötvözi a modern letisztultsággal. Időtálló, kényelmes választás minden nappali számára.",
    image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp",
    gallery: [],
    pricing: {
      fotel: { alap: 324380, bor: 421695 },
      ketSzemelyes: { alap: 399810, bor: 619750 },
      haromSzemelyes: { alap: 497890, bor: 847255 },
      sarok: { alap: 735515, bor: 1156170 },
      agyFunkcio: 190500,
    },
    features: ["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia"],
    category: "kanapek",
  },
  {
    slug: "joker-kanapek",
    name: "Joker",
    tagline: "Gáláns megjelenés",
    description:
      "A Joker kanapé finoman fénylő, prémium szövetborítással és mélyen gombolt háttámlával varázsolja otthonod elegánssá. Modern Chesterfield ihlette vonalak.",
    image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp",
    gallery: [],
    pricing: {
      fotel: { alap: 324380, bor: 421695 },
      ketSzemelyes: { alap: 399810, bor: 619750 },
      haromSzemelyes: { alap: 497890, bor: 847255 },
      sarok: { alap: 735515, bor: 1156170 },
      agyFunkcio: 190500,
    },
    features: ["50.000 martindale szövet", "Tömörfa szerkezet", "Prémium szivacs és rugó", "3 év garancia", "10 év vázgarancia"],
    category: "kanapek",
  },
  {
    slug: "cannes-kanapek",
    name: "Cannes",
    tagline: "A modern sarok",
    description:
      "A Cannes sarokkanapé letisztult formavilágával és kifinomult részleteivel a modern enteriőr ékköve. Állítható fejtámlák, tágas ülőfelület.",
    image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp",
    gallery: [],
    pricing: {
      sarok: { alap: 367340, bor: 787740 },
      agyFunkcio: 190500,
    },
    features: ["50.000 martindale szövet", "Tömörfa szerkezet", "Állítható fejtámlák", "3 év garancia", "10 év vázgarancia"],
    category: "kanapek",
  },
];

export const ARMCHAIR_COLLECTIONS = [
  {
    slug: "olds-club-fotel",
    name: "Old's Club Fotel",
    tagline: "Karakteres elegancia",
    description: "Az Old's Club fotel letisztult formák és maximális funkcionalitás tökéletes ötvözete.",
    image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
    pricing: { fotel: { alap: 360420, bor: 468545 } },
  },
  {
    slug: "ivone-fotel",
    name: "Ivone Fotel",
    tagline: "Nappalid éke",
    description: "Az Ivone fotel gyönyörűen steppelt háttámlával és ívelt kartámaszokkal.",
    image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp",
    pricing: { fotel: { alap: 360420, bor: 468545 } },
  },
  {
    slug: "design-fotel",
    name: "Design Fotel",
    tagline: "Modern minőség",
    description: "Modern formavilágú, letisztult vonalú fotel. 82.820 Ft-tól.",
    image: "/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp",
    pricing: { fotel: { alap: 82820, bor: 120000 } },
  },
  {
    slug: "chesterfield-fotel",
    name: "Chesterfield Fotel",
    tagline: "A bútor, aminek történelme van",
    description: "Mélyen gombolt háttámla, jellegzetes ívelt kartámaszok – a Chesterfield fotel igazán karakteres darab.",
    image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp",
    pricing: { fotel: { alap: 324380, bor: 421695 } },
  },
  {
    slug: "new-york-fotel",
    name: "New York Fotel",
    tagline: "Klasszikus stílus",
    description: "Klasszikus Chesterfield forma modern letisztultsággal ötvözve.",
    image: "/images/e7ad8b_1c16aed31acb478da7f5630873a9c4d2.webp",
    pricing: { fotel: { alap: 324380, bor: 421695 } },
  },
  {
    slug: "joker-fotel",
    name: "Joker Fotel",
    tagline: "Elegáns bútor, bárhova",
    description: "Prémium szövetborítás és gombolt háttámla – a Joker fotel otthonod ékköve.",
    image: "/images/e7ad8b_472fb74f2a1746e68ca129dbd34b2de7.webp",
    pricing: { fotel: { alap: 324380, bor: 421695 } },
  },
  {
    slug: "tovabbi-fotelek",
    name: "További Fotelek",
    tagline: "Gáláns megjelenés",
    description: "Gombolt háttámlás modellek és modern letisztult tervek is elérhetők. Nézd végig a képeket, vagy küldj egy képet Pinterestről és mi elkészítjük neked. 82.820 Ft-tól.",
    image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp",
    pricing: { fotel: { alap: 82820 } },
  },
];

export const FABRICS = [
  {
    code: "AI",
    type: "Bársony szövet",
    martindale: ">100.000",
    composition: "100% PES",
    density: "370 g/m²",
    colors: 22,
    features: ["Puha tapintású", "Selymesen fénylő", "Lángmentes", "Folyadéklepergető", "Baba- és állatbarát"],
  },
  {
    code: "AT",
    type: "Prémium bársony",
    martindale: ">100.000",
    composition: "100% PES",
    density: "450 g/m²",
    colors: 20,
    features: ["Kifinomult megjelenés", "Gazdag színvilág", "Égéskésleltetett", "Folyadéklepergető", "Baba/állat/környezetbarát"],
  },
  {
    code: "MA",
    type: "Bársony – vízlepergető",
    martindale: "100.000",
    composition: "100% POLYESTER",
    density: "–",
    colors: 49,
    features: ["Vízlepergető", "Rendkívül tartós", "49 árnyalat"],
  },
  {
    code: "AG",
    type: "Prémium bársony (ágyvégekre)",
    martindale: ">50.000",
    composition: "100% PES",
    density: "340 g/m²",
    colors: 14,
    features: ["Prémium érzet", "Ágyvégekre ideális", "Sötétkék, szőlő, burgundi, fekete, ezüst, tejeskávé, krém, gerle"],
  },
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("hu-HU", { style: "currency", currency: "HUF", maximumFractionDigits: 0 }).format(price);
