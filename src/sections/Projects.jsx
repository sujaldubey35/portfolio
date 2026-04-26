import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >

          {/* Project 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="h-full"
          >
            <ProjectCard 
              title="AI SaaS Job Portal"
              desc="Job platform with AI recommendations"
              tech="React, FastAPI, MongoDB"
              github="https://github.com/eurekageeks/First_Job_Job_Potal_Project.git"
              live="#"
            />
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="h-full"
          >
            <ProjectCard 
              title="Sentiment Analysis App"
              desc="Analyze product reviews"
              tech="React, Node.js, FastAPI, MySQL, ML (TF-IDF + LinearSVC)"
              github="https://github.com/sujaldubey35/Sentiment_Analysis.git"
              live="#"
            />
          </motion.div>

          {/* Project 3 (Centered) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="w-full md:w-1/2">
              <ProjectCard 
                title="Full Stack Authentication System"
                desc="Login, Signup & Dashboard with secure authentication"
                tech="React, FastAPI, MongoDB"
                github="https://github.com/sujaldubey35/Full-Stack-Authentication-System.git"
                live="#"
              />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;