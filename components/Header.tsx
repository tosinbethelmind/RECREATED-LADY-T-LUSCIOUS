import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold text-xl sm:inline-block text-primary font-serif">
            {COMPANY_NAME}
          </span>
          <span className="sm:hidden font-bold text-xl text-primary font-serif">LTL</span>
        </NavLink>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <NavLink to="/order">
            <Button variant="primary" size="sm" className="hidden sm:flex">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Order Online
            </Button>
          </NavLink>
          
          <button
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 bg-background border-b shadow-lg">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-amber-50 text-primary"
                      : "text-muted-foreground hover:bg-amber-50 hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 pb-2">
               <NavLink to="/order" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-center">Order Online</Button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};