import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { SiX, SiYoutube, SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// --- Magnetic Button Component ---
const MagneticButton = ({ children, className, href, onClick, primary }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-10"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={`relative overflow-hidden group flex items-center gap-2 ${className}`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex w-full h-full items-center justify-center relative flex-1"
        >
            {/* Glow/Pulse effect background for primary button */}
            {primary && (
            <span className="absolute -inset-2 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md rounded-full pointer-events-none" />
            )}
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.div>
      </Tag>
    </motion.div>
  );
};

// --- Particles Background Component ---
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Waves / Mesh Background */}
      <motion.div 
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,240,255,0.1) 0%, rgba(138,43,226,0.15) 50%, transparent 100%)',
          backgroundSize: '200% 200%'
        }}
      />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{
            x: [`${p.x}vw`, `${p.x + (Math.random() * 10 - 5)}vw`],
            y: [`${p.y}vh`, `${p.y - 15}vh`],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-white blur-[1px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  // 3D Tilt for Profile Image
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Text Stagger config
  const nameText = "Hetavi Panchotia";
  const nameLetters = Array.from(nameText);

  const containerVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-dark-bg">
      <Particles />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Content */}
        <div className="flex flex-col gap-6 z-10 relative">
          <motion.div
            variants={letterVariants}
            className="flex items-center gap-3"
          >
            <motion.span 
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 240, 255, 0.5)" }}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20 cursor-default transition-all"
            >
              Welcome to my universe
            </motion.span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            <motion.div variants={letterVariants} className="text-white">Hi, I'm</motion.div>
            <div className="flex flex-wrap text-gradient relative group cursor-default">
              {nameLetters.map((letter, i) => (
                <motion.span 
                  key={i} 
                  variants={letterVariants}
                  className={letter === " " ? "w-4" : ""}
                >
                  {letter}
                </motion.span>
              ))}
              {/* Subtle hover glitch overlay */}
              <motion.span 
                className="absolute inset-0 text-gradient opacity-0 group-hover:opacity-100 mix-blend-screen pointer-events-none transition-opacity duration-300 pointer-events-none select-none"
                animate={{ x: [-2, 2, -2], y: [1, -1, 1] }}
                transition={{ repeat: Infinity, duration: 0.2, ease: "linear" }}
              >
                {nameText}
              </motion.span>
            </div>
          </h1>

          <motion.div variants={letterVariants} className="relative inline-block w-fit group cursor-default">
            <h2 className="text-xl md:text-2xl text-white font-medium max-w-lg relative z-10 pb-1">
              Software Developer | Building Cool & Impactful Projects
            </h2>
            {/* Sliding highlight underline */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple opacity-50 origin-left -z-0 group-hover:h-full group-hover:opacity-10 transition-all duration-300"
            />
          </motion.div>

          <motion.p
            variants={letterVariants}
            className="text-base text-white/90 max-w-md leading-relaxed"
          >
            Crafting beautiful, interactive, and high-performance applications with modern technologies. Let's build something amazing together.
          </motion.p>

          <motion.div
            variants={letterVariants}
            className="flex flex-wrap items-center gap-4 mt-6 z-20"
          >
            <MagneticButton 
              href="#projects"
              primary={true}
              className="px-8 py-4 rounded-full bg-white text-dark-bg font-semibold transition-colors hover:bg-neon-blue hover:text-white"
            >
              View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton 
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-neon-purple/50 transition-colors"
            >
              Get in Touch
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={letterVariants}
            className="flex items-center gap-6 mt-6 ml-2"
          >
            {[
              { icon: FaGithub, href: "https://github.com/Hetavi-Panchotia", color: "hover:text-white" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/hetavi-panchotia-7a8648395/", color: "hover:text-[#0A66C2]" },
              { icon: SiX, href: "https://x.com/HPanchotia21633", color: "hover:text-white" },
              { icon: SiYoutube, href: "https://www.youtube.com/@HetaviPanchotia-2007", color: "hover:text-[#FF0000]" },
              { icon: SiLeetcode, href: "https://leetcode.com/u/in_the_bluess/", color: "hover:text-[#FFA116]" }
            ].map((social, idx) => (
              <motion.a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-white/60 ${social.color} transition-all duration-300 relative group`}
                whileHover={{ y: -6, filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))" }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={26} />
                <span className="absolute -inset-2 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', bounce: 0.4 }}
          className="relative z-10 flex justify-center lg:justify-end mt-12 lg:mt-0"
          style={{ perspective: 1000 }} // For 3D Tilt
        >
          <motion.div 
            className="relative w-72 h-72 md:w-[420px] md:h-[420px] group cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -20, 0] }} // Anti-gravity floating
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            {/* Glowing Neon Aura */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-neon-blue via-neon-purple to-neon-blue rounded-full blur-[70px] opacity-40 group-hover:opacity-75 transition-opacity duration-700"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ rotate: { repeat: Infinity, duration: 15, ease: "linear" }, scale: { repeat: Infinity, duration: 5, ease: "easeInOut" } }}
            />
            
            {/* Rotating Gradient Ring 1 */}
            <motion.div 
              className="absolute -inset-4 rounded-full border border-dashed border-white/20 group-hover:border-neon-blue/60 transition-colors duration-500 z-0"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            {/* Rotating Gradient Ring 2 */}
            <motion.div 
              className="absolute -inset-8 rounded-full border border-white/10 group-hover:border-neon-purple/50 transition-colors duration-500 z-0"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            />

            {/* Image Container */}
            <div 
              className="absolute inset-2 rounded-full border-2 border-white/20 mix-blend-overlay p-2 transform-gpu transition-all duration-500 group-hover:scale-[1.05] group-hover:border-white/40"
              style={{ transform: "translateZ(40px)" }} // Popping out effect
            >
              <div className="w-full h-full rounded-full bg-dark-bg/50 backdrop-blur-sm overflow-hidden flex items-center justify-center border border-white/10 relative shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
                <img 
                  src="https://res.cloudinary.com/dob3ay5xe/image/upload/v1770363238/Screenshot_2026-02-06_130334_sxhzkg.png" 
                  alt="Hetavi Panchotia" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Ripple/Particle Burst on Hover (Simulated with scaling border) */}
            <div className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none z-[-1]">
              <motion.div 
                className="w-full h-full border-2 border-neon-blue rounded-full opacity-0"
                whileHover={{ scale: 1.6, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bouncing Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-white/60 hover:text-neon-blue transition-colors cursor-pointer"
        >
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>

    </section>
  );
};

export default Hero;