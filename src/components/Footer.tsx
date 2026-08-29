import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="border-t border-white/10 bg-[#050505] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-sm font-bold text-white tracking-wider font-mono uppercase">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Software Engineer &bull; Computer Science Student &bull; LPU
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-white/20 hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin-link"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-white/20 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email-link"
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Send Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top */}
            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors ml-2"
              aria-label="Scroll to top of page"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Attribution & Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono text-center sm:text-left">
          <div>
            Designed &amp; Built by <span className="text-slate-300 font-medium">{personalInfo.name}</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Aryan Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
