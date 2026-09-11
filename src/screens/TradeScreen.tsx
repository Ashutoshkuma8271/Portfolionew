import React, { useState } from 'react';
import { TRADE_INITIATIVES } from '../data/folioData';
import { LazyImage } from '../components/LazyImage';
import { 
  ArrowRight, 
  CheckCircle, 
  Landmark, 
  TrendingUp, 
  ShieldAlert, 
  Building, 
  Send, 
  CheckCircle2, 
  MessageCircle,
  Globe2,
  Coins,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface TradeScreenProps {
  onOpenCollaborate: () => void;
  onOpenInvestorLead?: () => void;
}

export const TradeScreen: React.FC<TradeScreenProps> = ({ onOpenCollaborate, onOpenInvestorLead }) => {
  const [selectedInitiative, setSelectedInitiative] = useState(TRADE_INITIATIVES[0]);

  // Corridor Visual Imagery Mapping
  const CORRIDOR_IMAGES: Record<string, { image: string; fallback: string; caption: string }> = {
    'trade-1': {
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      caption: 'UAE–Saudi–India Sovereign Infrastructure & Clean Energy Corridor',
    },
    'trade-2': {
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      caption: 'Tripartite Screen & Creative Economy Fund (Dubai – Mumbai – London)',
    },
    'trade-3': {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      fallback: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      caption: 'Dual-Headquartering DIFC / ADGM to GIFT City Gujarat Gateway',
    },
  };

  // Structured Inquiry Form State
  const [inquiryForm, setInquiryForm] = useState({
    entityName: '',
    executiveName: '',
    email: '',
    phone: '',
    ticketSize: '$5M – $25M',
    region: 'United Arab Emirates (UAE)',
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
    <div className="w-full bg-[#131314] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-16 sm:space-y-20">
      {/* Header Monograph */}
      <section className="max-w-3xl space-y-3">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Globe2 className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span>Bilateral Economic Diplomacy</span>
          </div>
          <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
            GCC–India Trade &amp; <span className="italic font-serif text-[#f2ca50]">Sovereign FDI</span>
          </h1>
        </div>
        <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] leading-relaxed font-light">
          Architecting state-level economic conduits across the UAE, Kingdom of Saudi Arabia, Qatar, and the Republic of India. Facilitating bilateral investments exceeding $450M in sustainable infrastructure, creative economy, and industrial corridors.
        </p>
      </section>

      {/* Corridor Key Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-7 bg-[#161412] border border-[#382f1e]/80 rounded-2xl shadow-xl">
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#f2ca50] block font-light leading-none">$450M+</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Syndicated Bilateral Flow</span>
        </div>
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#e9c176] block font-light leading-none">18</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Ministerial Trade Missions</span>
        </div>
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#f2ca50] block font-light leading-none">42</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Enterprises Inward FDI</span>
        </div>
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#e9c176] block font-light leading-none">3</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Sovereign Free Zone Hubs</span>
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
          <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-colors">
            <Landmark className="w-7 h-7 text-[#f2ca50]" />
            <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Free Zone &amp; Regulatory Setup</h3>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Expedited licensing and governance onboarding across Dubai DIFC, Abu Dhabi ADGM, Saudi SAGIA/MISA, and GIFT City India.
            </p>
          </div>

          <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-colors">
            <TrendingUp className="w-7 h-7 text-[#e9c176]" />
            <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Cross-Border Capital Structuring</h3>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Structuring tax-optimized FDI syndications, institutional SPVs, and sovereign wealth fund co-investment arrangements.
            </p>
          </div>

          <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-colors">
            <ShieldAlert className="w-7 h-7 text-[#ffdea5]" />
            <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Ministerial Protocol &amp; Delegations</h3>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Bilateral governmental audiences, high-level diplomatic clearances, and participation in official bilateral trade roundtables.
            </p>
          </div>
        </div>
      </section>

      {/* Trade Initiatives Detail Selector with Visual Image Banner */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#382f1e]/80 pb-4">
          <div>
            <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] tracking-[0.24em] uppercase block">
              Active Frameworks
            </span>
            <h2 className="font-['Cinzel'] text-[26px] sm:text-[32px] text-[#f4efe6]">
              Bilateral Corridors &amp; Investment Protocols
            </h2>
          </div>
          <button
            onClick={() => {
              const formEl = document.getElementById('structured-inquiry');
              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f2ca50] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:brightness-110 transition-all cursor-pointer shadow-md rounded-lg"
          >
            Structured Trade Inquiry
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* List of Corridors */}
          <div className="lg:col-span-5 space-y-3">
            {TRADE_INITIATIVES.map((item) => {
              const isSelected = selectedInitiative.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedInitiative(item)}
                  className={`w-full text-left p-5 transition-all duration-300 border cursor-pointer rounded-xl ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#241f15] to-[#18150f] border-[#f2ca50] shadow-lg ring-1 ring-[#f2ca50]/50'
                      : 'bg-[#161412] border-[#382f1e]/60 hover:border-[#d4af37]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-['Montserrat'] text-[10px] font-bold text-[#f2ca50] uppercase tracking-wider">
                      {item.corridor}
                    </span>
                    <span className="text-[11px] font-mono text-[#e9c176] font-bold">{item.allocation}</span>
                  </div>
                  <h3 className="font-['Cinzel'] text-[18px] text-[#f4efe6] font-normal leading-snug">
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Detail Display with Visual Photography */}
          <div className="lg:col-span-7 bg-[#161412] border border-[#382f1e] rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* High-Resolution Corridor Photography with Skeleton Loader */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden">
              <LazyImage
                src={currentImageInfo.image}
                fallbackSrc={currentImageInfo.fallback}
                alt={selectedInitiative.title}
                aspectRatio="aspect-[16/7]"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute top-3 left-3 px-3 py-1 bg-[#0a0907]/90 backdrop-blur-md border border-[#f2ca50]/50 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-widest rounded-md">
                {selectedInitiative.status} &bull; {selectedInitiative.corridor}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="space-y-1.5 border-b border-[#2d2516] pb-4">
                <h3 className="font-['Cinzel'] text-[22px] sm:text-[26px] text-[#f4efe6]">
                  {selectedInitiative.title}
                </h3>
                <span className="font-mono text-[13px] text-[#f2ca50] font-semibold block">
                  Total Allocated Facility: {selectedInitiative.allocation}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-['Montserrat'] text-[10px] font-bold text-[#f2ca50] uppercase tracking-widest">
                  Strategic Mandate
                </h4>
                <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed font-light">
                  {selectedInitiative.mandate}
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <h4 className="font-['Montserrat'] text-[10px] font-bold text-[#f2ca50] uppercase tracking-widest">
                  Corridor Milestones &amp; Frameworks
                </h4>
                <ul className="space-y-2">
                  {selectedInitiative.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[12.5px] text-[#e5e2e3]">
                      <CheckCircle className="w-4 h-4 text-[#f2ca50] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Inquiry Form */}
      <section id="structured-inquiry" className="bg-[#161412] border border-[#d4af37]/50 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2d2516] pb-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-[#f2ca50] text-[10px] font-bold uppercase tracking-[0.24em]">
              <Building className="w-4 h-4" />
              <span>Institutional Intake Desk</span>
            </div>
            <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6]">
              Structured Trade &amp; Investment Inquiry
            </h2>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] font-light">
              Submit detailed ticket metrics for confidential sovereign wealth syndication, cross-border market entry, or trade mission accreditation.
            </p>
          </div>

          {onOpenInvestorLead && (
            <button
              onClick={onOpenInvestorLead}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0b0a09] border border-[#d4af37]/60 hover:border-[#f2ca50] text-[#f2ca50] font-['Montserrat'] text-[10px] font-bold tracking-widest uppercase transition-all shadow-md shrink-0 cursor-pointer hover:bg-[#1a1712]"
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Investor Qualification</span>
            </button>
          )}
        </div>

        {formSubmitted ? (
          <div className="bg-[#0e0d0b] border border-[#d4af37] p-8 rounded-xl text-center space-y-4 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Cinzel'] text-[22px] text-[#f4efe6]">
              Protocol Inquiry Registered
            </h3>
            <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed">
              Your inquiry has been encrypted and routed to the Trade Commissioner Chancery in Dubai.
            </p>
            <div className="p-3.5 bg-[#161412] border border-[#382f1e] inline-block rounded-lg font-mono text-[13px] text-[#f2ca50]">
              Reference Token: {submissionToken}
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/?text=Hello%20Office%20of%20Zeenat%20Kureshi,%20I%20have%20submitted%20trade%20inquiry%20token%20${submissionToken}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122416] border border-[#23582d] text-[#8ae899] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:bg-[#1a3821] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#38b04a]" />
                <span>Fast-Track via WhatsApp Secretariat</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Entity / Corporate Name *
              </label>
              <input
                value={inquiryForm.entityName}
                onChange={(e) => setInquiryForm({ ...inquiryForm, entityName: e.target.value })}
                required
                placeholder="e.g. Al-Diyar Sovereign Capital / Tata Industrial"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Principal Executive / Title *
              </label>
              <input
                value={inquiryForm.executiveName}
                onChange={(e) => setInquiryForm({ ...inquiryForm, executiveName: e.target.value })}
                required
                placeholder="e.g. Dr. Tariq Al-Mansoor, Managing Partner"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Official Institutional Email *
              </label>
              <input
                type="email"
                value={inquiryForm.email}
                onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                required
                placeholder="chancery@entity.com"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Direct Telephone / WhatsApp *
              </label>
              <input
                value={inquiryForm.phone}
                onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                required
                placeholder="+971 50 000 0000 / +91 98000 00000"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            {/* Target Region */}
            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Corridor / Target Region *
              </label>
              <select
                value={inquiryForm.region}
                onChange={(e) => setInquiryForm({ ...inquiryForm, region: e.target.value })}
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              >
                <option value="United Arab Emirates (UAE)">United Arab Emirates (UAE - Dubai / Abu Dhabi)</option>
                <option value="Kingdom of Saudi Arabia (KSA)">Kingdom of Saudi Arabia (Riyadh / NEOM)</option>
                <option value="Republic of India (CEPA)">Republic of India (Mumbai / Delhi / GIFT City)</option>
                <option value="State of Qatar">State of Qatar (Doha Free Zones)</option>
                <option value="Multi-Jurisdiction GCC–South Asia">Multi-Jurisdiction GCC–South Asia Corridor</option>
              </select>
            </div>

            {/* Ticket Size */}
            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Estimated Ticket Size / Facility *
              </label>
              <select
                value={inquiryForm.ticketSize}
                onChange={(e) => setInquiryForm({ ...inquiryForm, ticketSize: e.target.value })}
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              >
                <option value="$1M – $5M">$1M – $5M (Growth Stage / Regional Expansion)</option>
                <option value="$5M – $25M">$5M – $25M (Institutional Infrastructure / Media IP)</option>
                <option value="$25M – $100M">$25M – $100M (Sovereign Industrial Corridor)</option>
                <option value="$100M+">$100M+ (Bilateral State-Level Syndicate)</option>
              </select>
            </div>

            {/* Objective */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Primary Strategic Objective *
              </label>
              <select
                value={inquiryForm.objective}
                onChange={(e) => setInquiryForm({ ...inquiryForm, objective: e.target.value })}
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              >
                <option value="Market Entry & Sovereign Free Zone Licensing">Market Entry &amp; Sovereign Free Zone Licensing</option>
                <option value="Inward FDI Capital Syndication">Inward FDI Capital Syndication</option>
                <option value="Bilateral Ministerial Delegation Access">Bilateral Ministerial Delegation Access</option>
                <option value="Cross-Border Media & Film Production Co-Investment">Cross-Border Media &amp; Film Production Co-Investment</option>
                <option value="Joint Venture Protocol Structuring">Joint Venture Protocol Structuring</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Project Overview &amp; Mandate Details
              </label>
              <textarea
                value={inquiryForm.projectScope}
                onChange={(e) => setInquiryForm({ ...inquiryForm, projectScope: e.target.value })}
                rows={3}
                placeholder="Outline the enterprise scope, projected timeline, and specific government or commercial clearances sought..."
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
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
                <span>Transmit Structured Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
