import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Zap, Target, Award, ChevronRight, Activity } from 'lucide-react';

const hackathonData = [
  {
    id: 1,
    name: "MOSIP Decode",
    organizer: "IIT Madras",
    year: "2026",
    role: "Full Stack Developer",
    challenge: "Developing secure, privacy-preserving digital identity solutions using the MOSIP framework to enhance national ID systems.",
    strategy: "Implemented a zero-knowledge proof layer for attribute verification, ensuring user data privacy while maintaining high authentication speed.",
    outcome: "Successfully built a functional MVP for secure attribute sharing, recognized for architectural clarity and privacy compliance.",
    tech: ["MOSIP", "React", "Node.js", "Cryptography"],
    color: "#00F0FF"
  },
  {
    id: 2,
    name: "Singularity AI",
    organizer: "IIT Dharwad",
    year: "2026",
    role: "AI Developer / Lead",
    challenge: "Leveraging generative models to solve real-world industrial optimization problems within a tight 36-hour window.",
    strategy: "Built a customized LLM-agent workflow using LangChain to automate complex data analysis tasks and generate predictive maintenance logs.",
    outcome: "Awarded for the most innovative use of autonomous agents; demonstrated a 40% reduction in manual data processing time.",
    tech: ["OpenAI", "LangChain", "Python", "React"],
    color: "#8A2BE2"
  },
  {
    id: 3,
    name: "Elite Hack 1.0",
    organizer: "Elite Coders",
    year: "2026",
    role: "Frontend Architect",
    challenge: "Creating a high-performance, real-time collaboration tool for remote development teams with low latency requirements.",
    strategy: "Utilized WebSockets and Operational Transformation logic to ensure conflict-free state synchronization across multiple clients.",
    outcome: "Top 10 Finalist; praised for the fluid UI transitions and the robust handling of multi-user race conditions.",
    tech: ["Socket.io", "React", "Redux", "Framer Motion"],
    color: "#00F0FF"
  },
  {
    id: 4,
    name: "Secure Her Future",
    organizer: "Fin5ive",
    year: "2026",
    role: "Full Stack Developer",
    challenge: "Designing fintech solutions focused on financial literacy and security for underserved female student populations.",
    strategy: "Developed a gamified micro-savings platform with secure biometric authentication and an AI-driven budget advisor.",
    outcome: "Won Special Mention for User-Centric Design; built a complete end-to-end prototype with functional payment gateway simulations.",
    tech: ["React Native", "Firebase", "Stripe API", "Node.js"],
    color: "#FF007A"
  }
];

const Hackathons = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="hackathons" className="py-32 relative overflow-hidden bg-dark-bg min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['0% 100%', '100% 0%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at bottom right, rgba(0,240,255,0.15) 0%, transparent 50%)',
            backgroundSize: '150% 150%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-neon-blue" />
              <span className="text-sm uppercase tracking-[0.3em] text-neon-blue font-bold">The Archives</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
              Hackathon <span className="text-transparent border-t-text">Journey</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm font-mono text-xs uppercase tracking-widest leading-loose"
          >
            Tactical experience logged across multiple high-stakes development arenas. Problem-solving under pressure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {hackathonData.map((hack, idx) => (
              <motion.button
                key={hack.id}
                onClick={() => setActiveTab(idx)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative group p-6 rounded-2xl border transition-all duration-500 text-left overflow-hidden ${
                  activeTab === idx 
                  ? 'bg-white/10 border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                  : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                {/* Active Indicator Bar */}
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeHackIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ backgroundColor: hack.color }}
                  />
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1 block">
                      {hack.year} / {hack.organizer}
                    </span>
                    <h3 className={`text-xl font-bold transition-colors ${activeTab === idx ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}>
                      {hack.name}
                    </h3>
                  </div>
                  <ChevronRight 
                    size={20} 
                    className={`transition-transform duration-500 ${activeTab === idx ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} 
                    style={{ color: hack.color }}
                  />
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 relative overflow-hidden backdrop-blur-3xl shadow-2xl"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Activity size={120} style={{ color: hackathonData[activeTab].color }} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Title & Metadata */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-2 uppercase tracking-tight">
                        {hackathonData[activeTab].name}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2 text-white/60 text-sm font-semibold">
                           <Terminal size={14} style={{ color: hackathonData[activeTab].color }} /> 
                           {hackathonData[activeTab].role}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/40 text-xs font-mono tracking-widest uppercase">
                          Location: {hackathonData[activeTab].organizer}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Core Logs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 flex-1">
                    
                    {/* Left Col: Problem & Tech */}
                    <div className="space-y-10">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Target size={18} style={{ color: hackathonData[activeTab].color }} />
                          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-white/50">The Challenge</h4>
                        </div>
                        <p className="text-white/80 leading-relaxed font-light text-lg">
                          {hackathonData[activeTab].challenge}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Activity size={18} style={{ color: hackathonData[activeTab].color }} />
                          <h4 className="text-xs uppercase tracking-[0.2em] font-black text-white/50">Tech Deployed</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {hackathonData[activeTab].tech.map(t => (
                            <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/70">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Col: Strategy & Outcome */}
                    <div className="space-y-10">
                      <div className="p-6 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <Shield size={18} style={{ color: hackathonData[activeTab].color }} />
                            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-white/50">The Strategy</h4>
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {hackathonData[activeTab].strategy}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 rounded-3xl bg-neon-blue/5 border border-neon-blue/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20">
                          <Award size={32} style={{ color: hackathonData[activeTab].color }} />
                        </div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <Zap size={18} style={{ color: hackathonData[activeTab].color }} />
                            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-white/50">Mission Result</h4>
                          </div>
                          <p className="text-white font-bold leading-relaxed">
                            {hackathonData[activeTab].outcome}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style jsx>{`
        .border-t-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>

    </section>
  );
};

export default Hackathons;
