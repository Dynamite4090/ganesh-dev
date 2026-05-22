import React, { useState } from 'react';
import { Menu, X, Gamepad } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-game-bg/90 backdrop-blur-md border-b border-game-border z-50 flex items-center justify-between px-6 md:px-12 transition-all">
      {/* Logo */}
      <button 
        onClick={() => handleNavClick('home')}
        className="flex items-center gap-2 cursor-pointer font-mono text-game-cyan text-sm tracking-widest hover:brightness-110 active:scale-95 transition-all text-glow-cyan font-bold"
        id="nav-logo-btn"
      >
        <Gamepad size={18} className="animate-pulse" />
        <span>GANESH_CHAVAN.DEV</span>
      </button>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className={`relative cursor-pointer py-1 font-head text-sm font-semibold tracking-wider uppercase transition-all duration-200 hover:text-game-cyan ${
                activeTab === item.id ? 'text-game-cyan' : 'text-game-muted'
              }`}
              id={`nav-${item.id}-btn`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-game-cyan shadow-[0_0_8px_rgba(0,212,255,0.7)]" />
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-game-muted hover:text-game-cyan p-1 transition-all"
        aria-label="Toggle navigation menu"
        id="hamburger-btn"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-game-bg border-b border-game-border py-4 flex flex-col md:hidden animate-fade-in z-40">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-8 py-3 font-head text-base font-semibold tracking-wide uppercase transition-all border-l-2 ${
                    activeTab === item.id
                      ? 'text-game-cyan bg-game-surface/50 border-game-cyan text-glow-cyan'
                      : 'text-game-muted border-transparent hover:bg-game-surface/35 hover:text-game-cyan'
                  }`}
                  id={`nav-mob-${item.id}-btn`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
