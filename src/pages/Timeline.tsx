import { useEffect, useState } from "react";
import { getTimeline } from "../services/api";  // fix: use correct export
import { connectSocket, on } from "../services/socket"; // fix: make sure socket.ts exists/exports these
import TimelineNode from "../components/TimelineNode";
import type { TimelineEntry } from "../types/timeline";

const TimelinePage = () => {
  const [entries, setEntries] = useState<TimelineEntry[]>([]);

  useEffect(() => {
    getTimeline().then(setEntries); // fix: use correct api call

    connectSocket();
    const handleUpdate = (newEntry: TimelineEntry) =>
      setEntries((e) => [newEntry, ...e]);

    on("timeline_update", handleUpdate);

    return () => {
      // off("timeline_update", handleUpdate);
    };
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Soul Timeline</h1>
      {entries.map((entry) => (
        <TimelineNode key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default TimelinePage;
