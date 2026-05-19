import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <h2 style="color:#1c1c1c;font-family:Georgia,serif">Új megrendelés – Enzo Design</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;font-size:14px">
        <tr><td style="padding:8px 12px;background:#f5f0e8;font-weight:bold;width:180px">Név</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.nev ?? ""}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0e8;font-weight:bold">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.telefon ?? ""}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0e8;font-weight:bold">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.email ?? ""}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0e8;font-weight:bold">Lakcím</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.lakcim ?? ""}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0e8;font-weight:bold">Alap bútor</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.alapbutor ?? ""}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0e8;font-weight:bold">Típusa</td><td style="padding:8px 12px;border-bottom:1px solid #eee">${data.tipusa ?? ""}</td></tr>
        <tr><td style="padding:8px 12px;background:#f5f0e8;font-weight:bold;vertical-align:top">Leírás</td><td style="padding:8px 12px">${(data.leiras ?? "").replace(/\n/g, "<br>")}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"Enzo Design Weboldal" <${process.env.SMTP_USER}>`,
      to: "info@enzodesign.hu",
      subject: `Új megrendelés: ${data.nev ?? "Ismeretlen"} – ${data.alapbutor ?? ""}`,
      html,
      replyTo: data.email ?? undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
