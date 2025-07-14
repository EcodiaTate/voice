import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./pages/Timeline";
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsx(Route, { path: "/soul/", element: _jsx(Timeline, {}) }) }) }));
}
export default App;
