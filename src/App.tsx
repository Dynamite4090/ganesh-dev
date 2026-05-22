/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ResumeViewer from './components/ResumeViewer';
import AccessDenied from './components/AccessDenied';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Automatic scroll reset on tab change to guarantee seamless view starts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [activeTab]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={(tab) => setActiveTab(tab)} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <ResumeViewer />;
      default:
        return <Home onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="min-h-screen bg-game-bg text-white font-sans overflow-x-hidden scanline-overlay selection:bg-game-cyan/35 selection:text-white flex flex-col justify-between">
      {/* Global DevTools Watchdog & Intercept Layer */}
      <AccessDenied onBypass={() => {}} />

      {/* Top Fixed Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Pages Wrapper */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Branded Footer */}
      <footer className="bg-game-surface border-t border-game-border py-8 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div className="space-y-1 font-mono text-xs">
          <p className="text-white font-semibold flex items-center gap-1.5 justify-center sm:justify-start">
            <span className="inline-block w-2-2 h-2 bg-game-cyan rounded-full shadow-[0_0_4px_#00d4ff] align-middle" />
            <span>© 2026 GANESH CHAVAN</span>
          </p>
          <p className="text-game-muted">GAMEPLAY PROGRAMMER · SPECIALIZING IN GAME SYSTEMS</p>
        </div>

        <div className="font-mono text-[10px] text-game-cyan tracking-widest text-glow-cyan">
          UNITY 6 · UNREAL ENGINE 5 · AR / VR SPATIAL SYSTEMS
        </div>
      </footer>
    </div>
  );
}
