import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bőr fotel – Enzo Design",
  description: "Időtálló kényelem és stílus egyetlen bútordarabban – miért érdemes valódi bőr fotelt választani.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Bőr fotel</span>
        </div>
      </nav>
      <PageHero moduleId="blog-bor-fotel:hero" defaults={{ title: "Bőr fotel" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Bőr Chesterfield fotel" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              A bőr fotel a klasszikus Chesterfield stílus legkifinomultabb megjelenési formája. Valódi bőrből
              készített bútor nem csupán esztétikailag különleges – tartóssága és patinaszerű öregedése idővel
              egyre értékesebbé teszi.
            </p>
            <p>
              Az Enzo Design foteljeiben olasz valódi bőrt használunk, amely az évtizedek során csak szebbé
              válik. A bőr felületek kezelése és a kárpitozás kézzel történik – minden varrat precíz,
              minden gomb megfelelő feszességű.
            </p>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Bőr vagy szövet?
            </h2>
            <p>
              Mindkettőnek megvan az előnye. A bőr tartósabb, könnyebben tisztítható és idővel patinaszerű
              felületet kap – ideális klasszikus, elegáns enteriőrbe. A szövet puhábbnak érződik,
              több szín és minta közül lehet választani, és hőszabályozóbb is lehet.
            </p>
            <p>
              Chesterfield foteleink mindkét anyagban rendelhetők. A bőr változat ára 421.695 Ft-tól indul,
              a szövet változaté 324.380 Ft-tól – mindkettő tömörfa szerkezettel, 3+10 év garanciával.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Érdekli a bőr fotel? Kérdezzen bátran!</p>
            <Link href="/butoraink/fotelek/chesterfield-fotel" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              Foteljeink árai
            </Link>
          </div>

          <div className="mt-6">
            <Link href="/blog" className="text-[#7d6142] font-semibold hover:underline text-sm">← Vissza a bloghoz</Link>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </>
  );
}
