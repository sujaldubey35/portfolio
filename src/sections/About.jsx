import { motion } from "framer-motion";
import { FaGraduationCap, FaServer, FaCloud, FaCertificate } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { summary, strengths } = portfolioData;

  const highlights = [
    {
      icon: <FaServer className="text-blue-400 text-xl" />,
      title: "Full Stack Architecture",
      desc: "Microservices & REST APIs with React.js, FastAPI, Node.js & MongoDB/MySQL.",
    },
    {
      icon: <FaCloud className="text-indigo-400 text-xl" />,
      title: "DevOps & Cloud",
      desc: "Automated CI/CD pipelines via GitHub Actions, Docker, and AWS EC2 hosting.",
    },
    {
      icon: <FaGraduationCap className="text-purple-400 text-xl" />,
      title: "MCA at Galgotias",
      desc: "Completed advanced computing and software systems degree at Galgotias University.",
    },
    {
      icon: <FaCertificate className="text-emerald-400 text-xl" />,
      title: "Certified MERN Developer",
      desc: "Hands-on engineering certification from A1TI, Greater Noida.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Get To Know Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">About Me</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
      </motion.div>

      {/* Main Narrative Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-12 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-xl"
      >
        <h3 className="text-xl font-semibold text-blue-300 mb-4 leading-relaxed">
          {summary.headline}
        </h3>

        <div className="space-y-4 text-gray-300 text-base leading-relaxed">
          {summary.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Strengths Badges */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
            Core Competencies & Strengths
          </h4>
          <div className="flex flex-wrap gap-2">
            {strengths.map((str) => (
              <span
                key={str}
                className="text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium"
              >
                ✓ {str}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Highlight Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition hover:-translate-y-1"
          >
            <div className="p-3 bg-white/5 rounded-lg w-fit mb-3">{item.icon}</div>
            <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;