import React, { useState, useEffect } from 'react';
import { TIMELINE_EVENTS } from '../data/folioData';
import { LazyImage } from '../components/LazyImage';
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  Building2, 
  BookOpen, 
  Camera, 
  Sparkles, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  ZoomIn,
  UserCheck,
  Briefcase
} from 'lucide-react';

interface AboutScreenProps {
  onOpenCollaborate: () => void;
}

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  fallbackImage?: string;
  caption: string;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onOpenCollaborate }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const GALLERY_PHOTOS: GalleryPhoto[] = [
    {
      id: 'g-1',
      title: 'Diplomatic Chancery Monograph',
      category: 'Official Portrait',
      location: 'Dubai International Financial Centre',
      year: '2025',
      image: './images/zeenat_about.jpg',
      fallbackImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Executive diplomatic monograph portrait captured at the DIFC Chancery suites, Dubai.',
    },
    {
      id: 'g-2',
      title: 'Cannes Film Festival Marché Gala',
      category: 'Cinema & Arts',
      location: 'Cannes, France',
      year: 'May 2025',
      image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
      caption: 'Attending the official Cannes Marché du Film co-production forum representing cross-border cinematic productions.',
    },
    {
      id: 'g-3',
      title: 'GCC–India Bilateral Trade Conclave',
      category: 'Economic Diplomacy',
      location: 'Riyadh & Abu Dhabi',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      caption: 'Leading the trade commissioner delegation for bilateral CEPA investment frameworks.',
    },
    {
      id: 'g-4',
      title: 'National Presidency Civic Assembly',
      category: 'Civic Governance',
      location: 'New Delhi, India',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80',
      caption: 'Addressing over 3,500 delegates at the All India Jamiatul Quresh Women Cell National Assembly.',
    },
    {
      id: 'g-5',
      title: 'Venice Biennale Screen Delegations',
      category: 'International Arts',
      location: 'Venice, Italy',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      caption: 'Participating in high-level producer treaty roundtables during the Venice International Film Festival.',
    },
    {
      id: 'g-6',
      title: 'Sovereign Capital & CEPA Dialogue',
      category: 'Trade & FDI',
      location: 'Dubai & Mumbai',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      fallbackImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
      caption: 'Facilitating sovereign investment roundtables linking Gulf private wealth with high-growth Indian infrastructure.',
    },
  ];

  // Keyboard navigation for active lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhotoIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIndex((prev) =>
          prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, GALLERY_PHOTOS.length]);

  const activePhoto = activePhotoIndex !== null ? GALLERY_PHOTOS[activePhotoIndex] : null;

  return (
    <div className="w-full bg-[#131314] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-16 sm:space-y-24">
      {/* Editorial Monograph Header */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
              <UserCheck className="w-3.5 h-3.5 text-[#f2ca50]" />
              <span>Diplomatic Biography &amp; Lineage</span>
            </div>
            <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
              Architect of <span className="italic font-serif text-[#f2ca50]">Sovereign Corridors</span>
            </h1>
          </div>

          <p className="font-serif text-[16px] sm:text-[18px] text-[#e9c176] font-light leading-relaxed border-l-2 border-[#d4af37] pl-4">
            Bridging institutional diplomacy with global cinematic expression, Zeenat Kureshi occupies a distinctive vantage point at the crossroads of GCC-South Asia commerce and cultural statecraft.
          </p>

          <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] font-light leading-relaxed">
            Serving as GCC–India Trade Commissioner, she has been instrumental in orchestrating landmark bilateral trade dialogues, sovereign inward FDI conduits, and regulatory harmonization across UAE, Saudi Arabia, Qatar, and India. Concurrently, as an internationally recognized film producer, her screen works marry evocative human narratives with rigorous international co-production treaties.
          </p>

          <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] font-light leading-relaxed">
            In her civic mandate as National President of the Women Leadership Council, she has mobilized over 120,000 women across the subcontinent and Middle East through targeted enterprise grants, board parity advocacy, and executive governance fellowships.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={onOpenCollaborate}
              className="px-6 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-[0.18em] uppercase hover:brightness-110 transition-all cursor-pointer shadow-lg rounded-lg"
            >
              Request Diplomatic Audience
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)] border border-[#d4af37]/45 hover:border-[#f2ca50] bg-[#161412] group transition-all duration-500 hover:shadow-[0_0_45px_rgba(242,202,80,0.3)]">
            {/* Ambient Gold Backlight Flare */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-[#f2ca50]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Corner Notches */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>

            <LazyImage
              src="./images/zeenat_about_color.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
              alt="Zeenat Kureshi Diplomatic Monograph Portrait"
              aspectRatio="aspect-[4/5]"
              className="w-full h-full object-cover filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:brightness-110 group-hover:contrast-105 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/20 to-transparent opacity-90 pointer-events-none group-hover:opacity-65 transition-opacity duration-500"></div>
            <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0a0908]/92 backdrop-blur-md border border-[#d4af37]/35 group-hover:border-[#f2ca50]/60 rounded-xl shadow-lg transition-all duration-300 z-20">
              <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] tracking-widest uppercase block">
                Official Credential Holder
              </span>
              <span className="font-['Montserrat'] text-[12.5px] text-[#f4efe6] font-medium">
                Office of the Trade Commissioner &bull; GCC Corridor
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomatic Accreditations & Honours */}
      <section className="bg-[#161412] p-6 sm:p-10 lg:p-14 border border-[#382f1e]/80 rounded-2xl space-y-8 shadow-xl">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Award className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span>Institutional Standing</span>
          </div>
          <h2 className="font-['Cinzel'] text-[23px] sm:text-[30px] lg:text-[34px] font-normal leading-snug text-[#f4efe6]">
            Sovereign Accreditations &amp; Honours
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0e0d0b] border border-[#2d2516] space-y-3 rounded-xl hover:border-[#d4af37] transition-colors">
            <Award className="w-7 h-7 text-[#f2ca50]" />
            <h4 className="font-['Cinzel'] text-[18px] text-[#f4efe6]">Bilateral Economic Envoy</h4>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Certified by the Joint Trade Council for pioneering the UAE-India Comprehensive Economic Partnership treaty conduits.
            </p>
          </div>

          <div className="p-6 bg-[#0e0d0b] border border-[#2d2516] space-y-3 rounded-xl hover:border-[#d4af37] transition-colors">
            <Globe className="w-7 h-7 text-[#e9c176]" />
            <h4 className="font-['Cinzel'] text-[18px] text-[#f4efe6]">Transnational Film Producer</h4>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Accredited member of the International Producers Association, with selections across Cannes Marché, Venice, and Toronto.
            </p>
          </div>

          <div className="p-6 bg-[#0e0d0b] border border-[#2d2516] space-y-3 rounded-xl hover:border-[#d4af37] transition-colors">
            <ShieldCheck className="w-7 h-7 text-[#ffdea5]" />
            <h4 className="font-['Cinzel'] text-[18px] text-[#f4efe6]">National Council President</h4>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Leading the statutory civic mandate for grassroots empowerment, enterprise grants, and boardroom diversity governance.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Photo Gallery Section with Lazy Loading & Lightbox */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#382f1e]/80 pb-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[10px] font-bold uppercase tracking-[0.25em]">
              <Camera className="w-4 h-4 text-[#f2ca50]" />
              <span>Accredited Photography &amp; Archives</span>
            </div>
            <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] lg:text-[38px] text-[#f4efe6] font-normal leading-tight">
              Diplomatic &amp; Executive Gallery
            </h2>
          </div>
          <p className="font-['Montserrat'] text-[12.5px] sm:text-[13px] text-[#c8beaa] max-w-md font-light leading-relaxed">
            Curated visual monographs spanning bilateral chancery dialogues, international film market delegations, and civic presidencies.
          </p>
        </div>

        {/* 4:5 Aspect Ratio Photo Grid with Skeleton & Lazy Loading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative aspect-[4/5] bg-[#14120f] rounded-2xl overflow-hidden border border-[#382f1e]/70 hover:border-[#d4af37] transition-all duration-500 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_16px_36px_rgba(212,175,55,0.14)] flex flex-col justify-end"
            >
              {/* High-Resolution Gallery Image via LazyImage */}
              <LazyImage
                src={photo.image}
                fallbackSrc={photo.fallbackImage}
                alt={photo.title}
                aspectRatio="aspect-[4/5]"
                containerClassName="absolute inset-0 w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.9] group-hover:brightness-100 contrast-105"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none z-10"></div>

              {/* Category Badge & Zoom Indicator */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-20">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0a0907]/90 backdrop-blur-md border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]"></span>
                  <span>{photo.category}</span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#0a0907]/90 backdrop-blur-md border border-[#d4af37]/40 flex items-center justify-center text-[#e9c176] text-[10px] font-mono shadow-sm group-hover:scale-110 group-hover:border-[#f2ca50] group-hover:text-[#f2ca50] transition-all">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Card Content with Smooth Lift */}
              <div className="relative z-20 p-5 space-y-2 group-hover:-translate-y-0.5 transition-transform duration-300">
                <span className="text-[9.5px] font-mono text-[#d4af37] tracking-[0.16em] uppercase block">
                  {photo.location} &bull; {photo.year}
                </span>
                <h4 className="font-['Cinzel'] text-[17px] sm:text-[18px] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors leading-snug font-normal">
                  {photo.title}
                </h4>
                <p className="text-[11.5px] text-[#c8beaa]/90 line-clamp-2 leading-relaxed font-['Montserrat'] font-light">
                  {photo.caption}
                </p>
                <div className="pt-1.5 flex items-center justify-between border-t border-[#382f1e]/60 text-[10px] font-['Montserrat'] text-[#f2ca50] tracking-wider uppercase font-semibold">
                  <span>View Archival Monograph</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Lightbox / Modal for Expanded View */}
        {activePhoto && activePhotoIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-lg animate-in fade-in duration-200"
            onClick={() => setActivePhotoIndex(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#14120f] border border-[#d4af37]/70 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-5 sm:p-7 space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-[#382f1e]/70 pb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-widest">
                    {activePhoto.category}
                  </span>
                  <span className="text-[10.5px] font-mono text-[#d4af37] tracking-wider uppercase hidden sm:inline-block">
                    {activePhoto.location} &bull; {activePhoto.year}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10.5px] font-mono text-[#a89d88] tracking-widest">
                    {String(activePhotoIndex + 1).padStart(2, '0')} / {String(GALLERY_PHOTOS.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => setActivePhotoIndex(null)}
                    className="p-1.5 text-[#c8beaa] hover:text-[#f2ca50] bg-[#1a1712] hover:bg-[#252016] border border-[#3e3422] rounded-full cursor-pointer transition-colors"
                    aria-label="Close photo preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Photo Showcase with Navigation Chevrons */}
              <div className="relative max-h-[62vh] min-h-[280px] overflow-hidden rounded-xl bg-[#090807] flex items-center justify-center border border-[#382f1e]">
                <LazyImage
                  src={activePhoto.image}
                  fallbackSrc={activePhoto.fallbackImage}
                  alt={activePhoto.title}
                  aspectRatio="aspect-auto"
                  className="max-h-[62vh] w-auto max-w-full object-contain rounded"
                />

                {/* Left Navigation Chevron */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a0907]/85 hover:bg-[#1a1712] text-[#f2ca50] border border-[#d4af37]/50 hover:border-[#f2ca50] transition-all cursor-pointer shadow-lg active:scale-95 z-20"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Navigation Chevron */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePhotoIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0));
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#0a0907]/85 hover:bg-[#1a1712] text-[#f2ca50] border border-[#d4af37]/50 hover:border-[#f2ca50] transition-all cursor-pointer shadow-lg active:scale-95 z-20"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Description & Caption Footer */}
              <div className="space-y-2 pt-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-['Cinzel'] text-[20px] sm:text-[22px] text-[#f4efe6]">
                    {activePhoto.title}
                  </h3>
                  <span className="sm:hidden text-[10px] font-mono text-[#d4af37] tracking-wider uppercase">
                    {activePhoto.location} &bull; {activePhoto.year}
                  </span>
                </div>
                <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] font-light leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Diplomatic Timeline */}
      <section className="space-y-10">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Briefcase className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span>Historical Trajectory</span>
          </div>
          <h2 className="font-['Cinzel'] text-[28px] sm:text-[34px] text-[#f4efe6]">
            Timeline of Mandates &amp; Appointments
          </h2>
        </div>

        <div className="relative border-l border-[#382f1e] ml-3 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#131314] border-2 border-[#f2ca50] group-hover:bg-[#f2ca50] transition-colors"></div>
              <div className="space-y-1.5 bg-[#161412] p-5 sm:p-6 rounded-xl border border-[#2d2516] hover:border-[#d4af37] transition-all">
                <span className="font-mono text-[11px] font-bold text-[#f2ca50] tracking-widest uppercase">
                  {event.year}
                </span>
                <h3 className="font-['Cinzel'] text-[20px] text-[#f4efe6]">
                  {event.title}
                </h3>
                <span className="font-['Montserrat'] text-[12.5px] text-[#e9c176] block font-medium">
                  {event.entity}
                </span>
                <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed pt-1 font-light">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
