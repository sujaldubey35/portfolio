import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import CommandPalette from "./components/CommandPalette";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
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
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Hardware-accelerated scroll progress via Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Global Ctrl+K / Cmd+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className={
        dark
          ? "bg-[#030712] text-white min-h-screen selection:bg-cyan-500 selection:text-black"
          : "bg-slate-50 text-slate-900 min-h-screen selection:bg-cyan-600 selection:text-white"
      }
    >
      {/* Scroll Progress Bar with Neon Cyan Gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Floating Island Navbar */}
      <Navbar
        dark={dark}
        setDark={setDark}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Interactive Command Palette Drawer (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Main Content Sections */}
      <motion.main
        className="pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Home onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <About />
        <ArchitectureDiagram />
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