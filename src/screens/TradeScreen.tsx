import React, { useState } from 'react';
import { TRADE_INITIATIVES } from '../data/folioData';
import { LazyImage } from '../components/LazyImage';
import { ThreeDCard } from '../components/ThreeDCard';
import { 
  Building2, 
  ArrowUpRight, 
  TrendingUp, 
  Globe2, 
  ShieldAlert, 
  Landmark, 
  CheckCircle2, 
  DollarSign, 
  Send,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TradeScreenProps {
  onOpenCollaborate: () => void;
  onOpenInvestorLead: () => void;
}

const CORRIDOR_IMAGES: Record<string, { image: string; fallback: string }> = {
  'trade-1': {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    fallback: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
  },
  'trade-2': {
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    fallback: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
  },
  'trade-3': {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  },
};

export const TradeScreen: React.FC<TradeScreenProps> = ({ onOpenCollaborate, onOpenInvestorLead }) => {
  const [selectedInitiative, setSelectedInitiative] = useState(TRADE_INITIATIVES[0]);
  const [inquiryForm, setInquiryForm] = useState({
    institution: '',
    contactName: '',
    email: '',
    phone: '',
    region: 'United Arab Emirates (UAE)',
    ticketSize: '$5M – $25M',
    objective: 'Market Entry & Sovereign Free Zone Licensing',
    projectScope: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submissionToken, setSubmissionToken] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `TRADE-FDI-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionToken(token);
    setFormSubmitted(true);
  };

  const currentImageInfo = CORRIDOR_IMAGES[selectedInitiative.id] || CORRIDOR_IMAGES['trade-1'];

  return (
    <div className="w-full bg-[#0d0c0b] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-16 sm:space-y-20">
      {/* Header Monograph */}
      <section className="max-w-3xl space-y-3">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Globe2 className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span>Bilateral Economic Diplomacy</span>
          </div>
          <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
            GCC–India Trade &amp; <span className="italic font-serif text-gold-gradient">Sovereign FDI</span>
          </h1>
        </div>
        <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] leading-relaxed font-light">
          Architecting state-level economic conduits across the UAE, Kingdom of Saudi Arabia, Qatar, and the Republic of India. Facilitating bilateral investments exceeding $450M in sustainable infrastructure, creative economy, and industrial corridors.
        </p>
      </section>

      {/* Corridor Key Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-7 bg-[#161412] border border-[#382f1e]/80 rounded-2xl shadow-xl">
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">$450M+</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Syndicated Bilateral Flow</span>
        </div>
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">18</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Ministerial Trade Missions</span>
        </div>
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">42</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Enterprises Inward FDI</span>
        </div>
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">3</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Sovereign Free Zone Hubs</span>
        </div>
      </section>

      {/* Strategic Advisory Services */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#382f1e]/80 pb-4">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Landmark className="w-3.5 h-3.5" />
            <span>Strategic Advisory Services</span>
          </div>
          <h2 className="font-['Cinzel'] text-[26px] sm:text-[32px] text-[#f4efe6]">
            Market Entry Support &amp; Sovereign Conduit Advisory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ThreeDCard depth={8} glareOpacity={0.15}>
            <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-all h-full">
              <Landmark className="w-7 h-7 text-[#f2ca50]" />
              <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Free Zone &amp; Regulatory Setup</h3>
              <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
                Expedited licensing and governance onboarding across Dubai DIFC, Abu Dhabi ADGM, Saudi SAGIA/MISA, and GIFT City India.
              </p>
            </div>
          </ThreeDCard>

          <ThreeDCard depth={8} glareOpacity={0.15}>
            <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-all h-full">
              <TrendingUp className="w-7 h-7 text-[#e9c176]" />
              <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Cross-Border Capital Structuring</h3>
              <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
                Structuring tax-optimized FDI syndications, institutional SPVs, and sovereign wealth fund co-investment arrangements.
              </p>
            </div>
          </ThreeDCard>

          <ThreeDCard depth={8} glareOpacity={0.15}>
            <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-all h-full">
              <ShieldAlert className="w-7 h-7 text-[#ffdea5]" />
              <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Ministerial Protocol &amp; Delegations</h3>
              <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
                Bespoke access to state-level delegations, bilateral summits, trade chambers, and government-to-government (G2G) corridors.
              </p>
            </div>
          </ThreeDCard>
        </div>
      </section>

      {/* Interactive Corridor Initiatives Showcase */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#382f1e]/80 pb-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
              <Building2 className="w-3.5 h-3.5" />
              <span>Flagship Corridors</span>
            </div>
            <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6]">
              Key Bilateral Trade &amp; Capital Mandates
            </h2>
          </div>
          <button
            onClick={onOpenInvestorLead}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#1a1610] border border-[#d4af37] text-[#f2ca50] hover:bg-[#d4af37] hover:text-[#1a1402] font-['Montserrat'] text-[10px] font-bold tracking-widest uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Request Syndicate Dossier</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Initiative Selection Tabs */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {TRADE_INITIATIVES.map((initiative) => {
              const isSelected = selectedInitiative.id === initiative.id;
              return (
                <div
                  key={initiative.id}
                  onClick={() => setSelectedInitiative(initiative)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1c1913] border-[#f2ca50] shadow-xl'
                      : 'bg-[#14120f] border-[#2d2516] hover:border-[#d4af37]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-wider text-[#d4af37]">
                      {initiative.corridor}
                    </span>
                    <span className="font-mono text-[11px] text-[#f2ca50] font-bold">{initiative.allocation}</span>
                  </div>
                  <h3 className="font-['Cinzel'] text-[17px] text-[#f4efe6] pt-1">
                    {initiative.title}
                  </h3>
                  <p className="font-['Montserrat'] text-[12.5px] text-[#a89d87] pt-1 line-clamp-2 font-light">
                    {initiative.mandate}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Corridor View with ThreeDCard and LazyImage */}
          <div className="lg:col-span-7">
            <ThreeDCard depth={8} glareOpacity={0.2} className="h-full">
              <div className="p-6 bg-[#161412] border border-[#d4af37]/40 rounded-2xl space-y-6 shadow-2xl h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#0c0b0a] border border-[#2d2516]">
                    <LazyImage
                      src={currentImageInfo.image}
                      fallbackSrc={currentImageInfo.fallback}
                      alt={selectedInitiative.title}
                      aspectRatio="aspect-[16/9]"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent opacity-70"></div>
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#0a0908]/90 backdrop-blur-md rounded border border-[#d4af37]/40 text-[#f2ca50] text-[10px] font-bold font-['Montserrat'] uppercase tracking-wider">
                      {selectedInitiative.corridor} &bull; {selectedInitiative.allocation}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-['Cinzel'] text-[22px] text-[#f4efe6]">
                      {selectedInitiative.title}
                    </h3>
                    <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed font-light">
                      {selectedInitiative.mandate}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#2d2516]">
                    <span className="font-['Montserrat'] text-[10px] font-bold text-[#e9c176] uppercase tracking-wider block">
                      Core Institutional Mandates:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedInitiative.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-[12px] text-[#d0c5af]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2d2516] flex items-center justify-between">
                  <span className="text-[11px] text-[#8a7f6c] font-mono">Diplomatic Protocol Sovereign Conduit</span>
                  <button
                    onClick={onOpenCollaborate}
                    className="px-5 py-2.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer shadow-md"
                  >
                    Initiate Bilateral Dialogue
                  </button>
                </div>
              </div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* STRUCTURED INWARD FDI FACILITY MANDATE DESK */}
      <section className="bg-[#14120f] border border-[#d4af37]/40 p-6 sm:p-10 rounded-2xl shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2d2516] pb-4">
          <div className="space-y-1">
            <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] uppercase tracking-widest">
              Institutional Trade Facility
            </span>
            <h2 className="font-['Cinzel'] text-[24px] sm:text-[30px] text-[#f4efe6]">
              Submit Structured FDI Mandate
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#8a7f6c]">Secured with 256-Bit TLS</span>
        </div>

        {formSubmitted ? (
          <div className="p-8 text-center space-y-4 bg-[#0d0c0a] rounded-xl border border-[#2d2516]">
            <div className="w-14 h-14 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Cinzel'] text-[22px] text-[#f4efe6]">Mandate Transmitted to Trade Secretariat</h3>
            <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] max-w-md mx-auto">
              Your structured cross-border proposal has been logged with tracking code <span className="text-[#f2ca50] font-mono font-bold">{submissionToken}</span>.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="px-6 py-2.5 bg-[#181510] border border-[#d4af37] text-[#f2ca50] hover:bg-[#d4af37] hover:text-[#1a1402] font-['Montserrat'] text-[10px] font-bold tracking-widest uppercase rounded-lg transition-all cursor-pointer"
            >
              Submit Another Mandate
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Institution / Enterprise Name *
              </label>
              <input
                value={inquiryForm.institution}
                onChange={(e) => setInquiryForm({ ...inquiryForm, institution: e.target.value })}
                required
                placeholder="e.g. Sovereign Fund / GCC Conglomerate"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Principal Contact &amp; Title *
              </label>
              <input
                value={inquiryForm.contactName}
                onChange={(e) => setInquiryForm({ ...inquiryForm, contactName: e.target.value })}
                required
                placeholder="e.g. Managing Director / Partner"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Corporate Email Address *
              </label>
              <input
                type="email"
                value={inquiryForm.email}
                onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                required
                placeholder="director@fund.com"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Direct Telephone / WhatsApp *
              </label>
              <input
                value={inquiryForm.phone}
                onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                required
                placeholder="+971 50 000 0000 / +91 98000 00000"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Target Corridor *
              </label>
              <select
                value={inquiryForm.region}
                onChange={(e) => setInquiryForm({ ...inquiryForm, region: e.target.value })}
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              >
                <option value="United Arab Emirates (UAE)">United Arab Emirates (UAE - Dubai / Abu Dhabi)</option>
                <option value="Kingdom of Saudi Arabia (KSA)">Kingdom of Saudi Arabia (Riyadh / NEOM)</option>
                <option value="Republic of India (CEPA)">Republic of India (Mumbai / Delhi / GIFT City)</option>
                <option value="State of Qatar">State of Qatar (Doha Free Zones)</option>
                <option value="Multi-Jurisdiction GCC–South Asia">Multi-Jurisdiction GCC–South Asia Corridor</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Estimated Ticket Size *
              </label>
              <select
                value={inquiryForm.ticketSize}
                onChange={(e) => setInquiryForm({ ...inquiryForm, ticketSize: e.target.value })}
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              >
                <option value="$1M – $5M">$1M – $5M (Growth Stage / Regional Expansion)</option>
                <option value="$5M – $25M">$5M – $25M (Institutional Infrastructure / Media IP)</option>
                <option value="$25M – $100M">$25M – $100M (Sovereign Industrial Corridor)</option>
                <option value="$100M+">$100M+ (Bilateral State-Level Syndicate)</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Project Scope &amp; Institutional Clearances Required
              </label>
              <textarea
                value={inquiryForm.projectScope}
                onChange={(e) => setInquiryForm({ ...inquiryForm, projectScope: e.target.value })}
                rows={3}
                placeholder="Outline the enterprise scope, projected timeline, and specific government or commercial clearances sought..."
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#2d2516]">
              <span className="text-[10.5px] text-[#8c8270] uppercase tracking-wider font-mono">
                Diplomatic Non-Disclosure Standards Apply
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:brightness-110 transition-all cursor-pointer rounded-lg shadow-lg"
              >
                <span>Transmit Structured FDI Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
