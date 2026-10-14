import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 mt-20 bg-[#030712]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <a
              href="#home"
              className="text-lg font-extrabold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent hover:opacity-90 transition"
            >
              {personal.name}
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Full Stack Developer & DevOps Engineer • {personal.location}
          </p>
        </div>

        {/* Social Icons + Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition hover:scale-105"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-blue-400 hover:text-blue-300 hover:bg-white/10 hover:border-blue-500/40 transition hover:scale-105"
          >
            <FaLinkedin size={16} />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition hover:scale-105"
          >
            <FaArrowUp size={14} />
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center sm:text-right">
          © {new Date().getFullYear()} Rudra Dubey. Engineered with React 19 & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;