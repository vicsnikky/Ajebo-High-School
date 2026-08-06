import React, { useState } from 'react';
import { 
  SCHOOL_INFO, 
  SUB_PROJECTS, 
  GREENWALL_DESIGN_CREDITS, 
  PEG_MISSION, 
  REMODELLING_FACILITIES, 
  EDUCATIONAL_HEALTH_PROGRAMS, 
  AJEBITE_WELFARE_INITIATIVES,
  ACHSOSA_COMPLETED_PROJECTS,
  COMPLETED_PROJECTS_GALLERY
} from '../data/schoolData';
import { DonorRecord, RemodellingFacility } from '../types';
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
  Eye,
  Zap,
  Award,
  ExternalLink
} from 'lucide-react';

interface BuildingProjectProps {
  donors: DonorRecord[];
  onOpenDonate: () => void;
}

export const BuildingProject: React.FC<BuildingProjectProps> = ({ donors, onOpenDonate }) => {
  const [activeTab, setActiveTab] = useState<'completed' | 'facilities' | 'peg-programs' | 'peg-welfare' | 'subprojects'>('completed');
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
            <span className="bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" /> ACHSOSA Rebuilding & Project Delivery
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              {GREENWALL_DESIGN_CREDITS.projectTitle}
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Documenting completed renovation milestones, the electrification and water reactivation works, student mentorship workshops, and the 16-classroom block remodelling master plan.
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
            onClick={() => setActiveTab('completed')}
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
              View Completed & Remodelling Projects &rarr;
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
          onClick={() => setActiveTab('completed')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
            activeTab === 'completed'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>ACHSOSA Completed Projects (Verified)</span>
        </button>

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

      {/* TAB CONTENT: ACHSOSA COMPLETED PROJECTS */}
      {activeTab === 'completed' && (
        <div className="space-y-10">
          {/* Heading */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> Delivered Milestones
              </span>
              <h2 className="text-3xl font-bold font-serif text-slate-900 mt-2">
                ACHSOSA completed project
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Executed capital improvements, educational counselling sessions, and utility restorations funded and delivered by the Old Students Association.
              </p>
            </div>

            <span className="bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs shrink-0 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> 100% Completed & In Use
            </span>
          </div>

          {/* 3 Core Completed Projects Detailed Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project 1: Renovation of Senior Principal's Office */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 shadow-md space-y-6 flex flex-col justify-between hover:border-emerald-500 transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-100 text-emerald-900 font-bold text-xs px-3 py-1 rounded-full border border-emerald-300">
                    Administrative Infrastructure
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                    2026 Completed
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  Renovation of Senior Principal's Office
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  We have renovated Senior Principal's office and provided book shelves to properly arrange old and new students documents.
                </p>

                {/* Attached Photo Previews */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Completed Project Photos:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div 
                      onClick={() => setSelectedImage({
                        url: "https://i.ibb.co/fd62ggW0/Whats-App-Image-2026-08-06-at-8-36-59-AM-1.jpg",
                        title: "Renovated Senior Principal's Office & Archive Book Shelves",
                        type: "ACHSOSA Completed Project"
                      })}
                      className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 aspect-video bg-slate-100"
                    >
                      <img 
                        src="https://i.ibb.co/fd62ggW0/Whats-App-Image-2026-08-06-at-8-36-59-AM-1.jpg" 
                        alt="Renovated Senior Principal Office"
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>

                    <div 
                      onClick={() => setSelectedImage({
                        url: "https://i.ibb.co/wZJGBbbJ/Whats-App-Image-2026-08-06-at-8-36-59-AM-2.jpg",
                        title: "Executive Office Furnishings & Document Shelving",
                        type: "ACHSOSA Completed Project"
                      })}
                      className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 aspect-video bg-slate-100"
                    >
                      <img 
                        src="https://i.ibb.co/wZJGBbbJ/Whats-App-Image-2026-08-06-at-8-36-59-AM-2.jpg" 
                        alt="Executive Office Furnishings"
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-800">Senior School Arm</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Fully Installed
                </span>
              </div>
            </div>

            {/* Project 2: Electrification & Water Restoration */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 shadow-md space-y-6 flex flex-col justify-between hover:border-emerald-500 transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-amber-100 text-amber-900 font-bold text-xs px-3 py-1 rounded-full border border-amber-300">
                    Power & Water Utilities
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                    2026 Completed
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  Electrification & Water Restoration
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  Electrification of school premises and electricity connection to reactivated borehole, NYSC and Principal's quarters.
                </p>

                {/* Attached Photo Previews */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Completed Project Photos:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div 
                      onClick={() => setSelectedImage({
                        url: "https://i.ibb.co/3YzwYfyx/Whats-App-Image-2026-08-06-at-8-36-59-AM-3.jpg",
                        title: "Premises Electrical Connection & Cabling",
                        type: "ACHSOSA Completed Project"
                      })}
                      className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 aspect-video bg-slate-100"
                    >
                      <img 
                        src="https://i.ibb.co/3YzwYfyx/Whats-App-Image-2026-08-06-at-8-36-59-AM-3.jpg" 
                        alt="Electrification wiring"
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>

                    <div 
                      onClick={() => setSelectedImage({
                        url: "https://i.ibb.co/ymQkpqjy/Whats-App-Image-2026-08-06-at-8-36-59-AM.jpg",
                        title: "Reactivated Borehole & Quarters Water Line",
                        type: "ACHSOSA Completed Project"
                      })}
                      className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 aspect-video bg-slate-100"
                    >
                      <img 
                        src="https://i.ibb.co/ymQkpqjy/Whats-App-Image-2026-08-06-at-8-36-59-AM.jpg" 
                        alt="Borehole water restoration"
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-800">NYSC & Principal's Quarters</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <Zap className="w-3.5 h-3.5 text-amber-500" /> Powered & Pumping
                </span>
              </div>
            </div>

            {/* Project 3: Career Counselling & Development for Outgoing Students */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 shadow-md space-y-6 flex flex-col justify-between hover:border-emerald-500 transition">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-blue-100 text-blue-900 font-bold text-xs px-3 py-1 rounded-full border border-blue-300">
                    Student Mentorship
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                    2026 Completed
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                  Career Counselling & Development for Outgoing Students
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  As part of the project, we organised career counselling, career development and goal setting program for outgoing students SSS3 during second term academic session year 2026. Guiding students on future pathways, subject choices and life goals.
                </p>

                {/* Attached Photo Preview */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Completed Project Photo:
                  </span>
                  <div 
                    onClick={() => setSelectedImage({
                      url: "https://i.ibb.co/dwy1YLMD/Whats-App-Image-2026-08-06-at-8-37-00-AM.jpg",
                      title: "SSS3 Students Career Counselling & Mentorship Session",
                      type: "ACHSOSA Completed Project"
                    })}
                    className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 aspect-video bg-slate-100"
                  >
                    <img 
                      src="https://i.ibb.co/dwy1YLMD/Whats-App-Image-2026-08-06-at-8-37-00-AM.jpg" 
                      alt="Career counselling workshop"
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-emerald-800">SSS3 Outgoing Cohort</span>
                <span className="flex items-center gap-1 text-emerald-700">
                  <GraduationCap className="w-3.5 h-3.5" /> Second Term 2026
                </span>
              </div>
            </div>
          </div>

          {/* Dedicated Photo Gallery of Completed Projects */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 border border-emerald-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                  Project Gallery Archive
                </span>
                <h3 className="text-2xl font-bold font-serif text-white mt-1">
                  ACHSOSA Completed Projects Photo Archive
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Visual proof of the delivered office renovation, electrical grid connections, water borehole pumps, and career workshops.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-300 bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800">
                5 Verified Images
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {COMPLETED_PROJECTS_GALLERY.map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedImage({
                    url: item.imageUrl,
                    title: item.title,
                    type: item.project
                  })}
                  className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-400 transition cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-4/3 bg-slate-950 overflow-hidden">
                    <img 
                      src={item.imageUrl}
                      alt={item.title}
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                      <Eye className="w-5 h-5 text-orange-400" />
                    </div>
                  </div>

                  <div className="p-3 space-y-1">
                    <p className="text-xs font-bold text-white line-clamp-2">{item.title}</p>
                    <p className="text-[10px] text-orange-300 truncate">{item.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
                New Capital Projects
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredFacilities.map((facility) => (
              <div 
                key={facility.id}
                className="bg-white rounded-3xl border-2 border-emerald-100 overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition space-y-5 p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-emerald-50 rounded-xl">
                        {getIcon(facility.iconName)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg font-serif">{facility.title}</h3>
                        <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                          {facility.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded">
                      {facility.status}
                    </span>
                  </div>

                  {/* Visual Comparison: Proposed 3D Model vs As-Built Reality */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Proposed 3D Render */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-500" /> Proposed 3D Model
                        </span>
                        {facility.proposedImageUrl && (
                          <span className="text-[10px] text-slate-400">Click to expand</span>
                        )}
                      </div>

                      {facility.proposedImageUrl ? (
                        <div 
                          onClick={() => setSelectedImage({
                            url: facility.proposedImageUrl!,
                            title: `Proposed 3D Model: ${facility.title}`,
                            type: 'Proposed Architectural 3D Rendering'
                          })}
                          className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 cursor-pointer group border-2 border-emerald-200"
                        >
                          <img 
                            src={facility.proposedImageUrl} 
                            alt={`Proposed ${facility.title}`}
                            loading="eager"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                          />
                          <div className="absolute inset-0 bg-emerald-950/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                            <Maximize2 className="w-6 h-6" />
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-2xl aspect-4/3 bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center p-3 text-center text-xs text-slate-400">
                          <Building2 className="w-6 h-6 text-slate-300 mb-1" />
                          <span>3D Model Render in Drafting Phase</span>
                        </div>
                      )}

                      <p className="text-xs text-slate-600 leading-relaxed bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100">
                        {facility.proposedModelDesc}
                      </p>
                    </div>

                    {/* As-Built Reality */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-600" /> As-Built Reality
                        </span>
                        {facility.asBuiltImageUrl && (
                          <span className="text-[10px] text-slate-400">Click to expand</span>
                        )}
                      </div>

                      {facility.asBuiltImageUrl ? (
                        <div 
                          onClick={() => setSelectedImage({
                            url: facility.asBuiltImageUrl!,
                            title: `As-Built Reality: ${facility.title}`,
                            type: 'Current Physical Site Condition'
                          })}
                          className="relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 cursor-pointer group border-2 border-amber-200"
                        >
                          <img 
                            src={facility.asBuiltImageUrl} 
                            alt={`As-Built ${facility.title}`}
                            loading="eager"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition"
                          />
                          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white">
                            <Maximize2 className="w-6 h-6" />
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-2xl aspect-4/3 bg-slate-50 border border-dashed border-slate-200 flex flex-col items-center justify-center p-3 text-center text-xs text-slate-400">
                          <Clock className="w-6 h-6 text-slate-300 mb-1" />
                          <span>Site Assessment Log</span>
                        </div>
                      )}

                      <p className="text-xs text-slate-600 leading-relaxed bg-amber-50/50 p-2.5 rounded-xl border border-amber-100">
                        {facility.asBuiltRealityDesc}
                      </p>
                    </div>
                  </div>

                  {/* Requirements List if available */}
                  {facility.requirements && facility.requirements.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                        Scope & Intervention Specs:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {facility.requirements.map((req, i) => (
                          <div key={i} className="text-xs text-slate-600 flex items-center gap-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="truncate">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">Designed by Greenwall Construct</span>
                  <button 
                    onClick={onOpenDonate}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-900 underline flex items-center gap-1"
                  >
                    Sponsor This Facility &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: EDUCATIONAL & HEALTH PROGRAMS (PEG) */}
      {activeTab === 'peg-programs' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                PEG PILLAR 2
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                Educational & Health Programs
              </h2>
              <p className="text-xs text-slate-600">
                Termly scheduled initiatives designed for current students and teachers of Ajebo Community High School.
              </p>
            </div>

            <div className="text-xs bg-amber-50 text-amber-900 p-2.5 rounded-xl border border-amber-200 font-medium">
              3 Structured Termly Programs
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EDUCATIONAL_HEALTH_PROGRAMS.map((prog, idx) => (
              <div 
                key={prog.id}
                className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-amber-400 transition"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
                    {idx + 1}
                  </div>

                  <h3 className="font-bold text-slate-900 text-lg font-serif">
                    {prog.title}
                  </h3>

                  <div className="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wider">Program Outline:</span>
                    <ul className="space-y-1 text-xs list-disc list-inside">
                      {prog.outline.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-amber-900 font-medium">
                  Led by ACHSOSA Education & Welfare Committees
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: GENERAL MEMBERS WELFARE (AJEBITE) */}
      {activeTab === 'peg-welfare' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                PEG PILLAR 3
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                General Members Welfare (Ajebite Initiatives)
              </h2>
              <p className="text-xs text-slate-600">
                Strengthening alumni solidarity, career advancement, and support across all sets of Ajebo High School.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AJEBITE_WELFARE_INITIATIVES.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-3xl p-6 border-2 border-blue-100 shadow-sm space-y-3 flex flex-col justify-between hover:border-blue-300 transition"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-800 text-white flex items-center justify-center font-bold">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-serif">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>

                <div className="bg-blue-50 p-2.5 rounded-xl text-[11px] text-blue-950 border border-blue-100">
                  <strong>Example:</strong> {item.examples}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: SUBPROJECTS & DONOR ROLL */}
      {activeTab === 'subprojects' && (
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-serif text-slate-900">
              Active Construction Phases & Infrastructure Targets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SUB_PROJECTS.map((sub) => (
                <div 
                  key={sub.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="p-2.5 bg-emerald-50 rounded-xl">
                        {getIcon(sub.iconName)}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {sub.status}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-lg font-serif">{sub.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{sub.description}</p>
                    
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700">
                      <strong>Scope:</strong> {sub.scope}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Timeline: {sub.timeline}</span>
                    <button 
                      onClick={onOpenDonate}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      Pledge Support &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Alumni Donors Table */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif text-slate-900">Verified Alumni Project Donors & Patrons</h3>
                <p className="text-xs text-slate-500">Recognizing alumni who have pledged concrete support towards Ajebo Community High School rebuilding.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3.5">Donor Name</th>
                    <th className="p-3.5">Graduating Set</th>
                    <th className="p-3.5">Sponsorship Tier</th>
                    <th className="p-3.5">Project Target</th>
                    <th className="p-3.5">Date</th>
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
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-lg border border-slate-800"
              />
            </div>

            <div className="p-4 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Ajebo Community High School • ACHSOSA Project Registry</span>
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
