import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaRocket } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Career Journey (2+ Years)
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">
          Professional Experience
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
          2 years of software engineering experience spanning full-stack development, with a 2nd-year expansion into DevOps, cloud architecture, and CI/CD pipelines.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.period}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-6 sm:pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#090d16] border-2 border-blue-500 flex items-center justify-center text-blue-400 shadow-md shadow-blue-500/30">
              {index === 0 ? <FaRocket size={12} /> : <FaBriefcase size={12} />}
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition shadow-xl">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-blue-400 mt-1">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-gray-400 gap-1">
                  <span className="flex items-center gap-1.5 font-medium text-gray-300 bg-white/5 px-2.5 py-1 rounded-md">
                    <FaCalendarAlt size={11} className="text-blue-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt size={11} className="text-gray-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Specialization Highlight Badge */}
              {exp.highlight && (
                <div className="mt-4 px-3.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium inline-block">
                  🎯 {exp.highlight}
                </div>
              )}

              {/* Bullets */}
              <ul className="mt-4 space-y-2.5 text-gray-300 text-sm leading-relaxed">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-blue-400 text-xs mt-1 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;