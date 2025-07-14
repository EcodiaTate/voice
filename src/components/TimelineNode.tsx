interface EventProps {
  event: {
    text: string;
    rationale: string;
    timestamp: string;
  };
}

export default function TimelineNode({ event }: EventProps) {
  return (
    <div className="border rounded-lg p-4 shadow mb-4 bg-white">
      <p className="font-semibold">📝 Input: {event.text}</p>
      <p className="italic text-gray-600">🧠 GPT Reflection: {event.rationale}</p>
      <p className="text-xs text-gray-400">{new Date(event.timestamp).toLocaleString()}</p>
    </div>
  );
}
