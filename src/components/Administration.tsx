import React, { useState } from 'react';
import { ADMIN_LEADERS, SCHOOL_INFO } from '../data/schoolData';
import { 
  UserCheck, 
  PhoneCall, 
  Award, 
  Calendar, 
  GraduationCap, 
  Info, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Maximize2,
  X,
  ExternalLink,
  Eye,
  Mail
} from 'lucide-react';
import { TabType } from '../types';

interface AdministrationProps {
  setActiveTab?: (tab: TabType) => void;
}

export const Administration: React.FC<AdministrationProps> = ({ setActiveTab }) => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; link?: string } | null>(null);

  const currentPrincipals = ADMIN_LEADERS.filter(l => l.status === 'active');
  const pastPrincipals = ADMIN_LEADERS.filter(l => l.status !== 'active');

  const principalOfficePhotos = [
    {
      url: "https://i.ibb.co/yFbQbQSp/Whats-App-Image-2026-08-06-at-11-54-04-AM.jpg",
      title: "Senior Principal Consultation Desk & Office Refurbishment",
      link: "https://ibb.co/whxzxzs7"
    },
    {
      url: "https://i.ibb.co/JFFn58cx/Whats-App-Image-2026-08-06-at-11-54-03-AM-1.jpg",
      title: "Administrative Office Interior & Document Storage Units",
      link: "https://ibb.co/844M6Gmz"
    },
    {
      url: "https://i.ibb.co/F44xXqRL/Whats-App-Image-2026-08-06-at-11-54-03-AM.jpg",
      title: "Renovated Senior Principal Office Entry & Documentation Facilities",
      link: "https://ibb.co/5hhMkxbg"
    },
    {
      url: "https://i.ibb.co/fd62ggW0/Whats-App-Image-2026-08-06-at-8-36-59-AM-1.jpg",
      title: "Renovated Senior Principal's Office & Archive Book Shelves",
      link: "https://ibb.co/RTr9FFKH"
    },
    {
      url: "https://i.ibb.co/wZJGBbbJ/Whats-App-Image-2026-08-06-at-8-36-59-AM-2.jpg",
      title: "Executive Office Furnishings & Document Storage Shelving",
      link: "https://ibb.co/1Ysy7pps"
    },
    {
      url: "https://i.ibb.co/3YzwYfyx/Whats-App-Image-2026-08-06-at-8-36-59-AM-3.jpg",
      title: "Office Interior & Documentation Storage Shelving",
      link: "https://ibb.co/3YzwYfyx"
    },
    {
      url: "https://i.ibb.co/ymQkpqjy/Whats-App-Image-2026-08-06-at-8-36-59-AM.jpg",
      title: "Senior Principal Office Fitted Cabinetry & Records Storage",
      link: "https://ibb.co/ymQkpqjy"
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
                  Senior Principal Office Renovation
                </span>
                <h4 className="text-lg font-bold text-white font-serif">{selectedImage.title}</h4>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition"
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
              <span>Completed by ACHSOSA (2026)</span>
              {selectedImage.link && (
                <a 
                  href={selectedImage.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                >
                  <span>View Original Image</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Page Title & Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-4 border border-emerald-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <UserCheck className="w-3.5 h-3.5" /> Institutional Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              School Administration & Principals
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Serving the academic governance of Ajebo Community High School across the Junior and Senior Arms in Obafemi Owode Local Government Area, Ogun State.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-emerald-700/80 p-5 rounded-2xl text-xs space-y-2 shrink-0 w-full md:w-72 shadow-inner">
            <div className="font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Educational Governance
            </div>
            <p className="text-emerald-100 font-medium">
              Ogun State Ministry of Education, Science & Technology
            </p>
            <p className="text-slate-400 text-[11px]">
              Obafemi Owode LGA Zonal Education Registry
            </p>
          </div>
        </div>
      </div>

      {/* ACTIVE PRINCIPALS SECTION */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Current Administration</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              School Principals (Junior & Senior Arms)
            </h2>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Verified Active Heads of School
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Principal Senior School */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-400/80 shadow-lg relative overflow-hidden space-y-6 flex flex-col justify-between hover:border-emerald-600 transition">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="bg-emerald-800 text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Principal Senior School
                </span>
                <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-md">
                  Active Tenure
                </span>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  Mrs. Karunwi Taiwo Omodunke
                </h3>
                <p className="text-sm font-semibold text-emerald-800 mt-1">
                  Principal, Senior School (ACHS SNR)
                </p>
                <p className="text-xs text-slate-500">
                  Ajebo Community High School, Obafemi Owode LGA
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                Overseeing senior secondary curriculum, WAEC & NECO examination readiness, student career guidance, academic excellence, and collaborating with ACHSOSA on school facility modernization.
              </p>

              {/* Direct Phone Contact */}
              <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white p-4 rounded-2xl border border-emerald-800 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold text-orange-300 uppercase tracking-wider">Direct Office Phone:</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white tracking-wide">
                    0803 046 3277
                  </div>
                </div>
                <a
                  href="tel:08030463277"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-xs shrink-0"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Office
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-700" />
                Senior Arm Administration
              </span>
              <span className="font-semibold text-emerald-800">Ajebo, Ogun State</span>
            </div>
          </div>

          {/* Principal Junior School */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-400/80 shadow-lg relative overflow-hidden space-y-6 flex flex-col justify-between hover:border-emerald-600 transition">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="bg-slate-900 text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Principal Junior School
                </span>
                <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold px-3 py-1 rounded-md">
                  Active Tenure
                </span>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  Mrs. Dawodu Omowonuola
                </h3>
                <p className="text-sm font-semibold text-emerald-800 mt-1">
                  Principal, Junior School (ACHS JNR)
                </p>
                <p className="text-xs text-slate-500">
                  Ajebo Community High School, Obafemi Owode LGA
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                Directing foundational secondary education, student moral discipline, academic excellence, junior curriculum implementation, and transition mentorship across JSS1–JSS3 classes.
              </p>

              {/* Direct Phone Contact */}
              <div className="bg-gradient-to-r from-emerald-900 to-emerald-950 text-white p-4 rounded-2xl border border-emerald-800 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold text-orange-300 uppercase tracking-wider">Direct Office Phone:</div>
                  <div className="text-base sm:text-lg font-mono font-bold text-white tracking-wide">
                    0803 258 2065
                  </div>
                </div>
                <a
                  href="tel:08032582065"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-xs shrink-0"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call Office
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-700" />
                Junior Arm Administration
              </span>
              <span className="font-semibold text-emerald-800">Ajebo, Ogun State</span>
            </div>
          </div>
        </div>

        {/* Official Administrative Correspondence Email */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-emerald-700 shrink-0" />
            <div>
              <strong className="text-emerald-950 font-bold block text-sm font-serif">Official School Inquiries & Correspondence</strong>
              <span className="text-slate-600">For academic records, student credentials, and official institutional communication:</span>
            </div>
          </div>
          <a 
            href={`mailto:${SCHOOL_INFO.contactEmail}`}
            className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition shadow-xs shrink-0"
          >
            <Mail className="w-4 h-4 text-orange-400" />
            <span>{SCHOOL_INFO.contactEmail}</span>
          </a>
        </div>

        {/* RENOVATED SENIOR PRINCIPAL'S OFFICE GALLERY SHOWCASE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                ACHSOSA 2026 Facility Upgrade
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-0.5">
                Renovated Senior Principal's Office & Archive Shelving
              </h3>
              <p className="text-xs text-slate-600">
                Delivered by the Old Students Association (ACHSOSA) with modern desks, executive seating, and book shelves for student documentation.
              </p>
            </div>
            <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-3 py-1.5 rounded-xl border border-emerald-300 self-start sm:self-auto">
              5 Verified Photos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {principalOfficePhotos.map((photo, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedImage({
                  url: photo.url,
                  title: photo.title,
                  link: photo.link
                })}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-200 aspect-4/3 bg-slate-900 shadow-xs hover:border-orange-400 hover:shadow-md transition flex flex-col justify-between"
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                  <Maximize2 className="w-5 h-5 text-orange-300" />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-2.5">
                  <p className="text-[11px] font-semibold text-white line-clamp-2 leading-tight">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Archival Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-950 space-y-2">
        <div className="flex items-center gap-2 font-bold font-serif text-base text-amber-900">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Note on Localized Public School Registries</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
          Due to the decentralized nature of localized public school registries in Ogun State, a comprehensive, chronologically unbroken list of all principals since the late 1970s is compiled collaboratively between the state board and the Ajebo Community High School Old Students Association (ACHSOSA).
        </p>
      </div>

      {/* Historical & Past Verified Administrators */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Archival Registry</span>
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Historical Principals & Administrators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastPrincipals.map((leader) => (
            <div 
              key={leader.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-3 py-1 rounded-full border border-slate-200">
                    {leader.arm || 'Ajebo Community High School'}
                  </span>
                  <span className="bg-orange-50 text-orange-800 text-[11px] font-bold px-2 py-0.5 rounded-md border border-orange-200">
                    {leader.status === 'retired' ? 'Retired Leader' : 'Pioneer Era'}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">{leader.name}</h3>
                  <p className="text-xs text-emerald-800 font-medium">{leader.role}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">Tenure: {leader.period}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                  <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">Notable Milestone:</div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {leader.notableAchievement}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Verified Public Record</span>
                <span className="text-emerald-700 font-semibold">ACHS Archive</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LINK BANNER TO DISTINGUISHED ALUMNI (BOARD OF TRUSTEES & AMBASSADORS) */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white rounded-3xl p-8 border border-slate-700 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Alumni Governance
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
            Looking for ACHSOSA Board of Trustees & Ambassadors?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            The ACHSOSA Board of Trustees and Alumni Ambassadors registry has been organized under the <strong>Distinguished Alumni</strong> section.
          </p>
        </div>

        {setActiveTab && (
          <button
            onClick={() => setActiveTab('alumni')}
            className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-6 py-3.5 rounded-xl transition flex items-center gap-2 shadow-sm shrink-0"
          >
            <span>View Distinguished Alumni</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
