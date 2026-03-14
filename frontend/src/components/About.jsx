import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Code2, Database } from 'lucide-react';
import profilePic from '../assets/Anshul.png';

const About = () => {

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold mb-4"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Me</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Photo (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 relative flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden border border-glass-border shadow-2xl relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-accent/20 to-secondary-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                <img 
                  src={profilePic} 
                  alt="Anshul Sikarwar" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </motion.div>
  
            {/* Bio & Education (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-8 space-y-8 glass p-8 sm:p-10 rounded-3xl border border-glass-border shadow-2xl h-full flex flex-col justify-center"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 bg-secondary-accent/10 rounded-2xl text-secondary-accent shrink-0">
                  <User size={32} className="stroke-[1.5]"/>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Who I Am</h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    I am <strong className="text-white font-medium">Anshul Sikarwar</strong>, a passionate developer building scalable web applications. 
                    I focus on writing clean, elegant code and creating beautiful user interfaces that provide exceptional experiences.
                  </p>
                </div>
              </div>
  
              <div className="flex items-start gap-5 pt-8 border-t border-glass-border">
                <div className="p-4 bg-primary-accent/10 rounded-2xl text-primary-accent shrink-0">
                  <GraduationCap size={32} className="stroke-[1.5]"/>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">Education</h3>
                  <p className="text-gray-200 font-medium text-xl">B.Tech in Information Technology</p>
                  <p className="text-secondary-accent font-medium mt-1">Amity University Madhya Pradesh</p>
                  <p className="text-gray-400 text-base mt-3 leading-relaxed font-light">
                    Pursuing my degree with a focus on modern software engineering practices, web development, and database management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
      </div>
    </section>
  );
};

export default About;
