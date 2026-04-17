import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  // Handle Navbar Background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'designs', 'certificates', 'hackathons', 'achievements', 'education', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0% -70% 0%', // Trigger when section is in the top/middle area
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

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const navLinks = [
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Designs', to: '/designs' },
    { name: 'Certificates', to: '/certificates' },
    { name: 'Hackathons', to: '/hackathons' },
    { name: 'Achievements', to: '/achievements' },
    { name: 'Education', to: '/education' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4',
        scrolled ? 'glass shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center group relative">
          {/* Glowing Glass Logo Container */}
          <div className="relative w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:border-neon-blue/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Reference-inspired Rounded Interlocking HP Vector */}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px] relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110">
              
              <defs>
                <linearGradient id="neonBlueV" x1="25" y1="20" x2="25" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00F0FF" />
                  <stop offset="1" stopColor="#0A75E5" />
                </linearGradient>
                <linearGradient id="neonPurpleP" x1="55" y1="20" x2="55" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8A2BE2" />
                  <stop offset="1" stopColor="#CD5C5C" />
                </linearGradient>
              </defs>

              {/* Back side of the P loop (creates interlocking depth) */}
              <path d="M55 20 H70 C83.8 20 95 31.2 95 45 C95 58.8 83.8 70 70 70 H55" stroke="url(#neonPurpleP)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(138,43,226,0.5)]" />
              
              {/* The full H shape overlapping the P */}
              <path d="M25 20 V80 M25 50 H55 M55 20 V80" stroke="url(#neonBlueV)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]" />
              
              {/* Overlapping top chunk of the P loop to complete the 3D twist illusion */}
              <path d="M55 20 H70 C83.8 20 95 31.2 95 45 C95 45 83.8 45 70 45 H55" stroke="url(#neonPurpleP)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />

            </svg>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.to.substring(1);
            return (
              <Link
                key={link.name}
                to={link.to}
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
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://drive.google.com/uc?export=download&id=1k7x4ptqYJBbyH-kzHOR9ROQ1FkrFbY-1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-neon-blue/50 transition-all text-sm font-medium text-white group"
          >
            <Download size={16} className="text-neon-blue group-hover:scale-110 transition-transform" />
            Resume
          </a>
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-neon-blue text-dark-bg hover:bg-white hover:text-dark-bg transition-all text-sm font-black uppercase tracking-wider"
          >
            Let's Talk
          </Link>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-dark-bg/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4"
          >
              {navLinks.map((link) => {
                const isActive = activeSection === link.to.substring(1);
                return (
                  <Link
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors",
                      isActive ? "text-neon-blue" : "text-white/80 hover:text-neon-blue"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <a
                  href="https://drive.google.com/uc?export=download&id=1k7x4ptqYJBbyH-kzHOR9ROQ1FkrFbY-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={18} className="text-neon-blue" />
                  Download the Resume
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-neon-blue text-dark-bg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
