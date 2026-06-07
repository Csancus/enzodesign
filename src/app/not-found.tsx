import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Az oldal nem található | Enzo Design",
};

export default function NotFound() {
  return (
    <section className="bg-[#f5f0e8] min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-lg mx-auto">
        <p className="text-[#b8924a] text-sm font-semibold uppercase tracking-wider mb-3">404</p>
        <h1
          className="text-3xl sm:text-5xl font-bold text-[#1c1c1c] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Az oldal nem található
        </h1>
        <p className="text-gray-500 text-lg mb-10">
          A keresett oldal nem létezik vagy áthelyezték.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#7d6142] hover:bg-[#b8924a] text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
          >
            Főoldalra
          </Link>
          <Link
            href="/butoraink"
            className="border-2 border-[#7d6142] text-[#7d6142] hover:bg-[#7d6142] hover:text-white font-bold uppercase tracking-wider px-8 py-3 transition-colors text-sm"
          >
            Bútoraink
          </Link>
        </div>
      </div>
    </section>
  );
}
