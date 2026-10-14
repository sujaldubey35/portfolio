import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaCubes,
  FaCss3Alt,
  FaNetworkWired,
  FaAws,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiPwa,
  SiPython,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiGithubactions,
  SiDocker,
  SiVercel,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { portfolioData } from "../data/portfolioData";

// Icon & Color mapping for rich modern tech badges
const skillMeta = {
  "React.js": { icon: <SiReact className="text-[#61DAFB]" size={16} /> },
  "JavaScript (ES6+)": { icon: <SiJavascript className="text-[#F7DF1E]" size={16} /> },
  JavaScript: { icon: <SiJavascript className="text-[#F7DF1E]" size={16} /> },
  "Tailwind CSS": { icon: <SiTailwindcss className="text-[#38BDF8]" size={16} /> },
  HTML5: { icon: <SiHtml5 className="text-[#E34F26]" size={16} /> },
  CSS3: { icon: <FaCss3Alt className="text-[#1572B6]" size={16} /> },
  Bootstrap: { icon: <SiBootstrap className="text-[#7952B3]" size={16} /> },
  PWA: { icon: <SiPwa className="text-[#9333EA]" size={16} /> },
  Python: { icon: <SiPython className="text-[#38BDF8]" size={16} /> },
  FastAPI: { icon: <SiFastapi className="text-[#009688]" size={16} /> },
  "Node.js": { icon: <SiNodedotjs className="text-[#5FA04E]" size={16} /> },
  "Express.js": { icon: <SiExpress className="text-gray-200" size={16} /> },
  "REST APIs": { icon: <FaNetworkWired className="text-[#60A5FA]" size={15} /> },
  "AWS EC2": { icon: <FaAws className="text-[#FF9900]" size={17} /> },
  "GitHub Actions (CI/CD)": { icon: <SiGithubactions className="text-[#2088FF]" size={16} /> },
  Docker: { icon: <SiDocker className="text-[#2496ED]" size={16} /> },
  Vercel: { icon: <SiVercel className="text-gray-200" size={15} /> },
  Git: { icon: <SiGit className="text-[#F05032]" size={16} /> },
  GitHub: { icon: <SiGithub className="text-gray-200" size={16} /> },
  MongoDB: { icon: <SiMongodb className="text-[#47A248]" size={16} /> },
  MySQL: { icon: <SiMysql className="text-[#00758F]" size={16} /> },
  "Database Schema Design": { icon: <FaDatabase className="text-[#38BDF8]" size={15} /> },
  "CRUD Optimization": { icon: <FaServer className="text-[#A78BFA]" size={15} /> },
  "Microservices Architecture": { icon: <FaCubes className="text-[#818CF8]" size={15} /> },
  "REST API Architecture": { icon: <FaLayerGroup className="text-[#34D399]" size={15} /> },
  Postman: { icon: <SiPostman className="text-[#FF6C37]" size={16} /> },
  "VS Code": { icon: <VscVscode className="text-[#007ACC]" size={16} /> },
};

// Category header metadata
const categoryMeta = {
  "Frontend & Web": {
    icon: <FaLaptopCode size={18} className="text-cyan-400" />,
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accent: "text-cyan-400",
    borderGlow: "group-hover:border-cyan-500/40",
  },
  "Backend & Languages": {
    icon: <FaServer size={18} className="text-emerald-400" />,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-400",
    borderGlow: "group-hover:border-emerald-500/40",
  },
  "Cloud, DevOps & CI/CD": {
    icon: <FaCloud size={18} className="text-orange-400" />,
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    accent: "text-orange-400",
    borderGlow: "group-hover:border-orange-500/40",
  },
  "Databases & Storage": {
    icon: <FaDatabase size={18} className="text-blue-400" />,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accent: "text-blue-400",
    borderGlow: "group-hover:border-blue-500/40",
  },
  "Architecture & Tools": {
    icon: <FaCubes size={18} className="text-purple-400" />,
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accent: "text-purple-400",
    borderGlow: "group-hover:border-purple-500/40",
  },
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          Core Competencies
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 text-white">
          Technical Skills & Stack
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          Full-stack engineering toolset spanning dynamic frontend interfaces, backend microservices, database design, and automated cloud infrastructure.
        </p>
      </motion.div>

      {/* Modern Bento Grid: 3 cards top, 2 cards bottom - perfectly balanced! */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {skills.map((category, index) => {
          const meta = categoryMeta[category.category] || {
            icon: <FaLaptopCode size={18} className="text-blue-400" />,
            gradient: "from-blue-500/20 to-transparent",
            accent: "text-blue-400",
            borderGlow: "group-hover:border-blue-500/40",
          };

          // 1st row has 3 items (col-span-2 each), 2nd row has 2 items (col-span-3 each)
          const colSpanClass = index < 3 ? "lg:col-span-2" : "lg:col-span-3";

          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-7 border border-white/10 ${meta.borderGlow} transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 ${colSpanClass} flex flex-col justify-between`}
            >
              {/* Subtle top neon line on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition duration-300 shadow-inner">
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        {category.items.length} Technologies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Chips with brand icons */}
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((skill) => {
                    const skillData = skillMeta[skill] || {
                      icon: <span className="w-2 h-2 rounded-full bg-blue-400" />,
                    };

                    return (
                      <div
                        key={skill}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.09] text-gray-200 hover:text-white transition-all duration-200 hover:scale-[1.04] shadow-sm cursor-default"
                      >
                        {skillData.icon}
                        <span className="text-xs font-medium">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;