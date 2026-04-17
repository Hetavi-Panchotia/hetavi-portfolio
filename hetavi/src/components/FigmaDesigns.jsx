import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Figma, ExternalLink, Maximize2, Compass, Layers, PenTool } from 'lucide-react';
import SectionHeading from './SectionHeading';

const designData = [
  {
    id: 1,
    title: "Dashboard",
    type: "Web Application",
    description: "",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1776426088/Screenshot_2026-04-17_170722_wypb8t.png",
  },
  {
    id: 2,
    title: "Book My Show",
    type: "Product Design",
    description: "",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1776426086/Screenshot_2026-04-17_170821_zxci1y.png",
  },
  {
    id: 3,
    title: "Invento",
    type: "Mobile UI",
    description: "",
    image: "https://res.cloudinary.com/dob3ay5xe/image/upload/v1776426102/Screenshot_2026-04-17_130331_bjyfcd.png",
  }
];

const FigmaDesigns = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <section id="designs" className="py-32 relative overflow-hidden bg-earth-bg min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at top right, rgba(235,66,255,0.1) 0%, transparent 40%)',
            backgroundSize: '150% 150%'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <SectionHeading 
          icon={Figma} 
          subtitle="Creative Suite" 
          title1="Figma" 
          title2="Gallery" 
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designData.map((design, idx) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-white/60 backdrop-blur-3xl transition-all duration-500 group-hover:border-earth-secondary/50 shadow-2xl">
                
                {/* Image */}
                <img 
                  src={design.image} 
                  alt={design.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-black text-earth-text mb-3 uppercase tracking-tight">{design.title}</h3>
                  <p className="text-earth-text/60 text-xs mb-6 line-clamp-3 leading-relaxed">{design.description}</p>
                  
                  <div className="flex gap-4">
                    <motion.button 
                      onClick={() => setSelectedDesign(design)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-white/70 hover:bg-white/20 border border-earth-border flex items-center justify-center gap-3 text-earth-text font-bold uppercase tracking-widest text-xs"
                    >
                      <Maximize2 size={16} /> View Image
                    </motion.button>
                  </div>
                </div>

                {/* Simple Label (Non-hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                   <h3 className="text-xl font-bold text-earth-text uppercase tracking-tight">{design.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedDesign && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
              onClick={() => setSelectedDesign(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-earth-bg/50 border border-earth-border rounded-[3rem] overflow-hidden shadow-2xl z-10"
            >
              <img src={selectedDesign.image} alt={selectedDesign.title} className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                   <h2 className="text-4xl md:text-6xl font-black text-earth-text uppercase tracking-tighter mb-4">{selectedDesign.title}</h2>
                   <div className="flex flex-wrap gap-4 items-center">
                      <button onClick={() => setSelectedDesign(null)} className="text-earth-text/60 hover:text-earth-text uppercase font-mono tracking-widest text-xs">
                        [ Close ]
                      </button>
                   </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default FigmaDesigns;
