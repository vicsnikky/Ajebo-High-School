import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { Image as ImageIcon, Camera, ZoomIn, ShieldCheck, Calendar } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Inauguration Photos (17)' },
    { id: 'inauguration', label: 'Inauguration Ceremony' },
    { id: 'swearing-in', label: 'Oath & Swearing-In' },
    { id: 'portraits', label: 'Executive Portraits & Groups' },
  ];

  const filtered = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-4 border border-emerald-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs">
              <Camera className="w-3.5 h-3.5" /> Official Event Archive
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white leading-tight">
              EXCO Inauguration <span className="text-emerald-300">Photo Gallery</span>
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Commemorative photographs captured during the official swearing-in and inauguration ceremony of the 17 Executive Officers of Ajebo Community High School Old Students Association (ACHSOSA) on <strong>February 14, 2026</strong>.
            </p>
          </div>

          <div className="bg-slate-900/90 border border-emerald-700 p-4 rounded-2xl text-xs space-y-2 shrink-0 w-full md:w-72 shadow-inner">
            <div className="font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Event Details
            </div>
            <p className="text-emerald-100">
              <strong>Event:</strong> EXCO Inauguration
            </p>
            <p className="text-emerald-100">
              <strong>Date:</strong> February 14, 2026
            </p>
            <p className="text-emerald-100">
              <strong>Location:</strong> ACHS School Grounds
            </p>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 rounded-xl border transition font-medium ${
              selectedCategory === cat.id
                ? 'bg-emerald-800 text-white font-bold border-emerald-800 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-xs hover:shadow-md transition cursor-pointer group space-y-3 p-3.5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                </div>
                <span className="absolute top-2 right-2 bg-emerald-950/90 text-amber-300 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md backdrop-blur-xs border border-amber-400/30">
                  {item.year}
                </span>
              </div>

              <div className="space-y-1.5 px-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base font-serif group-hover:text-emerald-700 transition leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative border border-emerald-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-700 p-2 rounded-full text-xs font-bold transition"
            >
              ✕
            </button>

            <div className="aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain bg-slate-950"
              />
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap justify-between items-center text-xs text-emerald-800 font-mono font-bold gap-2 border-b border-slate-100 pb-2">
                <span className="bg-emerald-100 px-3 py-1 rounded-full uppercase">Category: {selectedImage.category}</span>
                <span className="text-slate-500">Event Date: {selectedImage.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">{selectedImage.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
