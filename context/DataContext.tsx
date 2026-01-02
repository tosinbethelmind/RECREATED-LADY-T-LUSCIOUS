import React, { createContext, useState, useContext, useEffect } from 'react';
import { MenuItem, GalleryItem, SiteContent } from '../types';
import { MENU_ITEMS as INITIAL_MENU, GALLERY_IMAGES as INITIAL_GALLERY, INITIAL_SITE_CONTENT } from '../constants';

interface DataContextType {
  menuItems: MenuItem[];
  galleryItems: GalleryItem[];
  siteContent: SiteContent;
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  addGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;
  updateSiteContent: (content: SiteContent) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initial State: Use constants first, then try to overwrite with API data
  const [menuItems, setMenuItems] = useState<MenuItem[]>(INITIAL_MENU);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [siteContent, setSiteContent] = useState<SiteContent>(INITIAL_SITE_CONTENT);

  // Load Data from API on Mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api.php?action=get_data');
        if (!response.ok) throw new Error("API not available");
        
        const data = await response.json();
        
        if (data.menuItems && data.menuItems.length > 0) {
          setMenuItems(data.menuItems);
        }
        if (data.galleryItems && data.galleryItems.length > 0) {
          setGalleryItems(data.galleryItems);
        }
        if (data.siteContent) {
          setSiteContent(data.siteContent);
        }
      } catch (error) {
        console.warn("Could not fetch from Database (likely running locally or DB not configured). Using default/local data.", error);
        
        // Fallback: Check LocalStorage if API fails
        const localMenu = localStorage.getItem('menuItems');
        if (localMenu) setMenuItems(JSON.parse(localMenu));
        
        const localGallery = localStorage.getItem('galleryItems');
        if (localGallery) setGalleryItems(JSON.parse(localGallery));

        const localContent = localStorage.getItem('siteContent');
        if (localContent) setSiteContent(JSON.parse(localContent));
      }
    };

    fetchData();
  }, []);

  // --- Helper to Send Data to API ---
  const sendToApi = (action: string, data: any) => {
    fetch(`/api.php?action=${action}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).catch(err => console.error("Failed to sync with DB", err));
  };

  // --- Actions ---

  const addMenuItem = (item: MenuItem) => {
    const newItems = [...menuItems, item];
    setMenuItems(newItems);
    localStorage.setItem('menuItems', JSON.stringify(newItems));
    sendToApi('save_menu', item);
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    const newItems = menuItems.map(item => item.id === updatedItem.id ? updatedItem : item);
    setMenuItems(newItems);
    localStorage.setItem('menuItems', JSON.stringify(newItems));
    sendToApi('save_menu', updatedItem);
  };

  const deleteMenuItem = (id: string) => {
    const newItems = menuItems.filter(item => item.id !== id);
    setMenuItems(newItems);
    localStorage.setItem('menuItems', JSON.stringify(newItems));
    sendToApi('delete_menu', { id });
  };

  const addGalleryItem = (item: GalleryItem) => {
    const newItems = [item, ...galleryItems];
    setGalleryItems(newItems);
    localStorage.setItem('galleryItems', JSON.stringify(newItems));
    sendToApi('save_gallery', item);
  };

  const deleteGalleryItem = (id: string) => {
    const newItems = galleryItems.filter(item => item.id !== id);
    setGalleryItems(newItems);
    localStorage.setItem('galleryItems', JSON.stringify(newItems));
    sendToApi('delete_gallery', { id });
  };

  const updateSiteContent = (content: SiteContent) => {
    setSiteContent(content);
    localStorage.setItem('siteContent', JSON.stringify(content));
    sendToApi('save_content', content);
  };

  return (
    <DataContext.Provider value={{ 
      menuItems, 
      galleryItems, 
      siteContent,
      addMenuItem, 
      updateMenuItem, 
      deleteMenuItem, 
      addGalleryItem, 
      deleteGalleryItem,
      updateSiteContent
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