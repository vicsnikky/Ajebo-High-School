import React, { useState } from 'react';
import { NOTABLE_ALUMNI, ACHSOSA_AMBASSADORS } from '../data/schoolData';
import { AlumniProfile } from '../types';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  Quote, 
  ExternalLink, 
  Filter, 
  Search,
  ShieldCheck,
  Crown,
  Sparkles,
  Users,
  Info,
  Clock
} from 'lucide-react';

export const NotableAlumni: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeModalAlum, setActiveModalAlum] = useState<AlumniProfile | null>(null);

  const categories = [
    { id: 'all', label: 'All Alumni Leaders' },
    { id: 'politics', label: 'Politics & Public Service (Hon. Tella)' },
    { id: 'law', label: 'Law & Corporate (Dr. Adeoye)' },
    { id: 'agriculture', label: 'Agribusiness (Eunice Akinwande)' },
    { id: 'tech', label: 'Engineering & Tech' },
    { id: 'education', label: 'Education' },
  ];

  const filtered = NOTABLE_ALUMNI.filter(alum => {
    const matchesCategory = selectedCategory === 'all' || alum.category === selectedCategory;
    const matchesSearch = 
      alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.gradYear.includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-4 border border-emerald-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Award className="w-3.5 h-3.5" /> Social Impact & Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              Distinguished Alumni of Ajebo High
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Ajebo Community High School served as an educational launchpad for prominent leaders in Nigerian politics, law, corporate sectors, engineering, and agricultural development.
            </p>
          </div>
        </div>
      </div>

      {/* ACHSOSA BOARD OF TRUSTEES SECTION */}
      <div className="bg-white rounded-3xl p-8 border-2 border-emerald-200 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> High Custodianship
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-2">
              ACHSOSA Board of Trustees
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Apex advisory custodians and fiduciary trustees of Ajebo Community High School Old Students Association.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 self-start sm:self-auto">
            <Clock className="w-4 h-4 text-amber-600" /> Official Gazetting In Progress
          </span>
        </div>

        {/* Board of Trustees Notice Card (No names yet, as requested) */}
        <div className="bg-gradient-to-br from-emerald-50/70 via-slate-50 to-amber-50/50 p-8 rounded-2xl border border-emerald-200/80 text-center space-y-4">
          <div className="w-14 h-14 bg-emerald-900 text-orange-400 rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <Crown className="w-7 h-7" />
          </div>
          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="text-xl font-bold font-serif text-slate-900">
              Board Composition & Official Gazette
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The official appointment, tenure ratification, and distinguished roll of the <strong>ACHSOSA Board of Trustees</strong> will be formally published following ratification by the General Assembly and Central Executive Council.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-white px-4 py-2 rounded-xl border border-emerald-200 shadow-xs">
            <Info className="w-4 h-4 text-emerald-600" />
            <span>Official roll to be unveiled at the General Alumni Convention</span>
          </div>
        </div>
      </div>

      {/* ACHSOSA AMBASSADOR SECTION */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="bg-orange-100 text-orange-900 border border-orange-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" /> Global Representatives
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mt-2">
              ACHSOSA Ambassadors
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Distinguished old students and committee envoys advancing the institutional impact, school reconstruction, and academic mentorship of ACHS.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHSOSA_AMBASSADORS.map((amb) => (
            <div 
              key={amb.id}
              className="bg-slate-50 hover:bg-emerald-50/50 p-6 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition space-y-3 flex flex-col justify-between shadow-xs group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                    {amb.gradSet}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-serif group-hover:text-emerald-900 transition">
                  {amb.name}
                </h3>
                <p className="text-xs font-medium text-emerald-800 leading-relaxed">
                  {amb.role}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>ACHSOSA Ambassador</span>
                {amb.contact && (
                  <span className="font-mono text-emerald-700">{amb.contact}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spotlight Cards for Key Alumni */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Featured Alumni Pioneers
          </h2>
          <span className="text-xs font-semibold text-slate-500">Spotlight Profiles</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Spotlight 1: Hon. Dr. Tella O. Babatunde */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-sm space-y-4 relative flex flex-col justify-between hover:border-emerald-400 transition">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="bg-emerald-100 text-emerald-900 font-mono font-bold text-xs px-3 py-1 rounded-full border border-emerald-300">
                  WAEC / GCE O-Level 1984
                </span>
                <span className="bg-orange-100 text-orange-900 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                  OGHA Lawmaker
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Hon. (Dr.) Tella O. Babatunde</h3>
                <p className="text-xs text-emerald-700 font-medium">Ogun State House of Assembly (OGHA)</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Completed secondary education and earned his GCE O-Level Certificate from Ajebo Community High School in 1984. A distinguished lawmaker championing rural education infrastructure.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 italic flex items-start gap-2">
                <Quote className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>"Ajebo Community High School gave us the resilience and values that define our public service today."</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModalAlum(NOTABLE_ALUMNI[0])}
              className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium text-xs py-2.5 rounded-xl border border-emerald-200 transition"
            >
              Read Full Bio & Accomplishments
            </button>
          </div>

          {/* Spotlight 2: Dr. Gbenga Adeoye */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-sm space-y-4 relative flex flex-col justify-between hover:border-emerald-400 transition">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="bg-emerald-100 text-emerald-900 font-mono font-bold text-xs px-3 py-1 rounded-full border border-emerald-300">
                  Class of 1986
                </span>
                <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                  Corporate Law Expert
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Dr. Gbenga Adeoye</h3>
                <p className="text-xs text-emerald-700 font-medium">Senior Lawyer & Tax Advisory Specialist</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                A highly accomplished Nigerian lawyer and corporate expert who completed his secondary education at the school. Advises top corporate boards and chairs the alumni legal panel.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 italic flex items-start gap-2">
                <Quote className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>"The solid academic foundation laid in our classrooms prepared us to compete at the highest legal tables."</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModalAlum(NOTABLE_ALUMNI[1])}
              className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium text-xs py-2.5 rounded-xl border border-emerald-200 transition"
            >
              Read Full Bio & Accomplishments
            </button>
          </div>

          {/* Spotlight 3: Eunice Akinwande */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-sm space-y-4 relative flex flex-col justify-between hover:border-emerald-400 transition">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="bg-emerald-100 text-emerald-900 font-mono font-bold text-xs px-3 py-1 rounded-full border border-emerald-300">
                  Class of 1985
                </span>
                <span className="bg-emerald-100 text-emerald-900 text-xs font-semibold px-2.5 py-0.5 rounded-md">
                  Agricultural Pioneer
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Eunice Akinwande</h3>
                <p className="text-xs text-emerald-700 font-medium">Former Asst. Director, Lagos Ministry of Agric</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Award-winning agricultural pioneer who credits her passion for agribusiness to early schooling at Ajebo Community High School under expatriate Ghanaian educators.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 italic flex items-start gap-2">
                <Quote className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>"Practical farming and poultry lessons under our Ghanaian teachers planted the seed for my agribusiness career."</span>
              </div>
            </div>

            <button
              onClick={() => setActiveModalAlum(NOTABLE_ALUMNI[2])}
              className="w-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-medium text-xs py-2.5 rounded-xl border border-emerald-200 transition"
            >
              Read Full Bio & Accomplishments
            </button>
          </div>

        </div>
      </div>

      {/* Filter & Searchable Alumni List */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-xs space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl font-bold font-serif text-slate-900">
              Alumni Directory & Sector Roll
            </h2>
            <p className="text-xs text-slate-500">
              Explore old students who are making strides across engineering, education, law, and governance.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text"
              placeholder="Search by name, set, or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 pl-9 pr-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl border transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-800 text-white font-semibold border-emerald-800'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Alumni */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((alum) => (
            <div 
              key={alum.id}
              onClick={() => setActiveModalAlum(alum)}
              className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 hover:border-emerald-300 transition cursor-pointer flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base font-serif">{alum.name}</span>
                  <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                    Class of {alum.gradYear}
                  </span>
                </div>
                <div className="text-xs font-medium text-emerald-700">{alum.title}</div>
                <p className="text-xs text-slate-600 line-clamp-2">{alum.bio}</p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-emerald-600" />
                  {alum.location || "Ogun State"}
                </span>
                <span className="text-emerald-700 font-medium">View Achievements →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {activeModalAlum && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl border border-emerald-100">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="bg-emerald-100 text-emerald-900 font-mono font-bold text-xs px-2.5 py-1 rounded-full border border-emerald-300">
                  ACHS Class of {activeModalAlum.gradYear}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-serif mt-2">{activeModalAlum.name}</h3>
                <p className="text-sm font-medium text-emerald-700">{activeModalAlum.title}</p>
              </div>

              <button
                onClick={() => setActiveModalAlum(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">Biography</h4>
                <p className="leading-relaxed text-slate-600">{activeModalAlum.bio}</p>
              </div>

              {activeModalAlum.quote && (
                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-950 italic flex items-start gap-3">
                  <Quote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span>"{activeModalAlum.quote}"</span>
                </div>
              )}

              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Key Accomplishments</h4>
                <div className="space-y-1.5">
                  {activeModalAlum.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveModalAlum(null)}
                className="bg-emerald-800 text-white font-medium text-xs px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
