import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0F]/92 backdrop-blur-md border-b border-[#2A2A32]">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-14 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#F5F0EA] whitespace-nowrap shrink-0 hover:text-[#E8A045] transition-colors duration-150"
        >
          {PROFILE.firstName} <span className="text-[#E8A045]">{PROFILE.lastName}</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A8A59E]"
        >
          <a
            href="#about"
            className="whitespace-nowrap shrink-0 hover:text-[#E8A045] transition-colors duration-150 underline-offset-4 hover:underline"
          >
            About
          </a>
          <a
            href="#skills"
            className="whitespace-nowrap shrink-0 hover:text-[#E8A045] transition-colors duration-150 underline-offset-4 hover:underline"
          >
            Skills
          </a>
          <a
            href="#education"
            className="whitespace-nowrap shrink-0 hover:text-[#E8A045] transition-colors duration-150 underline-offset-4 hover:underline"
          >
            Education
          </a>
          <a
            href="#projects"
            className="whitespace-nowrap shrink-0 hover:text-[#E8A045] transition-colors duration-150 underline-offset-4 hover:underline"
          >
            Project
          </a>
          <a
            href="#connect"
            className="whitespace-nowrap shrink-0 hover:text-[#E8A045] transition-colors duration-150 underline-offset-4 hover:underline"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary CTA button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#connect"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-[#0D0D0F] bg-[#E8A045] hover:bg-[#F2B45E] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Get in Touch
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#2A2A32] text-[#F5F0EA] hover:border-[#E8A045] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2A2A32] bg-[#151518] px-6 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#F5F0EA] hover:text-[#E8A045] transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#F5F0EA] hover:text-[#E8A045] transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#F5F0EA] hover:text-[#E8A045] transition-colors"
            >
              Education
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#F5F0EA] hover:text-[#E8A045] transition-colors"
            >
              Project
            </a>
            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-sm font-medium text-[#F5F0EA] hover:text-[#E8A045] transition-colors"
            >
              Contact
            </a>
            <a
              href="#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-3 px-4 text-sm font-semibold text-[#0D0D0F] bg-[#E8A045] hover:bg-[#F2B45E] rounded-sm transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
