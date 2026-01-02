import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // Header background logic
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine styles based on route and scroll state
  const isTransparent = isHome && !scrolled;
  
  const headerClasses = isTransparent
    ? "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent py-4"
    : "sticky top-0 z-50 w-full transition-all duration-300 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 py-2 shadow-sm";

  const textColorClass = isTransparent ? "text-white" : "text-stone-800";
  const navLinkClass = isTransparent 
    ? "text-stone-200 hover:text-amber-400 hover:border-b-2 hover:border-amber-400" 
    : "text-stone-600 hover:text-primary";
  const activeNavLinkClass = isTransparent
    ? "text-amber-400 border-b-2 border-amber-400"
    : "text-primary font-semibold";

  return (
    <header className={headerClasses}>
      <div className="container flex h-20 items-center justify-between">
        <NavLink to="/" className="mr-6 flex items-center space-x-3 group">
          {/* Logo Circle */}
          <div className="h-12 w-12 bg-amber-500 rounded-full flex items-center justify-center shrink-0 shadow-lg group-hover:bg-amber-600 transition-colors">
            <span className="font-serif font-bold text-white text-xl">LT</span>
          </div>
          
          {/* Text Stack */}
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-2xl md:text-3xl leading-none ${isTransparent ? 'text-white' : 'text-stone-900'}`}>
              {COMPANY_NAME}
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] font-medium text-amber-500 uppercase mt-1">
              Creamy Cake & Pastries
            </span>
          </div>
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `pb-1 transition-all ${
                  isActive ? activeNavLinkClass : navLinkClass
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <NavLink to="/order">
            <Button 
              className={`hidden sm:flex rounded-full font-bold px-6 shadow-lg ${isTransparent ? 'bg-amber-600 hover:bg-amber-700 text-white' : ''}`}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Now
            </Button>
          </NavLink>
          
          <button
            className={`inline-flex items-center justify-center rounded-md p-2.5 md:hidden ${textColorClass}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-xl">
          <div className="space-y-1 px-4 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-3 text-base font-medium ${
                    isActive
                      ? "bg-amber-50 text-primary"
                      : "text-stone-600 hover:bg-stone-50 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4">
               <NavLink to="/order" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center rounded-full py-6 text-lg">Order Online</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};