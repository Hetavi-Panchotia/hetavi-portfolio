import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiC, SiCplusplus } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { X, Layers, Code2, Box } from 'lucide-react';

const skillsData = [
  { id: 'react', name: 'React', category: 'Frontend', level: 'Advanced', desc: 'Component-based UI architecture, state management & hooks.', projects: ['Interactive Portfolios', 'E-Commerce Platforms'], icon: FaReact, color: '#61DAFB' },
  { id: 'js', name: 'JavaScript', category: 'Frontend', level: 'Advanced', desc: 'Core logic, async handling, DOM manipulation and animations.', projects: ['All Web Applications'], icon: SiJavascript, color: '#F7DF1E' },
  { id: 'node', name: 'Node.js', category: 'Backend', level: 'Intermediate', desc: 'Scalable server-side event-driven execution and APIs.', projects: ['RESTful APIs', 'Authentication Services'], icon: FaNodeJs, color: '#339933' },
  { id: 'html', name: 'HTML5', category: 'Frontend', level: 'Expert', desc: 'Semantic markup, SEO optimization and web accessibility.', projects: ['All Web Interfaces'], icon: FaHtml5, color: '#E34F26' },
  { id: 'css', name: 'CSS3', category: 'Frontend', level: 'Expert', desc: 'Responsive layouts, keyframe animations and media queries.', projects: ['All Web Interfaces'], icon: FaCss3Alt, color: '#1572B6' },
  { id: 'tw', name: 'Tailwind', category: 'Frontend', level: 'Advanced', desc: 'Utility-first rapid styling and responsive design systems.', projects: ['Dashboards', 'Portfolios'], icon: SiTailwindcss, color: '#06B6D4' },
  
  { id: 'express', name: 'Express', category: 'Backend', level: 'Intermediate', desc: 'Minimalist web framework for fast Node.js routing and middleware.', projects: ['Secure API Endpoints'], icon: SiExpress, color: '#FFFFFF' },
  { id: 'py', name: 'Python', category: 'Backend', level: 'Intermediate', desc: 'Data analysis, scripting, and backend processing algorithms.', projects: ['Data Analysis Tools'], icon: FaPython, color: '#3776AB' },
  { id: 'c', name: 'C', category: 'Backend', level: 'Basic', desc: 'Low-level systems programming and memory management.', projects: ['Core Algorithms'], icon: SiC, color: '#A8B9CC' },
  { id: 'cpp', name: 'C++', category: 'Backend', level: 'Intermediate', desc: 'Object-oriented systems programming and complex logic.', projects: ['Game Engine Basics'], icon: SiCplusplus, color: '#00599C' },
  
  { id: 'mongo', name: 'MongoDB', category: 'Database', level: 'Intermediate', desc: 'NoSQL document database design and aggregation pipelines.', projects: ['E-Commerce Data', 'User Systems'], icon: SiMongodb, color: '#47A248' },
  { id: 'mysql', name: 'MySQL', category: 'Database', level: 'Intermediate', desc: 'Relational database architecture, migrations and complex queries.', projects: ['Inventory Systems'], icon: SiMysql, color: '#4479A1' },
  
  { id: 'vscode', name: 'VS Code', category: 'Tools', level: 'Advanced', desc: 'Primary IDE equipped with advanced debugging and extensions.', projects: ['Development Environment'], icon: VscVscode, color: '#007ACC' },
  { id: 'git', name: 'Git', category: 'Tools', level: 'Advanced', desc: 'Distributed version control, branching strategies & merging.', projects: ['Source Control'], icon: FaGitAlt, color: '#F05032' },
  { id: 'gh', name: 'GitHub', category: 'Tools', level: 'Advanced', desc: 'Collaboration workflows, code review, and CI/CD pipelines.', projects: ['Open Source & Team Projects'], icon: FaGithub, color: '#FFFFFF' },
  { id: 'postman', name: 'Postman', category: 'Tools', level: 'Intermediate', desc: 'API endpoint testing, mocking, and comprehensive documentation.', projects: ['API Workflows'], icon: SiPostman, color: '#FF6C37' }
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

// 3D Tilt Card Component
const SkillCard = ({ skill, index, onClick }) => {
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if(!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  // Uneven staggered margin for masonry feel
  const isOffset = index % 2 !== 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
      className={`w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] ${isOffset ? 'mt-0 md:mt-12' : 'mt-0'}`}
    >
      <motion.div
        ref={cardRef}
        layoutId={`card-${skill.id}`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -10, scale: 1.05, zIndex: 20 }}
        onClick={onClick}
        className="relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl md:rounded-3xl cursor-pointer bg-white/5 border border-white/10 backdrop-blur-md shadow-xl transition-colors duration-300 hover:bg-white/10 group h-full"
      >
        {/* Glowing border effect on hover */}
        <div 
          className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: `inset 0 0 20px ${skill.color}30, 0 10px 30px ${skill.color}20` }}
        />

        <motion.div 
          layoutId={`icon-${skill.id}`}
          className="mb-4 text-white/80 group-hover:text-white transition-colors duration-300 z-10"
          style={{ transform: "translateZ(30px)" }} // 3D pop effect
        >
          <skill.icon size={48} color={skill.color} className="group-hover:drop-shadow-[0_0_15px_currentColor]" />
        </motion.div>
        
        <motion.h3 
          layoutId={`title-${skill.id}`}
          className="font-bold text-sm md:text-base tracking-wide text-white/80 group-hover:text-white transition-colors z-10 text-center"
          style={{ transform: "translateZ(20px)" }}
        >
          {skill.name}
        </motion.h3>

        {/* Magnetic ripple effect container */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkillId, setSelectedSkillId] = useState(null);

  const filteredSkills = skillsData.filter(skill => activeCategory === 'All' || skill.category === activeCategory);
  const selectedSkill = skillsData.find(s => s.id === selectedSkillId);

  return (
    <section id="skills" className="py-24 relative min-h-screen bg-dark-bg flex flex-col items-center overflow-hidden">
      
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(138,43,226,0.2) 0%, transparent 50%)',
            backgroundSize: '150% 150%'
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-50 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Dynamic Header */}
        <div className="flex flex-col items-center justify-center mb-12 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Layers className="text-neon-blue" size={20} />
            <span className="text-sm uppercase tracking-widest text-white/70 font-semibold">My Arsenal</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center">
            <span className="text-white">Technical </span>
            <span className="text-gradient">Capabilities</span>
          </h2>
        </div>

        {/* Filter Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'text-white' : 'text-white/50 hover:text-white hover:bg-white/5'}`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 bg-white/10 border border-white/20 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Cards Uneven Grid Layout */}
        <motion.div layout className="flex flex-wrap justify-center items-start gap-4 md:gap-8 w-full max-w-5xl perspective-[1000px] relative">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                index={index} 
                onClick={() => setSelectedSkillId(skill.id)} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
      
      {/* Expanded Shared Layout Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedSkillId(null)}
            />
            
            {/* Modal Dialog */}
            <motion.div
              layoutId={`card-${selectedSkill.id}`}
              className="relative w-[90%] max-w-md bg-dark-bg/95 backdrop-blur-2xl rounded-[2rem] p-8 mt-10 md:mt-0 border flex flex-col items-center overflow-hidden shadow-2xl cursor-default"
              style={{ borderColor: selectedSkill.color + "50", boxShadow: `0 30px 60px rgba(0,0,0,0.8), 0 0 40px ${selectedSkill.color}20 inset` }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
            >
              {/* Modal Background Glow */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at top center, ${selectedSkill.color}, transparent 60%)` }}
              />

              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-20"
                onClick={() => setSelectedSkillId(null)}
              >
                <X size={20} />
              </button>

              <motion.div layoutId={`icon-${selectedSkill.id}`} className="mb-6 relative z-10">
                <selectedSkill.icon size={80} color={selectedSkill.color} style={{ filter: `drop-shadow(0 0 20px ${selectedSkill.color}80)` }} />
              </motion.div>
              
              <motion.h3 layoutId={`title-${selectedSkill.id}`} className="text-3xl font-bold tracking-tight text-white mb-2 relative z-10 text-center">
                {selectedSkill.name}
              </motion.h3>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-white border border-white/5">
                  {selectedSkill.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/20" style={{ color: selectedSkill.color, backgroundColor: `${selectedSkill.color}10` }}>
                  {selectedSkill.level}
                </span>
              </div>

              <p className="text-center text-white/70 leading-relaxed mb-8 relative z-10 text-sm">
                {selectedSkill.desc}
              </p>

              <div className="w-full relative z-10">
                <div className="flex items-center gap-2 mb-3 text-white/50 text-xs uppercase font-bold tracking-wider">
                  <Code2 size={14} /> Applied In Projects:
                </div>
                <div className="flex flex-col gap-2">
                  {selectedSkill.projects.map((proj, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-xl px-4 py-3">
                      <Box size={14} className="text-white/40" />
                      <span className="text-sm text-white/90">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
