import { useState, useEffect, useMemo } from "react";
import {
  FaSearch,
  FaTimes,
  FaCode,
  FaBookOpen,
  FaAward,
  FaFilePdf,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaTerminal,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands = useMemo(
    () => [
      {
        id: "firstjob",
        label: "AI SaaS Job Portal (Live)",
        category: "Projects",
        icon: <FaExternalLinkAlt className="text-blue-400" size={13} />,
        action: () => window.open("https://firstjob.a1training.in/", "_blank"),
      },
      {
        id: "paper-ijsrem",
        label: "Published Research Paper (IJSREM Link)",
        category: "Research",
        icon: <FaBookOpen className="text-cyan-400" size={13} />,
        action: () =>
          window.open(
            "https://ijsrem.com/download/product-review-sentiment-analysis-using-natural-language-processing-rsr-analyze",
            "_blank"
          ),
      },
      {
        id: "cert",
        label: "Publication Certificate (PDF)",
        category: "Research",
        icon: <FaAward className="text-emerald-400" size={14} />,
        action: () => window.open("/publication-certificate.pdf", "_blank"),
      },
      {
        id: "paper-pdf",
        label: "Download Full Research Paper (PDF)",
        category: "Research",
        icon: <FaFilePdf className="text-purple-400" size={13} />,
        action: () => {
          const a = document.createElement("a");
          a.href = "/research-paper.pdf";
          a.download = "RSR_Analyze_Research_Paper.pdf";
          a.click();
        },
      },
      {
        id: "resume",
        label: "Download Resume (PDF)",
        category: "Career",
        icon: <FaFilePdf className="text-rose-400" size={13} />,
        action: () => {
          const a = document.createElement("a");
          a.href = "/resume.pdf";
          a.download = "Rudra_Dubey_Resume.pdf";
          a.click();
        },
      },
      {
        id: "projects",
        label: "Navigate to Projects",
        category: "Navigation",
        icon: <FaCode className="text-indigo-400" size={13} />,
        action: () => {
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        id: "architecture",
        label: "Interactive Architecture Visualizer",
        category: "Navigation",
        icon: <FaTerminal className="text-cyan-400" size={13} />,
        action: () => {
          document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        id: "experience",
        label: "Navigate to Career Experience",
        category: "Navigation",
        icon: <FaBriefcase className="text-amber-400" size={13} />,
        action: () => {
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        id: "education",
        label: "Navigate to Education & Research",
        category: "Navigation",
        icon: <FaGraduationCap className="text-purple-400" size={14} />,
        action: () => {
          document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        id: "github",
        label: "Open GitHub Profile (sujaldubey35)",
        category: "Social",
        icon: <FaGithub className="text-gray-200" size={14} />,
        action: () => window.open("https://github.com/sujaldubey35", "_blank"),
      },
      {
        id: "linkedin",
        label: "Open LinkedIn Profile",
        category: "Social",
        icon: <FaLinkedin className="text-blue-400" size={14} />,
        action: () =>
          window.open("https://www.linkedin.com/in/rudra-dubey-477b68280/", "_blank"),
      },
    ],
    []
  );

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Keyboard navigation inside palette
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#030712] border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 overflow-hidden font-mono text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Cyber Telemetry Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-cyan-950/30 border-b border-cyan-500/20 text-[11px] text-cyan-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-bold tracking-wider">HUD://COMMAND_CENTER</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <span>[ESC] TO CLOSE</span>
            <button
              onClick={onClose}
              aria-label="Close command palette"
              className="hover:text-white transition"
            >
              <FaTimes size={12} />
            </button>
          </div>
        </div>

        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <FaSearch className="text-cyan-400 shrink-0" size={14} />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to... (e.g., paper, cert, firstjob)"
            className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-xs sm:text-sm font-sans"
          />
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-gray-500 text-xs font-sans">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition font-sans ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-white border border-cyan-500/30"
                      : "text-gray-300 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium">
                      {item.label}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-t border-white/5 text-[10px] text-gray-400 font-mono">
          <span>↑↓ NAVIGATE</span>
          <span>↵ SELECT</span>
          <span>ESC CLOSE</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
