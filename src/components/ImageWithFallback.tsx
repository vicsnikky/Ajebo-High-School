import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  ...props
}) => {
  const [attempt, setAttempt] = useState<number>(0);

  // Generate fallback proxy URL if direct CDN fails
  const getCleanUrl = (originalUrl: string) => {
    if (!originalUrl) return '';
    return originalUrl.trim();
  };

  const getProxyUrl = (originalUrl: string) => {
    try {
      const stripped = originalUrl.replace(/^https?:\/\//i, '');
      return `https://images.weserv.nl/?url=${encodeURIComponent(stripped)}&default=${encodeURIComponent(originalUrl)}`;
    } catch {
      return originalUrl;
    }
  };

  const currentSrc = attempt === 0 
    ? getCleanUrl(src) 
    : attempt === 1 
      ? getProxyUrl(src) 
      : '';

  const handleError = () => {
    if (attempt === 0) {
      // First try proxy fallback (weserv CDN strips referrers and bypasses domain hotlink restrictions)
      setAttempt(1);
    } else {
      // Mark as failed
      setAttempt(2);
    }
  };

  if (attempt >= 2 || !currentSrc) {
    return (
      <div className={`bg-gradient-to-br from-emerald-950 to-slate-900 text-white flex flex-col items-center justify-center p-4 text-center select-none ${className}`}>
        <ImageIcon className="w-8 h-8 text-emerald-400/70 mb-1.5" />
        <span className="text-[11px] font-semibold text-emerald-200 line-clamp-2 px-2">
          {alt || fallbackText || 'Ajebo Community High School Archive'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      loading="eager"
      decoding="async"
      onError={handleError}
      className={className}
      {...props}
    />
  );
};
