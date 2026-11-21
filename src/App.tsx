import { AboutResumeSection } from './components/AboutResumeSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { PROFILE } from './data/portfolioData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F5F0EA] flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutResumeSection />
        <ContactSection />
      </main>

      {/* Centered Footer matching reference portfolio */}
      <footer className="border-t border-[#2A2A32] bg-[#0D0D0F] py-8 px-6 text-center text-xs sm:text-sm text-[#84817C] tracking-wide">
        © {new Date().getFullYear()} {PROFILE.name} · B.Tech CSE · Truba Institute of Engineering
        &amp; IT (RGPV), Bhopal
      </footer>
    </div>
  );
}
