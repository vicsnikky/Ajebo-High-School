import React, { useState } from 'react';
import { AlumniRegistration } from '../types';
import { UserPlus, CheckCircle2, GraduationCap } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddRegistration: (newReg: Omit<AlumniRegistration, 'id' | 'registeredAt'>) => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onAddRegistration }) => {
  const [fullName, setFullName] = useState('');
  const [gradSet, setGradSet] = useState('1984 Set');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('Nigeria');
  const [bio, setBio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    onAddRegistration({
      fullName,
      gradSet,
      email,
      phone,
      occupation: occupation || 'Educator / Professional',
      city: city || 'Abeokuta',
      country: country || 'Nigeria',
      bio
    });

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-emerald-100 max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 font-bold p-1 rounded-lg"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="border-b border-slate-100 pb-4">
              <span className="bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-700" /> Official ACHSOSA Registry
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                Join the ACHSOSA Alumni Network
              </h2>
              <p className="text-xs text-slate-500">
                Register your profile as an alumnus of Ajebo Community High School to reconnect and participate in rebuilding projects.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Babatunde Sowemimo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Graduating Set *</label>
                  <select
                    value={gradSet}
                    onChange={(e) => setGradSet(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-medium focus:outline-hidden focus:border-emerald-500"
                  >
                    <option value="1984 Set">1984 Set (WAEC Era)</option>
                    <option value="1985 Set">1985 Set</option>
                    <option value="1986 Set">1986 Set</option>
                    <option value="1988 Set">1988 Set</option>
                    <option value="1990 Set">1990 Set</option>
                    <option value="1992 Set">1992 Set</option>
                    <option value="1995 Set">1995 Set</option>
                    <option value="2000 Set">2000 Set</option>
                    <option value="2005 Set">2005 Set</option>
                    <option value="2010 Set">2010 Set</option>
                    <option value="2015 Set">2015 Set</option>
                    <option value="2020 Set">2020 Set</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input 
                    type="email"
                    required
                    placeholder="alumnus@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (WhatsApp)</label>
                  <input 
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Profession / Role</label>
                  <input 
                    type="text"
                    placeholder="e.g. Agronomist / Lawyer"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">City</label>
                  <input 
                    type="text"
                    placeholder="e.g. Abeokuta / Lagos"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
                  <input 
                    type="text"
                    placeholder="e.g. Nigeria / UK"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Brief Bio / Favorite School Memory</label>
                <textarea 
                  rows={2}
                  placeholder="Share a short note about your days at Ajebo Community High School..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-5 h-5" />
                  Complete Registration
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-serif text-slate-900">Welcome to ACHSOSA!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you <strong className="text-slate-900">{fullName}</strong> ({gradSet}). Your profile has been added to the public alumni directory.
              </p>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-medium text-xs py-3 rounded-xl transition"
            >
              Done & Browse Directory
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
