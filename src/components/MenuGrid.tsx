import React from 'react';
import { useMenu } from '../contexts/MenuContext';
import MenuCard from './MenuCard';

const MenuGrid: React.FC = () => {
  const { filteredItems } = useMenu();

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuGrid;