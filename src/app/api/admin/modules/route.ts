import { NextRequest, NextResponse } from "next/server";
import { getAdminStatus } from "@/lib/auth";
import { getModuleConfig, setModuleConfig } from "@/lib/moduleStore";

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const config = await getModuleConfig(id);
  return NextResponse.json(config);
}

export async function PUT(req: NextRequest) {
  if (!(await getAdminStatus())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const config = await req.json();
  await setModuleConfig(id, config);
  return NextResponse.json({ ok: true });
}
