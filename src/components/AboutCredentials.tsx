import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Globe, Sparkles, CheckCircle2, ShieldCheck, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutCredentials: React.FC = () => {
  const [istTime, setIstTime] = useState<string>('');
  const [istDate, setIstDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      };
      setIstTime(now.toLocaleTimeString('en-US', timeOptions));
      setIstDate(now.toLocaleDateString('en-US', dateOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#ffb596]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SENIOR ARCHITECT CREDENTIALS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              About Shailesh Raval & Engineering Philosophy
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Core Philosophy Box */}
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-[#4cd7f6] space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#4cd7f6]">
                Core Engineering Philosophy
              </div>
              <p className="text-white font-semibold text-sm sm:text-base">
                "{PERSONAL_INFO.philosophy}"
              </p>
            </div>

            {/* Language Fluency Badges */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Language Credentials
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="glass-panel p-3 rounded-xl border border-white/10 flex items-center justify-between"
                  >
                    <span className="text-xs font-bold text-white">{lang.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] font-semibold">
                      {lang.fluency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Real-time IST Clock & Direct Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live IST Clock Card */}
            <div className="glass-card rounded-3xl p-8 border border-white/15 shadow-2xl relative overflow-hidden text-center space-y-4">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11131b] border border-white/10 text-xs font-mono text-[#4cd7f6]">
                <Clock className="w-4 h-4 text-[#4cd7f6] animate-spin" />
                <span>GUJARAT, INDIA (IST TIMEZONE)</span>
              </div>

              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-gradient-cyan tracking-tight py-1">
                {istTime || '10:55:00 PM'}
              </div>

              <div className="text-xs font-mono text-[#b4c5ff] font-semibold tracking-wider">
                {istDate || 'Sat, 22 Aug 2026'} • IST (UTC+05:30)
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-[#ffb596]" />
                <span>Gujarat, India • Real-Time High Precision Sync</span>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-3 text-xs text-emerald-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>AVAILABLE FOR GLOBAL CONTRACTS & FULL-TIME ROLES</span>
              </div>
            </div>

            {/* Quick Contact Credentials */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-[#4cd7f6]" />
                <span>Phone: <strong>{PERSONAL_INFO.phone}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-[#b4c5ff]" />
                <span>Email: <strong>{PERSONAL_INFO.email}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Globe className="w-4 h-4 text-[#ffb596]" />
                <span>Location: <strong>Gujarat, India (Global Remote)</strong></span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
