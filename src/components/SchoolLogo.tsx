import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { BookOpen, GraduationCap, Shield } from 'lucide-react';

interface SchoolLogoProps {
  className?: string;
  imgClassName?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  className = '',
  imgClassName = '',
  size = 'md'
}) => {
  const [attempt, setAttempt] = useState<number>(0);

  const getProxyUrl = (url: string) => {
    try {
      const stripped = url.replace(/^https?:\/\//i, '');
      return `https://images.weserv.nl/?url=${encodeURIComponent(stripped)}`;
    } catch {
      return url;
    }
  };

  const currentSrc = attempt === 0
    ? SCHOOL_INFO.logoUrl
    : attempt === 1
      ? getProxyUrl(SCHOOL_INFO.logoUrl)
      : '';

  const handleError = () => {
    if (attempt === 0) {
      setAttempt(1);
    } else {
      setAttempt(2);
    }
  };

  // If both direct CDN and proxy fail, render high-fidelity SVG crest emblem
  if (attempt >= 2 || !currentSrc) {
    const sizeMap = {
      sm: 'w-8 h-8 text-[8px]',
      md: 'w-12 h-12 text-[10px]',
      lg: 'w-20 h-20 text-xs',
      xl: 'w-32 h-32 text-sm'
    };

    return (
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-950 text-amber-300 font-bold border-2 border-amber-400/80 shadow-md p-1 select-none ${sizeMap[size]} ${className}`}>
        <div className="flex flex-col items-center justify-center text-center leading-none space-y-0.5">
          <BookOpen className="w-1/2 h-1/2 text-amber-400 stroke-[2.5]" />
          <span className="font-serif font-black tracking-wider text-amber-300">ACHS</span>
          <span className="text-[7px] text-emerald-200 font-mono">1977</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt="Ajebo Community High School Crest"
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      loading="eager"
      decoding="async"
      onError={handleError}
      className={`object-contain ${imgClassName || className}`}
    />
  );
};
