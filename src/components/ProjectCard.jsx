import { FaGithub, FaExternalLinkAlt, FaCheck, FaCode } from "react-icons/fa";

const ProjectCard = ({ title, subtitle, desc, tech, bullets, github, live, liveBadge }) => {
  return (
    <div className="bg-white/[0.03] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full transition duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
      <div>
        {/* Header & Badges */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <FaCode size={18} />
          </div>
          {liveBadge && (
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
              {liveBadge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-blue-400/90 font-medium mt-0.5">
            {subtitle}
          </p>
        )}

        {/* Short Description */}
        <p className="text-gray-300 text-sm mt-3 leading-relaxed">
          {desc}
        </p>

        {/* Bullet Highlights */}
        {bullets && bullets.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-xs text-gray-400">
            {bullets.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <FaCheck className="text-blue-400 text-[10px] mt-1 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {(Array.isArray(tech) ? tech : tech.split(",")).map((item) => (
            <span
              key={item}
              className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 font-medium"
            >
              {typeof item === "string" ? item.trim() : item}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition hover:scale-105"
          >
            <FaGithub size={14} />
            <span>Source Code</span>
          </a>
        )}

        {live && live !== "#" ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl transition hover:scale-105 shadow-md shadow-blue-500/20"
          >
            <FaExternalLinkAlt size={12} />
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