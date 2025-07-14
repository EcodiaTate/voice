import { getTimeline } from "../services/api";
import TimelineNode from "../components/TimelineNode"; // Adjust if needed
import React, { useState, useEffect } from "react";
export default function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getTimeline().then(setEvents);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">🧬 Soul Timeline</h1>
      {events.map((event: any, idx: number) => (
  <TimelineNode key={idx} event={event} />
))}
    </div>
  );
}
