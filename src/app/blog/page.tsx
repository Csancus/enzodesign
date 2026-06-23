import type { Metadata } from "next";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";
import BlogList from "./BlogList";
import { getModuleConfig } from "@/lib/moduleStore";
import type { BlogPostMeta } from "@/app/api/admin/blog-posts/route";

export const metadata: Metadata = {
  title: "Blog – Enzo Design",
  description: "Kárpitozott bútorokról, Chesterfieldről, egyedi rendelésről és enteriőr trendekről – az Enzo Design blog.",

  alternates: { canonical: "https://enzodesign.hu/blog" },
  openGraph: {
    title: "Blog – Enzo Design",
    description: "Kárpitozott bútorokról, Chesterfieldről, egyedi rendelésről és enteriőr trendekről – az Enzo Design blog.",
    url: "https://enzodesign.hu/blog",
    images: [{ url: "/images/chesterfield-w1.webp", width: 1920, height: 800 }],
  },
};

const POSTS = [
  {
    slug: "chesterfield-puff",
    title: "Chesterfield puff – elegáns zsámoly a nappaliba",
    excerpt: "A Chesterfield puff egyszerre lábzsámoly, extra ülőhely és dekorációs fókuszpont. Mutatjuk, miért illik minden Chesterfield garnitúra mellé, és hogyan rendeld meg egyedi méretben.",
    category: "chesterfield",
    readTime: "3 perc",
    image: "/images/szek-w5.webp",
  },
  {
    slug: "butorbolt-nagykanizsan",
    title: "Bútorbolt Nagykanizsán: Prémium választék, személyesen és kiszállítással is elérhető",
    excerpt: "Megbízható bútorboltot keresel Nagykanizsán? Mutatjuk, hol találod meg álmaid bútorait! Egyedi bútorok készítése Nagykanizsán – személyes egyeztetéssel, kiszállítással és garanciával.",
    category: "",
    readTime: "2 perc",
    image: "/images/slide5.webp",
  },
  {
    slug: "kanape-zalaegerszegen",
    title: "Kanapé Zalaegerszegen: Hogyan találod meg a tökéletes bútort otthonodba?",
    excerpt: "Kényelmes kanapét keresel Zalaegerszegen? Mutatjuk a legjobb megoldást! Egy új kanapé kiválasztása nem csupán esztétikai kérdés – ez a döntés évekre meghatározza a nappalid hangulatát.",
    category: "",
    readTime: "3 perc",
    image: "/images/9a0b1d_ca9a35eec98d4fa19adbea3a8060cec6.webp",
  },
  {
    slug: "bor-fotel",
    title: "Bőr fotel: Időtálló kényelem és stílus egyetlen bútordarabban",
    excerpt: "Miért érdemes valódi bőr fotelt választani? A bőr fotel egyedi megjelenése, tartóssága és karbantarthatósága miatt évtizedekig megőrzi szépségét – és értékét.",
    category: "fotel",
    readTime: "3 perc",
    image: "/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp",
  },
  {
    slug: "modern-chesterfield-kanape",
    title: "Modern Chesterfield kanapé",
    excerpt: "A Chesterfield kanapé nem csak elegáns, hanem rendkívül sokoldalú is. Mutatjuk, hogyan illik modern enteriőrbe, és milyen színek, szövetek emelik ki legjobban.",
    category: "chesterfield",
    readTime: "3 perc",
    image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
  },
  {
    slug: "melyik-chesterfield-butor-illik-hozzad",
    title: "Melyik Chesterfield bútor illik hozzád? – Stíluskalauz színekhez és formákhoz",
    excerpt: "Chesterfield kanapé, fotel vagy sarokgarnitúra? Útmutató a stílusokhoz, formákhoz és színekhez – hogy megtaláld azt a darabot, amelyik tökéletesen illik az otthonodba.",
    category: "chesterfield",
    readTime: "2 perc",
    image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp",
  },
  {
    slug: "agyazhato-chesterfield-kanape",
    title: "Ágyazható Chesterfield kanapé – Stílus és praktikum egy bútorban",
    excerpt: "Az ágyazható Chesterfield kanapé egyesíti a klasszikus eleganciát a modern igényekkel. Ideális kisebb lakásokba, ahol a stílus és a funkcionalitás egyszerre fontos.",
    category: "chesterfield",
    readTime: "2 perc",
    image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp",
  },
  {
    slug: "miert-idotallo-valasztas-a-chesterfield-kanape",
    title: "Miért időtálló választás a Chesterfield kanapé?",
    excerpt: "A Chesterfield kanapé több mint 200 éves múltra tekint vissza – és nem véletlenül maradt ennyire népszerű. Mutatjuk, miért éri meg most is Chesterfieldbe fektetni.",
    category: "chesterfield",
    readTime: "2 perc",
    image: "/images/e7ad8b_6a9bc07515294a40a1f7777272c2786e.webp",
  },
  {
    slug: "tomorfa-butor",
    title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?",
    excerpt: "Tévhitek a tömörfáról, előnyök az MDF-fel szemben, és miért garantálja a tartósságot. A tömörfa bútor nemcsak szép – évtizedekig megőrzi formáját és szilárdságát.",
    category: "",
    readTime: "1 perc",
    image: "/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp",
  },
  {
    slug: "egyedi-butor-keszittetes",
    title: "Egyedi bútor készíttetés – mire figyelj, ha saját ötleted van?",
    excerpt: "Vizuális kiindulópont, méretek, anyagválasztás és konzultáció – minden, amit tudni érdemes, mielőtt egyedi bútor rendelésbe kezdesz.",
    category: "",
    readTime: "1 perc",
    image: "/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp",
  },
  {
    slug: "miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni",
    title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?",
    excerpt: "5 ok, amiért érdemes egyenesen a gyártótól rendelni – ár, egyediség, minőség, gyorsabb átfutás és közvetlen kapcsolat. Így spórolhatsz akár 30-40%-ot is.",
    category: "",
    readTime: "2 perc",
    image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog – Enzo Design",
  "url": "https://enzodesign.hu/blog",
  "description": "Kárpitozott bútorokról, Chesterfieldről, egyedi rendelésről és enteriőr trendekről – az Enzo Design blog.",
  "publisher": { "@type": "Organization", "name": "Enzo Design", "url": "https://enzodesign.hu" },
  "blogPost": POSTS.map((p) => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.excerpt,
    "url": `https://enzodesign.hu/blog/${p.slug}`,
    "image": `https://enzodesign.hu${p.image}`,
  })),
};

export default async function BlogPage() {
  const stored = await getModuleConfig("blog:dynamic-posts");
  const dynamicPosts = ((stored.posts as BlogPostMeta[]) ?? []).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    readTime: p.readTime,
    image: p.image || "/images/chesterfield-w1.webp",
  }));

  const allPosts = [...dynamicPosts, ...POSTS];

  const allJsonLd = {
    ...blogJsonLd,
    blogPost: allPosts.map((p) => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "description": p.excerpt,
      "url": `https://enzodesign.hu/blog/${p.slug}`,
      "image": `https://enzodesign.hu${p.image}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allJsonLd) }} />
      <PageHero moduleId="hero:blog" defaults={{ title: "Blog", label: "Írások" }} />
      <BlogList posts={allPosts} />
      <ContactFormSection />
    </>
  );
}
