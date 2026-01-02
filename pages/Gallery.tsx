import React from 'react';
import { useData } from '../context/DataContext';

export const Gallery: React.FC = () => {
  const { galleryItems } = useData();

  return (
    <div className="py-16 bg-transparent min-h-screen">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold font-serif text-amber-50 mb-4 drop-shadow-md">Gallery</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg font-light drop-shadow">
            A visual feast of our recent creations. From elegant wedding cakes to vibrant traditional dishes.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {galleryItems.map((image) => (
            <div key={image.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <span className="text-amber-50 font-serif text-xl tracking-wide border-b-2 border-amber-500 pb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};