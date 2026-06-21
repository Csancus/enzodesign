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
    ];
  },
};

export default nextConfig;
