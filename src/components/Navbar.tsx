import React, { useState, useEffect } from 'react';
import { Phone, FileText, Menu, X, Sparkles, Code2, Sun, Moon, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, theme = 'dark', onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
    "Hi Shailesh, I reviewed your portfolio and would like to discuss a project."
  )}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#191b23]/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4cd7f6] to-[#b4c5ff] p-[1px] shadow-glowCyan group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#11131b] rounded-[11px] flex items-center justify-center font-mono font-bold text-[#4cd7f6]">
              SR
            </div>
          </div>
          <div>
            <div className="font-bold tracking-tight text-white flex items-center gap-1.5 text-sm sm:text-base">
              {PERSONAL_INFO.name}
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 tracking-wider">
              FULL STACK & AI ARCHITECT
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 glass-panel px-6 py-2 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-[#4cd7f6] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Live IST Time Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#4cd7f6]/30 bg-[#11131b]/80 text-[11px] font-mono text-[#4cd7f6] shadow-sm">
            <Clock className="w-3.5 h-3.5 text-[#4cd7f6] animate-pulse" />
            <span>{istTime || 'IST'}</span>
          </div>

          {/* Theme Toggle Button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 transition-all"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#ffb596]" /> : <Moon className="w-4 h-4 text-[#2fd9f4]" />}
            </button>
          )}

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-[#b4c5ff]" />
            <span>Resume</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] font-semibold text-xs shadow-glowCyan hover:opacity-90 hover:scale-[1.02] transition-all"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/15 px-6 py-6 mt-2 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-slate-200 hover:text-[#4cd7f6]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-xs font-medium text-slate-200"
            >
              <FileText className="w-4 h-4 text-[#b4c5ff]" />
              <span>Interactive Resume</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] font-semibold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Hire Me on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
