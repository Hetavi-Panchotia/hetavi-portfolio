import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, School } from 'lucide-react';
import SectionHeading from './SectionHeading';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Swaminarayan University",
    location: "Ahmedabad, Gujarat",
    date: "2025 - 2029",
    description: "Focusing on Software Engineering, Data Structures, and Artificial Intelligence. Actively participating in technical workshops and hackathons."
  },
  {
    degree: "Higher Secondary Certification",
    institution: "K.D.A.R.F.S",
    location: "Jamnagar, Gujarat",
    date: "2025",
    description: "Completed with distinction in science and mathematics. Developed a strong foundation in analytical thinking and problem-solving."
  }
];

const EducationCard = ({ item, index, isEven }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center mb-20 last:mb-0 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Dot with Pulse Effect */}
      <div className="absolute left-[-16px] md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-earth-bg border-2 border-earth-secondary flex items-center justify-center z-20 shadow-[0_0_15px_rgba(163, 142, 117,0.5)]">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2.5 h-2.5 rounded-full bg-earth-accent" 
        />
      </div>

      {/* Content Card */}
      <div className={`pl-10 md:pl-0 w-full md:w-1/2 ${
        isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'
      }`}>
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass-warm p-8 rounded-[2rem] border border-white/5 hover:border-earth-secondary/30 transition-all duration-500 overflow-hidden relative group"
          style={{
            boxShadow: "0 20px 40px rgba(45, 45, 45,0.4)"
          }}
        >
          {/* Subtle inner glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-earth-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
            <div className="p-2.5 rounded-xl bg-white/60 border border-earth-border text-earth-secondary">
              <School size={20} />
            </div>
            <span className="text-earth-accent font-mono tracking-wider text-sm">{item.date}</span>
          </div>

          <h3 className="text-2xl font-bold mb-3 text-earth-text group-hover:text-earth-secondary transition-colors duration-300">
            {item.degree}
          </h3>
          
          <div className={`flex flex-wrap gap-4 text-sm text-earth-text/60 mb-6 font-medium ${
            isEven ? 'md:justify-end' : 'justify-start'
          }`}>
            <span className="flex items-center gap-1.5">
              <GraduationCap size={16} className="text-earth-secondary" /> {item.institution}
            </span>
          </div>
          
          <p className="text-earth-text/70 leading-relaxed mb-6 text-sm md:text-base">
            {item.description}
          </p>
          
          <div className={`flex items-center gap-1.5 text-xs font-medium tracking-wide text-earth-text/40 uppercase ${isEven ? 'md:justify-end' : ''}`}>
            <MapPin size={14} className="text-earth-accent" /> {item.location}
          </div>
        </motion.div>
      </div>

      {/* Spacing for opposite side on desktop */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    restDelta: 0.001
  });

  return (
    <section id="education" ref={containerRef} className="py-32 relative overflow-hidden bg-earth-bg">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['0% 100%', '100% 0%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(ellipse at bottom left, rgba(163, 142, 117,0.3) 0%, transparent 60%)',
            backgroundSize: '150% 150%'
          }}
        />
      </div>

      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <SectionHeading 
          icon={GraduationCap} 
          subtitle="Academic" 
          title1="Education &" 
          title2="Background" 
        />

        <div className="relative max-w-5xl mx-auto">
          
          {/* Animated Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/60 transform md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-earth-accent via-earth-secondary to-earth-accent" 
            />
          </div>

          <div className="relative">
            {education.map((item, idx) => (
              <EducationCard key={idx} item={item} index={idx} isEven={idx % 2 === 0} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Light Divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
};

export default Education;
