import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Brain,
  Gamepad2,
  Dumbbell,
  Headphones,
  BookOpen,
  Compass,
  Sparkles,
  Quote
} from 'lucide-react';
import { beyondCodeInterests, personalStatement } from '../data/portfolioData';

export const BeyondCode: React.FC = () => {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gamepad2':
        return <Gamepad2 className="w-5 h-5 text-cyan-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-emerald-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-pink-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="beyond-code" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No 'Holistic Perspective' badge) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Beyond Code
          </h2>
          <p className="mt-3 text-cyan-400/90 font-medium text-base">
            &ldquo;Who I am outside of programming.&rdquo;
          </p>
        </div>

        {/* Featured Personal Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12 p-7 sm:p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-xl relative overflow-hidden text-center"
        >
          <Quote className="w-8 h-8 text-cyan-400/30 mx-auto mb-3" />
          <p className="text-base sm:text-lg text-slate-200 font-medium italic leading-relaxed max-w-2xl mx-auto">
            &ldquo;{personalStatement}&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
            <span>&mdash; Aryan Kumar</span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-slate-400">Student &amp; Continuous Learner</span>
          </div>
        </motion.div>

        {/* Authentic Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {beyondCodeInterests.map((interest, idx) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors shadow-inner">
                    {getInterestIcon(interest.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {interest.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5 mb-2">
                  {interest.tagline}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Personal Interest</span>
                <span className="text-cyan-400/70 group-hover:text-cyan-300">&bull; Active</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
