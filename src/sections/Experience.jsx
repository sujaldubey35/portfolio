import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheck,
  FaRocket,
  FaAward,
} from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Experience = () => {
  const { experiences } = portfolioData;

  const nodeIcons = [
    <FaRocket key="1" size={13} className="text-blue-400" />,
    <FaBriefcase key="2" size={13} className="text-indigo-400" />,
    <FaAward key="3" size={13} className="text-emerald-400" />,
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          Career Timeline
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 text-white">
          Professional Experience
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
          Track record in building scalable full-stack applications, microservices, cloud deployments, and data architecture.
        </p>
      </motion.div>

      {/* Modern Neon Timeline */}
      <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative pl-6 sm:pl-10"
          >
            {/* Glowing Timeline Dot */}
            <div className="absolute -left-[19px] top-2 w-9 h-9 rounded-full bg-[#030712] border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40">
              {nodeIcons[index % nodeIcons.length]}
            </div>

            {/* Experience Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-6 sm:p-8 border border-white/10 hover:border-blue-500/40 transition duration-300 shadow-2xl hover:shadow-blue-500/5">
              {/* Top Accent Line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition">
                      {exp.role}
                    </h3>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-blue-400 mt-1">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-gray-400 gap-1.5">
                  <span className="flex items-center gap-1.5 font-medium text-gray-200 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                    <FaCalendarAlt size={11} className="text-blue-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <FaMapMarkerAlt size={11} className="text-gray-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlight Tag */}
              {exp.highlight && (
                <div className="mt-4 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium inline-block">
                  ⚡ {exp.highlight}
                </div>
              )}

              {/* Bullets */}
              <ul className="mt-5 space-y-3 text-gray-300 text-sm leading-relaxed">
                {exp.bullets.map((bullet, bIndex) => (
                  <li key={bIndex} className="flex items-start gap-3">
                    <span className="mt-1 p-1 rounded-full bg-blue-500/20 text-blue-400 shrink-0">
                      <FaCheck size={9} />
                    </span>
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