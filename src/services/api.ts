export async function postEvent(text: string) {
  return await fetch("/api/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  }).then(res => res.json());
}

export async function getTimeline() {
  return await fetch("/api/timeline").then(res => res.json());
}
