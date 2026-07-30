import { NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-dynamic";

const scheduleSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
  location: z.string().max(200).optional(),
  timeline: z.string().max(200).optional(),
});

const newsletterSchema = z.object({
  email: z.string().email(),
});

const partnerSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  role: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().min(10),
});

const bodySchema = z.object({
  type: z.enum(["schedule", "newsletter", "partner"]),
  payload: z.record(z.unknown()),
});

function webhookFor(type: string): string | undefined {
  const map: Record<string, string | undefined> = {
    schedule: process.env.WEBHOOK_URL_SCHEDULE,
    newsletter: process.env.WEBHOOK_URL_NEWSLETTER,
    partner: process.env.WEBHOOK_URL_PARTNER,
  };
  const url = map[type];
  return url && url.length > 0 ? url : undefined;
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { type, payload } = parsed.data;
    let validated: unknown;

    if (type === "schedule") {
      const data = scheduleSchema.safeParse(payload);
      if (!data.success) {
        return NextResponse.json(
          { error: "Invalid schedule form", details: data.error.flatten() },
          { status: 400 },
        );
      }
      validated = data.data;
    } else if (type === "newsletter") {
      const data = newsletterSchema.safeParse(payload);
      if (!data.success) {
        return NextResponse.json(
          { error: "Invalid newsletter form", details: data.error.flatten() },
          { status: 400 },
        );
      }
      validated = data.data;
    } else {
      const data = partnerSchema.safeParse(payload);
      if (!data.success) {
        return NextResponse.json(
          { error: "Invalid partner form", details: data.error.flatten() },
          { status: 400 },
        );
      }
      validated = data.data;
    }

    const webhookUrl = webhookFor(type);

    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          payload: validated,
          receivedAt: new Date().toISOString(),
          source: "customhomenetwork",
        }),
      });
      if (!res.ok) {
        console.error(`[submit] webhook ${type} failed`, res.status);
        return NextResponse.json({ error: "Webhook delivery failed" }, { status: 502 });
      }
    } else {
      // Dev / missing webhook: accept and log so forms still succeed
      console.info(`[submit] ${type} (no webhook)`, JSON.stringify(validated));
    }

    return NextResponse.json({
      ok: true,
      type,
      delivered: Boolean(webhookUrl),
    });
  } catch (err) {
    console.error("[submit]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
