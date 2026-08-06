import React, { useState } from 'react';
import { TabType } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';
import { 
  Building2, 
  History, 
  Award, 
  UserCheck, 
  Users, 
  Calendar, 
  Image as ImageIcon, 
  MessageSquare, 
  Home, 
  HeartHandshake, 
  UserPlus, 
  Menu, 
  X,
  Sparkles,
  MapPin,
  GraduationCap,
  Crown
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenDonate: () => void;
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenDonate,
  onOpenRegister
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'School Home', icon: <Home className="w-4 h-4" /> },
    { id: 'building', label: 'Rebuilding Project', icon: <Building2 className="w-4 h-4" /> },
    { id: 'history', label: 'School History', icon: <History className="w-4 h-4" /> },
    { id: 'leadership', label: 'Administration', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'exco', label: 'EXCO', icon: <Crown className="w-4 h-4" /> },
    { id: 'alumni', label: 'Distinguished Alumni', icon: <Award className="w-4 h-4" /> },
    { id: 'directory', label: 'Alumni Registry', icon: <Users className="w-4 h-4" /> },
    { id: 'events', label: 'School Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'gallery', label: 'Photo Archives', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'forum', label: 'Community Forum', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-emerald-100 shadow-xs">
      {/* Top Banner with Official School Identity */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-emerald-50">
            <span className="inline-flex items-center gap-1 bg-orange-500 text-white font-semibold px-2.5 py-0.5 rounded-full text-xs">
              <GraduationCap className="w-3.5 h-3.5" /> Official School Portal
            </span>
            <span className="hidden sm:inline">Ajebo Community High School, Obafemi Owode LGA, Ogun State</span>
            <span className="sm:hidden font-medium">Ajebo Community High School</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-emerald-200 text-xs hidden md:inline flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-orange-400" /> Infrastructure Rebuilding Drive Supported by ACHSOSA Alumni
            </span>
            <button
              id="header-top-pledge-btn"
              onClick={onOpenDonate}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs px-3 py-1 rounded-md transition shadow-xs flex items-center gap-1"
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              Support Rebuilding
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <div 
          className="flex items-center gap-3.5 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          {/* Logo Container */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 border-emerald-600/30 shadow-xs bg-emerald-50 flex items-center justify-center p-0.5 transition group-hover:scale-105">
            <img 
              src={SCHOOL_INFO.logoUrl} 
              alt="Ajebo Community High School Crest Logo" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-serif group-hover:text-emerald-800 transition">
                {SCHOOL_INFO.name}
              </h1>
              <span className="hidden md:inline-block bg-emerald-100 text-emerald-900 text-xs font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                Est. 1970s
              </span>
            </div>
            <p className="text-xs text-slate-600 flex items-center gap-1.5 mt-0.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>{SCHOOL_INFO.lga}, Ogun State</span>
              <span className="text-slate-300">•</span>
              <span className="font-semibold text-emerald-800">Knowledge, Diligence & Excellence</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="header-register-btn"
            onClick={onOpenRegister}
            className="border border-emerald-700 text-emerald-800 hover:bg-emerald-50 text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5"
          >
            <UserPlus className="w-4 h-4 text-emerald-700" />
            Alumni Registration
          </button>
          
          <button
            id="header-donate-btn"
            onClick={onOpenDonate}
            className="bg-emerald-800 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4.5 py-2 rounded-xl shadow-sm transition flex items-center gap-1.5"
          >
            <HeartHandshake className="w-4 h-4 text-orange-400" />
            Pledge Project Support
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="header-mobile-donate"
            onClick={onOpenDonate}
            className="bg-emerald-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-orange-400" />
            Support
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-emerald-800 rounded-lg focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Desktop Navigation Bar */}
      <nav className="hidden lg:block bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-1 overflow-x-auto scrollbar-none py-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-800 text-white shadow-xs font-semibold text-orange-200'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span className={isActive ? 'text-orange-400' : 'text-emerald-400'}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 px-4 py-4 space-y-2">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-tab-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition text-left ${
                  activeTab === item.id
                    ? 'bg-emerald-800 text-white font-semibold border-l-4 border-orange-500'
                    : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span className={activeTab === item.id ? 'text-orange-400' : 'text-emerald-400'}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              id="mobile-menu-register-btn"
              onClick={() => {
                onOpenRegister();
                setMobileMenuOpen(false);
              }}
              className="w-full border border-emerald-500 text-emerald-200 py-2.5 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" />
              Alumni Register
            </button>
            <button
              id="mobile-menu-donate-btn"
              onClick={() => {
                onOpenDonate();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-emerald-700 text-white py-2.5 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1.5"
            >
              <HeartHandshake className="w-4 h-4" />
              Support Rebuild
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
