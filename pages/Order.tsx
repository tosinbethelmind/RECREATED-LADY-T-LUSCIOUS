import React from 'react';
import { Button } from '../components/Button';
import { MessageCircle } from 'lucide-react';
import { COMPANY_PHONE } from '../constants';

export const Order: React.FC = () => {
  return (
    <div className="py-16 bg-background min-h-screen">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
           <h1 className="text-4xl font-bold font-serif text-stone-900 mb-6">How to Order</h1>
           <p className="text-stone-600 text-lg">
             Ordering from Lady T Luscious is simple. We want to ensure your experience is as sweet as our treats.
           </p>
        </div>

        <div className="space-y-8">
          <div className="bg-card border p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-primary mb-4">1. Online Orders</h2>
            <p className="text-stone-600 mb-4">
              For standard menu items like cupcakes, pastries, and standard cakes, please send us a message via WhatsApp or call us directly. We are working on a full cart checkout system!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="whatsapp" className="flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Order
              </Button>
              <Button variant="outline">Call {COMPANY_PHONE}</Button>
            </div>
          </div>

          <div className="bg-card border p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-primary mb-4">2. Custom Cakes & Catering</h2>
            <p className="text-stone-600 mb-4">
              For weddings, large events, or custom themed cakes, we require a consultation to get every detail right.
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-stone-600 mb-6">
              <li>Fill out our contact form with your event date and requirements.</li>
              <li>We will get back to you within 24 hours to discuss designs and flavors.</li>
              <li>A 50% deposit secures your date.</li>
            </ol>
             <Button variant="secondary" onClick={() => window.location.hash = '#/contact'}>
               Request Quote
             </Button>
          </div>

          <div className="bg-beige p-6 rounded-xl border border-amber-200">
             <h3 className="font-bold text-amber-900 mb-2">Important Note</h3>
             <p className="text-sm text-amber-800">
               Please place orders at least 48 hours in advance for standard items, and 2 weeks in advance for custom cakes. Rush orders may incur an additional fee.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};