import { FaGithub, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

const ProjectCard = ({ title, subtitle, desc, tech, bullets, github, live, liveBadge }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-7 border border-white/10 hover:border-blue-500/50 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
      {/* Top neon glow line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Terminal / Window Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          {liveBadge && (
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
              {liveBadge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-blue-400 font-medium mt-1">
            {subtitle}
          </p>
        )}

        {/* Short Description */}
        <p className="text-gray-300 text-sm mt-3.5 leading-relaxed">
          {desc}
        </p>

        {/* Bullets */}
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-2 text-xs text-gray-400">
            {bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <FaCheck className="text-blue-400 text-[10px] mt-1 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mt-6">
          {(Array.isArray(tech) ? tech : tech.split(",")).map((item) => (
            <span
              key={item}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium hover:border-blue-500/40 hover:text-white transition"
            >
              {typeof item === "string" ? item.trim() : item}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 mt-7 pt-5 border-t border-white/10">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-white px-4 py-2.5 rounded-xl transition hover:scale-105"
          >
            <FaGithub size={14} />
            <span>GitHub</span>
          </a>
        )}

        {live && live !== "#" ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2.5 rounded-xl transition hover:scale-105 shadow-md shadow-blue-500/25"
          >
            <FaExternalLinkAlt size={11} />
            <span>Live Project</span>
          </a>
        ) : (
          <span className="text-xs text-gray-500 italic px-2">
            Production Deployment
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;