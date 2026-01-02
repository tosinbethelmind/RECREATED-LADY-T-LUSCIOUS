import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import { useData } from '../context/DataContext';

export const About: React.FC = () => {
  const { siteContent } = useData();

  return (
    <div className="bg-background min-h-screen">
      <div className="relative h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-stone-900/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=chef-cooking")' }}
        />
        <div className="container relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold font-serif">{siteContent.about.title}</h1>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-stone-600">
          <p>
            <strong className="text-primary text-xl font-serif block mb-2">Welcome to {siteContent.general.companyName}.</strong> 
            {/* Displaying raw text since we're using simple textarea input */}
            <span className="whitespace-pre-line">{siteContent.about.welcomeText}</span>
          </p>

          <div className="my-12 p-8 bg-beige rounded-xl border-l-4 border-primary">
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-4">Our Philosophy</h3>
            <p className="italic text-stone-700 whitespace-pre-line">
              {siteContent.about.philosophyText}
            </p>
          </div>

          <h3 className="text-2xl font-bold font-serif text-stone-900">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li><strong>Authenticity:</strong> We use traditional spices sourced directly from Africa.</li>
            <li><strong>Freshness:</strong> Our meals are cooked fresh daily, never frozen.</li>
            <li><strong>Versatility:</strong> From corporate catering to intimate wedding cakes, we do it all.</li>
            <li><strong>Hygiene:</strong> 5-star hygiene rating and meticulous preparation standards.</li>
          </ul>

          <div className="pt-8 text-center">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Let us spice up your next event.</h3>
            <NavLink to="/contact">
              <Button size="lg">Get in Touch</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};