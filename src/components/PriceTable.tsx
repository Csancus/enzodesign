import { formatPrice } from "@/data/products";

export type FlexPriceRow = { label: string; alap: string; bor?: string };

const DEFAULT_FOOTER =
  "Az árak tájékoztató jellegűek és az alapkonfigurációra vonatkoznak. Egyéni méret és anyagválasztás esetén az ár változhat. Gyártási idő: 4–6 hét. Garancia: 3 év (váz: 10 év).";

function fmt(val: string | undefined): string {
  if (!val) return "–";
  const n = parseInt(val, 10);
  return isNaN(n) ? val : `${formatPrice(n)}-tól`;
}

export default function PriceTable({
  rows,
  footer = DEFAULT_FOOTER,
}: {
  rows: FlexPriceRow[];
  footer?: string;
}) {
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
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f9f5f0]"}>
              <td className="px-4 py-3 font-medium text-gray-800">{row.label}</td>
              <td className="px-4 py-3 text-right text-gray-700">{fmt(row.alap)}</td>
              <td className="px-4 py-3 text-right text-gray-700">{fmt(row.bor)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-[#f5f0e8] px-4 py-3 text-xs text-gray-500 border-t border-gray-200">
        {footer}
      </div>
    </div>
  );
}
