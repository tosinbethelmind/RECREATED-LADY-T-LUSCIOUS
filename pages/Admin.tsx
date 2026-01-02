import React, { useState, useRef } from 'react';
import { Button } from '../components/Button';
import { useData } from '../context/DataContext';
import { Trash2, Plus, Upload, Image as ImageIcon, Utensils } from 'lucide-react';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'menu' | 'gallery'>('menu');

  const { menuItems, addMenuItem, deleteMenuItem, galleryItems, addGalleryItem, deleteGalleryItem } = useData();

  // Simple Form States for adding items
  const [newItemName, setNewItemName] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Main Dishes');
  const [newItemImage, setNewItemImage] = useState('');

  const [newGalleryCategory, setNewGalleryCategory] = useState('Dishes');
  const [newGalleryImage, setNewGalleryImage] = useState('');

  const menuFileInputRef = useRef<HTMLInputElement>(null);
  const galleryFileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple hardcoded password
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setFunction: React.Dispatch<React.SetStateAction<string>>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFunction(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMenu = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      name: newItemName,
      description: newItemDesc,
      price: newItemPrice,
      category: newItemCategory as any,
      image: newItemImage || `https://picsum.photos/400/300?random=${Date.now()}`,
      popular: false
    };
    addMenuItem(newItem);
    // Reset form
    setNewItemName('');
    setNewItemDesc('');
    setNewItemPrice('');
    setNewItemImage('');
    if(menuFileInputRef.current) menuFileInputRef.current.value = '';
  };

  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem = {
      id: Date.now().toString(),
      src: newGalleryImage || `https://picsum.photos/600/600?random=${Date.now()}`,
      alt: newGalleryCategory,
      category: newGalleryCategory
    };
    addGalleryItem(newItem);
    setNewGalleryImage('');
    if(galleryFileInputRef.current) galleryFileInputRef.current.value = '';
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-stone-900 font-serif">
              Admin Portal
            </h2>
            <p className="mt-2 text-center text-sm text-stone-600">
              Enter password: <strong>admin123</strong>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-stone-300 placeholder-stone-500 text-stone-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full flex justify-center py-2 px-4">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold font-serif text-stone-900">Dashboard</h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-stone-200 pb-1">
          <button
            onClick={() => setActiveTab('menu')}
            className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'menu' ? 'border-b-2 border-primary text-primary' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Menu Management
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-2 px-4 font-medium transition-colors ${activeTab === 'gallery' ? 'border-b-2 border-primary text-primary' : 'text-stone-500 hover:text-stone-800'}`}
          >
            Gallery Management
          </button>
        </div>

        {/* Menu Tab */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Add Item Form */}
            <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm h-fit">
              <h3 className="text-xl font-bold mb-4 flex items-center"><Plus className="w-5 h-5 mr-2" /> Add Menu Item</h3>
              <form onSubmit={handleAddMenu} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700">Name</label>
                  <input required type="text" value={newItemName} onChange={e => setNewItemName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Price (e.g. £12.00)</label>
                  <input required type="text" value={newItemPrice} onChange={e => setNewItemPrice(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Category</label>
                  <select value={newItemCategory} onChange={e => setNewItemCategory(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-2">
                    <option>Main Dishes</option>
                    <option>Soups</option>
                    <option>Sides</option>
                    <option>Pastries</option>
                    <option>Cakes</option>
                    <option>Drinks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Description</label>
                  <textarea required value={newItemDesc} onChange={e => setNewItemDesc(e.target.value)} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-2"></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Image</label>
                  <div className="mt-1 flex items-center space-x-2">
                    <input 
                      type="file" 
                      accept="image/*"
                      ref={menuFileInputRef}
                      onChange={(e) => handleImageUpload(e, setNewItemImage)}
                      className="block w-full text-sm text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-amber-600"
                    />
                  </div>
                  {newItemImage && <img src={newItemImage} alt="Preview" className="mt-2 h-20 w-20 object-cover rounded-md" />}
                </div>
                <Button type="submit" className="w-full">Add Item</Button>
              </form>
            </div>

            {/* Item List */}
            <div className="lg:col-span-2 space-y-4">
              {menuItems.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex items-start space-x-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-stone-100" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                    <p className="text-sm text-stone-500 mb-1">{item.category}</p>
                    <p className="text-sm text-stone-600">{item.description}</p>
                  </div>
                  <button onClick={() => deleteMenuItem(item.id)} className="text-red-500 hover:text-red-700 p-2">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm h-fit">
              <h3 className="text-xl font-bold mb-4 flex items-center"><Upload className="w-5 h-5 mr-2" /> Upload Image</h3>
              <form onSubmit={handleAddGallery} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700">Category Label</label>
                  <input required type="text" value={newGalleryCategory} onChange={e => setNewGalleryCategory(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary border p-2" placeholder="e.g. Wedding Cake" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Image File</label>
                   <input 
                      type="file" 
                      accept="image/*"
                      required
                      ref={galleryFileInputRef}
                      onChange={(e) => handleImageUpload(e, setNewGalleryImage)}
                      className="block w-full text-sm text-stone-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-amber-600 mt-2"
                    />
                     {newGalleryImage && <img src={newGalleryImage} alt="Preview" className="mt-2 h-40 w-full object-cover rounded-md" />}
                </div>
                <Button type="submit" className="w-full">Add to Gallery</Button>
              </form>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryItems.map(item => (
                <div key={item.id} className="relative group rounded-lg overflow-hidden bg-stone-200 aspect-square">
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                    <span className="font-bold mb-2">{item.category}</span>
                    <button onClick={() => deleteGalleryItem(item.id)} className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};