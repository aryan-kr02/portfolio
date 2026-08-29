import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Info,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No 'Portfolio Showcase' badge) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-cyan-400/90 font-medium text-base">
            &ldquo;Things I&apos;ve built while learning, experimenting, and solving real problems.&rdquo;
          </p>
          <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
            Practical web and software applications designed to solve authentic student and developer challenges.
          </p>
        </div>

        {/* Projects Grid: 2 clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="group rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Preview Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#050505]">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-95" />
                    
                    {/* Status / Category Pill */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-lg bg-[#050505]/80 backdrop-blur-xl text-[11px] font-mono text-cyan-300 border border-white/10">
                        {project.category}
                      </span>
                      {project.inProgress ? (
                        <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 backdrop-blur-xl text-[11px] font-mono text-amber-300 border border-amber-500/30 flex items-center gap-1">
                          <Clock className="w-3 h-3 animate-spin" />
                          <span>in Progress</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-xl text-[11px] font-mono text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Live</span>
                        </span>
                      )}
                    </div>

                    {/* Quick Detail Click Icon */}
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-[#050505]/80 backdrop-blur-xl text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                      title="View Architecture Details"
                      aria-label={`View details for ${project.title}`}
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      {project.inProgress && (
                        <span className="text-[11px] font-mono text-amber-400/90 font-normal">
                          in Progress
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-mono text-cyan-400/80 mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="p-6 sm:p-7 pt-0 border-t border-white/10 mt-4 flex items-center justify-between gap-3">
                  {project.liveUrl ? (
                    <a
                      id={`project-view-btn-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      id={`project-view-btn-${project.id}`}
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-amber-300 hover:text-amber-200 font-medium text-xs border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Details (in Progress)</span>
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <a
                    id={`project-github-btn-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                    aria-label={`GitHub source for ${project.title}`}
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
