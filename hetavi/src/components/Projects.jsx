import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Ashby Clone",
    description: "A clone of Ashby website which is a job board for startups.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    live: "https://ashbyclone-108563.netlify.app/",
    github: "https://github.com/Hetavi-Panchotia/Ashby_Clone"
  },
  {
    title: "CareerTrack",
    description: "CareerTrack is a full stack web application designed to help students organize and manage their internship and job applications efficiently. The platform provides a centralized dashboard where users can track applications, monitor interview schedules, and analyze their progress.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/careertrack.png",
    live: "https://careertrack-flame.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/careertrack"
  },
  {
    title: "Path Pilot",
    description: "PathPilot AI analyzes your current skills and intelligently guides you with a personalized roadmap to become job-ready faster.",
    tech: ["React", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    image: "/projects/path_pilot.png",
    live: "https://path-pilot-cyan.vercel.app/",
    github: "https://github.com/Hetavi-Panchotia/Path-Pilot"
  },
  {
    title: "Movie Gallery",
    description: "Movie Gallery is a web application designed to help users organize and manage their movie collections efficiently. The platform provides a centralized dashboard where users can track their movies.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
    live: "https://movies-react-poject.netlify.app/https://movies-react-poject.netlify.app/",
    github: "https://github.com/Hetavi-Panchotia/ReactTest-movie-"
  },
  {
    title: "Licious Clone",
    description : "A clone of Licious Website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
    live: "https://hetavi-liciousclone.netlify.app/",
    github: "https://github.com/Hetavi-Panchotia/Licious_Clone"
  }
];

const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden transform-gpu"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-soft-light"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 240, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="aspect-video w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-8 relative z-20">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/5 text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a 
            href={project.live}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-dark-bg font-semibold hover:bg-neon-blue hover:text-dark-bg transition-all transform hover:-translate-y-1"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a 
            href={project.github}
            className="px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center transform hover:-translate-y-1"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient"> Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
          </div>
          <a href="#" className="text-white/60 hover:text-neon-blue transition-colors flex items-center gap-2 group">
            View all projects 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';
import { title } from 'framer-motion/client';

export default Projects;
