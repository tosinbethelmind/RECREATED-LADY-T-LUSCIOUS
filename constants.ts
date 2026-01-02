import { MenuItem, RouteLink, SiteContent } from './types';

// These constants now serve as initial/fallback values
export const COMPANY_NAME = "Lady T Luscious";
export const COMPANY_PHONE = "+44 7405 819482";
export const COMPANY_EMAIL = "alabaeferere@gmail.com";
export const COMPANY_ADDRESS = "Manchester, United Kingdom";

export const INITIAL_SITE_CONTENT: SiteContent = {
  general: {
    companyName: COMPANY_NAME,
    tagline: "Creamy Cake & Pastries",
    phone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: COMPANY_ADDRESS
  },
  home: {
    heroBadge: "Premium African Cuisine",
    heroTitle: "Authentic Flavors, Freshly Made in Manchester",
    heroSubtitle: "Experience the warmth of home-style cooking with our premium selection of traditional dishes, custom cakes, and delightful pastries."
  },
  about: {
    title: "Our Heritage",
    welcomeText: "Our journey began with a passion for the bold, vibrant flavors of West Africa. What started as a small family kitchen preparing traditional Jollof Rice and Egusi soup for friends has grown into a beloved culinary establishment. We blend the rich, spicy heritage of African cooking with modern techniques to bring you a taste of home, right here in the UK.",
    philosophyText: "\"Food is a language of love. Whether it's the heat of the scotch bonnet or the sweetness of buttercream, every ingredient tells a story.\""
  }
};

export const NAV_LINKS: RouteLink[] = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
  { path: '/order', label: 'Order Now' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Jollof Rice',
    description: 'Smoky, spicy, and perfectly seasoned long-grain rice served with plantain.',
    price: '£12.99',
    category: 'Main Dishes',
    popular: true,
    image: 'https://images.unsplash.com/photo-1628833912170-65c71eb52749?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Rich Egusi Soup',
    description: 'Hearty melon seed soup with assorted meats and stockfish, served with pounded yam.',
    price: '£14.99',
    category: 'Soups',
    popular: true,
    image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Golden Puff Puff',
    description: 'Warm, fluffy, deep-fried dough balls dusted with sugar.',
    price: '£6.99',
    category: 'Sides',
    popular: true,
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Ayamase (Designer Stew)',
    description: 'Spicy green pepper sauce with bleached palm oil and assorted meats.',
    price: '£13.50',
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Fried Plantain (Dodo)',
    description: 'Sweet ripe plantains fried to golden perfection.',
    price: '£4.00',
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1647437750860-264627d2c3d5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Meat Pie',
    description: 'Buttery pastry filled with seasoned minced meat and vegetables.',
    price: '£3.50',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1626508035297-0032b3149ba3?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '7',
    name: 'Suya Platter',
    description: 'Spicy skewered beef seasoned with peanut spice blend and onions.',
    price: '£10.00',
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '8',
    name: 'Wedding Cake Consultation',
    description: 'Book a tasting and design session for your special day.',
    price: 'Free',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_IMAGES = [
  { id: 'g-1', src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop', alt: 'Chocolate Cake', category: 'Cakes' },
  { id: 'g-2', src: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=800&auto=format&fit=crop', alt: 'Cupcakes', category: 'Pastries' },
  { id: 'g-3', src: 'https://images.unsplash.com/photo-1504113882839-1f8eb219443f?q=80&w=800&auto=format&fit=crop', alt: 'Jollof Rice', category: 'Dishes' },
  { id: 'g-4', src: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800&auto=format&fit=crop', alt: 'Wedding Cake', category: 'Events' },
  { id: 'g-5', src: 'https://images.unsplash.com/photo-1543362906-ac1b48263852?q=80&w=800&auto=format&fit=crop', alt: 'Steak Dish', category: 'Dishes' },
  { id: 'g-6', src: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?q=80&w=800&auto=format&fit=crop', alt: 'Dessert', category: 'Cakes' },
];