import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, MessageSquare, User, Briefcase, Mail, Volume2, VolumeX } from 'lucide-react';

const BotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreetingPlayed, setHasGreetingPlayed] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello, welcome to the Anshul portfolio, how may I help you?", isBot: true }
  ]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  const synth = window.speechSynthesis;
  // Use a ref to keep track of the current utterance so we can cancel it if needed
  const utteranceRef = useRef(null);

  // Initialize and automatically open visual chat on load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasGreetingPlayed) {
        setIsOpen(true);
        setHasGreetingPlayed(true);
        
        // Try to speak if browser allows autoplay
        speakMessage("Hello, welcome to the Anshul portfolio, how may I help you?");
        
        // Auto-Mute after initial greeting so it doesn't talk during subsequent manual clicks unless re-enabled
        setTimeout(() => {
          setSoundEnabled(false);
          setIsSpeaking(false);
        }, 8000);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [hasGreetingPlayed, soundEnabled]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if (synth.speaking) synth.cancel();
    };
  }, []);

  const speakMessage = (text) => {
    if (!soundEnabled || !synth) return;
    
    // Cancel any currently speaking audio
    if (synth.speaking) {
      synth.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find a pleasant English voice
    const voices = synth.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-') && (v.name.includes('Google') || v.name.includes('Female') || v.name.includes('Samantha'))) || voices[0];
    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.rate = 0.95;
    utterance.pitch = 1.1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    synth.speak(utterance);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (soundEnabled && synth.speaking) {
      synth.cancel();
      setIsSpeaking(false);
    }
    setSoundEnabled(!soundEnabled);
  };

  const handleHelpOption = (option) => {
    // Add user message
    setMessages(prev => [...prev, { text: option.label, isBot: false }]);
    
    // Add bot response with artificial delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: option.response, isBot: true }]);
      speakMessage(option.response);
    }, 600);
  };

  const helpOptions = [
    {
      icon: <User size={16} />,
      label: "Who is Anshul?",
      response: "Anshul is an aspiring technologist pursuing a B.Tech in IT at Amity University Madhya Pradesh. He focuses on building elegant, dynamic web applications."
    },
    {
      icon: <Briefcase size={16} />,
      label: "What are his skills?",
      response: "He is highly skilled in Frontend technologies like React and Tailwind, Backend with Node and Django, and Databases like MongoDB and PostgreSQL."
    },
    {
      icon: <Mail size={16} />,
      label: "How to contact him?",
      response: "You can reach him via email at anshulsikarwar84@gmail.com, or use the Contact form at the bottom of this page!"
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start pointer-events-none">
      
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8, originBottom: true, originLeft: true }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-80 sm:w-96 glass rounded-3xl border border-glass-border shadow-2xl overflow-hidden pointer-events-auto flex flex-col"
          >
            {/* Header */}
            <div className="bg-slate-800/80 p-4 border-b border-glass-border flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <div className={`w-full h-full rounded-2xl border-2 border-primary-accent overflow-hidden bg-slate-900/50 ${isSpeaking ? "animate-pulse" : ""}`}>
                    <model-viewer 
                      src="/6-wizard.glb" 
                      auto-rotate 
                      camera-controls 
                      autoplay 
                      interaction-prompt="none" 
                      disable-zoom 
                      style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
                    ></model-viewer>
                  </div>
                  {isSpeaking && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-accent"></span>
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
                  <p className="text-xs text-secondary-accent flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleSound}
                  className="p-1.5 text-gray-400 hover:text-white transition-colors"
                  title={soundEnabled ? "Mute Voice" : "Enable Voice"}
                >
                  {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Chat History */}
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-glass-border">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                      msg.isBot 
                        ? 'bg-slate-700/50 text-gray-200 rounded-tl-sm' 
                        : 'bg-primary-accent text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isSpeaking && messages[messages.length-1]?.isBot && (
                 <div className="flex justify-start">
                    <div className="bg-slate-700/50 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 w-16">
                      <div className="w-2 h-2 bg-primary-accent rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary-accent rounded-full animate-bounce" style={{ animationDelay: '0.15s'}}></div>
                      <div className="w-2 h-2 bg-primary-accent rounded-full animate-bounce" style={{ animationDelay: '0.3s'}}></div>
                    </div>
                 </div>
              )}
            </div>

            {/* Quick Actions Footer */}
            <div className="p-4 bg-slate-800/50 border-t border-glass-border">
              <p className="text-xs text-gray-400 mb-3 text-center">Suggested queries</p>
              <div className="flex flex-col gap-2">
                {helpOptions.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleHelpOption(opt)}
                    className="flex items-center gap-3 w-full p-2.5 rounded-xl border border-glass-border hover:border-primary-accent/50 hover:bg-primary-accent/10 transition-all text-left text-sm text-gray-300 group"
                  >
                    <span className="text-gray-500 group-hover:text-primary-accent transition-colors">{opt.icon}</span>
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto p-1 rounded-2xl shadow-[0_0_20px_rgba(var(--primary-accent),0.5)] border flex items-center justify-center transition-all ${
          isOpen 
            ? 'bg-slate-800 border-glass-border h-16 w-16' 
            : 'bg-slate-900/80 border-primary-accent hover:border-white h-24 w-24'
        }`}
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {isOpen ? (
            <div className="absolute inset-0 flex items-center justify-center text-white"><X size={24} /></div>
          ) : (
            <model-viewer 
              src="/6-wizard.glb" 
              auto-rotate 
              camera-controls 
              autoplay 
              interaction-prompt="none" 
              disable-zoom 
              style={{ width: '100%', height: '110%', backgroundColor: 'transparent' }}
            ></model-viewer>
          )}
        </div>
      </motion.button>
      
      {!hasGreetingPlayed && !isOpen && (
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2 }}
          className="absolute left-[90px] bottom-5 bg-white text-dark-motive px-4 py-2 rounded-2xl rounded-tl-none text-sm font-semibold pointer-events-auto shadow-lg animate-pulse"
        >
          Click me! 👋
        </motion.div>
      )}

    </div>
  );
};

export default BotAssistant;
