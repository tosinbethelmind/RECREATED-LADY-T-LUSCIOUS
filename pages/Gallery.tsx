import React from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-stone-900 mb-4">Gallery</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            A visual feast of our recent creations. From elegant wedding cakes to fun party treats.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_IMAGES.map((image) => (
            <div key={image.id} className="break-inside-avoid relative group rounded-xl overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-lg tracking-wide border-b border-amber-500 pb-1">
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