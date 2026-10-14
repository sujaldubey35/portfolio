import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaLanguage, FaCheck } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Education = () => {
  const { education, certifications, languages } = portfolioData;

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
          Academics & Credentials
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 text-white">
          Education & Certifications
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Column (2 cols on desktop) */}
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
