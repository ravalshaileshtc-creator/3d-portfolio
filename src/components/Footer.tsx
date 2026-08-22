import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0d0e14] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4cd7f6] to-[#b4c5ff] p-[1px]">
              <div className="w-full h-full bg-[#11131b] rounded-[7px] flex items-center justify-center font-mono font-bold text-xs text-[#4cd7f6]">
                SR
              </div>
            </div>
            <div className="text-xs font-mono text-slate-300">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#projects" className="hover:text-[#4cd7f6]">Projects</a>
            <a href="#services" className="hover:text-[#4cd7f6]">Services</a>
            <a href="#skills" className="hover:text-[#4cd7f6]">Skills</a>
            <a href="#about" className="hover:text-[#4cd7f6]">About</a>
            <a href="#contact" className="hover:text-[#4cd7f6]">Contact</a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#4cd7f6]" />
          </button>

        </div>
      </div>
    </footer>
  );
};
