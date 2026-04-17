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
        scrolled ? 'glass-warm shadow-lg py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link to="/" className="flex items-center group relative">
          {/* Glowing Glass Logo Container */}
          <div className="relative w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden border border-earth-border bg-white/60 backdrop-blur-md transition-all duration-500 group-hover:border-earth-accent/50 group-hover:shadow-[0_0_20px_rgba(106, 123, 78,0.4)]">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-earth-accent/20 to-earth-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Reference-inspired Rounded Interlocking HP Vector */}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[26px] h-[26px] relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110">

              <defs>
                <linearGradient id="accentColorA" x1="25" y1="20" x2="25" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7A8386" />
                  <stop offset="1" stopColor="#3C4042" />
                </linearGradient>
                <linearGradient id="accentColorB" x1="55" y1="20" x2="55" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#B29B7F" />
                  <stop offset="1" stopColor="#7A8165" />
                </linearGradient>
              </defs>

              {/* Back side of the P loop (creates interlocking depth) */}
              <path d="M55 20 H70 C83.8 20 95 31.2 95 45 C95 58.8 83.8 70 70 70 H55" stroke="url(#accentColorB)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(163, 142, 117,0.5)]" />

              {/* The full H shape overlapping the P */}
              <path d="M25 20 V80 M25 50 H55 M55 20 V80" stroke="url(#accentColorA)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 drop-shadow-[0_0_8px_rgba(106, 123, 78,0.5)]" />

              {/* Overlapping top chunk of the P loop to complete the 3D twist illusion */}
              <path d="M55 20 H70 C83.8 20 95 31.2 95 45 C95 45 83.8 45 70 45 H55" stroke="url(#accentColorB)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />

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
                  isActive ? "text-earth-accent" : "text-earth-text/70 hover:text-earth-text"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-earth-accent to-earth-secondary transition-all",
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1qkciUBzq_B77P-yAvDAv7WBXh6U_zySn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 border border-earth-border hover:bg-white/20 hover:border-earth-accent/50 transition-all text-sm font-medium text-earth-text group"
          >
            <Download size={16} className="text-earth-accent group-hover:scale-110 transition-transform" />
            Resume
          </a>

        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-earth-text"
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
            className="absolute top-full left-0 right-0 bg-earth-bg/95 backdrop-blur-xl border-b border-earth-border p-6 md:hidden flex flex-col gap-4"
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
                    isActive ? "text-earth-accent" : "text-earth-text/80 hover:text-earth-accent"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 pt-4 border-t border-earth-border">
              <a
                href="https://drive.google.com/file/d/1qkciUBzq_B77P-yAvDAv7WBXh6U_zySn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/70 border border-earth-border text-earth-text font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Download size={18} className="text-earth-accent" />
                Download the Resume
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
