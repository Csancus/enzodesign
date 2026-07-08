import type { NextConfig } from "next";

// Régi (Wix) URL-ek átirányításai. FONTOS: az ékezetes source-okat a Next
// a percent-ENKÓDOLT beérkező útvonalhoz illeszti, ezért minden nem-ASCII
// source mellé automatikusan felvesszük az encodeURI-s változatot is
// (a GSC-ben látott 404-ek oka az volt, hogy csak a dekódolt forma szerepelt).
type Redirect = { source: string; destination: string; permanent: boolean };

const rawRedirects: Redirect[] = [
  // Régi városoldal URL-ek (ragozott)
  { source: "/home", destination: "/", permanent: true },
  { source: "/butorbolt-zalaegerszegen", destination: "/butorbolt-zalaegerszeg", permanent: true },
  { source: "/butorbolt-kaposvaron",     destination: "/butorbolt-kaposvar",     permanent: true },
  { source: "/butorbolt-keszthelyen",    destination: "/butorbolt-keszthely",    permanent: true },
  { source: "/butorbolt-siofokon",       destination: "/butorbolt-siofok",       permanent: true },
  { source: "/butorbolt-tapolcan",       destination: "/butorbolt-tapolca",      permanent: true },
  { source: "/butorbolt-marcaliban",     destination: "/butorbolt-marcali",      permanent: true },
  { source: "/butorbolt-kormenden",      destination: "/butorbolt-kormend",      permanent: true },
  { source: "/butorbolt-barcson",        destination: "/butorbolt-barcs",        permanent: true },
  { source: "/butorbolt-szigetvaron",    destination: "/butorbolt-szigetvar",    permanent: true },
  { source: "/butorbolt-nagykanizsán",   destination: "/butorbolt-nagykanizsa",  permanent: true },
  { source: "/butorbolt-budapesten",     destination: "/butorbolt-budapest",     permanent: true },

  // Régi Wix kanapék oldalak (ékezetes → ékezet nélküli)
  { source: "/butoraink/kanapék",                        destination: "/butoraink/kanapek",                      permanent: true },
  { source: "/butoraink/kanapék/olds-club-kanapék",      destination: "/butoraink/kanapek/olds-club-kanapek",    permanent: true },
  { source: "/butoraink/kanapék/ivone-kanapék",          destination: "/butoraink/kanapek/ivone-kanapek",        permanent: true },
  { source: "/butoraink/kanapék/design-kanapék",         destination: "/butoraink/kanapek/design-kanapek",       permanent: true },
  { source: "/butoraink/kanapék/chesterfield-kanapék",   destination: "/butoraink/kanapek/chesterfield-kanapek", permanent: true },
  { source: "/butoraink/kanapék/new-york-kanapék",       destination: "/butoraink/kanapek/new-york-kanapek",     permanent: true },
  { source: "/butoraink/kanapék/joker-kanapék",          destination: "/butoraink/kanapek/joker-kanapek",        permanent: true },
  { source: "/butoraink/kanapék/cannes-kanapé",          destination: "/butoraink/kanapek/cannes-kanapek",       permanent: true },

  // Régi Wix franciaágyak oldalak
  { source: "/butoraink/franciaágyak",                             destination: "/butoraink/franciaagyak", permanent: true },
  { source: "/butoraink/franciaágyak/franciaágyak-termékoldal",    destination: "/butoraink/franciaagyak", permanent: true },

  // Régi Wix szék aloldal
  { source: "/butoraink/szek-zsamoly-falvedo/székek-zsámolyok-falvédők", destination: "/butoraink/szek-zsamoly-falvedo", permanent: true },

  // Régi Wix egyéb oldalak
  { source: "/about-7",              destination: "/rolunk",                permanent: true },
  { source: "/copy-of-bútoráink-1",  destination: "/butoraink",             permanent: true },
  { source: "/copy-of-butoraink-1",  destination: "/butoraink",             permanent: true },
  { source: "/joker-kollekció",      destination: "/joker-kollekcio",       permanent: true },
  { source: "/ivone-kollekció",      destination: "/ivone-kollekcio",       permanent: true },
  { source: "/new-york-kollekció",   destination: "/new-york-kollekcio",    permanent: true },
  { source: "/olds-club-kollekció",  destination: "/olds-club-kollekcio",   permanent: true },
  { source: "/butoraink/butorrendeles",   destination: "/kapcsolat-es-rendeles",  permanent: true },
  { source: "/butoraink/egyedi-bútor",    destination: "/butoraink/egyedi-butor", permanent: true },
  { source: "/butoraink/kollekciók/design-butorok", destination: "/design-butorok", permanent: true },

  // Régi Wix chesterfield tudástár cikkek gyökér-URL-en (aloldal-prefix nélkül)
  { source: "/a-chesterfield-kanape-eredete",           destination: "/chesterfield/a-chesterfield-kanape-eredete",           permanent: true },
  { source: "/chesterfield-a-modern-enteriorben",       destination: "/chesterfield/chesterfield-a-modern-enteriorben",       permanent: true },
  { source: "/chesterfield-anyagok-es-gyartai-technikak", destination: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak", permanent: true },
  { source: "/chesterfield-stilus-es-formajegyek",      destination: "/chesterfield/chesterfield-stilus-es-formajegyek",      permanent: true },

  // Régi Wix /de/ nyelvi változatok → magyar oldalak
  { source: "/de",         destination: "/", permanent: true },
  { source: "/de/:path*",  destination: "/:path*", permanent: true },

  // Régi Wix /post/ blog URL-ek → új /blog/ URL-ek
  { source: "/post/melyik-chesterfield-bútor-illik-hozzád-stíluskalauz-színekhez-és-formákhoz", destination: "/blog/melyik-chesterfield-butor-illik-hozzad", permanent: true },
  { source: "/post/modern-chesterfield-kanapé",                                                 destination: "/blog/modern-chesterfield-kanape",             permanent: true },
  { source: "/post/ágyazható-chesterfield-kanapé-stílus-és-praktikum-egy-bútorban",             destination: "/blog/agyazhato-chesterfield-kanape",          permanent: true },
  { source: "/post/kanapé-zalaegerszegen-hogyan-találod-meg-a-tökéletes-bútort-otthonodba",     destination: "/blog/kanape-zalaegerszegen",                  permanent: true },
  { source: "/post/bőr-fotel-időtálló-kényelem-és-stílus-egyetlen-bútordarabban",               destination: "/blog/bor-fotel",                              permanent: true },
  { source: "/post/bútorbolt-nagykanizsán-prémium-választék-személyesen-és-kiszállítással-is-elérhető", destination: "/blog/butorbolt-nagykanizsan",         permanent: true },
  { source: "/blog/butorbolt-nagykanizsán",                                                     destination: "/blog/butorbolt-nagykanizsan",                 permanent: true },
  { source: "/post/miért-időtálló-választás-a-chesterfield-kanapé",                             destination: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape", permanent: true },
  { source: "/post/tömörfa-bútor-időtálló-befektetés-vagy-elavult-megoldás",                    destination: "/blog/tomorfa-butor",                          permanent: true },
  { source: "/post/miért-éri-meg-közvetlenül-a-bútorgyártótól-vásárolni",                       destination: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni", permanent: true },
  { source: "/post/egyedi-bútor-készíttetés-mire-figyelj-ha-saját-ötleted-van",                 destination: "/blog/egyedi-butor-keszittetes",               permanent: true },
  { source: "/post/:path*", destination: "/blog", permanent: true },
];

function withEncodedVariants(redirects: Redirect[]): Redirect[] {
  const out: Redirect[] = [];
  for (const r of redirects) {
    out.push(r);
    const encoded = encodeURI(r.source);
    if (encoded !== r.source) out.push({ ...r, source: encoded });
  }
  return out;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  async redirects() {
    return withEncodedVariants(rawRedirects);
  },
};

export default nextConfig;
