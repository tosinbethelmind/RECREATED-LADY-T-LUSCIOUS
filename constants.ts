import { MenuItem, RouteLink } from './types';

export const COMPANY_NAME = "Lady T Luscious";
export const COMPANY_PHONE = "+44 7405 819482";
export const COMPANY_EMAIL = "alabaeferere@gmail.com";
export const COMPANY_ADDRESS = "London, United Kingdom";

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
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    name: 'Rich Egusi Soup',
    description: 'Hearty melon seed soup with assorted meats and stockfish, served with pounded yam.',
    price: '£14.99',
    category: 'Soups',
    popular: true,
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    name: 'Golden Puff Puff',
    description: 'Warm, fluffy, deep-fried dough balls dusted with sugar.',
    price: '£6.99',
    category: 'Sides',
    popular: true,
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    name: 'Ayamase (Designer Stew)',
    description: 'Spicy green pepper sauce with bleached palm oil and assorted meats.',
    price: '£13.50',
    category: 'Main Dishes',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: '5',
    name: 'Fried Plantain (Dodo)',
    description: 'Sweet ripe plantains fried to golden perfection.',
    price: '£4.00',
    category: 'Sides',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: '6',
    name: 'Meat Pie',
    description: 'Buttery pastry filled with seasoned minced meat and vegetables.',
    price: '£3.50',
    category: 'Pastries',
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: '7',
    name: 'Suya Platter',
    description: 'Spicy skewered beef seasoned with peanut spice blend and onions.',
    price: '£10.00',
    category: 'Main Dishes',
    image: 'https://picsum.photos/400/300?random=7'
  },
  {
    id: '8',
    name: 'Wedding Cake Consultation',
    description: 'Book a tasting and design session for your special day.',
    price: 'Free',
    category: 'Cakes',
    image: 'https://picsum.photos/400/300?random=8'
  }
];

export const GALLERY_IMAGES = Array.from({ length: 12 }).map((_, i) => ({
  id: `g-${i}`,
  src: `https://picsum.photos/600/600?random=${100 + i}`,
  alt: `Gallery Image ${i + 1}`,
  category: i % 3 === 0 ? 'Events' : i % 2 === 0 ? 'Dishes' : 'Cakes'
}));