import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const certificates = [
  {
    title: "MOSIP Decode Hackathon",
    issuer: "IIT Madras",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211452_trcpkg.png",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211452_trcpkg.png"
  },
  {
    title: "Singularity AI Hackathon",
    issuer: "IIT Dharwad",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211425_uhionr.png",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331186/Screenshot_2026-03-12_211425_uhionr.png"
  },
  {
    title: "Introduction to C",
    issuer: "Sololearn",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331573/c_sololearn_hc1uum.jpg",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1773331573/c_sololearn_hc1uum.jpg"
  },
  {
    title: "Elite Hack 1.0",
    issuer: "Elite Coders",
    date: "2026",
    link: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774446765/Screenshot_2026-03-25_192209_ygod0x.png",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774446765/Screenshot_2026-03-25_192209_ygod0x.png"
  },
  {
    title : "Secure Her Future",
    issuer : "Fin5ive",
    date : "2026",
    link : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774447186/Screenshot_2026-03-25_192921_qmuwzc.png",
    image : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1774447186/Screenshot_2026-03-25_192921_qmuwzc.png"
  },
  {
    title : "AI Tools Workshop",
    issuer : "be10x",
    date : "2025",
    link : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1770455611/Screenshot_2026-02-07_144317_uw152p.png",
    image : "https://res.cloudinary.com/dob3ay5xe/image/upload/v1770455611/Screenshot_2026-02-07_144317_uw152p.png"
  }
];

const Certificates = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-neon-purple">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative group/container">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all hover:bg-black/80 hover:border-neon-blue/50 hover:scale-110 active:scale-95"
            aria-label="Scroll left"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all hover:bg-black/80 hover:border-neon-purple/50 hover:scale-110 active:scale-95"
            aria-label="Scroll right"
          >
            <ChevronRight size={28} />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory scrollbar-hide hide-scrollbar scroll-smooth" 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {certificates.map((cert, idx) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="min-w-[300px] md:min-w-[400px] snap-center glass rounded-3xl p-6 border border-white/5 hover:border-neon-purple/50 transition-all group cursor-pointer"
            >
              <div className="h-48 rounded-xl overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-neon-purple/20 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply" />
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Award className="text-neon-blue" size={20} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-purple transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-white/60 text-sm mb-4 flex justify-between items-center">
                <span>{cert.issuer}</span>
                <span className="text-neon-blue font-medium">{cert.date}</span>
              </p>
              
              <a 
                href={cert.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white mt-2 group/link"
              >
                View Credential <ExternalLink size={14} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;