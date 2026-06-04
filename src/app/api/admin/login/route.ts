import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, getSessionToken } from "@/lib/auth";

// In-memory attempt tracker – resets on cold start, good enough for serverless
const attempts = new Map<string, { count: number; until: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000; // 15 perc

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  const now = Date.now();
  const rec = attempts.get(ip);

  if (rec && rec.count >= MAX_ATTEMPTS && now < rec.until) {
    // Brute-force lockout
    await new Promise((r) => setTimeout(r, 1000));
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  const { password } = await req.json();

  // Constant-time delay to slow down enumeration regardless of result
  await new Promise((r) => setTimeout(r, 400));

  if (!verifyPassword(password)) {
    const current = attempts.get(ip) ?? { count: 0, until: 0 };
    attempts.set(ip, { count: current.count + 1, until: now + LOCKOUT_MS });
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Success – reset counter
  attempts.delete(ip);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("enzo_admin", getSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 8 * 60 * 60, // 8 óra
    sameSite: "strict",
  });
  return res;
}
