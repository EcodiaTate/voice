// src/components/TimelineNode.tsx

import type { FC } from "react";
import type { TimelineEntry } from "../types/timeline";

interface TimelineNodeProps {
  entry: TimelineEntry;
}

const TimelineNode: FC<TimelineNodeProps> = ({ entry }) => (
  <div className="mb-4 p-4 rounded-2xl shadow bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
    <div className="flex items-center justify-between">
      <span className="font-bold">{entry.summary}</span>
      <span className="text-xs text-zinc-500">{new Date(entry.timestamp).toLocaleString()}</span>
    </div>
    {entry.emotion && (
      <div className="mt-1 text-xs italic">{entry.emotion}</div>
    )}
  </div>
);

export default TimelineNode;
