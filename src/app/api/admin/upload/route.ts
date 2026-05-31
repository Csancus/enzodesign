import { NextRequest, NextResponse } from "next/server";
import { getAdminStatus } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const id = randomUUID();

  const optimized = await sharp(buffer)
    .resize(1920, 800, { fit: "cover", position: "center" })
    .webp({ quality: 82 })
    .toBuffer();

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const { put } = await import("@vercel/blob");
    const { url } = await put(`slideshow/${id}.webp`, optimized, {
      access: "public",
      contentType: "image/webp",
    });
    return NextResponse.json({ src: url });
  }

  const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "slideshow");
  await mkdir(UPLOAD_DIR, { recursive: true });
  await writeFile(path.join(UPLOAD_DIR, `${id}.webp`), optimized);
  return NextResponse.json({ src: `/uploads/slideshow/${id}.webp` });
}
