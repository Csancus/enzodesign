import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createCaptchaChallenge, verifyCaptcha } from "@/lib/captcha";

const resend = new Resend(process.env.RESEND_API_KEY);

function buildHtml(data: Record<string, string>) {
  const rows = [
    { label: "Név", value: data.nev },
    { label: "Telefon", value: data.telefon },
    { label: "Email", value: data.email },
    { label: "Lakcím", value: data.lakcim },
    { label: "Alap bútor", value: data.alapbutor },
    { label: "Típus", value: data.tipusa },
    { label: "Leírás", value: (data.leiras ?? "").replace(/\n/g, "<br>"), full: true },
  ].filter((r) => r.value);

  const tableRows = rows
    .map(
      (r, i) => `
      <tr>
        <td style="padding:12px 16px;background:#f5f0e8;font-family:Arial,sans-serif;font-size:13px;font-weight:600;color:#5a4330;width:140px;border-bottom:1px solid #e8e0d4;vertical-align:top;white-space:nowrap">
          ${r.label}
        </td>
        <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:14px;color:#1c1c1c;border-bottom:1px solid #ece8e0;background:${i % 2 === 0 ? "#ffffff" : "#fdfaf6"}">
          ${r.value ?? ""}
        </td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="hu">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0ebe1;font-family:Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ebe1;padding:40px 16px">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

        <!-- HEADER -->
        <tr>
          <td style="background:#1c1c1c;padding:32px 36px;border-radius:4px 4px 0 0">
            <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:11px;font-weight:normal;color:#b8924a;letter-spacing:3px;text-transform:uppercase">Enzo Design</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:24px;font-weight:normal;color:#ffffff;letter-spacing:0.5px">Új érdeklődés érkezett</h1>
          </td>
        </tr>

        <!-- ARANY CSÍK -->
        <tr><td style="background:#b8924a;height:3px;font-size:0;line-height:0">&nbsp;</td></tr>

        <!-- BEVEZETŐ -->
        <tr>
          <td style="background:#ffffff;padding:24px 36px 8px">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#555;line-height:1.6">
              Egy látogató kitöltötte a kapcsolatfelvételi űrlapot. Az adatok az alábbiakban találhatók.
            </p>
          </td>
        </tr>

        <!-- TÁBLÁZAT -->
        <tr>
          <td style="background:#ffffff;padding:8px 36px 28px">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e8e0d4;border-radius:2px;overflow:hidden">
              ${tableRows}
            </table>
          </td>
        </tr>

        <!-- CTA GOMB -->
        <tr>
          <td style="background:#ffffff;padding:0 36px 32px;text-align:center">
            <a href="tel:+36303778983"
               style="display:inline-block;background:#7d6142;color:#ffffff;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;text-decoration:none;padding:13px 32px;border-radius:2px">
              Visszahívás: +36 30 377 8983
            </a>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#1c1c1c;padding:20px 36px;border-radius:0 0 4px 4px">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 2px;font-family:Georgia,serif;font-size:13px;color:#b8924a">Enzo Design Kft.</p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#666">8800 Nagykanizsa, Egry József utca 7.</p>
                </td>
                <td align="right">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#444">info@enzodesign.hu</p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#444">+36 30 377 8983</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function GET() {
  return NextResponse.json(createCaptchaChallenge(), {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Honeypot: rejtett mező, amit csak botok töltenek ki — csendben "siker"
    if (typeof data.website === "string" && data.website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    if (!verifyCaptcha(data.captcha)) {
      return NextResponse.json({ ok: false, error: "captcha" }, { status: 400 });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM ?? "Enzo Design <onboarding@resend.dev>",
      to: process.env.RESEND_TO ?? "csanad.peter.czarth@gmail.com",
      subject: `📋 Új érdeklődés: ${data.nev ?? "Ismeretlen"} – ${data.alapbutor ?? ""}`,
      html: buildHtml(data),
      replyTo: data.email ?? undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email sending error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
