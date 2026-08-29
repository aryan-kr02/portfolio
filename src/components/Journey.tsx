import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Terminal,
  Globe,
  Database,
  Cpu,
  Wrench,
  Sparkles,
  Rocket
} from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';

export const Journey: React.FC = () => {
  const getMilestoneIcon = (milestone: typeof journeyMilestones[0], idx: number) => {
    if (milestone.isCurrent) return <Cpu className="w-5 h-5 text-cyan-300" />;
    switch (idx) {
      case 0:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <Cpu className="w-5 h-5 text-cyan-300" />;
      case 4:
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PROGRESSION &amp; MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            From writing my first Python script in high school to deep diving into systems, databases, algorithms, and practical software engineering.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Central Line (desktop) / Left Line (mobile) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600/30 transform -translate-x-1/2" />

          <div className="space-y-12">
            {journeyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={`${milestone.year}-${idx}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-0`}
                >
                  
                  {/* Center Node / Year Badge */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                    <div
                      className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center backdrop-blur-xl shadow-lg transition-all ${
                        milestone.isCurrent
                          ? 'bg-[#050505] border-cyan-400 text-cyan-300 shadow-cyan-500/30 ring-4 ring-cyan-500/20'
                          : 'bg-[#050505] border-white/20 text-slate-300 hover:border-cyan-400/60 transition-colors'
                      }`}
                    >
                      {getMilestoneIcon(milestone, idx)}
                    </div>
                  </div>

                  {/* Content Card Side */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-10 w-full">
                    <div
                      className={`rounded-3xl backdrop-blur-xl border p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl ${
                        milestone.isCurrent
                          ? 'border-cyan-500/40 bg-white/[0.05] shadow-cyan-500/5'
                          : 'bg-white/[0.03] border-white/10'
                      }`}
                    >
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-white/5 text-cyan-300 border border-white/10">
                          {milestone.year}
                        </span>
                        {milestone.isCurrent && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Focus
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {milestone.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                        {milestone.subtitle}
                      </p>

                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Tag Highlights */}
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/10">
                        {milestone.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/10"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Side for Desktop Symmetry */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
