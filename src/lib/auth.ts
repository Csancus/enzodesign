import { cookies, headers } from "next/headers";
import { createHmac } from "crypto";
import { NextResponse } from "next/server";

const COOKIE = "enzo_admin";
const ALLOWED_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? "https://enzodesign.hu";

function sessionToken(): string {
  const pw = process.env.ADMIN_PASSWORD ?? "no-password-set";
  return createHmac("sha256", pw).update("enzo-admin-v1").digest("hex");
}

export function verifyPassword(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  return !!pw && input === pw;
}

export function getSessionToken(): string {
  return sessionToken();
}

export async function getAdminStatus(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return false;
  return token === sessionToken();
}

/** Use in mutating API routes: returns 401/403 response if not authorized, null if OK */
export async function requireAdmin(): Promise<NextResponse | null> {
  const isAdmin = await getAdminStatus();
  if (!isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // CSRF: verify Origin hostname matches our site (www and non-www both allowed)
  const hdrs = await headers();
  const origin = hdrs.get("origin");
  if (origin) {
    try {
      const originHost = new URL(origin).hostname.replace(/^www\./, "");
      const allowedHost = new URL(ALLOWED_ORIGIN).hostname.replace(/^www\./, "");
      if (originHost !== allowedHost && originHost !== "localhost") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  return null;
}
