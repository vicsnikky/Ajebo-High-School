import React, { useState } from 'react';
import { HISTORY_EVENTS, SCHOOL_INFO, HISTORICAL_BACKGROUND } from '../data/schoolData';
import { TabType } from '../types';
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
  CheckCircle2,
  Trophy,
  Globe2,
  Briefcase
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
    { id: 'leadership', label: 'Administration & JET Competition' },
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
              Historical Background of <span className="text-emerald-300">Ajebo Community</span> High School
            </h1>
            
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Founded in <strong>October 1977</strong> through communal self-help, Ajebo Community High School (ACHS) was established to provide accessible secondary education, practical agricultural skills, and character building to children of Ajebo and surrounding communities in Obafemi Owode LGA, Ogun State.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-emerald-700/80 p-5 rounded-2xl text-xs space-y-2.5 shrink-0 w-full lg:w-80 shadow-inner">
            <div className="font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5 text-xs">
              <Sparkles className="w-4 h-4 text-orange-400" /> Historical Snapshot
            </div>
            <div className="text-emerald-100 space-y-1.5 font-medium">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span><strong>Founded:</strong> October 1977 (Self-Help Initiative)</span>
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
                <span><strong>National Honors:</strong> National JET Competition (1990s)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span><strong>Status Today:</strong> Junior & Senior Secondary School</span>
              </p>
            </div>
          </div>
        </div>

        {/* Motto Banner Highlight */}
        <div className="pt-4 border-t border-emerald-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-emerald-950/60 p-4 rounded-2xl border border-emerald-800">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-orange-400">School Motto (Yoruba)</span>
            <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-wide">
              {SCHOOL_INFO.motto}
            </div>
          </div>
          <div className="text-xs sm:text-sm text-emerald-200 italic bg-slate-900/80 px-4 py-2 rounded-xl border border-emerald-700/60 max-w-md">
            “{SCHOOL_INFO.mottoMeaning}”
          </div>
        </div>
      </div>

      {/* Comprehensive Historical Narrative Section */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-md space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Comprehensive Chronicle</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 flex items-center gap-2.5 mt-1">
              <History className="w-7 h-7 text-emerald-700" />
              <span>Historical Background & Founding Vision</span>
            </h2>
          </div>
          <div className="bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-700" />
            <span>1977 – Present</span>
          </div>
        </div>

        {/* Narrative Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-600 border border-slate-200/80 space-y-3">
              <p className="font-serif text-slate-900 text-base sm:text-lg font-semibold leading-snug">
                Ajebo Community High School (ACHS) was founded in 1977 through a communal self-help initiative by the people of Ajebo and the surrounding villages.
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                The establishment of the school was driven by the community’s desire to provide accessible secondary education for its children and to promote the educational development of the area.
              </p>
            </div>

            <p>
              Historically, Ajebo served as a major market and gathering centre for people from neighbouring villages and communities. This strategic position made it a natural centre for social, economic and educational activities. The earlier establishment of the Anglican Central School also reflected the importance of Ajebo as an educational centre serving the surrounding communities.
            </p>

            <p>
              The founding of ACHS through communal self-help demonstrated the commitment, unity and determination of the people to take responsibility for the education and future of their children. The school was established not merely as a place of academic learning, but as an institution intended to contribute to the overall development of the community.
            </p>

            {/* Motto Deep-Dive Card */}
            <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-6 sm:p-7 rounded-2xl space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider">
                <Sprout className="w-4 h-4 text-orange-400" />
                <span>Foundational Educational Philosophy</span>
              </div>

              <div className="space-y-2">
                <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                  “Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé.”
                </div>
                <div className="text-emerald-300 font-medium text-sm sm:text-base italic">
                  “Education without farming is incomplete.”
                </div>
              </div>

              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed pt-2 border-t border-emerald-800">
                Here, <strong>ọ̀kọ̀ àti àdá</strong> (the hoe and cutlass) symbolise agriculture, practical work, and self-reliance. The philosophy behind the school’s educational foundation reflects the traditional belief that academic knowledge should be complemented by practical skills, particularly agriculture, to prepare young people for productive and self-reliant lives.
              </p>
            </div>

            <p>
              Since its establishment in 1977, Ajebo Community High School has remained an important part of the history and educational development of Ajebo and its neighbouring communities, producing generations of students who have gone on to contribute meaningfully to their families, communities and society. Hence, alumni of the school are trained to become entrepreneurs and excellent professionals in their respective fields.
            </p>

            <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950">
              <Trophy className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-amber-900">National JET Competition Distinction:</strong> This hardworking culture reflected in the participation and success of the School in the 1990's during the National JET competition in Nigeria.
              </div>
            </div>

            <p>
              Agriculture that has now become a major focus of government in Nigeria in order to grow our food and export excess to other countries has always been the anthem of the school wherein students are trained that education without Agriculture is incomplete.
            </p>

            <p>
              The impact of the school can be seen all over the country and around the world with the quality of Professionals that have emerged from the School since it was established in 1977.
            </p>
          </div>

          {/* Side Column: Impact & Produced Professions */}
          <div className="lg:col-span-4 space-y-6">
            {/* Produced Professions Card */}
            <div className="bg-emerald-950 text-white p-6 rounded-2xl border border-emerald-800 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-wider">
                <Globe2 className="w-4 h-4 text-orange-400" />
                <span>Global Impact of ACHS Alumni</span>
              </div>
              <h3 className="font-serif font-bold text-lg text-white">
                Professionals Produced Since 1977
              </h3>
              <p className="text-xs text-emerald-200 leading-relaxed">
                The school has nurtured notable pioneers, industry captains, and public leaders across Nigeria and across the globe:
              </p>

              <div className="space-y-2 pt-2">
                {HISTORICAL_BACKGROUND.producedProfessions.map((prof, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-emerald-100 bg-emerald-900/60 px-3 py-2 rounded-lg border border-emerald-800/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-medium">{prof}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Fact Callout */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                <Briefcase className="w-4 h-4 text-emerald-700" />
                <span>Communal Self-Reliance</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                From its communal roots in 1977 to the modern ACHSOSA rebuilding drive, ACHS continues to stand as a beacon of education, practical industry, and self-help excellence.
              </p>
            </div>
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
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-4 border-emerald-700/20 shadow-md bg-white p-2">
              <img 
                src={SCHOOL_INFO.logoUrl} 
                alt="Ajebo Community High School Badge Logo" 
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
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
              <h4 className="font-bold text-slate-900 text-sm font-serif">2. Cutlass & Hoe (Ọ̀kọ̀ àti Àdá)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Symbolise <strong>agriculture, practical work, and self-reliance</strong> — fulfilling our motto (<em>Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé</em>).
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

