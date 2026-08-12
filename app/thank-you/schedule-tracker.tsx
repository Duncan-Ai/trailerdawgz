"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// Fires the Meta "Schedule" conversion once when the thank-you page loads:
//  1. Browser Pixel event (with a shared eventID)
//  2. A ping to /api/meta/schedule so the server sends the same event via CAPI
// Meta deduplicates the two using the shared event_id + event_name.
export default function ScheduleTracker() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    // Avoid re-firing if the visitor refreshes the thank-you page.
    try {
      if (sessionStorage.getItem("td_schedule_tracked") === "1") return;
      sessionStorage.setItem("td_schedule_tracked", "1");
    } catch {
      // sessionStorage unavailable (e.g. privacy mode) — proceed anyway.
    }
    fired.current = true;

    const eventId =
      typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `sch_${Date.now()}_${Math.random().toString(36).slice(2)}`;

    // 1) Browser Pixel event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Schedule", {}, { eventID: eventId });
    }

    // 2) Server-side Conversions API event (same event_id → deduplicated)
    fetch("/api/meta/schedule", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventId, eventSourceUrl: window.location.href }),
      keepalive: true,
    }).catch(() => {
      // Non-blocking: the browser Pixel event still counts on its own.
    });
  }, []);

  return null;
}
