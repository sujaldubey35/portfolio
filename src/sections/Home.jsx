import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFileDownload,
  FaArrowRight,
  FaCode,
  FaCloud,
} from "react-icons/fa";
import profile from "../assets/profile.jpg";
import { portfolioData } from "../data/portfolioData";

const Home = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex flex-col justify-center items-center px-6 max-w-7xl mx-auto pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial spotlight lights */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 -z-10 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/15 via-indigo-600/20 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* LEFT HERO CONTENT */}
        <div className="text-center lg:text-left max-w-2xl">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs font-medium mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-gray-200">Open to Opportunities</span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <FaMapMarkerAlt size={11} />
              {personal.location}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>
          </motion.div>

          {/* Typing Effect */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-4 h-9 text-blue-400 flex items-center justify-center lg:justify-start">
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
            Full Stack Developer & DevOps Engineer with{" "}
            <span className="text-white font-semibold">2+ years of experience</span> crafting scalable web apps, robust microservices, and automated cloud CI/CD pipelines with{" "}
            <span className="text-blue-400 font-medium">React, FastAPI, Docker, and AWS EC2</span>.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3.5 mt-8 max-w-lg mx-auto lg:mx-0">
            {personal.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center lg:text-left hover:border-blue-500/30 transition group"
              >
                <h3 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-indigo-300 transition">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-medium transition duration-300 hover:scale-105 shadow-xl shadow-blue-500/25 text-white text-sm"
            >
              <span>Explore Projects</span>
              <FaArrowRight size={12} />
            </a>

            <a
              href={personal.resumeUrl}
              download="Rudra_Dubey_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 hover:bg-white/[0.08] hover:border-blue-500/40 transition duration-300 hover:scale-105 text-sm font-medium text-gray-200 hover:text-white"
            >
              <FaFileDownload size={14} className="text-blue-400" />
              <span>Resume PDF</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 bg-white/[0.04] border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 text-gray-300 hover:text-white transition hover:scale-110"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 bg-white/[0.04] border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/40 text-blue-400 hover:text-blue-300 transition hover:scale-110"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT - HERO PORTRAIT WITH FLOATING BADGES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Glowing Aura Rings */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>

          {/* Profile Picture */}
          <div className="relative p-2 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-xl border border-white/15 shadow-2xl">
            <img
              src={profile}
              alt="Rudra Dubey - Full Stack Developer & DevOps Engineer"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-2xl"
            />
          </div>

          {/* Floating Badge 1: Top Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -top-2 -right-4 sm:right-0 bg-gray-950/85 backdrop-blur-xl border border-white/15 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold text-white"
          >
            <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
              <FaCode size={13} />
            </div>
            <span>React & FastAPI</span>
          </motion.div>

          {/* Floating Badge 2: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-3 -left-4 sm:left-0 bg-gray-950/85 backdrop-blur-xl border border-white/15 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold text-white"
          >
            <div className="p-1.5 rounded-lg bg-orange-500/20 text-orange-400">
              <FaCloud size={13} />
            </div>
            <span>AWS EC2 & DevOps</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;