import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-accent opacity-20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-accent opacity-20 rounded-full blur-[128px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-glass-border glass"
        >
          <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary-accent to-secondary-accent">
            🚀 Welcome to my digital space
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-outfit font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Anshul</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">Sikarwar.</span>
        </motion.h1>

        <motion.p 
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          An aspiring technologist pursuing a B.Tech in IT at Amity University Madhya Pradesh. 
          I build elegant solutions and dynamic experiences.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#about" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark-motive font-semibold rounded-full hover:bg-gray-100 transition-colors">
            Discover My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 glass border border-glass-border text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          className="flex items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="https://github.com/anshu1209ol" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800/50 text-gray-400 hover:text-white hover:bg-primary-accent/20 transition-all border border-glass-border">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ansul-4265a135a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800/50 text-gray-400 hover:text-white hover:bg-secondary-accent/20 transition-all border border-glass-border">
            <Linkedin size={24} />
          </a>
          <a href="mailto:anshulsikarwar84@gmail.com" className="p-3 rounded-full bg-slate-800/50 text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all border border-glass-border">
            <Mail size={24} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
