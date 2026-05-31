import { NextRequest, NextResponse } from "next/server";
import { getAdminStatus } from "@/lib/auth";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import sharp from "sharp";
import { randomUUID } from "crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "slideshow");

export async function POST(req: NextRequest) {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${randomUUID()}.webp`;
  const outPath = path.join(UPLOAD_DIR, filename);

  const optimized = await sharp(buffer)
    .resize(1920, 800, { fit: "cover", position: "center" })
    .webp({ quality: 82 })
    .toBuffer();

  await writeFile(outPath, optimized);

  return NextResponse.json({ src: `/uploads/slideshow/${filename}` });
}
