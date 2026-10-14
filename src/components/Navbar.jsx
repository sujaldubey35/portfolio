import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaPaperPlane } from "react-icons/fa";

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
    <header className="fixed top-3 inset-x-0 z-50 max-w-6xl mx-auto px-4 transition-all">
      <nav
        className="rounded-2xl bg-[#030712]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/5 px-5 py-3 flex items-center justify-between transition"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/30 group-hover:scale-105 transition">
            R
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text group-hover:text-blue-400 transition leading-tight">
              Rudra.dev
            </span>
            <span className="text-[10px] text-blue-400 font-medium tracking-wide">
              Full Stack & DevOps
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5">
          <ul className="flex items-center text-xs font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3.5 py-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {setDark && (
            <button
              type="button"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-yellow-400 transition hover:scale-105"
            >
              {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>
          )}

          <a
            href="#contact"
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition shadow-lg shadow-blue-500/20 hover:scale-105"
          >
            <span>Let's Talk</span>
            <FaPaperPlane size={10} />
          </a>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {setDark && (
            <button
              type="button"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-yellow-400"
            >
              {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>
          )}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="p-2 rounded-xl text-gray-200 hover:text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {open ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="lg:hidden mt-2 rounded-2xl bg-[#030712]/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-1 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 mt-1">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full text-center py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-medium inline-block transition text-xs shadow-md"
              >
                Let's Talk →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;