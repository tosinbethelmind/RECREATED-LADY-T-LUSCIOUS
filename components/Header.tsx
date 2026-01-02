import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './Button';
import { useData } from '../context/DataContext';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { siteContent } = useData();
  
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
    ? "fixed top-0 z-50 w-full transition-all duration-300 border-b border-transparent py-4 bg-gradient-to-b from-black/50 to-transparent"
    : "sticky top-0 z-50 w-full transition-all duration-300 border-b border-[#5d3a2a] bg-[#2e1a10]/95 backdrop-blur supports-[backdrop-filter]:bg-[#2e1a10]/90 py-3 shadow-lg";

  // Always use light text on brown background
  const textColorClass = "text-amber-50";
  
  const navLinkClass = isTransparent 
    ? "text-stone-200 hover:text-amber-400 hover:border-b-2 hover:border-amber-400 font-bold drop-shadow-sm" 
    : "text-stone-300 hover:text-amber-400 font-bold";
    
  const activeNavLinkClass = "text-amber-400 border-b-2 border-amber-400 font-bold";

  return (
    <header className={headerClasses}>
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="mr-6 flex items-center space-x-3 group">
          {/* Logo Circle */}
          <div className="h-10 w-10 bg-amber-500 rounded-full flex items-center justify-center shrink-0 shadow-lg group-hover:bg-amber-600 transition-colors ring-2 ring-white/20">
            <span className="font-serif font-bold text-white text-lg">
              {siteContent.general.companyName.substring(0,2).toUpperCase()}
            </span>
          </div>
          
          {/* Text Stack */}
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl md:text-2xl leading-none text-amber-50 drop-shadow-md`}>
              {siteContent.general.companyName}
            </span>
            <span className="text-[0.6rem] tracking-[0.2em] font-medium text-amber-400 uppercase mt-0.5">
              {siteContent.general.tagline}
            </span>
          </div>
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `pb-1 transition-all tracking-wide ${
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
              className={`hidden sm:flex rounded-full font-bold px-6 shadow-lg bg-amber-600 hover:bg-amber-500 text-white border-none`}
              size="sm"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order
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
        <div className="md:hidden absolute top-full left-0 w-full bg-[#2e1a10] border-b border-[#5d3a2a] shadow-xl">
          <div className="space-y-1 px-4 pb-6 pt-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-3 text-base font-bold ${
                    isActive
                      ? "bg-amber-500/20 text-amber-400"
                      : "text-stone-300 hover:bg-white/5 hover:text-amber-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4">
               <NavLink to="/order" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center rounded-full py-6 text-lg bg-amber-600 hover:bg-amber-500 text-white">Order Online</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};