import { postEvent } from "../services/api"; // Adjust if path differs
import React, { useState, useEffect } from "react";
const [input, setInput] = useState("");

function handleSubmit() {
  postEvent(input).then(() => {
    setInput("");
    location.reload(); // basic refresh
  });
}
