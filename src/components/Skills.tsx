import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Cpu,
  Wrench,
  Terminal,
  Sparkles,
  CheckCircle2,
  Database,
  GitBranch,
  Network,
  Binary,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'cs-fundamentals':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'tools':
        return <Wrench className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getSkillIcon = (skillName: string) => {
    const s = skillName.toLowerCase();
    if (s.includes('c++') || s.includes('python') || s.includes('script') || s.includes('html') || s.includes('css')) {
      return <Terminal className="w-3.5 h-3.5 text-cyan-400" />;
    }
    if (s.includes('data structures') || s.includes('algorithms') || s.includes('oop')) {
      return <Binary className="w-3.5 h-3.5 text-emerald-400" />;
    }
    if (s.includes('database') || s.includes('dbms')) {
      return <Database className="w-3.5 h-3.5 text-amber-400" />;
    }
    if (s.includes('git') || s.includes('github')) {
      return <GitBranch className="w-3.5 h-3.5 text-purple-400" />;
    }
    if (s.includes('network') || s.includes('operating')) {
      return <Network className="w-3.5 h-3.5 text-sky-400" />;
    }
    if (s.includes('ai') || s.includes('figma') || s.includes('code')) {
      return <Sparkles className="w-3.5 h-3.5 text-indigo-400" />;
    }
    return <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />;
  };

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({
      ...skill,
      categoryId: cat.id,
      categoryTitle: cat.title
    }))
  );

  const displayedSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter((s) => s.categoryId === activeCategory);

  return (
    <section id="skills" className="pt-4 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with no extra badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Core programming languages, foundational computer science principles, and essential modern developer tools.
          </p>
        </div>

        {/* Master Unified Skills Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent backdrop-blur-xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300"
        >
          {/* Subtle atmospheric ambient glows */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Top Control Bar: Category Filter Pills + Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <button
                id="skill-filter-all"
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeCategory === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                All Skills ({allSkills.length})
              </button>

              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  id={`skill-filter-${category.id}`}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  <span>{category.title}</span>
                </button>
              ))}
            </div>

            <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Active Competencies</span>
            </div>
          </div>

          {/* Unified Dynamic Grid of Interactive Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mt-8">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between group/card relative overflow-hidden ${
                  skill.highlight
                    ? 'bg-white/[0.04] border-white/15 text-white hover:border-cyan-400/50 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-cyan-500/5'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-white/20 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between gap-2 relative z-10">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 shadow-inner group-hover/card:border-cyan-500/30 group-hover/card:bg-cyan-500/10 transition-colors">
                    {getSkillIcon(skill.name)}
                  </div>
                  {skill.highlight && (
                    <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                      Core
                    </span>
                  )}
                </div>

                <div className="mt-3 relative z-10">
                  <div className="text-xs sm:text-sm font-semibold text-white truncate group-hover/card:text-cyan-300 transition-colors" title={skill.name}>
                    {skill.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5 truncate">
                    {skill.categoryTitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Summary Bar inside Single Box */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Consistently building, practicing, and refining core principles</span>
            </div>
            <div className="text-slate-400">
              Total <strong className="text-white font-mono">{allSkills.length}</strong> Skills &bull; Strongly Focused
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
