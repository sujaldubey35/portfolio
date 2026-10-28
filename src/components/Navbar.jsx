import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaTerminal } from "react-icons/fa";

const Navbar = ({ dark, setDark, onOpenCommandPalette }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Architecture", href: "#architecture" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 inset-x-0 z-50 max-w-7xl mx-auto px-4 transition-all">
      <nav
        className="rounded-2xl bg-[#030712]/85 backdrop-blur-xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/5 px-4 sm:px-5 py-2.5 flex items-center justify-between transition"
        aria-label="Main Navigation"
      >
        {/* Brand Logo & Telemetry Pill */}
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono font-black text-xs shadow-md shadow-cyan-500/30 group-hover:scale-105 transition">
              R://
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text group-hover:text-cyan-300 transition leading-tight">
                Rudra.dev
              </span>
              <span className="text-[9px] font-mono text-cyan-400 font-semibold tracking-wider">
                SYS_v2.6 // FULLSTACK & DEVOPS
              </span>
            </div>
          </a>

          {/* Real-time status dot badge */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1 bg-white/[0.03] p-1 rounded-xl border border-white/5">
          <ul className="flex items-center text-xs font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3 py-1.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Action Controls: CLI Button + Theme Toggle + CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* ⌘K Command Palette Trigger Button */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            title="Open Command Center (Ctrl+K or ⌘K)"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono transition duration-200 hover:scale-105 shadow-sm shadow-cyan-500/10"
          >
            <FaTerminal size={11} className="text-cyan-400" />
            <span className="hidden sm:inline">CLI</span>
            <span className="text-[10px] bg-cyan-500/20 px-1.5 py-0.2 rounded border border-cyan-500/30 text-cyan-300">
              ⌘K
            </span>
          </button>

          {setDark && (
            <button
              type="button"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-yellow-400 transition hover:scale-105"
            >
              {dark ? <FaSun size={13} /> : <FaMoon size={13} />}
            </button>
          )}

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white rounded-xl transition shadow-lg shadow-cyan-500/20 hover:scale-105"
          >
            <span>Let's Talk</span>
          </a>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="xl:hidden p-2 rounded-xl text-gray-200 hover:text-white bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            {open ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="xl:hidden mt-2 rounded-2xl bg-[#030712]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl p-4 animate-in slide-in-from-top-2">
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
            <li className="pt-2 border-t border-white/10 mt-1 flex gap-2">
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-1/2 text-center py-2 bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 rounded-xl font-mono text-xs"
              >
                ⌘K Terminal
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-1/2 text-center py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-medium text-xs shadow-md"
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