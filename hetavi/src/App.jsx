import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import SEO from './components/SEO';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import FigmaDesigns from './components/FigmaDesigns';
import Certificates from './components/Certificates';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to section based on path
    const sectionId = pathname === '/' ? 'hero' : pathname.substring(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div className="relative min-h-screen selection:bg-earth-secondary/30 selection:text-earth-text">
      <CustomCursor />
      <SEO />
      <Background />
      
      <div className="relative z-10 font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <FigmaDesigns />
          <Certificates />
          <Hackathons />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
