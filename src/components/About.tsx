import React from 'react';
import { motion } from 'motion/react';
import {
  GraduationCap,
  Target,
  CheckCircle2,
  Award,
  Building2,
  Sparkles,
  BookOpen,
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; GOALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-lg text-cyan-400/90 font-medium">
            &ldquo;More than just code.&rdquo;
          </p>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            {personalInfo.shortBio}
          </p>
        </div>

        {/* 2 Major Pillar Cards: Education & Career */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Education Card (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl -z-10 group-hover:bg-cyan-500/10 transition-colors" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Academic Journey</span>
                    <h3 className="text-xl font-bold text-white">Education History</h3>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Credentials</span>
                </span>
              </div>

              {/* Education List */}
              <div className="space-y-4">
                
                {/* 1. Graduation Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-cyan-500/30 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded-md bg-cyan-500/15 border border-cyan-500/30">
                          Graduation
                        </span>
                        <span className="text-xs text-slate-400 font-mono">B.Tech CSE</span>
                      </div>
                      <div className="text-base font-bold text-white mt-1.5">
                        Lovely Professional University
                      </div>
                      <div className="text-xs text-slate-300 font-medium">
                        Kapurthala, Punjab &bull; Class of {personalInfo.gradYear}
                      </div>
                    </div>

                    {/* Overall 1st Year CGPA Badge */}
                    <div className="sm:text-right flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 p-2.5 sm:p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                      <span className="text-[10px] uppercase font-mono text-slate-400">1st Year CGPA</span>
                      <span className="text-base font-extrabold text-cyan-300 font-mono">7.44</span>
                    </div>
                  </div>

                  {/* Semester Breakdown Grid */}
                  <div className="mt-3.5 pt-3.5 border-t border-white/10 grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">1st Semester TGPA</span>
                      <span className="text-xs font-bold text-white font-mono bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/30">
                        7.78
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between">
                      <span className="text-xs text-slate-300 font-medium">2nd Semester TGPA</span>
                      <span className="text-xs font-bold text-white font-mono bg-blue-500/20 px-2 py-0.5 rounded border border-blue-400/30">
                        7.22
                      </span>
                    </div>
                  </div>

                  {/* Core Coursework Highlights */}
                  <div className="mt-3.5 pt-3 border-t border-white/10">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Core Coursework</span>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">Data Structures &amp; Algorithms</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">Object-Oriented Programming (OOP)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">Database Systems (DBMS)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">Computer Networks</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. 12th & 10th School Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  
                  {/* Class 12th Card */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-cyan-300 font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          Class XII (12th)
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                          75% Result
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white mt-2.5">
                        Pitts Modern School
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-cyan-400" />
                        <span>Gomia</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/10 text-[11px] text-slate-400">
                      Senior Secondary Examination
                    </div>
                  </div>

                  {/* Class 10th Card */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-colors">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-cyan-300 font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10">
                          Class X (10th)
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30">
                          86% Result
                        </span>
                      </div>
                      <div className="text-sm font-bold text-white mt-2.5">
                        D.A.V Public School
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-cyan-400" />
                        <span>Ara Kuju</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/10 text-[11px] text-slate-400">
                      Secondary School Certificate
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

          {/* Career & Vision Card (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-500/10 to-blue-500/5 rounded-full blur-2xl -z-10 group-hover:from-cyan-500/15 transition-colors" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-inner">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Focus &amp; Goal</span>
                  <h3 className="text-xl font-bold text-white">Career Vision</h3>
                </div>
              </div>

              {/* Career Vision Card Content */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 relative space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                  <Compass className="w-4 h-4" />
                  <span>FUTURE HORIZON</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  I want to build simple, fast, and easy-to-use software that helps people solve everyday problems. My focus is on writing clean code, learning new technologies every day, and growing into a skilled full-stack engineer who creates meaningful digital products.
                </p>
              </div>

              {/* Key Philosophy Badges */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Development Principles</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>Clean Architecture</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>Continuous Learning</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>Problem Solving</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>User Centric Design</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
