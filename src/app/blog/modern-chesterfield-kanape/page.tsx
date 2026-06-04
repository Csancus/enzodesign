import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Modern Chesterfield kanapé – Enzo Design",
  description: "A Chesterfield kanapé nem csak elegáns, hanem rendkívül sokoldalú is – hogyan illik modern enteriőrbe?",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Modern Chesterfield kanapé</span>
        </div>
      </nav>
      <PageHero moduleId="blog-modern-chesterfield-kanape:hero" defaults={{ title: "Modern Chesterfield kanapé" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Modern Chesterfield kanapé" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Sokan azt gondolják, hogy a Chesterfield kanapé csak klasszikus, ódivatú enteriőrbe illik.
              Ez azonban tévhit – a Chesterfield az egyik legjobban alkalmazkodó bútortípus, amely
              modern lakásban is otthon van.
            </p>
            <p>
              A kulcs az anyagválasztás. Míg a hagyományos bőr bevonat valóban inkább klasszikus hangulatot
              teremt, egy szürke bársony vagy sötétkék sennilé szövetű Chesterfield kanapé tökéletesen
              illeszkedik egy modern, skandináv stílusú nappaliba is.
            </p>
            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              A forma időtlen, az anyag rugalmas
            </h2>
            <p>
              Az Enzo Design Chesterfield kollekcióban több mint 100 szövet- és bőrfajtából lehet választani.
              A mélyen gombolt háttámla és az ívelt kartámaszok az eredeti formát tartják – de a szín,
              az anyag és a méret szabadon testreszabható.
            </p>
            <p>
              Legyen szó kétszemélyes kanapéról, háromszemelyesről vagy sarokkanapéról – a Chesterfield
              minden konfigurációban rendelhető, 399.810 Ft-tól.
            </p>
            <blockquote className="border-l-4 border-[#7d6142] pl-4 italic text-gray-500 my-6">
              „Bizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak." – Bernlef
            </blockquote>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Rendelje meg Chesterfield kanapéját!</p>
            <Link href="/butoraink/kanapek/chesterfield-kanapek" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              Árak és kollekció
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
