import React, { useState } from 'react';
import { 
  SCHOOL_INFO, 
  SUB_PROJECTS, 
  GREENWALL_DESIGN_CREDITS, 
  PEG_MISSION, 
  REMODELLING_FACILITIES, 
  EDUCATIONAL_HEALTH_PROGRAMS, 
  AJEBITE_WELFARE_INITIATIVES 
} from '../data/schoolData';
import { DonorRecord, RemodellingFacility } from '../types';
import { ImageWithFallback } from './ImageWithFallback';
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
  Clock, 
  Compass, 
  Shield, 
  Microscope, 
  Wrench, 
  Users, 
  Home, 
  GraduationCap, 
  Monitor, 
  Droplets,
  PhoneCall,
  MapPin,
  Heart,
  Briefcase,
  Activity,
  UserCheck,
  Building,
  Check,
  X,
  Maximize2,
  Eye
} from 'lucide-react';

interface BuildingProjectProps {
  donors: DonorRecord[];
  onOpenDonate: () => void;
}

export const BuildingProject: React.FC<BuildingProjectProps> = ({ donors, onOpenDonate }) => {
  const [activeTab, setActiveTab] = useState<'facilities' | 'peg-programs' | 'peg-welfare' | 'subprojects'>('facilities');
  const [facilityFilter, setFacilityFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; type: string } | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-emerald-700" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-emerald-700" />;
      case 'Microscope': return <Microscope className="w-5 h-5 text-emerald-700" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-emerald-700" />;
      case 'Users': return <Users className="w-5 h-5 text-emerald-700" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-emerald-700" />;
      case 'Home': return <Home className="w-5 h-5 text-emerald-700" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-emerald-700" />;
      case 'Building': return <Building className="w-5 h-5 text-emerald-700" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-emerald-700" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-emerald-700" />;
      default: return <Building2 className="w-5 h-5 text-emerald-700" />;
    }
  };

  const filteredFacilities = REMODELLING_FACILITIES.filter(facility => {
    if (facilityFilter === 'all') return true;
    return facility.category === facilityFilter;
  });

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Main Banner Header */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-6 border border-emerald-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Official Remodelling & Master Plan Blueprint
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              {GREENWALL_DESIGN_CREDITS.projectTitle}
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Leading the architectural transformation, classroom renovations, new CBT hub, gatehouse, and 500-seater hall for Ajebo Community High School, Abeokuta.
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

        {/* Architect Consultancy Badge */}
        <div className="pt-4 border-t border-emerald-800/80 bg-slate-900/90 p-5 rounded-2xl border border-emerald-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-orange-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1">
              <Compass className="w-3.5 h-3.5" /> Designed & Engineered By
            </span>
            <div className="text-base font-bold text-white font-serif">
              {GREENWALL_DESIGN_CREDITS.firmName}
            </div>
            <div className="text-emerald-200 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>{GREENWALL_DESIGN_CREDITS.address}</span>
            </div>
          </div>

          <div className="bg-emerald-950/80 p-3 rounded-xl border border-emerald-800 text-emerald-200 space-y-1">
            <div className="font-semibold text-orange-300">Consultant Contacts:</div>
            <div className="font-mono font-bold text-white flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>{GREENWALL_DESIGN_CREDITS.phoneFormatted}</span>
            </div>
          </div>
        </div>
      </div>

      {/* PEG MISSION FRAMEWORK BANNER */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="bg-red-100 text-red-900 border border-red-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              CORE PHILOSOPHY
            </span>
            <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-red-600" />
              <span>{PEG_MISSION.title}</span>
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Three-pillar development blueprint for infrastructure, student empowerment, and alumni welfare.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar P - Project */}
          <div 
            onClick={() => setActiveTab('facilities')}
            className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/50 p-6 rounded-2xl border-2 border-emerald-200 hover:border-emerald-500 transition cursor-pointer space-y-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-black text-xl shadow-xs">
              P
            </div>
            <h3 className="font-bold text-slate-900 text-lg font-serif group-hover:text-emerald-800 transition">
              1. Project (Infrastructure)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {PEG_MISSION.project}
            </p>
            <span className="text-xs font-bold text-emerald-800 underline block pt-2">
              View Remodelling Facilities &rarr;
            </span>
          </div>

          {/* Pillar E - Educational & Health */}
          <div 
            onClick={() => setActiveTab('peg-programs')}
            className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 p-6 rounded-2xl border-2 border-amber-200 hover:border-amber-500 transition cursor-pointer space-y-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center font-black text-xl shadow-xs">
              E
            </div>
            <h3 className="font-bold text-slate-900 text-lg font-serif group-hover:text-amber-800 transition">
              2. Educational & Health Programs
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {PEG_MISSION.educationalAndHealth}
            </p>
            <span className="text-xs font-bold text-amber-800 underline block pt-2">
              View Termly Student Programs &rarr;
            </span>
          </div>

          {/* Pillar G - General Members Welfare */}
          <div 
            onClick={() => setActiveTab('peg-welfare')}
            className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50 p-6 rounded-2xl border-2 border-blue-200 hover:border-blue-500 transition cursor-pointer space-y-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-800 text-white flex items-center justify-center font-black text-xl shadow-xs">
              G
            </div>
            <h3 className="font-bold text-slate-900 text-lg font-serif group-hover:text-blue-800 transition">
              3. General Members Welfare
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {PEG_MISSION.welfare}
            </p>
            <span className="text-xs font-bold text-blue-800 underline block pt-2">
              View Ajebite Member Initiatives &rarr;
            </span>
          </div>
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('facilities')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'facilities'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Remodelling Facilities (3D & As-Built)</span>
        </button>

        <button
          onClick={() => setActiveTab('peg-programs')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'peg-programs'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Educational & Health Programs (PEG)</span>
        </button>

        <button
          onClick={() => setActiveTab('peg-welfare')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'peg-welfare'
              ? 'bg-blue-800 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>General Members Welfare (Ajebite)</span>
        </button>

        <button
          onClick={() => setActiveTab('subprojects')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'subprojects'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Construction Milestones & Donors</span>
        </button>
      </div>

      {/* TAB CONTENT 1: REMODELLING FACILITIES SHOWCASE */}
      {activeTab === 'facilities' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold font-serif text-slate-900">
                Remodelling & Capital Project Blueprint
              </h2>
              <p className="text-xs text-slate-600">
                Architectural 3D renderings paired with as-built reality analysis by Greenwall Design and Construct.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs">
              <button
                onClick={() => setFacilityFilter('all')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  facilityFilter === 'all' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                All ({REMODELLING_FACILITIES.length})
              </button>
              <button
                onClick={() => setFacilityFilter('Classroom Block')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  facilityFilter === 'Classroom Block' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Classroom Blocks
              </button>
              <button
                onClick={() => setFacilityFilter('Specialist Facility')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  facilityFilter === 'Specialist Facility' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Specialist Facilities
              </button>
              <button
                onClick={() => setFacilityFilter('New Capital Project')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  facilityFilter === 'New Capital Project' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                New Capital
              </button>
              <button
                onClick={() => setFacilityFilter('Sanitation & Utilities')}
                className={`px-3 py-1.5 rounded-lg transition ${
                  facilityFilter === 'Sanitation & Utilities' ? 'bg-white font-bold text-emerald-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Sanitation
              </button>
            </div>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <div 
                key={facility.id}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4 relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-2.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200">
                      {getIcon(facility.iconName)}
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
                      {facility.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg font-serif leading-tight">
                    {facility.title}
                  </h3>

                  {/* Proposed Architectural Design Photos */}
                  {facility.proposedImageUrls && facility.proposedImageUrls.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 my-2">
                      {facility.proposedImageUrls.map((imgUrl, imgIdx) => (
                        <div 
                          key={imgIdx}
                          onClick={() => setSelectedImage({ url: imgUrl, title: `${facility.title} (Proposed View ${imgIdx + 1})`, type: 'Proposed Architectural Design' })}
                          className="relative rounded-xl overflow-hidden border border-emerald-200 bg-slate-100 cursor-pointer hover:border-emerald-500 shadow-xs transition"
                        >
                          <ImageWithFallback 
                            src={imgUrl} 
                            alt={`${facility.title} proposed ${imgIdx + 1}`}
                            className="w-full h-36 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : facility.proposedImageUrl ? (
                    <div 
                      onClick={() => setSelectedImage({ url: facility.proposedImageUrl!, title: facility.title, type: 'Proposed Architectural Design' })}
                      className="relative rounded-xl overflow-hidden border border-emerald-200 bg-slate-100 cursor-pointer hover:border-emerald-500 shadow-xs my-2"
                    >
                      <ImageWithFallback 
                        src={facility.proposedImageUrl} 
                        alt={facility.title}
                        className="w-full h-52 object-cover"
                      />
                    </div>
                  ) : null}

                  {/* Proposed Blueprint Vision Box */}
                  <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-200/80 space-y-1">
                    <div className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-700" /> Proposed Architectural Blueprint
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {facility.proposedModelDesc}
                    </p>
                  </div>

                  {/* As-Built Reality Box */}
                  <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200/80 space-y-2">
                    <div className="text-[10px] font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-700" /> As-Built Reality Analysis
                    </div>
                    {facility.asBuiltImageUrls && facility.asBuiltImageUrls.length > 0 ? (
                      <div className="grid grid-cols-2 gap-2 my-1">
                        {facility.asBuiltImageUrls.map((imgUrl, imgIdx) => (
                          <div 
                            key={imgIdx}
                            onClick={() => setSelectedImage({ url: imgUrl, title: `${facility.title} (As-Built Photo ${imgIdx + 1})`, type: 'Original As-Built Photo' })}
                            className="relative rounded-lg overflow-hidden border border-amber-200 bg-slate-100 cursor-pointer hover:border-amber-400 shadow-xs"
                          >
                            <ImageWithFallback 
                              src={imgUrl} 
                              alt={`${facility.title} as-built ${imgIdx + 1}`}
                              className="w-full h-36 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    ) : facility.asBuiltImageUrl ? (
                      <div 
                        onClick={() => setSelectedImage({ url: facility.asBuiltImageUrl!, title: `${facility.title} (Original / As-Built Structure)`, type: 'Original As-Built Photo' })}
                        className="relative rounded-lg overflow-hidden border border-amber-200 bg-slate-100 cursor-pointer hover:border-amber-400 shadow-xs my-1"
                      >
                        <ImageWithFallback 
                          src={facility.asBuiltImageUrl} 
                          alt={`${facility.title} Old Entrance`}
                          className="w-full h-44 object-cover"
                        />
                      </div>
                    ) : null}
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {facility.asBuiltRealityDesc}
                    </p>
                  </div>

                  {/* Sanitation Requirements List if present */}
                  {facility.requirements && facility.requirements.length > 0 && (
                    <div className="bg-blue-50/80 p-3.5 rounded-xl border border-blue-200/80 space-y-2">
                      <div className="text-[10px] font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1">
                        <Droplets className="w-3.5 h-3.5 text-blue-700" /> General Sanitation Requirements
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {facility.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-800 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-800">
                    Status: {facility.status}
                  </span>
                  <button
                    onClick={onOpenDonate}
                    className="bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs py-1.5 px-3 rounded-lg transition"
                  >
                    Support Module
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: EDUCATIONAL & HEALTH PROGRAMS (PEG - E) */}
      {activeTab === 'peg-programs' && (
        <div className="bg-white rounded-3xl p-8 border border-amber-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                PROGRAM TITLE
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                Empowering Students for Brighter Future
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Organize 3 educational and health programs per term for Ajebo Community High School students.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATIONAL_HEALTH_PROGRAMS.map((prog) => (
              <div 
                key={prog.id}
                className="bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 rounded-2xl p-6 border-2 border-amber-200/80 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                    <Activity className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg font-serif">
                    {prog.title}
                  </h3>

                  <div className="bg-white p-3 rounded-xl border border-amber-200 space-y-1">
                    <span className="text-[10px] font-bold text-amber-900 uppercase tracking-wider">Designated Presenters:</span>
                    <p className="text-xs font-semibold text-slate-800">{prog.presenters}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Termly Program Outline:</span>
                    <ul className="space-y-2">
                      {prog.outline.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-amber-100 text-center">
                  <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full inline-block">
                    Schedule: 3 Sessions Per Term
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: GENERAL MEMBERS WELFARE (PEG - G) */}
      {activeTab === 'peg-welfare' && (
        <div className="bg-white rounded-3xl p-8 border border-blue-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                AJEBITE MEMBER EMPOWERMENT
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                General Members Welfare & Empowerment Initiatives
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Supporting the social, financial, and professional welfare of all ACHSOSA old students.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AJEBITE_WELFARE_INITIATIVES.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 hover:border-blue-300 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 text-amber-300" />
                </div>

                <h3 className="font-bold text-slate-900 text-base font-serif">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-[11px] text-blue-900 font-medium">
                  <strong>Examples:</strong> {item.examples}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: SUBPROJECTS & DONORS */}
      {activeTab === 'subprojects' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUB_PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full border bg-emerald-50 text-emerald-800 border-emerald-200">
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
                      <span className="text-slate-500">Progress</span>
                      <span className="text-emerald-700 font-mono font-bold">{proj.progressPercent}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-700 h-full rounded-full" style={{ width: `${proj.progressPercent}%` }} />
                    </div>
                  </div>

                  <button
                    onClick={onOpenDonate}
                    className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 rounded-xl transition shadow-xs flex items-center justify-center gap-1.5"
                  >
                    <HeartHandshake className="w-4 h-4 text-orange-400" />
                    Support Facility
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Donor Ledger */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-2xl font-bold font-serif text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-700" />
                  <span>Alumni Support & Sponsorship Ledger</span>
                </h2>
                <p className="text-xs text-slate-600">
                  Record of contributions provided by old students and alumni set associations.
                </p>
              </div>

              <button
                onClick={onOpenDonate}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-xs transition flex items-center gap-1.5"
              >
                <HeartHandshake className="w-4 h-4" />
                Pledge Support
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-emerald-50 text-emerald-950 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5 rounded-l-xl">Alumnus / Set</th>
                    <th className="p-3.5">Graduating Set</th>
                    <th className="p-3.5">Tier</th>
                    <th className="p-3.5">Contribution Area</th>
                    <th className="p-3.5 rounded-r-xl">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {donors.map((donor) => (
                    <tr key={donor.id} className="hover:bg-slate-50/80 transition">
                      <td className="p-3.5 font-medium text-slate-900">
                        {donor.isAnonymous ? "Anonymous Old Student" : donor.name}
                      </td>
                      <td className="p-3.5 font-mono text-emerald-800">{donor.gradSet}</td>
                      <td className="p-3.5 font-semibold text-emerald-900">{donor.tier}</td>
                      <td className="p-3.5 text-slate-800">{donor.contributionArea}</td>
                      <td className="p-3.5 text-slate-400 font-mono">{donor.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800 text-white">
              <div>
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800">
                  {selectedImage.type}
                </span>
                <h3 className="font-bold text-lg font-serif mt-1">{selectedImage.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-auto flex items-center justify-center bg-slate-950">
              <ImageWithFallback 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-lg border border-slate-800"
              />
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Architectural Design Blueprint by Greenwall Design & Construct</span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-1.5 rounded-xl transition"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
