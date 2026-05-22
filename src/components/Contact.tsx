import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Youtube, Github, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { contactInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Native mail trigger fallback + console logging for visual UX integration
    console.log('STAGED MESSAGE SUBMISSION:', formData);
    setIsSent(true);
    setTimeout(() => {
      // Create body text
      const bodyText = `Hi Ganesh,\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`;
      // Open default mail client
      window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject || 'Game Dev Collaboration')}&body=${encodeURIComponent(bodyText)}`;
      setIsSent(false);
    }, 1200);
  };

  const contactLinks = [
    {
      id: 'email',
      icon: <Mail className="text-game-cyan size-5" />,
      label: 'EMAIL ADDRESS',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      desc: 'Response within 24 hours',
    },
    {
      id: 'phone',
      icon: <Phone className="text-game-cyan size-5" />,
      label: 'PHONE CAPABILITY',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`,
      desc: 'Available for call & Whatsapp',
    },
    {
      id: 'linkedin',
      icon: <Linkedin className="text-game-cyan size-5" />,
      label: 'LINKEDIN PROFILE',
      value: 'linkedin.com/in/ganesh-chavan',
      href: contactInfo.linkedin,
      desc: 'Active network logs',
      external: true,
    },
    {
      id: 'youtube',
      icon: <Youtube className="text-game-cyan size-5" />,
      label: 'YOUTUBE PLAYLIST',
      value: 'Gameplay Demos & Demos',
      href: contactInfo.youtube,
      desc: 'Watch engine videos',
      external: true,
    },
    {
      id: 'github',
      icon: <Github className="text-game-cyan size-5" />,
      label: 'GITHUB COMMITS',
      value: 'github.com/YourGitHub',
      href: contactInfo.github,
      desc: 'Check live script assets',
      external: true,
    },
  ];

  return (
    <div className="px-6 md:px-12 py-24 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="relative border-b border-game-border pb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <span className="font-mono text-xs text-game-cyan tracking-widest uppercase">// 05. CORE PORTS</span>
          <h1 className="font-head text-4xl md:text-6xl font-bold uppercase text-white">
            GET IN <span className="text-game-cyan text-glow-cyan">TOUCH</span>
          </h1>
        </motion.div>
        <span className="absolute bottom-[-1px] left-0 w-24 h-0.5 bg-game-cyan" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column: Direct reach routes */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-game-cyan tracking-wider uppercase">// COMMUNICATIONS</span>
            <h2 className="font-head text-2xl md:text-3xl font-bold text-white uppercase">Let's Connect</h2>
            <p className="text-sm text-game-muted leading-relaxed">
              Open to Gameplay Programmer roles, Unity / Unreal junior and internship opportunities, or interesting academic collaborations. For queries, clicking below will dispatch directly.
            </p>
          </div>

          <div className="space-y-3 font-sans">
            {contactLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 6, borderColor: '#00d4ff' }}
                className="flex items-center gap-4 bg-game-surface border border-game-border p-4 rounded-xl hover:bg-game-cyan/5 transition-all text-left"
              >
                <div className="bg-game-bg border border-game-border p-3 rounded-lg flex-shrink-0">
                  {link.icon}
                </div>
                <div className="space-y-0.5 flex-grow min-w-0">
                  <div className="font-mono text-[9px] text-game-cyan tracking-wider">{link.label}</div>
                  <div className="font-semibold text-sm text-white truncate">{link.value}</div>
                  <div className="text-[10px] text-game-muted font-mono">{link.desc}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right column: Availability metrics or quick custom mail form */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-game-cyan tracking-wider uppercase">// DISPATCH PORTS</span>
            <h2 className="font-head text-2xl md:text-3xl font-bold text-white uppercase">Hiring Radar</h2>
          </div>

          {/* Hiring Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-game-surface border-l-4 border-game-cyan border border-game-border p-6 rounded-r-xl space-y-4"
          >
            <div className="flex items-center gap-2 text-game-cyan font-head text-lg font-bold uppercase tracking-wider">
              <span className="w-2.5 h-2.5 bg-game-cyan rounded-full animate-ping" />
              <span>{contactInfo.status}</span>
            </div>

            <div className="space-y-3 text-xs font-sans">
              <div className="grid grid-cols-2 border-b border-game-border/30 pb-2">
                <span className="text-game-muted uppercase font-mono text-[10px]">CURRENT LOOKING:</span>
                <span className="text-white font-bold text-right">{contactInfo.lookingFor}</span>
              </div>
              <div className="grid grid-cols-2 border-b border-game-border/30 pb-2">
                <span className="text-game-muted uppercase font-mono text-[10px]">SPATIAL ORIGINS:</span>
                <span className="text-white font-semibold text-right">{contactInfo.location}</span>
              </div>
              <div className="grid grid-cols-2 border-b border-game-border/30 pb-2">
                <span className="text-game-muted uppercase font-mono text-[10px]">CORE ENGINES:</span>
                <span className="text-white font-semibold text-right">Unity 6, Unreal Engine 5</span>
              </div>
            </div>

            <div className="bg-game-bg/60 border border-game-border p-3.5 rounded-lg text-xs font-sans text-game-muted leading-relaxed">
              <strong>Graduation Status:</strong> Class of 2026. Successfully finished academic semesters. Awaiting final grading index, holding zero backlogs.
            </div>
          </motion.div>

          {/* Core Interactive Message Dispatcher */}
          <form onSubmit={handleSubmit} className="bg-game-surface border border-game-border p-6 rounded-xl space-y-4 text-sm font-sans">
            <h3 className="font-head text-sm font-bold uppercase tracking-wider text-white border-b border-game-border/60 pb-2">
              Compose Direct Transmission
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-game-muted uppercase">Sender Name</label>
                <input
                  type="text"
                  required
                  placeholder="Gabe Newell"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-game-bg border border-game-border text-xs px-3 py-2 rounded focus:border-game-cyan outline-none text-white font-medium"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-game-muted uppercase">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-game-bg border border-game-border text-xs px-3 py-2 rounded focus:border-game-cyan outline-none text-white font-medium"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-game-muted uppercase">Subject Port</label>
              <input
                type="text"
                required
                placeholder="Game Programming Role Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-game-bg border border-game-border text-xs px-3 py-2 rounded focus:border-game-cyan outline-none text-white font-medium"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-game-muted uppercase">Message Load</label>
              <textarea
                required
                rows={3}
                placeholder="Compose details of opportunities, interview offers, or collaboration queries..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-game-bg border border-game-border text-xs px-3 py-2 rounded focus:border-game-cyan outline-none text-white font-medium resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSent}
              className="w-full flex items-center justify-center gap-2 bg-game-cyan text-black hover:bg-game-cyan/80 py-2 px-4 rounded font-head font-bold text-xs tracking-wider uppercase cursor-pointer transition-all uppercase"
            >
              {isSent ? (
                <>
                  <CheckCircle2 size={14} className="animate-bounce" />
                  <span>DISPATCHING CLIENT_COMM_PORT...</span>
                </>
              ) : (
                <>
                  <Send size={14} />
                  <span>DISPATCH TO GANESH</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
