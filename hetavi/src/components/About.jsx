import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Rocket, Heart } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code2 className="text-neon-blue" size={32} />,
      title: "Problem Solver",
      desc: "Love tackling complex algorithms and creating efficient code architectures."
    },
    {
      icon: <Trophy className="text-neon-purple" size={32} />,
      title: "Hackathon Enthusiast",
      desc: "Always ready to build something spectacular in 48 hours."
    },
    {
      icon: <Rocket className="text-neon-blue" size={32} />,
      title: "Fast Learner",
      desc: "Adapting to new technologies and frameworks with lightning speed."
    },
    {
      icon: <Heart className="text-neon-purple" size={32} />,
      title: "Passionate Creator",
      desc: "Building side projects that solve real-world problems is my jam."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gradient"> About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <p className="text-xl text-white/90 leading-relaxed">
              I'm an aspiring software engineer with an insatiable curiosity for how things work under the hood. 
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              My journey began with writing simple scripts, but quickly evolved into a passion for full-stack development, interactive user interfaces, and scalable backend architectures. I thrive in dynamic environments where I can push my limits.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              When I'm not coding, you can find me brainstorming my next big project or participating in hackathons to turn ideas into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="mb-4 p-3 bg-white/5 inline-block rounded-xl group-hover:bg-white/10 transition-colors">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
