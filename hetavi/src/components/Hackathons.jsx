import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Target, Award, Cpu, Terminal, Trophy } from 'lucide-react';
import SectionHeading from './SectionHeading';

const hackathonData = [
  {
    id: 1,
    name: "OceanLabs X Charusat",
    organizer: "Charusat",
    year: "2026",
    role: "Full Stack Developer",
    challenge: "Developers often struggle to understand unfamiliar codebases due to lack of clear documentation and architecture visibility. This slows onboarding, collaboration, and productivity, especially in large or open-source projects.",
    strategy: "Analyze GitHub repositories to extract structure, key files, and metadata for automated insights. Present this data through a clean UI with visualizations, documentation, and an interactive AI-powered chat interface.",
    outcome: "RepoLens is an AI-powered tool that helps developers quickly understand any GitHub repository by automatically generating summaries, documentation, folder explanations, and architecture insights.",
    tech: ["Express", "React", "Node.js", "Tailwind", "Supabase", "Gemini API" , "Github API"],
    color: "#00F0FF"
  }
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-32 relative overflow-hidden bg-earth-bg min-h-screen">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['100% 0%', '0% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(106, 123, 78,0.15) 0%, transparent 60%)',
            backgroundSize: '150% 150%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Harmonized Centered Header */}
        <SectionHeading 
          icon={Rocket} 
          subtitle="The Archives" 
          title1="Hackathon" 
          title2="Journey" 
        />

        {/* Vertical Stack of Mission Cards */}
        <div className="space-y-12 md:space-y-20 max-w-5xl mx-auto">
          {hackathonData.map((hack, idx) => (
            <motion.div
              key={hack.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="glass-warm p-8 md:p-12 rounded-[2.5rem] border border-white/5 bg-white/60 backdrop-blur-3xl overflow-hidden transition-all duration-500 hover:border-earth-border hover:bg-white/70 group-hover:shadow-[0_0_50px_rgba(45, 45, 45,0.5)]">
                
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${hack.color} opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-3xl`} />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-earth-border pb-8 lg:pb-0">
                     <span className="text-xs font-mono uppercase tracking-[0.3em] text-earth-text/40 mb-2 block">{hack.year} • {hack.organizer}</span>
                     <h3 className="text-3xl md:text-4xl font-black text-earth-text uppercase tracking-tight mb-6 group-hover:text-earth-accent transition-colors leading-tight">{hack.name}</h3>
                     
                     <div className="flex flex-wrap gap-2 mt-4">
                        {hack.tech.map(t => (
                          <span key={t} className="px-3 py-1 rounded-full bg-white/60 border border-earth-border text-[10px] font-mono uppercase text-earth-text/60">
                             {t}
                          </span>
                        ))}
                     </div>
                  </div>

                  <div className="lg:col-span-8 flex flex-col gap-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                           <div className="flex items-center gap-2 mb-3 text-earth-secondary">
                              <Target size={16} />
                              <span className="text-[10px] font-mono uppercase tracking-widest font-black">The Challenge</span>
                           </div>
                           <p className="text-earth-text/70 text-sm leading-relaxed">{hack.challenge}</p>
                        </div>
                        <div>
                           <div className="flex items-center gap-2 mb-3 text-earth-accent">
                              <Terminal size={16} />
                              <span className="text-[10px] font-mono uppercase tracking-widest font-black">The Strategy</span>
                           </div>
                           <p className="text-earth-text/70 text-sm leading-relaxed">{hack.strategy}</p>
                        </div>
                     </div>

                     <div className="mt-4 p-6 rounded-2xl bg-white/60 border border-earth-border relative group-hover:bg-white/70 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-green-400">
                           <Award size={16} />
                           <span className="text-[10px] font-mono uppercase tracking-widest font-black">Mission Result</span>
                        </div>
                        <p className="text-earth-text font-bold text-lg md:text-xl">{hack.outcome}</p>
                     </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hackathons;
