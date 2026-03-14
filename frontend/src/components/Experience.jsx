import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full-Stack / Web Developer (Student Projects)',
      company: 'Personal Development Projects',
      duration: '2024 – Present',
      desc: 'Built multiple software and web applications while studying at Amity University Madhya Pradesh. Developed projects using HTML, JavaScript, TypeScript, and Python.',
      highlights: [
        'Implemented UI design, backend logic, and application workflows.',
        'Practiced modern development workflows using Git version control and GitHub repositories.'
      ]
    }
  ];

  const technicalSkills = [
    'Web Development (HTML, JavaScript, TypeScript)',
    'Python Development',
    'Git & GitHub Workflow',
    'UI Design and Web Interfaces',
    'Basic AI / Automation Concepts'
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-motive">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold mb-4"
          >
            Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary-accent">Experience</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-400 to-primary-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Hands-on development experience gained through rigorous personal and academic projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Experience Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-7 glass p-8 sm:p-10 rounded-3xl border border-glass-border shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative z-10">
                <div className="flex items-start gap-5 mb-8">
                  <div className="p-4 bg-purple-500/10 text-purple-400 rounded-2xl shrink-0">
                    <Briefcase size={32} className="stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{exp.role}</h3>
                    <p className="text-primary-accent font-medium text-lg mb-1">{exp.company}</p>
                    <span className="inline-block py-1 px-3 mt-2 rounded-full bg-slate-800 border border-glass-border text-gray-300 text-sm font-semibold tracking-wide">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 font-light leading-relaxed text-lg mb-6">
                  {exp.desc}
                </p>

                <div className="space-y-3 mt-6">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1.5 p-1 bg-primary-accent/20 rounded-full shrink-0">
                        <div className="w-1.5 h-1.5 bg-primary-accent rounded-full"></div>
                      </div>
                      <p className="text-gray-400 font-light leading-relaxed">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Technical Skills Demonstrated */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 glass p-8 sm:p-10 rounded-3xl border border-glass-border shadow-2xl flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white border-b border-glass-border pb-4">
              Skills Demonstrated
            </h3>
            
            <ul className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-4 text-gray-200 text-lg font-light tracking-wide group"
                >
                  <CheckCircle2 className="text-secondary-accent w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
