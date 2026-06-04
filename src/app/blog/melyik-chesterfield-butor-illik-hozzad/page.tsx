import type { Metadata } from "next";
import PageBuilderPage from "@/components/PageBuilderPage";

export const metadata: Metadata = {
  title: "Melyik Chesterfield bútor illik hozzád? – Enzo Design",
  description: "Stíluskalauz Chesterfield bútorokhoz: szék, puff, étkezőszék, forgószék – melyik illik hozzád és a lakásodba?",
};

export default function Page() {
  return <PageBuilderPage pageId="blog:melyik-chesterfield-butor-illik-hozzad" defaultTypes={["banner", "text-block", "contact"]} />;
}
