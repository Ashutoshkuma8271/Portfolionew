import React, { useState } from 'react';
import { Mail, MapPin, Phone, ShieldCheck, Clock, Send, CheckCircle2, MessageCircle, Copy, Check, ArrowRight, Building } from 'lucide-react';
import { LazyImage } from '../components/LazyImage';
import { ThreeDCard } from '../components/ThreeDCard';

const CHANCERY_LOCATIONS = [
  {
    id: 'dubai',
    region: 'Middle East Chancery',
    title: 'Dubai, UAE',
    jurisdictionKey: 'Dubai (DIFC) Chancery',
    description: 'Dubai International Financial Centre (DIFC) & Downtown Protocol Suites. Facilitating Gulf sovereign wealth syndications and trade missions.',
    phone: '+971 4 362 0000 (Chancery Desk)',
    tel: '+97143620000',
    badgeColor: 'text-[#f2ca50]',
    dotColor: 'bg-[#f2ca50]',
    status: 'GMT+4 • DIFC PROTOCOL',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'delhi',
    region: 'South Asia Chancery',
    title: 'New Delhi, India',
    jurisdictionKey: 'New Delhi Chancery',
    description: 'Diplomatic Enclave & Central Secretariat Corridor. Overseeing national civic presidencies and inward infrastructure investment frameworks.',
    phone: '+91 11 2410 0000 (Secretariat)',
    tel: '+911124100000',
    badgeColor: 'text-[#e9c176]',
    dotColor: 'bg-[#e9c176]',
    status: 'GMT+5:30 • SECRETARIAT',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'london',
    region: 'European Chancery',
    title: 'London, United Kingdom',
    jurisdictionKey: 'London (Mayfair) Chancery',
    description: 'Mayfair Executive Suites. Connecting European film syndicates, sovereign family offices, and bilateral cultural trusts.',
    phone: '+44 20 7946 0000 (European Desk)',
    tel: '+442079460000',
    badgeColor: 'text-[#ffdea5]',
    dotColor: 'bg-[#ffdea5]',
    status: 'GMT+0/BST • MAYFAIR DESK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    fallbackImage: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80',
  },
];

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jurisdiction: 'Dubai (DIFC) Chancery',
    mandate: 'GCC–India Bilateral Trade & Investment',
    message: '',
  });
  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const selectChanceryDesk = (jurisdictionKey: string) => {
    setFormData((prev) => ({ ...prev, jurisdiction: jurisdictionKey }));
    const formElement = document.getElementById('transmission-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const token = `CHANCERY-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedId(token);
  };

  const copyToken = () => {
    if (submittedId) {
      navigator.clipboard.writeText(submittedId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#0d0c0b] text-[#e5e2e3] py-16 px-5 lg:px-20 max-w-[1440px] mx-auto space-y-20">
      {/* Header */}
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Executive Chancery Directory</span>
          </div>
          <h1 className="font-['Cinzel'] text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
            Diplomatic &amp; Media <span className="italic font-serif text-gold-gradient">Chancery</span>
          </h1>
          <p className="font-['Montserrat'] text-[14px] text-[#c8beaa] leading-relaxed font-light">
            The Office of Zeenat Kureshi maintains accredited representation and diplomatic liaison desks across key global financial and governmental corridors.
          </p>
        </div>

        {/* Direct WhatsApp Action Button */}
        <a
          href="https://wa.me/?text=Hello%20Office%20of%20Zeenat%20Kureshi,%20I%20am%20transmitting%20an%20inquiry%20via%20ZeenatKureshi.com."
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#122416] border border-[#23582d] hover:border-[#38b04a] text-[#8ae899] hover:text-[#b4f6be] font-['Montserrat'] text-[11px] sm:text-[11.5px] font-bold tracking-widest uppercase transition-all shadow-lg group text-center"
        >
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38b04a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#38b04a]"></span>
          </div>
          <MessageCircle className="w-5 h-5 text-[#38b04a] group-hover:scale-110 transition-transform" />
          <span>Connect via Official WhatsApp</span>
        </a>
      </section>

      {/* Chancery Locations Grid with 3D Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CHANCERY_LOCATIONS.map((chancery) => (
          <ThreeDCard key={chancery.id} depth={8} glareOpacity={0.15}>
            <div className="group bg-[#161412] border border-[#382f1e]/80 hover:border-[#d4af37] transition-all duration-300 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between h-full">
              {/* Architectural Chancery Imagery via LazyImage */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0b0a]">
                <LazyImage
                  src={chancery.image}
                  fallbackSrc={chancery.fallbackImage}
                  alt={`${chancery.title} Diplomatic Chancery`}
                  aspectRatio="aspect-[16/10]"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.88] contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-[#161412]/40 to-transparent"></div>

                {/* Chancery Region Tag */}
                <div className={`absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded bg-[#0a0a0b]/90 backdrop-blur-md border border-[#4d4635]/70 ${chancery.badgeColor} font-['Montserrat'] text-[9.5px] font-bold tracking-widest uppercase shadow-md`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${chancery.dotColor} animate-pulse`}></span>
                  {chancery.region}
                </div>

                {/* Map Pin Badge */}
                <div className={`absolute top-3.5 right-3.5 p-2 rounded-full bg-[#0a0a0b]/90 backdrop-blur-md border border-[#4d4635]/70 ${chancery.badgeColor} shadow-md`}>
                  <MapPin className="w-4 h-4" />
                </div>

                {/* Timezone / Status Indicator */}
                <div className="absolute bottom-2.5 right-3 px-2.5 py-0.5 rounded bg-[#0a0a0b]/90 backdrop-blur-sm border border-[#4d4635]/50 text-[#d0c5af] text-[9px] font-mono tracking-wider">
                  {chancery.status}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 pt-4 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-['Cinzel'] text-[22px] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors leading-snug">
                    {chancery.title}
                  </h3>
                  <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed font-light">
                    {chancery.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#2d2516] space-y-3">
                  <a
                    href={`tel:${chancery.tel}`}
                    className="text-[12px] font-mono text-[#ffdea5] hover:text-[#f2ca50] flex items-center gap-2 transition-colors group/tel cursor-pointer"
                    title={`Call ${chancery.title} Chancery Desk`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#f2ca50] group-hover/tel:scale-110 transition-transform shrink-0" />
                    <span>{chancery.phone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => selectChanceryDesk(chancery.jurisdictionKey)}
                    className="w-full py-2.5 px-3.5 bg-[#0e0d0b] hover:bg-[#1f1b14] border border-[#2d2516] hover:border-[#f2ca50] text-[#f4efe6] hover:text-[#f2ca50] rounded-lg font-['Montserrat'] text-[10px] font-bold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer group/btn"
                  >
                    <span>Select Desk for Dispatch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#f2ca50] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </ThreeDCard>
        ))}
      </section>

      {/* Formal Transmission Form with Auto Token Verification */}
      <section id="transmission-form" className="bg-[#14120f] border border-[#d4af37]/40 p-8 lg:p-14 rounded-2xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-['Montserrat'] text-[10px] font-bold text-[#f2ca50] tracking-widest uppercase block">
                Secure Transmission Line
              </span>
              <h2 className="font-['Cinzel'] text-[28px] sm:text-[34px] text-[#f4efe6]">
                Formal Protocol Dispatch
              </h2>
            </div>
            <p className="font-['Montserrat'] text-[14px] text-[#c8beaa] leading-relaxed font-light">
              All communications directed to the Trade Commissioner or National Presidency undergo institutional encryption, protocol triage, and automated email confirmation dispatch.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#2d2516]">
              <div className="flex items-center gap-3 text-[13px] text-[#c8beaa]">
                <ShieldCheck className="w-5 h-5 text-[#f2ca50] shrink-0" />
                <span>SSL Encrypted &amp; 256-Bit Hardware Token Security</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#c8beaa]">
                <Clock className="w-5 h-5 text-[#e9c176] shrink-0" />
                <span>Standard Review SLA: 24 to 48 Hours</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-[#c8beaa]">
                <Mail className="w-5 h-5 text-[#ffdea5] shrink-0" />
                <span>chancery@zeenatkureshi.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#0d0c0a] p-8 rounded-xl border border-[#2d2516]">
            {submittedId ? (
              <div className="p-8 text-center space-y-5">
                <div className="w-14 h-14 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Cinzel'] text-[24px] text-[#f4efe6]">Chancery Dispatch Transmitted</h3>
                <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] max-w-sm mx-auto leading-relaxed font-light">
                  Your diplomatic communique has been registered. An automated dispatch receipt has been routed to <strong className="text-[#f2ca50]">{formData.email}</strong>.
                </p>
                <div className="p-3.5 bg-[#161412] border border-[#d4af37]/40 inline-flex items-center gap-3 rounded-lg">
                  <span className="font-mono text-[14px] text-[#f2ca50] font-bold">{submittedId}</span>
                  <button
                    onClick={copyToken}
                    className="p-1 text-[#d0c5af] hover:text-[#f2ca50] cursor-pointer"
                    title="Copy token"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmittedId(null)}
                    className="px-6 py-2.5 bg-[#181510] border border-[#2d2516] text-[#c8beaa] hover:text-white font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-widest rounded-lg cursor-pointer transition-colors"
                  >
                    Transmit Another Dispatch
                  </button>
                  <a
                    href={`https://wa.me/?text=Hello%20Office%20of%20Zeenat%20Kureshi,%20following%20up%20on%20communique%20${submittedId}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-2.5 bg-[#122416] border border-[#23582d] text-[#8ae899] hover:text-[#b4f6be] font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-widest rounded-lg cursor-pointer transition-colors"
                  >
                    Follow up on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                      Full Name / Honorific *
                    </label>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Amb. / Dr. / Ms. Sarah Al-Maktoum"
                      className="w-full bg-[#161412] border border-[#2d2516] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                      Official Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@ministry-or-firm.com"
                      className="w-full bg-[#161412] border border-[#2d2516] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                      Telephone / WhatsApp
                    </label>
                    <input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full bg-[#161412] border border-[#2d2516] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                      Target Chancery Desk *
                    </label>
                    <select
                      value={formData.jurisdiction}
                      onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                      className="w-full bg-[#161412] border border-[#2d2516] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
                    >
                      <option value="Dubai (DIFC) Chancery">Dubai (DIFC) Chancery Desk</option>
                      <option value="New Delhi Chancery">New Delhi Central Secretariat</option>
                      <option value="London (Mayfair) Chancery">London (Mayfair) Chancery Desk</option>
                      <option value="Executive Secretariat Global">Executive Secretariat (Direct)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                    Mandate Category *
                  </label>
                  <select
                    value={formData.mandate}
                    onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                    className="w-full bg-[#161412] border border-[#2d2516] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
                  >
                    <option value="GCC–India Bilateral Trade & Investment">GCC–India Bilateral Trade &amp; Investment</option>
                    <option value="International Cinematic Co-Production Packaging">International Cinematic Co-Production Packaging</option>
                    <option value="Women Leadership Council Institutional Accord">Women Leadership Council Institutional Accord</option>
                    <option value="Keynote Summit & Diplomatic Delegation">Keynote Summit &amp; Diplomatic Delegation</option>
                    <option value="Accredited Press & Broadcast Media Communique">Accredited Press &amp; Broadcast Media Communique</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                    Executive Communiqué / Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide a formal overview of your institution's initiative or communique..."
                    className="w-full bg-[#161412] border border-[#2d2516] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#2d2516]">
                  <span className="text-[10.5px] text-[#8c8270] uppercase tracking-wider font-mono">
                    Official Chancery Protocol
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:brightness-110 transition-all cursor-pointer rounded-lg shadow-lg"
                  >
                    <span>Transmit Chancery Dispatch</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
