import React, { useState } from 'react';
import { HISTORY_EVENTS, SCHOOL_INFO } from '../data/schoolData';
import { History, Sprout, Award, BookOpen, CheckCircle, Calendar, MapPin, Milestone } from 'lucide-react';

export const HistorySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Milestones' },
    { id: 'founding', label: 'Founding & Location' },
    { id: 'agriculture', label: 'Agric & Ghanaian Educators' },
    { id: 'accreditation', label: '1983-1984 WAEC Era' },
    { id: 'leadership', label: 'Administration' },
    { id: 'rebuilding', label: 'Alumni Rebuilding' },
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? HISTORY_EVENTS 
    : HISTORY_EVENTS.filter(e => e.category === selectedCategory);

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title & Introduction Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden space-y-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <History className="w-3.5 h-3.5" /> Institutional Archive
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              History of Ajebo Community High School
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Founded as a co-educational, community-backed public secondary school in Ajebo, Obafemi Owode LGA, Ogun State, our school brought secondary education to rural agrarian families, laying the foundation for leaders in politics, law, and agriculture.
            </p>
          </div>

          <div className="bg-emerald-950/80 border border-emerald-700 p-4 rounded-2xl text-xs space-y-2 shrink-0 w-full sm:w-auto">
            <div className="font-bold text-orange-400 uppercase tracking-wider">Key Historical Facts</div>
            <div className="text-emerald-200 space-y-1">
              <p>• <strong>Location:</strong> Ajebo Town, Obafemi Owode LGA</p>
              <p>• <strong>WAEC Accredited:</strong> 1983–1984 GCE O-Levels</p>
              <p>• <strong>Agric Pioneer:</strong> Ghanaian Expatriate Staff</p>
              <p>• <strong>Alumni Body:</strong> ACHSOSA Network</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Historical Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pillar 1: Community Founding */}
        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs space-y-3">
          <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl w-fit">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-serif">
            1. Agrarian Community Origins
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Established during an era when the regional government sought to bring secondary education closer to rural families. It saved local children from exhausting daily travels to distant urban centers like Abeokuta or Sagamu.
          </p>
        </div>

        {/* Pillar 2: Agricultural Heritage */}
        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs space-y-3">
          <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl w-fit">
            <Sprout className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-serif">
            2. Ghanaian Agric Educators
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            In the early 1980s, notable expatriate educators (including Ghanaian agricultural specialists) introduced practical farming and poultry production, instilling lifelong agribusiness skills in pioneers like Eunice Akinwande.
          </p>
        </div>

        {/* Pillar 3: WAEC Accreditation */}
        <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs space-y-3">
          <div className="p-3 bg-amber-100 text-amber-800 rounded-xl w-fit">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg font-serif">
            3. WAEC & GCE O-Level 1983–84
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            By 1983–1984, archived civil records confirm full accreditation to present candidates for national examinations. Early cohorts produced prominent public servants like Hon. (Dr.) Tella O. Babatunde.
          </p>
        </div>

      </div>

      {/* Interactive History Timeline */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-xs space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
              <Milestone className="w-6 h-6 text-emerald-600" />
              <span>Chronological Milestones (1970s – Present)</span>
            </h2>
            <p className="text-sm text-slate-600">
              Filter and explore pivotal moments in Ajebo Community High School's administrative and academic legacy.
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
                    ? 'bg-emerald-700 font-bold text-white shadow-xs'
                    : 'text-slate-600 hover:text-emerald-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-6 space-y-8">
          {filteredEvents.map((evt, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-white border-4 border-emerald-600 group-hover:border-orange-500 transition shadow-xs" />
              
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 hover:border-emerald-300 transition space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="bg-emerald-100 text-emerald-900 font-mono font-bold text-xs px-3 py-1 rounded-md border border-emerald-200">
                    {evt.year}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {evt.subtitle}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
