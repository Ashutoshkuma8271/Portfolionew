import React, { useState } from 'react';
import { LEADERSHIP_INITIATIVES } from '../data/folioData';
import { LazyImage } from '../components/LazyImage';
import { ThreeDCard } from '../components/ThreeDCard';
import { 
  Users, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Send, 
  MessageCircle,
  Sparkles,
  Camera,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface WomenLeadershipScreenProps {
  onOpenCollaborate: () => void;
}

export const WomenLeadershipScreen: React.FC<WomenLeadershipScreenProps> = ({ onOpenCollaborate }) => {
  // Member / Volunteer inquiry form state
  const [memberForm, setMemberForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    cityState: '',
    interest: 'General Member — All India Jamiatul Quresh Women Cell',
    experience: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [membershipId, setMembershipId] = useState('');

  const handleMemberSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `AIJQ-WC-${Math.floor(10000 + Math.random() * 90000)}`;
    setMembershipId(id);
    setFormSubmitted(true);
  };

  const UPCOMING_EVENTS = [
    {
      id: 'e-1',
      title: 'National Women Leadership & Micro-Enterprise Summit',
      date: 'November 14–16, 2026',
      location: 'Vigyan Bhawan, New Delhi',
      organizer: 'All India Jamiatul Quresh Women Cell',
      status: 'Registrations Open',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
      description: 'Assembling over 2,500 state delegates, female entrepreneurs, and micro-grant beneficiaries for sovereign leadership awards.',
    },
    {
      id: 'e-2',
      title: 'GCC–South Asia Women in Executive Governance Conclave',
      date: 'January 22, 2027',
      location: 'Dubai World Trade Centre, UAE',
      organizer: 'Diplomatic Chancery & Women Cell Secretariat',
      status: 'Protocol Invitation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      description: 'Connecting top corporate board members, sovereign wealth executives, and emerging women founders across India and the Gulf.',
    },
    {
      id: 'e-3',
      title: 'Grassroots Literacy & Financial Autonomy Workshop Tour',
      date: 'Monthly Series (2026–2027)',
      location: 'UP, Maharashtra, Rajasthan & Telangana',
      organizer: 'Civic Outreach Directorate',
      status: 'Active Fieldwork',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
      description: 'Targeted banking literacy, UPI micro-credit facilitation, and artisanal cooperative legal structuring.',
    },
  ];

  return (
    <div className="w-full bg-[#0d0c0b] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-16 sm:space-y-20">
      {/* Monograph Header with Civic Mandate */}
      <section className="max-w-4xl space-y-3">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Statutory Civic Mandate</span>
          </div>
          <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
            All India Jamiatul Quresh <span className="italic font-serif text-gold-gradient">Women Cell</span>
          </h1>
          <span className="font-['Montserrat'] text-[11px] sm:text-[12px] font-bold tracking-[0.16em] text-[#e9c176] uppercase block">
            Office of the National President — Zeenat Kureshi
          </span>
        </div>
        <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] leading-relaxed font-light">
          Spearheading a transformative socioeconomic movement across India and the diaspora. Mobilizing grassroots financial independence, legal empowerment, vocational certifications, and executive boardroom inclusion for over 120,000 women.
        </p>
      </section>

      {/* Impact Numbers */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-7 bg-[#161412] border border-[#382f1e]/80 rounded-2xl shadow-xl">
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">120K+</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Women Mobilized</span>
        </div>
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">4,200</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Enterprises Seed-Funded</span>
        </div>
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">260+</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Corporate Charters</span>
        </div>
        <div className="space-y-1 p-3.5 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[34px] text-gold-gradient block font-light leading-none">18</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider block">Sovereign Conclaves</span>
        </div>
      </section>

      {/* Mission & Strategic Frameworks */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#382f1e]/80 pb-4">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Award className="w-3.5 h-3.5" />
            <span>Four Pillars of Impact</span>
          </div>
          <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6]">
            Sovereign Empowerment Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP_INITIATIVES.map((initiative) => (
            <ThreeDCard key={initiative.id} depth={8} glareOpacity={0.15}>
              <div className="p-6 bg-[#161412] border border-[#382f1e]/80 hover:border-[#d4af37] rounded-2xl space-y-4 shadow-xl flex flex-col justify-between h-full transition-all">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e0d0b] border border-[#2d2516] flex items-center justify-center text-[#f2ca50]">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#d4af37] uppercase tracking-widest block">
                    {initiative.reach}
                  </span>
                  <h3 className="font-['Cinzel'] text-[18px] text-[#f4efe6]">
                    {initiative.title}
                  </h3>
                  <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
                    {initiative.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-[#231d14]">
                    {initiative.pillars.map((p, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11.5px] text-[#a89d87]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f2ca50]"></span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-[#2d2516] flex items-center justify-between text-[11px] text-[#8a7f6c] font-mono">
                  <span>Impact: {initiative.impactMetric}</span>
                  <span className="text-[#f2ca50]">Active</span>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </section>

      {/* Upcoming Summits & Conclaves */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#382f1e]/80 pb-4">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Summits &amp; Assemblies</span>
          </div>
          <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6]">
            Civic Leadership &amp; Conclave Calendar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <ThreeDCard key={event.id} depth={8} glareOpacity={0.15}>
              <div className="bg-[#161412] border border-[#382f1e]/80 hover:border-[#d4af37] rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between h-full transition-all">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0c0b0a]">
                  <LazyImage
                    src={event.image}
                    alt={event.title}
                    aspectRatio="aspect-[16/10]"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0a0908]/90 backdrop-blur-md border border-[#d4af37]/30 text-[#f2ca50] text-[9.5px] font-bold font-['Montserrat'] uppercase tracking-wider">
                    {event.status}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-[#8a7f6c] font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#f2ca50]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#8a7f6c] font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>{event.location}</span>
                    </div>
                    <h3 className="font-['Cinzel'] text-[17px] text-[#f4efe6] pt-1">
                      {event.title}
                    </h3>
                    <p className="font-['Montserrat'] text-[12.5px] text-[#c8beaa] leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#2d2516]">
                    <button
                      onClick={onOpenCollaborate}
                      className="w-full py-2.5 px-4 bg-[#0e0d0b] hover:bg-[#1c1913] border border-[#2d2516] hover:border-[#f2ca50] text-[#f4efe6] hover:text-[#f2ca50] font-['Montserrat'] text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span>Delegate Registration</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </section>

      {/* Membership & Volunteer Secretariat Form */}
      <section className="bg-[#14120f] border border-[#d4af37]/40 p-6 sm:p-10 rounded-2xl shadow-2xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2d2516] pb-4">
          <div className="space-y-1">
            <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] uppercase tracking-widest">
              Civic Onboarding
            </span>
            <h2 className="font-['Cinzel'] text-[24px] sm:text-[30px] text-[#f4efe6]">
              Join the Women Leadership Council
            </h2>
          </div>
          <span className="text-[11px] font-mono text-[#8a7f6c]">National Membership Registry</span>
        </div>

        {formSubmitted ? (
          <div className="p-8 text-center space-y-4 bg-[#0d0c0a] rounded-xl border border-[#2d2516]">
            <div className="w-14 h-14 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Cinzel'] text-[22px] text-[#f4efe6]">Membership Application Registered</h3>
            <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] max-w-md mx-auto">
              Welcome to the National Women Cell network. Your membership token is <span className="text-[#f2ca50] font-mono font-bold">{membershipId}</span>. The Secretariat will connect with chapter onboarding guidelines.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="px-6 py-2.5 bg-[#181510] border border-[#d4af37] text-[#f2ca50] hover:bg-[#d4af37] hover:text-[#1a1402] font-['Montserrat'] text-[10px] font-bold tracking-widest uppercase rounded-lg transition-all cursor-pointer"
            >
              Submit Another Registration
            </button>
          </div>
        ) : (
          <form onSubmit={handleMemberSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Full Name *
              </label>
              <input
                value={memberForm.fullName}
                onChange={(e) => setMemberForm({ ...memberForm, fullName: e.target.value })}
                required
                placeholder="e.g. Dr. Ayesha Siddiqui"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Email Address *
              </label>
              <input
                type="email"
                value={memberForm.email}
                onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                required
                placeholder="ayesha@organization.org"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Phone / WhatsApp *
              </label>
              <input
                value={memberForm.phone}
                onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                required
                placeholder="+91 98000 00000"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                City / State / Jurisdiction *
              </label>
              <input
                value={memberForm.cityState}
                onChange={(e) => setMemberForm({ ...memberForm, cityState: e.target.value })}
                required
                placeholder="Mumbai, Maharashtra / Dubai, UAE"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              />
            </div>

            <div className="md:col-span-2 space-y-1">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Membership Category *
              </label>
              <select
                value={memberForm.interest}
                onChange={(e) => setMemberForm({ ...memberForm, interest: e.target.value })}
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg font-['Montserrat']"
              >
                <option value="General Member — All India Jamiatul Quresh Women Cell">General Member — All India Jamiatul Quresh Women Cell</option>
                <option value="Executive Board Fellow — Corporate Governance Track">Executive Board Fellow — Corporate Governance Track</option>
                <option value="Micro-Enterprise Grant Applicant">Micro-Enterprise Grant Applicant</option>
                <option value="State Chapter Volunteer Envoy">State Chapter Volunteer Envoy</option>
                <option value="International GCC Chapter Delegate">International GCC Chapter Delegate</option>
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#2d2516]">
              <span className="text-[10.5px] text-[#8c8270] uppercase tracking-wider font-mono">
                Civic Governance Code of Conduct Applies
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:brightness-110 transition-all cursor-pointer rounded-lg shadow-lg"
              >
                <span>Submit Membership Dossier</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
