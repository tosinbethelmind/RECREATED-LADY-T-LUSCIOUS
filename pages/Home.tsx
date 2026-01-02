import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star, Truck, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { MENU_ITEMS } from '../constants';

export const Home: React.FC = () => {
  const featuredItems = MENU_ITEMS.filter(item => item.popular).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-amber-950/70 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=hero")' }}
        />
        
        <div className="container relative z-20 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-serif">
            Taste the Love in Every Bite
          </h1>
          <p className="text-lg md:text-xl text-stone-100 max-w-2xl mx-auto">
            From custom cakes to delicate pastries, Lady T Luscious brings sweetness to your special moments. Handcrafted with passion and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NavLink to="/menu">
              <Button size="lg" className="w-full sm:w-auto font-semibold">
                View Menu
              </Button>
            </NavLink>
            <NavLink to="/order">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
                Order Now
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Introduction / About Snippet */}
      <section className="py-16 md:py-24 bg-beige">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/800/800?random=chef" 
              alt="Baker working" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6">
            <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900">Baked with Love, Served with Joy</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              At Lady T Luscious, baking isn't just a business; it's a heartfelt passion. We believe that every celebration deserves a centerpiece that tastes as amazing as it looks. 
            </p>
            <p className="text-stone-600 leading-relaxed">
              Using traditional recipes passed down through generations and adding our own modern twist, we create confections that are truly unforgettable.
            </p>
            <NavLink to="/about">
              <Button variant="outline" className="mt-4 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white">
                Read More About Us
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 mb-4">Customer Favorites</h2>
            <p className="text-stone-500">Try our most loved creations, guaranteed to satisfy your sweet tooth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="group rounded-xl border bg-card shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl font-serif text-stone-900">{item.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      Popular
                    </span>
                  </div>
                  <p className="text-stone-500 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-lg text-primary">{item.price}</span>
                    <NavLink to="/order">
                      <Button size="sm" variant="secondary">Order</Button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
             <NavLink to="/menu">
               <Button variant="outline" size="lg" className="group">
                 View Full Menu <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </Button>
             </NavLink>
          </div>
        </div>
      </section>

      {/* Features / Icons */}
      <section className="py-16 bg-stone-50 border-t">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Ingredients</h3>
              <p className="text-stone-500">We use only the finest, freshest ingredients in all our products.</p>
            </div>
            <div className="p-6">
              <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Made with Love</h3>
              <p className="text-stone-500">Every item is handcrafted with care and attention to detail.</p>
            </div>
            <div className="p-6">
              <div className="mx-auto w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Delivery Available</h3>
              <p className="text-stone-500">We deliver straight to your doorstep for your convenience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
           <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to treat yourself?</h2>
           <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
             Whether it's a birthday, wedding, or just a Tuesday, we have something special for you.
           </p>
           <NavLink to="/contact">
             <Button variant="secondary" size="lg" className="font-bold text-amber-700">
               Contact Us Today
             </Button>
           </NavLink>
        </div>
      </section>
    </div>
  );
};