import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás? – Enzo Design",
  description: "Miért érdemes tömörfa bútort választani? Tévhitek, előnyök és miért tartósabb, mint az MDF vagy forgácslap.",
};

export default async function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">Tömörfa bútor</span>
        </div>
      </nav>
      <PageHero moduleId="blog-tomorfa-butor:hero" defaults={{ title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás?" }} />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative aspect-[16/7] overflow-hidden mb-10">
            <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Tömörfa bútor gyártás" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Sokan azt gondolják, hogy a tömörfa bútorok a múlt relikviái, és a modern lakberendezés
              már nem rájuk épít. De ez tévhit. A tömörfa nemcsak örök divat, hanem a minőség,
              a fenntarthatóság és a stílus egyik legfőbb képviselője.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Mi az a tömörfa?
            </h2>
            <p>
              Ellentétben az MDF vagy forgácslap anyagokkal, a tömörfa valódi, egybefüggő fatömbökből áll.
              Természetes, strapabíró és egyedi erezetmintája miatt minden darab megismételhetetlen.
              Az Enzo Design bútoraiban kizárólag tömörfa vázat alkalmazunk – ez az alapja a 10 éves
              vázgaranciánknak.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Tévhitek a tömörfa bútorokról
            </h2>
            <p>
              Sokan gondolják, hogy drága vagy régimódi. Valójában azonban az Enzo Design olyan
              szerkezeti megoldásokat alkalmaz, amelyek kortárs megjelenést és jó ár-érték arányt
              nyújtanak. A tömörfa váz nem látszik a kárpitozás alatt, de az élettartamban megmutatkozik.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Miért érdemes tömörfát választani?
            </h2>
            <p>
              A tartósság az első szempont: egy jó minőségű tömörfa vázú kárpitozott bútor generációkon
              át kiszolgál. Természetes anyag, nem tartalmaz mesterséges ragasztóanyagokat. Esztétikailag
              is megállja a helyét – meleg, otthonos hatást kelt, és bármilyen designhoz illeszkedik,
              kortárs szövetekkel és minimál stílussal is harmonizál.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-8" style={{ fontFamily: "var(--font-heading)" }}>
              Befektetés, ami megtérül
            </h2>
            <p>
              Egy tömörfából készült bútor nem csak 5–10 évre szól, hanem 20–30 évre is. Ha jól
              választasz, a bútor az otthonod értékét is növeli. Az Enzo Design esetében ez
              tömörfa váz + prémium kárpit + kézi összeszerelés kombinációját jelenti – mindhárom
              tényező együtt garantálja a hosszú élettartamot.
            </p>
          </div>

          <div className="mt-10 bg-[#f5f0e8] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-700 font-medium">Nézze meg tömörfa vázú bútoraink kínálatát!</p>
            <Link href="/butoraink" className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-6 py-3 text-sm transition-colors">
              Megnézem a bútorokat
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
