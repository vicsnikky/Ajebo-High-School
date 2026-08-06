import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { TabType } from '../types';
import { MapPin, Mail, Phone, HeartHandshake, ShieldCheck, GraduationCap } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
  onOpenDonate: () => void;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenDonate, onOpenRegister }) => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-800">
      {/* Upper Callout Bar */}
      <div className="bg-emerald-900 border-b border-emerald-800/80 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white font-serif flex items-center justify-center md:justify-start gap-2">
              <span>Support Ajebo Community High School's Future</span>
            </h3>
            <p className="text-emerald-200 text-sm max-w-2xl">
              Be part of history as alumni, local leaders, and community partners unite to construct modern classrooms, science laboratories, and ICT facilities for our students in Obafemi Owode LGA.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <button
              id="footer-donate-cta"
              onClick={onOpenDonate}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md transition flex items-center gap-2"
            >
              <HeartHandshake className="w-4 h-4" />
              Pledge Project Support
            </button>
            <button
              id="footer-register-cta"
              onClick={onOpenRegister}
              className="bg-emerald-800 hover:bg-emerald-700 text-white font-medium text-sm px-4 py-2.5 rounded-lg border border-emerald-600 transition"
            >
              Register Alumni Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: School Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src={SCHOOL_INFO.logoUrl} 
              alt="ACHS Crest" 
              className="w-10 h-10 object-contain bg-white rounded-lg p-1"
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="font-bold text-white font-serif text-base">{SCHOOL_INFO.name}</h4>
              <p className="text-xs text-emerald-300">Official Secondary School Portal</p>
            </div>
          </div>
          <p className="text-xs text-emerald-300 leading-relaxed">
            Established in Ajebo, Obafemi Owode LGA, Ogun State, to provide quality secondary education and practical agricultural science. Built for the community and supported by its proud alumni.
          </p>
          <div className="text-xs space-y-1.5 text-emerald-200">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{SCHOOL_INFO.contactEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400 shrink-0" />
              <a 
                href="tel:07087106906" 
                className="hover:text-white transition underline decoration-emerald-500/50"
              >
                0708 710 6906 (President: Engr. Adebayo Joseph Joda)
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="space-y-3">
          <h5 className="text-sm font-semibold text-white uppercase tracking-wider text-orange-400">
            Quick Navigation
          </h5>
          <ul className="text-xs space-y-2 text-emerald-200">
            <li>
              <button 
                onClick={() => setActiveTab('home')}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <span>School Overview</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('building')}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <span className="text-orange-300 font-medium">Rebuilding Project Hub</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('history')}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <span>School History & Archive</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('alumni')}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <span>Notable Alumni Roll</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('leadership')}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <span>School Principals & Staff</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('directory')}
                className="hover:text-white transition flex items-center gap-1.5"
              >
                <span>Alumni Directory</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Project Targets */}
        <div className="space-y-3">
          <h5 className="text-sm font-semibold text-white uppercase tracking-wider text-orange-400">
            Building Components
          </h5>
          <ul className="text-xs space-y-2 text-emerald-200">
            <li className="flex justify-between items-center py-1 border-b border-emerald-900">
              <span>16-Classroom Academic Block</span>
              <span className="text-emerald-300 font-semibold text-[11px]">Under Construction</span>
            </li>
            <li className="flex justify-between items-center py-1 border-b border-emerald-900">
              <span>STEM & ICT Innovation Hub</span>
              <span className="text-emerald-300 font-semibold text-[11px]">Planning Phase</span>
            </li>
            <li className="flex justify-between items-center py-1 border-b border-emerald-900">
              <span>Agric Science & Poultry Farm</span>
              <span className="text-emerald-300 font-semibold text-[11px]">Active Revival</span>
            </li>
            <li className="flex justify-between items-center py-1 border-b border-emerald-900">
              <span>Solar Grid & Perimeter Security</span>
              <span className="text-emerald-300 font-semibold text-[11px]">Funded / Materials</span>
            </li>
            <li className="flex justify-between items-center py-1">
              <span>Library & Multipurpose Hall</span>
              <span className="text-emerald-300 font-semibold text-[11px]">Phase 3 Scope</span>
            </li>
          </ul>
        </div>

        {/* Col 4: School Governance & Support */}
        <div className="space-y-3">
          <h5 className="text-sm font-semibold text-white uppercase tracking-wider text-orange-400">
            Governance & Oversight
          </h5>
          <div className="bg-emerald-900/70 border border-emerald-800 rounded-xl p-3 text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-200 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Official School Rebuilding Committee</span>
            </div>
            <p className="text-[11px] text-emerald-300 leading-relaxed">
              All infrastructure projects are executed in partnership with the Ogun State Ministry of Education and Obafemi Owode Local Government Area authorities.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-900 py-4 px-4 sm:px-6 text-xs text-emerald-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Ajebo Community High School, Obafemi Owode LGA, Ogun State, Nigeria.</p>
          <div className="flex items-center gap-4 text-emerald-300">
            <span className="hover:text-white cursor-pointer" onClick={() => setActiveTab('history')}>Established 1980</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => setActiveTab('leadership')}>Obafemi Owode LGA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
