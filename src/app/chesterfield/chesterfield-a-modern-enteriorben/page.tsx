import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "A Chesterfield a modern enteriőrben" };

export default function Page() {
  return (
    <>
      <nav className="bg-[#1c1c1c] py-4 px-4 text-sm text-gray-400">
        <div className="max-w-4xl mx-auto">
          <Link href="/chesterfield" className="hover:text-white">Chesterfield</Link>
          <span className="mx-2">/</span>
          <span className="text-[#b8924a]">A modern enteriőrben</span>
        </div>
      </nav>
      <PageHero
        title="A Chesterfield a modern enteriőrben"
        imageSrc="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp"
      />

      {/* TARTALOM */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            A Chesterfield kanapé klasszikus stílusa a 18. századra nyúlik vissza, mégis tökéletesen illeszkedik a kortárs enteriőr trendekbe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-[#1c1c1c] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                A Chesterfield a modern enteriőrben
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Chesterfield népszerűsége nem csupán történelmi súlyából ered – formavilága és alkalmazkodóképessége
                biztosítja, hogy a mai otthonokban is releváns maradjon. A klasszikus barna vagy fekete bőr változatok
                elegáns nappalikhoz illenek, míg a világos bársony verziók romantikus hangulatot teremtenek.
              </p>
              <div className="space-y-4 mt-6">
                {[
                  { style: "Elegáns nappali", desc: "Klasszikus barna/fekete bőr Chesterfield – időtálló, prémium hatás." },
                  { style: "Hálószoba / olvasósarok", desc: "Világos bársony változat – puha, meleg, nőies eleganciával." },
                  { style: "Skandináv stílus", desc: "Szürke-kék modell vékony lábakon – könnyű, légies hatás." },
                  { style: "Ipari loft", desc: "Sötét bőr szegecses részletekkel – erős karakterű választás." },
                  { style: "Minimalista enteriőr", desc: "Egyszínű anyagú, modern talpas verzió – visszafogott eleganciával." },
                ].map(s => (
                  <div key={s.style} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#7d6142] flex-shrink-0 mt-1.5" />
                    <div>
                      <span className="font-semibold text-[#1c1c1c] text-sm">{s.style}: </span>
                      <span className="text-gray-600 text-sm">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/e7ad8b_b0943221b51548cbbe6d97a0e24fbeb6.webp" alt="Chesterfield modern enteriőrben" fill className="object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/e7ad8b_aceaccd7ca6746cb804d31e17d3c8352.webp" alt="Modern részlet" fill className="object-cover" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image src="/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp" alt="Chesterfield stílus" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KAPCSOLÓDÓ CIKKEK */}
      <section className="py-12 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Kapcsolódó cikkek
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete" },
              { title: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek" },
              { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak" },
            ].map(a => (
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
