import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import ChapterRail from "./components/ChapterRail";
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Phosphor progress hairline via Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-ink text-paper min-h-screen relative selection:bg-teal/25 selection:text-teal font-sans">
      {/* Top Phosphor Hairline Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-teal origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Left Chapter Rail (visible on wide screens) */}
      <ChapterRail />

      {/* Main Editorial Content */}
      <main id="main">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Minimal Monograph Footer */}
      <Footer />
    </div>
  );
}