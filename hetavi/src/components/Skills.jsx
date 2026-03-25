import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Server, Database, Smartphone, 
  Globe, Layout, Cpu, Layers, 
  Terminal, Zap, Github, Figma, 
  Wrench, Cloud, Package 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Magic",
      icon: <Globe className="text-neon-blue" size={24} />,
      skills: [
        { name: "React / Next.js", icon: <Cpu size={14} /> },
        { name: "Tailwind CSS", icon: <Layout size={14} /> },
        { name: "JavaScript", icon: <Zap size={14} /> },
        { name: "Framer Motion", icon: <Layers size={14} /> },
        { name: "CSS", icon: <Code size={14} /> },
        { name: "HTML", icon: <Globe size={14} /> },
      ]
    },
    {
      title: "Backend Power",
      icon: <Server className="text-neon-purple" size={24} />,
      skills: [
        { name: "Node.js", icon: <Terminal size={14} /> },
        { name: "Python", icon: <Code size={14} /> },
        { name: "MongoDB", icon: <Database size={14} /> },
        { name: "MySQL", icon: <Database size={14} /> },
        { name: "Express.js", icon: <Zap size={14} /> },
      ]
    },
    {
      title: "Tools & Ecosystem",
      icon: <Wrench className="text-neon-blue" size={24} />,
      skills: [
        { name: "Git / GitHub", icon: <Github size={14} /> },
        { name: "Vercel", icon: <Cloud size={14} /> },
        { name: "Figma", icon: <Figma size={14} /> },
        { name: "Postman", icon: <Terminal size={14} /> },
        { name: "Vite", icon: <Zap size={14} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient"> My Arsenal
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-white/20 transition-all"
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-neon-blue/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (sIdx * 0.05) }}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all text-white/70 hover:text-white group/tile cursor-default aspect-square"
                  >
                    <div className="text-neon-blue group-hover/tile:text-white group-hover/tile:scale-110 transition-all duration-300">
                      {React.cloneElement(skill.icon, { size: 32 })}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-center uppercase tracking-wider opacity-80 group-hover/tile:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Corner element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-3xl group-hover:bg-neon-blue/10 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
