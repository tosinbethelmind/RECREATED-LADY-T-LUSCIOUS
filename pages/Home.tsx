import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Clock, 
  ShieldCheck, 
  UtensilsCrossed, 
  CakeSlice, 
  PartyPopper, 
  ChefHat 
} from 'lucide-react';
import { Button } from '../components/Button';
import { useData } from '../context/DataContext';

export const Home: React.FC = () => {
  const { menuItems, siteContent } = useData();
  
  const favorites = menuItems.filter(i => i.popular).slice(0, 3);
  const displayFavorites = favorites.length > 0 ? favorites : menuItems.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start text-white overflow-hidden">
        {/* Overlay - Rich dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e1a10]/95 via-[#2e1a10]/70 to-transparent z-10" />
        
        {/* Background Image - High Quality Chocolate Cake/Luxury Food */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579306093888-c69027d3b657?q=80&w=2000&auto=format&fit=crop")' }}
        />
        
        <div className="container relative z-20 pt-32 lg:pt-40">
          <div className="max-w-3xl space-y-8 animate-fade-in-up">
            {/* Pill Badge */}
            <div className="inline-block rounded-full border border-amber-500/50 bg-[#2e1a10]/50 backdrop-blur-md px-6 py-2 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <span className="text-amber-400 font-medium tracking-[0.2em] text-xs md:text-sm uppercase">
                {siteContent.home.heroBadge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif leading-[1.1] text-amber-50 drop-shadow-sm">
              {siteContent.home.heroTitle}
            </h1>
            
            <p className="text-lg md:text-2xl text-stone-200 max-w-xl leading-relaxed font-light">
              {siteContent.home.heroSubtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <NavLink to="/menu">
                <Button size="lg" className="rounded-full px-10 py-7 text-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 border-none shadow-[0_4px_14px_0_rgba(245,158,11,0.39)] transition-all transform hover:scale-105 text-white">
                  Explore Menu
                </Button>
              </NavLink>
              <NavLink to="/contact">
                <Button variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg border-stone-400 text-stone-100 hover:bg-white/10 hover:text-white backdrop-blur-sm">
                   Book Table
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="relative -mt-16 z-30 pb-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {[
              { icon: <Users className="h-6 w-6" />, title: "500+ Happy Customers", sub: "Rated 5 stars" },
              { icon: <Clock className="h-6 w-6" />, title: "On-time Delivery", sub: "Guaranteed freshness" },
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Hygienic Cooking", sub: "Home-style care" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-6 rounded-2xl bg-[#3c2419]/90 backdrop-blur-md border border-[#5d3a2a] shadow-xl hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-amber-500/10 p-4 rounded-full text-amber-500 border border-amber-500/20">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-amber-50">{item.title}</h3>
                  <p className="text-sm text-amber-200/60">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-24 relative overflow-hidden bg-black/10 backdrop-blur-[2px]">
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Our Specialties</span>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-50 mt-3 mb-6">Culinary Excellence</h2>
            <div className="h-1 w-20 bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-stone-300 text-lg font-light">
              From hearty main courses to delicate desserts, we cover all your culinary needs with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <UtensilsCrossed className="h-8 w-8" />,
                title: "African Dishes",
                desc: "Traditional recipes passed down through generations."
              },
              {
                icon: <CakeSlice className="h-8 w-8" />,
                title: "Luxury Cakes",
                desc: "Decadent cakes and flaky pastries for every sweet tooth."
              },
              {
                icon: <PartyPopper className="h-8 w-8" />,
                title: "Event Catering",
                desc: "Full-service catering to make your celebrations memorable."
              },
              {
                icon: <ChefHat className="h-8 w-8" />,
                title: "Custom Orders",
                desc: "Tailored menus and special requests are our specialty."
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-card/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 text-center hover:bg-card/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl font-serif text-amber-50 mb-3">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Favorites */}
      <section className="py-24 bg-black/30 backdrop-blur-[1px]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left w-full md:w-auto">
              <span className="text-amber-500 font-semibold tracking-wider text-sm uppercase">Most Loved</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-amber-50 mt-2">Customer Favorites</h2>
            </div>
            <div className="hidden md:block">
              <NavLink to="/menu">
                <Button variant="outline" className="group border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-white rounded-full px-6">
                  View Full Menu <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayFavorites.map((item) => (
              <div key={item.id} className="group rounded-2xl bg-card border border-white/5 shadow-2xl overflow-hidden flex flex-col h-full hover:border-amber-500/30 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"/>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-amber-400 border border-amber-500/30">
                    {item.price}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 relative z-20">
                  <h3 className="font-bold text-2xl font-serif text-amber-50 mb-2">{item.name}</h3>
                  <p className="text-stone-400 mb-6 flex-1 text-sm leading-relaxed">{item.description}</p>
                  <NavLink to="/order" className="mt-auto">
                    <Button size="sm" variant="secondary" className="w-full bg-[#3c2419] hover:bg-amber-600 hover:text-white text-stone-300 border border-white/10 transition-colors">
                       Add to Order
                    </Button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden mt-12 text-center">
            <NavLink to="/menu">
              <Button variant="outline" className="group rounded-full border-amber-500/50 text-amber-500">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1] opacity-40" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1920&auto=format&fit=crop")' }} 
        />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="text-amber-400 font-bold tracking-[0.2em] text-sm uppercase">Celebrations & Events</span>
              <h2 className="text-4xl md:text-6xl font-bold font-serif text-white leading-tight">
                Premium Catering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Special Moments</span>
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed font-light">
                Planning a wedding, birthday, or corporate gathering? Let us handle the food while you enjoy the occasion. We offer bespoke catering packages tailored to your needs.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-stone-200 pt-4">
                {['Customized Menu Planning', 'Professional Service', 'Buffet or Plated Options', 'Large Volume Capacity'].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="bg-amber-500 rounded-full p-1 mr-3 text-black">
                      <ShieldCheck className="h-3 w-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <NavLink to="/order">
                  <Button size="lg" className="bg-white text-[#2e1a10] hover:bg-amber-50 border-none rounded-full px-10 font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                    Inquire for Catering
                  </Button>
                </NavLink>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1000&auto=format&fit=crop" 
                 alt="Catering Setup" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute bottom-8 left-8 z-20">
                 <p className="text-amber-400 font-serif italic text-2xl">"Taste the elegance"</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#2e1a10]/80 to-black text-center border-t border-white/5">
        <div className="container max-w-4xl">
           <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 text-amber-50">Ready to Taste the Difference?</h2>
           <p className="text-stone-300 text-xl mb-12 max-w-2xl mx-auto font-light">
             Place your order today and get fresh, authentic meals delivered straight to your doorstep within Manchester.
           </p>
           <NavLink to="/order">
             <Button variant="primary" size="lg" className="font-bold text-xl px-12 py-8 h-auto rounded-full bg-amber-600 hover:bg-amber-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all text-white">
               Start Your Order Now
             </Button>
           </NavLink>
        </div>
      </section>
    </div>
  );
};