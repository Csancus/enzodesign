import type { Metadata } from "next";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description: "Enzo Design blog – bútorokról, kárpitozásról, Chesterfieldről és trendekről.",
};

const POSTS = [
  {
    slug: "butorbolt-nagykanizsán",
    title: "Bútorbolt Nagykanizsán",
    excerpt: "Prémium kárpitozott bútorok helyi megvásárlásával és kiszállításával – az Enzo Design nagykanizsai bemutatóterme.",
    category: "Általános",
    readTime: "2 perc",
    date: "2025",
  },
  {
    slug: "kanape-zalaegerszegen",
    title: "Kanapé Zalaegerszegen",
    excerpt: "Egy új kanapé kiválasztása nem csupán esztétikai kérdés – útmutató Zalaegerszeg és közelének vásárlóinak.",
    category: "Általános",
    readTime: "3 perc",
    date: "2025",
  },
  {
    slug: "bor-fotel",
    title: "Bőr fotel",
    excerpt: "Időtálló kényelem és stílus egyetlen bútordarabban – miért érdemes valódi bőr fotelt választani.",
    category: "Chesterfield",
    readTime: "3 perc",
    date: "2025",
  },
  {
    slug: "modern-chesterfield-kanape",
    title: "Modern Chesterfield kanapé",
    excerpt: "A Chesterfield kanapé nem csak elegáns, hanem rendkívül sokoldalú is – hogyan illik modern enteriőrbe?",
    category: "Chesterfield",
    readTime: "4 perc",
    date: "2025",
  },
  {
    slug: "melyik-chesterfield-butor-illik-hozzad",
    title: "Melyik Chesterfield bútor illik hozzád?",
    excerpt: "Stíluskalauz Chesterfield bútorokhoz: szék, puff, étkezőszék, forgószék – és a színek jelentése.",
    category: "Chesterfield",
    readTime: "4 perc",
    date: "2025",
  },
  {
    slug: "egyedi-butor-keszittetes",
    title: "Egyedi bútor készíttetés",
    excerpt: "Mire figyelj, ha saját ötleted van? Vizuális kiindulópont, méretek, anyagválasztás és konzultáció.",
    category: "Chesterfield",
    readTime: "3 perc",
    date: "2025",
  },
  {
    slug: "miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni",
    title: "Miért éri meg közvetlenül a bútorgyártótól vásárolni?",
    excerpt: "5 ok, amiért érdemes egyenesen a gyártótól rendelni – ár, egyediség, minőség és közvetlen kapcsolat.",
    category: "Chesterfield",
    readTime: "3 perc",
    date: "2025",
  },
  {
    slug: "miert-idotallo-valasztas-a-chesterfield-kanape",
    title: "Miért időtálló választás a Chesterfield kanapé?",
    excerpt: "A Chesterfield kanapé történelme, stílusok, modern enteriőrökbe illesztés és a legjobb színek.",
    category: "Chesterfield",
    readTime: "5 perc",
    date: "2025",
  },
  {
    slug: "tomorfa-butor",
    title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?",
    excerpt: "Tévhitek a tömörfáról, előnyök az MDF-fel szemben, és miért garantálja a tartósságot.",
    category: "Chesterfield",
    readTime: "3 perc",
    date: "2025",
  },
  {
    slug: "agyazhato-chesterfield-kanape",
    title: "Ágyazható Chesterfield kanapé",
    excerpt: "Stílus és praktikum egy bútorban – az ágyazható Chesterfield kanapé minden előnye.",
    category: "Chesterfield",
    readTime: "3 perc",
    date: "2025",
  },
];

export default async function BlogPage() {
  return (
    <>
      <PageHero moduleId="blog:hero" defaults={{ title: "Blog", label: "Írások" }} />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {POSTS.map((post) => (
              <article key={post.slug} className="border-b border-gray-100 pb-8 last:border-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#f5f0e8] text-[#7d6142] text-xs font-semibold px-2.5 py-1 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime} olvasás</span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#1c1c1c] mb-3 hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-[#7d6142] font-semibold text-sm hover:underline">
                  Olvasd el →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
