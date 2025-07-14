// src/types/timeline.ts

export interface TimelineEntry {
  id: string;
  summary: string;
  timestamp: string;
  emotion?: string;
  // add any additional fields (refs, vector, etc.) as your backend sends them
}
