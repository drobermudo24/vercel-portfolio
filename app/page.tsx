'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import GitHub from '@/components/GitHub';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden perspective-1000">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Universe Background */}
      <UniverseBackground />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 py-16 lg:py-24">
          {/* Left Sidebar Navigation */}
          <nav className="hidden lg:flex flex-col gap-8 sticky top-32 h-fit">
            <SidebarNav activeSection={activeSection} setActiveSection={setActiveSection} />
          </nav>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            <section id="about" className="scroll-mt-32">
              <About />
            </section>
            <section id="experience" className="scroll-mt-32">
              <Experience />
            </section>
            <section id="projects" className="scroll-mt-32">
              <Projects />
            </section>
            <section id="github" className="scroll-mt-32">
              <GitHub />
            </section>
            <section id="contact" className="scroll-mt-32">
              <Contact />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Sidebar Navigation
function SidebarNav({ activeSection, setActiveSection }: { activeSection: string; setActiveSection: (section: string) => void }) {
  const sections = ['about', 'experience', 'projects', 'github', 'contact'];

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => {
            setActiveSection(section);
            const element = document.getElementById(section);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`block text-left text-sm uppercase tracking-widest font-medium transition-colors ${
            activeSection === section
              ? 'text-primary border-l-2 border-primary pl-4'
              : 'text-muted-foreground hover:text-foreground pl-4'
          }`}
        >
          {section === 'github' ? 'GitHub' : section}
        </button>
      ))}
    </div>
  );
}

// Universe Background Component
function UniverseBackground() {
  const [stars, setStars] = useState<Array<{ top: number; left: number; size: number; delay: number }>>([]);
  const [orbs, setOrbs] = useState<Array<{ top: number; left: number; size: number; delay: number; duration: number; color: string }>>([]);

  useEffect(() => {
    // Generate random stars
    const generatedStars = Array.from({ length: 100 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);

    // Generate rotating orbs
    const colors = ['#9f7aea', '#f43f5e', '#3b82f6', '#22c55e', '#facc15'];
    const generatedOrbs = Array.from({ length: 5 }, (_, i) => ({
      top: Math.random() * 80,
      left: Math.random() * 80,
      size: Math.random() * 150 + 50,
      delay: Math.random() * 10,
      duration: Math.random() * 40 + 30,
      color: colors[i % colors.length],
    }));
    setOrbs(generatedOrbs);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-90 animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* 3D Orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-30 animate-spin-slow"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            backgroundColor: orb.color,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate3d(1, 1, 0, 0deg);
          }
          100% {
            transform: rotate3d(1, 1, 0, 360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </div>
  );
}
