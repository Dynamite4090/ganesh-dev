import React from 'react';
import { motion } from 'motion/react';
import { Gamepad, Brain, Smartphone, Award, ArrowRight, Activity, Calendar, FileText } from 'lucide-react';
import { contactInfo } from '../data';

interface HomeProps {
  onNavigate: (tab: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Hardcoded key statistics
  const stats = [
    { num: '8.68', title: 'ADYPU CGPA', label: 'First Class & Distinction' },
    { num: '3', title: 'Mo. Internship', label: 'Mudgal Overseas' },
    { num: '10+', title: 'Active Projects', label: 'Unity, UE5 & AR' },
    { num: '0', title: 'Backlogs', label: '100% Course Cleared' },
  ];

  const highlights = [
    {
      icon: <Gamepad className="text-game-cyan size-8" />,
      title: 'Gameplay Programming',
      desc: 'Builds end-to-end game systems including character physics, customized controller schemes, weapons, and wave management in Unity (C#) & Unreal Engine 5 (C++).',
    },
    {
      icon: <Brain className="text-game-orange size-8" />,
      title: 'AI & Systems Dev',
      desc: 'Specializes in enemy behavior trees, sensor decorators, state matrices, customizable difficulty spawns, and waypoint AI bots with automated stuck-detection.',
    },
    {
      icon: <Smartphone className="text-purple-400 size-8" />,
      title: 'AR/VR Developer',
      desc: 'Creates mobile augmented reality software with marker tracking, face morphing, and immersive environment layouts using Unity 6 + AR Foundation.',
    },
  ];

  return (
    <div className="relative min-height-screen">
      {/* Hero Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-game-bg/20 to-game-bg pointer-events-none z-0" />
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00d4ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" />

      {/* Hero Core */}
      <section className="relative z-10 px-6 md:px-12 pt-16 md:pt-32 pb-16 max-w-6xl mx-auto flex flex-col justify-center min-h-[85vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 border border-game-border bg-game-surface/85 px-4 py-1.5 rounded-full font-mono text-xs text-game-cyan tracking-wider uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-game-cyan animate-ping" />
            <span>GAMEPLAY PROGRAMMER · PUNE, INDIA</span>
          </div>

          {/* Name Header */}
          <div className="space-y-1">
            <h1 className="font-head text-5xl md:text-8xl tracking-tight font-bold text-white uppercase leading-none">
              GANESH <span className="text-game-cyan text-glow-cyan">CHAVAN</span>
            </h1>
            <p className="font-head text-xl md:text-3xl text-game-muted font-medium tracking-widest uppercase">
              Unity 6 · Unreal Engine 5 · AR / VR Solutions
            </p>
          </div>

          {/* Description */}
          <p className="text-game-muted text-base max-w-2xl leading-relaxed">
            I'm a final-year Bachelor of Computer Applications (Game Development) student at <span className="text-white font-medium">Ajeenkya DY Patil University, Pune</span>. I love gameplay programming — from writing clean weapon reload systems to enemy Behavior Trees and real-time mesh-buffered drift controllers.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 bg-game-cyan hover:bg-game-cyan/80 text-black py-3 px-6 font-head font-bold text-sm tracking-wider uppercase rounded-lg cursor-pointer transition-all transform hover:-translate-y-0.5"
              id="cta-projects-btn"
            >
              <span>Explore My Work</span>
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('resume')}
              className="flex items-center gap-2 bg-game-orange hover:bg-game-orange/80 text-black py-3 px-6 font-head font-bold text-sm tracking-wider uppercase rounded-lg cursor-pointer transition-all transform hover:-translate-y-0.5 shadow-[0_0_12px_rgba(255,107,53,0.3)] hover:shadow-[0_0_18px_rgba(255,107,53,0.5)]"
              id="cta-resume-btn"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-game-cyan/40 hover:border-game-cyan/100 text-game-cyan hover:bg-game-cyan/5 py-3 px-6 font-head font-bold text-sm tracking-wider uppercase rounded-lg cursor-pointer transition-all transform hover:-translate-y-0.5 text-glow-cyan"
              id="cta-contact-btn"
            >
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 border-t border-game-border/65">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-game-surface/40 border border-game-border p-4 rounded-xl backdrop-blur-sm"
              >
                <div className="font-head text-3xl md:text-4xl font-bold text-game-cyan text-glow-cyan leading-none">
                  {stat.num}
                </div>
                <div className="font-head text-xs font-semibold uppercase tracking-wider text-white mt-2">
                  {stat.title}
                </div>
                <div className="font-mono text-[10px] text-game-muted mt-0.5">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Horizontal Strip Section */}
      <section className="bg-game-surface/90 border-y border-game-border/80 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 bg-game-bg/60 p-3 rounded-lg border border-game-border/50 h-fit self-start">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-head text-lg font-bold uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-game-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Works Spotlight */}
      <section className="px-6 md:px-12 py-20 max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <span className="font-mono text-xs text-game-cyan tracking-widest uppercase">// SPOTLIGHT DELIVERABLES</span>
            <h2 className="font-head text-3xl md:text-5xl font-bold uppercase text-white">
              Featured <span>Game Builds</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-1.5 font-head text-sm text-game-cyan hover:text-white transition-all group font-bold tracking-wider uppercase cursor-pointer"
            id="view-all-projects-btn"
          >
            <span>Browse Shipped Suite</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dread Sands Spotlight */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between bg-game-surface/30 border border-game-border p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm cursor-pointer"
            onClick={() => onNavigate('projects')}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-game-orange/5 rounded-full filter blur-xl group-hover:bg-game-orange/10 transition-all duration-300 pointer-events-none" />
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-game-orange tracking-widest bg-game-orange/10 px-3 py-1 rounded border border-game-orange/20 uppercase font-semibold">
                  UNREAL ENGINE 5 · C++
                </span>
                <span className="font-mono text-[10px] text-game-muted uppercase">ACADEMIC EXCELLENCE</span>
              </div>
              <h3 className="font-head text-3xl font-bold text-white tracking-wide group-hover:text-game-cyan transition-colors">
                DREAD SANDS
              </h3>
              <p className="text-xs text-game-cyan tracking-wider font-mono uppercase bg-game-border/30 px-2 py-0.5 rounded w-fit">
                Role: Enemy AI · Main Menu · UI/UX
              </p>
              <p className="text-sm text-game-muted leading-relaxed">
                First-Person wave-based survival shooter set in Al-Tariq, ancient desert ruins. Built featuring full Behavior Tree AI pathfinding, dynamic difficulty scalability scaling from 70 to 400 cm/s, hitscan weapons with reload thresholds, and an iThenticate-certified thesis dissertation.
              </p>
            </div>
            <div className="flex justify-between items-center pt-8 border-t border-game-border/40 mt-8">
              <div className="flex gap-2">
                <span className="text-[10px] font-mono border border-game-border px-2 py-0.5 rounded bg-game-bg text-game-muted">UE5</span>
                <span className="text-[10px] font-mono border border-game-border px-2 py-0.5 rounded bg-game-bg text-game-muted">C++</span>
                <span className="text-[10px] font-mono border border-game-border px-2 py-0.5 rounded bg-game-bg text-game-muted">Behavior Trees</span>
              </div>
              <span className="font-mono text-[11px] text-game-orange uppercase tracking-wider font-semibold">AI PIPELINE ENGINE →</span>
            </div>
          </motion.div>

          {/* Hyper-Drive Spotlight */}
          <motion.div
            whileHover={{ y: -6 }}
            className="group flex flex-col justify-between bg-game-surface/30 border border-game-border p-6 rounded-2xl relative overflow-hidden backdrop-blur-sm cursor-pointer"
            onClick={() => onNavigate('projects')}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-game-cyan/5 rounded-full filter blur-xl group-hover:bg-game-cyan/10 transition-all duration-300 pointer-events-none" />
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-game-cyan tracking-widest bg-game-cyan/10 px-3 py-1 rounded border border-game-cyan/20 uppercase font-semibold">
                  UNITY 6 · C#
                </span>
                <span className="font-mono text-[10px] text-game-muted uppercase">SOLO COMPREHENSIVE</span>
              </div>
              <h3 className="font-head text-3xl font-bold text-white tracking-wide group-hover:text-game-cyan transition-colors">
                HYPER-DRIVE
              </h3>
              <p className="text-xs text-game-cyan tracking-wider font-mono uppercase bg-game-border/30 px-2 py-0.5 rounded w-fit">
                Role: Solo Engine Arch & Physics
              </p>
              <p className="text-sm text-game-muted leading-relaxed">
                Feature-complete 3D racing simulator featuring dynamic vehicle mechanics tuned to Center-of-Mass matrices, real-time drift graphic meshes tracking path coordinates, splitscreen support, and star metrics PlayerPrefs data storage across multiple biomes.
              </p>
            </div>
            <div className="flex justify-between items-center pt-8 border-t border-game-border/40 mt-8">
              <div className="flex gap-2">
                <span className="text-[10px] font-mono border border-game-border px-2 py-0.5 rounded bg-game-bg text-game-muted">Unity 6</span>
                <span className="text-[10px] font-mono border border-game-border px-2 py-0.5 rounded bg-game-bg text-game-muted">C#</span>
                <span className="text-[10px] font-mono border border-game-border px-2 py-0.5 rounded bg-game-bg text-game-muted">WheelCollider</span>
              </div>
              <span className="font-mono text-[11px] text-game-cyan uppercase tracking-wider font-semibold">WHEEL PHYSICS ENGINE →</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Embedded Terminal Status Banner */}
      <section className="bg-game-surface/20 border-t border-game-border py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center font-mono text-[11px] text-game-muted gap-2">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-game-cyan animate-pulse" />
            <span>DEV CORE SYSTEM ACTIVE</span>
          </div>
          <div>
            <span>LOCATION: PUNE, INDIA · STATUS: <span className="text-game-cyan font-semibold">READY_FOR_HIRE</span></span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>CAMPUS_RELEASE_VERSION: 2026.05</span>
          </div>
        </div>
      </section>
    </div>
  );
}
