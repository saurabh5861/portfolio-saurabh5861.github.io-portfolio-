import { AVATAR_ASSET_PATH, PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center py-16 lg:py-20 bg-[#0D0D0F]"
    >
      {/* Warm amber & copper ambient radial glows matching reference */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -right-44 w-[680px] h-[680px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(232, 160, 69, 0.22) 0%, rgba(232, 160, 69, 0) 68%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -left-40 w-[520px] h-[520px] rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(200, 90, 58, 0.2) 0%, rgba(200, 90, 58, 0) 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Hero Typography Column */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs sm:text-sm text-[#E8A045] tracking-[0.06em]">
              {PROFILE.tagline} · {PROFILE.cityCountry}
            </p>

            <h1
              className="mt-6 font-serif font-black tracking-tight text-[#F5F0EA] leading-[0.98] [text-wrap:balance]"
              style={{ fontSize: 'clamp(3.15rem, 6.2vw, 5.5rem)' }}
            >
              {PROFILE.firstName}
              <br />
              <span className="text-[#E8A045]">{PROFILE.lastName}</span>
            </h1>

            <p className="mt-6 text-base leading-[1.68] text-[#A8A59E] max-w-[48ch] tracking-[0.01em]">
              {PROFILE.heroSubtitle}
            </p>

            {/* Stacked direct contact & social strip matching reference hierarchy */}
            <div className="mt-8 space-y-2 text-sm text-[#A8A59E]">
              <p>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="hover:text-[#E8A045] transition-colors"
                >
                  {PROFILE.email}
                </a>
              </p>
              <p className="font-mono text-xs sm:text-sm tabular-nums">
                <a href={PROFILE.phoneHref} className="hover:text-[#E8A045] transition-colors">
                  {PROFILE.phoneRaw}
                </a>
                <span className="mx-2 text-[#57534E]" aria-hidden="true">
                  ·
                </span>
                <span className="font-sans">{PROFILE.cityCountry}</span>
              </p>
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8A045] transition-colors"
                >
                  {PROFILE.linkedinLabel}
                </a>
                <span className="text-[#57534E]" aria-hidden="true">
                  ·
                </span>
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E8A045] transition-colors"
                >
                  {PROFILE.githubHandle}
                </a>
              </p>
            </div>

            {/* Reference Button Row: View GitHub (primary gold) + Get in Touch (outline) */}
            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-[#0D0D0F] bg-[#E8A045] hover:bg-[#F2B45E] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                View GitHub
              </a>
              <a
                href="#connect"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-[#F5F0EA] border border-[#2A2A32] hover:border-[#E8A045] hover:text-[#E8A045] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Circular Portrait with Rotating Conic Halo Ring */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-[270px] h-[270px] sm:w-[330px] sm:h-[330px] lg:w-[360px] lg:h-[360px] flex items-center justify-center">
              <div
                aria-hidden="true"
                className="portrait-ring-spinner absolute inset-0 rounded-full p-[3px]"
              >
                <div className="w-full h-full rounded-full bg-[#0D0D0F]" />
              </div>

              <div className="relative z-10 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full overflow-hidden border border-[#2A2A32] bg-[#18181D] shadow-2xl">
                <ResilientImage
                  src={AVATAR_ASSET_PATH}
                  alt={`Portrait of ${PROFILE.name}`}
                  title={PROFILE.name}
                  loading="eager"
                  containerClassName="w-full h-full rounded-full"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
