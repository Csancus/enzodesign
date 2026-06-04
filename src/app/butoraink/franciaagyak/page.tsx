import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Franciaágyak – Enzo Design",
  description: "Kárpitozott franciaágyak – Bilbao, Madrid és egyedi modellek. 351.160 Ft-tól, tömörfa szerkezettel.",
};

export default function Page() {
  return <PageBuilderPage pageId="butoraink:franciaagyak" defaultTypes={["banner", "gallery", "text-block", "contact"]} />;
}
