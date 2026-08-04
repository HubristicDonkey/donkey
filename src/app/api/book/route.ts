import { NextResponse } from "next/server";
import { buildConfirmationEmailHtml } from "@/lib/confirmationEmail";

const RESEND_API_URL = "https://api.resend.com/emails";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Hubristic Donkey <bookings@hubristicdonkey.com>";
// TODO: switch to hello@hubristicdonkey.com once that inbox is set up.
const NOTIFY_EMAIL = process.env.BOOKING_NOTIFY_EMAIL || "hubristicdonkey@gmail.com";

export async function POST(request: Request) {
  const data = await request.formData();

  // Honeypot: bots fill every field, real users never see this one.
  if (data.get("bot-field")) {
    return NextResponse.json({ ok: true });
  }

  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const phone = data.get("phone")?.toString().trim();
  const eventType = data.get("eventType")?.toString().trim();
  const date = data.get("date")?.toString().trim();
  const location = data.get("location")?.toString().trim();

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 });
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    eventType && `Event type: ${eventType}`,
    date && `Date: ${date}`,
    location && `Location: ${location}`,
    "",
    message,
  ].filter(Boolean);

  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      reply_to: email,
      subject: `New booking enquiry — ${eventType || "General"}`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  // Best-effort: the enquiry already reached us above, so a failure here
  // shouldn't make the visitor think their submission was lost.
  const confirmationRes = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: email,
      reply_to: NOTIFY_EMAIL,
      subject: "Enquiry received — Hubristic Donkey",
      html: buildConfirmationEmailHtml({ name, eventType, date, location, phone, message }),
    }),
  });

  if (!confirmationRes.ok) {
    console.error("Resend confirmation error", confirmationRes.status, await confirmationRes.text());
  }

  return NextResponse.json({ ok: true });
}
