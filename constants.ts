import { MenuItem, RouteLink } from './types';

export const COMPANY_NAME = "Lady T Luscious";
export const COMPANY_PHONE = "(555) 123-4567";
export const COMPANY_EMAIL = "orders@ladytluscious.com";
export const COMPANY_ADDRESS = "123 Sweet Street, Bakery Town, BT 12345";

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
    name: 'Luscious Lemon Cake',
    description: 'Zesty lemon sponge with lemon curd filling and buttercream frosting.',
    price: '$45.00',
    category: 'Cakes',
    popular: true,
    image: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    name: 'Red Velvet Supreme',
    description: 'Classic red velvet with our signature cream cheese frosting.',
    price: '$50.00',
    category: 'Cakes',
    popular: true,
    image: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    name: 'Chocolate Fudge Cupcakes',
    description: 'Rich chocolate cupcakes topped with dark chocolate ganache.',
    price: '$4.50 ea',
    category: 'Cupcakes',
    image: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    name: 'Vanilla Bean Swirl',
    description: 'Fluffy vanilla cupcakes with multicolored swirl frosting.',
    price: '$4.00 ea',
    category: 'Cupcakes',
    image: 'https://picsum.photos/400/300?random=4'
  },
  {
    id: '5',
    name: 'Strawberry Shortcake',
    description: 'Fresh strawberries layered between light sponge and whipped cream.',
    price: '$48.00',
    category: 'Cakes',
    image: 'https://picsum.photos/400/300?random=5'
  },
  {
    id: '6',
    name: 'Assorted Macarons',
    description: 'A dozen of our finest French macarons in various flavors.',
    price: '$24.00',
    category: 'Pastries',
    image: 'https://picsum.photos/400/300?random=6'
  },
  {
    id: '7',
    name: 'Sausage Rolls',
    description: 'Flaky pastry wrapped around seasoned pork sausage meat.',
    price: '$5.00',
    category: 'Savory',
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
  category: i % 3 === 0 ? 'Weddings' : i % 2 === 0 ? 'Birthdays' : 'Treats'
}));