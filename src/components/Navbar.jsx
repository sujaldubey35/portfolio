import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10 transition-colors">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center" aria-label="Main Navigation">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text group-hover:opacity-90 transition">
            Rudra.dev
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Full Stack & DevOps
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-blue-400 transition font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          {setDark && (
            <button
              type="button"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-yellow-400 transition hover:scale-105"
            >
              {dark ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>
          )}

          {/* Hire Me / Resume CTA */}
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg transition shadow-md hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {setDark && (
            <button
              type="button"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-yellow-400"
            >
              {dark ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>
          )}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="p-2 rounded-lg text-gray-200 hover:text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-2">
            <ul className="flex flex-col items-center gap-4 py-6 text-base">
              {links.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-gray-300 hover:text-blue-400 hover:bg-white/5 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium inline-block transition text-sm"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;