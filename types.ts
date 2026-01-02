export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Cakes' | 'Cupcakes' | 'Pastries' | 'Savory' | 'Drinks';
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