import { useState } from "react";
import { postEvent } from "../services/api";

export default function ChatModal() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    postEvent(input).then(() => {
      setInput("");
      location.reload(); // basic refresh
    });
  };

  return (
    <div className="p-4">
      <input
        className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
        placeholder="Talk to Ecodia..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
