import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { destroySession } from "@/lib/auth";

export async function POST() {
  const store = await cookies();
  const token = store.get("enzo_admin")?.value;
  if (token) destroySession(token);
  const res = NextResponse.json({ ok: true });
  res.cookies.set("enzo_admin", "", { maxAge: 0, path: "/" });
  return res;
}
