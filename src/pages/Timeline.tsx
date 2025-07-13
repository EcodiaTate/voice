import React, { useEffect, useState } from "react";
import axios from "axios";

const Timeline: React.FC = () => {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    axios.get("/api/ping")
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus("API error"));
  }, []);

  return (
    <div>
      <h1>Timeline</h1>
      <p>Backend status: {status}</p>
    </div>
  );
};

export default Timeline;
