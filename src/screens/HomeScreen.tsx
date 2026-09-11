import React, { useState } from 'react';
import { TabId } from '../types';
import { PILLARS } from '../data/folioData';
import { CollaborateMode } from '../components/CollaborateModal';
import {
  ArrowRight,
  Lock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Handshake,
  Newspaper,
  TrendingUp,
  ExternalLink,
  Award,
  Globe,
  Sparkles,
  Compass,
  Film,
  Users,
  Coins,
} from 'lucide-react';
import {
  TradeVisualEffect,
  MediaVisualEffect,
  LeadershipVisualEffect,
  InvestmentVisualEffect,
} from '../components/VerticalVisuals';
import { LazyImage } from '../components/LazyImage';

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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mandate: 'Trade — GCC–India Bilateral Trade & Investment',
    jurisdiction: '',
    brief: '',
  });
  const [formSubmitted, setFormSubmitted] = useState<string | null>(null);

  const handleDispatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trackingCode = `ZK-PROTOCOL-${Math.floor(100000 + Math.random() * 900000)}`;
    setFormSubmitted(trackingCode);
  };

  return (
    <div className="flex flex-col w-full text-[#e5e2e3] overflow-hidden">
      {/* SECTION 1: CINEMATIC EDITORIAL HERO BANNER */}
      <section className="relative w-full min-h-[86vh] flex items-center justify-center -mt-20 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#0c0b0a]">
        {/* Subtle Cinematic Ambient Lighting Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_-15%,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none"></div>
        <div className="absolute top-1/4 -right-24 w-[450px] h-[450px] bg-[#d4af37]/4 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/80 to-transparent pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 lg:px-20 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Refined High-End Typography & Executive Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Minimalist Supra-Title Protocol Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181510]/85 border border-[#d4af37]/40 shadow-xs backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50] shadow-[0_0_6px_#f2ca50]"></span>
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
                  Zeenat <span className="italic font-serif font-light text-[#f2ca50]">Kureshi</span>
                </h1>
              </div>

              {/* Clean, Non-Overcrowded Positioning Line */}
              <div className="py-1">
                <p className="font-['Cinzel'] text-[13px] sm:text-[15px] lg:text-[16px] text-[#e9c176] font-medium leading-snug tracking-[0.15em] uppercase border-l-2 border-[#d4af37] pl-3.5">
                  Film Producer <span className="text-[#f2ca50]/40 px-1.5">&bull;</span> Trade Commissioner <span className="text-[#f2ca50]/40 px-1.5">&bull;</span> Civic President
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

            {/* Right: Authentic Editorial Portrait with Cinematic Lighting, 3D Glow & Radiant Color Hover */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[350px] sm:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)] border border-[#d4af37]/45 hover:border-[#f2ca50] bg-[#14120f] group transition-all duration-500 hover:shadow-[0_0_45px_rgba(242,202,80,0.3)]">
                {/* Dynamic Ambient Gold Backlight Flare */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-[#f2ca50]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Subtle Cinematic Corner Highlights */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>

                {/* Authentic Executive Portrait Image */}
                <LazyImage
                  alt="Zeenat Kureshi — Diplomatic Envoy & Film Producer"
                  aspectRatio="aspect-[4/5]"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-104 transition-transform duration-700"
                  src="/images/zeenat_hero_color.jpg"
                  fallbackSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IHnCaef41g32aYh105zuRmheL7FwAT-AndGJukXlIE3t4L0szoFQEx8N8S3oPLqPmulPo5Oo776ceRauA2mrWttmN0hpVMmyTa0pTwujXGtjzvMUBiUugC_-F00w5D3skN_AK9FxGE5wHuyFUOuCnS9w6PXK7qD9McLtiTa4qfAhLXGi3BBaDbauoUWTQ5ZowUhwCKD9zWtPptwld2KaXrFj9Uge6Tg0vxx9dGPBUC0JjEbTLaxZ"
                />

                {/* Cinematic Vignette Overlay with Obsidian Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b0a] via-[#0c0b0a]/20 to-transparent pointer-events-none group-hover:opacity-75 transition-opacity duration-500"></div>

                {/* Protocol Seal Overlay Badge */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 bg-[#0c0b0a]/92 backdrop-blur-md rounded-xl border border-[#d4af37]/35 group-hover:border-[#f2ca50]/60 flex items-center justify-between z-20 shadow-lg transition-all duration-300">
                  <div>
                    <span className="font-['Montserrat'] text-[8.5px] font-bold text-[#f2ca50] tracking-[0.24em] uppercase block">
                      Protocol Desk Accredited
                    </span>
                    <span className="font-['Cinzel'] text-[12px] text-[#f4efe6]">
                      Trade Commissioner &bull; GCC Corridor
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#181510] border border-[#d4af37]/60 group-hover:border-[#f2ca50] flex items-center justify-center shrink-0 shadow-xs transition-colors">
                    <span className="font-['Cinzel'] text-[10px] font-bold text-[#f2ca50]">ZK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED SOVEREIGN TRUST METRICS BAR */}
      <section className="w-full bg-[#0c0b0a] border-y border-[#2e271a] py-8">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="space-y-1 text-center md:text-left border-r last:border-r-0 border-[#2e271a] pr-4">
              <span className="font-['Cinzel'] text-[28px] lg:text-[34px] text-[#f2ca50] block font-semibold leading-none">
                $450M+
              </span>
              <span className="font-['Montserrat'] text-[9.5px] font-medium text-[#b8ad96] uppercase tracking-[0.18em]">
                Bilateral Facilitation
              </span>
            </div>
            <div className="space-y-1 text-center md:text-left border-r last:border-r-0 border-[#2e271a] pr-4">
              <span className="font-['Cinzel'] text-[28px] lg:text-[34px] text-[#e9c176] block font-semibold leading-none">
                14+
              </span>
              <span className="font-['Montserrat'] text-[9.5px] font-medium text-[#b8ad96] uppercase tracking-[0.18em]">
                Global Screen Projects
              </span>
            </div>
            <div className="space-y-1 text-center md:text-left border-r last:border-r-0 border-[#2e271a] pr-4">
              <span className="font-['Cinzel'] text-[28px] lg:text-[34px] text-[#f2ca50] block font-semibold leading-none">
                120K+
              </span>
              <span className="font-['Montserrat'] text-[9.5px] font-medium text-[#b8ad96] uppercase tracking-[0.18em]">
                Women Empowered
              </span>
            </div>
            <div className="space-y-1 text-center md:text-left">
              <span className="font-['Cinzel'] text-[28px] lg:text-[34px] text-[#e9c176] block font-semibold leading-none">
                18+
              </span>
              <span className="font-['Montserrat'] text-[9.5px] font-medium text-[#b8ad96] uppercase tracking-[0.18em]">
                Diplomatic Delegations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED MEDIA LOGOS */}
      <section className="w-full bg-[#0e0e0f] py-14 border-y border-[#4d4635]/40 relative">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div className="space-y-1">
              <span className="font-sans text-[11px] font-bold text-[#f2ca50] uppercase tracking-[0.25em] block">
                Featured Media &amp; Accredited Press
              </span>
              <p className="font-sans text-[13px] text-[#d0c5af]">
                Recognized coverage across premier international financial publications, film trade magazines, and diplomatic registries
              </p>
            </div>
            <div className="h-px bg-[#4d4635]/40 flex-1 hidden md:block ml-8"></div>
          </div>

          {/* Featured Media Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4 items-center justify-items-center">
            {/* Bloomberg */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-sans text-[18px] tracking-tighter uppercase font-semibold text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                Bloomberg
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                Trade Analysis
              </span>
            </div>

            {/* Forbes */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-serif text-[20px] tracking-tight uppercase text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                Forbes
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                Leadership
              </span>
            </div>

            {/* Variety */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-mono text-[16px] tracking-widest text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors font-bold">
                VARIETY
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                Film Co-Pro
              </span>
            </div>

            {/* CNBC-TV18 */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-sans text-[15px] tracking-normal font-bold text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                CNBC-TV18
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                Market View
              </span>
            </div>

            {/* Financial Times */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-serif text-[19px] tracking-wider text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors font-semibold">
                FT
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                CEPA Pact
              </span>
            </div>

            {/* Khaleej Times */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-serif text-[16px] tracking-tight italic text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                Khaleej Times
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                Gulf Focus
              </span>
            </div>

            {/* Reuters */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-sans text-[16px] tracking-widest uppercase font-semibold text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                Reuters
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                Diplomatic Desk
              </span>
            </div>

            {/* Gulf News */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-serif text-[15px] tracking-normal font-medium text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                Gulf News
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                FDI Bilateral
              </span>
            </div>

            {/* FICCI */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-sans text-[16px] tracking-widest font-black text-[#d0c5af] group-hover:text-[#f2ca50] transition-colors">
                FICCI
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity">
                Industrial Pacts
              </span>
            </div>

            {/* Arab-India Chamber */}
            <div className="group flex flex-col items-center justify-center p-3 rounded hover:bg-[#1c1b1c] transition-all cursor-pointer w-full text-center">
              <span className="font-sans text-[13px] tracking-tight text-[#d0c5af] group-hover:text-[#f2ca50] leading-none transition-colors">
                Arab-India<br />
                <span className="text-[9px] tracking-widest uppercase">Chamber</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#99907c] opacity-0 group-hover:opacity-100 transition-opacity pt-0.5">
                Bilateral Envoy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY VERTICALS (TRADE | MEDIA | WOMEN LEADERSHIP | INVESTMENT ADVISORY) */}
      <section className="w-full bg-[#110f0c] py-20 lg:py-28 relative overflow-hidden" id="verticals">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#f2ca50]/5 rounded-full blur-[180px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-20">
          {/* Section Header with Refined Responsive Hierarchy */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 lg:mb-16 pb-6 border-b border-[#2e271a]">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1c1913] border border-[#d4af37]/40 text-[#f2ca50] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.24em] rounded-full shadow-sm">
                <Sparkles className="w-3 h-3 text-[#f2ca50]" />
                <span>Strategic Portfolios</span>
              </div>
              <h2 className="font-['Cinzel'] text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-[#f4efe6] leading-tight tracking-tight">
                Key Verticals
              </h2>
              {/* Responsive Category Chips - Sleek horizontal scroll on mobile, elegant wrap on desktop */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 sm:flex-wrap">
                {[
                  { name: 'Trade', desc: 'Bilateral Corridors' },
                  { name: 'Media', desc: 'Global Screens' },
                  { name: 'Women Leadership', desc: 'Civic Parity' },
                  { name: 'Investment Advisory', desc: 'Sovereign Capital' },
                ].map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171512] border border-[#3e3422] text-[#d0c5af] text-[10.5px] sm:text-[11px] font-medium tracking-wider uppercase font-['Montserrat'] shadow-xs whitespace-nowrap shrink-0"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]"></span>
                    <span className="text-[#f4efe6] font-semibold">{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
            <p className="font-['Montserrat'] text-[13px] sm:text-[14px] text-[#b8ad96] font-light max-w-md leading-relaxed">
              Sovereign execution across four foundational pillars uniting economic diplomacy, global storytelling, and civic governance.
            </p>
          </div>

          {/* 4 Key Verticals Grid - Responsive across Mobile, Tablet, and Laptop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
            {PILLARS.map((pillar) => {
              // Select custom visual effect for each vertical
              let highlightPill = 'Bilateral Corridor • $450M+ FDI Flow';
              let IconComponent = Compass;

              if (pillar.id === 'media') {
                highlightPill = 'Transnational Screens • Cannes & Venice';
                IconComponent = Film;
              } else if (pillar.id === 'women-leadership') {
                highlightPill = 'Civic Parity • 120,000+ Mobilized';
                IconComponent = Users;
              } else if (pillar.id === 'investment-advisory') {
                highlightPill = 'Sovereign Wealth • Capital Allocation';
                IconComponent = Coins;
              }

              return (
                <div
                  key={pillar.id}
                  className="group relative bg-[#14120f] hover:bg-[#181511] transition-all duration-500 flex flex-col justify-between rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_36px_rgba(212,175,55,0.09)] overflow-hidden border border-[#2e2617] hover:border-[#d4af37]/60"
                >
                  {/* Optimized Image Container with Unified Proportions via LazyImage */}
                  <div className="relative h-44 sm:h-48 md:h-52 w-full overflow-hidden bg-[#0c0b0a] border-b border-[#2e2617]/70">
                    <LazyImage
                      src={pillar.image || ''}
                      fallbackSrc={pillar.fallbackImage}
                      alt={`${pillar.title} showcase`}
                      aspectRatio="aspect-auto"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out filter brightness-[0.88] group-hover:brightness-100 contrast-105"
                    />

                    {/* Smooth Gradient Blend into Card Body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14120f] via-[#14120f]/30 to-transparent pointer-events-none"></div>

                    {/* Minimalist Top Elements: Domain Badge & Pillar Number */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b0a08]/85 backdrop-blur-md border border-[#d4af37]/40 text-[#f2ca50] shadow-sm">
                        <IconComponent className="w-3.5 h-3.5 text-[#f2ca50]" />
                        <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold tracking-[0.18em] uppercase">
                          {pillar.vertical}
                        </span>
                      </div>
                      <span className="font-mono text-[9px] font-semibold text-[#d4af37] tracking-widest uppercase px-2.5 py-0.5 bg-[#0b0a08]/85 backdrop-blur-md rounded border border-[#d4af37]/30 shadow-xs">
                        {pillar.pillarNumber}
                      </span>
                    </div>

                    {/* Minimalist Bottom Highlight on Image */}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0b0a08]/85 backdrop-blur-xs border border-[#d4af37]/25 text-[9.5px] font-['Montserrat'] text-[#e9c176] font-medium tracking-wider shadow-xs">
                        <Sparkles className="w-2.5 h-2.5 text-[#f2ca50] shrink-0" />
                        <span>{highlightPill}</span>
                      </div>
                      <span className="text-[8.5px] font-mono tracking-widest text-[#a89e8b] uppercase hidden sm:inline-block bg-[#0b0a08]/70 px-2 py-0.5 rounded border border-[#2e2617]">
                        {pillar.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body with Sleek Minimalist Padding and Spacing */}
                  <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      {/* Pillar Title */}
                      <h3 className="font-['Cinzel'] text-[19px] sm:text-[21px] text-[#f4efe6] font-normal leading-snug group-hover:text-[#f2ca50] transition-colors">
                        {pillar.title}
                      </h3>

                      {/* Clean Streamlined Description */}
                      <p className="font-['Montserrat'] text-[12.5px] sm:text-[13px] text-[#c8beaa] font-light leading-relaxed">
                        {pillar.description}
                      </p>

                      {/* Key Strategic Bullets with Subtle Gold Bullets */}
                      <ul className="space-y-1.5 pt-1 text-[#b8ad96] font-['Montserrat'] text-[11.5px] sm:text-[12px]">
                        {pillar.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0 opacity-80"></span>
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Actions Footer with Consistent Heights */}
                    <div className="pt-4 flex items-center justify-between gap-3 border-t border-[#2e2617]/80 mt-3">
                      <button
                        onClick={() => {
                          onSelectTab(pillar.targetTab);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 font-['Montserrat'] text-[10px] sm:text-[10.5px] font-bold group-hover:translate-x-1 transition-transform tracking-[0.16em] uppercase cursor-pointer py-1.5 text-[#f2ca50] hover:text-[#ffe088]"
                      >
                        <span>{pillar.linkText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          if (pillar.id === 'trade') onOpenCollaborate('investment');
                          else if (pillar.id === 'media') onOpenCollaborate('media');
                          else if (pillar.id === 'women-leadership') onOpenCollaborate('collaborate');
                          else onOpenCollaborate('investment');
                        }}
                        className="px-3.5 py-1.5 bg-[#171512] hover:bg-[#221d15] border border-[#3e3422] hover:border-[#f2ca50] text-[#c8beaa] hover:text-[#f2ca50] font-['Montserrat'] text-[9.5px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 rounded min-h-[36px] flex items-center justify-center cursor-pointer shadow-xs active:scale-[0.98]"
                      >
                        Direct Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP SPOTLIGHT & EMBOSSED STATEMENT */}
      <section className="w-full bg-[#0e0e0f] py-24 relative overflow-hidden border-y border-[#4d4635]/30">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Sovereign Statement Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <span className="font-sans text-[10px] font-semibold text-[#f2ca50] tracking-[0.25em] uppercase">
                  Executive Manifesto
                </span>
                <div className="w-12 h-0.5 bg-[#f2ca50]/50"></div>
              </div>

              <blockquote className="font-serif text-[20px] sm:text-[24px] lg:text-[27px] text-[#e5e2e3] leading-snug italic font-normal">
                “True leadership is not merely occupying space at the global table, but building corridors where sovereign commerce, cultural art, and humanitarian dignity converge.”
              </blockquote>

              <div className="space-y-2 pt-3 border-t border-[#4d4635]/30">
                <h4 className="font-serif text-[18px] sm:text-[20px] text-[#e5e2e3] font-medium uppercase tracking-wider">
                  Zeenat Kureshi
                </h4>
                <p className="font-sans text-[13.5px] text-[#e9c176]">
                  Trade Commissioner <span className="text-[#f2ca50]/60 px-1">|</span> Award-Winning Film Producer <span className="text-[#f2ca50]/60 px-1">|</span> National President
                </p>
                <p className="font-sans text-[12.5px] text-[#d0c5af] max-w-lg leading-relaxed pt-0.5">
                  Recognized across the Middle East, India, and European diplomatic corridors for uniting multilateral commercial agendas with cinematic storytelling that resonates across borders.
                </p>
              </div>

              {/* Signatory Credential Bar */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#f2ca50] text-3xl">verified</span>
                  <div className="flex flex-col">
                    <span className="font-sans text-[11px] font-semibold text-[#e5e2e3] uppercase tracking-wider">
                      Apostille Credential
                    </span>
                    <span className="font-sans text-[13px] text-[#d0c5af]">
                      Office of the Trade Commissioner
                    </span>
                  </div>
                </div>

                <div className="h-8 w-px bg-[#353436] hidden sm:block"></div>

                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#e9c176] text-3xl">gavel</span>
                  <div className="flex flex-col">
                    <span className="font-sans text-[11px] font-semibold text-[#e5e2e3] uppercase tracking-wider">
                      Civic Governance
                    </span>
                    <span className="font-sans text-[13px] text-[#d0c5af]">
                      National Council President
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Portrait with Editorial Elevation, 3D Gold Glow & Radiant Color Hover */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)] bg-[#161412] border border-[#d4af37]/45 hover:border-[#f2ca50] group transition-all duration-500 hover:shadow-[0_0_50px_rgba(242,202,80,0.35)]">
                {/* Dynamic Ambient Gold Backlight Flare */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-[#f2ca50]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {/* Subtle Cinematic Corner Highlights */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>

                <LazyImage
                  alt="Zeenat Kureshi Executive Manifesto Portrait"
                  aspectRatio="aspect-[4/5]"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
                  src="/images/zeenat_manifesto_color.jpg"
                  fallbackSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/20 to-transparent opacity-80 pointer-events-none group-hover:opacity-65 transition-opacity duration-500"></div>

                {/* Seal Badge floating over photo */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0a0908]/92 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-between border border-[#d4af37]/35 group-hover:border-[#f2ca50]/60 transition-all duration-300 z-20">
                  <div>
                    <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] tracking-[0.24em] uppercase block">
                      State Delegation Envoy
                    </span>
                    <span className="font-['Cinzel'] text-[13px] text-[#f4efe6]">
                      GCC – India Corridor Leadership
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#181510] border border-[#d4af37]/60 group-hover:border-[#f2ca50] flex items-center justify-center shrink-0 shadow-xs transition-colors">
                    <span className="font-['Cinzel'] text-[10px] font-bold text-[#f2ca50]">ZK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: DIRECT DIPLOMATIC CHANCERY PROTOCOL DESK */}
      <section className="w-full bg-[#131314] py-24 relative" id="connect">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
          <div className="bg-[#1c1b1c] rounded-2xl p-8 lg:p-16 shadow-2xl relative overflow-hidden border border-[#4d4635]/40">
            {/* Ambient Gold Flare */}
            <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#f2ca50]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-1.5">
                  <span className="font-sans text-[10px] font-semibold text-[#f2ca50] tracking-[0.25em] uppercase">
                    Institutional Protocol
                  </span>
                  <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[30px] text-[#e5e2e3] font-normal leading-tight">
                    Direct Diplomatic &amp; Media Chancery
                  </h2>
                </div>

                <p className="font-sans text-[13.5px] text-[#d0c5af] leading-relaxed">
                  For bilateral trade inquiries, film co-production submissions, keynote summit invitations, or accredited press communiqués, kindly contact the Executive Protocol Desk.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2b] flex items-center justify-center text-[#f2ca50] shrink-0 border border-[#4d4635]/50">
                      <span className="material-symbols-outlined text-xl">encrypted</span>
                    </div>
                    <div>
                      <span className="font-sans text-[11px] font-semibold text-[#e5e2e3] block uppercase tracking-wider">
                        Confidential Transmission
                      </span>
                      <span className="font-sans text-[13px] text-[#d0c5af]">
                        End-to-End Encrypted Protocol
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2b] flex items-center justify-center text-[#e9c176] shrink-0 border border-[#4d4635]/50">
                      <span className="material-symbols-outlined text-xl">schedule</span>
                    </div>
                    <div>
                      <span className="font-sans text-[11px] font-semibold text-[#e5e2e3] block uppercase tracking-wider">
                        Protocol Review SLA
                      </span>
                      <span className="font-sans text-[13px] text-[#d0c5af]">
                        Institutional responses within 24–48 hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protocol Fast Form */}
              <div className="lg:col-span-7 bg-[#0e0e0f] p-6 lg:p-8 rounded-xl shadow-inner border border-[#4d4635]/40">
                {formSubmitted ? (
                  <div className="p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#f2ca50]/10 border border-[#f2ca50] mx-auto flex items-center justify-center text-[#f2ca50]">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-[24px] text-[#e5e2e3]">Executive Dispatch Transmitted</h3>
                    <p className="font-sans text-[14px] text-[#d0c5af] max-w-md mx-auto leading-relaxed">
                      Your institutional transmission has been authenticated by 256-bit TLS protocol and logged into the Diplomatic Secretariat dossier.
                    </p>
                    <div className="p-3 bg-[#1c1b1c] border border-[#4d4635] max-w-xs mx-auto text-center">
                      <span className="text-[10px] text-[#99907c] uppercase tracking-wider block">Tracking Identifier</span>
                      <span className="font-mono text-[14px] text-[#f2ca50] font-bold tracking-wider">{formSubmitted}</span>
                    </div>
                    <button
                      onClick={() => setFormSubmitted(null)}
                      className="px-6 py-2.5 bg-[#f2ca50] text-[#3c2f00] font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-[#ffe088] transition-colors cursor-pointer"
                    >
                      Transmit Another Dispatch
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleDispatchSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                          Full Name / Honorific
                        </label>
                        <input
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-[#1c1b1c] border border-[#4d4635] px-4 py-3 font-sans text-[13px] text-[#e5e2e3] placeholder:text-[#99907c] focus:outline-none focus:border-[#f2ca50]"
                          placeholder="e.g. Amb. / Dr. / Ms. Sarah Al-Maktoum"
                          required
                          type="text"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                          Official / Institutional Email
                        </label>
                        <input
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#1c1b1c] border border-[#4d4635] px-4 py-3 font-sans text-[13px] text-[#e5e2e3] placeholder:text-[#99907c] focus:outline-none focus:border-[#f2ca50]"
                          placeholder="name@ministry-or-firm.com"
                          required
                          type="email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                          Mandate Category
                        </label>
                        <select
                          value={formData.mandate}
                          onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                          className="w-full bg-[#1c1b1c] border border-[#4d4635] px-4 py-3 font-sans text-[13px] text-[#e5e2e3] focus:outline-none focus:border-[#f2ca50]"
                        >
                          <option>Collaborate — Bilateral Partnership &amp; Missions</option>
                          <option>Media Inquiry — Press, Broadcast &amp; Festival Coverage</option>
                          <option>Investment Discussion — Sovereign Wealth &amp; FDI Corridors</option>
                          <option>Trade — GCC–India Free Zone Industrial Expansion</option>
                          <option>Women Leadership — Summit Keynote &amp; Governance</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                          Jurisdiction / Base
                        </label>
                        <input
                          value={formData.jurisdiction}
                          onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                          className="w-full bg-[#1c1b1c] border border-[#4d4635] px-4 py-3 font-sans text-[13px] text-[#e5e2e3] placeholder:text-[#99907c] focus:outline-none focus:border-[#f2ca50]"
                          placeholder="Dubai / New Delhi / Riyadh / London"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-sans text-[11px] font-semibold text-[#d0c5af] uppercase tracking-wider block">
                        Executive Brief / Dispatch
                      </label>
                      <textarea
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        className="w-full bg-[#1c1b1c] border border-[#4d4635] px-4 py-3 font-sans text-[13px] text-[#e5e2e3] placeholder:text-[#99907c] focus:outline-none focus:border-[#f2ca50]"
                        placeholder="Outline the nature of your institution's initiative or communique..."
                        required
                        rows={3}
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                      <span className="font-sans text-[13px] text-[#d0c5af] flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#f2ca50]" />
                        Diplomatic Confidentiality Assured
                      </span>

                      <button
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#f2ca50] text-[#3c2f00] font-sans text-[11px] font-bold tracking-widest uppercase hover:bg-[#ffe088] transition-all duration-300 shadow-lg cursor-pointer"
                        type="submit"
                      >
                        Transmit Executive Dispatch
                        <Send className="w-3.5 h-3.5 ml-2" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
