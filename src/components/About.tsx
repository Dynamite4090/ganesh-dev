import React from 'react';
import { motion } from 'motion/react';
import { User, ClipboardList, Briefcase, GraduationCap, MapPin, Mail, Award, CheckCircle } from 'lucide-react';
import { contactInfo, educationData } from '../data';

export default function About() {
  const generalInfo = [
    { label: 'Full Name', value: 'Ganesh Chavan' },
    { label: 'Current Address', value: 'Pune, Maharashtra' },
    { label: 'Active Status', value: 'Open to Work', highlight: true },
    { label: 'Graduating Degree', value: 'BCA Game Development' },
    { label: 'Consolidated CGPA', value: '8.68 (Distinction)' },
    { label: 'E-mail Contact', value: 'chavanganesh9405543605@gmail.com', smallText: true },
  ];

  const languages = [
    { name: 'English', percentage: '85%' },
    { name: 'Hindi', percentage: '95%' },
    { name: 'Marathi', percentage: '100%' },
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
          <span className="font-mono text-xs text-game-cyan tracking-widest uppercase">// 01. WHO I AM</span>
          <h1 className="font-head text-4xl md:text-6xl font-bold uppercase text-white">
            ABOUT <span className="text-game-cyan text-glow-cyan">ME</span>
          </h1>
        </motion.div>
        <span className="absolute bottom-[-1px] left-0 w-24 h-0.5 bg-game-cyan" />
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Hand: Key Information Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-game-surface border border-game-border rounded-xl p-6 space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-game-border/60 pb-3">
              <ClipboardList className="text-game-cyan size-5" />
              <h2 className="font-head text-sm font-bold uppercase tracking-widest text-white">// BIO LOGS</h2>
            </div>

            <div className="space-y-4">
              {generalInfo.map((info) => (
                <div key={info.label} className="flex justify-between items-center border-b border-game-border/30 pb-2 text-sm">
                  <span className="font-mono text-xs text-game-muted uppercase">{info.label}</span>
                  <span className={`font-semibold text-right ${
                    info.highlight 
                      ? 'text-game-cyan text-glow-cyan' 
                      : info.smallText 
                      ? 'text-white text-xs break-all max-w-[200px]' 
                      : 'text-white'
                  }`}>
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Progress Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-game-surface border border-game-border rounded-xl p-6 space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-game-border/60 pb-3">
              <User className="text-game-cyan size-5" />
              <h2 className="font-head text-sm font-bold uppercase tracking-widest text-white">// LANGUAGES</h2>
            </div>

            <div className="space-y-4 font-sans">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="font-mono text-game-cyan">{lang.percentage}</span>
                  </div>
                  <div className="w-full h-1.5 bg-game-bg border border-game-border/50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: lang.percentage }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-game-cyan shadow-[0_0_8px_rgba(0,212,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Hand: Structured Biography & Timeline */}
        <div className="lg:col-span-2 space-y-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-head text-2xl font-bold uppercase tracking-wider text-white">
              Who I Am &amp; My Game Dev Journey
            </h3>
            <p className="text-game-muted leading-relaxed">
              I am a final-year <strong className="text-white">BCA Game Development</strong> student at Ajeenkya DY Patil University, Pune, maintaining a cumulative <strong className="text-game-cyan font-medium">CGPA of 8.68</strong>. More than anything, I am someone who genuinely loves building games, analyzing gameplay matrices, and understanding the core mathematics behind satisfying mechanics.
            </p>
            <p className="text-game-muted leading-relaxed">
              I specialize in gameplay systems and algorithmic programming. My toolkit focuses on <strong className="text-white">Unity 6 (C#)</strong> and <strong className="text-white">Unreal Engine 5 (C++)</strong>. I have successfully shipped everything from a solo-built 3D racing engine with rigid bodies and driftMark meshes to an intense Unreal Engine 5 first-person sandbox completed alongside a small developer team, where I acted as the primary Gameplay and Enemy AI scriptwriter.
            </p>
            <p className="text-game-muted leading-relaxed">
              Beyond the actual script editor, I care deeply about user feelings. How does a machine gun feel when it triggers? How does an enemy pathfind around obstacles when target line of sight is broken? To me, it is always these tiny micro-interactions that determine whether a player puts down a game or wants to keep playing, which is why I enjoy researching gameplay details.
            </p>
          </motion.div>

          {/* Academic Background Progression */}
          <div className="space-y-6">
            <h3 className="font-head text-2xl font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <GraduationCap className="text-game-cyan text-glow-cyan" />
              <span>Academic Chronology</span>
            </h3>

            <div className="border-l-2 border-game-border pl-6 space-y-8 ml-3">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative space-y-1.5"
                >
                  {/* Dot */}
                  <span className="absolute left-[-31px] top-1 w-3 h-3 rounded-full bg-game-cyan shadow-[0_0_6px_rgba(0,212,255,0.7)] border-2 border-game-bg" />

                  <span className="font-mono text-xs text-game-cyan font-semibold tracking-wider">
                    {edu.years}
                  </span>
                  <h4 className="font-head text-lg font-bold text-white uppercase tracking-normal">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-game-muted font-mono uppercase">
                    {edu.school}
                  </p>
                  
                  {edu.cgpa && (
                    <span className="inline-block bg-game-surface border border-game-cyan/20 rounded px-2.5 py-0.5 text-xs text-game-cyan font-mono font-semibold">
                      Rank: {edu.cgpa}
                    </span>
                  )}

                  {edu.notes && (
                    <ul className="list-disc list-inside space-y-1 text-xs text-game-muted mt-2 pl-1">
                      {edu.notes.map((note, nIdx) => (
                        <li key={nIdx} className="leading-relaxed">
                          {note}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
