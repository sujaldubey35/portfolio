import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
          Featured Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-1 text-white">
          Key Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
          Production applications, microservices, and AI-driven platforms engineered with modern full-stack technologies and automated CI/CD pipelines.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;