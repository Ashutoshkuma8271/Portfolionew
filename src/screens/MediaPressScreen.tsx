import React, { useState } from 'react';
import { FILM_PROJECTS, PRESS_ITEMS } from '../data/folioData';
import { LazyImage } from '../components/LazyImage';
import { 
  Film, 
  Newspaper, 
  Download, 
  ExternalLink, 
  Award, 
  Play, 
  Video, 
  Calendar, 
  MapPin, 
  X, 
  Sparkles, 
  Radio, 
  Mic2, 
  Eye, 
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

interface MediaPressScreenProps {
  onOpenMediaKit?: () => void;
}

export const MediaPressScreen: React.FC<MediaPressScreenProps> = ({ onOpenMediaKit }) => {
  const [activeSubTab, setActiveSubTab] = useState<'filmography' | 'press' | 'interviews' | 'speaking'>('filmography');
  const [selectedFilm, setSelectedFilm] = useState(FILM_PROJECTS[0]);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);
  const [selectedPressModal, setSelectedPressModal] = useState<typeof PRESS_ITEMS[0] | null>(null);

  // Embedded YouTube / Broadcast Interviews with High-Res Thumbnails
  const VIDEO_INTERVIEWS = [
    {
      id: 'v-1',
      title: 'CNBC-TV18 Global Diplomatic Dialogue: The GCC–India CEPA Miracle',
      source: 'CNBC-TV18 Special Feature',
      duration: '18:45',
      date: 'Feb 2026',
      thumbnail: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
      description: 'Zeenat Kureshi unpacks how $450M+ in cross-border FDI is moving through sovereign corridors and free trade zones.',
    },
    {
      id: 'v-2',
      title: 'Variety Cannes Panel: Financing Co-Productions Across South Asia & Gulf',
      source: 'Variety International Studio',
      duration: '24:10',
      date: 'Jan 2026',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1000&q=80',
      description: 'Keynote discussion on structuring multi-territory film finance, international tax incentives, and theatrical syndication.',
    },
    {
      id: 'v-3',
      title: 'Forbes Middle East Executive Spotlight: Empowering 120,000 Women',
      source: 'Forbes Leadership Series',
      duration: '14:20',
      date: 'Nov 2025',
      thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      fallbackThumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      description: 'Zeenat Kureshi reveals the grassroots architecture behind the All India Jamiatul Quresh Women Cell nationwide impact.',
    },
  ];

  // Speaking Engagements
  const SPEAKING_ENGAGEMENTS = [
    {
      id: 's-1',
      event: 'World Government Summit — Dubai',
      title: 'Plenary Address: Sovereign Trade Conduits & Digital Currency Corridors',
      date: 'February 2026',
      venue: 'Madinat Jumeirah, Dubai',
      audience: '1,400+ Sovereign Ministers & Ambassadors',
      topic: 'Cross-Border Capital Mobility & Regulatory Treaties',
    },
    {
      id: 's-2',
      event: 'FICCI Annual Bilateral Convention — New Delhi',
      title: 'Keynote: Indo-Gulf CEPA Phase II — Unleashing Creative & Industrial Capital',
      date: 'October 2025',
      venue: 'FICCI Federation House, New Delhi',
      audience: 'Industry Titans & Policy Architects',
      topic: 'Bilateral Free Trade & FDI Modernization',
    },
    {
      id: 's-3',
      event: 'Cannes Producers Network Summit — France',
      title: 'Masterclass: Bridging Bollywood, Arab Cinema & European Funds',
      date: 'May 2025',
      venue: 'Palais des Festivals, Cannes',
      audience: 'Accredited Transnational Film Producers',
      topic: 'Tripartite Soft Money & Tax Rebate Structuring',
    },
    {
      id: 's-4',
      event: 'All India Leadership Conclave — Mumbai',
      title: 'Presidential Address: Institutional Micro-Grants as Civic Sovereignty',
      date: 'August 2024',
      venue: 'Taj Mahal Palace, Mumbai',
      audience: '3,000+ Women Entrepreneurs & Civic Delegates',
      topic: 'Financial Self-Reliance & Grassroots Inclusion',
    },
  ];

  const subTabs = [
    { id: 'filmography', label: 'Filmography', count: FILM_PROJECTS.length, icon: Film },
    { id: 'press', label: 'Press Coverage', count: PRESS_ITEMS.length, icon: Newspaper },
    { id: 'interviews', label: 'YouTube Interviews', count: VIDEO_INTERVIEWS.length, icon: Video },
    { id: 'speaking', label: 'Keynote Speaking', count: SPEAKING_ENGAGEMENTS.length, icon: Mic2 },
  ] as const;

  return (
    <div className="w-full bg-[#131314] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
      {/* Screen Header & Top Action */}
      <section className="space-y-6 border-b border-[#382f1e]/80 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
              <Film className="w-3.5 h-3.5 text-[#f2ca50]" />
              <span>Cinematic Art &amp; Accredited Press</span>
            </div>
            <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
              Cinematic Works &amp; <span className="italic font-serif text-[#f2ca50]">Global Press</span>
            </h1>
            <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] leading-relaxed font-light">
              Curating high-concept cinematic IP that marries commercial viability with profound socio-cultural narratives across global festival circuits, premier broadcasts, and top financial journals.
            </p>
          </div>

          {/* Prominent, Elegant Media Kit Download Button */}
          {onOpenMediaKit && (
            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenMediaKit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] hover:brightness-110 font-['Montserrat'] text-[10.5px] font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(212,175,55,0.25)] cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#1a1402]" />
                <span>Download Media Kit (PDF)</span>
              </button>
            </div>
          )}
        </div>

        {/* Clean, Dedicated Horizontal Tab Bar with Glassmorphism & No Wrap Crunch */}
        <div className="pt-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 border-b border-[#282215]">
            {subTabs.map((tab) => {
              const isActive = activeSubTab === tab.id;
              const IconComp = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg font-['Montserrat'] text-[11px] sm:text-[12px] uppercase tracking-[0.14em] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#241f15] to-[#18150f] text-[#f2ca50] border border-[#d4af37]/60 shadow-[0_2px_12px_rgba(212,175,55,0.15)]'
                      : 'text-[#b8ad96] hover:text-[#f4efe6] hover:bg-[#181613]/60 border border-transparent'
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#f2ca50]' : 'text-[#8c8270]'}`} />
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.2 text-[9.5px] font-mono rounded-full ${
                    isActive ? 'bg-[#f2ca50]/20 text-[#f2ca50]' : 'bg-[#151310] text-[#7a7262]'
                  }`}>
                    {tab.count}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#f2ca50] to-transparent rounded-full shadow-[0_0_8px_#f2ca50]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 1. FILMOGRAPHY TAB */}
      {activeSubTab === 'filmography' && (
        <section className="space-y-12 animate-in fade-in duration-300">
          {/* Featured Cinema Hero Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 bg-[#161412] border border-[#3e3422] overflow-hidden rounded-2xl shadow-2xl">
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]">
              <LazyImage
                src={selectedFilm.image}
                alt={selectedFilm.title}
                aspectRatio="aspect-[16/10]"
                containerClassName="w-full h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[460px]"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent opacity-90 pointer-events-none"></div>
              
              {/* Badges on Hero Film */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none z-10">
                <span className="px-3 py-1 bg-[#0a0907]/90 backdrop-blur-md border border-[#f2ca50]/50 text-[#f2ca50] font-['Montserrat'] text-[10px] font-bold uppercase tracking-widest rounded-md shadow-md">
                  {selectedFilm.status} &bull; {selectedFilm.year}
                </span>
                <span className="px-3 py-1 bg-[#0a0907]/80 backdrop-blur-md border border-[#d4af37]/30 text-[#e9c176] font-['Montserrat'] text-[10px] font-medium uppercase tracking-wider rounded-md">
                  {selectedFilm.genre}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 text-[#f2ca50] font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.2em]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Cinematic Venture</span>
                </div>
                <h2 className="font-['Cinzel'] text-[28px] sm:text-[34px] text-[#f4efe6] leading-tight font-normal">
                  {selectedFilm.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2 text-[11.5px] font-mono text-[#f2ca50] py-1 border-y border-[#2d2516]">
                  <span className="font-bold">{selectedFilm.role}</span>
                  <span>&bull;</span>
                  <span className="text-[#c8beaa]">{selectedFilm.territories}</span>
                </div>
                <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] leading-relaxed font-light">
                  {selectedFilm.synopsis}
                </p>
                <div className="pt-2 p-3.5 rounded-lg bg-[#0e0d0b] border border-[#2d2516] space-y-1">
                  <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#f2ca50]" />
                    <span>Festival Accreditations &amp; Honours</span>
                  </span>
                  <p className="font-serif text-[13px] text-[#f4efe6] italic">
                    {selectedFilm.accolades}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => alert(`Inquiring distribution / syndication rights for ${selectedFilm.title}`)}
                  className="w-full py-3 bg-[#1e1a13] hover:bg-[#2a2418] border border-[#d4af37]/60 hover:border-[#f2ca50] text-[#f2ca50] font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-[0.16em] rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Film Syndicate Dossier</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Film Projects Grid (4-Columns) */}
          <div className="space-y-4">
            <h3 className="font-['Cinzel'] text-[20px] text-[#f4efe6] font-normal">
              Select Filmography Project
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {FILM_PROJECTS.map((film) => (
                <button
                  key={film.id}
                  onClick={() => {
                    setSelectedFilm(film);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`text-left group relative bg-[#161412] border overflow-hidden rounded-xl cursor-pointer transition-all duration-300 shadow-md ${
                    selectedFilm.id === film.id
                      ? 'border-[#f2ca50] ring-1.5 ring-[#f2ca50] shadow-[0_0_20px_rgba(242,202,80,0.2)]'
                      : 'border-[#382f1e]/70 hover:border-[#d4af37]'
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <LazyImage
                      src={film.image}
                      alt={film.title}
                      aspectRatio="aspect-[16/10]"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#0a0907]/90 text-[#f2ca50] text-[9px] font-bold uppercase tracking-wider rounded font-mono border border-[#f2ca50]/40">
                      {film.year}
                    </div>
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#0a0907]/80 text-[#c8beaa] text-[8.5px] uppercase tracking-wider rounded font-mono">
                      {film.status}
                    </div>
                  </div>
                  <div className="p-4 space-y-1.5 bg-[#141210]">
                    <h4 className="font-['Cinzel'] text-[16px] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors leading-snug font-normal">
                      {film.title}
                    </h4>
                    <span className="text-[10px] text-[#d4af37] block font-mono uppercase">{film.genre}</span>
                    <p className="text-[11px] text-[#a89d88] line-clamp-2 font-['Montserrat'] font-light">
                      {film.synopsis}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 2. PRESS & COVERAGE TAB */}
      {activeSubTab === 'press' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESS_ITEMS.map((press) => (
              <div
                key={press.id}
                className="p-6 bg-[#161412] border border-[#382f1e]/80 hover:border-[#f2ca50]/70 transition-all duration-300 rounded-xl space-y-4 flex flex-col justify-between shadow-lg hover:shadow-[0_8px_24px_rgba(212,175,55,0.12)] group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[10.5px]">
                    <span className="font-['Montserrat'] font-bold text-[#f2ca50] uppercase tracking-wider px-2 py-0.5 rounded bg-[#1f1b14] border border-[#d4af37]/30">
                      {press.publication}
                    </span>
                    <span className="text-[#8c8270] font-mono">{press.date}</span>
                  </div>
                  <h3 className="font-serif text-[19px] sm:text-[20px] text-[#f4efe6] font-normal leading-snug group-hover:text-[#f2ca50] transition-colors">
                    &ldquo;{press.headline}&rdquo;
                  </h3>
                  <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed italic font-light">
                    {press.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2a2215] flex justify-between items-center text-[11px]">
                  <span className="text-[#e9c176] font-mono text-[10px] uppercase tracking-wider">{press.category}</span>
                  <button
                    onClick={() => setSelectedPressModal(press)}
                    className="inline-flex items-center gap-1 text-[#f2ca50] hover:text-[#ffe088] font-['Montserrat'] text-[10.5px] font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Press Article Modal */}
          {selectedPressModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
              <div className="relative max-w-2xl w-full bg-[#14120f] border border-[#d4af37] rounded-2xl overflow-hidden p-6 sm:p-8 space-y-4 shadow-2xl">
                <div className="flex justify-between items-center pb-3 border-b border-[#382f1e]">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-widest">
                      {selectedPressModal.publication}
                    </span>
                    <span className="text-[10px] font-mono text-[#8c8270]">{selectedPressModal.date}</span>
                  </div>
                  <button onClick={() => setSelectedPressModal(null)} className="p-1.5 text-[#c8beaa] hover:text-[#f2ca50] cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-serif text-[22px] sm:text-[24px] text-[#f4efe6] leading-snug">
                  &ldquo;{selectedPressModal.headline}&rdquo;
                </h3>

                <p className="font-['Montserrat'] text-[14px] text-[#c8beaa] leading-relaxed">
                  {selectedPressModal.excerpt}
                </p>

                <div className="p-4 rounded-lg bg-[#0e0d0b] border border-[#2a2215] space-y-2">
                  <span className="text-[10px] font-mono text-[#f2ca50] uppercase tracking-wider block">Official Publication Dossier</span>
                  <p className="text-[12px] text-[#8c8270]">
                    Syndicated through verified international press bureaus and digital archives. Full institutional clipping included in the downloadable media kit.
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedPressModal(null)}
                    className="px-5 py-2.5 bg-[#f2ca50] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold uppercase tracking-wider rounded-lg cursor-pointer hover:bg-[#ffe088] transition-colors"
                  >
                    Close Monograph
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 3. YOUTUBE / BROADCAST INTERVIEWS */}
      {activeSubTab === 'interviews' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {VIDEO_INTERVIEWS.map((video) => (
              <div
                key={video.id}
                className="bg-[#161412] border border-[#382f1e]/80 rounded-2xl overflow-hidden space-y-4 flex flex-col justify-between shadow-xl group hover:border-[#d4af37] transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-video group cursor-pointer" onClick={() => setActiveVideoModal(video.title)}>
                    <LazyImage
                      src={video.thumbnail}
                      fallbackSrc={video.fallbackThumbnail}
                      alt={video.title}
                      aspectRatio="aspect-video"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-13 h-13 rounded-full bg-[#f2ca50] text-[#1a1402] flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(242,202,80,0.5)]">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/85 text-white font-mono text-[9.5px] rounded border border-white/20">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[9.5px] font-bold text-[#f2ca50] uppercase tracking-widest block font-mono">
                      {video.source} &bull; {video.date}
                    </span>
                    <h3 className="font-['Cinzel'] text-[17px] text-[#f4efe6] leading-snug group-hover:text-[#f2ca50] transition-colors font-normal">
                      {video.title}
                    </h3>
                    <p className="font-['Montserrat'] text-[12.5px] text-[#c8beaa] leading-relaxed pt-1 font-light">
                      {video.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1">
                  <button
                    onClick={() => setActiveVideoModal(video.title)}
                    className="w-full py-2.5 bg-[#0e0d0b] border border-[#382f1e] hover:border-[#f2ca50] text-[#f4efe6] hover:text-[#f2ca50] text-[10.5px] font-['Montserrat'] font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Video className="w-3.5 h-3.5 text-[#f2ca50]" />
                    <span>Watch Studio Broadcast</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Video Modal Preview */}
          {activeVideoModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
              <div className="relative max-w-3xl w-full bg-[#14120f] border border-[#d4af37] rounded-2xl overflow-hidden p-6 space-y-4 shadow-2xl">
                <div className="flex justify-between items-center pb-2 border-b border-[#382f1e]">
                  <h3 className="font-serif text-[18px] text-[#f4efe6] pr-8">{activeVideoModal}</h3>
                  <button onClick={() => setActiveVideoModal(null)} className="p-1 text-[#c8beaa] hover:text-[#f2ca50] cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="aspect-video bg-[#080706] rounded-xl flex items-center justify-center relative border border-[#382f1e]">
                  <div className="text-center space-y-3 p-6">
                    <div className="w-16 h-16 rounded-full bg-[#f2ca50]/20 border border-[#f2ca50] flex items-center justify-center mx-auto text-[#f2ca50]">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                    <span className="font-serif text-[18px] text-[#e5e2e3] block">Official Studio Interview Stream</span>
                    <p className="font-sans text-[13px] text-[#d0c5af] max-w-md">
                      Accredited broadcast stream from the Chancery digital archives. HD syndication enabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* 4. SPEAKING ENGAGEMENTS TAB */}
      {activeSubTab === 'speaking' && (
        <section className="space-y-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPEAKING_ENGAGEMENTS.map((item) => (
              <div key={item.id} className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-4 shadow-lg hover:border-[#d4af37] transition-colors">
                <div className="flex justify-between items-start">
                  <span className="text-[9.5px] font-mono text-[#f2ca50] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#0e0d0b] rounded border border-[#f2ca50]/35">
                    {item.date}
                  </span>
                  <span className="text-[11px] text-[#a89d88] font-mono">{item.audience}</span>
                </div>
                <h3 className="font-['Cinzel'] text-[19px] sm:text-[20px] text-[#f4efe6] leading-snug font-normal">
                  {item.title}
                </h3>
                <div className="space-y-1.5 text-[12px] text-[#c8beaa]">
                  <div className="font-semibold text-[#e9c176]">{item.event}</div>
                  <div className="flex items-center gap-1.5 text-[#8c8270]">
                    <MapPin className="w-3.5 h-3.5 text-[#f2ca50]" />
                    <span>{item.venue}</span>
                  </div>
                </div>
                <div className="p-3 bg-[#0e0d0b] rounded-lg border border-[#2a2215] text-[11.5px] text-[#c8beaa] font-['Montserrat']">
                  <span className="text-[#f2ca50] font-bold">Keynote Topic: </span>{item.topic}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Downloadable Official Media Kit Bottom Section */}
      <section className="p-8 sm:p-10 bg-gradient-to-r from-[#181510] to-[#12100d] border border-[#d4af37]/60 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.24em]">
            <ShieldCheck className="w-4 h-4 text-[#f2ca50]" />
            <span>Accredited Press &amp; Protocol Desk</span>
          </div>
          <h3 className="font-['Cinzel'] text-[22px] sm:text-[26px] text-[#f4efe6]">
            Official Media Kit &amp; Press Biography
          </h3>
          <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] max-w-xl font-light">
            Includes high-resolution official portraits, approved bios, trade corridor briefers, and Cannes festival materials.
          </p>
        </div>

        <button
          onClick={onOpenMediaKit || (() => alert('Official Media Kit 2026 (ZIP - 45MB) package queued for download.'))}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] hover:from-[#ffe088] hover:to-[#f2ca50] font-['Montserrat'] text-[11px] font-bold tracking-widest uppercase transition-all cursor-pointer rounded-lg whitespace-nowrap shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="w-4 h-4" />
          <span>Download Media Kit (PDF &amp; Assets)</span>
        </button>
      </section>
    </div>
  );
};
