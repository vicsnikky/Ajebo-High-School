import React from 'react';
import { ADMIN_LEADERS, SCHOOL_INFO } from '../data/schoolData';
import { UserCheck, ShieldAlert, Award, Calendar, GraduationCap, Info, FileText, CheckCircle2 } from 'lucide-react';

export const Administration: React.FC = () => {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Page Title & Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" /> Institutional Lineage
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              School Leadership & Administration Registry
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Documenting the visionary principals and educational administrators who directed Ajebo Community High School in Obafemi Owode Local Government Area, Ogun State.
            </p>
          </div>
        </div>
      </div>

      {/* Official Registry Archival Note (Prompt Mandate) */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 text-amber-950 space-y-2">
        <div className="flex items-center gap-2 font-bold font-serif text-base text-amber-900">
          <Info className="w-5 h-5 text-amber-600 shrink-0" />
          <span>Note on Localized Public School Registries</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
          Due to the decentralized nature of localized public school registries in Ogun State, a comprehensive, chronologically unbroken list of all principals since the late 1970s is not maintained in a singular public archive. Below are the verified administrative records maintained by the state board and the Ajebo Community High School Old Students Association (ACHSOSA).
        </p>
      </div>

      {/* Highlighted Verified Administrative Leaders */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-serif text-slate-900">
          Verified School Principals & Administrators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mrs. Abosede Aderemi Elegbede */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="bg-emerald-100 text-emerald-900 font-semibold text-xs px-3 py-1 rounded-full border border-emerald-300">
                  Ajebo Community High School, JNR
                </span>
                <span className="bg-orange-100 text-orange-900 text-xs font-bold px-2.5 py-1 rounded-md">
                  Retired August 2024
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Mrs. Abosede Aderemi Elegbede</h3>
                <p className="text-xs text-emerald-700 font-medium">Principal, Junior Arm (ACHS JNR)</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Served as the Principal for the Junior arm of the school until she officially stepped down and retired from active teaching service in August 2024.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Notable Milestone:</div>
                <p className="text-xs text-slate-600">
                  {ADMIN_LEADERS[0].notableAchievement}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Tenure: 2016 – August 2024</span>
              <span className="text-emerald-700 font-medium">Verified Public Record</span>
            </div>
          </div>

          {/* Mr. Okusi */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="bg-emerald-100 text-emerald-900 font-semibold text-xs px-3 py-1 rounded-full border border-emerald-300">
                  Obafemi Owode LGA Tenure
                </span>
                <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                  Historical Principal
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">Mr. Okusi</h3>
                <p className="text-xs text-emerald-700 font-medium">Principal, Ajebo Community High School</p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Documented serving as the Principal of the institution within the Obafemi-Owode Local Government Area, driving academic discipline and curriculum consolidation.
              </p>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">Notable Milestone:</div>
                <p className="text-xs text-slate-600">
                  {ADMIN_LEADERS[1].notableAchievement}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Jurisdiction: Obafemi Owode LGA</span>
              <span className="text-emerald-700 font-medium">Verified Registry Record</span>
            </div>
          </div>

        </div>
      </div>

      {/* ACHSOSA Alumni Rebuilding Executive Board */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-xs space-y-6">
        <div>
          <h2 className="text-xl font-bold font-serif text-slate-900">
            ACHSOSA Alumni Executive Committee & Project Trustees
          </h2>
          <p className="text-xs text-slate-500">
            The dedicated old students directing the ₦150M Rebuilding Drive and coordinating with school administration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 text-sm font-serif">Hon. (Dr.) Tella O. Babatunde</div>
            <div className="text-xs text-emerald-700 font-medium">Grand Patron & Legislative Liaison</div>
            <div className="text-[11px] text-slate-500 font-mono">Class of 1984</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 text-sm font-serif">Dr. Gbenga Adeoye</div>
            <div className="text-xs text-emerald-700 font-medium">Chairman, Legal & Rebuilding Committee</div>
            <div className="text-[11px] text-slate-500 font-mono">Class of 1986</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 text-sm font-serif">Eunice Akinwande</div>
            <div className="text-xs text-emerald-700 font-medium">Director, Agric Science Demo Farm Revamp</div>
            <div className="text-[11px] text-slate-500 font-mono">Class of 1985</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 text-sm font-serif">Engr. Olumide Ogundipe</div>
            <div className="text-xs text-emerald-700 font-medium">Head of Structural & Solar Engineering</div>
            <div className="text-[11px] text-slate-500 font-mono">Class of 1992</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 text-sm font-serif">Mrs. Folake Aderibigbe</div>
            <div className="text-xs text-emerald-700 font-medium">Academic Mentorship & Scholarship Lead</div>
            <div className="text-[11px] text-slate-500 font-mono">Class of 1988</div>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1">
            <div className="font-bold text-slate-900 text-sm font-serif">Alumni Secretariat</div>
            <div className="text-xs text-emerald-700 font-medium">Ajebo Town, Obafemi Owode LGA</div>
            <div className="text-[11px] text-slate-500 font-mono">info@achsosa.org.ng</div>
          </div>
        </div>
      </div>
    </div>
  );
};
