import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Flutter Mobile App');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger Confetti Celebration!
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4cd7f6', '#b4c5ff', '#ffb596', '#ffffff']
    });

    // Build pre-filled WhatsApp link and redirect
    const whatsappText = `Hi Shailesh, I am submitting a project intake form on your portfolio:
Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}
Details: ${message}`;

    const redirectUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

    setTimeout(() => {
      window.open(redirectUrl, '_blank');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#4cd7f6] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PRIORITY ENGAGEMENT CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start Your Next Build With Shailesh
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Direct response within 2 hours. Available for global contracts & high-concurrency architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="glass-card rounded-3xl p-8 border border-white/15 space-y-6">
              <h3 className="text-2xl font-bold text-white">Direct Communication</h3>
              <p className="text-xs text-slate-300">
                Connect directly on WhatsApp, Phone, or Email for immediate technical alignment.
              </p>

              {/* Direct Channel Cards */}
              <div className="space-y-4 pt-2">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent("Hi Shailesh, I'm reaching out directly from your portfolio.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#141622] border border-emerald-500/30 hover:border-emerald-400 flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-emerald-400 font-bold">WHATSAPP DIRECT</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-emerald-400">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-4 rounded-2xl bg-[#141622] border border-white/10 hover:border-[#4cd7f6] flex items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#4cd7f6]/20 text-[#4cd7f6] flex items-center justify-center font-bold">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#4cd7f6] font-bold">OFFICIAL EMAIL</div>
                    <div className="text-sm font-extrabold text-white group-hover:text-[#4cd7f6]">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#141622] border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ffb596]/20 text-[#ffb596] flex items-center justify-center font-bold">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#ffb596] font-bold">BASE LOCATION</div>
                    <div className="text-sm font-extrabold text-white">
                      {PERSONAL_INFO.location} (IST UTC+5:30)
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Intake Form with Confetti */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl border border-white/15 p-8 text-left space-y-6 shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold text-white">Project Intake Form</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fill out the form below to auto-generate your pre-filled inquiry.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-[#11131b] rounded-2xl border border-emerald-500/50 text-center space-y-4 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Intake Form Submitted!</h4>
                  <p className="text-xs font-mono text-slate-300">
                    Redirecting to pre-filled WhatsApp chat in 1.5 seconds...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#11131b] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#11131b] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">PHONE NUMBER</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#11131b] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">PROJECT CATEGORY</label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-[#11131b] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                      >
                        <option value="Flutter Mobile App">Flutter Mobile App (iOS & Android)</option>
                        <option value="Next.js 14 Web Application">Next.js 14 Web Application</option>
                        <option value="Gemini 2.5 AI Agent & RAG">Gemini 2.5 AI Agent & RAG</option>
                        <option value="SaaS Admin Dashboard">SaaS Admin Dashboard</option>
                        <option value="Full Stack Custom Software">Full Stack Custom Software</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">PROJECT OVERVIEW & REQUIREMENTS *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your goals, timeline, and key requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#11131b] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#4cd7f6]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] font-extrabold text-sm flex items-center justify-center gap-2 shadow-glowCyan hover:scale-[1.02] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Launch WhatsApp Chat</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
