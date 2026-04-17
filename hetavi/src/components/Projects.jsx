import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Maximize2, MonitorPlay, Youtube, Filter } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const projects = [
  {
    id: 1,
    title: "Ashby Clone",
    description: "A clone of Ashby website which is a job board for startups.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774711968/Screenshot_2026-03-28_210214_bqy5bo.png",
    live: "https://ashby-clone.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Ashby_Clone",
    youtube: "https://youtu.be/YgyRL6WyFn0",
    categories: ["Clones", "Frontend"]
  },
  {
    id: 2,
    title: "CareerTrack",
    description: "CareerTrack is a full stack web application designed to help students organize and manage their internship and job applications efficiently. The platform provides a centralized dashboard where users can track applications, monitor interview schedules, and analyze their progress.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774712045/Screenshot_2026-03-28_210349_v5asrh.png",
    live: "https://careertrack-flame.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/careertrack",
    youtube: "",
    categories: ["Full Stack"]
  },
  {
    id: 3,
    title: "Path Pilot",
    description: "PathPilot AI analyzes your current skills and intelligently guides you with a personalized roadmap to become job-ready faster.",
    tech: ["React", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774712197/Screenshot_2026-03-28_210447_z0yy8a.png",
    live: "https://path-pilot-cyan.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Path-Pilot",
    youtube: "",
    categories: ["Full Stack"]
  },
  {
    id: 5,
    title: "Licious Clone",
    description : "A clone of Licious Website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774712199/Screenshot_2026-03-28_210613_o1l3hv.png",
    live: "https://licious-clone-phi.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Licious_Clone",
    youtube: "https://youtu.be/P6_4IJ7R4hU",
    categories: ["Clones", "Frontend"]
  },
  {
    id: 6,
    title: "Life of a Developer",
    description : "“Life of a Developer” is an interactive storytelling web experience that humorously captures the journey of becoming a software developer.",
    tech: ["React", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774600501/Screenshot_2026-03-27_135126_ysiqdt.png",
    live: "https://life-of-a-developer-chi.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Life-of-a-Developer",
    youtube: "",
    categories: ["Games", "Frontend"]
  },
  {
    id:7,
    title: "RepoLens",
    description : "RepoLens is an AI-powered tool that helps developers quickly understand any GitHub repository by automatically generating summaries, documentation, folder explanations, and architecture insights.",
    tech: ["Express", "React", "Node.js", "Tailwind", "Supabase", "Gemini API" , "Github API"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1776426135/Screenshot_2026-04-17_171202_ymxhl4.png",
    live: "https://repolens-olive.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/RepoLens",
    youtube: "",
    categories: ["Full Stack"]
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ["All", "Games", "Clones", "Full Stack", "Frontend"];
  
  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.categories.includes(activeCategory)
  );

  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isSmallMobile = width < 480;

  // Reset index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  // Auto-rotation logic
  useEffect(() => {
    if (isHovered || selectedProject || filteredProjects.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4000); // Rotates every 4 seconds for better readability
    
    return () => clearInterval(interval);
  }, [isHovered, selectedProject, filteredProjects.length]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);

  // Calculate position logic for 3D Carousel effect
  const getCardStyles = (index) => {
    const total = filteredProjects.length;
    let diff = index - activeIndex;

    // Special case for only 1 item
    if (total === 1) return { x: "0%", scale: 1, zIndex: 30, opacity: 1, rotateY: 0, filter: "blur(0px)" };

    // Handle wrap around smoothly
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    // Dynamic offsets based on screen width
    const offsetMult = isSmallMobile ? 70 : isMobile ? 85 : 110;

    if (diff === 0) {
      return { x: "0%", scale: 1, zIndex: 30, opacity: 1, rotateY: 0, filter: "blur(0px)" };
    }
    if (diff === 1) {
      return { x: `${offsetMult}%`, scale: 0.8, zIndex: 20, opacity: 0.6, rotateY: -20, filter: "blur(5px)" };
    }
    if (diff === -1) {
      return { x: `-${offsetMult}%`, scale: 0.8, zIndex: 20, opacity: 0.6, rotateY: 20, filter: "blur(5px)" };
    }
    if (diff > 1) {
      return { x: `${offsetMult * 1.5}%`, scale: 0.6, zIndex: 10, opacity: 0.2, rotateY: -35, filter: "blur(10px)" };
    }
    if (diff < -1) {
      return { x: `-${offsetMult * 1.5}%`, scale: 0.6, zIndex: 10, opacity: 0.2, rotateY: 35, filter: "blur(10px)" };
    }
    
    return { x: "0%", scale: 0.5, zIndex: 0, opacity: 0, rotateY: 0 };
  };

  const handleDragEnd = (_, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50 || velocity.x < -200) {
      nextSlide();
    } else if (swipe > 50 || velocity.x > 200) {
      prevSlide();
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-earth-bg min-h-screen flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(106, 123, 78,0.2) 0%, transparent 60%)',
            backgroundSize: '150% 150%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4 uppercase tracking-widest text-shadow-glow">
            <span className="text-earth-text">Featured </span>
            <span className="text-earth-accent drop-shadow-[0_0_15px_rgba(106, 123, 78,0.5)]">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-earth-secondary via-earth-accent to-earth-secondary mx-auto rounded-full blur-[1px]" />
          {/* <p className="mt-4 text-earth-text/50 text-sm md:text-base max-w-lg mx-auto">
            A curated collection of my most impactful dev work and applications, categorized by domain.
          </p> */}
        </motion.div>

        {/* Category Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-20 relative z-30">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${activeCategory === cat ? 'text-earth-text' : 'text-earth-text/50 hover:text-earth-text hover:bg-white/60'}`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryTabProjects"
                  className="absolute inset-0 bg-white/70 border border-earth-border rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(106, 123, 78,0.2)]"
                  transition={{ type: "tween", ease: "easeInOut", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 uppercase tracking-widest">{cat}</span>
            </button>
          ))}
        </div>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center perspective-[1500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Navigation Arrows (Desktop) */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-10 z-50 p-4 rounded-full bg-white/60 hover:bg-white/70 border border-earth-border backdrop-blur-md text-earth-text/70 hover:text-earth-text transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)] hidden md:flex"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-10 z-50 p-4 rounded-full bg-white/60 hover:bg-white/70 border border-earth-border backdrop-blur-md text-earth-text/70 hover:text-earth-text transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)] hidden md:flex"
          >
            <ChevronRight size={28} />
          </button>

          {/* Cards */}
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, index) => {
              const isActive = index === activeIndex;
            
            return (
              <motion.div
                key={project.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={getCardStyles(index)}
                transition={{ type: "tween", ease: "easeInOut" }}
                className="absolute w-[80%] max-w-[320px] md:max-w-[450px] rounded-[2rem] glass-warm p-1 cursor-grab active:cursor-grabbing border transition-colors duration-500"
                style={{
                  borderColor: isActive ? "rgba(106, 123, 78,0.4)" : "rgba(45, 45, 45,0.05)",
                  backgroundColor: isActive ? "rgba(20,20,30,0.9)" : "rgba(10,10,15,0.5)",
                  boxShadow: isActive ? "0 30px 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(106, 123, 78,0.15)" : "0 10px 30px rgba(0,0,0,0.6)",
                  transformStyle: "preserve-3d"
                }}
                onClick={() => {
                  if (isActive) {
                    setSelectedProject(project);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="w-full relative rounded-[1.8rem] overflow-hidden group">
                  
                  {/* Image Container with precise aspect ratio */}
                  <div className="w-full aspect-[4/3] bg-black/50 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      draggable="false"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="self-center bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-earth-border text-earth-text font-semibold flex items-center gap-2 mb-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        <Maximize2 size={16} /> View Details
                      </motion.button>
                    </div>
                  </div>

                  {/* Informational Footer */}
                  <div className="p-5 md:p-6 pb-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-earth-text truncate drop-shadow-md">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                       {project.tech.slice(0, 3).map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] md:text-xs font-medium px-2 py-1 rounded-full bg-white/70 border border-white/5 text-earth-text/80"
                          >
                            {tech}
                          </span>
                       ))}
                       {project.tech.length > 3 && (
                          <span className="text-[10px] md:text-xs font-medium px-2 py-1 rounded-full bg-white/70 border border-white/5 text-earth-text/80">
                            +{project.tech.length - 3}
                          </span>
                       )}
                    </div>
                  </div>

                  {/* Top Right Award Icon */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-xl p-2.5 rounded-full border border-earth-border shadow-xl">
                    <MonitorPlay className="text-earth-accent" size={24} />
                  </div>

                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        {filteredProjects.length > 1 && (
          <div className="flex gap-3 mt-12 md:mt-16 relative z-30">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === activeIndex ? 'w-10 bg-earth-accent shadow-[0_0_10px_rgba(106, 123, 78,0.8)]' : 'w-2 bg-white/20 hover:bg-white/600'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              layoutId={`modal-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="relative w-full max-w-4xl bg-earth-bg/90 border border-earth-border rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] z-10 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Top Bar Navigation */}
              <div className="flex justify-between items-center p-4 border-b border-white/5 bg-black/30 backdrop-blur-md">
                <span className="text-earth-text/50 text-sm font-medium tracking-widest uppercase pl-2">Project Explorer</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/60 hover:bg-white/70 text-earth-text transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* High-Res Image View */}
              <div className="w-full flex-1 bg-black/60 relative overflow-hidden flex items-center justify-center p-4 md:p-8 min-h-[300px]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-auto h-auto max-w-full max-h-[50vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Bottom Details Panel */}
              <div className="p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-earth-text mb-3">{selectedProject.title}</h2>
                    <p className="text-earth-text/70 text-sm md:text-base mb-4 max-w-2xl leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-medium px-3 py-1 rounded-full bg-white/70 border border-white/5 text-earth-text/80"
                          >
                            {tech}
                          </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 min-w-[200px] shrink-0">
                    <a 
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-earth-accent text-earth-text hover:bg-white px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:-translate-y-1 w-full"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    
                    {selectedProject.youtube && (
                      <a 
                        href={selectedProject.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border border-[#FF0000]/20 text-[#FF0000] px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:-translate-y-1 w-full"
                      >
                        <Youtube size={18} /> YouTube
                      </a>
                    )}

                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white/70 hover:bg-white/20 border border-earth-border text-earth-text px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:-translate-y-1 w-full"
                    >
                      <Github size={18} /> Source
                    </a>
                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
