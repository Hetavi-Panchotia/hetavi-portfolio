import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';
import SectionHeading from './SectionHeading';


const certificates = [
  {
    id: 1,
    title: "MOSIP Decode Hackathon",
    issuer: "IIT Madras",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211452_trcpkg.png",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211452_trcpkg.png"
  },
  {
    id: 2,
    title: "Singularity AI Hackathon",
    issuer: "IIT Dharwad",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211425_uhionr.png",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211425_uhionr.png"
  },
  {
    id: 3,
    title: "Introduction to C",
    issuer: "Sololearn",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331573/c_sololearn_hc1uum.jpg",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331573/c_sololearn_hc1uum.jpg"
  },
  {
    id: 4,
    title: "Elite Hack 1.0",
    issuer: "Elite Coders",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774446765/Screenshot_2026-03-25_192209_ygod0x.png",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774446765/Screenshot_2026-03-25_192209_ygod0x.png"
  },
  {
    id: 5,
    title : "Secure Her Future",
    issuer : "Fin5ive",
    date : "2026",
    link : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774447186/Screenshot_2026-03-25_192921_qmuwzc.png",
    image : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774447186/Screenshot_2026-03-25_192921_qmuwzc.png"
  },
  {
    id: 6,
    title : "AI Tools Workshop",
    issuer : "be10x",
    date : "2025",
    link : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1770455611/Screenshot_2026-02-07_144317_uw152p.png",
    image : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1770455611/Screenshot_2026-02-07_144317_uw152p.png"
  },
  {
    id : 7,
    title : "Frontend Odyssey",
    issuer : "IIT Patna",
    date : "2026",
    link : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1776426058/Screenshot_2026-04-16_151131_akgqgv.png",
    image : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1776426058/Screenshot_2026-04-16_151131_akgqgv.png"
  }
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isSmallMobile = width < 480;

  // Auto-rotation logic
  useEffect(() => {
    if (isHovered || selectedCert) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certificates.length);
    }, 3000); // Rotates every 1.5 seconds
    
    return () => clearInterval(interval);
  }, [isHovered, selectedCert]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % certificates.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  // Calculate position logic for 3D Carousel effect
  const getCardStyles = (index) => {
    const total = certificates.length;
    let diff = index - activeIndex;

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
    <section id="certificates" className="py-32 relative overflow-hidden bg-earth-bg min-h-screen flex flex-col justify-center">
      


      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(163, 142, 117,0.3) 0%, transparent 60%)',
            backgroundSize: '150% 150%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full flex flex-col items-center">
        
        <SectionHeading 
          icon={Award} 
          subtitle="Milestones" 
          title1="Verified" 
          title2="Certifications" 
        />

        {/* 3D Carousel Container */}
        <div 
          className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center perspective-[1500px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Navigation Arrows (Desktop) */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-10 z-50 p-4 rounded-full bg-white/60 hover:bg-white/70 border border-earth-border backdrop-blur-md text-earth-text/70 hover:text-earth-text transition-all hover:scale-110 shadow-[0_0_20px_rgba(45, 45, 45,0.5)] hidden md:flex"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-10 z-50 p-4 rounded-full bg-white/60 hover:bg-white/70 border border-earth-border backdrop-blur-md text-earth-text/70 hover:text-earth-text transition-all hover:scale-110 shadow-[0_0_20px_rgba(45, 45, 45,0.5)] hidden md:flex"
          >
            <ChevronRight size={28} />
          </button>

          {/* Cards */}
          {certificates.map((cert, index) => {
            const isActive = index === activeIndex;
            
            return (
              <motion.div
                key={cert.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                animate={getCardStyles(index)}
                transition={{ type: "tween", ease: "easeInOut" }}
                className="absolute w-[80%] max-w-[320px] md:max-w-[450px] rounded-[2.5rem] glass-warm p-1 cursor-grab active:cursor-grabbing border transition-all duration-500"
                style={{
                  borderColor: isActive ? "rgba(163, 142, 117, 0.4)" : "rgba(0, 0, 0, 0.05)",
                  backgroundColor: isActive ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.5)",
                  boxShadow: isActive ? "0 30px 60px rgba(45, 45, 45, 0.15), inset 0 0 40px rgba(163, 142, 117, 0.1)" : "0 10px 30px rgba(45, 45, 45, 0.1)",
                  transformStyle: "preserve-3d"
                }}
                onClick={() => {
                  if (isActive) {
                    setSelectedCert(cert);
                  } else {
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="w-full relative rounded-[1.8rem] overflow-hidden group">
                  
                  {/* Image Container with precise aspect ratio */}
                  <div className="w-full aspect-[4/3] bg-black/50 relative overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
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
                          setSelectedCert(cert);
                        }}
                      >
                        <Maximize2 size={16} /> View Details
                      </motion.button>
                    </div>
                  </div>

                  {/* Informational Footer */}
                  <div className="p-5 md:p-6 pb-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-earth-text truncate drop-shadow-md">
                      {cert.title}
                    </h3>
                    <div className="flex justify-between items-center text-earth-text/60 text-sm md:text-base font-medium">
                      <span>{cert.issuer}</span>
                      <span className="text-earth-accent tracking-wide">{cert.date}</span>
                    </div>
                  </div>

                  {/* Top Right Award Icon */}
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-xl p-2.5 rounded-full border border-earth-border shadow-xl">
                    <Award className="text-earth-secondary" size={24} />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex gap-3 mt-12 md:mt-16 relative z-30">
          {certificates.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === activeIndex ? 'w-10 bg-earth-secondary shadow-[0_0_10px_rgba(163, 142, 117,0.8)]' : 'w-2 bg-white/20 hover:bg-white/600'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-zoom-out"
              onClick={() => setSelectedCert(null)}
            />
            
            {/* Modal Content */}
            <motion.div
              layoutId={`modal-${selectedCert.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "tween", ease: "easeInOut" }}
              className="relative w-full max-w-4xl bg-earth-bg/90 border border-earth-border rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(45, 45, 45,1)] z-10 flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Top Bar Navigation */}
              <div className="flex justify-between items-center p-4 border-b border-white/5 bg-black/30 backdrop-blur-md">
                <span className="text-earth-text/50 text-sm font-medium tracking-widest uppercase pl-2">Credential Explorer</span>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-white/60 hover:bg-white/70 text-earth-text transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* High-Res Image View */}
              <div className="w-full flex-1 bg-black/60 relative overflow-hidden flex items-center justify-center p-4 md:p-8 min-h-[300px]">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-auto h-auto max-w-full max-h-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Bottom Details Panel */}
              <div className="p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-earth-text mb-2">{selectedCert.title}</h2>
                    <div className="flex items-center gap-4 text-earth-text/60">
                      <span className="flex items-center gap-2"><Award size={16}/> {selectedCert.issuer}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{selectedCert.date}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-earth-secondary/20 hover:bg-earth-secondary/30 border border-earth-secondary/50 text-earth-text px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Verify Credential <ExternalLink size={18} />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certificates;