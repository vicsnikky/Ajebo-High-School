import React, { useState } from 'react';
import { SUB_PROJECTS, GRADUATING_SETS } from '../data/schoolData';
import { DonorRecord } from '../types';
import { HeartHandshake, CheckCircle2, MessageSquare, PhoneCall, Crown, Sparkles, ShieldCheck } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDonor: (newDonor: Omit<DonorRecord, 'id' | 'date'>) => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, onAddDonor }) => {
  const [donorName, setDonorName] = useState('');
  const [gradSet, setGradSet] = useState('1984 Set');
  const [tier, setTier] = useState<DonorRecord['tier']>('Key Building Partner');
  const [contributionArea, setContributionArea] = useState('Structural Construction & Roofing');
  const [subProjectTarget, setSubProjectTarget] = useState('16-Classroom Academic Block');
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const presidentNumber = "2347087106906";
  const presidentRawPhone = "07087106906";
  const presidentName = "Engr. Adebayo Joseph Joda";
  const presidentFormattedPhone = "0708 710 6906";

  const getWaUrl = () => {
    const formattedName = isAnonymous ? 'Anonymous Donor' : (donorName.trim() || 'Old Student / Wellwisher');
    const text = `Hello ${presidentName} (ACHSOSA President),\n\nI want to make a donation / pledge support for the Ajebo Community High School rebuilding project:\n\n👤 *Name:* ${formattedName}\n🎓 *Graduating Set:* ${gradSet}\n🏆 *Support Category:* ${tier}\n🏫 *Target Facility:* ${subProjectTarget}\n🛠️ *Contribution Area:* ${contributionArea}${message.trim() ? `\n💬 *Goodwill Message:* ${message.trim()}` : ''}\n\nPlease send me the official ACHSOSA bank account details and guidance on completing this donation. Thank you!`;
    
    return `https://wa.me/${presidentNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAnonymous && !donorName.trim()) return;

    onAddDonor({
      name: isAnonymous ? 'Anonymous Old Student' : donorName,
      gradSet,
      tier,
      contributionArea,
      subProjectTarget,
      isAnonymous,
      message
    });

    setSubmitted(true);

    // Automatically open WhatsApp with pre-filled details to President
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
              <span className="bg-emerald-100 text-emerald-950 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <Crown className="w-3.5 h-3.5 text-amber-600" /> Direct President Contact Line
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                Pledge School Project Support
              </h2>
              <p className="text-xs text-slate-500">
                Submitting this form directs your donation details directly to the ACHSOSA President on WhatsApp for official processing and account verification.
              </p>
            </div>

            {/* Notice banner about President WhatsApp Direct Routing */}
            <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-900">
                <ShieldCheck className="w-4 h-4 text-amber-600" /> Direct President Support
              </div>
              <p className="text-slate-700 leading-relaxed">
                Your pledge details will be sent directly to <strong>{presidentName}</strong> (ACHSOSA President) on WhatsApp (<strong>{presidentFormattedPhone}</strong>) to provide you with the official bank account details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Sponsorship Tier */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Select Support Category / Tier *</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { id: 'Lead Sponsor', label: 'Lead Sponsor' },
                    { id: 'Key Building Partner', label: 'Key Building Partner' },
                    { id: 'Patron Set', label: 'Patron Set' },
                    { id: 'Friend of ACHS', label: 'Friend of ACHS' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTier(t.id as DonorRecord['tier'])}
                      className={`py-2 px-3 rounded-xl text-center font-bold transition border ${
                        tier === t.id
                          ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contribution Area */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Contribution / Equipment Area *</label>
                <select
                  value={contributionArea}
                  onChange={(e) => setContributionArea(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-medium focus:outline-hidden focus:border-emerald-500"
                >
                  <option value="Structural Construction & Roofing">Structural Construction & Roofing</option>
                  <option value="Desktop Computers & ICT Networking">Desktop Computers & ICT Networking</option>
                  <option value="Solar Inverters & Green Energy Grid">Solar Inverters & Green Energy Grid</option>
                  <option value="Poultry Equipment & Farm Irrigation">Poultry Equipment & Farm Irrigation</option>
                  <option value="Student Desks, Chairs & Whiteboards">Student Desks, Chairs & Whiteboards</option>
                  <option value="Science Lab Equipment & Reagents">Science Lab Equipment & Reagents</option>
                  <option value="General Infrastructure Logistics">General Infrastructure Logistics</option>
                </select>
              </div>

              {/* Donor Name & Set */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Alumnus / Sponsor Name *</label>
                  <input 
                    type="text"
                    required={!isAnonymous}
                    disabled={isAnonymous}
                    placeholder="Full Name / Set Representative"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Graduating Set *</label>
                  <select
                    value={gradSet}
                    onChange={(e) => setGradSet(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-medium focus:outline-hidden focus:border-emerald-500"
                  >
                    {GRADUATING_SETS.map((set) => (
                      <option key={set} value={set}>
                        {set} {set === '1977 Set' ? '(Founding Year)' : set === '1982 Set' ? '(1st Graduating Set)' : set === '1984 Set' ? '(WAEC Era)' : ''}
                      </option>
                    ))}
                    <option value="General Wellwisher">General School Wellwisher</option>
                  </select>
                </div>
              </div>

              {/* Target Facility */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Designate Support To Facility:</label>
                <select
                  value={subProjectTarget}
                  onChange={(e) => setSubProjectTarget(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs font-medium focus:outline-hidden focus:border-emerald-500"
                >
                  {SUB_PROJECTS.map(p => (
                    <option key={p.id} value={p.title}>{p.title}</option>
                  ))}
                  <option value="General Infrastructure Rebuild">General Infrastructure Rebuild</option>
                </select>
              </div>

              {/* Anonymous checkbox */}
              <div className="flex items-center gap-2 text-xs">
                <input 
                  type="checkbox"
                  id="anonymous-check"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="anonymous-check" className="text-slate-600">Keep name anonymous on public ledger</label>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Optional Goodwill Message</label>
                <textarea 
                  rows={2}
                  placeholder="e.g. Dedicated to our pioneer teachers and students at Ajebo Community High School."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 text-amber-300" />
                  Send Donation Details to President on WhatsApp
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Thank You & Direct WhatsApp Launch */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-serif text-slate-900">Pledge Recorded!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your pledge for <strong className="text-emerald-800 font-semibold">{contributionArea}</strong> has been registered on the school ledger. Please complete your donation via WhatsApp with President <strong>{presidentName}</strong>.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-5 rounded-2xl text-left text-xs space-y-3 border border-slate-800">
              <div className="flex items-center justify-between text-amber-400 font-bold border-b border-slate-800 pb-2">
                <span>Pledge Summary</span>
                <span className="text-emerald-400 font-mono text-[11px]">{gradSet}</span>
              </div>
              <div><span className="text-slate-400">Recipient:</span> {presidentName} (ACHSOSA President)</div>
              <div><span className="text-slate-400">Facility Target:</span> {subProjectTarget}</div>
              <div><span className="text-slate-400">Contribution Area:</span> {contributionArea}</div>
              <div><span className="text-slate-400">Category:</span> {tier}</div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={getWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-100" />
                Chat with President on WhatsApp ({presidentFormattedPhone})
              </a>

              <a
                href={`tel:${presidentRawPhone}`}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-700" />
                Direct Phone Call: {presidentFormattedPhone}
              </a>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="w-full text-slate-500 hover:text-slate-700 font-medium text-xs pt-2"
            >
              Done & Return to School Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
