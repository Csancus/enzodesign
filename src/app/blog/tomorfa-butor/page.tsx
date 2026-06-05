import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tömörfa bútor: időtálló befektetés vagy elavult megoldás? – Enzo Design",
  description: "Miért érdemes tömörfa bútort választani? Tévhitek, előnyök, összehasonlítás MDF-fel – és miért tartósabb, mint gondolnád.",
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
            <Image src="/images/nsplsh_1b3884fd54de4bf38b65c3212fdc76c7.webp" alt="Tömörfa bútor" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 leading-relaxed">
            <p>
              Sokan azt gondolják, hogy a tömörfa bútorok a múlt relikviái, és a modern lakberendezés már
              nem rájuk épít. De ez tévhit. A tömörfa nemcsak örök divat, hanem a minőség, a fenntarthatóság
              és a stílus egyik legfőbb képviselője – és egyre több vásárló keresi ezt pontosan.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Mi az a tömörfa?
            </h2>
            <p>
              Ellentétben az MDF (közepes sűrűségű farostlemez) vagy forgácslap anyagokkal, a tömörfa valódi,
              egybefüggő fatömbökből áll. Természetes, strapabíró, és egyedi erezetmintája miatt minden darab
              megismételhetetlen. Az Enzo Design bútoraiban kizárólag tömörfa vázat alkalmazunk – ez az alapja
              a 10 éves vázgaranciánknak.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Tévhitek a tömörfa bútorokról
            </h2>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f0e8]">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Tévhit</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Valóság</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">„Drága és nem éri meg"</td>
                    <td className="border border-gray-200 px-4 py-2">Hosszú távon olcsóbb, mert 20–30 évig is tart</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">„Régimódi, nem illik modern lakásba"</td>
                    <td className="border border-gray-200 px-4 py-2">Modern szövetekkel és dizájnnal kortárs megjelenésű</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">„Nem látszik, mindegy milyen az alap"</td>
                    <td className="border border-gray-200 px-4 py-2">A váz határozza meg a bútor tartósságát és formáját</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Miért érdemes tömörfát választani?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tartósság több generáción át</strong> – egy jó minőségű tömörfa vázú bútor 20–30 évig is kiszolgál.</li>
              <li><strong>Természetes anyag</strong> – nem tartalmaz mesterséges ragasztóanyagokat, egészségesebb a lakásban.</li>
              <li><strong>Esztétika</strong> – meleg, otthonos hatást kelt, amit semmilyen más anyag nem tud visszaadni.</li>
              <li><strong>Kombinálhatóság</strong> – szövetekkel, fémekkel és kortárs stílusokkal egyaránt harmonizál.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Tömörfa vs. MDF – melyik jobb?
            </h2>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#f5f0e8]">
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Szempont</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">Tömörfa</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-[#1c1c1c]">MDF / forgácslap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Élettartam</td>
                    <td className="border border-gray-200 px-4 py-2">20–30+ év</td>
                    <td className="border border-gray-200 px-4 py-2">5–10 év</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Szilárdság</td>
                    <td className="border border-gray-200 px-4 py-2">Kiváló</td>
                    <td className="border border-gray-200 px-4 py-2">Közepes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Nedvességérzékenység</td>
                    <td className="border border-gray-200 px-4 py-2">Alacsony</td>
                    <td className="border border-gray-200 px-4 py-2">Magas</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2">Ár</td>
                    <td className="border border-gray-200 px-4 py-2">Magasabb kezdeti</td>
                    <td className="border border-gray-200 px-4 py-2">Alacsonyabb kezdeti</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Hosszú távú érték</td>
                    <td className="border border-gray-200 px-4 py-2">Sokkal jobb</td>
                    <td className="border border-gray-200 px-4 py-2">Gyorsabban amortizálódik</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#1c1c1c] mt-10" style={{ fontFamily: "var(--font-heading)" }}>
              Befektetés, ami megtérül
            </h2>
            <p>
              Egy tömörfa bútor nem 5–10 évre szól, hanem 20–30-ra is. Ha jól választasz, a bútor az otthonod
              értékét is növeli. Az Enzo Design esetében ez tömörfa váz + prémium kárpit + kézi összeszerelés
              kombinációját jelenti – mindhárom tényező együtt garantálja a hosszú élettartamot és a 3+10 éves
              garanciát.
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

      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Miért éri meg gyártótól vásárolni?", href: "/blog/miert-eri-meg-kozvetlen-a-butorgyartotol-vasarlni" },
              { title: "Egyedi bútor készíttetés", href: "/blog/egyedi-butor-keszittetes" },
              { title: "Modern Chesterfield kanapé", href: "/blog/modern-chesterfield-kanape" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="bg-white p-4 hover:shadow-md transition-shadow text-sm font-semibold text-[#7d6142] hover:text-[#b8924a]">
                {a.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
