import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, getSessionToken } from "@/lib/auth";

const MAX_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY!;

function clientIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
}

function verifyEmail(input: string): boolean {
  const expected = process.env.ADMIN_EMAIL;
  return !!expected && input.toLowerCase().trim() === expected.toLowerCase().trim();
}

type RateLimitRecord = { count: number; until: number };

async function getRateLimit(ip: string): Promise<RateLimitRecord | null> {
  try {
    const key = `rate-limit:${ip}`;
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/module_configs?id=eq.${encodeURIComponent(key)}&select=config`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    );
    const rows = await res.json() as { config: RateLimitRecord }[];
    return rows[0]?.config ?? null;
  } catch {
    return null;
  }
}

async function setRateLimit(ip: string, data: RateLimitRecord): Promise<void> {
  try {
    const key = `rate-limit:${ip}`;
    await fetch(`${SUPABASE_URL}/rest/v1/module_configs`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({ id: key, config: data }),
    });
  } catch { /* ignore */ }
}

async function clearRateLimit(ip: string): Promise<void> {
  try {
    const key = `rate-limit:${ip}`;
    await fetch(
      `${SUPABASE_URL}/rest/v1/module_configs?id=eq.${encodeURIComponent(key)}`,
      {
        method: "DELETE",
        headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      }
    );
  } catch { /* ignore */ }
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  const now = Date.now();

  const rec = await getRateLimit(ip);
  if (rec && rec.count >= MAX_ATTEMPTS && now < rec.until) {
    await new Promise((r) => setTimeout(r, 1000));
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  const { email, password, captchaA, captchaB, captchaAnswer } = await req.json();

  await new Promise((r) => setTimeout(r, 400));

  const captchaOk =
    typeof captchaA === "number" &&
    typeof captchaB === "number" &&
    captchaA >= 10 && captchaA <= 99 &&
    captchaB >= 1 && captchaB <= 9 &&
    captchaAnswer === captchaA + captchaB;

  if (!captchaOk || !verifyEmail(email) || !verifyPassword(password)) {
    const current = rec ?? { count: 0, until: 0 };
    await setRateLimit(ip, { count: current.count + 1, until: now + LOCKOUT_MS });
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await clearRateLimit(ip);

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
