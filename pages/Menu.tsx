import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Button } from '../components/Button';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = () => {
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif text-stone-900 mb-4">Our Menu</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Explore our delicious selection of cakes, pastries, and savory treats. All baked fresh daily.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Button 
            variant={activeCategory === 'All' ? 'primary' : 'outline'}
            onClick={() => setActiveCategory('All')}
            className="rounded-full"
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-1/3 h-48 sm:h-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg font-serif text-stone-900">{item.name}</h3>
                    <span className="font-bold text-primary whitespace-nowrap ml-2">{item.price}</span>
                  </div>
                  <p className="text-sm text-stone-500 mb-4">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-stone-100">
                   <NavLink to="/order">
                     <Button size="sm" variant="outline" className="w-full sm:w-auto text-xs uppercase tracking-wide">
                       Add to Order
                     </Button>
                   </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download / Special Request */}
        <div className="mt-16 text-center bg-amber-50 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold font-serif text-amber-900 mb-4">Have a Special Request?</h3>
          <p className="text-stone-600 mb-6">
            We love creating custom cakes for weddings, birthdays, and special events. Contact us to discuss your dream cake.
          </p>
          <NavLink to="/contact">
            <Button variant="primary">Get a Quote</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};