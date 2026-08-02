import React from 'react';
import { SCHOOL_INFO, NOTABLE_ALUMNI, SUB_PROJECTS } from '../data/schoolData';
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
  Sprout
} from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: TabType) => void;
  onOpenDonate: () => void;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveTab, onOpenDonate, onOpenRegister }) => {
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

            {/* Paragraph summary */}
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Rooted in Obafemi Owode LGA, Ogun State, Ajebo Community High School has provided academic discipline, practical agricultural education, and WAEC & GCE O-Level achievements since the 1970s. Today, our alumni (ACHSOSA) are actively supporting the school by constructing a modern 16-classroom block, STEM ICT hub, solar grid, and revamped agricultural farm.
            </p>

            {/* Stats Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <div className="text-xs text-emerald-300 font-semibold">Established</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">1970s</div>
                <div className="text-[11px] text-slate-400">Ajebo, Ogun State</div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3">
                <div className="text-xs text-emerald-300 font-semibold">WAEC Record</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">1983–1984</div>
                <div className="text-[11px] text-slate-400">GCE O-Level Era</div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 border-l-2 border-l-orange-500">
                <div className="text-xs text-emerald-300 font-semibold">Alumni Initiative</div>
                <div className="text-base sm:text-lg font-bold text-orange-400 font-mono">Rebuilding</div>
                <div className="text-[11px] text-orange-200">School Expansion</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-pledge-primary-btn"
                onClick={onOpenDonate}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 group"
              >
                <HeartHandshake className="w-5 h-5 text-white" />
                <span>Support School Rebuilding Project</span>
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
                    <h3 className="font-bold text-slate-900 font-serif text-base">School Infrastructure Rebuild</h3>
                    <p className="text-xs text-slate-500">Ajebo Community High School</p>
                  </div>
                </div>
                <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-200">
                  Active Construction
                </span>
              </div>

              {/* Progress overview without money */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div className="text-xs font-semibold text-slate-800 flex justify-between items-center">
                  <span className="uppercase tracking-wider">Infrastructure Modules</span>
                  <span className="text-emerald-700 font-mono font-bold">5 Active Projects</span>
                </div>
                
                <div className="space-y-2">
                  {SUB_PROJECTS.slice(0, 3).map((proj) => (
                    <div key={proj.id} className="flex items-center justify-between text-xs py-1.5 px-2.5 bg-white rounded-lg border border-slate-200">
                      <span className="font-medium text-slate-800 truncate max-w-[190px]">{proj.title}</span>
                      <span className="text-emerald-800 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {proj.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Donor Callout */}
              <div className="flex items-center justify-between text-xs bg-orange-50 text-orange-950 p-3 rounded-xl border border-orange-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Lead Sponsor: <strong>Hon. (Dr.) Tella O. Babatunde</strong> (1984 Set)</span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  id="hero-card-donate-btn"
                  onClick={onOpenDonate}
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm py-3 rounded-xl transition shadow-xs flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-4 h-4 text-orange-400" />
                  Pledge Project Support / Equipment
                </button>
              </div>
            </div>
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
              Notable Alumni
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Celebrating Hon. (Dr.) Tella O. Babatunde (OGHA Lawmaker), Dr. Gbenga Adeoye (Legal Expert), and Eunice Akinwande (Agricultural Pioneer).
            </p>
            <div className="pt-2 text-xs text-emerald-700 font-medium flex items-center gap-1">
              <span>View Alumni Profiles</span>
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
              Documented leadership including Mr. Okusi (Obafemi Owode LGA) and Mrs. Abosede Aderemi Elegbede (Junior Principal, retired August 2024).
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
        <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden">
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
                <div key={alum.id} className="bg-emerald-950/80 border border-emerald-700 p-3 rounded-xl text-left w-60 space-y-1">
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
