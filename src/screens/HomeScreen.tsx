import React from 'react';
import { TabId } from '../types';
import { PILLARS } from '../data/folioData';
import { CollaborateMode } from '../components/CollaborateModal';
import {
  ArrowRight,
  Handshake,
  Newspaper,
  TrendingUp,
  ExternalLink,
  Award,
  Globe,
  Film,
  Users,
  Building2,
  ShieldCheck,
  MessageCircle,
  Mail,
  ChevronRight,
} from 'lucide-react';
import {
  TradeVisualEffect,
  MediaVisualEffect,
  LeadershipVisualEffect,
  InvestmentVisualEffect,
} from '../components/VerticalVisuals';
import { LazyImage } from '../components/LazyImage';
import { ThreeDCard } from '../components/ThreeDCard';

interface HomeScreenProps {
  onSelectTab: (tab: TabId) => void;
  onOpenCollaborate: (mode?: CollaborateMode) => void;
  onOpenVipPortal: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onSelectTab,
  onOpenCollaborate,
  onOpenVipPortal,
}) => {
  return (
    <div className="flex flex-col w-full text-[#e5e2e3] overflow-hidden">
      {/* SECTION 1: CINEMATIC EDITORIAL HERO BANNER */}
      <section className="relative w-full min-h-[86vh] flex items-center justify-center -mt-20 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#0c0b0a]">
        {/* Subtle Cinematic Ambient Lighting Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-15%,rgba(212,175,55,0.14),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/4 -right-24 w-[450px] h-[450px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/80 to-transparent pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 lg:px-20 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Refined High-End Typography & Executive Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Minimalist Supra-Title Protocol Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181510]/85 border border-[#d4af37]/40 shadow-xs backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] shadow-[0_0_8px_#f2ca50]"></span>
                <span className="font-['Montserrat'] text-[9px] sm:text-[9.5px] font-semibold text-[#f2ca50] tracking-[0.24em] uppercase">
                  Diplomatic Mandate &bull; GCC Corridor &bull; India &bull; Global
                </span>
              </div>

              {/* Editorial Display Name with Refined Optical Kerning */}
              <div className="space-y-2">
                <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-semibold text-[#c8beaa] tracking-[0.28em] uppercase block">
                  Cultural Architect &amp; Trade Envoy
                </span>
                <h1 className="font-['Cinzel'] text-[40px] sm:text-[54px] lg:text-[64px] text-[#f4efe6] tracking-tight leading-[1.05] font-normal">
                  Zeenat <span className="italic font-serif font-light text-gold-gradient">Kureshi</span>
                </h1>
              </div>

              {/* Clean, Non-Overcrowded Positioning Line */}
              <div className="py-1">
                <p className="font-['Cinzel'] text-[13px] sm:text-[15px] lg:text-[16px] text-[#e9c176] font-medium leading-snug tracking-[0.15em] uppercase border-l-2 border-[#d4af37] pl-3.5">
                  Film Producer <span className="text-[#f2ca50]/40 px-1.5">&bull;</span> GCC–India Trade Commissioner <span className="text-[#f2ca50]/40 px-1.5">&bull;</span> National President
                </p>
              </div>

              {/* Refined Executive Narrative */}
              <p className="font-['Montserrat'] text-[13.5px] sm:text-[14.5px] text-[#c8beaa] font-light leading-relaxed max-w-xl">
                Operating at the intersection of economic diplomacy, sovereign bilateral trade, and evocative cinema. Spearheading bilateral frameworks exceeding $450M across the GCC and South Asia, while steering national civic governance empowering over 120,000 women into enterprise.
              </p>

              {/* Executive Action Row with Unified Sizing Across All Screen Sizes */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                {/* 1. Primary Action: Collaborate */}
                <button
                  onClick={() => onOpenCollaborate('collaborate')}
                  className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 px-5 sm:px-6 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase transition-all duration-300 hover:brightness-110 shadow-[0_4px_16px_rgba(212,175,55,0.25)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer rounded whitespace-nowrap"
                >
                  <Handshake className="w-3.5 h-3.5 text-[#1a1402] shrink-0" />
                  <span>Collaborate</span>
                  <ArrowRight className="w-3 h-3 ml-0.5 shrink-0" />
                </button>

                {/* 2. Media Inquiry */}
                <button
                  onClick={() => onOpenCollaborate('media')}
                  className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 px-4 sm:px-5 bg-[#171512]/90 backdrop-blur-sm text-[#f4efe6] hover:text-[#f2ca50] font-['Montserrat'] text-[10px] sm:text-[10.5px] font-semibold tracking-[0.16em] uppercase transition-all duration-200 border border-[#3e3422] hover:border-[#f2ca50] cursor-pointer rounded shadow-xs hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  <Newspaper className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                  <span>Media Inquiry</span>
                </button>

                {/* 3. Investment Discussion */}
                <button
                  onClick={() => onOpenCollaborate('investment')}
                  className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 px-4 sm:px-5 bg-[#14120f]/90 text-[#e9c176] hover:text-[#f2ca50] font-['Montserrat'] text-[10px] sm:text-[10.5px] font-semibold tracking-[0.16em] uppercase transition-all duration-200 border border-[#3e3422] hover:border-[#f2ca50] cursor-pointer rounded shadow-xs hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-[#f2ca50] shrink-0" />
                  <span>Investment Dialogue</span>
                </button>
              </div>
            </div>

            {/* Right: Authentic Editorial Portrait with 3D Card Tilt, Cinematic Lighting & Specular Reflection */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <ThreeDCard depth={10} glareOpacity={0.25} className="w-full max-w-[350px] sm:max-w-[380px]">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)] border border-[#d4af37]/45 hover:border-[#f2ca50] bg-[#14120f] group transition-all duration-500 hover:shadow-[0_0_45px_rgba(242,202,80,0.3)]">
                  {/* Dynamic Ambient Gold Backlight Flare */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-[#f2ca50]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* Subtle Cinematic Corner Highlights */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>

                  <LazyImage
                    alt="Zeenat Kureshi Official Diplomatic & Cultural Portrait"
                    aspectRatio="aspect-[4/5]"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-104 transition-transform duration-700"
                    src="./images/zeenat_hero_color.jpg"
                    fallbackSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IHnCaef41g32aYh105zuRmheL7FwAT-AndGJukXlIE3t4L0szoFQEx8N8S3oPLqPmulPo5Oo776ceRauA2mrWttmN0hpVMmyTa0pTwujXGtjzvMUBiUugC_-F00w5D3skN_AK9FxGE5wHuyFUOuCnS9w6PXK7qD9McLtiTa4qfAhLXGi3BBaDbauoUWTQ5ZowUhwCKD9zWtPptwld2KaXrFj9Uge6Tg0vxx9dGPBUC0JjEbTLaxZ"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* High-End Seal / Accreditation Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0a0908]/92 backdrop-blur-md rounded-xl border border-[#d4af37]/35 flex items-center justify-between z-20 group-hover:border-[#f2ca50]/60 transition-colors">
                    <div>
                      <span className="font-['Montserrat'] text-[9px] font-bold text-[#f2ca50] tracking-[0.24em] uppercase block">
                        Protocol Desk Accredited
                      </span>
                      <span className="font-['Cinzel'] text-[12px] text-[#f4efe6]">
                        Trade Commissioner &bull; GCC Corridor
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#181510] border border-[#d4af37]/60 flex items-center justify-center shrink-0">
                      <span className="font-['Cinzel'] text-[9.5px] font-bold text-[#f2ca50]">ZK</span>
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MEDIA LOGOS STRIP */}
      <div className="w-full bg-[#0a0908] border-y border-[#262015] py-6 px-5 lg:px-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#8a7f6c] tracking-[0.22em] uppercase shrink-0">
            Featured In Global Media &amp; Publications:
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 opacity-70 hover:opacity-100 transition-opacity">
            <span className="font-serif font-bold text-[14px] sm:text-[16px] tracking-widest text-[#d0c5af] hover:text-[#f2ca50] transition-colors">
              FORBES MIDDLE EAST
            </span>
            <span className="font-sans font-black text-[13px] sm:text-[15px] tracking-wider text-[#d0c5af] hover:text-[#f2ca50] transition-colors">
              CNBC-TV18
            </span>
            <span className="font-serif italic font-bold text-[14px] sm:text-[16px] tracking-widest text-[#d0c5af] hover:text-[#f2ca50] transition-colors">
              VARIETY
            </span>
            <span className="font-sans font-bold text-[13px] sm:text-[15px] tracking-wider text-[#d0c5af] hover:text-[#f2ca50] transition-colors">
              BLOOMBERG
            </span>
            <span className="font-serif font-semibold text-[13px] sm:text-[15px] tracking-wider text-[#d0c5af] hover:text-[#f2ca50] transition-colors">
              GULF NEWS
            </span>
            <span className="font-sans font-extrabold text-[12px] sm:text-[14px] tracking-widest text-[#d0c5af] hover:text-[#f2ca50] transition-colors">
              THE ECONOMIC TIMES
            </span>
          </div>
        </div>
      </div>

      {/* SECTION 2: SOVEREIGN DIPLOMATIC PILLARS */}
      <section className="w-full bg-[#0e0d0c] py-20 relative">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20 space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2d2516] pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/40 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
                <Award className="w-3.5 h-3.5 text-[#f2ca50]" />
                <span>Strategic Mandate</span>
              </div>
              <h2 className="font-['Cinzel'] text-[28px] sm:text-[36px] text-[#f4efe6]">
                Institutional <span className="italic font-serif text-gold-gradient">Pillars</span>
              </h2>
            </div>
            <p className="font-['Montserrat'] text-[13px] sm:text-[14px] text-[#c8beaa] max-w-md font-light">
              Harmonizing sovereign economic strategy, cultural diplomacy, civic empowerment, and private wealth syndication.
            </p>
          </div>

          {/* 4 Pillars Grid with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => {
              const getIcon = () => {
                switch (pillar.id) {
                  case 'trade':
                    return <Globe className="w-6 h-6 text-[#f2ca50]" />;
                  case 'media':
                    return <Film className="w-6 h-6 text-[#e9c176]" />;
                  case 'women-leadership':
                    return <Users className="w-6 h-6 text-[#ffdea5]" />;
                  case 'investment':
                    return <Building2 className="w-6 h-6 text-[#f2ca50]" />;
                  default:
                    return <Award className="w-6 h-6 text-[#f2ca50]" />;
                }
              };

              const getVisualEffect = () => {
                switch (pillar.id) {
                  case 'trade':
                    return <TradeVisualEffect />;
                  case 'media':
                    return <MediaVisualEffect />;
                  case 'women-leadership':
                    return <LeadershipVisualEffect />;
                  case 'investment':
                    return <InvestmentVisualEffect />;
                  default:
                    return null;
                }
              };

              const getTargetTab = (): TabId => {
                switch (pillar.id) {
                  case 'trade':
                    return 'trade-investment';
                  case 'media':
                    return 'media-press';
                  case 'women-leadership':
                    return 'women-leadership';
                  case 'investment':
                    return 'trade-investment';
                  default:
                    return 'home';
                }
              };

              return (
                <ThreeDCard key={pillar.id} depth={8} glareOpacity={0.15} className="h-full">
                  <div className="h-full p-6 bg-[#161412] border border-[#2d2516] hover:border-[#d4af37] rounded-2xl flex flex-col justify-between space-y-6 group transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
                    <div className="space-y-4">
                      {/* Icon & Tag */}
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#0c0b0a] border border-[#2d2516] group-hover:border-[#d4af37]/60 flex items-center justify-center transition-colors shadow-xs">
                          {getIcon()}
                        </div>
                        <span className="font-['Montserrat'] text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                          {pillar.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="font-['Cinzel'] text-[20px] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Interactive Visual Graphic */}
                      <div className="py-2">{getVisualEffect()}</div>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-[#231d14]">
                        {pillar.bullets.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-[11.5px] text-[#a89d87] font-['Montserrat'] font-light">
                            <span className="w-1 h-1 rounded-full bg-[#f2ca50]"></span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contextual Explore Button */}
                    <button
                      onClick={() => onSelectTab(getTargetTab())}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#0e0d0b] hover:bg-[#1f1b14] border border-[#2d2516] hover:border-[#f2ca50] text-[#f4efe6] hover:text-[#f2ca50] font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.16em] transition-all flex items-center justify-between cursor-pointer group/btn"
                    >
                      <span>Explore Mandate</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#f2ca50] group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY SOVEREIGN METRICS */}
      <section className="w-full bg-[#0c0b0a] py-16 border-t border-[#231d14]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-[#14120f] border border-[#2d2516] rounded-2xl shadow-2xl">
            <div className="space-y-1.5 p-4 rounded-xl bg-[#0a0908] border border-[#1f1a10]">
              <span className="font-serif text-[32px] sm:text-[40px] text-gold-gradient block font-light leading-none">
                $450M+
              </span>
              <span className="font-['Montserrat'] text-[10px] sm:text-[11px] font-bold text-[#c8beaa] uppercase tracking-wider block">
                Bilateral Trade Flows
              </span>
              <span className="text-[10px] text-[#7a7160] font-light">Across GCC &amp; South Asia</span>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-[#0a0908] border border-[#1f1a10]">
              <span className="font-serif text-[32px] sm:text-[40px] text-gold-gradient block font-light leading-none">
                120K+
              </span>
              <span className="font-['Montserrat'] text-[10px] sm:text-[11px] font-bold text-[#c8beaa] uppercase tracking-wider block">
                Women Empowered
              </span>
              <span className="text-[10px] text-[#7a7160] font-light">Through Enterprise Fellowships</span>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-[#0a0908] border border-[#1f1a10]">
              <span className="font-serif text-[32px] sm:text-[40px] text-gold-gradient block font-light leading-none">
                18+
              </span>
              <span className="font-['Montserrat'] text-[10px] sm:text-[11px] font-bold text-[#c8beaa] uppercase tracking-wider block">
                Ministerial Missions
              </span>
              <span className="text-[10px] text-[#7a7160] font-light">State &amp; Sovereign Delegations</span>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-[#0a0908] border border-[#1f1a10]">
              <span className="font-serif text-[32px] sm:text-[40px] text-gold-gradient block font-light leading-none">
                100%
              </span>
              <span className="font-['Montserrat'] text-[10px] sm:text-[11px] font-bold text-[#c8beaa] uppercase tracking-wider block">
                Diplomatic Integrity
              </span>
              <span className="text-[10px] text-[#7a7160] font-light">Highest Sovereign Accreditations</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: EXECUTIVE LEADERSHIP & TRADE MANIFESTO */}
      <section className="w-full bg-[#0e0d0c] py-20 border-t border-[#231d14]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Manifesto Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/40 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
                  <Award className="w-3.5 h-3.5 text-[#f2ca50]" />
                  <span>Executive Doctrine</span>
                </div>
                <h2 className="font-['Cinzel'] text-[28px] sm:text-[38px] text-[#f4efe6] leading-tight">
                  Statecraft, Enterprise &amp; <span className="italic font-serif text-gold-gradient">Cultural Legacy</span>
                </h2>
              </div>

              <blockquote className="font-serif text-[17px] sm:text-[19px] text-[#e9c176] font-light italic border-l-2 border-[#d4af37] pl-4 leading-relaxed">
                &ldquo;True diplomatic power lies not solely in communiqués, but in building enduring institutional bridges where commerce, human empathy, and cultural narratives coalesce into national prosperity.&rdquo;
              </blockquote>

              <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed font-light">
                From negotiating multi-lateral economic accords in Dubai and Riyadh to executive-producing landmark cinematic co-productions, the mission remains unwavering: forging high-trust conduits between established sovereign entities and high-growth markets.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onSelectTab('about-zeenat')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#181510] hover:bg-[#262014] border border-[#d4af37]/50 hover:border-[#f2ca50] text-[#f2ca50] font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-[0.16em] transition-all cursor-pointer shadow-md"
                >
                  <span>Read Diplomatic Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Manifesto 3D Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <ThreeDCard depth={10} glareOpacity={0.2} className="w-full max-w-[360px]">
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)] bg-[#161412] border border-[#d4af37]/45 hover:border-[#f2ca50] group transition-all duration-500 hover:shadow-[0_0_45px_rgba(242,202,80,0.3)]">
                  {/* Dynamic Ambient Gold Backlight */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-[#f2ca50]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <LazyImage
                    alt="Zeenat Kureshi Executive Manifesto Portrait"
                    aspectRatio="aspect-[4/5]"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-104 transition-transform duration-700"
                    src="./images/zeenat_manifesto_color.jpg"
                    fallbackSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/20 to-transparent opacity-80 pointer-events-none"></div>

                  {/* Seal Badge floating over photo */}
                  <div className="absolute bottom-5 left-5 right-5 p-3.5 bg-[#0a0908]/92 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-between border border-[#d4af37]/35 group-hover:border-[#f2ca50]/60 transition-all duration-300 z-20">
                    <div>
                      <span className="font-['Montserrat'] text-[9px] font-bold text-[#f2ca50] tracking-[0.24em] uppercase block">
                        State Delegation Envoy
                      </span>
                      <span className="font-['Cinzel'] text-[12.5px] text-[#f4efe6]">
                        GCC – India Corridor Leadership
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#181510] border border-[#d4af37]/60 group-hover:border-[#f2ca50] flex items-center justify-center shrink-0 shadow-xs transition-colors">
                      <span className="font-['Cinzel'] text-[9.5px] font-bold text-[#f2ca50]">ZK</span>
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: EXECUTIVE SOVEREIGN COMMUNIQUÉ GATEWAY (STREAMLINED & PROFESSIONAL) */}
      <section className="w-full bg-[#0a0908] py-20 relative border-t border-[#231d14]">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
          <div className="bg-gradient-to-b from-[#181510] to-[#12100d] rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden border border-[#d4af37]/30">
            {/* Ambient Gold Flare */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#f2ca50]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Diplomatic Protocol Intro */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-1.5">
                  <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] tracking-[0.25em] uppercase">
                    Institutional Protocol
                  </span>
                  <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6] font-normal leading-tight">
                    Direct Diplomatic &amp; <span className="italic font-serif text-gold-gradient">Trade Chancery</span>
                  </h2>
                </div>

                <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed font-light">
                  The Secretariat facilitates structured ministerial delegations, FDI investment syndications, film co-production packaging, and high-level bilateral summits across accredited global hubs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#0f0d0b] border border-[#2d2516] space-y-1">
                    <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] uppercase tracking-wider block">
                      Dubai (DIFC) Desk
                    </span>
                    <span className="text-[12px] text-[#c8beaa]">Sovereign Wealth &amp; GCC Trade</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0f0d0b] border border-[#2d2516] space-y-1">
                    <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#e9c176] uppercase tracking-wider block">
                      New Delhi Desk
                    </span>
                    <span className="text-[12px] text-[#c8beaa]">National Presidencies &amp; FDI</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Communiqué Actions */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-4 bg-[#0d0c0a] p-6 lg:p-8 rounded-xl border border-[#2d2516]">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#f2ca50]">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="font-['Montserrat'] text-[11px] font-bold tracking-wider uppercase">
                      256-Bit Encrypted Secretariat Line
                    </span>
                  </div>
                  <p className="font-['Montserrat'] text-[12.5px] text-[#a89d87] font-light">
                    Select your required communique channel or access the full diplomatic directory with official telephone extensions.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => onOpenCollaborate('collaborate')}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:brightness-110 transition-all rounded-lg shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Handshake className="w-4 h-4" />
                    <span>Initiate Communiqué</span>
                  </button>

                  <button
                    onClick={() => onSelectTab('contact')}
                    className="w-full py-3.5 px-4 bg-[#181510] hover:bg-[#262014] border border-[#d4af37]/40 hover:border-[#f2ca50] text-[#f4efe6] hover:text-[#f2ca50] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase transition-all rounded-lg cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Mail className="w-4 h-4 text-[#f2ca50]" />
                    <span>Full Chancery Desk</span>
                  </button>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-[#1f1a10] text-[11.5px] text-[#8a7f6c]">
                  <span>Response Protocol SLA: 24–48 Hours</span>
                  <a
                    href="https://wa.me/?text=Hello%20Office%20of%20Zeenat%20Kureshi,%20I%20am%20transmitting%20an%20inquiry%20via%20ZeenatKureshi.com."
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#8ae899] hover:text-[#b4f6be] flex items-center gap-1.5 font-medium transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Official WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
