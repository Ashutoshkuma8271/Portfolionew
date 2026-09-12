import React, { useState, useEffect } from 'react';
import { TIMELINE_EVENTS } from '../data/folioData';
import { LazyImage } from '../components/LazyImage';
import { ThreeDCard } from '../components/ThreeDCard';
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
    <div className="w-full bg-[#0d0c0b] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-16 sm:space-y-24">
      {/* Editorial Monograph Header */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
              <UserCheck className="w-3.5 h-3.5 text-[#f2ca50]" />
              <span>Diplomatic Biography &amp; Lineage</span>
            </div>
            <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
              Architect of <span className="italic font-serif text-gold-gradient">Sovereign Corridors</span>
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
              className="px-6 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-[0.18em] uppercase hover:brightness-110 transition-all cursor-pointer shadow-lg rounded-lg flex items-center gap-2"
            >
              <span>Request Diplomatic Audience</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ThreeDCard depth={10} glareOpacity={0.25} className="w-full max-w-[380px]">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85)] border border-[#d4af37]/45 hover:border-[#f2ca50] bg-[#161412] group transition-all duration-500 hover:shadow-[0_0_45px_rgba(242,202,80,0.3)]">
              {/* Dynamic Ambient Gold Backlight */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/30 via-[#f2ca50]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/60 pointer-events-none z-20 group-hover:border-[#f2ca50] transition-colors"></div>

              <LazyImage
                src="./images/zeenat_about_color.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Zeenat Kureshi Diplomatic Monograph Portrait"
                aspectRatio="aspect-[4/5]"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-104 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-transparent to-transparent opacity-80 pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#0a0908]/92 backdrop-blur-md rounded-xl border border-[#d4af37]/35 flex items-center justify-between z-20">
                <div>
                  <span className="font-['Montserrat'] text-[9px] font-bold text-[#f2ca50] tracking-[0.24em] uppercase block">
                    Diplomatic Dossier
                  </span>
                  <span className="font-['Cinzel'] text-[12px] text-[#f4efe6]">
                    Zeenat Kureshi &bull; Official Archive
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#181510] border border-[#d4af37]/60 flex items-center justify-center shrink-0">
                  <span className="font-['Cinzel'] text-[9.5px] font-bold text-[#f2ca50]">ZK</span>
                </div>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </section>

      {/* Diplomatic & Strategic Timeline */}
      <section className="space-y-10">
        <div className="space-y-2 border-b border-[#2d2516] pb-4">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Award className="w-3.5 h-3.5" />
            <span>Strategic Milestones</span>
          </div>
          <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6]">
            Chronology of <span className="italic font-serif text-gold-gradient">Statecraft &amp; Enterprise</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-[#382f1e] ml-4 md:ml-8 space-y-10 py-4">
          {TIMELINE_EVENTS.map((event, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Timeline marker node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#14120f] border-2 border-[#d4af37] group-hover:border-[#f2ca50] group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(212,175,55,0.4)]"></div>

              <div className="p-6 bg-[#161412] border border-[#2d2516] group-hover:border-[#d4af37]/60 rounded-xl space-y-3 transition-all duration-300 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-['Cinzel'] text-[18px] sm:text-[20px] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors">
                    {event.title}
                  </span>
                  <span className="px-3 py-1 rounded bg-[#0a0908] border border-[#d4af37]/30 text-[#f2ca50] font-mono text-[11px] font-bold">
                    {event.year}
                  </span>
                </div>

                <div className="inline-block text-[10px] font-['Montserrat'] font-bold text-[#e9c176] uppercase tracking-wider">
                  {event.entity}
                </div>

                <p className="font-['Montserrat'] text-[13px] sm:text-[13.5px] text-[#c8beaa] leading-relaxed font-light">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photographic Monograph Archive / Lightbox Gallery */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#2d2516] pb-4">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Camera className="w-3.5 h-3.5" />
            <span>Monograph Archive</span>
          </div>
          <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6]">
            Photographic <span className="italic font-serif text-gold-gradient">Archive &amp; Diplomatic Engagements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <ThreeDCard key={photo.id} depth={8} glareOpacity={0.15}>
              <div
                onClick={() => setActivePhotoIndex(index)}
                className="group relative bg-[#161412] border border-[#2d2516] hover:border-[#d4af37] rounded-xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0b0a]">
                  <LazyImage
                    src={photo.image}
                    fallbackSrc={photo.fallbackImage}
                    alt={photo.title}
                    aspectRatio="aspect-[16/10]"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent opacity-80"></div>

                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0a0908]/85 backdrop-blur-md border border-[#d4af37]/30 text-[#f2ca50] font-['Montserrat'] text-[9px] font-bold uppercase tracking-wider">
                    {photo.category}
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#0a0908]/85 backdrop-blur-md border border-[#d4af37]/30 text-[#f2ca50] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#9c8e76]">
                    <span>{photo.location}</span>
                    <span className="font-mono">{photo.year}</span>
                  </div>
                  <h3 className="font-['Cinzel'] text-[16px] text-[#f4efe6] group-hover:text-[#f2ca50] transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="font-['Montserrat'] text-[12px] text-[#c8beaa] line-clamp-2 font-light">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#161412] border border-[#d4af37]/60 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#2d2516] pb-3">
              <div>
                <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] uppercase tracking-widest block">
                  {activePhoto.category} &bull; {activePhoto.year}
                </span>
                <h3 className="font-['Cinzel'] text-[18px] sm:text-[22px] text-[#f4efe6]">
                  {activePhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 rounded-full bg-[#0a0908] border border-[#382f1e] text-[#c8beaa] hover:text-[#f2ca50] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
              <LazyImage
                src={activePhoto.image}
                fallbackSrc={activePhoto.fallbackImage}
                alt={activePhoto.title}
                aspectRatio="aspect-video"
                containerClassName="w-full h-full"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] max-w-2xl font-light">
                {activePhoto.caption}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActivePhotoIndex((prev) =>
                      prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : 0
                    )
                  }
                  className="p-2 rounded-lg bg-[#0a0908] border border-[#382f1e] text-[#f2ca50] hover:bg-[#201a10] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    setActivePhotoIndex((prev) =>
                      prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0
                    )
                  }
                  className="p-2 rounded-lg bg-[#0a0908] border border-[#382f1e] text-[#f2ca50] hover:bg-[#201a10] cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
