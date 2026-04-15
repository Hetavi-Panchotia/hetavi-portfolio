import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight, X, Maximize2, MonitorPlay, Youtube } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Ashby Clone",
    description: "A clone of Ashby website which is a job board for startups.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774711968/Screenshot_2026-03-28_210214_bqy5bo.png",
    live: "https://ashby-clone.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Ashby_Clone",
    youtube: "https://youtu.be/YgyRL6WyFn0"
  },
  {
    id: 2,
    title: "CareerTrack",
    description: "CareerTrack is a full stack web application designed to help students organize and manage their internship and job applications efficiently. The platform provides a centralized dashboard where users can track applications, monitor interview schedules, and analyze their progress.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774712045/Screenshot_2026-03-28_210349_v5asrh.png",
    live: "https://careertrack-flame.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/careertrack",
    youtube: "https://youtube.com/"
  },
  {
    id: 3,
    title: "Path Pilot",
    description: "PathPilot AI analyzes your current skills and intelligently guides you with a personalized roadmap to become job-ready faster.",
    tech: ["React", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774712197/Screenshot_2026-03-28_210447_z0yy8a.png",
    live: "https://path-pilot-cyan.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Path-Pilot",
    youtube: "https://youtube.com/"
  },
  // {
  //   id: 4,
  //   title: "Movie Gallery",
  //   description: "Movie Gallery is a web application designed to help users organize and manage their movie collections efficiently. The platform provides a centralized dashboard where users can track their movies.",
  //   tech: ["React", "Redux Toolkit", "Tailwind CSS"],
  //   image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774712199/Screenshot_2026-03-28_210537_aclnkc.png",
  //   live: "https://movies-react-poject.netlify.app/https://movies-react-poject.netlify.app/",
  //   github: "https://github.com/Hetavi-Panchotia/ReactTest-movie-",
  //   youtube: "https://youtube.com/"
  // },
  {
    id: 5,
    title: "Licious Clone",
    description : "A clone of Licious Website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774712199/Screenshot_2026-03-28_210613_o1l3hv.png",
    live: "https://licious-clone-phi.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Licious_Clone",
    youtube: "https://youtu.be/P6_4IJ7R4hU"
  },
  {
    id: 6,
    title: "Life of a Developer",
    description : "“Life of a Developer” is an interactive storytelling web experience that humorously captures the journey of becoming a software developer.",
    tech: ["React", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774600501/Screenshot_2026-03-27_135126_ysiqdt.png",
    live: "https://life-of-a-developer-chi.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Life-of-a-Developer",
    youtube: "https://youtube.com/"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Auto-rotation logic
  useEffect(() => {
    if (isHovered || selectedProject) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000); // Rotates every 3 seconds
    
    return () => clearInterval(interval);
  }, [isHovered, selectedProject]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  // Calculate position logic for 3D Carousel effect
  const getCardStyles = (index) => {
    const total = projects.length;
    let diff = index - activeIndex;

    // Handle wrap around smoothly
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;

    // Mobile offsets are smaller so they don't fly off screen
    const isMobile = window.innerWidth < 768;
    const offsetMult = isMobile ? 80 : 110;

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
    <section id="projects" className="py-32 relative overflow-hidden bg-dark-bg min-h-screen flex flex-col justify-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(0,240,255,0.2) 0%, transparent 60%)',
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
            <span className="text-white">Featured </span>
            <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple mx-auto rounded-full blur-[1px]" />
          <p className="mt-4 text-white/50 text-sm md:text-base max-w-lg mx-auto">
            A curated collection of my most impactful dev work and full-stack applications.
          </p>
        </motion.div>

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center perspective-[1500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Navigation Arrows (Desktop) */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-10 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white/70 hover:text-white transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)] hidden md:flex"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-10 z-50 p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white/70 hover:text-white transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.5)] hidden md:flex"
          >
            <ChevronRight size={28} />
          </button>

          {/* Cards */}
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            
            return (
              <motion.div
                key={project.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={getCardStyles(index)}
                transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
                className="absolute w-[80%] max-w-[320px] md:max-w-[450px] rounded-[2rem] glass p-1 cursor-grab active:cursor-grabbing border transition-colors duration-500"
                style={{
                  borderColor: isActive ? "rgba(0,240,255,0.4)" : "rgba(255,255,255,0.05)",
                  backgroundColor: isActive ? "rgba(20,20,30,0.9)" : "rgba(10,10,15,0.5)",
                  boxShadow: isActive ? "0 30px 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(0,240,255,0.15)" : "0 10px 30px rgba(0,0,0,0.6)",
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
                        className="self-center bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 text-white font-semibold flex items-center gap-2 mb-4"
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
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white truncate drop-shadow-md">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                       {project.tech.slice(0, 3).map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] md:text-xs font-medium px-2 py-1 rounded-full bg-white/10 border border-white/5 text-white/80"
                          >
                            {tech}
                          </span>
                       ))}
                       {project.tech.length > 3 && (
                          <span className="text-[10px] md:text-xs font-medium px-2 py-1 rounded-full bg-white/10 border border-white/5 text-white/80">
                            +{project.tech.length - 3}
                          </span>
                       )}
                    </div>
                  </div>

                  {/* Top Right Award Icon */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-xl p-2.5 rounded-full border border-white/10 shadow-xl">
                    <MonitorPlay className="text-neon-blue" size={24} />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex gap-3 mt-12 md:mt-16 relative z-30">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === activeIndex ? 'w-10 bg-neon-blue shadow-[0_0_10px_rgba(0,240,255,0.8)]' : 'w-2 bg-white/20 hover:bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

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
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-dark-bg/90 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] z-10 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Top Bar Navigation */}
              <div className="flex justify-between items-center p-4 border-b border-white/5 bg-black/30 backdrop-blur-md">
                <span className="text-white/50 text-sm font-medium tracking-widest uppercase pl-2">Project Explorer</span>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{selectedProject.title}</h2>
                    <p className="text-white/70 text-sm md:text-base mb-4 max-w-2xl leading-relaxed">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/5 text-white/80"
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
                      className="inline-flex items-center justify-center gap-2 bg-neon-blue text-dark-bg hover:bg-white px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:-translate-y-1 w-full"
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
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-5 py-2.5 rounded-xl font-semibold transition-all transform hover:-translate-y-1 w-full"
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
