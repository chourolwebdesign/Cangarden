import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  // honeypot
  company?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  // Honeypot — silently accept to fool bots
  if (data.company && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Bitte geben Sie Ihren Namen an.";
  }
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen kurz.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // In production: forward to email service / CRM (Resend, SendGrid, etc.)
  // Configure CONTACT_WEBHOOK_URL to relay the lead.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          receivedAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error("Lead relay failed:", err);
    }
  } else {
    console.info("New lead received:", {
      name: data.name,
      email: data.email,
      service: data.service,
    });
  }

  return NextResponse.json({ ok: true });
}
