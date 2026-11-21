import { useState, type FormEvent } from 'react';
import { Check, Copy, Mail, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

type InquiryType = 'Data Analyst Role' | 'Power BI Dashboard' | 'Collaboration' | 'General';

interface SavedInquiry {
  id: string;
  name: string;
  email: string;
  type: InquiryType;
  message: string;
  submittedAt: string;
}

const INQUIRY_TYPES: InquiryType[] = [
  'Data Analyst Role',
  'Power BI Dashboard',
  'Collaboration',
  'General',
];

const STORAGE_KEY = 'sourabh_suman_portfolio_inquiries_v1';

export function ContactSection() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('Data Analyst Role');
  const [showBriefForm, setShowBriefForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<SavedInquiry | null>(null);
  const [pastInquiries, setPastInquiries] = useState<SavedInquiry[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as SavedInquiry[]) : [];
    } catch {
      return [];
    }
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please complete your name, email address, and message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    const entry: SavedInquiry = {
      id: `${Date.now()}`,
      name: trimmedName,
      email: trimmedEmail,
      type: inquiryType,
      message: trimmedMessage,
      submittedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    };

    const updated = [entry, ...pastInquiries].slice(0, 5);
    setPastInquiries(updated);
    setSubmittedInquiry(entry);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore storage quota errors
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      {/* EXPERIENCE / HIGHLIGHTS SECTION — Exact 3-column dark cards matching reference #experience */}
      <section
        id="experience"
        className="py-20 lg:py-28 bg-[#151518] border-t border-[#2A2A32] scroll-mt-16"
      >
        <div className="max-w-[1320px] mx-auto px-6 lg:px-14">
          <div className="flex items-center gap-4 mb-12">
            <span aria-hidden="true" className="w-10 h-[2px] bg-[#E8A045] shrink-0" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0EA] tracking-tight">
              Highlights &amp; Strengths
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROFILE.experienceCards.map((card, idx) => (
              <div
                key={card.title}
                className="bg-[#1C1C20] border border-[#2A2A30] hover:border-[#E8A045]/50 rounded-md p-7 sm:p-8 transition-all duration-200 hover:-translate-y-1"
              >
                <span className="font-mono text-xs text-[#E8A045] tabular-nums">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <h3 className="mt-3 font-serif text-xl font-bold text-[#F5F0EA] mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-[#A8A59E] leading-[1.7]">{card.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENTERED CONNECT SECTION — Exact faithful match to reference #connect */}
      <section
        id="connect"
        className="py-24 lg:py-32 bg-[#0D0D0F] border-t border-[#2A2A32] text-center scroll-mt-16"
      >
        <div className="max-w-[820px] mx-auto px-6">
          <h2
            className="font-serif font-black text-[#F5F0EA] tracking-tight leading-tight [text-wrap:balance]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Let&apos;s <span className="text-[#E8A045]">Connect</span>
          </h2>

          <p className="mt-5 text-base text-[#A8A59E] max-w-[48ch] mx-auto leading-[1.7]">
            I&apos;m always open to entry-level Data Analyst opportunities, collaborations, and
            data conversations. Feel free to reach out!
          </p>

          {/* Centered Primary CTA Row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0D0D0F] bg-[#E8A045] hover:bg-[#F2B45E] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Send an Email</span>
            </a>

            <a
              href={PROFILE.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-[#F5F0EA] border border-[#2A2A32] hover:border-[#E8A045] hover:text-[#E8A045] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="font-mono tabular-nums">{PROFILE.phoneRaw}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-[#A8A59E] border border-[#2A2A32] hover:border-[#E8A045] hover:text-[#E8A045] rounded-sm transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-[#E8A045]" aria-hidden="true" />
                  <span className="text-[#E8A045]">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Centered Social Row matching reference .social-row (LinkedIn, GitHub, Email) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1C1C20] border border-[#2A2A30] hover:border-[#E8A045] text-sm text-[#A8A59E] hover:text-[#E8A045] rounded-sm transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1C1C20] border border-[#2A2A30] hover:border-[#E8A045] text-sm text-[#A8A59E] hover:text-[#E8A045] rounded-sm transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#1C1C20] border border-[#2A2A30] hover:border-[#E8A045] text-sm text-[#A8A59E] hover:text-[#E8A045] rounded-sm transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>

          {/* Optional Direct Message Toggle */}
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setShowBriefForm((open) => !open)}
              className="text-xs font-mono text-[#A8A59E] hover:text-[#E8A045] underline underline-offset-4 transition-colors cursor-pointer"
            >
              {showBriefForm ? 'Hide Message Form' : 'Or send a direct message'}
            </button>
          </div>

          {showBriefForm && (
            <div className="mt-8 text-left bg-[#1C1C20] border border-[#2A2A30] rounded-md p-6 sm:p-8">
              {submittedInquiry ? (
                <div className="py-4 space-y-4">
                  <p className="text-xs font-mono text-[#E8A045] tabular-nums">
                    Message Recorded · {submittedInquiry.submittedAt}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-[#F5F0EA]">
                    Thank you, {submittedInquiry.name}.
                  </h3>
                  <p className="text-sm text-[#A8A59E] leading-relaxed">
                    Your note regarding{' '}
                    <span className="text-[#F5F0EA]">{submittedInquiry.type}</span> has been saved.{' '}
                    {PROFILE.firstName} will reply to{' '}
                    <span className="text-[#F5F0EA]">{submittedInquiry.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedInquiry(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-[#0D0D0F] bg-[#E8A045] hover:bg-[#F2B45E] rounded-sm transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {INQUIRY_TYPES.map((type) => {
                      const active = inquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          aria-pressed={active}
                          className={`px-3 py-2 text-xs font-medium rounded-sm border transition-colors truncate cursor-pointer ${
                            active
                              ? 'bg-[#E8A045] text-[#0D0D0F] border-[#E8A045]'
                              : 'bg-[#151518] text-[#A8A59E] border-[#2A2A32] hover:border-[#E8A045]/60 hover:text-[#F5F0EA]'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="connect-name"
                        className="block text-xs text-[#A8A59E] mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="connect-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#151518] border border-[#2A2A32] rounded-sm text-[#F5F0EA] placeholder:text-[#6E6C68] focus:border-[#E8A045]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="connect-email"
                        className="block text-xs text-[#A8A59E] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="connect-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#151518] border border-[#2A2A32] rounded-sm text-[#F5F0EA] placeholder:text-[#6E6C68] focus:border-[#E8A045]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="connect-message"
                      className="block text-xs text-[#A8A59E] mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="connect-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a note to Sourabh..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#151518] border border-[#2A2A32] rounded-sm text-[#F5F0EA] placeholder:text-[#6E6C68] focus:border-[#E8A045] resize-y"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-xs font-medium text-[#E8A045]">
                      {error}
                    </p>
                  )}

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#0D0D0F] bg-[#E8A045] hover:bg-[#F2B45E] rounded-sm transition-colors cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
