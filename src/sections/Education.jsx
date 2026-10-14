import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaLanguage } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Education = () => {
  const { education, certifications, languages } = portfolioData;

  return (
    <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Academic Background
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">
          Education & Certifications
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Education Column (2 cols on desktop) */}
        <div className="lg:col-span-2 space-y-5">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <FaGraduationCap className="text-blue-400" />
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
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    {edu.status && (
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          edu.status === "Pursuing"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <p className="text-blue-400 text-sm mt-0.5 font-medium">
                    {edu.institution}
                  </p>
                  {edu.highlight && (
                    <p className="text-gray-400 text-xs mt-1.5">{edu.highlight}</p>
                  )}
                </div>

                <div className="text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg w-fit whitespace-nowrap self-start sm:self-center">
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
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <FaCertificate className="text-emerald-400" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-blue-400 mt-0.5 font-medium">{cert.issuer}</p>
                  <p className="text-xs text-gray-400 mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages & Core Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <FaLanguage className="text-indigo-400" />
              <span>Languages</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {languages.map((lang) => (
                <div key={lang.name} className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <p className="text-sm font-semibold text-white">{lang.name}</p>
                  <p className="text-xs text-gray-400">{lang.level}</p>
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
