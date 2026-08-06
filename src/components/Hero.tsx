import React from 'react';
import { SCHOOL_INFO, NOTABLE_ALUMNI, SUB_PROJECTS, SCHOOL_ANTHEM, ADMIN_LEADERS } from '../data/schoolData';
import { TabType } from '../types';
import { 
  Building2, 
  HeartHandshake, 
  Award, 
  History, 
  GraduationCap, 
  MapPin, 
  ChevronRight, 
  ShieldAlert, 
  Sparkles,
  Users,
  CheckCircle2,
  Sprout,
  Music,
  Volume2,
  BookOpen,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: TabType) => void;
  onOpenDonate: () => void;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab, onOpenDonate, onOpenRegister }) => {
  const juniorPrincipal = ADMIN_LEADERS.find(l => l.id === "mrs-karunwi-taiwo-omodunke");
  const seniorPrincipal = ADMIN_LEADERS.find(l => l.id === "mrs-dawodu-omowonuola");

  return (
    <div className="space-y-12 pb-12">
      {/* Primary Hero Banner */}
      <section className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 rounded-b-3xl shadow-lg border-b border-emerald-900 overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-900/90 border border-emerald-700/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-emerald-200 backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              <span>Official School Portal • Obafemi Owode LGA, Ogun State</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif tracking-tight text-white leading-tight">
              Welcome to <span className="text-emerald-300 underline decoration-orange-500/80 decoration-4 underline-offset-8">Ajebo Community</span> High School
            </h1>

            {/* Motto Banner */}
            <div className="bg-emerald-950/80 border border-emerald-700/80 p-3.5 rounded-xl text-xs space-y-1 text-left inline-block max-w-xl shadow-inner">
              <span className="text-orange-400 font-bold uppercase tracking-wider text-[11px]">School Motto:</span>
              <div className="text-white font-mono font-bold text-sm sm:text-base">"{SCHOOL_INFO.motto}"</div>
              <div className="text-emerald-200 text-xs italic">"{SCHOOL_INFO.mottoMeaning}"</div>
            </div>

            {/* Paragraph summary */}
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Founded in <strong>October 1977</strong> through communal self-help, Ajebo Community High School provides academic discipline, practical agricultural skills, and character building to students in Obafemi Owode LGA, Ogun State. Today, our alumni (ACHSOSA) have completed the Senior Principal's office renovation, premises electrification, and water restoration, while actively advancing the modern 16-classroom block.
            </p>

            {/* Stats Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <div className="text-xs text-emerald-300 font-semibold">Established</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">Oct 1977</div>
                <div className="text-[11px] text-slate-400">Communal Self-Help</div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <div className="text-xs text-emerald-300 font-semibold">First Set</div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">1982</div>
                <div className="text-[11px] text-slate-400">Foundation Set</div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 border-l-2 border-l-orange-500">
                <div className="text-xs text-emerald-300 font-semibold">Alumni Support</div>
                <div className="text-sm sm:text-base font-bold text-orange-400 font-mono">ACHSOSA</div>
                <div className="text-[11px] text-orange-200">Rebuilding Ajebo</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-building-primary-btn"
                onClick={() => setActiveTab('building')}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 group"
              >
                <Building2 className="w-5 h-5 text-white" />
                <span>View Completed & Active Projects</span>
                <ChevronRight className="w-4 h-4 text-orange-200 group-hover:translate-x-1 transition" />
              </button>

              <button
                id="hero-register-primary-btn"
                onClick={onOpenRegister}
                className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-700 text-white font-medium text-sm px-5 py-3.5 rounded-xl border border-emerald-600 transition flex items-center justify-center gap-2"
              >
                <GraduationCap className="w-5 h-5 text-emerald-300" />
                <span>Alumni Registration</span>
              </button>
            </div>
          </div>

          {/* Right Live Infrastructure Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl border border-emerald-100 space-y-5 relative">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 font-serif text-base">ACHS Completed & Active Works</h3>
                    <p className="text-xs text-slate-500">Ajebo Community High School</p>
                  </div>
                </div>
                <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-300">
                  Verified Milestones
                </span>
              </div>

              {/* Completed Milestones Highlight */}
              <div className="space-y-2.5 bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
                <div className="text-xs font-bold text-emerald-950 flex justify-between items-center">
                  <span className="uppercase tracking-wider">ACHSOSA Completed Projects</span>
                  <span className="text-emerald-800 font-mono font-bold">2026</span>
                </div>
                
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-2 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">Renovation of Senior Principal's Office</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-2 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">Electrification & Water Restoration</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800 bg-white p-2 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">SSS3 Career Counselling & Goal Setting</span>
                  </div>
                </div>
              </div>

              {/* Principals Contact Quick Callout */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5">
                <div className="font-bold text-slate-800 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> School Administration
                </div>
                <div className="text-slate-600 space-y-1 text-[11px]">
                  <p><strong>Junior School Principal:</strong> Mrs. Karunwi Taiwo Omodunke (0803 046 3277)</p>
                  <p><strong>Senior School Principal:</strong> Mrs. Dawodu Omowonuola (0803 258 2065)</p>
                </div>
              </div>

              <div className="pt-1">
                <button
                  id="hero-card-donate-btn"
                  onClick={onOpenDonate}
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-3 rounded-xl transition shadow-xs flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-4 h-4 text-orange-400" />
                  Support School Projects & Facility Upkeep
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL ANTHEM SECTION (MANDATED FOR SCHOOL HOME) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-emerald-700/80 relative overflow-hidden space-y-8">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Anthem Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-800/80 pb-6">
            <div className="space-y-2">
              <span className="bg-orange-500 text-white font-bold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
                <Music className="w-3.5 h-3.5" /> Institutional Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white flex items-center gap-3">
                <span>{SCHOOL_ANTHEM.title}</span>
              </h2>
              <p className="text-emerald-200 text-xs sm:text-sm">
                The official anthem of Ajebo Community High School — sung with pride, honor, and loyalty by generations of Ajebites.
              </p>
            </div>

            <div className="bg-emerald-950/90 border border-emerald-700 p-3.5 rounded-2xl text-xs space-y-1 shrink-0 self-start md:self-auto">
              <div className="text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Volume2 className="w-3.5 h-3.5 text-orange-400" /> Anthem Recitation
              </div>
              <p className="text-emerald-100 font-mono text-[11px]">
                Sung at Morning Assembly & Official Functions
              </p>
            </div>
          </div>

          {/* Anthem Structure Badge */}
          <div className="relative z-10 flex items-center justify-center">
            <span className="bg-emerald-900/90 text-emerald-200 border border-emerald-700 px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
              Official Sequence: <strong>Verse One</strong> → <strong>Chorus</strong> → <strong>Verse Two</strong> → <strong>Chorus</strong>
            </span>
          </div>

          {/* Anthem Stanzas Grid: Verse One, Chorus, Verse Two, Chorus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {/* 1. VERSE ONE */}
            <div className="bg-slate-900/85 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-emerald-700/70 space-y-4 flex flex-col justify-between hover:border-emerald-400 transition shadow-inner">
              <div className="space-y-3">
                <span className="bg-emerald-800 text-emerald-200 font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Verse One
                </span>
                <div className="space-y-1.5 text-sm sm:text-base font-serif leading-relaxed text-emerald-50">
                  {SCHOOL_ANTHEM.verse1.map((line, idx) => (
                    <p key={idx} className={idx === 0 || idx === 3 ? "font-bold text-orange-300" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-emerald-800/60 text-[11px] text-emerald-300 italic">
                Praising Ajebo Heights & blessings
              </div>
            </div>

            {/* 2. CHORUS */}
            <div className="bg-gradient-to-b from-orange-950/70 to-slate-900/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border-2 border-orange-500/80 space-y-4 flex flex-col justify-between hover:border-orange-400 transition shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-orange-500 text-white font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider inline-block shadow-xs">
                    Chorus
                  </span>
                  <span className="text-[10px] font-mono text-orange-300 font-bold">(2ce Refrain)</span>
                </div>
                <div className="space-y-2 text-sm sm:text-base font-serif font-bold leading-relaxed text-white">
                  {SCHOOL_ANTHEM.chorus.map((line, idx) => (
                    <p key={idx} className="text-orange-100">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-orange-800/60 text-[11px] text-orange-300 italic font-medium">
                Pledge of perpetual loyalty & obedience
              </div>
            </div>

            {/* 3. VERSE TWO */}
            <div className="bg-slate-900/85 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-emerald-700/70 space-y-4 flex flex-col justify-between hover:border-emerald-400 transition shadow-inner">
              <div className="space-y-3">
                <span className="bg-emerald-800 text-emerald-200 font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  Verse Two
                </span>
                <div className="space-y-1.5 text-sm sm:text-base font-serif leading-relaxed text-emerald-50">
                  {SCHOOL_ANTHEM.verse2.map((line, idx) => (
                    <p key={idx}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-emerald-800/60 text-[11px] text-emerald-300 italic">
                Honoring our devoted teachers & values
              </div>
            </div>

            {/* 4. CHORUS (REPRISE) */}
            <div className="bg-gradient-to-b from-orange-950/70 to-slate-900/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border-2 border-orange-500/80 space-y-4 flex flex-col justify-between hover:border-orange-400 transition shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-orange-500 text-white font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider inline-block shadow-xs">
                    Chorus
                  </span>
                  <span className="text-[10px] font-mono text-orange-300 font-bold">(2ce Refrain)</span>
                </div>
                <div className="space-y-2 text-sm sm:text-base font-serif font-bold leading-relaxed text-white">
                  {SCHOOL_ANTHEM.chorusReprise.map((line, idx) => (
                    <p key={idx} className="text-orange-100">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-orange-800/60 text-[11px] text-orange-300 italic font-medium">
                Pledge of perpetual loyalty & obedience
              </div>
            </div>
          </div>

          {/* Anthem Footer Banner */}
          <div className="relative z-10 bg-emerald-950/70 p-4 rounded-2xl border border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-200">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-400 shrink-0" />
              <span>School Motto: <strong>"{SCHOOL_INFO.motto}"</strong> ({SCHOOL_INFO.mottoMeaning})</span>
            </div>
            <span className="font-mono text-emerald-300">Ajebo Community High School • Est. Oct 1977</span>
          </div>
        </div>
      </section>

      {/* 4 Feature Cards Grid: School Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <h2 className="text-2xl font-bold font-serif text-slate-900">
            Our Heritage & Building Movement
          </h2>
          <p className="text-sm text-slate-600">
            Learn about our founding, distinguished WAEC academic records, notable leaders, and the administrative journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: School History */}
          <div 
            onClick={() => setActiveTab('history')}
            className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition cursor-pointer group hover:border-emerald-300 space-y-3"
          >
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
              <History className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition font-serif">
              School History & WAEC
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Established in Ajebo, Obafemi Owode LGA to bring education to agrarian communities. Accredited for WAEC & GCE O-Levels by 1983–1984.
            </p>
            <div className="pt-2 text-xs text-emerald-700 font-medium flex items-center gap-1">
              <span>Read History Timeline</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 2: Notable Alumni */}
          <div 
            onClick={() => setActiveTab('alumni')}
            className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition cursor-pointer group hover:border-emerald-300 space-y-3"
          >
            <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition font-serif">
              Distinguished Alumni
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Featuring Hon. (Dr.) Tella O. Babatunde (OGHA), Dr. Gbenga Adeoye (Legal), Eunice Akinwande (Agric), Board of Trustees, and Ambassadors.
            </p>
            <div className="pt-2 text-xs text-emerald-700 font-medium flex items-center gap-1">
              <span>View Alumni & Ambassadors</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 3: Agricultural Heritage */}
          <div 
            onClick={() => setActiveTab('history')}
            className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition cursor-pointer group hover:border-emerald-300 space-y-3"
          >
            <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition font-serif">
              Agricultural Foundation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Guided by expatriate Ghanaian agricultural teachers in the 1980s, students developed practical skills in crop farming and poultry production.
            </p>
            <div className="pt-2 text-xs text-emerald-700 font-medium flex items-center gap-1">
              <span>Explore Demo Farm Plan</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Card 4: Administration & Leadership */}
          <div 
            onClick={() => setActiveTab('leadership')}
            className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition cursor-pointer group hover:border-emerald-300 space-y-3"
          >
            <div className="w-12 h-12 bg-orange-100 text-orange-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition font-serif">
              School Principals
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mrs. Karunwi Taiwo Omodunke (Junior School), Mrs. Dawodu Omowonuola (Senior School), and past school administrators.
            </p>
            <div className="pt-2 text-xs text-emerald-700 font-medium flex items-center gap-1">
              <span>View School Registry</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </div>
          </div>

        </div>
      </section>

      {/* Featured Notable Alumni Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden border border-emerald-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">
                Distinguished Old Students
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                Shaping Politics, Law & Agribusiness Across Nigeria
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
                Graduates of Ajebo Community High School hold pivotal leadership positions nationwide. Their achievements reflect the enduring legacy of our teachers and community.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              {NOTABLE_ALUMNI.slice(0, 3).map((alum) => (
                <div key={alum.id} className="bg-emerald-950/80 border border-emerald-700 p-3.5 rounded-xl text-left w-64 space-y-1">
                  <div className="text-xs font-bold text-white truncate">{alum.name}</div>
                  <div className="text-[11px] text-orange-300 truncate">{alum.title}</div>
                  <div className="text-[10px] text-emerald-300 font-mono">Class of {alum.gradYear}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
