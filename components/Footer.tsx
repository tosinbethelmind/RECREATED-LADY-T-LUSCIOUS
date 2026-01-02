import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-amber-500 font-serif">{COMPANY_NAME}</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Crafting sweet memories one bite at a time. We specialize in custom cakes, delectable pastries, and catering for all your special occasions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-300 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-300 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Quick Links</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li><NavLink to="/menu" className="hover:text-white transition-colors">Our Menu</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-white transition-colors">Gallery</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/order" className="hover:text-white transition-colors">Place Order</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Legal</h4>
            <ul className="space-y-2 text-sm text-stone-300">
              <li><NavLink to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-white transition-colors">Terms of Service</NavLink></li>
              <li><NavLink to="/admin" className="hover:text-white transition-colors">Admin Login</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-amber-500">Contact Us</h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                <span>{COMPANY_PHONE}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-amber-500 shrink-0" />
                <span>{COMPANY_EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};