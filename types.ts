export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Main Dishes' | 'Soups' | 'Sides' | 'Pastries' | 'Drinks' | 'Catering' | 'Cakes' | 'Cupcakes' | 'Savory';
  image?: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface RouteLink {
  path: string;
  label: string;
}

export interface SiteContent {
  general: {
    companyName: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
  };
  about: {
    title: string;
    welcomeText: string;
    philosophyText: string;
  };
}