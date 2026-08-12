import { NextRequest, NextResponse } from "next/server";
import { sendScheduleEvent } from "@/app/lib/meta-capi";

// Fires the server-side (Conversions API) "Schedule" event. Called by the
// thank-you page's client tracker with the same event_id used by the Pixel,
// so Meta deduplicates the browser and server events.
export async function POST(req: NextRequest) {
  let eventId: string | undefined;
  let eventSourceUrl: string | undefined;
  let email: string | undefined;

  try {
    const body = await req.json();
    if (typeof body?.eventId === "string") eventId = body.eventId;
    if (typeof body?.eventSourceUrl === "string") eventSourceUrl = body.eventSourceUrl;
    if (typeof body?.email === "string") email = body.email;
  } catch {
    // No/invalid JSON body — handled by the eventId check below.
  }

  if (!eventId) {
    return NextResponse.json({ ok: false, error: "Missing eventId" }, { status: 400 });
  }

  const forwardedFor = req.headers.get("x-forwarded-for") ?? "";
  const clientIp = forwardedFor.split(",")[0].trim() || undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;
  const fbp = req.cookies.get("_fbp")?.value;
  const fbc = req.cookies.get("_fbc")?.value;

  await sendScheduleEvent({
    eventId,
    eventSourceUrl,
    clientIp,
    userAgent,
    fbp,
    fbc,
    email,
  });

  return NextResponse.json({ ok: true });
}
