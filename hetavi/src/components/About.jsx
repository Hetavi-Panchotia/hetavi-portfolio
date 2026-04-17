import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Rocket, Briefcase, FolderGit2 } from 'lucide-react';
import Lottie from 'lottie-react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';


const About = () => {
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    // Primary premium developer animation
    fetch('https://assets3.lottiefiles.com/packages/lf20_w51pcehl.json')
      .then(res => res.json())
      .then(data => setLottieData(data))
      .catch(() => {
        // Fallback animation
        fetch('https://assets10.lottiefiles.com/packages/lf20_jtbfg2nb.json')
          .then(res => res.json())
          .then(data => setLottieData(data))
          .catch(e => console.error("Could not load Lottie animation", e));
      });
  }, []);

  // Stagger variants for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cards = [
    {
      icon: <FolderGit2 className="text-earth-accent" size={24} />,
      title: "5+",
      desc: "Projects"
    },
    {
      icon: <Trophy className="text-earth-secondary" size={24} />,
      title: "2+",
      desc: "Hackathons"
    },
    {
      icon: <Briefcase className="text-earth-accent" size={24} />,
      title: "6 months",
      desc: "Experience"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-earth-bg">

      {/* Background Parallax / Particles (subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(106, 123, 78, 0.05) 0%, transparent 40%)',
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-10%" }}
           className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1">
            
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-earth-text relative inline-block w-fit">
                About Me
              </h2>
              {/* Animated Divider line */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="h-1.5 bg-gradient-to-r from-earth-accent to-earth-secondary rounded-full"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="glass-warm p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-earth-border transition-all duration-500 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-5">
                
                <h3 className="text-2xl font-semibold text-earth-text">
                  Aspiring <span className="text-gradient-warm font-bold drop-shadow-md">Software Developer</span>
                </h3>
                
                <p className="text-earth-text/80 leading-relaxed text-lg">
                  My journey began with a curiosity for how the digital world works, writing simple scripts that eventually evolved into a deep passion for <span className="text-earth-secondary font-semibold hover:text-earth-accent transition-colors cursor-default">Full-Stack Development</span>. I specialize in building interactive user interfaces and scalable architectures that bridge the gap between complex backend logic and high-end visual design.
                </p>
                
                <p className="text-earth-text/70 leading-relaxed text-base">
                  Currently pursuing my degree, I have dedicated my time to mastering modern frameworks and participating in high-stakes development arenas. I thrive in collaborative, fast-paced environments where I can leverage my problem-solving skills to turn innovative ideas into spectacular real-world applications.
                </p>
                
                <ul className="space-y-4 mt-2 text-earth-text/70">
                  <li className="flex items-start gap-3">
                    <Rocket className="text-earth-accent mt-1 flex-shrink-0" size={18} />
                    <span className="leading-relaxed">Always ready to build something spectacular and turn ideas into reality at <span className="text-earth-text font-semibold">Hackathons</span>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code2 className="text-earth-secondary mt-1 flex-shrink-0" size={18} />
                    <span className="leading-relaxed">Love tackling complex algorithmic problems and delivering highly optimized software solutions.</span>
                  </li>
                </ul>

              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 lg:gap-6">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "tween", ease: "easeInOut" }}
                  className="glass-warm pt-6 pb-5 px-4 rounded-2xl border border-white/5 hover:border-earth-accent/30 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(106, 123, 78,0.15)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="mb-3 p-3 bg-white/60 rounded-full group-hover:bg-earth-accent/10 transition-colors group-hover:scale-110 duration-300 relative z-10">
                    {card.icon}
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-earth-text mb-1 group-hover:text-earth-accent transition-colors relative z-10">{card.title}</h4>
                  <p className="text-[10px] lg:text-xs text-earth-text/60 uppercase tracking-widest font-semibold relative z-10">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Image / Illustration */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 relative"
          >
             {/* Tech Stack Orbiting Icons */}
             {/* Icon 1: React (Orbiting front) */}
             <motion.div 
               className="absolute top-[10%] left-[-5%] lg:left-[-10%] z-30 text-[#61DAFB] bg-earth-bg/60 p-3 rounded-full border border-earth-border backdrop-blur-md shadow-[0_0_15px_rgba(97,218,251,0.2)] hidden sm:flex"
               animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
               whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(97,218,251,0.5)", zIndex: 40 }}
             >
               <FaReact size={28} className="animate-[spin_4s_linear_infinite]" />
             </motion.div>

             {/* Icon 2: NodeJs (Floating behind) */}
             <motion.div 
               className="absolute bottom-[20%] right-[-2%] lg:right-[-5%] z-0 text-[#339933] bg-earth-bg/40 p-3 rounded-full border border-earth-border backdrop-blur-sm shadow-[0_0_15px_rgba(51,153,51,0.2)] hidden sm:flex"
               animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(51,153,51,0.5)", zIndex: 40 }}
             >
               <FaNodeJs size={28} />
             </motion.div>

             {/* Icon 3: MongoDB (Orbiting bottom left) */}
             <motion.div 
               className="absolute top-[75%] left-[5%] lg:left-[0%] z-30 text-[#47A248] bg-earth-bg/60 p-2.5 rounded-full border border-earth-border backdrop-blur-md shadow-[0_0_15px_rgba(71,162,72,0.2)]"
               animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(71,162,72,0.5)", zIndex: 40 }}
             >
               <SiMongodb size={24} />
             </motion.div>

             {/* Icon 4: Tailwind (Floating top right with blur depth) */}
             <motion.div 
               className="absolute top-[5%] right-[10%] lg:right-[15%] z-0 text-[#06B6D4] bg-earth-bg/40 p-2 rounded-full border border-earth-border backdrop-blur-sm shadow-[0_0_10px_rgba(6,182,212,0.2)] blur-[1px]"
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               whileHover={{ scale: 1.2, filter: "blur(0px)", boxShadow: "0 0 15px rgba(6,182,212,0.5)", zIndex: 40 }}
             >
               <SiTailwindcss size={20} />
             </motion.div>

             {/* Icon 5: Git (Floating bottom center) */}
             <motion.div 
               className="absolute bottom-[2%] left-[40%] z-30 text-[#F05032] bg-earth-bg/80 p-2 rounded-full border border-earth-border backdrop-blur-md shadow-[0_0_10px_rgba(240,80,50,0.2)]"
               animate={{ y: [0, -10, 0], x: [0, 15, 0] }}
               transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(240,80,50,0.5)", zIndex: 40 }}
             >
               <FaGitAlt size={22} />
             </motion.div>

            <motion.div 
              className="relative w-full max-w-[280px] h-[340px] md:max-w-[380px] md:h-[460px] lg:max-w-[400px] lg:h-[500px] group cursor-pointer z-10"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
               {/* Behind Image Dropshadow Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-earth-secondary/30 to-earth-accent/30 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-all duration-500 blur-2xl opacity-60 group-hover:opacity-100 scale-95 group-hover:scale-105" />
              
              {/* Floating Decoration Backplate */}
              <div className="absolute inset-x-2 -inset-y-2 border border-earth-border rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 z-0 bg-white/[0.02] backdrop-blur-sm" />

              <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden border border-earth-border transform group-hover:scale-[1.03] transition-all duration-700 shadow-2xl bg-white/60 backdrop-blur-md flex items-center justify-center p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-earth-bg/90 via-earth-bg/20 to-transparent opacity-80 z-10 pointer-events-none" />
                
                {lottieData ? (
                  <Lottie 
                    animationData={lottieData} 
                    loop={true} 
                    className="w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out z-0 relative"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-earth-accent relative z-0 animate-pulse">
                    Loading Animation...
                  </div>
                )}

                {/* Inside Image Hover Overlay */}
                <div className="absolute inset-0 bg-earth-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-20 pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
