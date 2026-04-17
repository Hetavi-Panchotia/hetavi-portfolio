import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';
import emailjs from '@emailjs/browser';

const ContactInput = ({ label, type = "text", placeholder, name, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value.length > 0);
  };

  const inputClasses = `w-full bg-white/600 border border-earth-border rounded-2xl px-5 py-4 text-earth-text focus:outline-none transition-all duration-300 ${
    isFocused ? 'border-earth-accent ring-1 ring-earth-accent/50' : 'hover:border-earth-border'
  }`;

  return (
    <div className="relative group">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -32 : 0,
          x: isFocused || hasValue ? -4 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? 'rgba(106, 123, 78, 1)' : 'rgba(45, 45, 45, 0.5)'
        }}
        className="absolute left-5 top-4 pointer-events-none font-medium z-10 origin-left"
      >
        {label}
      </motion.label>
      
      {isTextArea ? (
        <textarea
          name={name}
          required
          rows="4"
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          name={name}
          required
          type={type}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={(e) => setHasValue(e.target.value.length > 0)}
          className={inputClasses}
        />
      )}
      
      {/* Background glow on focus */}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-earth-accent/5 blur-xl -z-10 rounded-2xl"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  // --- EMAILJS CONFIGURATION ---
  // Replace these with your own EmailJS credentials
  const SERVICE_ID = "service_6u2fwcd";
  const TEMPLATE_ID = "template_2mrp2hq";
  const PUBLIC_KEY = "K1rzq_jbNeRhB8x1u";

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (SERVICE_ID === "YOUR_SERVICE_ID" || SERVICE_ID === "") {
      setErrorMessage("Please configure EmailJS credentials in Contact.jsx");
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
      return;
    }

    setFormState('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setFormState('success');
          e.target.reset();
          setTimeout(() => setFormState('idle'), 5000);
      }, (error) => {
          console.log(error.text);
          setErrorMessage("Failed to send message. Please try again later.");
          setFormState('error');
          setTimeout(() => setFormState('idle'), 5000);
      });
  };

  const socialLinks = [
    { icon: <Github size={20} />, link: "https://github.com/Hetavi-Panchotia", color: "hover:text-earth-text" },
    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/hetavi-panchotia/", color: "hover:text-earth-accent" },
    { icon: <Twitter size={20} />, link: "https://x.com/HPanchotia21633", color: "hover:text-earth-secondary" }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-earth-bg min-h-screen flex items-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={{ backgroundPosition: ['100% 0%', '0% 100%'] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(ellipse at center, rgba(106, 123, 78,0.2) 0%, transparent 60%)',
            backgroundSize: '150% 150%'
          }}
        />
      </div>

      {/* Divider */}
      <div className="absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <SectionHeading 
              icon={Mail} 
              subtitle="Connect" 
              title1="Let's" 
              title2="Collaborate" 
              alignment="left"
            />
            
            <p className="text-lg md:text-xl text-earth-text/60 mb-12 max-w-lg leading-relaxed font-light">
              Always open to discussing game-changing ideas, innovative designs, or full-stack possibilities.
            </p>

            <div className="space-y-8 mb-12">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-2xl bg-white/60 border border-earth-border flex items-center justify-center text-earth-accent group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(45, 45, 45,0.3)] group-hover:shadow-[0_0_30px_rgba(106, 123, 78,0.2)]">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-earth-text/40 mb-1">Direct Email</p>
                  <p className="text-xl font-bold text-earth-text group-hover:text-earth-accent transition-colors">hetavipanchotia@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-2xl bg-white/60 border border-earth-border flex items-center justify-center text-earth-secondary group-hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(45, 45, 45,0.3)] group-hover:shadow-[0_0_30px_rgba(163, 142, 117,0.2)]">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-earth-text/40 mb-1">Base Location</p>
                  <p className="text-xl font-bold text-earth-text group-hover:text-earth-secondary transition-colors">Ahmedabad, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl bg-white/60 border border-earth-border flex items-center justify-center text-earth-text/60 transition-all duration-300 ${social.color} hover:bg-white/70 hover:border-earth-border`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background blur decorative element */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-earth-accent filter blur-[100px] opacity-10 animate-pulse" />
            
            <div className="glass-warm p-8 md:p-12 rounded-[2.5rem] border border-earth-border relative overflow-hidden backdrop-blur-2xl shadow-[0_40px_80px_rgba(45, 45, 45,0.5)]">
               <form ref={formRef} className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ContactInput label="Full Name" name="name" />
                  <ContactInput label="Email Address" type="email" name="email" />
                </div>
                
                <ContactInput label="Subject" name="subject" />
                <ContactInput label="Share your thoughts" name="message" isTextArea={true} />

                <motion.button 
                  type="submit"
                  disabled={formState !== 'idle'}
                  whileHover={formState === 'idle' ? { scale: 1.02, y: -2 } : {}}
                  whileTap={formState === 'idle' ? { scale: 0.98 } : {}}
                  className={`w-full py-5 px-8 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden relative group ${
                    formState === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                    : formState === 'error'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                    : 'bg-white text-earth-text hover:bg-earth-accent hover:text-earth-text'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {formState === 'idle' && (
                      <motion.div 
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send Transmission <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                    {formState === 'sending' && (
                      <motion.div 
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send size={20} />
                        </motion.div>
                        Encrypting...
                      </motion.div>
                    )}
                    {formState === 'success' && (
                      <motion.div 
                        key="success"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        Sent Successfully <CheckCircle2 size={20} />
                      </motion.div>
                    )}
                    {formState === 'error' && (
                      <motion.div 
                        key="error"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        {errorMessage || "Error!"} <AlertCircle size={20} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-10 left-0 w-full text-center">
        <p className="text-earth-text/20 text-[10px] uppercase tracking-[0.3em] font-mono">
          © {new Date().getFullYear()} All Systems Operational / Designed by Hetavi
        </p>
      </div>

    </section>
  );
};

export default Contact;
