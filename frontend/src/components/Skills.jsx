import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <Layout className="w-8 h-8" />,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      badgeCss: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
      badgeCss: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      skills: ['Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/30',
      iconColor: 'text-orange-400',
      badgeCss: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
      badgeCss: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Vite']
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-motive/50">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-accent opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold mb-4 flex items-center justify-center gap-4"
          >
            <Code2 className="text-primary-accent w-10 h-10 hidden sm:block" />
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-secondary-accent">Stack</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Highlighting the core technologies, frameworks, and databases I utilize to build modern software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass p-8 sm:p-10 rounded-[2rem] border ${cat.borderColor} relative group overflow-hidden`}
            >
              {/* Dynamic Glow Overlay matching the category */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-full bg-slate-800/80 border ${cat.borderColor} ${cat.iconColor}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, sIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (sIndex * 0.05) }}
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${cat.badgeCss} backdrop-blur-sm cursor-default hover:scale-105 transition-transform`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
