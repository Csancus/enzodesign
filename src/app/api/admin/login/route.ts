import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, getSessionToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (!verifyPassword(password)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set("enzo_admin", getSessionToken(), {
    httpOnly: true,
    path: "/",
    maxAge: 86400,
    sameSite: "lax",
  });
  return res;
}
