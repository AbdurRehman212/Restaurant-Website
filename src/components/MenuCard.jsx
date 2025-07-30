import React from 'react';

const MenuCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            ${item.price}
          </span>
        </div>
        {item.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {item.name}
          </h3>
          <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
            {item.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {item.dietary.map((diet) => (
            <span
              key={diet}
              className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
            >
              {diet}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;