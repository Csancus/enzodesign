import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const authErr = await requireAdmin(); if (authErr) return authErr;

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const id = randomUUID();

  const optimized = await sharp(buffer)
    .resize(1920, 1920, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();

  if (process.env.SUPABASE_URL) {
    const { getSupabaseAdmin } = await import("@/lib/supabase");
    const supabase = getSupabaseAdmin();
    const filePath = `slideshow/${id}.webp`;
    const { error } = await supabase.storage
      .from("enzodesign")
      .upload(filePath, optimized, { contentType: "image/webp", upsert: false });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    const { data } = supabase.storage.from("enzodesign").getPublicUrl(filePath);
    return NextResponse.json({ src: data.publicUrl });
  }

  const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "slideshow");
  await mkdir(UPLOAD_DIR, { recursive: true });
  await writeFile(path.join(UPLOAD_DIR, `${id}.webp`), optimized);
  return NextResponse.json({ src: `/uploads/slideshow/${id}.webp` });
}
