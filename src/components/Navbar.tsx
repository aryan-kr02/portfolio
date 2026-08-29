import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Send, Terminal, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Beyond Code', href: '#beyond-code' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand & Badge */}
          <div className="flex items-center gap-3">
            <a
              id="nav-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-1.5 text-xl font-bold text-white tracking-tight"
            >
              <span>Aryan Kr</span>
              <span className="text-blue-500 font-extrabold">.</span>
            </a>

            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-[11px] font-mono tracking-wider text-slate-300 uppercase">
              STUDENT PORTFOLIO
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-blue-500/20 border border-blue-400/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTAs: Resume & Let's Connect */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Resume Button */}
            <a
              id="nav-resume-btn"
              href={personalInfo.resumeUrl || "https://drive.google.com/file/d/1MV3mLjwbF7SNiJ1NIGGt6QtbVWi-82QO/view?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-200 shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Resume</span>
            </a>

            {/* Let's Connect Button */}
            <a
              id="nav-lets-connect-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full bg-white text-slate-950 hover:bg-slate-100 transition-all duration-200 shadow-md shadow-white/10 hover:shadow-white/20 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Let&apos;s Connect</span>
              <Send className="w-3.5 h-3.5 text-slate-900 rotate-12" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-nav-resume-mini-btn"
              href={personalInfo.resumeUrl || "https://drive.google.com/file/d/1MV3mLjwbF7SNiJ1NIGGt6QtbVWi-82QO/view?usp=sharing"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 text-slate-200 border border-white/15 flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              <span>Resume</span>
            </a>
            <button
              id="nav-mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-500/15 text-cyan-300 font-semibold border border-blue-400/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  id="mobile-nav-connect-btn"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-950 font-bold text-sm shadow-md cursor-pointer"
                >
                  <span>Let&apos;s Connect</span>
                  <Send className="w-4 h-4 text-slate-950" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
