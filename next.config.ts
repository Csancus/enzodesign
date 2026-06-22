import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  async redirects() {
    return [
      // Régi városoldal URL-ek (ékezetes)
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
      { source: "/butoraink/kanap\u00e9k",                              destination: "/butoraink/kanapek",                     permanent: true },
      { source: "/butoraink/kanap\u00e9k/olds-club-kanap\u00e9k",      destination: "/butoraink/kanapek/olds-club-kanapek",    permanent: true },
      { source: "/butoraink/kanap\u00e9k/ivone-kanap\u00e9k",          destination: "/butoraink/kanapek/ivone-kanapek",        permanent: true },
      { source: "/butoraink/kanap\u00e9k/design-kanap\u00e9k",         destination: "/butoraink/kanapek/design-kanapek",       permanent: true },
      { source: "/butoraink/kanap\u00e9k/chesterfield-kanap\u00e9k",   destination: "/butoraink/kanapek/chesterfield-kanapek", permanent: true },
      { source: "/butoraink/kanap\u00e9k/new-york-kanap\u00e9k",       destination: "/butoraink/kanapek/new-york-kanapek",     permanent: true },
      { source: "/butoraink/kanap\u00e9k/joker-kanap\u00e9k",          destination: "/butoraink/kanapek/joker-kanapek",        permanent: true },
      { source: "/butoraink/kanap\u00e9k/cannes-kanap\u00e9",          destination: "/butoraink/kanapek/cannes-kanapek",       permanent: true },

      // Régi Wix franciaágyak oldalak
      { source: "/butoraink/francia\u00e1gyak",                                          destination: "/butoraink/franciaagyak", permanent: true },
      { source: "/butoraink/francia\u00e1gyak/francia\u00e1gyak-term\u00e9koldal",       destination: "/butoraink/franciaagyak", permanent: true },

      // Régi Wix szék aloldal
      { source: "/butoraink/szek-zsamoly-falvedo/sz\u00e9kek-zs\u00e1molyok-falv\u00e9d\u0151k", destination: "/butoraink/szek-zsamoly-falvedo", permanent: true },

      // Régi Wix egyéb oldalak
      { source: "/about-7",                   destination: "/rolunk",                          permanent: true },
      { source: "/copy-of-b\u00fator\u00e1ink-1", destination: "/butoraink",                  permanent: true },
      { source: "/copy-of-butoraink-1",       destination: "/butoraink",                       permanent: true },
      { source: "/joker-kollekci\u00f3",      destination: "/joker-kollekcio",                 permanent: true },
      { source: "/ivone-kollekci\u00f3",      destination: "/ivone-kollekcio",                 permanent: true },
      { source: "/new-york-kollekci\u00f3",   destination: "/new-york-kollekcio",              permanent: true },
      { source: "/olds-club-kollekci\u00f3",  destination: "/olds-club-kollekcio",             permanent: true },
      { source: "/butoraink/butorrendeles",   destination: "/kapcsolat-es-rendeles",            permanent: true },
    ];
  },
};

export default nextConfig;
