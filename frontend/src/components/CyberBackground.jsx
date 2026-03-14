import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* 1. Underlying Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      {/* 2. Interactive Spotlight Gradient */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`,
        }}
      />

      {/* 3. Top-Left HUD Element (Radar Box) */}
      <div className="absolute top-8 left-8 hidden md:flex flex-col gap-2 opacity-50 z-10">
        <div className="w-16 h-16 border border-primary-accent/40 relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary-accent"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary-accent"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary-accent"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary-accent"></div>
          
          {/* Inner Pulsing Radar Dot */}
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary-accent rounded-full"
          ></motion.div>
          {/* Crosshairs */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary-accent/20"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary-accent/20"></div>
        </div>
        <div className="text-[10px] text-primary-accent/70 font-mono tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-accent rounded-full animate-pulse"></span>
          SYS.TRACKING
        </div>
      </div>

      {/* 4. Bottom-Right HUD Element (Signal/Status) */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-end gap-2 opacity-50 z-10">
        <div className="flex items-end gap-1 h-6">
          <motion.div 
            animate={{ height: ['40%', '100%', '60%', '80%', '40%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-secondary-accent"
          ></motion.div>
          <motion.div 
            animate={{ height: ['80%', '40%', '100%', '60%', '80%'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-secondary-accent"
          ></motion.div>
          <motion.div 
            animate={{ height: ['60%', '100%', '40%', '80%', '60%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 bg-secondary-accent"
          ></motion.div>
        </div>
        <div className="text-[10px] text-secondary-accent/70 font-mono tracking-widest text-right">
          DATA.LINK.ACTIVE
          <br/>
          {(mousePosition.x / 10).toFixed(2)} : {(mousePosition.y / 10).toFixed(2)}
        </div>
      </div>

      {/* Heavy Vignette overlay to make edges dark and center bright */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-dark-motive/80 to-dark-motive pointer-events-none"></div>
    </div>
  );
};

export default CyberBackground;
