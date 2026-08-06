import React from 'react';
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
  Sparkles
} from 'lucide-react';
import { TabType } from '../types';

interface AdministrationProps {
  setActiveTab?: (tab: TabType) => void;
}

export const Administration: React.FC<AdministrationProps> = ({ setActiveTab }) => {
  const currentPrincipals = ADMIN_LEADERS.filter(l => l.status === 'active');
  const pastPrincipals = ADMIN_LEADERS.filter(l => l.status !== 'active');

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
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
          {/* Principal Junior School */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-400/80 shadow-lg relative overflow-hidden space-y-6 flex flex-col justify-between hover:border-emerald-600 transition">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="bg-emerald-800 text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Principal Junior School
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
                  Principal, Junior School (ACHS JNR)
                </p>
                <p className="text-xs text-slate-500">
                  Ajebo Community High School, Obafemi Owode LGA
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                Directing foundational secondary education, student moral discipline, academic excellence, and junior curriculum implementation across JSS1–JSS3 classes.
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
                Junior Arm Administration
              </span>
              <span className="font-semibold text-emerald-800">Ajebo, Ogun State</span>
            </div>
          </div>

          {/* Principal Senior School */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-400/80 shadow-lg relative overflow-hidden space-y-6 flex flex-col justify-between hover:border-emerald-600 transition">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="bg-slate-900 text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Principal Senior School
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
                  Principal, Senior School (ACHS SNR)
                </p>
                <p className="text-xs text-slate-500">
                  Ajebo Community High School, Obafemi Owode LGA
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                Overseeing senior secondary curriculum, WAEC & NECO examination readiness, student career guidance, and collaborating with ACHSOSA on school facility modernization.
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
                Senior Arm Administration
              </span>
              <span className="font-semibold text-emerald-800">Ajebo, Ogun State</span>
            </div>
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
