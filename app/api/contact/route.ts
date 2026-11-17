import { NextResponse } from "next/server";
import { Resend } from "resend";

import { enquirySubject, formRedirectUrl } from "@/lib/contact-mail";

type ContactBody = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown;
  locale?: unknown;
};

const TOPIC_LABELS: Record<string, string> = {
  international: "Markteintritt Afrika",
  energie: "Energieberatung",
  cloody: "Cloody und Kooperationen",
  allgemein: "Allgemeine Anfrage"
};

const LANGUAGE_NAMES: Record<string, string> = { de: "Deutsch", en: "Englisch" };

// Until a sender on the sifk.de domain is verified in Resend, the test sender is used.
// Set CONTACT_FROM, e.g. "SIFK Website <kontakt@sifk.de>", once the domain is verified.
const FALLBACK_FROM = "SIFK Kontakt <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

type Outcome = "sent" | "invalid" | "unconfigured" | "failed";

const STATUS: Record<Exclude<Outcome, "sent">, { status: number; error: string }> = {
  invalid: { status: 400, error: "Name, a valid email and a message are required." },
  unconfigured: { status: 500, error: "Mail is not configured." },
  failed: { status: 502, error: "Failed to send message." }
};

async function send(body: ContactBody): Promise<Outcome> {
  // Honeypot: real visitors never see or fill this field. Bots are told it worked.
  if (text(body.website, 200)) return "sent";

  const name = text(body.name, 200);
  const company = text(body.company, 200);
  const email = text(body.email, 320);
  const message = text(body.message, 5000);
  const topicKey = text(body.topic, 40);
  const topicLabel = TOPIC_LABELS[topicKey] ?? TOPIC_LABELS.allgemein;
  const locale = text(body.locale, 5);

  if (!name || !message || !EMAIL_PATTERN.test(email)) return "invalid";

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_EMAIL is not set.");
    return "unconfigured";
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from: process.env.CONTACT_FROM || FALLBACK_FROM,
      to,
      replyTo: email,
      subject: enquirySubject({ topicLabel, company, locale }),
      text: [
        `Name: ${name}`,
        company ? `Unternehmen: ${company}` : null,
        `E-Mail: ${email}`,
        `Anliegen: ${topicLabel}`,
        `Sprache: ${LANGUAGE_NAMES[locale] ?? LANGUAGE_NAMES.de}`,
        "",
        message
      ]
        .filter((line) => line !== null)
        .join("\n")
    });

    if (error) {
      console.error("Contact form: Resend rejected the message.", error);
      return "failed";
    }
    return "sent";
  } catch (error) {
    console.error("Contact form: sending failed.", error);
    return "failed";
  }
}

export async function POST(request: Request) {
  const isJson = (request.headers.get("content-type") ?? "").includes("application/json");

  // A plain form post: the visitor has no JavaScript. Answer with a page, not with JSON.
  if (!isJson) {
    let body: ContactBody = {};
    try {
      body = Object.fromEntries(await request.formData()) as ContactBody;
    } catch {
      // Unreadable body: treated as invalid input below.
    }
    const outcome = await send(body);
    return NextResponse.redirect(formRedirectUrl(body, outcome === "sent", request.url), 303);
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const outcome = await send(body);
  if (outcome === "sent") return NextResponse.json({ success: true });
  const { status, error } = STATUS[outcome];
  return NextResponse.json({ error }, { status });
}
