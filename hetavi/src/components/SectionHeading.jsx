import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ icon: Icon, subtitle, title1, title2, alignment = 'center' }) => {
  const isCenter = alignment === 'center';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 md:mb-24 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {/* Subtitle & Icon (Optional) */}
      {(Icon || subtitle) && (
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          {Icon && (
            <Icon className="text-earth-accent animate-bounce" size={24} />
          )}
          {subtitle && (
            <span className="text-sm uppercase tracking-[0.4em] text-earth-text/40 font-bold">
              {subtitle}
            </span>
          )}
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-earth-text uppercase tracking-tighter leading-none text-shadow-glow">
        {title1 && <span>{title1} </span>}
        {title2 && (
          <span className="text-earth-accent drop-shadow-[0_0_15px_rgba(106, 123, 78,0.5)]">
            {title2}
          </span>
        )}
      </h2>

      {/* Underline Divider */}
      <div 
        className={`w-24 h-1.5 bg-gradient-to-r from-earth-secondary via-earth-accent to-earth-secondary mt-6 rounded-full blur-[1px] ${isCenter ? 'mx-auto' : ''}`} 
      />
    </motion.div>
  );
};

export default SectionHeading;
