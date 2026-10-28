import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCheck, FaBook, FaAward, FaFilePdf } from "react-icons/fa";

const ProjectCard = ({
  title,
  subtitle,
  desc,
  tech,
  bullets,
  github,
  live,
  liveBadge,
  paperUrl,
  certificateUrl,
  pdfUrl,
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="hud-corner group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent p-7 border border-white/10 hover:border-cyan-500/50 flex flex-col justify-between h-full hover:shadow-2xl hover:shadow-cyan-500/10"
    >
      {/* Top neon glow line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 animate-pulse" />
            <span className="text-[11px] text-gray-400">
              MOD://{title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 16)}
            </span>
          </div>

          {liveBadge && (
            <span className="text-[9px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {liveBadge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-cyan-400/90 font-mono font-medium mt-1">
            {subtitle}
          </p>
        )}

        {/* Short Description */}
        <p className="text-gray-300 text-sm mt-3.5 leading-relaxed font-sans">
          {desc}
        </p>

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-xs text-gray-400 font-sans">
            {bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <FaCheck className="text-cyan-400 text-[10px] mt-1 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mt-6 font-mono">
          {(Array.isArray(tech) ? tech : tech.split(",")).map((item) => (
            <span
              key={item}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/40 hover:text-cyan-300 transition"
            >
              {typeof item === "string" ? item.trim() : item}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 mt-7 pt-5 border-t border-white/10 font-sans">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white px-3.5 py-2 rounded-xl transition hover:scale-105"
          >
            <FaGithub size={13} />
            <span>GitHub</span>
          </a>
        )}

        {live && live !== "#" && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-3.5 py-2 rounded-xl transition hover:scale-105 shadow-md shadow-cyan-500/25"
          >
            <FaExternalLinkAlt size={10} />
            <span>Live Project</span>
          </a>
        )}

        {paperUrl && (
          <a
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 px-3.5 py-2 rounded-xl transition hover:scale-105"
          >
            <FaBook size={11} />
            <span>Read Paper</span>
          </a>
        )}

        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 px-3.5 py-2 rounded-xl transition hover:scale-105"
          >
            <FaAward size={12} />
            <span>Certificate</span>
          </a>
        )}

        {pdfUrl && (
          <a
            href={pdfUrl}
            download="RSR_Analyze_Research_Paper.pdf"
            className="flex items-center gap-1.5 text-xs font-semibold bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 px-3.5 py-2 rounded-xl transition hover:scale-105"
          >
            <FaFilePdf size={12} />
            <span>Paper PDF</span>
          </a>
        )}

        {!live && !paperUrl && (
          <span className="text-xs text-gray-500 italic px-2">
            Production Deployment
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;