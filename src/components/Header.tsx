import React, { useState, useEffect } from 'react';
import { TabId } from '../types';
import { CollaborateMode } from './CollaborateModal';
import { 
  Menu, 
  X, 
  Lock, 
  Handshake, 
  Home, 
  User, 
  TrendingUp, 
  Film, 
  HeartHandshake, 
  BookOpen, 
  Mail,
  ChevronRight,
  Shield,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
  onOpenCollaborate: (mode?: CollaborateMode) => void;
  onOpenVipPortal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenCollaborate,
  onOpenVipPortal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Synchronized and Consistent Navigation Items across Desktop & Mobile
  const navItems: { id: TabId; label: string; subLabel: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', subLabel: 'Sovereign Monograph', icon: Home },
    { id: 'about-zeenat', label: 'About', subLabel: 'Diplomatic Credentials', icon: User },
    { id: 'trade-investment', label: 'Trade & FDI', subLabel: 'GCC–India Corridors', icon: TrendingUp },
    { id: 'media-press', label: 'Media & Press', subLabel: 'Cinema & Accreditations', icon: Film },
    { id: 'women-leadership', label: 'Women Leadership', subLabel: 'National Civic Mandate', icon: HeartHandshake },
    { id: 'blog', label: 'Insights', subLabel: 'Monographs & Research', icon: BookOpen },
    { id: 'contact', label: 'Contact', subLabel: 'Diplomatic Chancery Desk', icon: Mail },
  ];

  // Detect scroll for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (tab: TabId) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#09090a]/95 backdrop-blur-2xl border-b border-[#2d2516]/90 shadow-[0_4px_30px_rgba(0,0,0,0.7)]' 
          : 'bg-[#0b0b0c]/90 backdrop-blur-xl border-b border-[#282215]/80 shadow-[0_2px_16px_rgba(0,0,0,0.45)]'
      }`}
    >
      <div className="h-14 sm:h-[64px] max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Luxury Vector Crest & Brand Wordmark */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 sm:gap-3 text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="Zeenat Kureshi - Executive Folio Home"
          >
            {/* Bespoke Luxury Vector Crest Monogram */}
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-[#1c1913] to-[#0e0d0b] border border-[#d4af37]/60 group-hover:border-[#f2ca50] transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_18px_rgba(242,202,80,0.3)] shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="30" height="30" rx="3" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.6" />
                <rect x="5.5" y="5.5" width="25" height="25" rx="2" stroke="url(#goldGrad)" strokeWidth="1" />
                <path d="M18 7.5L19 9.5L21.2 9.7L19.5 11.2L20 13.3L18 12.2L16 13.3L16.5 11.2L14.8 9.7L17 9.5L18 7.5Z" fill="#f2ca50" />
                <text x="18" y="24" textAnchor="middle" fontFamily="'Bodoni Moda', serif" fontSize="13" fontWeight="700" fill="url(#goldTextGrad)" letterSpacing="0.05em">
                  ZK
                </text>
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f3d382" />
                    <stop offset="0.5" stopColor="#d4af37" />
                    <stop offset="1" stopColor="#8c6c21" />
                  </linearGradient>
                  <linearGradient id="goldTextGrad" x1="10" y1="14" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="0.4" stopColor="#f7e1a0" />
                    <stop offset="1" stopColor="#d4af37" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-[#f2ca50] rounded-full ring-1.5 ring-[#0b0b0c] shadow-[0_0_4px_#f2ca50]"></div>
            </div>

            {/* Prestige Wordmark & Subtitle */}
            <div className="flex flex-col shrink-0">
              <span className="font-['Cinzel'] text-[13.5px] sm:text-[15.5px] tracking-[0.16em] sm:tracking-[0.2em] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors leading-none uppercase font-semibold whitespace-nowrap">
                Zeenat Kureshi
              </span>
              <span className="font-['Montserrat'] text-[7px] sm:text-[7.5px] font-semibold text-[#d4af37] tracking-[0.24em] sm:tracking-[0.28em] uppercase whitespace-nowrap pt-1">
                Executive Folio
              </span>
            </div>
          </button>
        </div>

        {/* Desktop Navigation Links — Consistent Names & Refined Typography */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-3 2xl:gap-5 shrink-0">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-all px-2.5 py-1.5 font-['Montserrat'] text-[10.5px] xl:text-[11px] tracking-[0.14em] uppercase whitespace-nowrap shrink-0 cursor-pointer relative rounded-md flex items-center gap-1.5 ${
                  isActive
                    ? 'text-[#f2ca50] font-bold bg-[#1e1a13]/80 border border-[#d4af37]/40 shadow-[0_0_12px_rgba(212,175,55,0.12)]'
                    : 'text-[#b8ad96] hover:text-[#f4efe6] hover:bg-[#161410]/50 font-medium border border-transparent'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-gradient-to-r from-transparent via-[#f2ca50] to-transparent rounded-full shadow-[0_0_8px_#f2ca50]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action CTAs: Single Luxury Collaborate Button & VIP Access */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Professional Single Luxury Collaborate Button — Refined for Desktop/Tablet */}
          <button
            onClick={() => onOpenCollaborate('collaborate')}
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] hover:from-[#ffe088] hover:to-[#f2ca50] font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold tracking-[0.14em] uppercase transition-all duration-300 rounded cursor-pointer whitespace-nowrap shadow-[0_2px_10px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_16px_rgba(242,202,80,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <Handshake className="w-3 h-3 text-[#1a1402]" />
            <span>Collaborate</span>
          </button>

          {/* VIP Access Portal Button */}
          <button
            onClick={onOpenVipPortal}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 sm:py-2 bg-[#171512] border border-[#3e3422] hover:border-[#f2ca50] text-[#c8beaa] hover:text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-medium tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 rounded shadow-xs hover:scale-[1.02] active:scale-[0.98]"
          >
            <Lock className="w-2.5 h-2.5 text-[#f2ca50]" />
            <span>VIP Portal</span>
          </button>

          {/* Executive Portrait Thumbnail */}
          <div
            onClick={() => handleNavClick('about-zeenat')}
            className="shrink-0 flex items-center pl-1 sm:pl-2 border-l border-[#2e2617] cursor-pointer"
            title="View Executive Credentials"
          >
            <div className="relative">
              <img
                alt="Zeenat Kureshi Monograph"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover shrink-0 aspect-square ring-1.5 ring-[#d4af37]/60 hover:ring-[#f2ca50] transition-all shadow-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IHnCaef41g32aYh105zuRmheL7FwAT-AndGJukXlIE3t4L0szoFQEx8N8S3oPLqPmulPo5Oo776ceRauA2mrWttmN0hpVMmyTa0pTwujXGtjzvMUBiUugC_-F00w5D3skN_AK9FxGE5wHuyFUOuCnS9w6PXK7qD9McLtiTa4qfAhLXGi3BBaDbauoUWTQ5ZowUhwCKD9zWtPptwld2KaXrFj9Uge6Tg0vxx9dGPBUC0JjEbTLaxZ"
              />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#d4af37] rounded-full ring-1 ring-[#0b0b0c]"></div>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#c8beaa] hover:text-[#f2ca50] transition-colors cursor-pointer rounded-lg bg-[#151310] border border-[#2d2516]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#f2ca50]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Luxury Mobile Menu Drawer with Unified Names & Premium Glassmorphism */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0908]/98 backdrop-blur-2xl border-b border-[#3e3422] px-4 sm:px-6 py-6 space-y-5 animate-in slide-in-from-top-4 duration-300 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Profile Header in Mobile Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-[#2a2215]">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1.5 ring-[#d4af37]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IHnCaef41g32aYh105zuRmheL7FwAT-AndGJukXlIE3t4L0szoFQEx8N8S3oPLqPmulPo5Oo776ceRauA2mrWttmN0hpVMmyTa0pTwujXGtjzvMUBiUugC_-F00w5D3skN_AK9FxGE5wHuyFUOuCnS9w6PXK7qD9McLtiTa4qfAhLXGi3BBaDbauoUWTQ5ZowUhwCKD9zWtPptwld2KaXrFj9Uge6Tg0vxx9dGPBUC0JjEbTLaxZ"
                  alt="Zeenat Kureshi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-['Cinzel'] text-[15px] font-semibold text-[#f4efe6] tracking-wide">
                  Zeenat Kureshi
                </h3>
                <span className="font-['Montserrat'] text-[9px] text-[#f2ca50] uppercase tracking-widest block font-medium">
                  Trade Envoy &amp; Producer
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#1c1913] border border-[#d4af37]/40 text-[#f2ca50] text-[8.5px] font-bold uppercase tracking-widest font-mono">
              <Shield className="w-2.5 h-2.5 text-[#f2ca50]" />
              Verified
            </span>
          </div>

          {/* Navigation Links — Exactly Matching Section Names */}
          <div className="flex flex-col space-y-1">
            <span className="font-['Montserrat'] text-[8.5px] font-bold uppercase tracking-[0.25em] text-[#8c8270] px-3 pb-1 block">
              Portfolio Navigation
            </span>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg font-['Montserrat'] transition-all cursor-pointer text-left ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2a2418] to-[#1c1913] text-[#f2ca50] border border-[#d4af37]/50 shadow-[0_2px_12px_rgba(212,175,55,0.15)] font-bold'
                      : 'text-[#d0c5af] hover:text-[#f4efe6] hover:bg-[#181613]/70 border border-transparent font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center ${
                      isActive ? 'bg-[#f2ca50]/20 text-[#f2ca50]' : 'bg-[#151310] text-[#a89d88]'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12.5px] uppercase tracking-[0.14em]">
                        {item.label}
                      </span>
                      <span className="text-[9.5px] text-[#8c8270] tracking-normal font-normal">
                        {item.subLabel}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#f2ca50]' : 'text-[#5a5242]'}`} />
                </button>
              );
            })}
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="pt-3 border-t border-[#2a2215] space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCollaborate('collaborate');
              }}
              className="w-full py-3 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] text-center font-['Montserrat'] text-[11px] font-bold uppercase tracking-[0.18em] hover:brightness-110 transition-all rounded-lg shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Handshake className="w-4 h-4" />
              Direct Strategic Collaboration
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVipPortal();
              }}
              className="w-full py-2.5 bg-[#171512] border border-[#443a27] text-[#c8beaa] text-center font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-[0.18em] hover:text-[#f2ca50] hover:border-[#f2ca50]/60 transition-all rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-[#f2ca50]" />
              VIP Confidential Protocol Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
