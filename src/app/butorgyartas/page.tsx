import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Bútorgyártás",
  description: "A bútorgyártás komplex, precíz folyamat. Megismerheti az Enzo Design gyártástechnológiáját.",
};

const SECTIONS = [
  { title: "Bútorgyártás folyamata", href: "/butorgyartas/butorgyartas-folyamata", desc: "Tervezéstől a kész darabig – hogyan készül egy bútor?" },
  { title: "Tervezés", href: "/butorgyartas/tervezes", desc: "CAD modellezés, ergonómia, fenntarthatóság." },
  { title: "Anyagok", href: "/butorgyartas/anyagok", desc: "Tömörfa, kárpit, szövet – mi számít a minőségben?" },
];

export default function ButorgyartasPage() {
  return (
    <>
      <section className="bg-[#1c1c1c] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Szakértelem</p>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Bútorgyártás
          </h1>
          <p className="mt-4 text-gray-300">
            A bútorok otthonaink, irodáink és közösségi tereink alapvető részei – tudja meg, hogyan készülnek a mi kezünkből.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
            <p className="text-gray-600 leading-relaxed">
              „Egy jól megmunkált sarok, feszesen húzott kárpit, precízen illeszkedő elemek –
              ezek mind hozzájárulnak a bútor karakteréhez és tartósságához."
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/uzem.jpg" alt="Bútorgyártás" fill className="object-cover" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="group border border-gray-200 p-6 hover:border-[#7d6142] hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
              <span className="text-[#7d6142] text-sm font-semibold mt-3 inline-block">Tovább →</span>
            </Link>
          ))}
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
