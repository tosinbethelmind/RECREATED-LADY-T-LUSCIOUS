import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import { COMPANY_NAME } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="relative h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-stone-900/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=about")' }}
        />
        <div className="container relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold font-serif">Our Story</h1>
        </div>
      </div>

      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-stone-600">
          <p>
            <strong className="text-primary text-xl font-serif block mb-2">Welcome to {COMPANY_NAME}.</strong> 
            We are a premier bakery and catering service dedicated to providing the highest quality sweet and savory treats for our community.
          </p>
          
          <p>
            Founded with a simple mission: to bring joy through food. Our journey began in a small home kitchen, fueled by a passion for baking and a desire to share family recipes with the world. Today, we are proud to serve hundreds of happy customers, yet we remain true to our roots—baking small batches with big love.
          </p>

          <div className="my-12 p-8 bg-beige rounded-xl border-l-4 border-primary">
            <h3 className="text-2xl font-bold font-serif text-stone-900 mb-4">Our Philosophy</h3>
            <p className="italic text-stone-700">
              "We believe that the best ingredients make the best food. No shortcuts, no preservatives, just pure, wholesome goodness."
            </p>
          </div>

          <h3 className="text-2xl font-bold font-serif text-stone-900">Why Choose Us?</h3>
          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li><strong>Custom Designs:</strong> We work closely with you to bring your vision to life.</li>
            <li><strong>Freshness Guaranteed:</strong> Everything is baked to order.</li>
            <li><strong>Wide Variety:</strong> Gluten-free, vegan, and nut-free options available upon request.</li>
            <li><strong>Exceptional Service:</strong> We treat every customer like family.</li>
          </ul>

          <div className="pt-8 text-center">
            <h3 className="text-xl font-bold text-stone-900 mb-6">Let us be a part of your next celebration.</h3>
            <NavLink to="/contact">
              <Button size="lg">Get in Touch</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};