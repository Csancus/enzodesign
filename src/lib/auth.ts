import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import db from "./db";

const COOKIE = "enzo_admin";

export function verifyPassword(input: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  return !!pw && input === pw;
}

export function createSession(): string {
  const id = randomUUID();
  db.prepare("INSERT INTO sessions (id, expires) VALUES (?, ?)").run(id, Date.now() + 86_400_000);
  return id;
}

export function destroySession(id: string): void {
  db.prepare("DELETE FROM sessions WHERE id = ?").run(id);
}

export async function getAdminStatus(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return false;
  const row = db.prepare("SELECT id FROM sessions WHERE id = ? AND expires > ?").get(token, Date.now());
  return !!row;
}
