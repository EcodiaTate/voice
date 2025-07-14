import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Timeline = () => {
    const [status, setStatus] = useState("Loading...");
    useEffect(() => {
        axios.get("/api/ping")
            .then((res) => setStatus(res.data.status))
            .catch(() => setStatus("API error"));
    }, []);
    return (_jsxs("div", { children: [_jsx("h1", { children: "Timeline" }), _jsxs("p", { children: ["Backend status: ", status] })] }));
};
export default Timeline;
