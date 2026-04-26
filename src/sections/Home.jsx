import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* LEFT */}
      <div className="text-center md:text-left max-w-xl">

        {/* 👋 Greeting + Name */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-lg text-gray-400 mb-2">
            Hi, I'm 👋
          </h1>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
            Rudra Dubey
          </h1>
        </motion.div>

        {/* 🔥 Typing Effect */}
        <h2 className="text-xl md:text-2xl text-blue-400 mt-4 font-semibold">
          <ReactTyped
            strings={[
              "Full Stack Developer",
              "React Developer",
              "FastAPI Developer",
              "Building Scalable Apps 🚀",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        {/* 💬 Description */}
        <p className="mt-4 text-gray-400">
          I build modern, scalable web applications using React, FastAPI, and MongoDB.
        </p>

        {/* 📊 Stats */}
        <div className="flex gap-8 mt-6 justify-center md:justify-start">
          <div>
            <h3 className="text-2xl font-bold">3+</h3>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">9+</h3>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
        </div>

        {/* 🔥 Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          
          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-600 transition hover:scale-105 shadow-lg"
          >
            View Projects
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-blue-500 rounded-xl hover:bg-blue-500/20 transition hover:scale-105"
          >
            Download Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sujaldubey35"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition hover:scale-110"
          >
            <FaGithub size={22} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rudra-dubey-477b68280/"
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* RIGHT - IMAGE */}
      <motion.img
        src={profile}
        alt="Rudra"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.7)]"
      />
    </section>
  );
};

export default Home;