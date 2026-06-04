import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getAdminStatus } from "@/lib/auth";
import { getPageLayout, savePageLayout, newSectionId } from "@/lib/pageLayout";

export async function POST(req: NextRequest) {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const p = req.nextUrl.searchParams;
  const pageId = p.get("page") ?? "home";
  const action = p.get("action");
  const layout = await getPageLayout(pageId);
  const sections = layout.sections;

  if (action === "add") {
    const type = p.get("type") ?? "text-block";
    const afterIndex = parseInt(p.get("afterIndex") ?? "-1");
    const newSection = { id: newSectionId(type), type };
    sections.splice(afterIndex + 1, 0, newSection);
    await savePageLayout(pageId, { sections });
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true, id: newSection.id });
  }

  if (action === "delete") {
    const sectionId = p.get("section");
    const idx = sections.findIndex((s) => s.id === sectionId);
    if (idx !== -1) sections.splice(idx, 1);
    await savePageLayout(pageId, { sections });
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true });
  }

  if (action === "replace") {
    const sectionId = p.get("section");
    const type = p.get("type") ?? "text-block";
    const idx = sections.findIndex((s) => s.id === sectionId);
    if (idx !== -1) {
      sections[idx] = { id: newSectionId(type), type };
      await savePageLayout(pageId, { sections });
    }
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true });
  }

  if (action === "move") {
    const sectionId = p.get("section");
    const dir = parseInt(p.get("dir") ?? "0");
    const idx = sections.findIndex((s) => s.id === sectionId);
    const j = idx + dir;
    if (idx !== -1 && j >= 0 && j < sections.length) {
      [sections[idx], sections[j]] = [sections[j], sections[idx]];
      await savePageLayout(pageId, { sections });
    }
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
