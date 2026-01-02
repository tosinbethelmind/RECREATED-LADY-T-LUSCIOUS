import React, { useState } from 'react';
import { Button } from '../components/Button';
import { NavLink } from 'react-router-dom';
import { useData } from '../context/DataContext';

export const Menu: React.FC = () => {
  const { menuItems } = useData();
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-transparent min-h-screen">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl font-bold font-serif text-amber-50 mb-6 drop-shadow-md">Our Menu</h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg font-light drop-shadow">
            Explore our delicious selection of authentic African dishes, soups, and sweet treats, crafted with passion.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Button 
            variant={activeCategory === 'All' ? 'primary' : 'outline'}
            onClick={() => setActiveCategory('All')}
            className={`rounded-full px-6 ${activeCategory === 'All' ? '' : 'text-stone-300 border-stone-500 hover:border-amber-500 hover:text-white bg-black/30 backdrop-blur-sm'}`}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 ${activeCategory === category ? '' : 'text-stone-300 border-stone-500 hover:border-amber-500 hover:text-white bg-black/30 backdrop-blur-sm'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row bg-[#2e1a10]/80 backdrop-blur-md border border-[#5d3a2a] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all hover:-translate-y-1">
              <div className="sm:w-2/5 h-56 sm:h-auto relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-r" />
              </div>
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl font-serif text-amber-50">{item.name}</h3>
                    <span className="font-bold text-amber-400 whitespace-nowrap ml-3">{item.price}</span>
                  </div>
                  <p className="text-sm text-stone-300 mb-6 leading-relaxed">{item.description}</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                   <NavLink to="/order">
                     <Button size="sm" variant="outline" className="w-full sm:w-auto text-xs uppercase tracking-wide border-amber-500/50 text-amber-400 hover:bg-amber-600 hover:text-white hover:border-transparent rounded-full">
                       Add to Order
                     </Button>
                   </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download / Special Request */}
        <div className="mt-20 text-center bg-gradient-to-r from-amber-900/60 to-[#2e1a10]/80 rounded-3xl p-10 max-w-4xl mx-auto border border-amber-500/20 backdrop-blur-sm">
          <h3 className="text-3xl font-bold font-serif text-amber-100 mb-4">Catering for Events</h3>
          <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
            We specialize in large orders for weddings, parties, and corporate events. Custom menu planning available to suit your taste and budget.
          </p>
          <NavLink to="/contact">
            <Button variant="primary" size="lg" className="rounded-full px-8 text-white">Get a Catering Quote</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};