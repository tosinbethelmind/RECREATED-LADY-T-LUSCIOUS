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
  const { menuItems } = useData();
  
  // Dynamically get favorites from state, fallback to first 3 if no 'popular' flag is explicitly managed yet
  const favorites = menuItems.filter(i => i.popular).slice(0, 3);
  // Fallback if no popular items marked in edited data
  const displayFavorites = favorites.length > 0 ? favorites : menuItems.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start text-white overflow-hidden">
        {/* Overlay - Gradient for better text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105" 
          style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=african-feast")' }}
        />
        
        <div className="container relative z-20 pt-20">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* Pill Badge */}
            <div className="inline-block rounded-full border border-amber-500/60 bg-black/30 backdrop-blur-sm px-6 py-2">
              <span className="text-amber-500 font-medium tracking-[0.2em] text-xs md:text-sm uppercase">
                Premium African Cuisine
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-serif leading-[1.1]">
              Authentic African <br/>
              <span className="text-amber-500">Flavors</span>, <br/>
              Freshly Made in <br/>
              London
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 max-w-xl leading-relaxed">
              Experience the warmth of home-style cooking with our premium selection of traditional dishes, custom cakes, and delightful pastries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <NavLink to="/menu">
                <Button size="lg" className="rounded-full px-8 py-6 text-lg bg-amber-600 hover:bg-amber-700 border-none">
                  Explore Menu
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Stats */}
      <section className="bg-amber-50 py-12 border-b border-amber-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-amber-100">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-900">500+ Happy Customers</h3>
                <p className="text-sm text-stone-500">Rated 5 stars</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-amber-100">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-900">On-time Delivery</h3>
                <p className="text-sm text-stone-500">Guaranteed freshness</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-amber-100">
              <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-900">Hygienic Cooking</h3>
                <p className="text-sm text-stone-500">Home-style care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Our Specialties</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 mt-2 mb-4">What We Bring to Your Table</h2>
            <p className="text-stone-500 text-lg">
              From hearty main courses to delicate desserts, we cover all your culinary needs with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <UtensilsCrossed className="h-8 w-8" />,
                title: "Authentic African Dishes",
                desc: "Traditional recipes passed down through generations."
              },
              {
                icon: <CakeSlice className="h-8 w-8" />,
                title: "Cakes & Pastries",
                desc: "Decadent cakes and flaky pastries for every sweet tooth."
              },
              {
                icon: <PartyPopper className="h-8 w-8" />,
                title: "Event & Party Catering",
                desc: "Full-service catering to make your celebrations memorable."
              },
              {
                icon: <ChefHat className="h-8 w-8" />,
                title: "Custom Orders",
                desc: "Tailored menus and special requests are our specialty."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-stone-50 p-6 rounded-xl border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white text-primary shadow-sm mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl font-serif text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Favorites */}
      <section className="py-16 md:py-24 bg-beige/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0 text-center md:text-left w-full md:w-auto">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Most Loved</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-stone-900 mt-2">Customer Favorites</h2>
            </div>
            <div className="hidden md:block">
              <NavLink to="/menu">
                <Button variant="outline" className="group">
                  View Full Menu <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayFavorites.map((item) => (
              <div key={item.id} className="group rounded-xl border bg-card shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-primary shadow-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl font-serif text-stone-900 mb-2">{item.name}</h3>
                  <p className="text-stone-500 mb-6 flex-1">{item.description}</p>
                  <NavLink to="/order" className="mt-auto">
                    <Button size="sm" variant="secondary" className="w-full">Order This Item</Button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <NavLink to="/menu">
              <Button variant="outline" className="group">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-20 bg-stone-900 text-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1] opacity-30" 
          style={{ backgroundImage: 'url("https://picsum.photos/1920/1080?random=catering")' }} 
        />
        
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-amber-500 font-bold tracking-widest text-sm uppercase">Celebrations & Events</span>
              <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                Premium Catering for Your Special Moments
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed">
                Planning a wedding, birthday, or corporate gathering? Let us handle the food while you enjoy the occasion. We offer bespoke catering packages tailored to your needs.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-200 pt-2">
                {['Customized Menu Planning', 'Professional Service', 'Buffet or Plated Options', 'Large Volume Capacity'].map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <div className="bg-amber-500/20 p-1 rounded-full mr-3 text-amber-500">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <NavLink to="/order">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white border-none rounded-full px-8">
                    Inquire for Catering
                  </Button>
                </NavLink>
              </div>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] bg-stone-800 rounded-lg overflow-hidden border-4 border-stone-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://picsum.photos/800/1000?random=party" 
                 alt="Catering Setup" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">Ready to Taste the Difference?</h2>
           <p className="text-amber-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
             Place your order today and get fresh, authentic meals delivered straight to your doorstep within London.
           </p>
           <NavLink to="/order">
             <Button variant="secondary" size="lg" className="font-bold text-lg px-8 py-6 h-auto text-amber-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all rounded-full">
               Start Your Order Now
             </Button>
           </NavLink>
        </div>
      </section>
    </div>
  );
};