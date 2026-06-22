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
      { source: "/butoraink/egyedi-b\u00fator", destination: "/butoraink/egyedi-butor",          permanent: true },

      // Régi Wix /de/ nyelvi változatok → magyar oldalak
      { source: "/de",         destination: "/", permanent: true },
      { source: "/de/:path*",  destination: "/:path*", permanent: true },

      // Régi Wix /post/ blog URL-ek → új /blog/ URL-ek
      { source: "/post/melyik-chesterfield-b\u00fat\u00f3r-illik-hozz\u00e1d-st\u00edluskalauz-sz\u00ednekhez-\u00e9s-form\u00e1khoz", destination: "/blog/melyik-chesterfield-butor-illik-hozzad", permanent: true },
      { source: "/post/modern-chesterfield-kanap\u00e9",                                                                                destination: "/blog/modern-chesterfield-kanape",              permanent: true },
      { source: "/post/\u00e1gyazhat\u00f3-chesterfield-kanap\u00e9-st\u00edlus-\u00e9s-praktikum-egy-b\u00fatorban",                  destination: "/blog/agyazhato-chesterfield-kanape",           permanent: true },
      { source: "/post/kanap\u00e9-zalaegerszegen-hogyan-tal\u00e1lod-meg-a-t\u00f6k\u00e9letes-b\u00fatort-otthonodba",              destination: "/blog/kanape-zalaegerszegen",                    permanent: true },
      { source: "/post/b\u0151r-fotel-id\u0151t\u00e1ll\u00f3-k\u00e9nyelem-\u00e9s-st\u00edlus-egyetlen-b\u00fatordarabban",       destination: "/blog/bor-fotel",                               permanent: true },
      { source: "/post/b\u00fatorbolt-nagykanizsán-pr\u00e9mium-v\u00e1laszt\u00e9k-szem\u00e9lyesen-\u00e9s-kisz\u00e1ll\u00edt\u00e1ssal-is-el\u00e9rhet\u0151", destination: "/blog/butorbolt-nagykanizsan", permanent: true },
      { source: "/blog/butorbolt-nagykanizsán", destination: "/blog/butorbolt-nagykanizsan", permanent: true },
      { source: "/post/mi\u00e9rt-id\u0151t\u00e1ll\u00f3-v\u00e1laszt\u00e1s-a-chesterfield-kanap\u00e9",                                     destination: "/blog/miert-idotallo-valasztas-a-chesterfield-kanape",         permanent: true },
      { source: "/post/t\u00f6m\u00f6rfa-b\u00fator-id\u0151t\u00e1ll\u00f3-befektet\u00e9s-vagy-elavult-megold\u00e1s",                   destination: "/blog/tomorfa-butor",                                          permanent: true },
      { source: "/post/mi\u00e9rt-\u00e9ri-meg-k\u00f6zvetlen\u00fcl-a-b\u00fatorgy\u00e1rt\u00f3t\u00f3l-v\u00e1s\u00e1rolni",          destination: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni",      permanent: true },
      { source: "/post/egyedi-b\u00fator-k\u00e9sz\u00edttet\u00e9s-mire-figyelj-ha-saj\u00e1t-\u00f6tleted-van",                         destination: "/blog/egyedi-butor-keszittetes",                                permanent: true },
      { source: "/post/:path*", destination: "/blog", permanent: true },

    ];
  },
};

export default nextConfig;
