import type { Metadata } from "next";

import SzamokClient from "./SzamokClient";

export const metadata: Metadata = {
  title: "Számok – Enzo Design",
  description: "Kattintásmérés – belső oldal.",
  robots: { index: false, follow: false, nocache: true },
};

export default function SzamokPage() {
  return <SzamokClient />;
}
