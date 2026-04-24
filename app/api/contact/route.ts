import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  message: z.string().min(1).max(5000),
});

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "julianmendon@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(req: Request) {
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // In dev without a key configured, log the submission so the flow can still
    // be exercised end-to-end. Production deployments must set RESEND_API_KEY.
    console.warn(
      "[contact] RESEND_API_KEY not set — logging submission instead of sending.",
    );
    console.info("[contact] submission", { name, email, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Portfolio <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: renderEmail({ name, email, message }),
    });

    if (error) {
      console.error("[contact] resend error", error);
      return NextResponse.json(
        { error: "Could not send the message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 },
    );
  }
}

function renderEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const safe = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">New message from your portfolio</h2>
      <p style="margin: 0 0 4px;"><strong>Name:</strong> ${safe(name)}</p>
      <p style="margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${safe(email)}">${safe(email)}</a></p>
      <div style="padding: 16px; background: #f5f5f7; border-radius: 12px; white-space: pre-wrap; line-height: 1.55;">${safe(message)}</div>
    </div>
  `;
}
