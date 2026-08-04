import { NextResponse } from "next/server";
import { z } from "zod";
import {
  newsletterSchema,
  partnerSchema,
  scheduleSchema,
  submitBodySchema,
} from "@/lib/form-schemas";

export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 32_000;
const WEBHOOK_TIMEOUT_MS = 8_000;

type SubmitType = "schedule" | "newsletter" | "partner";

function webhookFor(type: SubmitType): string | undefined {
  const map: Record<SubmitType, string | undefined> = {
    schedule: process.env.WEBHOOK_URL_SCHEDULE,
    newsletter: process.env.WEBHOOK_URL_NEWSLETTER,
    partner: process.env.WEBHOOK_URL_PARTNER,
  };
  const url = map[type]?.trim();
  return url ? url : undefined;
}

function safeErrorDetails(error: z.ZodError) {
  return error.flatten().fieldErrors;
}

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request is too large" }, { status: 413 });
    }

    const json = await req.json();
    const parsed = submitBodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: safeErrorDetails(parsed.error) },
        { status: 400 },
      );
    }

    const { type, payload } = parsed.data;
    const schema =
      type === "schedule"
        ? scheduleSchema
        : type === "newsletter"
          ? newsletterSchema
          : partnerSchema;
    const validated = schema.safeParse(payload);

    if (!validated.success) {
      return NextResponse.json(
        { error: `Invalid ${type} form`, details: safeErrorDetails(validated.error) },
        { status: 400 },
      );
    }

    const webhookUrl = webhookFor(type);
    if (!webhookUrl) {
      if (process.env.NODE_ENV === "production") {
        console.error(`[submit] ${type} webhook is not configured`);
        return NextResponse.json({ error: "Submission is temporarily unavailable" }, { status: 503 });
      }

      console.info(`[submit] ${type} accepted in development; webhook not configured`);
      return NextResponse.json({ ok: true, type, delivered: false, development: true });
    }

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type,
        payload: validated.data,
        receivedAt: new Date().toISOString(),
        source: "customhomenetwork",
      }),
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    });

    if (!res.ok) {
      console.error(`[submit] webhook ${type} failed`, res.status);
      return NextResponse.json({ error: "Webhook delivery failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, type, delivered: true });
  } catch (err) {
    console.error("[submit] request failed", err instanceof Error ? err.message : "unknown error");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
