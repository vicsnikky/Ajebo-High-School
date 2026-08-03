import React, { useState } from 'react';
import { AlumniRegistration } from '../types';
import { GRADUATING_SETS } from '../data/schoolData';
import { Users, UserPlus, Search, Filter, MapPin, Briefcase, GraduationCap, Mail, Phone, ExternalLink } from 'lucide-react';

interface AlumniDirectoryProps {
  registeredAlumni: AlumniRegistration[];
  onOpenRegister: () => void;
}

export const AlumniDirectory: React.FC<AlumniDirectoryProps> = ({
  registeredAlumni,
  onOpenRegister
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSet, setSelectedSet] = useState<string>('all');

  const availableSets = Array.from(
    new Set([...registeredAlumni.map(a => a.gradSet), ...GRADUATING_SETS])
  ).sort();

  const filtered = registeredAlumni.filter(alum => {
    const matchesSet = selectedSet === 'all' || alum.gradSet === selectedSet;
    const matchesSearch = 
      alum.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.occupation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.gradSet.includes(searchTerm);
    return matchesSet && matchesSearch;
  });

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title & Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Global Old Students Network
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              ACHSOSA Alumni Directory & Graduating Sets
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Connect with fellow old students of Ajebo Community High School across Nigeria and the global diaspora. Search by graduating set year, profession, or location.
            </p>
          </div>

          <button
            id="directory-join-btn"
            onClick={onOpenRegister}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition shrink-0 flex items-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Register Your Profile
          </button>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input 
              type="text"
              placeholder="Search by name, profession, city, or set..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-emerald-500"
            />
          </div>

          {/* Set Filter */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto scrollbar-none pb-1 md:pb-0">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Graduating Set:</span>
            <select
              value={selectedSet}
              onChange={(e) => setSelectedSet(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-800 text-xs py-2 px-3 rounded-xl font-medium focus:outline-hidden focus:border-emerald-500"
            >
              <option value="all">All Graduating Sets</option>
              {availableSets.map(set => (
                <option key={set} value={set}>{set}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((alum) => (
          <div 
            key={alum.id}
            className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 font-bold font-serif text-lg rounded-xl flex items-center justify-center border border-emerald-200">
                  {alum.fullName.charAt(0)}
                </div>
                <span className="bg-emerald-100 text-emerald-900 font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-emerald-300">
                  {alum.gradSet}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-lg font-serif">{alum.fullName}</h3>
                <p className="text-xs font-medium text-emerald-700 flex items-center gap-1 mt-0.5">
                  <Briefcase className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                  <span>{alum.occupation}</span>
                </p>
              </div>

              {alum.bio && (
                <p className="text-xs text-slate-600 line-clamp-2 italic">
                  "{alum.bio}"
                </p>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>{alum.city}, {alum.country}</span>
              </div>
              
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400 font-mono">Reg: {alum.registeredAt}</span>
                <span className="text-emerald-700 font-medium text-[11px] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                  Verified Alumni
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 space-y-3">
          <p className="text-slate-500 text-sm">No old students found matching your search criteria.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedSet('all'); }}
            className="text-xs font-semibold text-emerald-700 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
