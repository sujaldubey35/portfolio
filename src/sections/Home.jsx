import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      aria-labelledby="hero-name"
      className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 min-h-[85vh] flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-teal">
            <span
              className="inline-block w-2 h-2 rounded-full bg-teal animate-pulse"
              aria-hidden="true"
            />
            <span>Full Stack &amp; DevOps</span>
          </div>

          {/* Large Editorial Headline */}
          <h1
            id="hero-name"
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-paper"
          >
            <span>Rudra</span>{" "}
            <span className="whitespace-nowrap">
              Dubey
              <span aria-hidden="true" className="text-teal font-extrabold">
                .
              </span>
            </span>
          </h1>

          {/* Visual Role Sequence */}
          <p className="font-mono text-sm sm:text-base text-paper-dim flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="text-paper font-medium">Software Engineer</span>
            <span className="text-teal" aria-hidden="true">
              ·
            </span>
            <span className="text-paper font-medium">DevOps Engineer</span>
            <span className="text-teal" aria-hidden="true">
              ·
            </span>
            <span className="text-paper font-medium">Applied AI &amp; NLP</span>
          </p>

          {/* Editorial Positioning Statement */}
          <p className="text-paper-dim text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
            I engineer scalable web platforms, automated cloud infrastructure on AWS EC2, and published NLP systems.
          </p>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm tracking-wide">
            <a
              href="#work"
              className="text-teal hover:text-teal-light transition-colors inline-flex items-center gap-1.5 font-semibold group"
            >
              <span>See what I’ve built</span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
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
          </div>
        </div>

        {/* Right Portrait Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-64 sm:w-72 md:w-80"
          >
            {/* Subtle glow backdrop */}
            <div
              className="absolute -inset-2 bg-gradient-to-tr from-teal/20 via-transparent to-teal/10 rounded-2xl blur-xl -z-10"
              aria-hidden="true"
            />

            {/* Frame matching mananthakkar.dev */}
            <div className="hud-frame rounded-xl p-2 border border-white/10 bg-ink-2/80 overflow-hidden shadow-2xl">
              <div className="preview-toolbar !py-1.5 !px-3 !bg-ink text-[10px] font-mono text-paper-dim flex justify-between items-center">
                <div className="flex gap-1.5">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="text-[10px] text-teal/80">rudra.profile.stage</span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink-3">
                <img
                  src={profile}
                  alt="Rudra Dubey"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                
                {/* Mode Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono bg-ink/80 backdrop-blur border border-white/10 px-2.5 py-1 rounded">
                  <span className="text-paper-dim">Status</span>
                  <span className="text-teal flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" />
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Baseline Footer Row */}
      <div className="mt-16 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
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
            className="transition-transform group-hover:translate-y-0.5"
          >
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}