import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (!verifyPassword(password)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const token = createSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set("enzo_admin", token, {
    httpOnly: true,
    path: "/",
    maxAge: 86400,
    sameSite: "lax",
  });
  return res;
}
