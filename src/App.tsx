import React, { useState } from 'react';
import { ScrollFrameBackground } from './components/ScrollFrameBackground';
import { CyberShaderBackground } from './components/CyberShaderBackground';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { KeyStats } from './components/KeyStats';
import { DeviceScreenShowcase } from './components/DeviceScreenShowcase';
import { EngineeringServices } from './components/EngineeringServices';
import { AboutCredentials } from './components/AboutCredentials';
import { SkillMatrix3D } from './components/SkillMatrix3D';
import { ProjectsSection } from './components/ProjectsSection';
import { ScopeEstimator } from './components/ScopeEstimator';
import { SystemArchitecture } from './components/SystemArchitecture';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-transparent selection:bg-[#4cd7f6]/30 selection:text-[#4cd7f6]">
      {/* 100-Frame Scroll-Driven Canvas Animation Background */}
      <ScrollFrameBackground />

      {/* Cyber GLSL Particle & Grid Shader Overlay */}
      <CyberShaderBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setResumeOpen(true)} theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Page Sections */}
      <main className="relative z-10 space-y-8">
        <Hero3D onOpenResume={() => setResumeOpen(true)} />
        <KeyStats />
        <DeviceScreenShowcase />
        <EngineeringServices />
        <AboutCredentials />
        <SkillMatrix3D />
        <ProjectsSection />
        <ScopeEstimator />
        <SystemArchitecture />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Interactive Resume Modal */}
      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </div>
  );
};

export default App;
