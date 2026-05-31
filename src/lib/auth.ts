import { cookies } from "next/headers";
import { createHmac } from "crypto";

const COOKIE = "enzo_admin";

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
