import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  const projectMeta = [
    {
      category: "01 / Full-Stack SaaS Platform",
      badge: "Production / AWS EC2",
      toolbarTitle: "FirstJob · Candidate & ATS Workspace",
      problem:
        "Freshers and universities lack a unified applicant tracking platform with automated candidate recommendation and high uptime.",
      built:
        "Architected an end-to-end recruitment platform with FastAPI microservices, React.js SPA, and continuous GitHub Actions deployment on AWS EC2.",
      outcome: "Live on AWS EC2 · Sub-100ms API Response · PWA Enabled",
      decisions: [
        { step: "01", label: "Ingest Job Listings" },
        { step: "02", label: "Candidate Tracking & ATS" },
        { step: "03", label: "CI/CD Auto-Deploy (EC2)" },
      ],
      scope:
        "Production environment hosted on AWS EC2 with reverse proxy, SSL termination, and automated GitHub Actions CI/CD workflows.",
    },
    {
      category: "02 / Applied NLP Research & Paper",
      badge: "IJSREM Published (IF: 8.659)",
      toolbarTitle: "RSR Analyze · Sentiment Inference Engine",
      problem:
        "E-commerce customer sentiment is noisy, code-mixed (Hinglish/English), and transformer inference is prohibitively heavy for high-throughput pipelines.",
      built:
        "Lightweight sentiment analysis microservice using LinearSVC and TF-IDF with custom Hinglish transliteration normalization.",
      outcome: "88% Accuracy · < 5ms Inference Latency · IJSREM Published",
      decisions: [
        { step: "01", label: "Normalize Hinglish" },
        { step: "02", label: "TF-IDF Vectorization" },
        { step: "03", label: "LinearSVC Low-Latency Inference" },
      ],
      scope:
        "Peer-reviewed in IJSREM Journal (ISSN: 2582-3930, Volume 10, Issue 06, June 2026, Impact Factor: 8.659).",
    },
    {
      category: "03 / Security & Architecture",
      badge: "Open Source Microservice",
      toolbarTitle: "Auth Gateway · JWT & Session Architecture",
      problem:
        "Single-page web applications require stateless, tamper-proof authentication with secure token renewal and zero credential leakage.",
      built:
        "Complete JWT authentication lifecycle featuring access & refresh token rotation, bcrypt password hashing, and protected route middleware.",
      outcome: "Stateless Auth · Zero Credential Exposure · Modular Router",
      decisions: [
        { step: "01", label: "Client Auth Request" },
        { step: "02", label: "Bcrypt & Signed Token Minting" },
        { step: "03", label: "Role-Based Route Guard" },
      ],
      scope:
        "Production-tested FastAPI router with MongoDB persistence and schema validation via Pydantic.",
    },
  ];

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="work-section border-t border-white/5 py-24"
    >
      <div className="work-layout mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="work-heading mb-16"
        >
          <p className="data-label">Projects · 04</p>
          <h2
            id="work-title"
            className="mt-3 font-display text-4xl sm:text-5xl leading-tight text-paper"
          >
            Public code,
            <br className="hidden sm:block" /> lessons learned.
          </h2>
          <div className="rule-teal mt-6 max-w-xs" />
        </motion.div>

        {/* Project Articles List */}
        <div className="work-projects space-y-24">
          {projects.map((project, index) => {
            const meta = projectMeta[index] || {};
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="project-feature border-t border-white/5 pt-12 first:border-none first:pt-0 group"
                aria-labelledby={`project-title-${index}`}
              >
                {/* Category & Status */}
                <div className="project-heading flex flex-wrap items-baseline justify-between gap-4">
                  <p className="project-category font-mono text-xs uppercase tracking-[0.14em] text-teal">
                    {meta.category || `0${index + 1} / Engineering`}
                  </p>
                  {project.liveBadge && (
                    <span className="font-mono text-xs text-paper-dim border border-white/10 px-2 py-0.5 rounded bg-ink-2">
                      {project.liveBadge}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3
                  id={`project-title-${index}`}
                  className="font-display text-3xl sm:text-4xl text-paper mt-3 group-hover:text-teal transition-colors"
                >
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="font-mono text-xs sm:text-sm text-paper-dim mt-1">
                    {project.subtitle}
                  </p>
                )}

                {/* Preview Frame */}
                <div className="hud-frame rounded-lg border border-white/10 bg-ink-2/80 mt-6 overflow-hidden transition-all duration-300 group-hover:border-teal/40">
                  <div className="preview-toolbar flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span />
                      <span />
                      <span />
                    </div>
                    <p className="text-[11px] font-mono text-paper-dim">
                      {meta.toolbarTitle || "Workspace"}
                    </p>
                  </div>
                  <div className="p-5 sm:p-6 bg-ink-3/40">
                    <p className="text-paper text-sm sm:text-base leading-relaxed font-light">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Project Story: Problem / Built / Outcome */}
                <div className="project-story mt-8">
                  <dl className="project-summary grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-white/5 py-6">
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-wider text-teal">
                        Problem
                      </dt>
                      <dd className="mt-2 text-paper text-sm sm:text-base leading-relaxed">
                        {meta.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-wider text-teal">
                        I built
                      </dt>
                      <dd className="mt-2 text-paper text-sm sm:text-base leading-relaxed">
                        {meta.built}
                      </dd>
                    </div>
                    <div className="project-outcome">
                      <dt className="font-mono text-xs uppercase tracking-wider text-teal">
                        Outcome
                      </dt>
                      <dd className="mt-2 text-teal font-medium text-sm sm:text-base leading-relaxed">
                        {meta.outcome}
                      </dd>
                    </div>
                  </dl>

                  {/* Decision Map with interactive step hover */}
                  {meta.decisions && (
                    <figure
                      className="decision-map mt-6 p-4 rounded bg-white/[0.02] border border-white/5"
                      aria-label="Project decision map"
                    >
                      <ol className="flex flex-wrap items-center gap-4 text-xs font-mono">
                        {meta.decisions.map((dec, dIdx) => (
                          <li
                            key={dec.step}
                            className="flex items-center gap-2 group/step cursor-default transition-transform hover:scale-105"
                          >
                            <span className="text-teal font-bold px-1.5 py-0.5 rounded bg-teal/10 border border-teal/20 group-hover/step:bg-teal group-hover/step:text-ink transition-colors">
                              {dec.step}
                            </span>
                            <strong className="text-paper font-normal group-hover/step:text-teal transition-colors">
                              {dec.label}
                            </strong>
                            {dIdx < meta.decisions.length - 1 && (
                              <span className="text-white/20 ml-2">→</span>
                            )}
                          </li>
                        ))}
                      </ol>
                    </figure>
                  )}

                  {/* Scope note */}
                  {meta.scope && (
                    <p className="project-scope mt-4 font-mono text-xs text-paper-faint tracking-wide">
                      {meta.scope}
                    </p>
                  )}

                  {/* Tech stack */}
                  <ul
                    className="project-stack mt-5 flex flex-wrap gap-2 text-xs font-mono"
                    aria-label={`${project.title} stack`}
                    role="list"
                  >
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded text-paper-dim hover:text-teal hover:border-teal/30 transition-colors"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {/* Action Links */}
                  <div className="project-footer mt-8 pt-4">
                    <div className="project-links flex flex-wrap items-center gap-4 font-mono text-xs tracking-wider">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-teal/70 px-3.5 py-1.5 text-teal hover:bg-teal hover:text-ink transition-all font-medium inline-flex items-center gap-1.5 hover:shadow-[0_0_12px_rgba(20,184,166,0.4)]"
                        >
                          <span>Live Platform</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.paperUrl && (
                        <a
                          href={project.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-teal/70 px-3.5 py-1.5 text-teal hover:bg-teal hover:text-ink transition-all font-medium inline-flex items-center gap-1.5 hover:shadow-[0_0_12px_rgba(20,184,166,0.4)]"
                        >
                          <span>Read Paper</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.pdfUrl && (
                        <a
                          href={project.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-paper-dim hover:text-paper px-3.5 py-1.5 border border-white/10 hover:border-white/30 transition inline-flex items-center gap-1.5"
                        >
                          <span>Paper PDF</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.certificateUrl && (
                        <a
                          href={project.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-paper-dim hover:text-paper px-3.5 py-1.5 border border-white/10 hover:border-white/30 transition inline-flex items-center gap-1.5"
                        >
                          <span>Certificate</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-paper-dim hover:text-paper px-3.5 py-1.5 border border-white/10 hover:border-white/30 transition inline-flex items-center gap-1.5"
                        >
                          <span>GitHub</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}