// src/services/api.ts

import type { TimelineEntry } from "../types/timeline";

export async function postEvent(text: string): Promise<any> {
  return await fetch("/api/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  }).then(res => res.json());
}

export async function getTimeline(): Promise<TimelineEntry[]> {
  return await fetch("/api/timeline").then(res => res.json());
}

export async function fetchDreams() {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/dreams`)
  return await res.json()
}
