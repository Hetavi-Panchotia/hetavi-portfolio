import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjusted to trigger when section is in a central-ish area
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // IDs to observe - make sure these match the IDs in your section components
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'certificates', 'experience', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#hero" className="text-2xl font-heading font-bold text-white tracking-tighter">
          H<span className="text-neon-blue">P</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  isActive ? "text-neon-blue" : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple transition-all",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/Hetavi-Panchotia" target="_blank" rel="noreferrer" className="text-white/70 hover:text-neon-blue transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/hetavi-panchotia-7a8648395/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-neon-purple transition-colors">
            <Linkedin size={20} />
          </a>
          <a 
            href="#contact"
            className="px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-neon-blue/50 transition-all text-sm font-medium text-white"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium transition-colors",
                  isActive ? "text-neon-blue" : "text-white/80 hover:text-neon-blue"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
