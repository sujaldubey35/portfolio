import { motion } from "framer-motion";
import { FaGraduationCap, FaServer, FaCloud, FaCertificate, FaCheck } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { summary, strengths } = portfolioData;

  const highlights = [
    {
      icon: <FaServer className="text-cyan-400 text-xl" />,
      title: "Full Stack Architecture",
      desc: "Microservices & REST APIs with React.js, FastAPI, Node.js & MongoDB/MySQL.",
      glow: "hover:border-cyan-500/40",
    },
    {
      icon: <FaCloud className="text-orange-400 text-xl" />,
      title: "DevOps & Cloud Engineering",
      desc: "Automated CI/CD pipelines via GitHub Actions, Docker, and AWS EC2 hosting.",
      glow: "hover:border-orange-500/40",
    },
    {
      icon: <FaGraduationCap className="text-purple-400 text-xl" />,
      title: "MCA Graduate",
      desc: "Completed advanced computing and software systems degree at Galgotias University.",
      glow: "hover:border-purple-500/40",
    },
    {
      icon: <FaCertificate className="text-emerald-400 text-xl" />,
      title: "Certified MERN Developer",
      desc: "Hands-on engineering certification from A1TI, Greater Noida.",
      glow: "hover:border-emerald-500/40",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
          Background & Engineering
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold mt-3 text-white">
          About Me
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Main Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-7 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-xl"
      >
        {/* Subtle top sheen */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-5 leading-snug">
          {summary.headline}
        </h3>

        <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          {summary.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Strengths Badges */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3.5">
            Core Competencies & Strengths
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {strengths.map((str) => (
              <span
                key={str}
                className="flex items-center gap-2 text-xs px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-200 hover:text-white hover:border-blue-500/40 hover:bg-white/[0.08] transition"
              >
                <FaCheck className="text-blue-400 text-[10px]" />
                <span className="font-medium">{str}</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 4 Feature Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 ${item.glow} transition duration-300 hover:-translate-y-1 hover:shadow-xl group`}
          >
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-2xl w-fit mb-4 group-hover:scale-110 transition duration-300">
              {item.icon}
            </div>
            <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;