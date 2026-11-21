import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Database,
  Lightbulb,
  Table2,
  Users,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

const SKILL_ICON_MAP: Record<string, typeof Code2> = {
  python: Code2,
  powerbi: BarChart3,
  mysql: Database,
  excel: Table2,
  analytics: Lightbulb,
  leadership: Users,
};

export function AboutResumeSection() {
  return (
    <>
      {/* ABOUT SECTION — Exact 2-column narrative + 2x2 golden stat cards */}
      <section
        id="about"
        className="py-20 lg:py-28 bg-[#151518] border-t border-[#2A2A32] scroll-mt-16"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-14">
          <div className="flex items-center gap-4 mb-12">
            <span aria-hidden="true" className="w-10 h-[2px] bg-[#E8A045] shrink-0" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0EA] tracking-tight">
              About Me
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              {PROFILE.aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15px] sm:text-base leading-[1.78] text-[#A8A59E] tracking-[0.01em]"
                >
                  {paragraph}
                </p>
              ))}

              <p className="pt-2 text-sm text-[#84817C]">
                <span className="text-[#F5F0EA] font-medium">Hobbies:</span>{' '}
                {PROFILE.hobbies.join(' · ')}
              </p>
            </div>

            {/* Right 2x2 Stat Cards Grid matching reference .about-stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
              {PROFILE.aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#1C1C20] border border-[#2A2A30] hover:border-[#E8A045] rounded-md p-6 sm:p-7 transition-colors duration-200"
                >
                  <p className="font-serif text-2xl sm:text-3xl font-black text-[#E8A045] tabular-nums leading-none">
                    {stat.value}
                  </p>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#A8A59E]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION — Exact 3-column dark cards with sliding gold-to-copper bottom accent */}
      <section
        id="skills"
        className="py-20 lg:py-28 bg-[#0D0D0F] border-t border-[#2A2A32] scroll-mt-16"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-14">
          <div className="flex items-center gap-4 mb-12">
            <span aria-hidden="true" className="w-10 h-[2px] bg-[#E8A045] shrink-0" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0EA] tracking-tight">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROFILE.skillCards.map((skill) => {
              const IconComponent = SKILL_ICON_MAP[skill.id] || Code2;
              return (
                <div
                  key={skill.id}
                  className="group relative bg-[#1C1C20] border border-[#2A2A30] hover:border-[#E8A045]/50 rounded-md p-7 sm:p-8 overflow-hidden transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#E8A045]/12 text-[#E8A045] flex items-center justify-center mb-5">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#F5F0EA] mb-2.5">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-[#A8A59E] leading-[1.65] tracking-[0.01em]">
                    {skill.summary}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#E8A045] to-[#C85A3A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION — Exact vertical amber-gold timeline */}
      <section
        id="education"
        className="py-20 lg:py-28 bg-[#151518] border-t border-[#2A2A32] scroll-mt-16"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-14">
          <div className="flex items-center gap-4 mb-12">
            <span aria-hidden="true" className="w-10 h-[2px] bg-[#E8A045] shrink-0" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0EA] tracking-tight">
              Education
            </h2>
          </div>

          <div className="relative pl-8 sm:pl-12 max-w-3xl space-y-11">
            <div
              aria-hidden="true"
              className="absolute left-[6px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#E8A045] via-[#C85A3A] to-transparent"
            />

            {PROFILE.education.map((edu) => (
              <div key={edu.degree} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-8 sm:-left-12 top-1.5 w-3.5 h-3.5 rounded-full bg-[#E8A045] ring-4 ring-[#151518]"
                />
                <p className="font-mono text-xs text-[#E8A045] tabular-nums tracking-wider">
                  {edu.period}
                </p>
                <h3 className="mt-1.5 font-serif text-xl sm:text-2xl font-bold text-[#F5F0EA] leading-snug">
                  {edu.degree}
                </h3>
                <p className="mt-1.5 text-sm sm:text-[15px] text-[#A8A59E]">{edu.institution}</p>
                <p className="mt-2 font-mono text-xs text-[#E8A045]/90">{edu.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SECTION — Clean numbered deliverable cards without extra photos */}
      <section
        id="projects"
        className="py-20 lg:py-28 bg-[#0D0D0F] border-t border-[#2A2A32] scroll-mt-16"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="w-10 h-[2px] bg-[#E8A045] shrink-0" />
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0EA] tracking-tight">
                  Featured Project
                </h2>
              </div>
              <h3 className="mt-6 font-serif text-2xl sm:text-3xl font-bold text-[#E8A045]">
                {PROFILE.project.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[#A8A59E] leading-relaxed">
                {PROFILE.project.subtitle}
              </p>
              <p className="mt-3 font-mono text-xs text-[#84817C]">
                {PROFILE.project.tools.join(' · ')}
              </p>
            </div>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F5F0EA] border border-[#2A2A32] hover:border-[#E8A045] hover:text-[#E8A045] rounded-sm transition-colors whitespace-nowrap shrink-0 self-start lg:self-end"
            >
              <span>View on GitHub</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROFILE.project.highlights.map((item) => (
              <div
                key={item.num}
                className="bg-[#1C1C20] border border-[#2A2A30] hover:border-[#E8A045] rounded-md p-6 flex items-start gap-4 transition-all duration-200 hover:translate-x-1"
              >
                <span className="font-serif text-3xl font-black text-[#E8A045]/30 leading-none tabular-nums shrink-0">
                  {item.num}
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-[#F5F0EA]">{item.title}</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#A8A59E] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
