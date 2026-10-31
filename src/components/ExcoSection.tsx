import React, { useState } from 'react';
import { EXCO_MEMBERS, SCHOOL_INFO } from '../data/schoolData';
import { TabType } from '../types';
import { 
  Users, 
  Crown, 
  PhoneCall, 
  MessageSquare, 
  Search, 
  X, 
  ShieldCheck, 
  Building2, 
  GraduationCap, 
  History, 
  Sparkles,
  UserCheck,
  Globe
} from 'lucide-react';

interface ExcoSectionProps {
  setActiveTab?: (tab: TabType) => void;
  onOpenDonate?: () => void;
  onOpenRegister?: () => void;
}

export const ExcoSection: React.FC<ExcoSectionProps> = ({
  setActiveTab,
  onOpenDonate,
  onOpenRegister
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMembers = EXCO_MEMBERS.filter(member => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      member.name.toLowerCase().includes(term) ||
      member.pos.toLowerCase().includes(term) ||
      member.no.includes(term)
    );
  });

  const president = EXCO_MEMBERS.find(m => m.pos === "President");
  const secGen = EXCO_MEMBERS.find(m => m.pos === "General Secretary");

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title & Vision Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-6 border border-emerald-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" /> ACHSOSA Alumni Leadership
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              ACHSOSA <span className="text-emerald-300">EXCO</span>
            </h1>
            
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Official Executive Officers of Ajebo Community High School Old Students Association (ACHSOSA) — directing alumni affairs, member welfare, school rebuilding projects, and historical archives.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-emerald-700/80 p-5 rounded-2xl text-xs space-y-2.5 shrink-0 w-full lg:w-80 shadow-inner">
            <div className="font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5 text-xs">
              <Sparkles className="w-4 h-4 text-orange-400" /> Executive Roll Summary
            </div>
            <div className="text-emerald-100 space-y-1.5 font-medium">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                <span><strong>Governing Body:</strong> ACHSOSA EXCO</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span><strong>Total Offices:</strong> 17 Executive Positions</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span><strong>Official Email:</strong> info@ajebocommunityhighschool.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* School Motto Banner */}
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

      {/* Official Domain Email Notice */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 flex items-center gap-3">
        <Globe className="w-5 h-5 text-emerald-700 shrink-0" />
        <div>
          <strong className="text-emerald-950 font-bold block">Official School & Alumni Email Address</strong>
          <span className="text-slate-700">Official general inquiries, administration, and alumni correspondence: <a href="mailto:info@ajebocommunityhighschool.com" className="font-semibold text-emerald-800 underline decoration-emerald-500">info@ajebocommunityhighschool.com</a></span>
        </div>
      </div>

      {/* Principal Executive Officers (President & General Secretary) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Principal Leadership</span>
            <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2 mt-0.5">
              <Crown className="w-6 h-6 text-amber-500" />
              <span>President & General Secretary Contact Lines</span>
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Contact the President or General Secretary directly via phone or WhatsApp for rebuilding pledges and association matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* President Card */}
          {president && (
            <div className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-400 text-amber-950 font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-2xl shadow-xs">
                OFFICIAL PRESIDENT
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-amber-400 flex items-center justify-center font-bold text-2xl shadow-md shrink-0 border-2 border-amber-300">
                  <Crown className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="bg-emerald-900 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    {president.pos} • Office No. {president.no}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 leading-tight">
                    {president.name}
                  </h3>
                  <p className="text-xs text-emerald-800 font-semibold">
                    President, Ajebo Community High School Old Students Association (ACHSOSA)
                  </p>
                </div>
              </div>

              {/* Verified Contact Details for President */}
              <div className="bg-white rounded-2xl p-4 border border-amber-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">Direct Phone Contact:</span>
                  <span className="font-mono font-bold text-emerald-900">{president.formatted}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a 
                    href={`tel:${president.raw}`}
                    className="bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-3 rounded-xl shadow-xs transition flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-300" />
                    <span>Call Phone</span>
                  </a>

                  <a 
                    href={`https://wa.me/${president.wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-2.5 px-3 rounded-xl shadow-xs transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-100" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* General Secretary Card */}
          {secGen && (
            <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-3xl p-6 sm:p-8 border-2 border-blue-200 shadow-md space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-2xl shadow-xs">
                GENERAL SECRETARY
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-blue-200 flex items-center justify-center font-bold text-2xl shadow-md shrink-0 border-2 border-blue-200">
                  <UserCheck className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    {secGen.pos} • Office No. {secGen.no}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 leading-tight">
                    {secGen.name}
                  </h3>
                  <p className="text-xs text-blue-900 font-semibold">
                    General Secretary, ACHSOSA Executive Council
                  </p>
                </div>
              </div>

              {/* Verified Contact Details for General Secretary */}
              <div className="bg-white rounded-2xl p-4 border border-blue-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">Direct Phone Contact:</span>
                  <span className="font-mono font-bold text-blue-900">{secGen.formatted}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a 
                    href={`tel:${secGen.raw}`}
                    className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs py-2.5 px-3 rounded-xl shadow-xs transition flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-300" />
                    <span>Call Phone</span>
                  </a>

                  <a 
                    href={`https://wa.me/${secGen.wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs py-2.5 px-3 rounded-xl shadow-xs transition flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-100" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Full EXCO Roster (All 17 Officers) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Official Executive Directory</span>
            <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2 mt-0.5">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              <span>Full Executive Officers Roll (17 Offices)</span>
            </h2>
          </div>

          {/* Search Filter Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search by name or office..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-emerald-500 transition"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* EXCO Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMembers.map((member) => {
            const isLeader = member.pos === "President" || member.pos === "General Secretary";

            return (
              <div 
                key={member.no} 
                className={`p-5 rounded-2xl border transition space-y-3 relative flex flex-col justify-between ${
                  isLeader 
                    ? 'bg-emerald-50/80 border-emerald-300 shadow-xs' 
                    : 'bg-slate-50 border-slate-200/80 hover:border-emerald-300 hover:bg-white'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="bg-slate-900 text-white font-mono font-bold text-[10px] px-2.5 py-0.5 rounded-md">
                      No. {member.no}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      isLeader 
                        ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                        : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                    }`}>
                      {member.pos}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-serif leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-xs text-emerald-800 font-medium mt-0.5">
                      {member.pos}
                    </p>
                  </div>
                </div>

                {member.showContact && member.formatted && (
                  <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-600 font-mono flex items-center justify-between">
                    <span>Phone:</span>
                    <span className="font-bold text-slate-800">{member.formatted}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-sm text-slate-500">No EXCO member found matching "{searchTerm}"</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-2 text-xs font-bold text-emerald-800 underline"
            >
              Clear Search Filter
            </button>
          </div>
        )}
      </div>

      {/* Related Page Links */}
      {setActiveTab && (
        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">School Portal</span>
              <h2 className="text-2xl font-bold font-serif text-white mt-0.5">
                Explore Other School Pages
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Visit our history archives, school anthem, active rebuilding project, and alumni directory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => setActiveTab('history')}
              className="bg-slate-800 hover:bg-emerald-900 p-5 rounded-2xl border border-slate-700 text-left transition space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold group-hover:bg-orange-500 group-hover:text-white transition">
                <History className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-orange-300 transition">School History</h3>
                <p className="text-xs text-slate-400 mt-1">October 1977 founding, badge meaning & motto.</p>
              </div>
            </button>

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
            </button>

            <button
              onClick={() => setActiveTab('leadership')}
              className="bg-slate-800 hover:bg-emerald-900 p-5 rounded-2xl border border-slate-700 text-left transition space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition">Administration</h3>
                <p className="text-xs text-slate-400 mt-1">Principals Mrs Dawodu & Mrs Karunwi contact.</p>
              </div>
            </button>

            <button
              onClick={() => setActiveTab('directory')}
              className="bg-slate-800 hover:bg-emerald-900 p-5 rounded-2xl border border-slate-700 text-left transition space-y-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold group-hover:bg-purple-600 group-hover:text-white transition">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-purple-300 transition">Alumni Registry</h3>
                <p className="text-xs text-slate-400 mt-1">Register and connect with old students across sets.</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
