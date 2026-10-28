import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaLanguage,
  FaCheck,
  FaBookOpen,
  FaAward,
  FaFilePdf,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Education = () => {
  const { education, certifications, languages, publications } = portfolioData;

  return (
    <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          Academics, Research & Credentials
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 text-white">
          Education & Research
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* FEATURED RESEARCH PUBLICATION CARD */}
      {publications && publications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-500/[0.08] via-white/[0.02] to-transparent p-7 sm:p-9 border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-2xl shadow-blue-500/5 mb-12"
        >
          {/* Top glowing line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          {publications.map((pub) => (
            <div key={pub.title}>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                  <FaBookOpen size={12} className="text-blue-400" />
                  <span>Peer-Reviewed Journal Publication</span>
                  <span className="text-gray-500">•</span>
                  <span>Impact Factor: {pub.impactFactor}</span>
                </div>

                <span className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-xl">
                  {pub.volume}
                </span>
              </div>

              {/* Title & Journal */}
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition leading-snug">
                {pub.title}
              </h3>
              <p className="text-sm text-blue-400 font-semibold mt-1.5">
                {pub.journal}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                <span className="font-medium text-gray-300">Authors:</span> {pub.authors} • <span className="font-medium text-gray-300">Mentor:</span> {pub.mentor} • <span className="font-medium text-gray-300">ISSN:</span> {pub.issn}
              </p>

              {/* Abstract */}
              <p className="text-gray-300 text-sm mt-4 leading-relaxed max-w-5xl">
                {pub.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-white/10">
                <a
                  href={pub.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-4 py-2.5 rounded-xl transition hover:scale-105 shadow-md shadow-blue-500/25"
                >
                  <FaExternalLinkAlt size={11} />
                  <span>Read on IJSREM Journal</span>
                </a>

                <a
                  href={pub.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 px-4 py-2.5 rounded-xl transition hover:scale-105"
                >
                  <FaAward size={13} />
                  <span>Publication Certificate (PDF)</span>
                </a>

                <a
                  href={pub.pdfUrl}
                  download="RSR_Analyze_Research_Paper.pdf"
                  className="flex items-center gap-2 text-xs font-semibold bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white px-4 py-2.5 rounded-xl transition hover:scale-105"
                >
                  <FaFilePdf size={13} className="text-purple-400" />
                  <span>Download Paper (PDF)</span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Grid: Academic Qualifications (2 cols) + Certifications & Languages (1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Academic Qualifications */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-5">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FaGraduationCap size={18} />
            </div>
            <span>Academic Qualifications</span>
          </h3>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent p-6 border border-white/10 hover:border-blue-500/40 transition duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition">
                      {edu.degree}
                    </h4>
                    {edu.status && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        <FaCheck size={9} />
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-400 text-sm mt-1 font-medium">
                    {edu.institution}
                  </p>
                  {edu.highlight && (
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed">{edu.highlight}</p>
                  )}
                </div>

                <div className="text-xs font-semibold text-gray-200 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-xl w-fit whitespace-nowrap self-start sm:self-center">
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Languages Side Column */}
        <div className="space-y-6">
          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent p-7 border border-white/10 hover:border-emerald-500/40 transition duration-300 shadow-xl"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5 mb-5">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FaCertificate size={16} />
              </div>
              <span>Certifications</span>
            </h3>

            <div className="space-y-3.5">
              {certifications.map((cert) => (
                <div key={cert.title} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition">
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-blue-400 mt-1 font-medium">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">{cert.description}</p>

                  <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-white/5">
                    {cert.certificateUrl && (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-lg hover:bg-emerald-500/25 transition"
                      >
                        <FaAward size={11} />
                        <span>View Certificate (PDF)</span>
                      </a>
                    )}
                    {cert.paperUrl && (
                      <a
                        href={cert.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-blue-300 bg-blue-500/15 border border-blue-500/30 px-3 py-1 rounded-lg hover:bg-blue-500/25 transition"
                      >
                        <FaExternalLinkAlt size={10} />
                        <span>IJSREM Link</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent p-7 border border-white/10 hover:border-indigo-500/40 transition duration-300 shadow-xl"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2.5 mb-5">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <FaLanguage size={18} />
              </div>
              <span>Languages</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <div key={lang.name} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                  <p className="text-sm font-semibold text-white">{lang.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{lang.level}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
