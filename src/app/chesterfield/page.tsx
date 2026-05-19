import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Chesterfield Bútorok",
  description: "Chesterfield kanapék és fotelek közel 20 éve. Tömörfa váz, prémium szövet vagy bőr bevonat.",
};

const SUBTOPICS = [
  { title: "A Chesterfield kanapé eredete", href: "/chesterfield/a-chesterfield-kanape-eredete", desc: "A 18. századi arisztokráciától napjainkig." },
  { title: "Stílus és formajegyek", href: "/chesterfield/chesterfield-stilus-es-formajegyek", desc: "A mély gombolás és kézműves precizitás." },
  { title: "Anyagok és gyártási technikák", href: "/chesterfield/chesterfield-anyagok-es-gyartai-technikak", desc: "Bőr, bársony, szövet – mi illik a Chesterfield stílushoz?" },
  { title: "A Chesterfield a modern enteriőrben", href: "/chesterfield/chesterfield-a-modern-enteriorben", desc: "Hogyan illik modern lakásba egy klasszikus bútor?" },
];

export default function ChesterfieldPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1c1c1c] py-32 text-center text-white overflow-hidden">
        <Image src="/images/e7ad8b_f3e7dfd04f494d26b0ab4fb0b4548113.webp" alt="Chesterfield kanapé" fill className="object-cover opacity-30" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">Örök elegancia</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Chesterfield
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Az elegancia és hagyomány szimbóluma. Közel 20 éve gyártunk Chesterfield bútorokat –
            mondhatni, ők már családtagok.
          </p>
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

      {/* TARTALOM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp" alt="Chesterfield kanapé" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1c1c1c] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              A Chesterfield örök
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Közel 20 éve gyártunk Chesterfield bútorokat. Mondhatni, ők már családtagok. Rendelj
              tőlünk Chesterfield bútort és mi elkészítjük tömörfa szerkezettel és minőségi szövettel
              vagy bőr bevonattal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              A Chesterfield kanapé a 18. század közepén keletkezett. A 4. Chesterfield gróf kérte fel
              udvari asztalosát, hogy készítsen olyan bútort, amely egyenes testtartást tesz lehetővé
              a ruha összegyűrődése nélkül.
            </p>
            <Link href="/butoraink/kanapek/chesterfield-kanapek" className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm">
              Chesterfield kanapék árai
            </Link>
          </div>
        </div>

        {/* ALTÉMÁK */}
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1c1c1c] mb-8 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Tudj meg többet a Chesterfieldről
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUBTOPICS.map((t) => (
              <Link key={t.href} href={t.href} className="group border border-gray-200 p-6 hover:border-[#7d6142] hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#1c1c1c] mb-2 group-hover:text-[#7d6142] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.title}
                </h3>
                <p className="text-gray-500 text-sm">{t.desc}</p>
                <span className="text-[#7d6142] text-sm font-semibold mt-3 inline-block">Olvasd el →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1c1c1c] mb-8" style={{ fontFamily: "var(--font-heading)" }}>Rendelés és kapcsolat</h2>
          <div className="bg-white p-8 shadow-sm"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
