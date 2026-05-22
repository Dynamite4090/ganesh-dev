import React from 'react';
import { motion } from 'motion/react';
import { Gamepad, Code, Brain, Sliders, Glasses, Palette, Layers, GitBranch } from 'lucide-react';
import { skillGroups, skillProficiencies } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  Gamepad: <Gamepad className="text-game-cyan size-6" />,
  Code: <Code className="text-game-cyan size-6 animate-pulse" />,
  Brain: <Brain className="text-game-cyan size-6" />,
  Sliders: <Sliders className="text-game-cyan size-6" />,
  Glasses: <Glasses className="text-game-cyan size-6" />,
  Palette: <Palette className="text-game-cyan size-6" />,
  Layers: <Layers className="text-game-cyan size-6" />,
  GitBranch: <GitBranch className="text-game-cyan size-6" />,
};

export default function Skills() {
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
          <span className="font-mono text-xs text-game-cyan tracking-widest uppercase">// 02. ARSENAL</span>
          <h1 className="font-head text-4xl md:text-6xl font-bold uppercase text-white">
            TECHNICAL <span className="text-game-cyan text-glow-cyan">SKILLS</span>
          </h1>
        </motion.div>
        <span className="absolute bottom-[-1px] left-0 w-24 h-0.5 bg-game-cyan" />
      </div>

      {/* Grid of Tools & Tech */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="font-mono text-xs text-game-cyan tracking-wider uppercase">// TOOLS & TECHNOLOGIES</span>
          <h2 className="font-head text-2xl md:text-3xl font-bold text-white uppercase">What I Build With</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4, borderColor: '#00d4ff' }}
              className="bg-game-surface border border-game-border rounded-xl p-5 flex flex-col justify-between group transition-all"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="bg-game-bg border border-game-border p-2.5 rounded-lg group-hover:bg-game-cyan/5 transition-all">
                    {iconMap[group.icon] || <Code className="text-game-cyan size-6" />}
                  </div>
                  <span className="font-mono text-[9px] text-game-muted font-bold tracking-widest">
                    SYS_LOAD_0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-head text-base font-bold text-white uppercase tracking-wider group-hover:text-game-cyan transition-colors">
                    {group.name}
                  </h3>
                  <p className="text-xs text-game-muted leading-relaxed">
                    {group.desc}
                  </p>
                </div>
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-game-border/30 mt-4">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] px-1.5 py-0.5 bg-game-bg border border-game-border/50 text-game-cyan uppercase rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Engine Depth & Proficiency */}
      <section className="bg-game-surface/40 border border-game-border p-6 md:p-8 rounded-2xl space-y-8 backdrop-blur-sm">
        <div className="space-y-1">
          <span className="font-mono text-xs text-game-cyan tracking-wider uppercase">// FRAMEWORK COMPETENCY</span>
          <h2 className="font-head text-2xl md:text-3xl font-bold text-white uppercase">Engine depth</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skillProficiencies.map((item, idx) => (
            <div key={item.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-head text-base font-bold text-white uppercase tracking-wide">
                  {item.name}
                </span>
                <span className="font-mono text-game-cyan font-bold text-glow-cyan text-xs">
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full h-2 bg-game-bg border border-game-border/80 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-game-cyan to-blue-500 shadow-[0_0_8px_rgba(0,212,255,0.4)]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
