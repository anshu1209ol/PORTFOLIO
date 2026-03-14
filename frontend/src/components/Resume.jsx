import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-dark-motive">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-accent opacity-5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="glass p-10 sm:p-16 rounded-[3rem] border border-glass-border shadow-2xl relative"
        >
          <div className="inline-flex p-4 bg-primary-accent/10 rounded-2xl text-primary-accent mb-8">
            <FileText size={48} className="stroke-[1.5]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6">
            Review My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Resume</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Looking for a more detailed overview of my professional experience, skills, and academic background? 
            You can download my full resume directly.
          </p>

          <a 
            href="#" 
            download
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-secondary-accent to-primary-accent text-white font-medium text-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-accent/20"
          >
            <Download size={24} />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
