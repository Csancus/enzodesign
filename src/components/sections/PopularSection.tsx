import Image from "next/image";
import Link from "next/link";
import EditBtn from "@/components/admin/EditBtn";
import { getModuleConfig } from "@/lib/moduleStore";
import type { FieldDef } from "@/types/cms";

const DEFAULT = {
  title: "Legnépszerűbb bútoraink",
  subtitle: "Válasszon kollekciónkból az Ön igényei szerint",
  buttonLabel: "Tovább",
  products: [
    { name: "Old's Club", desc: "Karakteres elegancia, széles ülőfelület", price: "444.240 Ft-tól", image: "/images/e7ad8b_b8e06512bf824479b51f4152def251fa.webp", href: "/butoraink/kanapek/olds-club-kanapek" },
    { name: "Ivone", desc: "Nappalid éke, steppelt háttámla", price: "444.240 Ft-tól", image: "/images/9a0b1d_99e6dc96a4804030b9c82ccb7ef9a7f7.webp", href: "/butoraink/kanapek/ivone-kanapek" },
    { name: "Chesterfield", desc: "A bútor, aminek történelme van", price: "399.810 Ft-tól", image: "/images/e7ad8b_9c4a2b593b0642ab97ffcdc5d7e37965.webp", href: "/butoraink/kanapek/chesterfield-kanapek" },
    { name: "Cannes-Nizza", desc: "Sarokkanapé, modern kialakítással", price: "367.340 Ft-tól", image: "/images/e7ad8b_af00972c370c4bc7800fc98bfd927214.webp", href: "/butoraink/kanapek/cannes-kanapek" },
    { name: "Fotelek", desc: "Minden stílusban, széles választék", price: "82.820 Ft-tól", image: "/images/9a0b1d_c8383ea1a11840a380b79e4cbddd1c96.webp", href: "/butoraink/fotelek" },
    { name: "Étterem, hotel", desc: "Üzleti célú kárpitozott bútorok", price: "76.200 Ft-tól", image: "/images/e7ad8b_c6dc15a8a80f4a8a95598e5ccea491e4.webp", href: "/karpitozott-butor-uzleti-ugyfeleknek" },
  ],
};

const SCHEMA: FieldDef[] = [
  { key: "title", label: "Cím", type: "text" },
  { key: "subtitle", label: "Alcím", type: "text" },
  { key: "buttonLabel", label: "Gomb felirat", type: "text" },
  { key: "products", label: "Termékek", type: "array", itemFields: [
    { key: "name", label: "Név", type: "text" },
    { key: "desc", label: "Leírás", type: "text" },
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
        <h2 className="text-xl font-bold text-[#1c1c1c] text-center mb-2">{cfg.title}</h2>
        <p className="text-center text-xs text-gray-500 mb-8">{cfg.subtitle}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {products.map((p, i) => (
            <div key={i} className="text-center">
              <div className="relative aspect-[4/3] overflow-hidden mb-2">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <p className="text-xs text-gray-500 mb-1 leading-tight">{p.desc}</p>
              <p className="text-xs font-bold text-[#1c1c1c] mb-1">{p.name}</p>
              <p className="text-xs text-[#7d6142] mb-2">{p.price}</p>
              <Link href={p.href} className="inline-block bg-[#7d6142] hover:bg-[#b8924a] text-white text-xs px-3 py-1 transition-colors">
                {cfg.buttonLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {isAdmin && <EditBtn moduleId={moduleId} config={{ ...cfg, products }} schema={SCHEMA} />}
    </section>
  );
}
