import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import profile from "../assets/profile.jpg";
import DribblingPlayer from "../components/DribblingPlayer";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const { personal } = portfolioData;
  const [characterMode, setCharacterMode] = useState("player3d"); // 'player3d' | 'photo'

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-name"
      className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 min-h-[85vh] flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6">
        {/* Left Copy Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 space-y-6"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-teal"
          >
            <span
              className="inline-block w-2 h-2 rounded-full bg-teal animate-ping"
              aria-hidden="true"
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal -ml-4 mr-1"></span>
            <span>Full Stack &amp; DevOps</span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            variants={itemVariants}
            id="hero-name"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-paper"
          >
            <span>Rudra</span>{" "}
            <span className="whitespace-nowrap">
              Dubey
              <span aria-hidden="true" className="text-teal font-extrabold animate-pulse">
                .
              </span>
            </span>
          </motion.h1>

          {/* Visual Role Sequence (Applied AI & NLP removed) */}
          <motion.div
            variants={itemVariants}
            className="font-mono text-sm sm:text-base text-paper-dim flex flex-wrap items-center gap-x-2.5 gap-y-1"
          >
            <span className="text-paper font-medium">Software Engineer</span>
            <span className="text-teal" aria-hidden="true">
              ·
            </span>
            <span className="text-paper font-medium">Full Stack Developer</span>
            <span className="text-teal" aria-hidden="true">
              ·
            </span>
            <span className="text-paper font-medium">DevOps Engineer</span>
          </motion.div>

          {/* Dynamic Typing Sub-stream */}
          <motion.div
            variants={itemVariants}
            className="font-mono text-xs text-teal/90 flex items-center gap-2"
          >
            <span className="text-paper-faint tracking-wider uppercase">Active Focus:</span>
            <ReactTyped
              strings={[
                "AWS EC2 Cloud Infrastructure & Docker",
                "FastAPI & React Microservices Architecture",
                "Automated GitHub Actions CI/CD Workflows",
                "Scalable Full-Stack Web Applications",
              ]}
              typeSpeed={40}
              backSpeed={25}
              backDelay={2000}
              loop
            />
          </motion.div>

          {/* Editorial Positioning Statement */}
          <motion.p
            variants={itemVariants}
            className="text-paper-dim text-lg sm:text-xl leading-relaxed max-w-2xl font-light"
          >
            I engineer scalable web platforms, high-throughput microservices, and automated cloud infrastructure on AWS EC2.
          </motion.p>

          {/* Action Links */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm tracking-wide"
          >
            <a
              href="#work"
              className="text-teal hover:text-teal-light transition-all inline-flex items-center gap-1.5 font-semibold group hover:translate-x-0.5"
            >
              <span>See what I’ve built</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim hover:text-paper transition-colors inline-flex items-center gap-1"
            >
              <span>Résumé</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim hover:text-paper transition-colors inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim hover:text-paper transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Stage: 3D Dribbling Football Player Character (matching mananthakkar.dev) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-80 sm:w-96 flex flex-col items-center"
          >
            {/* Subtle pulsing glow backdrop */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-tr from-teal/20 via-transparent to-teal/15 rounded-3xl blur-2xl -z-10"
              aria-hidden="true"
            />

            {/* Stage Frame */}
            <div className="hud-frame w-full rounded-xl p-3 border border-white/10 bg-ink-2/80 overflow-hidden shadow-2xl transition-all duration-300 hover:border-teal/40">
              {/* Header toolbar with mode switch */}
              <div className="preview-toolbar !py-1.5 !px-3 !bg-ink text-[10px] font-mono text-paper-dim flex justify-between items-center mb-2">
                <div className="flex gap-1.5">
                  <span />
                  <span />
                  <span />
                </div>
                {/* Segmented Switch */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-0.5 rounded border border-white/5">
                  <button
                    type="button"
                    onClick={() => setCharacterMode("player3d")}
                    className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                      characterMode === "player3d"
                        ? "bg-teal text-ink font-semibold"
                        : "text-paper-dim hover:text-paper"
                    }`}
                  >
                    ⚽ 3D Player
                  </button>
                  <button
                    type="button"
                    onClick={() => setCharacterMode("photo")}
                    className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                      characterMode === "photo"
                        ? "bg-teal text-ink font-semibold"
                        : "text-paper-dim hover:text-paper"
                    }`}
                  >
                    📷 Portrait
                  </button>
                </div>
              </div>

              {/* Stage Body */}
              <div className="relative min-h-[360px] flex items-center justify-center overflow-hidden rounded-lg bg-ink-3">
                <AnimatePresence mode="wait">
                  {characterMode === "player3d" ? (
                    <motion.div
                      key="3d-player"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full flex justify-center py-2"
                    >
                      <DribblingPlayer />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="portrait-photo"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full aspect-[4/5] overflow-hidden rounded-lg group"
                    >
                      <img
                        src={profile}
                        alt="Rudra Dubey"
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-ink/80 backdrop-blur border border-white/10 px-2.5 py-1 rounded">
                        <span className="text-paper-dim">Status</span>
                        <span className="text-teal flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" />
                          Production Ready
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Baseline Footer Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-16 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs"
      >
        <div className="flex items-center gap-2">
          <span className="text-paper-faint uppercase tracking-wider text-[11px]">
            Currently building at
          </span>
          <span className="text-paper font-semibold">Eureka Geeks Technology</span>
        </div>

        <a
          href="#about"
          className="text-teal hover:text-teal-light inline-flex items-center gap-1.5 transition-colors group"
          aria-label="Meet Rudra: about me"
        >
          <span>Meet Rudra</span>
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-y-1"
          >
            ↓
          </span>
        </a>
      </motion.div>
    </section>
  );
}