import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { SiX, SiYoutube, SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
              Welcome to my universe
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl font-heading font-bold leading-tight text-gradient"
          >
            Hi, I'm <br />
            <span className="text-gradient">Hetavi Panchotia</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-white font-medium max-w-lg"
          >
            Software Developer | Building Cool & Impactful Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base text-white/90 max-w-md leading-relaxed"
          >
            Crafting beautiful, interactive, and high-performance applications with modern technologies. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-dark-bg font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-6 mt-4"
          >
            <a href="https://github.com/Hetavi-Panchotia" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/hetavi-panchotia-7a8648395/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://x.com/HPanchotia21633" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
              <SiX size={24} />
            </a>
            <a href="https://www.youtube.com/@HetaviPanchotia-2007" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
              <SiYoutube size={26} />
            </a>
            <a href="https://leetcode.com/u/in_the_bluess/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-blue hover:-translate-y-1 transition-all duration-300">
              <SiLeetcode size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue to-neon-purple rounded-full blur-[60px] opacity-40 animate-pulse" />
            <div className="absolute inset-2 rounded-full border-2 border-white/20 mix-blend-overlay p-2">
              <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-sm overflow-hidden flex items-center justify-center border border-white/10 relative">
                {/* Fallback image if user doesn't have a picture yet */}
                {/* <div className="text-8xl">👩‍💻</div> */}
                <img src="https://res.cloudinary.com/dob3ay5xe/image/upload/v1770363238/Screenshot_2026-02-06_130334_sxhzkg.png" alt="Hetavi Panchotia" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;