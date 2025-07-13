import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/soul/" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
