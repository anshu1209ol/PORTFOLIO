import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EcoQuest',
      desc: 'Developed a web platform focused on environmental awareness and sustainability initiatives. Designed a responsive UI to encourage users to participate in eco-friendly activities.',
      tech: ['HTML', 'JavaScript', 'CSS'],
      github: 'https://github.com/anshu1209ol/Ecoquest',
      live: '#'
    },
    {
      title: 'EcoQuest Pro',
      desc: 'Built an improved version of EcoQuest using TypeScript for scalable development. Implemented structured frontend architecture and better project organization with modern tools.',
      tech: ['TypeScript', 'Frontend Architecture'],
      github: 'https://github.com/anshu1209ol/EcoquestPro',
      live: '#'
    },
    {
      title: 'Movie Prediction Model',
      desc: 'Built a model-based project to analyze movie-related data and predict outcomes. Focused on data analysis, prediction logic, and implemented a frontend structure for results.',
      tech: ['Python', 'Data Analysis', 'Prediction Logic'],
      github: 'https://github.com/anshu1209ol/Moviepredictionmodel',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-secondary-accent opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold mb-4"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent to-primary-accent">Projects</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary-accent to-primary-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work. These projects showcase my expertise in building functional and scalable applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-[2rem] border border-glass-border shadow-2xl relative group flex flex-col h-full"
            >
              {/* Top Icons */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-primary-accent/10 text-primary-accent rounded-xl">
                  <Folder size={28} className="stroke-[1.5]" />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label={`View ${project.title} on GitHub`}>
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label={`Visit ${project.title} live site`}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <ul className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-glass-border/50">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-medium text-secondary-accent/80 bg-secondary-accent/10 px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
