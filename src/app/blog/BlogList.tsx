"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
};

const CATEGORIES = ["Összes", "chesterfield", "fotel"];

export default function BlogList({ posts }: { posts: Post[] }) {
  const [active, setActive] = useState("Összes");

  const filtered = active === "Összes"
    ? posts
    : posts.filter((p) => p.category.toLowerCase() === active.toLowerCase());

  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Category filter */}
        <div className="flex gap-2 mb-10 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm font-medium border transition-colors ${
                active === cat
                  ? "bg-[#7d6142] text-white border-[#7d6142]"
                  : "bg-white text-[#7d6142] border-[#7d6142] hover:bg-[#f5f0e8]"
              }`}
            >
              {cat === "Összes" ? "All Posts" : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-white border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {post.category && (
                    <span className="text-xs font-semibold text-[#7d6142] uppercase tracking-wide">
                      {post.category}
                    </span>
                  )}
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{post.readTime} olvasás</span>
                </div>
                <h2
                  className="text-base font-bold text-[#1c1c1c] mb-2 leading-snug group-hover:text-[#7d6142] transition-colors line-clamp-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
