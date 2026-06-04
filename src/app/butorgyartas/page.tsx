import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Bútorgyártás",
  description: "A bútorgyártás komplex, precíz folyamat. Megismerheti az Enzo Design gyártástechnológiáját.",
};

const SECTIONS = [
  { title: "Bútortervezés", href: "/butorgyartas/tervezes", desc: "CAD modellezés, ergonómia, fenntarthatóság." },
  { title: "Alapanyagok", href: "/butorgyartas/anyagok", desc: "Tömörfa, kárpit, szövet – mi számít a minőségben?" },
  { title: "A bútorgyártás menete", href: "/butorgyartas/butorgyartas-folyamata", desc: "Tervezéstől a kész darabig – hogyan készül egy bútor?" },
];

export default function ButorgyartasPage() {
  return (
    <>
      <PageHero
        title="A bútorgyártás világa – ahol a funkcionalitás találkozik az esztétikummal"
        subtitle="A bútorok otthonaink, irodáink és közösségi tereink alapvető részei – nem csupán használati tárgyak, hanem a tér és az életminőség formálói."
        imageSrc="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp"
      />

      {/* ALTÉMÁK */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {SECTIONS.map((s) => (
              <Link key={s.href} href={s.href} className="group border border-gray-200 p-6 hover:border-[#7d6142] hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
                <span className="text-[#7d6142] text-sm font-semibold mt-3 inline-block">Tovább →</span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Kézműves precizitás modern technológiával
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A bútorgyártás komplex, precíz folyamat, ahol minden fázis hatással van a végső minőségre.
                A munkafolyamat a tervezéstől indul, és az anyagbeszerzésen, alkatrészelőkészítésen,
                összeszerelésen, kárpitozáson át vezet a kész darabig.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Automatizált berendezéseket (CNC marók, lézervágók) és hagyományos kézimunkát egyaránt
                alkalmazunk – a részletmunka, kárpitozás és végső kikészítés kézzel történik.
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                „Egy jól megmunkált sarok, feszesen húzott kárpit, precízen illeszkedő elemek –
                ezek mind hozzájárulnak a bútor karakteréhez és tartósságához."
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/images/9a0b1d_105ca1ce5db54feab5001b7ec13a9499.webp" alt="Bútorgyártás" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* IDÉZET */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
            „Bizonyos bútorok, amelyek mellett felnő az ember, valamiképpen fontossá válnak."
          </blockquote>
          <footer className="mt-4 text-[#7d6142] font-semibold">– Bernlef</footer>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}
