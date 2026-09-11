import React, { useState } from 'react';
import { LEADERSHIP_INITIATIVES } from '../data/folioData';
import { LazyImage } from '../components/LazyImage';
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
  ChevronRight
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
    <div className="w-full bg-[#131314] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-16 sm:space-y-20">
      {/* Monograph Header with Civic Mandate */}
      <section className="max-w-4xl space-y-3">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Statutory Civic Mandate</span>
          </div>
          <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
            All India Jamiatul Quresh <span className="italic font-serif text-[#f2ca50]">Women Cell</span>
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
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#f2ca50] block font-light leading-none">120K+</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Women Mobilized</span>
        </div>
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#e9c176] block font-light leading-none">4,200</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Enterprises Seed-Funded</span>
        </div>
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#f2ca50] block font-light leading-none">260+</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Corporate Charters</span>
        </div>
        <div className="space-y-1 p-3 rounded-xl bg-[#0e0d0b] border border-[#2d2516]">
          <span className="font-serif text-[26px] sm:text-[32px] text-[#e9c176] block font-light leading-none">18</span>
          <span className="font-['Montserrat'] text-[9.5px] sm:text-[10px] font-bold text-[#c8beaa] uppercase tracking-wider">Sovereign Conclaves</span>
        </div>
      </section>

      {/* Mission & Strategic Frameworks */}
      <section className="space-y-8">
        <div className="space-y-2 border-b border-[#382f1e]/80 pb-4">
          <div className="inline-flex items-center gap-2 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em]">
            <Award className="w-3.5 h-3.5" />
            <span>Constitutional Mission</span>
          </div>
          <h2 className="font-['Cinzel'] text-[26px] sm:text-[32px] text-[#f4efe6]">
            Mission &amp; Strategic Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-colors">
            <Users className="w-7 h-7 text-[#f2ca50]" />
            <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Financial Sovereignty &amp; Micro-Grants</h3>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Direct disbursement of zero-collateral micro-grants enabling home-based ventures, artisanal cooperatives, and retail shops.
            </p>
          </div>

          <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-colors">
            <ShieldCheck className="w-7 h-7 text-[#e9c176]" />
            <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Legal Aid &amp; Family Rights Desks</h3>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Pro bono legal counsel, statutory rights protection, and institutional counseling desks in 14 tier-1 and tier-2 states.
            </p>
          </div>

          <div className="p-6 bg-[#161412] border border-[#382f1e]/80 rounded-2xl space-y-3 shadow-lg hover:border-[#d4af37] transition-colors">
            <Award className="w-7 h-7 text-[#ffdea5]" />
            <h3 className="font-['Cinzel'] text-[19px] text-[#f4efe6]">Boardroom Parity &amp; Mentorship</h3>
            <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] leading-relaxed font-light">
              Training high-potential women professionals for independent board directorships, corporate committee appointments, and civic governance.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Conclaves with Visual Cards */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#382f1e]/80 pb-4">
          <div>
            <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] tracking-[0.24em] uppercase block">
              Civic Calendar
            </span>
            <h2 className="font-['Cinzel'] text-[26px] sm:text-[32px] text-[#f4efe6]">
              Upcoming Events &amp; Conclaves
            </h2>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('volunteer-form');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#f2ca50] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:brightness-110 transition-all cursor-pointer rounded-lg shadow-md"
          >
            Join as Member / Volunteer
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="bg-[#161412] border border-[#382f1e]/80 rounded-2xl overflow-hidden space-y-4 flex flex-col justify-between shadow-xl hover:border-[#d4af37] transition-colors">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <LazyImage
                    src={event.image}
                    alt={event.title}
                    aspectRatio="aspect-[16/10]"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-[#0a0907]/90 text-[#f2ca50] font-mono text-[9px] font-bold uppercase rounded border border-[#f2ca50]/40">
                    {event.status}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="font-['Cinzel'] text-[18px] text-[#f4efe6] font-normal leading-snug">
                    {event.title}
                  </h3>
                  <div className="space-y-1 text-[11.5px] text-[#c8beaa]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#f2ca50]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="font-['Montserrat'] text-[12.5px] text-[#c8beaa] leading-relaxed pt-1 font-light">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-[#2a2215] flex justify-between items-center text-[10.5px]">
                <span className="text-[#8c8270] font-mono">{event.organizer}</span>
                <span className="text-[#f2ca50] font-bold uppercase tracking-wider">Accredited</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer / Member Inquiry Form */}
      <section id="volunteer-form" className="bg-[#161412] border border-[#d4af37]/50 rounded-2xl p-6 sm:p-10 lg:p-12 space-y-8 shadow-2xl">
        <div className="max-w-2xl space-y-2 border-b border-[#2d2516] pb-5">
          <span className="font-['Montserrat'] text-[9.5px] font-bold text-[#f2ca50] tracking-widest uppercase block">
            National Enrollment Desk
          </span>
          <h2 className="font-['Cinzel'] text-[26px] sm:text-[34px] text-[#f4efe6]">
            Member &amp; Volunteer Registration
          </h2>
          <p className="font-['Montserrat'] text-[13px] text-[#c8beaa] font-light">
            Apply to become a verified member, state volunteer coordinator, or institutional patron of the All India Jamiatul Quresh Women Cell.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-[#0e0d0b] border border-[#d4af37] p-8 rounded-xl text-center space-y-4 max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#f2ca50]/15 text-[#f2ca50] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Cinzel'] text-[22px] text-[#f4efe6]">
              Enrollment Registered Successfully
            </h3>
            <p className="font-['Montserrat'] text-[13.5px] text-[#c8beaa] leading-relaxed">
              Welcome to the Women Cell sisterhood. Your registration credentials have been recorded at the National Secretariat.
            </p>
            <div className="p-3.5 bg-[#161412] border border-[#382f1e] inline-block rounded-lg font-mono text-[13px] text-[#f2ca50]">
              Membership ID: {membershipId}
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/?text=Hello%20Office%20of%20Zeenat%20Kureshi,%20I%20have%20registered%20as%20a%20member%20with%20ID%20${membershipId}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#122416] border border-[#23582d] text-[#8ae899] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:bg-[#1a3821] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#38b04a]" />
                <span>Join WhatsApp Member Broadcast</span>
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleMemberSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Full Name *
              </label>
              <input
                value={memberForm.fullName}
                onChange={(e) => setMemberForm({ ...memberForm, fullName: e.target.value })}
                required
                placeholder="e.g. Fatima Zehra / Dr. Ananya Sharma"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Email Address *
              </label>
              <input
                type="email"
                value={memberForm.email}
                onChange={(e) => setMemberForm({ ...memberForm, email: e.target.value })}
                required
                placeholder="name@domain.com"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                WhatsApp Phone Number *
              </label>
              <input
                value={memberForm.phone}
                onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                required
                placeholder="+91 98000 00000 / +971 50 000 0000"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                City &amp; State / Country *
              </label>
              <input
                value={memberForm.cityState}
                onChange={(e) => setMemberForm({ ...memberForm, cityState: e.target.value })}
                required
                placeholder="e.g. Mumbai, Maharashtra / New Delhi / Dubai"
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Membership Category / Role Desired *
              </label>
              <select
                value={memberForm.interest}
                onChange={(e) => setMemberForm({ ...memberForm, interest: e.target.value })}
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              >
                <option value="General Member — All India Jamiatul Quresh Women Cell">General Member — All India Jamiatul Quresh Women Cell</option>
                <option value="State / District Volunteer Coordinator">State / District Volunteer Coordinator</option>
                <option value="Legal & Medical Advisory Panel">Legal &amp; Medical Advisory Panel</option>
                <option value="Micro-Enterprise Grant Applicant">Micro-Enterprise Grant Applicant</option>
                <option value="Executive Boardroom Governance Fellow">Executive Boardroom Governance Fellow</option>
              </select>
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="font-['Montserrat'] text-[10.5px] font-semibold text-[#c8beaa] uppercase tracking-wider block">
                Brief Background &amp; Motivation
              </label>
              <textarea
                value={memberForm.experience}
                onChange={(e) => setMemberForm({ ...memberForm, experience: e.target.value })}
                rows={3}
                placeholder="Tell us about your profession, community involvement, or how you would like to contribute..."
                className="w-full bg-[#0e0d0b] border border-[#382f1e] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded-lg"
              />
            </div>

            <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#2d2516]">
              <span className="text-[10.5px] text-[#8c8270] uppercase tracking-wider font-mono">
                Official Certification Issued Upon Approval
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] font-['Montserrat'] text-[10.5px] font-bold tracking-widest uppercase hover:brightness-110 transition-all cursor-pointer rounded-lg shadow-lg"
              >
                <span>Submit Membership Application</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
