import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(true);
  const [scroll, setScroll] = useState(0);

  // 🔥 Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        dark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      {/* 🔥 Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-[100]"
        style={{ width: `${scroll}%` }}
      />

      {/* Navbar */}
      <Navbar dark={dark} setDark={setDark} />

      {/* Main Content */}
      <motion.main
        className="pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </motion.main>

      {/* ✅ Footer (FINAL TOUCH) */}
      <Footer />
    </div>
  );
}

export default App;