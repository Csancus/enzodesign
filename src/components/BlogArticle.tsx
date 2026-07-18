import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import ContactFormSection from "@/components/ContactFormSection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { getModuleConfig } from "@/lib/moduleStore";
import { getAdminStatus } from "@/lib/auth";
import { slugify } from "@/lib/slugify";
import type { FieldDef } from "@/types/cms";

export type ArticleBlock = {
  type?: "text" | "table" | "faq" | "image";
  heading?: string;
  body?: string;
  tableHead?: string; // "Szempont | Tömörfa | MDF"
  tableRows?: { cells: string }[]; // each cells: "Élettartam | 20–30+ év | 5–10 év"
  faqItems?: { question: string; answer: string }[];
  image?: string; // for type "image"
  imageAlt?: string; // alt text for the inline image
};

export type BlogArticleDefaults = {
  category?: string;
  title: string;
  date?: string;
  readTime?: string;
  coverImage?: string;
  coverAlt?: string;
  intro?: string;
  blocks: ArticleBlock[];
};

type Props = {
  slug: string; // e.g. "tomorfa-butor"
  defaults: BlogArticleDefaults;
  related?: { title: string; href: string }[];
  productLinks?: { label: string; href: string }[];
};

const ARTICLE_SCHEMA: FieldDef[] = [
  { key: "category", label: "Kategória (kis felirat a cím fölött)", type: "text" },
  { key: "title", label: "Cím", type: "text" },
  { key: "date", label: "Dátum (pl. 2025. június 1.)", type: "text" },
  { key: "readTime", label: "Olvasási idő (pl. 3 perc olvasás)", type: "text" },
  { key: "coverImage", label: "Borítókép", type: "image" },
  { key: "coverAlt", label: "Borítókép alt szöveg", type: "text" },
  { key: "intro", label: "Bevezető (a borító alatt, bekezdéseket üres sor választ el)", type: "textarea" },
  {
    key: "blocks",
    label: "Szakaszok",
    type: "array",
    addLabel: "Szakasz hozzáadása",
    itemFields: [
      { key: "type", label: "Típus: text / table / faq (üres = text)", type: "text" },
      { key: "heading", label: "Szakasz címe (a tartalomjegyzékbe kerül)", type: "text" },
      { key: "body", label: "Szöveg – TEXT típushoz (bekezdések üres sorral)", type: "textarea" },
      { key: "tableHead", label: "Táblázat fejléc – TABLE típushoz (| jellel elválasztva)", type: "text" },
      {
        key: "tableRows",
        label: "Táblázat sorok – TABLE típushoz",
        type: "array",
        addLabel: "Sor hozzáadása",
        itemFields: [{ key: "cells", label: "Cellák (| jellel elválasztva)", type: "text" }],
      },
      {
        key: "faqItems",
        label: "Kérdések – FAQ típushoz",
        type: "array",
        addLabel: "Kérdés hozzáadása",
        itemFields: [
          { key: "question", label: "Kérdés", type: "text" },
          { key: "answer", label: "Válasz", type: "textarea" },
        ],
      },
      { key: "image", label: "Kép – IMAGE típushoz", type: "image" },
      { key: "imageAlt", label: "Kép alt szövege – IMAGE típushoz", type: "text" },
    ],
  },
];

function ArticleTable({ head, rows }: { head?: string; rows?: { cells: string }[] }) {
  const headers = (head || "").split("|").map((s) => s.trim()).filter(Boolean);
  const body = (rows || []).map((r) => (r.cells || "").split("|").map((s) => s.trim()));
  if (headers.length === 0 && body.length === 0) return null;
  return (
    <div className="overflow-x-auto mb-6 -mx-1">
      <table className="w-full text-sm border-collapse">
        {headers.length > 0 && (
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="text-left font-bold text-[#1c1c1c] border-b-2 border-[#b8924a] py-2.5 px-3 bg-[#f5f0e8]/60">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {body.map((r, ri) => (
            <tr key={ri} className="border-b border-gray-200">
              {r.map((c, ci) => (
                <td key={ci} className={`py-2.5 px-3 align-top ${ci === 0 ? "font-semibold text-[#1c1c1c]" : "text-gray-600"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Paragraphs({ text }: { text: string }) {
  const paras = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return (
    <>
      {paras.map((p, i) => {
        // "## Alcím" -> h3 subheading (editable convention)
        if (p.startsWith("## ")) {
          return (
            <h3
              key={i}
              className="text-base sm:text-lg font-bold text-[#1c1c1c] mt-7 mb-2.5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {p.slice(3).trim()}
            </h3>
          );
        }
        return (
          <p key={i} className="text-gray-600 leading-[1.85] mb-5 whitespace-pre-line">
            {p}
          </p>
        );
      })}
    </>
  );
}

export default async function BlogArticle({ slug, defaults, related = [], productLinks = [] }: Props) {
  const isAdmin = await getAdminStatus();
  const cfg = await getModuleConfig(`blog:${slug}:article`);

  const a = {
    category: (cfg.category as string) || defaults.category || "Blog",
    title: (cfg.title as string) || defaults.title,
    date: (cfg.date as string) || defaults.date || "",
    readTime: (cfg.readTime as string) || defaults.readTime || "",
    coverImage: (cfg.coverImage as string) || defaults.coverImage || "",
    coverAlt: (cfg.coverAlt as string) || defaults.coverAlt || defaults.title,
    intro: (cfg.intro as string) || defaults.intro || "",
    blocks:
      Array.isArray(cfg.blocks) && (cfg.blocks as ArticleBlock[]).length > 0
        ? (cfg.blocks as ArticleBlock[])
        : defaults.blocks,
  };

  const toc = a.blocks
    .filter((b) => b.heading && b.heading.trim())
    .map((b) => ({ label: b.heading!.trim(), id: slugify(b.heading!) }));

  return (
    <>
      <article className="relative max-w-[760px] mx-auto px-5 sm:px-6 py-10 sm:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Navigációs útvonal" className="text-xs text-gray-400 mb-8 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="text-[#7d6142] hover:text-[#b8924a] font-medium">Főoldal</Link>
          <span>›</span>
          <Link href="/blog" className="text-[#7d6142] hover:text-[#b8924a] font-medium">Blog</Link>
          <span>›</span>
          <span className="text-gray-500 truncate max-w-[60%]">{a.title}</span>
        </nav>

        {/* Header */}
        <header>
          {a.category && (
            <span className="block text-[#b8924a] text-xs font-bold uppercase tracking-[0.15em] mb-3">
              {a.category}
            </span>
          )}
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#1c1c1c] leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {a.title}
          </h1>
          {(a.date || a.readTime) && (
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200 flex-wrap">
              {a.date && <time>{a.date}</time>}
              {a.date && a.readTime && <span aria-hidden="true">·</span>}
              {a.readTime && (
                <span className="bg-[#f5f0e8] text-[#7d6142] text-xs font-semibold px-3 py-1 rounded-full">
                  ⏱ {a.readTime}
                </span>
              )}
            </div>
          )}
        </header>

        {/* Cover image — controlled aspect ratio */}
        {a.coverImage && (
          <div className="relative w-full aspect-[1200/630] overflow-hidden rounded-xl mb-9">
            <Image src={a.coverImage} alt={a.coverAlt} fill priority className="object-cover" />
          </div>
        )}

        {/* Table of contents */}
        {toc.length > 1 && (
          <nav
            aria-label="Tartalomjegyzék"
            className="bg-[#f5f0e8] border border-[#e8ddd0] rounded-lg px-5 py-4 mb-9"
          >
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-[#7d6142] mb-2.5">
              Tartalomjegyzék
            </div>
            <ol className="list-decimal pl-5 space-y-1.5">
              {toc.map((t) => (
                <li key={t.id} className="text-sm text-gray-600">
                  <a href={`#${t.id}`} className="text-[#7d6142] hover:text-[#b8924a] hover:underline">
                    {t.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Body */}
        <div className="text-[0.98rem]">
          {a.intro && <Paragraphs text={a.intro} />}
          {a.blocks.map((b, i) => (
            <section key={i}>
              {b.heading && b.heading.trim() && (
                <h2
                  id={slugify(b.heading)}
                  className="text-xl sm:text-2xl font-bold text-[#1c1c1c] mt-10 mb-3 scroll-mt-24"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {b.heading}
                </h2>
              )}
              {b.type === "table" ? (
                <ArticleTable head={b.tableHead} rows={b.tableRows} />
              ) : b.type === "faq" ? (
                <div className="mb-6">
                  <FaqAccordion items={b.faqItems || []} />
                </div>
              ) : b.type === "image" && b.image ? (
                <figure className="my-7">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                    <Image src={b.image} alt={b.imageAlt || a.title} fill className="object-cover" />
                  </div>
                </figure>
              ) : (
                b.body && <Paragraphs text={b.body} />
              )}
            </section>
          ))}
        </div>

        {/* Product / category links */}
        {productLinks.length > 0 && (
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Termékek megtekintése</p>
            <div className="flex flex-wrap gap-3">
              {productLinks.map((p, i) => (
                <Link
                  key={p.href + i}
                  href={p.href}
                  className={`inline-block border text-sm font-semibold px-4 py-2 transition-colors ${
                    i === 0
                      ? "border-[#b8924a] text-[#b8924a] hover:bg-[#b8924a] hover:text-white"
                      : "border-gray-300 text-gray-600 hover:border-[#7d6142] hover:text-[#7d6142]"
                  }`}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {isAdmin && (
          <EditBtn moduleId={`blog:${slug}:article`} config={a} schema={ARTICLE_SCHEMA} label="✏ Cikk szerkesztése" positionClass="absolute top-2 right-2" />
        )}

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-bold text-[#1c1c1c] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Kapcsolódó cikkek
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="bg-[#f5f0e8] p-4 rounded-lg hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a]"
                >
                  {r.title} ›
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <div id="rendeles">
        <ContactFormSection />
      </div>
    </>
  );
}
