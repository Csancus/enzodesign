import { NextRequest, NextResponse } from "next/server";
import { getAdminStatus } from "@/lib/auth";
import db from "@/lib/db";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const row = db.prepare("SELECT config FROM modules WHERE id = ?").get(id) as { config: string } | undefined;
  return NextResponse.json(row ? JSON.parse(row.config) : {});
}

export async function PUT(req: NextRequest) {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const config = await req.json();
  db.prepare(
    "INSERT INTO modules (id, config) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET config = excluded.config"
  ).run(id, JSON.stringify(config));
  return NextResponse.json({ ok: true });
}
