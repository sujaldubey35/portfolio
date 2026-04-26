import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 text-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          I build modern web applications that are fast, scalable, and user-focused.

With a strong foundation in React and backend technologies like FastAPI and Node.js, I love creating solutions that solve real problems.

Currently, I’m focused on improving my full stack skills and working on impactful projects.
        </p>
      </motion.div>

    </section>
  );
};

export default About;