import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const capabilities = [
  {
    id: "devops",
    title: "Cloud & DevOps",
    skills: "AWS EC2 · GitHub Actions · Docker · CI/CD · Reverse Proxies",
    depth: 3,
    proofHeadline: "Proof · Cloud & DevOps",
    proofText:
      "Automated end-to-end CI/CD deployment pipelines with GitHub Actions onto AWS EC2 instances at Eureka Geeks Technology, reducing deployment turnaround times by 65% and eliminating manual server configuration.",
    sources: [
      { label: "Resume · Cloud & DevOps Work", url: "/resume.pdf" },
      { label: "FirstJob AWS EC2 Production", url: "https://firstjob.a1training.in/" },
    ],
  },
  {
    id: "fullstack",
    title: "Full-Stack Systems",
    skills: "React.js · FastAPI · Node.js · Express.js · REST APIs",
    depth: 3,
    proofHeadline: "Proof · Full-Stack Systems",
    proofText:
      "Engineered scalable single-page interfaces with React.js and high-throughput backend microservices using FastAPI and Node.js for the FirstJob recruitment SaaS platform, handling dynamic applicant matching.",
    sources: [
      { label: "FirstJob Platform", url: "https://firstjob.a1training.in/" },
      { label: "Full Stack Auth System", url: "https://github.com/sujaldubey35/Full-Stack-Authentication-System.git" },
    ],
  },
  {
    id: "nlp",
    title: "Machine Learning & Research",
    skills: "Python · LinearSVC · TF-IDF · Sentiment Analysis · Microservices",
    depth: 3,
    proofHeadline: "Proof · Machine Learning & Research",
    proofText:
      "Authored and published research paper in IJSREM Journal (Impact Factor: 8.659) detailing RSR Analyze: an ML pipeline achieving 88% accuracy and sub-5ms low-latency inference on code-mixed e-commerce reviews.",
    sources: [
      {
        label: "IJSREM Publication Paper",
        url: "https://ijsrem.com/download/product-review-sentiment-analysis-using-natural-language-processing-rsr-analyze",
      },
      { label: "Certificate of Publication", url: "/publication-certificate.pdf" },
    ],
  },
  {
    id: "data",
    title: "Database & Architecture",
    skills: "MongoDB · MySQL · Schema Design · Query Optimization · PWAs",
    depth: 3,
    proofHeadline: "Proof · Database & Architecture",
    proofText:
      "Designed normalized relational MySQL schemas and high-throughput MongoDB document models for candidate tracking, authorization, and review pipelines with zero data leakage.",
    sources: [
      { label: "Resume · Architecture Experience", url: "/resume.pdf" },
      { label: "FirstJob Repository", url: "https://github.com/eurekageeks/First_Job_Job_Potal_Project.git" },
    ],
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCapability = capabilities[activeTab];

  return (
    <motion.section
      id="about"
      aria-labelledby="about-title"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="about-section mx-auto max-w-6xl px-6 py-24 border-t border-white/5"
    >
      {/* Section Header */}
      <div className="about-heading mb-12">
        <p className="data-label">About · 02</p>
        <h2
          id="about-title"
          className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl leading-tight text-paper"
        >
          Production systems. Measured engineering.
        </h2>
        <div className="rule-teal mt-6 max-w-xs" />
      </div>

      {/* Narrative Bio */}
      <div className="about-copy mb-16 max-w-3xl space-y-4 text-paper-dim text-base sm:text-lg leading-relaxed font-light">
        <p>
          I’m a Full Stack Developer &amp; DevOps Engineer at{" "}
          <strong className="text-paper font-semibold">Eureka Geeks Technology</strong>, building scalable web platforms, applicant tracking SaaS, and automated cloud pipelines on AWS EC2.
        </p>
        <p>
          I completed my <strong className="text-teal font-medium">Master of Computer Applications (MCA)</strong> at Galgotias University while authoring peer-reviewed published research in IJSREM (Impact Factor: 8.659). Outside work, I build open-source tools and share reproducible code, metrics, and engineering benchmarks.
        </p>
      </div>

      {/* Interactive Capability Map & Proof HUD */}
      <div id="about-capabilities" className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Capability List */}
          <div className="lg:col-span-6">
            <ul
              className="divide-y divide-white/5 border-y border-white/5"
              aria-label="Capability domains"
            >
              {capabilities.map((cap, index) => {
                const isSelected = activeTab === index;
                return (
                  <li key={cap.id}>
                    <button
                      type="button"
                      onClick={() => setActiveTab(index)}
                      aria-pressed={isSelected}
                      className={`group flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-white/[0.04] border-l-2 border-teal"
                          : "hover:bg-white/[0.02]"
                      }`}
                    >
                      <div className="flex-1">
                        <span
                          className={`block font-display text-lg transition-colors ${
                            isSelected ? "text-teal font-medium" : "text-paper group-hover:text-teal"
                          }`}
                        >
                          {cap.title}
                        </span>
                        <span className="mt-1 block font-mono text-xs leading-relaxed tracking-[0.08em] text-paper-dim">
                          {cap.skills}
                        </span>
                      </div>

                      {/* 3 of 3 Depth Meter */}
                      <div
                        aria-label={`Depth: ${cap.depth} of 3`}
                        className="flex shrink-0 gap-1.5"
                      >
                        {[1, 2, 3].map((box) => (
                          <span
                            key={box}
                            className={`h-2 w-3.5 border transition-all duration-300 ${
                              box <= cap.depth
                                ? isSelected
                                  ? "border-teal bg-teal shadow-[0_0_8px_rgba(20,184,166,0.5)]"
                                  : "border-teal-deep bg-teal-deep"
                                : "border-white/15 bg-transparent"
                            }`}
                          />
                        ))}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Proof HUD Frame with AnimatePresence */}
          <div className="lg:col-span-6 flex">
            <div
              id="capability-proof"
              className="hud-frame flex flex-col justify-between w-full border border-white/10 bg-ink-2/70 p-6 sm:p-8"
              aria-live="polite"
              aria-atomic="true"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                >
                  <div className="data-label text-teal flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                    <span>{activeCapability.proofHeadline}</span>
                  </div>

                  <div className="mt-4 text-base sm:text-lg leading-relaxed text-paper">
                    <p>{activeCapability.proofText}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-4 font-mono text-xs tracking-wider">
                  {activeCapability.sources.map((src) => (
                    <a
                      key={src.label}
                      href={src.url}
                      target={src.url.startsWith("http") || src.url.endsWith(".pdf") ? "_blank" : undefined}
                      rel={src.url.startsWith("http") || src.url.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                      className="text-paper-dim hover:text-teal transition-colors inline-flex items-center gap-1 border-b border-white/10 pb-0.5 hover:border-teal"
                    >
                      <span>{src.label}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>

                <p className="mt-4 font-mono text-[11px] tracking-[0.1em] text-paper-faint">
                  Depth reflects hands-on production and academic experience in each area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}