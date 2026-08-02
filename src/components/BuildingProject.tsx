import React, { useState } from 'react';
import { SCHOOL_INFO, SUB_PROJECTS } from '../data/schoolData';
import { DonorRecord, BuildingSubProject } from '../types';
import { 
  Building2, 
  HeartHandshake, 
  Laptop, 
  Sprout, 
  Sun, 
  BookOpen, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Clock, 
  UserCheck,
  TrendingUp,
  Coins
} from 'lucide-react';

interface BuildingProjectProps {
  donors: DonorRecord[];
  onOpenDonate: () => void;
}

export const BuildingProject: React.FC<BuildingProjectProps> = ({ donors, onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-700" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-emerald-700" />;
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-700" />;
      case 'Sun': return <Sun className="w-6 h-6 text-emerald-700" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-700" />;
      default: return <Building2 className="w-6 h-6 text-emerald-700" />;
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Title & Vision Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Major Infrastructure Project
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Ajebo Community High School Infrastructure Rebuilding Initiative
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              The Old Students Association (ACHSOSA) is leading the construction and upgrading of physical facilities for Ajebo Community High School. Our vision encompasses a 16-classroom block, a STEM ICT innovation hub, solar power grid, and an upgraded agricultural demonstration farm.
            </p>
          </div>

          <button
            id="building-header-pledge-btn"
            onClick={onOpenDonate}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition shrink-0 flex items-center gap-2"
          >
            <HeartHandshake className="w-5 h-5" />
            Pledge Project Support
          </button>
        </div>

        {/* Global Progress Gauge */}
        <div className="pt-4 border-t border-emerald-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-emerald-100">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-emerald-800">
            <div className="text-xs text-emerald-300 font-semibold">Infrastructure Modules</div>
            <div className="text-2xl font-bold font-mono text-white">5 Key Facilities</div>
            <div className="text-[11px] text-emerald-400 mt-0.5">Approved School Blueprint</div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-emerald-800">
            <div className="text-xs text-emerald-300 font-semibold">Construction Status</div>
            <div className="text-2xl font-bold font-mono text-emerald-300">Phase 1 Active</div>
            <div className="text-[11px] text-emerald-400 mt-0.5">Groundbreaking & Structural Roofing Stage</div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-emerald-800 border-l-4 border-l-orange-500">
            <div className="text-xs text-emerald-300 font-semibold">Participating Alumni Sets</div>
            <div className="text-2xl font-bold font-mono text-orange-400">{donors.length + 12} Registered Pledges</div>
            <div className="text-[11px] text-orange-200 mt-0.5">Includes 1984, 1985, 1986 & 1988 Sets</div>
          </div>
        </div>
      </div>

      {/* Breakdown of Sub-Projects */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Building Components & Facility Scope
            </h2>
            <p className="text-sm text-slate-600">
              Explore individual construction phases and support a specific school development module.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl text-xs">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg transition ${selectedCategory === 'all' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'}`}
            >
              All Modules ({SUB_PROJECTS.length})
            </button>
            <button 
              onClick={() => setSelectedCategory('in-progress')}
              className={`px-3 py-1.5 rounded-lg transition ${selectedCategory === 'in-progress' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'}`}
            >
              In Progress
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUB_PROJECTS.filter(p => selectedCategory === 'all' || (selectedCategory === 'in-progress' && p.status === 'In Progress')).map((proj) => {
            return (
              <div 
                key={proj.id}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100">
                      {getIcon(proj.iconName)}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                      proj.status === 'In Progress' 
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                        : 'bg-amber-50 text-amber-800 border-amber-200'
                    }`}>
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg font-serif">{proj.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Project Scope</div>
                    <div className="text-xs font-semibold text-slate-800">{proj.scope}</div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-500">Milestone Progress</span>
                      <span className="text-emerald-700 font-mono font-bold">{proj.progressPercent}% Completed</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-700 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${proj.progressPercent}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{proj.timeline}</span>
                  </div>

                  <button
                    id={`pledge-subproj-${proj.id}`}
                    onClick={onOpenDonate}
                    className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-xl transition shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <HeartHandshake className="w-4 h-4 text-orange-400" />
                    Support This Facility
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Donor Honor Roll */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              <span>Alumni Support & Sponsorship Ledger</span>
            </h2>
            <p className="text-sm text-slate-600">
              Record of project support, equipment pledges, and material contributions provided by old students and alumni set associations.
            </p>
          </div>

          <button
            id="honor-roll-pledge-btn"
            onClick={onOpenDonate}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1.5"
          >
            <HeartHandshake className="w-4 h-4" />
            Register Your Support
          </button>
        </div>

        {/* Donors List Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-emerald-50 text-emerald-950 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3.5 rounded-l-xl">Alumnus / Set Name</th>
                <th className="p-3.5">Graduating Set</th>
                <th className="p-3.5">Sponsorship Tier</th>
                <th className="p-3.5">Contribution Area</th>
                <th className="p-3.5">Target Facility</th>
                <th className="p-3.5 rounded-r-xl">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {donors.map((donor) => (
                <tr key={donor.id} className="hover:bg-slate-50/80 transition">
                  <td className="p-3.5 font-medium text-slate-900">
                    {donor.isAnonymous ? "Anonymous Old Student" : donor.name}
                    {donor.message && (
                      <div className="text-[11px] text-slate-500 font-normal italic mt-0.5">
                        "{donor.message}"
                      </div>
                    )}
                  </td>
                  <td className="p-3.5 font-mono text-emerald-800">{donor.gradSet}</td>
                  <td className="p-3.5">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                      donor.tier === 'Lead Sponsor' 
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : donor.tier === 'Key Building Partner'
                        ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                        : donor.tier === 'Patron Set'
                        ? 'bg-blue-100 text-blue-900 border border-blue-300'
                        : 'bg-slate-100 text-slate-800 border border-slate-300'
                    }`}>
                      {donor.tier}
                    </span>
                  </td>
                  <td className="p-3.5 font-semibold text-slate-800 max-w-[220px]">
                    {donor.contributionArea}
                  </td>
                  <td className="p-3.5 text-slate-600 truncate max-w-[200px]">
                    {donor.subProjectTarget || "General Infrastructure Rebuild"}
                  </td>
                  <td className="p-3.5 text-slate-400 font-mono">{donor.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
