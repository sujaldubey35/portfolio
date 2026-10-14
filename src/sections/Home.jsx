import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileDownload, FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { portfolioData } from "../data/portfolioData";

const Home = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-[92vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-6 max-w-7xl mx-auto py-12"
    >
      {/* LEFT CONTENT */}
      <div className="text-center md:text-left max-w-2xl">
        
        {/* Location & Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for Roles & Collaborations</span>
          <span className="text-gray-500">•</span>
          <span className="flex items-center gap-1 text-gray-300">
            <FaMapMarkerAlt size={11} className="text-blue-400" />
            {personal.location}
          </span>
        </motion.div>

        {/* Greeting + Name */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-1">
            Hi there, I'm
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]">
            {personal.name}
          </h1>
        </motion.div>

        {/* Typing Effect */}
        <div className="text-xl sm:text-2xl text-blue-400 font-semibold mt-3 h-8">
          <ReactTyped
            strings={personal.typingRoles}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1600}
            loop
          />
        </div>

        {/* Description */}
        <p className="mt-5 text-gray-300 text-base sm:text-lg leading-relaxed">
          Results-driven engineer with <span className="text-white font-semibold">2+ years of hands-on experience</span>. 
          Specialized in modern full-stack web applications (React & FastAPI) and automated cloud infrastructure with 
          <span className="text-blue-400 font-medium"> Docker, AWS EC2, and GitHub Actions CI/CD</span>.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 py-4 px-5 rounded-2xl bg-white/[0.03] border border-white/10 max-w-lg mx-auto md:mx-0">
          {personal.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Buttons & Socials */}
        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center md:justify-start">
          {/* Explore Projects */}
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl font-medium transition hover:scale-105 shadow-lg shadow-blue-500/25 text-white text-sm"
          >
            <span>View Projects</span>
            <FaArrowRight size={12} />
          </a>

          {/* Download Resume */}
          <a
            href={personal.resumeUrl}
            download="Rudra_Dubey_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 border border-blue-500/40 rounded-xl hover:bg-blue-500/10 transition hover:scale-105 text-sm font-medium text-blue-300"
          >
            <FaFileDownload size={14} />
            <span>Download Resume</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/15 text-gray-300 hover:text-white transition hover:scale-110"
            >
              <FaGithub size={20} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/15 text-blue-400 hover:text-blue-300 transition hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT - HERO IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
        <img
          src={profile}
          alt="Rudra Dubey - Full Stack Developer & DevOps Engineer"
          className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-blue-500/80 shadow-2xl shadow-blue-500/30"
        />
        <div className="absolute bottom-2 right-4 bg-gray-900/90 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-gray-200 flex items-center gap-1.5 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          2+ Yrs Experience
        </div>
      </motion.div>
    </section>
  );
};

export default Home;