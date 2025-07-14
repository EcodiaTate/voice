// /src/App.tsx
import { useEffect } from "react";
import { connectSocket } from "./services/socket";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import TimelinePage from "./pages/Timeline";
import DreamsPage from "./pages/Dreams";
// ...import more pages as you add them

export default function App() {
  useEffect(() => {
    connectSocket(); // Connect once on mount
  }, []);

  return (
    <div>
      <NavBar />
      <div className="pt-20 max-w-3xl mx-auto">
        <Routes>
          <Route path="/soul" element={<TimelinePage />} />
          <Route path="/soul/dreams" element={<DreamsPage />} />
          {/* Add more routes here */}
        </Routes>
      </div>
    </div>
  );
}
