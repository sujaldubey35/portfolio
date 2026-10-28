import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#work" },
    { name: "Research", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/5 bg-ink/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="header-navigation mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
      >
        {/* Brand Name */}
        <a
          href="#hero"
          className="header-home shrink-0 whitespace-nowrap font-mono text-xs sm:text-sm tracking-[0.2em] text-paper uppercase transition hover:text-teal no-underline"
        >
          <span>RUDRA</span>
          <span className="text-teal font-bold px-0.5">·</span>
          <span>DUBEY</span>
          <span className="sr-only">: home</span>
        </a>

        {/* Desktop Controls */}
        <div className="hidden sm:flex items-center gap-6 md:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="data-label text-paper-dim hover:text-teal transition-colors lowercase tracking-[0.14em] text-xs"
            >
              <span className="capitalize">{link.name}</span>
            </a>
          ))}

          {/* Résumé Action Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal/60 px-3 py-1.5 font-mono text-xs tracking-[0.14em] text-teal transition-all duration-200 hover:bg-teal hover:text-ink font-semibold"
          >
            RÉSUMÉ ↗
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal/60 px-2.5 py-1 font-mono text-[11px] tracking-[0.12em] text-teal hover:bg-teal hover:text-ink transition-colors"
          >
            CV ↗
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="p-1.5 text-paper-dim hover:text-paper"
          >
            {open ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="sm:hidden border-b border-white/5 bg-ink-2/95 px-6 py-4 animate-in slide-in-from-top-1">
          <div className="flex flex-col gap-3 font-mono text-xs">
            {links.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-2 text-paper-dim hover:text-teal border-b border-white/5"
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-teal/60">0{idx + 2}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}