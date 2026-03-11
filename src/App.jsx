
import { useEffect, useState } from "react";
import { navLinks } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";


function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = navLinks[0].id;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollY) current = link.id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
