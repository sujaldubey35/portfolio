import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="contact-section border-t border-white/5 py-24"
    >
      <div className="contact-layout mx-auto max-w-6xl px-6">
        {/* Contact Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="contact-heading mb-16"
        >
          <p className="data-label">Contact · 06</p>
          <h2
            id="contact-title"
            className="font-display text-4xl sm:text-6xl text-paper leading-tight mt-3"
          >
            Let's build
            <br />
            what's <span className="text-teal animate-pulse">next.</span>
          </h2>
          <p className="contact-intro font-mono text-sm text-paper-dim mt-4">
            Full Stack Developer · DevOps Engineer · Cloud Systems
          </p>
          <div className="rule-teal mt-6 max-w-xs" />
        </motion.div>

        {/* Action Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="contact-actions max-w-2xl space-y-8"
        >
          <p className="contact-action-label font-mono text-xs uppercase tracking-[0.14em] text-paper-faint">
            Start a conversation
          </p>

          {/* Email Row with Copy Button */}
          <div className="contact-email-row flex flex-wrap items-center gap-4">
            <a
              className="contact-email font-mono text-xl sm:text-3xl text-paper hover:text-teal transition-colors border-b border-teal/40 pb-1 group"
              href={`mailto:${personal.email}`}
            >
              <span>{personal.email}</span>
              <span
                aria-hidden="true"
                className="text-teal ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label={`Copy email address ${personal.email}`}
              className="contact-copy font-mono text-xs border border-white/20 hover:border-teal px-3.5 py-2 rounded text-paper hover:text-teal transition-all flex items-center gap-2 cursor-pointer bg-ink-2/60 hover:shadow-[0_0_10px_rgba(20,184,166,0.3)] active:scale-95"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M8 8h12v12H8zM4 16V4h12v4" />
              </svg>
              <AnimatePresence mode="wait">
                <motion.span
                  key={copied ? "copied" : "copy"}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied ? "Copied!" : "Copy"}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Channels List */}
          <div className="contact-channels flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm tracking-wide pt-4">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim hover:text-teal transition-colors inline-flex items-center gap-1 group"
            >
              <span>LinkedIn</span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim hover:text-teal transition-colors inline-flex items-center gap-1 group"
            >
              <span>GitHub</span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-dim hover:text-teal transition-colors inline-flex items-center gap-1 group"
            >
              <span>Résumé</span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>

            <a
              href={personal.phoneUrl}
              className="text-paper-dim hover:text-teal transition-colors inline-flex items-center gap-1 group"
            >
              <span>{personal.phone}</span>
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </a>
          </div>

          {/* Location & Status Signature */}
          <p className="contact-signature font-mono text-xs text-paper-faint pt-8 border-t border-white/5 flex items-center gap-2">
            <span>Rudra Dubey</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span>{personal.location}</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-teal flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" />
              Available for hire
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}