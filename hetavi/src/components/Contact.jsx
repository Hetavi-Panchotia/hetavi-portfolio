import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient">
              Let's build something <br/>exceptional.
            </h2>
            <p className="text-lg text-white/80 mb-12 max-w-md leading-relaxed">
              I'm always open to discussing product design work, new frontend and backend architectures, or partnership opportunities.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-dark-bg transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Email</p>
                  <p className="text-lg font-medium text-white/90">hetavipanchotia@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-dark-bg transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Location</p>
                  <p className="text-lg font-medium text-white/90">Kalol, Gujarat (Open to Remote)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple filter blur-[80px] opacity-20" />
            
            <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/70 ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-white text-dark-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-neon-blue hover:text-dark-bg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] mt-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
