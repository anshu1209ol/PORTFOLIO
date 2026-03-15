import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Heart, ExternalLink, ShieldCheck, Code } from 'lucide-react';

const FALLBACK_CERTS = [
  {
    title: "Certificate of Innovation (IIIM)",
    issuer: "IIIM",
    description: "Awarded for exceptional innovation and research methodologies demonstrated during the program.",
    pdfUrl: "/certificates/Certificate inovation .pdf",
    date: "2024",
    featured: true
  },
  {
    title: "Certificate of Participation",
    issuer: "Event Organizers",
    description: "Recognized for active participation and contribution to the event.",
    pdfUrl: "/certificates/393d1059-7fb9-4bb4-bdbd-64b8d1925d9f.pdf",
    date: "2023",
    featured: true
  },
  {
    title: "Achievement Award",
    issuer: "Tech Institute",
    description: "Awarded for successfully completing the required coursework with distinction.",
    pdfUrl: "/certificates/62e905a6-5479-43e5-b6d2-4fccd2211654.pdf",
    date: "2023",
    featured: false
  },
  {
    title: "Completion Certificate",
    issuer: "Online Academy",
    description: "Acknowledging the completion of the advanced training module.",
    pdfUrl: "/certificates/92e1f762-b8c4-48ff-a68b-e5ec21d3a7f5.pdf",
    date: "2022",
    featured: false
  },
  {
    title: "Excellence Certification",
    issuer: "Skill Development Board",
    description: "Certified for demonstrating excellence in practical implementations.",
    pdfUrl: "/certificates/f787c04f-7d83-4fbb-9b4f-21b4c329f798.pdf",
    date: "2024",
    featured: false
  }
];

const Achievements = () => {
  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL;
        if (!apiBase) {
          // No backend URL configured — use static fallback
          setCerts(FALLBACK_CERTS);
          return;
        }
        const res = await fetch(`${apiBase}/api/certificates`);
        if (res.ok) {
          const data = await res.json();
          setCerts(data.length > 0 ? data : FALLBACK_CERTS);
        } else {
          setCerts(FALLBACK_CERTS);
        }
      } catch (err) {
        console.error("Error fetching certificates:", err);
        setCerts(FALLBACK_CERTS);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  const nonTechCerts = [
    {
      title: "Best Presentation Prize",
      event: "National Science Day 2025",
      org: "Amity University Madhya Pradesh",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-400/20 to-orange-500/20",
      border: "border-yellow-500/30",
      desc: "Awarded for exceptional research paper presentation on Entrepreneurship & Innovation."
    },
    {
      title: "Amity Scholar's Award 2025",
      event: "Scholarship Program",
      org: "Amity University Madhya Pradesh",
      icon: <Award className="w-8 h-8 text-primary-accent" />,
      color: "from-primary-accent/20 to-blue-500/20",
      border: "border-primary-accent/30",
      desc: "Recognized as an Amity Scholar for academic excellence."
    },
    {
      title: "DevFest 2024",
      event: "Participation",
      org: "GDG Gwalior",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      color: "from-blue-400/20 to-purple-500/20",
      border: "border-blue-500/30",
      desc: "Participated in the major developer event by Google Developer Groups."
    },
    {
      title: "Blood Donation Camp",
      event: "Social Cause",
      org: "J.A. Hospital, Gwalior",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      color: "from-red-500/20 to-pink-500/20",
      border: "border-red-500/30",
      desc: "Contributed to society by donating blood ('B' Positive) securely."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-dark-motive">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary-accent opacity-5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-outfit font-bold mb-4"
          >
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent to-purple-500">Certificates</span>
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary-accent to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A showcase of my major technical certifications and academic participations.
          </p>
        </div>

        {/* Tech Certificates Category */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white border-b border-glass-border pb-4 mb-8"
          >
            Technical Certificates
          </motion.h3>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-primary-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`glass p-8 rounded-[2rem] border ${cert.featured ? 'border-primary-accent/50 shadow-[0_0_20px_rgba(var(--primary-accent),0.2)]' : 'border-glass-border'} relative group flex flex-col h-full overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-secondary-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {cert.featured && (
                    <div className="absolute top-0 right-0 -mr-2 -mt-2">
                       <span className="flex h-12 w-12 items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-20"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-accent"></span>
                       </span>
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-4 rounded-2xl border border-glass-border ${cert.featured ? 'bg-primary-accent/10 text-primary-accent' : 'bg-slate-800/80 text-gray-400'}`}>
                        {cert.featured ? <Trophy className="w-8 h-8" /> : <ShieldCheck className="w-8 h-8" />}
                      </div>
                      <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" title="View Certificate">
                        <ExternalLink className="text-gray-500 w-5 h-5 group-hover:text-primary-accent transition-colors" />
                      </a>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-primary-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-secondary-accent font-medium mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs mb-4">Date: {cert.date}</p>
                      <p className="text-gray-300 font-light leading-relaxed text-sm">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Non-Tech Achievements Category */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-white border-b border-glass-border pb-4 mb-8"
          >
            Non-Technical Participations & Awards
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonTechCerts.map((cert, index) => (
              <motion.div
                key={`nontech-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass p-8 rounded-3xl border border-glass-border relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-slate-800/80 rounded-2xl border border-glass-border">
                      {cert.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-secondary-accent font-medium mb-1">{cert.event}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.org}</p>
                  <p className="text-gray-300 font-light leading-relaxed line-clamp-2 md:line-clamp-none">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
