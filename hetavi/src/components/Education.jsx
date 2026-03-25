import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Swaminarayan University",
    location: "Ahmedabad, Gujarat",
    date: "2025 - 2029",
    description: "Focusing on Software Engineering, Data Structures, and Artificial Intelligence."
  },
  {
    degree: "Higher Secondary Certification",
    institution: "K.D.A.R.F.S",
    location: "Jamnagar, Gujarat",
    date: "2025",
    description: "Completed with distinction in science and mathematics."
  }
];

const Education = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient">
            Education <span className="text-neon-blue">&</span> Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
          
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2" />

          {education.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative flex flex-col md:flex-row items-center mb-16 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-16px] md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-dark-bg border-2 border-neon-blue flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-neon-purple" />
                </div>

                {/* Content Card */}
                <div className={`pl-8 md:pl-0 w-full md:w-1/2 ${
                  isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'
                }`}>
                  <div className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
                    <h3 className="text-2xl font-bold mb-2 text-white">{item.degree}</h3>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-neon-blue mb-4 font-medium ${
                      isEven ? 'md:justify-end' : 'justify-start'
                    }`}>
                      <span className="flex items-center gap-1">
                        <GraduationCap size={16} /> {item.institution}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={16} /> {item.date}
                      </span>
                    </div>
                    
                    <p className="text-white/80 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className={`flex items-center gap-1 text-xs text-white/70 ${isEven ? 'md:justify-end' : ''}`}>
                      <MapPin size={12} /> {item.location}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
