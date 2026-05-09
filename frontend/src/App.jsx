import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import CyberBackground from './components/CyberBackground';
import BotAssistant from './components/BotAssistant';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-motive text-white selection:bg-primary-accent selection:text-dark-motive relative">
      <CyberBackground />
      <BotAssistant />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <footer className="py-12 border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center gap-6 mb-6">
            <a href="https://github.com/anshu1209ol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Anshul Sikarwar's GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ansul-4265a135a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Anshul Sikarwar's LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:anshulsikarwar84@gmail.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email Anshul Sikarwar">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm font-light">© {new Date().getFullYear()} Anshul Sikarwar. Built with Passion and Hardwork ❤️.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
