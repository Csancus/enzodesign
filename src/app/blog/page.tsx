import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

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
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Írások</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Blog
          </h1>
        </div>
      </section>

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

      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>Rendelés és kapcsolat</h2>
          <div className="bg-white p-8 shadow-sm"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
