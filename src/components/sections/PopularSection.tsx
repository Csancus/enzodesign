import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Legnépszerűbb bútoraink",
  subtitle: "Válassz jelenlegi termékeinkből vagy kérj egyedi ajánlatot",
  buttonLabel: "Tovább",
  products: [
    { name: "Old's Club", desc: "Fotel, kanapé, ágy, székek", price: "2-es kanapé 444.240 Ft-tól", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/kanapek/olds-club-kanapek" },
    { name: "Ivone", desc: "Fotel, kanapé, ágy, székek", price: "2-es kanapé 444.240 Ft-tól", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek/ivone-kanapek" },
    { name: "Chesterfield", desc: "A bútor, melynek történelme van", price: "2-es kanapé 399.000 Ft-tól", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek/chesterfield-kanapek" },
    { name: "Cannes-Nizza", desc: "Egyik kedvelt darabunk", price: "Sarokkanapé 367.340 Ft-tól", image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", href: "/butoraink/kanapek/cannes-kanapek" },
    { name: "Fotelek", desc: "Bármilyen egyedi fotelt vagy széket elkészítünk", price: "Fotelek 82.820 Ft-tól", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek" },
    { name: "Étterem, hotel, üzleti bútorok", desc: "Nagy teherbírású termékeink üzleti célokra is alkalmasak", price: "Éttermi székek 76.200 Ft-tól", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
  ],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
  { key: "buttonLabel", label: "Gomb felirat", type: "text" },
  { key: "products", label: "Termékek", type: "array", itemFields: [
    { key: "name", label: "Név", type: "text" },
    { key: "desc", label: "Kategória", type: "text" },
    { key: "price", label: "Ár", type: "text" },
    { key: "image", label: "Kép", type: "image" },
    { key: "href", label: "Link URL", type: "text" },
  ]},
];

export default async function PopularSection({ moduleId, isAdmin }: { moduleId: string; isAdmin: boolean }) {
  const stored = await getModuleConfig(moduleId);
  const cfg = { ...DEFAULT, ...(stored as typeof DEFAULT) };
  const products = cfg.products?.length ? cfg.products : DEFAULT.products;

  return (
    <section className="relative py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#7d6142] text-center mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {cfg.title}
        </h2>
        <p className="text-center text-sm text-gray-500 mb-10">{cfg.subtitle}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div key={i} className="bg-white flex overflow-hidden border border-gray-100">
              <div className="relative w-[42%] flex-shrink-0">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-between p-4 flex-1">
                <div>
                  <p className="text-xs text-[#b8924a] mb-1 leading-tight font-medium">{p.desc}</p>
                  <p className="text-base font-bold text-[#1c1c1c] mb-2 leading-tight">{p.name}</p>
                  <p className="text-xs text-gray-500 mb-4">{p.price}</p>
                </div>
                <Link
                  href={p.href}
                  className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white text-xs font-semibold px-4 py-2 transition-colors self-start"
                >
                  {cfg.buttonLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, products }} schema={SCHEMA} />}
    </section>
  );
}
