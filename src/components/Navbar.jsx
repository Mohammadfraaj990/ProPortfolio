import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
    { name: "Skills", to: "/skills" },
    { name: "GitHub", to: "https://github.com/officiallyfaraz", external: true },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-black bg-opacity-60 text-cyan-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400">MyPortfolio</div>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link, idx) =>
            link.external ? (
              <li key={idx}>
                <a href={link.to} target="_blank" className="hover:text-cyan-200 transition">
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={idx}>
                <Link to={link.to} className="hover:text-cyan-200 transition">
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-black bg-opacity-90">
          {navLinks.map((link, idx) =>
            link.external ? (
              <li key={idx}>
                <a href={link.to} target="_blank" className="block hover:text-cyan-200">
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={idx}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block hover:text-cyan-200"
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}
