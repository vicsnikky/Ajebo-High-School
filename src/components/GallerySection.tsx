import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { Image as ImageIcon, Camera, ZoomIn, Filter } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'historical', label: '1980s & Historical' },
    { id: 'rebuilding', label: 'New School Rebuilding' },
    { id: 'reunions', label: 'Alumni Reunions' },
    { id: 'academics', label: 'Current Academics' },
  ];

  const filtered = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" /> Visual Memory Archive
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Archives & School Rebuilding Gallery
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Explore vintage photos from the early 1980s agricultural science era, Mrs. Elegbede's August 2024 retirement send-off, architectural site surveys, and alumni gatherings.
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
            className={`px-4 py-2 rounded-xl border transition ${
              selectedCategory === cat.id
                ? 'bg-emerald-800 text-white font-semibold border-emerald-800 shadow-xs'
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
            className="bg-white rounded-2xl overflow-hidden border border-emerald-100 shadow-xs hover:shadow-md transition cursor-pointer group space-y-3 p-3"
          >
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <span className="absolute top-2 right-2 bg-emerald-900/90 text-white text-[10px] font-mono px-2 py-0.5 rounded-md backdrop-blur-xs">
                {item.year}
              </span>
            </div>

            <div className="space-y-1 px-1">
              <h3 className="font-bold text-slate-900 text-sm font-serif group-hover:text-emerald-700 transition">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 space-y-4 shadow-2xl relative border border-emerald-100">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-slate-100 text-slate-600 hover:text-slate-900 p-2 rounded-full text-xs font-bold"
            >
              ✕
            </button>

            <div className="aspect-16/9 rounded-2xl overflow-hidden bg-slate-100">
              <img 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs text-emerald-800 font-mono font-bold">
                <span>Category: {selectedImage.category.toUpperCase()}</span>
                <span>Year: {selectedImage.year}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">{selectedImage.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
