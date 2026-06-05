import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, getSessionToken } from "@/lib/auth";

const attempts = new Map<string, { count: number; until: number }>();
const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
}

function verifyEmail(input: string): boolean {
  const expected = process.env.ADMIN_EMAIL;
  return !!expected && input.toLowerCase().trim() === expected.toLowerCase().trim();
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  const now = Date.now();
  const rec = attempts.get(ip);

  if (rec && rec.count >= MAX_ATTEMPTS && now < rec.until) {
    await new Promise((r) => setTimeout(r, 1000));
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  const { password, captchaA, captchaB, captchaAnswer } = await req.json();

  await new Promise((r) => setTimeout(r, 400));

  const captchaOk = typeof captchaA === "number" && typeof captchaB === "number" &&
    captchaA >= 10 && captchaA <= 99 && captchaB >= 1 && captchaB <= 9 &&
    captchaAnswer === captchaA + captchaB;

  if (!captchaOk || !verifyPassword(password)) {
    const current = attempts.get(ip) ?? { count: 0, until: 0 };
    attempts.set(ip, { count: current.count + 1, until: now + LOCKOUT_MS });
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  attempts.delete(ip);

  const res = NextResponse.json({ ok: true });
  res.cookies.set("enzo_admin", getSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 2 * 60 * 60,
    sameSite: "strict",
  });
  return res;
}
