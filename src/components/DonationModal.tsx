import React, { useState } from 'react';
import { SUB_PROJECTS } from '../data/schoolData';
import { DonorRecord } from '../types';
import { HeartHandshake, ShieldCheck, CheckCircle2, Sparkles, Copy, Building2, Coins } from 'lucide-react';

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
              <span className="bg-orange-100 text-orange-950 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <HeartHandshake className="w-3.5 h-3.5 text-orange-600" /> Infrastructure Support Form
              </span>
              <h2 className="text-2xl font-bold font-serif text-slate-900 mt-2">
                Pledge School Project Support
              </h2>
              <p className="text-xs text-slate-500">
                Register your commitment to support Ajebo Community High School's infrastructure rebuild.
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
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-3 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-5 h-5 text-white" />
                  Register Pledge Support
                </button>
              </div>
            </form>
          </>
        ) : (
          /* Thank You Confirmation */
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-serif text-slate-900">Thank You For Your Support!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your pledge for <strong className="text-emerald-800 font-semibold">{contributionArea}</strong> has been registered on the Ajebo Community High School Infrastructure Ledger.
              </p>
            </div>

            <div className="bg-slate-900 text-white p-5 rounded-2xl text-left text-xs space-y-3 border border-slate-800">
              <div className="flex items-center justify-between text-orange-400 font-bold border-b border-slate-800 pb-2">
                <span>Pledge Confirmation Summary</span>
                <span className="text-emerald-400 font-mono text-[11px]">{gradSet}</span>
              </div>
              <div><span className="text-slate-400">Facility:</span> {subProjectTarget}</div>
              <div><span className="text-slate-400">Contribution Area:</span> {contributionArea}</div>
              <div><span className="text-slate-400">Category:</span> {tier}</div>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-xs py-3 rounded-xl transition"
            >
              Done & Return to School Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
