import React, { useState } from 'react';
import { AlumniRegistration } from '../types';
import { GRADUATING_SETS } from '../data/schoolData';
import { UserPlus, CheckCircle2, GraduationCap, MessageSquare, PhoneCall, ShieldCheck, FileText } from 'lucide-react';

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

  const secGenNumber = "2348025047821";
  const secGenRawPhone = "08025047821";
  const secGenName = "Awojobi Babatunde Saheed";
  const secGenFormattedPhone = "0802 504 7821";

  const getWaUrl = () => {
    const text = `Hello Mr. ${secGenName} (ACHSOSA General Secretary),\n\nI want to register my profile as an official alumnus of Ajebo Community High School:\n\n👤 *Full Name:* ${fullName.trim()}\n🎓 *Graduating Set:* ${gradSet}\n📧 *Email:* ${email.trim()}\n📞 *Phone / WhatsApp:* ${phone.trim() || 'N/A'}\n💼 *Profession / Role:* ${occupation.trim() || 'N/A'}\n📍 *Location:* ${city.trim() || 'Abeokuta'}, ${country.trim() || 'Nigeria'}${bio.trim() ? `\n💬 *Bio / Memory:* ${bio.trim()}` : ''}\n\nPlease enter my profile into the official ACHSOSA Alumni Register. Thank you!`;
    
    return `https://wa.me/${secGenNumber}?text=${encodeURIComponent(text)}`;
  };

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

    // Automatically open WhatsApp to the General Secretary
    const url = getWaUrl();
    window.open(url, '_blank');
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
              <span className="bg-blue-100 text-blue-900 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-blue-700" /> General Secretary Secretariat
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                Join the ACHSOSA Alumni Network
              </h2>
              <p className="text-xs text-slate-500">
                Registering submits your membership profile directly to the ACHSOSA General Secretary for official documentation.
              </p>
            </div>

            {/* General Secretary Notice Banner */}
            <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200 text-xs text-blue-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-blue-900">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> Direct Secretariat Verification
              </div>
              <p className="text-slate-700 leading-relaxed">
                Your registration details will be sent directly to <strong>{secGenName}</strong> (ACHSOSA General Secretary) on WhatsApp (<strong>{secGenFormattedPhone}</strong>) for official entry into the association records.
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
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-medium focus:outline-hidden focus:border-emerald-500 max-h-48"
                  >
                    {GRADUATING_SETS.map((set) => (
                      <option key={set} value={set}>
                        {set} {set === '1977 Set' ? '(Founding Year)' : set === '1982 Set' ? '(1st Graduating Set)' : set === '1984 Set' ? '(WAEC Era)' : ''}
                      </option>
                    ))}
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
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-amber-300" />
                  Send Registration to General Secretary on WhatsApp
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-serif text-slate-900">Registration Profile Created!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you <strong className="text-slate-900">{fullName}</strong> ({gradSet}). Your profile has been saved to the web portal directory. Please confirm your registration on WhatsApp with General Secretary <strong>{secGenName}</strong>.
              </p>
            </div>

            <div className="bg-slate-900 text-left p-4 rounded-2xl text-xs text-slate-200 space-y-2 font-mono">
              <div className="flex items-center justify-between text-blue-400 font-bold border-b border-slate-800 pb-2 font-sans">
                <span>Secretariat Registration Summary</span>
                <span className="text-emerald-400">{gradSet}</span>
              </div>
              <div><span className="text-slate-400">General Secretary:</span> {secGenName}</div>
              <div><span className="text-slate-400">Name:</span> {fullName}</div>
              <div><span className="text-slate-400">Email:</span> {email}</div>
              <div><span className="text-slate-400">Phone:</span> {phone || 'N/A'}</div>
              <div><span className="text-slate-400">Location:</span> {city || 'Abeokuta'}, {country || 'Nigeria'}</div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-100" />
                Chat with General Secretary on WhatsApp ({secGenFormattedPhone})
              </a>

              <a
                href={`tel:${secGenRawPhone}`}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-blue-700" />
                Direct Phone Call: {secGenFormattedPhone}
              </a>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="w-full text-slate-500 hover:text-slate-700 font-medium text-xs pt-2"
            >
              Done & Browse Directory
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
