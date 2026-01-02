import React, { createContext, useState, useContext, useEffect } from 'react';
import { MenuItem, GalleryItem } from '../types';
import { MENU_ITEMS as INITIAL_MENU, GALLERY_IMAGES as INITIAL_GALLERY } from '../constants';

interface DataContextType {
  menuItems: MenuItem[];
  galleryItems: GalleryItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  addGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from localStorage if available, else use constants
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('menuItems');
    return saved ? JSON.parse(saved) : INITIAL_MENU;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('galleryItems');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('galleryItems', JSON.stringify(galleryItems));
  }, [galleryItems]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems([...menuItems, item]);
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    setMenuItems(menuItems.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const addGalleryItem = (item: GalleryItem) => {
    setGalleryItems([item, ...galleryItems]);
  };

  const deleteGalleryItem = (id: string) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
  };

  return (
    <DataContext.Provider value={{ 
      menuItems, 
      galleryItems, 
      addMenuItem, 
      updateMenuItem, 
      deleteMenuItem, 
      addGalleryItem, 
      deleteGalleryItem 
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};