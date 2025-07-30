import React from 'react';
import { Link } from 'react-router-dom';
import { useMenu } from '../contexts/MenuContext';
import { ArrowRight } from 'lucide-react';

const FeaturedDishes: React.FC = () => {
  const { menuItems } = useMenu();
  const featuredDishes = menuItems.filter(item => item.featured).slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Dishes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our chef's signature creations, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${dish.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {dish.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {dish.dietary.map((diet) => (
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
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            <span>View Full Menu</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;