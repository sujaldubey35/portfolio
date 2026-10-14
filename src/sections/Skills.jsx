import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Technologies & Tools
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">
          Technical Skills
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
          Comprehensive toolset across frontend web, scalable microservices, relational & document databases, and automated cloud infrastructure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl bg-white/[0.03] border transition hover:scale-[1.02] ${
              category.badge
                ? "border-blue-500/40 shadow-lg shadow-blue-500/10"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">{category.category}</h3>
              {category.badge && (
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {category.badge}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 border border-white/10 text-gray-200 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;