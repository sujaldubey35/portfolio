import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-white/10 mt-16 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            {personal.name}
          </a>
          <p className="text-xs text-gray-400 mt-1">
            Full Stack Developer & DevOps Engineer • {personal.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-blue-400 hover:text-blue-300 hover:bg-white/10 transition"
          >
            <FaLinkedin size={16} />
          </a>
        </div>

        <p className="text-xs text-gray-500 text-center sm:text-right">
          © {new Date().getFullYear()} Rudra Dubey. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;