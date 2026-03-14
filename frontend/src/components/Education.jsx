import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Lightbulb } from 'lucide-react';

const Education = () => {
  const journeys = [
    {
      title: 'University',
      institution: 'Amity University Gwalior',
      degree: "Bachelor's Degree (Computer Science / related field)",
      location: '📍 Gwalior, Madhya Pradesh',
      duration: '2024 – Present',
      points: [
        'Studying core subjects like Programming, Data Structures, and Software Engineering.',
        'Working on AI and software-based projects.',
        'Participating in hackathons and technical events.',
        'Learning modern development tools and technologies.'
      ]
    },
    {
      title: 'Senior Secondary (Class 12)',
      institution: 'Ebenezer Hr. Sec. School',
      degree: 'Board: Central Board of Secondary Education',
      location: '',
      duration: 'Year: 2024',
      points: [
        'Completed Higher Secondary Education (Science stream).',
        'Built strong foundation in Mathematics and Computer Science.',
        'Participated in school academic and technical activities.'
      ]
    },
    {
      title: 'Secondary School (Class 10)',
      institution: 'Ebenezer Hr. Sec. School',
      degree: 'Board: Central Board of Secondary Education',
      location: '',
      duration: 'Year: 2022',
      points: [
        'Completed Secondary School Education.',
        'Developed interest in technology and computers.',
        'Participated in school projects and academic competitions.'
      ]
    }
  ];

  const academicLearning = [
    'Programming fundamentals',
    'Problem solving & logical thinking',
    'Software development basics',
    'Team collaboration in academic projects',
    'Technical research and documentation'
  ];

  const academicHighlights = [
    'Actively working on software development projects',
    'Exploring AI and machine learning concepts',
    'Participating in hackathons and coding events',
    'Learning Git, GitHub, and development workflows'
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-motive/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold mb-4"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-accent to-purple-500">Journey</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-accent to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            My educational background and the foundation of my technical knowledge.
          </p>
        </div>

        {/* 3 Square Boxes layout for timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {journeys.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border border-glass-border shadow-2xl relative group flex flex-col h-full overflow-hidden"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary-accent/10 rounded-xl text-primary-accent z-10 transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white z-10">{item.title}</h3>
              </div>

              <div className="z-10 mb-6 flex-grow">
                <h4 className="text-lg font-semibold text-secondary-accent mb-1">{item.institution}</h4>
                <p className="text-gray-300 font-medium text-sm mb-1 line-clamp-2" title={item.degree}>{item.degree}</p>
                {item.location && <p className="text-gray-400 text-xs mb-3">{item.location}</p>}
                
                <span className="inline-block py-1 pr-3 text-primary-accent text-sm font-semibold tracking-wide border-b border-primary-accent/30 mb-4 inline-block">
                  Duration: {item.duration}
                </span>

                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-gray-400 text-sm font-light leading-relaxed flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-accent/50 mt-1.5 shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subsections Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Academic Learning */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="glass p-8 sm:p-10 rounded-3xl border border-glass-border shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary-accent/10 rounded-xl text-secondary-accent">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Skills Gained During Education</h3>
            </div>
            
            <h4 className="text-lg font-medium text-gray-300 border-b-2 border-primary-accent/30 pb-2 mb-6 inline-block">
               Academic Learning
            </h4>

            <ul className="space-y-4">
              {academicLearning.map((learning, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300 text-base font-light tracking-wide">
                   <div className="w-2 h-2 rounded-full bg-primary-accent/60"></div>
                   {learning}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Academic Highlights */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="glass p-8 sm:p-10 rounded-3xl border border-glass-border shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Focus & Activities</h3>
            </div>

            <h4 className="text-lg font-medium text-gray-300 border-b-2 border-purple-500/30 pb-2 mb-6 inline-block">
               Academic Highlights
            </h4>

            <ul className="space-y-4">
              {academicHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 text-base font-light tracking-wide">
                   <div className="w-2 h-2 rounded-full bg-purple-500/60 mt-2 shrink-0"></div>
                   <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;
