import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(true);

  // Hardware-accelerated scroll progress via Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className={
        dark
          ? "bg-[#030712] text-white min-h-screen selection:bg-blue-500 selection:text-white"
          : "bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white"
      }
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <Navbar dark={dark} setDark={setDark} />

      {/* Main Content Sections */}
      <motion.main
        className="pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </motion.main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;