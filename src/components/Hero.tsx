import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Send,
  User
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Google Drive multi-source image candidates for high compatibility across all networks & browsers
const DRIVE_PHOTO_SOURCES = [
  "https://lh3.googleusercontent.com/d/1XmgKyHb9y04pp2h6HuC2Pc5rdM8BxOXA",
  "https://drive.google.com/thumbnail?id=1XmgKyHb9y04pp2h6HuC2Pc5rdM8BxOXA&sz=w1000",
  "https://drive.usercontent.google.com/download?id=1XmgKyHb9y04pp2h6HuC2Pc5rdM8BxOXA&export=view",
  "./profile.jpg"
];

export const Hero: React.FC = () => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (sourceIndex < DRIVE_PHOTO_SOURCES.length - 1) {
      setSourceIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 sm:pt-36 pb-20 sm:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col space-y-7"
        >
          {/* Top Status: AVAILABLE FOR OPPORTUNITIES / INDIA */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-emerald-400 font-semibold tracking-wide uppercase">
              AVAILABLE FOR OPPORTUNITIES
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400 uppercase tracking-wider">INDIA</span>
          </div>

          {/* Profile Photo & Headline Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 pt-1">
            
            {/* Squircle Photo Avatar - Fixed Universal Display */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1 bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 shadow-xl shadow-blue-600/25 flex-shrink-0">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900 flex items-center justify-center relative">
                {!imageError ? (
                  <img
                    src={DRIVE_PHOTO_SOURCES[sourceIndex]}
                    alt={`${personalInfo.name} - Profile Photo`}
                    loading="eager"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center filter contrast-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-slate-400">
                    <User className="w-8 h-8 text-blue-400" />
                    <span className="text-[10px] font-mono text-slate-400 mt-1">Aryan Kr</span>
                  </div>
                )}
              </div>

              {/* Online Green Beacon Badge at bottom right of avatar */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#050505] flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#050505]" />
              </div>
            </div>

            {/* Headline and Subtitle */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1">
                <span>Hi, I&apos;m {personalInfo.name}</span>
                <span className="text-blue-500 font-black">.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-200">
                Computer Science Student &amp; Aspiring Software Engineer
              </p>
            </div>

          </div>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            Building my foundation in software engineering through C++, Data Structures &amp; Algorithms, web development, and hands-on projects.
          </p>

          {/* Action Buttons: View My Projects -> & Let's Connect */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            {/* View My Projects Button */}
            <a
              id="hero-view-projects-btn"
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 flex items-center gap-2.5 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Let's Connect Button */}
            <a
              id="hero-lets-connect-btn"
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-slate-300" />
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Monospace Code Terminal Strip with Social Links */}
          <div className="mt-4 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Code Snippet Box */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md shadow-inner max-w-fit">
              <span className="text-cyan-400 font-bold">&gt;_</span>
              <span className="text-slate-400">main.cpp:</span>
              <span className="text-slate-200">while(learning) build_software();</span>
            </div>

            {/* Social Icons on Right */}
            <div className="flex items-center gap-2">
              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};
