import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useData } from '../context/DataContext';

export const WhatsAppButton: React.FC = () => {
  const { siteContent } = useData();
  // Remove spaces and + for the link
  const cleanPhone = siteContent.general.phone.replace(/[^0-9]/g, '');
  const whatsappLink = `https://wa.me/${cleanPhone}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1DA851] transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-stone-800 px-2 py-1 rounded text-xs font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us!
      </span>
    </a>
  );
};