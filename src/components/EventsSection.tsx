import React, { useState } from 'react';
import { SCHOOL_EVENTS } from '../data/schoolData';
import { SchoolEvent } from '../types';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Video, 
  CheckCircle2, 
  UserCheck, 
  Sparkles,
  Award,
  Maximize2,
  X,
  ExternalLink,
  Gift,
  Heart,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [rsvpedEventIds, setRsvpedEventIds] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; linkUrl?: string } | null>(null);

  const toggleRsvp = (id: string) => {
    if (rsvpedEventIds.includes(id)) {
      setRsvpedEventIds(rsvpedEventIds.filter(i => i !== id));
    } else {
      setRsvpedEventIds([...rsvpedEventIds, id]);
    }
  };

  // Filter events into concluded/passed and upcoming
  const retirementEvent = SCHOOL_EVENTS.find(e => e.id === 'evt-retirement-adigbo');
  const upcomingEvents = SCHOOL_EVENTS.filter(e => e.id !== 'evt-retirement-adigbo');

  const retirementPhotos = [
    {
      url: "https://i.ibb.co/WRsLGTX/Whats-App-Image-2026-08-06-at-10-33-00-AM.jpg",
      title: "ACHSOSA Executive Presentation of Retirement Commemorative Gift to Mrs. Bola Adigbo",
      caption: "Executive presentation honoring her devoted service as Principal.",
      linkUrl: "https://ibb.co/zH9D6d82"
    },
    {
      url: "https://i.ibb.co/8LS6pbJC/Whats-App-Image-2026-08-06-at-8-09-54-PM-2.jpg",
      title: "Gift Presentation & Felicitation by Association Representatives",
      caption: "ACHSOSA alumni representatives presenting tokens of gratitude.",
      linkUrl: "https://ibb.co/bgs148C4"
    },
    {
      url: "https://i.ibb.co/3YdMb5Z2/Whats-App-Image-2026-08-06-at-8-09-54-PM-1.jpg",
      title: "Honorary Gift Package Delivered on Behalf of ACHSOSA Worldwide",
      caption: "Commemorative plaque and gift package from the global alumni body.",
      linkUrl: "https://ibb.co/7dCqG9hC"
    },
    {
      url: "https://i.ibb.co/nqFwT6wr/Whats-App-Image-2026-08-06-at-8-09-54-PM.jpg",
      title: "Retirement Celebration Reception with Alumni and School Staff",
      caption: "Group felicitation with school leadership and alumni delegation.",
      linkUrl: "https://ibb.co/8L4482g7"
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                  Mrs. Bola Adigbo Retirement Celebration Archive
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white font-serif mt-0.5">{selectedImage.title}</h4>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition shrink-0 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-16/10 sm:aspect-16/9 bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span className="text-emerald-400 font-medium">Ajebo Community High School Milestone Archive</span>
              {selectedImage.linkUrl && (
                <a 
                  href={selectedImage.linkUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                >
                  <span>View Full-Res Image</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Title Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-4 border border-emerald-700">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Calendar className="w-3.5 h-3.5" /> School Gatherings & Special Honors
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              ACHS Alumni Events & Milestone Celebrations
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Commemorating momentous milestones in the life of Ajebo Community High School, groundbreaking ceremonies, and meritorious service celebrations.
            </p>
          </div>
        </div>
      </div>

      {/* DEDICATED PASSED EVENT SECTION: RETIREMENT OF MRS BOLA ADIGBO */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-lg space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 border border-amber-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> Milestone Event (Concluded)
              </span>
              <span className="bg-emerald-100 text-emerald-900 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                August 2026
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pt-1">
              Retirement Celebration & Honor Ceremony for Mrs. Bola Adigbo
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Celebration of meritorious service and executive felicitation for esteemed retired Principal Mrs. Bola Adigbo by the Old Students Association (ACHSOSA).
            </p>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-2xl">
            <Gift className="w-5 h-5 text-amber-600 shrink-0" />
            <div className="text-left">
              <span className="text-[11px] font-bold text-slate-800 block">ACHSOSA Gift Presentation</span>
              <span className="text-[10px] text-slate-500">4 Commemorative Photos</span>
            </div>
          </div>
        </div>

        {/* Honouree Profile & Celebration Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-gradient-to-br from-amber-50/70 via-slate-50 to-emerald-50/40 rounded-3xl p-6 border border-amber-100">
          <div className="flex flex-col items-center text-center space-y-3">
            <div 
              onClick={() => setSelectedImage({
                url: "https://i.ibb.co/hJWdFwry/Whats-App-Image-2026-08-06-at-10-33-59-AM.jpg",
                title: "Mrs. Bola Adigbo — Celebrated Retired Principal",
                linkUrl: "https://ibb.co/7dCqG9hC"
              })}
              className="group relative w-36 h-44 sm:w-40 sm:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-md cursor-pointer bg-slate-200"
            >
              <img 
                src="https://i.ibb.co/hJWdFwry/Whats-App-Image-2026-08-06-at-10-33-59-AM.jpg" 
                alt="Mrs. Bola Adigbo"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base font-serif">Mrs. Bola Adigbo</h3>
              <p className="text-xs text-amber-800 font-semibold">Celebrated Retired Principal</p>
              <span className="text-[11px] text-slate-500">Ajebo Community High School</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                The Old Students Association (ACHSOSA) joined the school community, staff, and well-wishers to organize a glorious retirement and appreciation ceremony honoring <strong>Mrs. Bola Adigbo</strong> for her exceptional dedication and leadership.
              </p>
              <p>
                During the ceremony, executive representatives presented customized honorary gift packages and plaques on behalf of all Ajebites worldwide, recognizing her enduring contributions to academic discipline, student mentorship, and school welfare.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700">
                <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <span className="font-bold block text-slate-900">Event Date</span>
                  <span>August 2026 (Successfully Held)</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold block text-slate-900">Venue</span>
                  <span>ACHS Premises & Reception Hall</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery of Retirement Celebration Photos */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold font-serif text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600" />
              Retirement Ceremony & Gift Presentation Photos
            </h3>
            <span className="text-xs text-slate-500">Click any image to enlarge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {retirementPhotos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage({
                  url: photo.url,
                  title: photo.title,
                  linkUrl: photo.linkUrl
                })}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:shadow-md transition cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden">
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                    <Maximize2 className="w-5 h-5 text-amber-300" />
                  </div>
                </div>
                <div className="p-3 space-y-1 bg-slate-50 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-900 line-clamp-2 leading-tight">
                    {photo.title}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UPCOMING EVENTS SECTION */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Upcoming Alumni Events & Groundbreaking
            </h2>
            <p className="text-xs text-slate-600">
              Reserve your seat, join virtual live-streams, and support active school initiatives.
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg self-start sm:self-auto">
            {upcomingEvents.length} Upcoming Programs
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((evt) => {
            const isRsvped = rsvpedEventIds.includes(evt.id);
            return (
              <div 
                key={evt.id}
                className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="bg-emerald-100 text-emerald-900 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {evt.type}
                    </span>
                    {evt.isVirtual && (
                      <span className="bg-orange-100 text-orange-900 text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Video className="w-3 h-3 text-orange-600" /> Virtual
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg font-serif">{evt.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{evt.description}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                    <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                      <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{evt.time}</span>
                    </div>
                    <div className="flex items-start gap-2 text-slate-500">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <button
                    id={`rsvp-btn-${evt.id}`}
                    onClick={() => toggleRsvp(evt.id)}
                    className={`w-full py-2.5 rounded-xl font-medium text-xs transition flex items-center justify-center gap-1.5 ${
                      isRsvped 
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                        : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                    }`}
                  >
                    {isRsvped ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        RSVP Confirmed (See You There!)
                      </>
                    ) : (
                      <>
                        <UserCheck className="w-4 h-4 text-orange-400" />
                        RSVP / Attend Event
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

