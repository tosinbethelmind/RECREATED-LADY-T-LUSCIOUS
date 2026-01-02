import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { useData } from '../context/DataContext';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { siteContent } = useData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send email would go here
  };

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold font-serif text-stone-900 mb-4">Contact Us</h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm">
              <h3 className="text-xl font-bold font-serif text-stone-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Visit Us</p>
                    <p className="text-stone-500">{siteContent.general.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Call Us</p>
                    <p className="text-stone-500">{siteContent.general.phone}</p>
                    <p className="text-xs text-stone-400 mt-1">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Email Us</p>
                    <p className="text-stone-500">{siteContent.general.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-200 h-64 rounded-2xl w-full flex items-center justify-center text-stone-400">
               <span>Map integration would be here</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-lg">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Send className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900">Message Sent!</h3>
                <p className="text-stone-500">Thank you for contacting us. We will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold font-serif text-stone-900">Send a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 border-input bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 border-input bg-background"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-stone-700">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 border-input bg-background"
                    placeholder="Order inquiry, General question..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={5}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 border-input bg-background resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};