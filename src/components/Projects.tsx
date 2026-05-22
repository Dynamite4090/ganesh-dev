import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ChevronDown, ChevronUp, ExternalLink, ShieldCheck, HelpCircle } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'ue5' | 'unity' | 'ar'>('all');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Shipped' },
    { id: 'ue5', label: 'Unreal Engine 5' },
    { id: 'unity', label: 'Unity Engine' },
    { id: 'ar', label: 'Augmented Spatial (AR)' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  const toggleExpand = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const getBarColor = (category: string) => {
    switch (category) {
      case 'ue5':
        return 'bg-gradient-to-r from-game-orange to-red-500';
      case 'unity':
        return 'bg-gradient-to-r from-game-cyan to-blue-500';
      case 'ar':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      default:
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
    }
  };

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
          <span className="font-mono text-xs text-game-cyan tracking-widest uppercase">// 03. SHIPPED DELIVERABLES</span>
          <h1 className="font-head text-4xl md:text-6xl font-bold uppercase text-white">
            MY <span className="text-game-cyan text-glow-cyan">PROJECTS</span>
          </h1>
        </motion.div>
        <span className="absolute bottom-[-1px] left-0 w-24 h-0.5 bg-game-cyan" />
      </div>

      {/* Filter Tabs Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-game-surface border border-game-border p-3.5 rounded-xl">
        <div className="flex items-center gap-2 text-game-muted font-mono text-xs uppercase pl-2">
          <Filter size={14} className="text-game-cyan" />
          <span>ENGINES_FILTER_STAGED:</span>
        </div>
        
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id as any);
                setExpandedCard(null);
              }}
              className={`font-mono text-xs px-4 py-1.5 border transition-all uppercase tracking-wider rounded cursor-pointer ${
                filter === cat.id
                  ? 'bg-game-cyan/10 border-game-cyan text-game-cyan font-bold text-glow-cyan shadow-[0_0_8px_rgba(0,212,255,0.2)]'
                  : 'bg-transparent border-game-border text-game-muted hover:text-white hover:border-game-border/85'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj, idx) => {
            const isExpanded = expandedCard === proj.id;
            const isFeatured = proj.featured;

            return (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`bg-game-surface border border-game-border rounded-2xl flex flex-col justify-between overflow-hidden relative backdrop-blur-sm group ${
                  isFeatured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Engine indicator strip */}
                <div className={`h-1.5 w-full ${getBarColor(proj.category)}`} />

                <div className="p-6 md:p-8 space-y-6">
                  {/* Top line specifications */}
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="font-mono text-[10px] text-game-cyan tracking-widest bg-game-cyan/5 border border-game-cyan/20 px-2 py-0.5 rounded uppercase font-semibold">
                      {proj.engine}
                    </span>
                    <span className="font-mono text-[10px] text-game-gold tracking-widest bg-game-gold/5 border border-game-gold/20 px-2 py-0.5 rounded uppercase">
                      {proj.badge}
                    </span>
                  </div>

                  {/* Title block */}
                  <div className="space-y-1">
                    <h2 className="font-head text-2xl md:text-3.5xl font-bold uppercase tracking-wider text-white">
                      {proj.title}
                    </h2>
                    <p className="font-mono text-xs text-game-muted uppercase">
                      Type: <span className="text-white font-semibold">{proj.type}</span>
                    </p>
                    <p className="font-mono text-[11px] text-game-cyan uppercase">
                      My Role: <span className="text-game-gold font-bold">{proj.role}</span>
                    </p>
                  </div>

                  {/* Body description */}
                  <p className="text-sm text-game-muted leading-relaxed">
                    {proj.desc}
                  </p>

                  {/* Dynamic Slide-down Spec sheet button */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(proj.id)}
                      className="flex items-center gap-1.5 font-mono text-[11px] text-game-cyan hover:text-white transition-all font-bold tracking-wider uppercase cursor-pointer"
                    >
                      {isExpanded ? (
                        <>
                          <span>Collapse specs dashboard</span>
                          <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          <span>Expand full dissertation specs ...</span>
                          <ChevronDown size={14} />
                        </>
                      )}
                    </button>

                    {/* Features list expansion */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-game-bg/60 border border-game-border p-4 rounded-xl mt-4 space-y-3 font-sans"
                        >
                          <div className="flex items-center gap-1.5 border-b border-game-border/50 pb-2 text-glow-cyan text-game-cyan font-mono text-xs font-bold uppercase">
                            <ShieldCheck size={14} />
                            <span>COMPILE_SPEC_DATA_DEEMED:</span>
                          </div>

                          <ul className="space-y-2.5">
                            {proj.features.map((feature, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex gap-2 text-xs leading-relaxed text-game-muted border-b border-game-border/20 pb-2 last:border-0 last:pb-0"
                              >
                                <span className="text-game-cyan font-mono font-bold select-none">//</span>
                                <div>{feature}</div>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="bg-game-surface border-t border-game-border/50 p-4 px-6 md:px-8 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.pills.map((pill) => (
                      <span
                        key={pill}
                        className="font-mono text-[10px] px-2 py-0.5 bg-game-bg border border-game-border text-game-muted uppercase rounded"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-[10px] text-game-muted uppercase tracking-wider">
                    DECLARED: 2026.Q2
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
