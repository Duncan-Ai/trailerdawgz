import { createHash } from "crypto";

// Meta Conversions API (CAPI) — server-side event sending.
// The Pixel ID is public; the access token is a secret and must be provided
// via the META_CAPI_ACCESS_TOKEN environment variable (set it in Vercel).
const GRAPH_API_VERSION = "v21.0";
const PIXEL_ID = process.env.META_PIXEL_ID ?? "1073987908491508";
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
// Optional: set META_TEST_EVENT_CODE while validating in Events Manager → Test Events.
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

export type ScheduleEventInput = {
  /** Shared with the browser Pixel event so Meta can deduplicate the two. */
  eventId: string;
  eventSourceUrl?: string;
  clientIp?: string;
  userAgent?: string;
  /** _fbp cookie set by the Pixel. */
  fbp?: string;
  /** _fbc cookie set by the Pixel (from the fbclid click parameter). */
  fbc?: string;
  /** Optional plaintext email; hashed before sending for advanced matching. */
  email?: string;
};

export async function sendScheduleEvent(input: ScheduleEventInput): Promise<void> {
  if (!ACCESS_TOKEN) {
    console.warn(
      "[meta-capi] META_CAPI_ACCESS_TOKEN is not set — skipping the server-side Schedule event."
    );
    return;
  }

  const userData: Record<string, unknown> = {};
  if (input.clientIp) userData.client_ip_address = input.clientIp;
  if (input.userAgent) userData.client_user_agent = input.userAgent;
  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;
  if (input.email) userData.em = [hashSha256(input.email)];

  const payload = {
    data: [
      {
        event_name: "Schedule",
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        action_source: "website",
        ...(input.eventSourceUrl ? { event_source_url: input.eventSourceUrl } : {}),
        user_data: userData,
      },
    ],
    ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(
        ACCESS_TOKEN
      )}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error(`[meta-capi] Schedule event failed (${res.status}): ${text}`);
    }
  } catch (err) {
    console.error("[meta-capi] Schedule event error:", err);
  }
}

// Meta requires PII (like email) to be normalized and SHA-256 hashed.
function hashSha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}
