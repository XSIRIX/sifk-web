import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactBody = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown;
};

const TOPIC_LABELS: Record<string, string> = {
  international: "Markteintritt Afrika",
  energie: "Energieberatung",
  cloody: "Cloody und Kooperationen",
  allgemein: "Allgemeine Anfrage"
};

// Until a sender on the sifk.de domain is verified in Resend, the test sender is used.
// Set CONTACT_FROM, e.g. "SIFK Website <kontakt@sifk.de>", once the domain is verified.
const FALLBACK_FROM = "SIFK Kontakt <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (text(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const name = text(body.name, 200);
  const company = text(body.company, 200);
  const email = text(body.email, 320);
  const message = text(body.message, 5000);
  const topicKey = text(body.topic, 40);
  const topicLabel = TOPIC_LABELS[topicKey] ?? TOPIC_LABELS.allgemein;

  if (!name || !message || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Name, a valid email and a message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_EMAIL is not set.");
    return NextResponse.json({ error: "Mail is not configured." }, { status: 500 });
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.CONTACT_FROM || FALLBACK_FROM,
      to,
      replyTo: email,
      subject: `Neue Anfrage: ${topicLabel}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        company ? `Unternehmen: ${company}` : null,
        `E-Mail: ${email}`,
        `Anliegen: ${topicLabel}`,
        "",
        message
      ]
        .filter((line) => line !== null)
        .join("\n")
    });

    if (error) {
      console.error("Contact form: Resend rejected the message.", error);
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form: sending failed.", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
