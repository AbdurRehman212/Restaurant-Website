import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage';
  image: string;
  featured: boolean;
  dietary: string[];
}

interface MenuContextType {
  menuItems: MenuItem[];
  filteredItems: MenuItem[];
  selectedCategory: string;
  sortBy: string;
  setSelectedCategory: (category: string) => void;
  setSortBy: (sort: string) => void;
  filterItems: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Truffle Risotto",
    description: "Creamy arborio rice with wild mushrooms and black truffle shavings",
    price: 28,
    category: 'main',
    image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
    featured: true,
    dietary: ['vegetarian', 'gluten-free']
  },
  {
    id: 2,
    name: "Seared Salmon",
    description: "Atlantic salmon with herb butter and seasonal vegetables",
    price: 32,
    category: 'main',
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg",
    featured: true,
    dietary: ['gluten-free', 'keto']
  },
  {
    id: 3,
    name: "Burrata Caprese",
    description: "Fresh burrata with heirloom tomatoes and basil oil",
    price: 16,
    category: 'appetizer',
    image: "https://images.pexels.com/photos/1120862/pexels-photo-1120862.jpeg",
    featured: false,
    dietary: ['vegetarian']
  },
  {
    id: 4,
    name: "Chocolate Soufflé",
    description: "Warm dark chocolate soufflé with vanilla ice cream",
    price: 12,
    category: 'dessert',
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    featured: true,
    dietary: ['vegetarian']
  },
  {
    id: 5,
    name: "Craft Cocktail",
    description: "House special with premium spirits and fresh ingredients",
    price: 14,
    category: 'beverage',
    image: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg",
    featured: false,
    dietary: ['vegan']
  },
  {
    id: 6,
    name: "Wagyu Beef Tenderloin",
    description: "Grade A5 wagyu with roasted vegetables and red wine reduction",
    price: 65,
    category: 'main',
    image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg",
    featured: true,
    dietary: ['gluten-free', 'keto']
  },
  {
    id: 7,
    name: "Oysters Rockefeller",
    description: "Fresh oysters with spinach, herbs, and hollandaise",
    price: 18,
    category: 'appetizer',
    image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg",
    featured: false,
    dietary: ['gluten-free']
  },
  {
    id: 8,
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso and mascarpone",
    price: 10,
    category: 'dessert',
    image: "https://images.pexels.com/photos/6985343/pexels-photo-6985343.jpeg",
    featured: false,
    dietary: ['vegetarian']
  }
];

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [filteredItems, setFilteredItems] = useState(menuData);

  const filterItems = () => {
    let items = menuData;
    
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory);
    }
    
    items.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    setFilteredItems(items);
  };

  React.useEffect(() => {
    filterItems();
  }, [selectedCategory, sortBy]);

  const value = {
    menuItems: menuData,
    filteredItems,
    selectedCategory,
    sortBy,
    setSelectedCategory,
    setSortBy,
    filterItems
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};