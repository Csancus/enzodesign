import { formatPrice } from "@/data/products";

type Pricing = {
  fotel?: { alap: number; bor?: number };
  ketSzemelyes?: { alap: number; bor?: number };
  haromSzemelyes?: { alap: number; bor?: number };
  sarok?: { alap: number; bor?: number };
  agyFunkcio?: number;
};

export default function PriceTable({ pricing }: { pricing: Pricing }) {
  const rows = [
    { label: "Fotel", data: pricing.fotel },
    { label: "2 személyes kanapé", data: pricing.ketSzemelyes },
    { label: "3 személyes kanapé", data: pricing.haromSzemelyes },
    { label: "Sarokkanapé", data: pricing.sarok },
  ].filter((r) => r.data);

  return (
    <div className="border border-gray-200 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#1c1c1c] text-white">
            <th className="text-left px-4 py-3 font-medium">Konfiguráció</th>
            <th className="text-right px-4 py-3 font-medium">Alap szövet</th>
            <th className="text-right px-4 py-3 font-medium">Prémium bőr</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#f9f5f0]"}>
              <td className="px-4 py-3 font-medium text-gray-800">{row.label}</td>
              <td className="px-4 py-3 text-right text-gray-700">
                {row.data?.alap ? `${formatPrice(row.data.alap)}-tól` : "–"}
              </td>
              <td className="px-4 py-3 text-right text-gray-700">
                {row.data?.bor ? `${formatPrice(row.data.bor)}-tól` : "–"}
              </td>
            </tr>
          ))}
          {pricing.agyFunkcio && (
            <tr className="bg-[#f5f0e8]">
              <td className="px-4 py-3 text-gray-600 italic" colSpan={2}>
                + Ágy funkció
              </td>
              <td className="px-4 py-3 text-right font-semibold text-[#7d6142]">
                +{formatPrice(pricing.agyFunkcio)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="bg-[#f5f0e8] px-4 py-3 text-xs text-gray-500 border-t border-gray-200">
        Az árak tájékoztató jellegűek és az alapkonfigurációra vonatkoznak. Egyéni méret és anyagválasztás esetén az ár változhat.
        Gyártási idő: 4–6 hét. Garancia: 3 év (váz: 10 év).
      </div>
    </div>
  );
}
