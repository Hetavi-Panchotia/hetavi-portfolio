import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, TrendingUp, Cpu, Award } from 'lucide-react';
import SectionHeading from './SectionHeading';

const achievements = [
  {
    id: 1,
    title: "MOSIP Decode",
    org: "IIT Madras",
    description: "Certificate of Participation",
    icon: <Award className="text-green-400" />,
    gradient: "from-earth-accent/20 to-transparent",
    size: "col-span-1 md:col-span-2"
  },
  {
    id: 2,
    title: "Singularity - AI Hackathon",
    org: "IIT Dharwad",
    description: "Certificate of Participation",
    icon: <Award className="text-green-400" />,
    gradient: "from-earth-secondary/20 to-transparent",
    size: "col-span-1"
  },
  {
    id: 3,
    title: "Frontend Odyssey",
    org: "IIT Patna",
    description: "Certificate of Participation",
    icon: <Award className="text-green-400" />,
    gradient: "from-green-400/20 to-transparent",
    size: "col-span-1 md:col-span-3 lg:col-span-1"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden bg-earth-bg min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['100% 100%', '0% 0%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(106, 123, 78,0.05) 0%, transparent 70%)',
            backgroundSize: '120% 120%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        <SectionHeading 
          icon={Star} 
          subtitle="Milestones" 
          title1="Key" 
          title2="Achievements" 
        />

        {/* Harmonized Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 rounded-[2rem] border border-white/5 bg-white/60 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-earth-border hover:bg-white/70 flex flex-col h-full"
            >
              {/* Corner Glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/60 border border-earth-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-earth-text mb-2 group-hover:text-earth-accent transition-colors">{item.title}</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-earth-text/40 mb-4">{item.org}</p>
                <p className="text-earth-text/60 text-sm leading-relaxed flex-1">{item.description}</p>
                
                {/* Visual Accent */}
                <div className="mt-8 flex items-center gap-2 text-[10px] font-mono text-earth-text/20 uppercase tracking-widest">
                   <div className="w-2 h-2 rounded-full bg-white/70" />
                   Verified Milestone
                </div>
              </div>

              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
            </motion.div>
          ))}
        </div>

      </div>



    </section>
  );
};

export default Achievements;
