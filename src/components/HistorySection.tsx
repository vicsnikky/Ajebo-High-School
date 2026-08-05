import React, { useState } from 'react';
import { HISTORY_EVENTS, SCHOOL_INFO } from '../data/schoolData';
import { TabType } from '../types';
import { SchoolLogo } from './SchoolLogo';
import { 
  History, 
  Sprout, 
  Award, 
  BookOpen, 
  Shield, 
  Calendar, 
  MapPin, 
  Milestone, 
  ArrowRight,
  GraduationCap,
  Building2,
  Users,
  MessageSquare,
  Sparkles,
  Scissors,
  CheckCircle2
} from 'lucide-react';

interface HistorySectionProps {
  setActiveTab?: (tab: TabType) => void;
}

export const HistorySection: React.FC<HistorySectionProps> = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Historical Milestones' },
    { id: 'founding', label: '1977 Founding & Pioneer Era' },
    { id: 'accreditation', label: '1982–1984 First Set & WAEC' },
    { id: 'leadership', label: 'Administration & Expansion' },
    { id: 'rebuilding', label: 'Today & ACHSOSA Rebuilding' },
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? HISTORY_EVENTS 
    : HISTORY_EVENTS.filter(e => e.category === selectedCategory);

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title & Vision Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-6 border border-emerald-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              <History className="w-3.5 h-3.5" /> Official School Archives & Heritage
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              History of <span className="text-emerald-300">Ajebo Community</span> High School
            </h1>
            
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Founded in <strong>October 1977</strong> through communal self-help, Ajebo Community High School, Ajebo was established to provide academic discipline, practical agricultural skills, and character building to children of Obafemi Owode LGA, Ogun State.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-emerald-700/80 p-5 rounded-2xl text-xs space-y-2.5 shrink-0 w-full lg:w-80 shadow-inner">
            <div className="font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5 text-xs">
              <Sparkles className="w-4 h-4 text-orange-400" /> Historical Snapshot
            </div>
            <div className="text-emerald-100 space-y-1.5 font-medium">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span><strong>Founded:</strong> October 1977</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span><strong>First Graduating Set:</strong> 1982</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span><strong>WAEC Accreditation:</strong> 1983–1984</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span><strong>Status Today:</strong> Full Jr & Sr Secondary School</span>
              </p>
            </div>
          </div>
        </div>

        {/* Motto Banner Highlight */}
        <div className="pt-4 border-t border-emerald-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-emerald-950/60 p-4 rounded-2xl border border-emerald-800">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-orange-400">School Motto (Yoruba)</span>
            <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-wide">
              "{SCHOOL_INFO.motto}"
            </div>
          </div>
          <div className="text-xs sm:text-sm text-emerald-200 italic bg-slate-900/80 px-4 py-2 rounded-xl border border-emerald-700/60 max-w-md">
            "{SCHOOL_INFO.mottoMeaning}"
          </div>
        </div>
      </div>

      {/* School Crest & Badge Breakdown Card */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-md space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Symbolism & Identity</span>
            <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2 mt-0.5">
              <Shield className="w-6 h-6 text-emerald-700" />
              <span>The School Crest & Badge Meaning</span>
            </h2>
          </div>
          <div className="bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 text-xs text-emerald-900 font-semibold">
            Obafemi Owode LGA, Ogun State
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Logo Display Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3 bg-gradient-to-b from-emerald-50 to-slate-50 p-6 rounded-2xl border border-emerald-100">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-emerald-700/20 shadow-md bg-white p-2 flex items-center justify-center">
              <SchoolLogo size="xl" className="w-full h-full" imgClassName="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-slate-900 text-base">{SCHOOL_INFO.name} Crest</h3>
              <p className="text-xs text-slate-500">Established October 1977</p>
            </div>
          </div>

          {/* 3 Badge Element Breakdown Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Book Element */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm font-serif">1. The Open Book</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stands for <strong>Knowledge</strong>, academic discipline, scholarship, and intellectual development.
              </p>
            </div>

            {/* Crossed Cutlass & Hoe Element */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                <Sprout className="w-5 h-5 text-orange-600" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm font-serif">2. Cutlass & Hoe (Ada & Oko)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stands for <strong>Agriculture</strong> and the dignity of physical labour — living up to our motto (<em>Iwe kiko laisi oko ati ada koipe</em>).
              </p>
            </div>

            {/* Shield Element */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-emerald-300 transition space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5 text-blue-700" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm font-serif">3. The Shield</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stands for the <strong>protection, resilience, and unity</strong> of the entire Ajebo community.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Interactive Chronological History Timeline */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-md space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
              <Milestone className="w-6 h-6 text-emerald-700" />
              <span>Historical Milestones (October 1977 – Present)</span>
            </h2>
            <p className="text-sm text-slate-600">
              Filter and view the key eras in the development of Ajebo Community High School.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1 rounded-xl text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 font-bold text-white shadow-xs'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-emerald-300 ml-4 sm:ml-6 space-y-8">
          {filteredEvents.map((evt, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-emerald-700 group-hover:border-orange-500 transition shadow-xs" />
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-400 transition space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-emerald-900 text-white font-mono font-bold text-xs px-3 py-1 rounded-md shadow-xs">
                    {evt.year}
                  </span>
                  <span className="text-xs font-semibold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200 uppercase tracking-wider">
                    {evt.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inter-Page Navigation Directory Hub */}
      {setActiveTab && (
        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">Explore School Portal</span>
              <h2 className="text-2xl font-bold font-serif text-white mt-0.5">
                Navigate to Related School Pages
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Discover notable alumni records, administrative leaders, active infrastructure projects, and community discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Link 1: Notable Alumni */}
            <button
              onClick={() => setActiveTab('alumni')}
              className="bg-slate-800 hover:bg-emerald-900 p-5 rounded-2xl border border-slate-700 text-left transition space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold group-hover:bg-orange-500 group-hover:text-white transition">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-orange-300 transition">Distinguished Alumni</h3>
                <p className="text-xs text-slate-400 mt-1">Hon. Tella, Dr. Adeoye, Eunice Akinwande & leaders.</p>
              </div>
              <div className="flex items-center text-xs text-emerald-400 font-semibold gap-1 pt-1">
                <span>View Alumni Roll</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </button>

            {/* Link 2: Rebuilding Project */}
            <button
              onClick={() => setActiveTab('building')}
              className="bg-slate-800 hover:bg-emerald-900 p-5 rounded-2xl border border-slate-700 text-left transition space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-emerald-300 transition">Rebuilding Project</h3>
                <p className="text-xs text-slate-400 mt-1">16-Classroom block, STEM ICT Hub, Solar grid.</p>
              </div>
              <div className="flex items-center text-xs text-emerald-400 font-semibold gap-1 pt-1">
                <span>View Infrastructure</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </button>

            {/* Link 3: School Administration */}
            <button
              onClick={() => setActiveTab('leadership')}
              className="bg-slate-800 hover:bg-emerald-900 p-5 rounded-2xl border border-slate-700 text-left transition space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition">School Leadership</h3>
                <p className="text-xs text-slate-400 mt-1">Mrs. Elegbede, Mr. Okusi & principal records.</p>
              </div>
              <div className="flex items-center text-xs text-emerald-400 font-semibold gap-1 pt-1">
                <span>View Administration</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </button>

            {/* Link 4: Community Forum */}
            <button
              onClick={() => setActiveTab('forum')}
              className="bg-slate-800 hover:bg-emerald-900 p-5 rounded-2xl border border-slate-700 text-left transition space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold group-hover:bg-purple-600 group-hover:text-white transition">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-purple-300 transition">Community Forum</h3>
                <p className="text-xs text-slate-400 mt-1">Connect with alumni, post memories & updates.</p>
              </div>
              <div className="flex items-center text-xs text-emerald-400 font-semibold gap-1 pt-1">
                <span>Join Discussion</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

