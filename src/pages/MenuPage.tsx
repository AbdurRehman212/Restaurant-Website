import React from 'react';
import MenuFilters from '../components/MenuFilters';
import MenuGrid from '../components/MenuGrid';

const MenuPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and passionate attention to detail.
          </p>
        </div>
        
        <MenuFilters />
        <MenuGrid />
      </div>
    </div>
  );
};

export default MenuPage;