import React, { useState } from 'react';
import { SCHOOL_EVENTS } from '../data/schoolData';
import { SchoolEvent } from '../types';
import { Calendar, MapPin, Clock, Video, CheckCircle2, UserCheck, Sparkles } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [rsvpedEventIds, setRsvpedEventIds] = useState<string[]>([]);

  const toggleRsvp = (id: string) => {
    if (rsvpedEventIds.includes(id)) {
      setRsvpedEventIds(rsvpedEventIds.filter(i => i !== id));
    } else {
      setRsvpedEventIds([...rsvpedEventIds, id]);
    }
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Reunions & Key Dates
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              ACHSOSA Alumni Events & Groundbreaking
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Join upcoming homecoming celebrations, building project foundation laying in Ajebo town, and virtual diaspora fundraisers.
            </p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SCHOOL_EVENTS.map((evt) => {
          const isRsvped = rsvpedEventIds.includes(evt.id);
          return (
            <div 
              key={evt.id}
              className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {evt.type}
                  </span>
                  {evt.isVirtual && (
                    <span className="bg-orange-100 text-orange-900 text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Video className="w-3 h-3 text-orange-600" /> Virtual
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-lg font-serif">{evt.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{evt.description}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="space-y-1.5 text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-500">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <button
                  id={`rsvp-btn-${evt.id}`}
                  onClick={() => toggleRsvp(evt.id)}
                  className={`w-full py-2.5 rounded-xl font-medium text-xs transition flex items-center justify-center gap-1.5 ${
                    isRsvped 
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                  }`}
                >
                  {isRsvped ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      RSVP Confirmed (See You There!)
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-4 h-4 text-orange-400" />
                      RSVP / Attend Event
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
