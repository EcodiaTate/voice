// /src/components/NavBar.tsx
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/soul", label: "Soul Timeline" },
  { path: "/soul/dreams", label: "Dreams" },
  // Add more links as needed (Agents, Events, Admin, etc)
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200 px-6 py-2 flex items-center justify-center shadow-sm">
      <div className="flex gap-6 items-center">
        <span className="font-extrabold text-xl tracking-tight text-purple-800 mr-4">Voice & Soul</span>
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={
              "font-medium px-3 py-1 rounded transition " +
              (location.pathname === path
                ? "bg-purple-100 text-purple-700 shadow"
                : "text-gray-700 hover:bg-purple-50")
            }
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
