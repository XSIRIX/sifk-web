import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

type ContactBody = {
  name: string;
  company?: string;
  email: string;
  topic: string;
  message: string;
};

const TOPIC_LABELS: Record<string, string> = {
  international: "Internationale Geschäftsentwicklung",
  energie: "Energieberatung Deutschland",
  allgemein: "Allgemeine Anfrage",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const topicLabel = TOPIC_LABELS[body.topic] ?? body.topic;

    await getResend().emails.send({
      from: "SIFK Kontakt <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: body.email,
      subject: `Neue Anfrage: ${topicLabel}`,
      text: [
        `Name: ${body.name}`,
        body.company ? `Unternehmen: ${body.company}` : null,
        `E-Mail: ${body.email}`,
        `Anliegen: ${topicLabel}`,
        "",
        body.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
