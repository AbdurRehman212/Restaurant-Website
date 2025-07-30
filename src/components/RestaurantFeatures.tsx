import React from 'react';
import { Clock, Award, Users, Utensils } from 'lucide-react';

const RestaurantFeatures: React.FC = () => {
  const features = [
    {
      icon: <Utensils className="h-12 w-12 text-amber-600" />,
      title: "Expert Chefs",
      description: "Our award-winning chefs bring years of culinary expertise and creativity to every dish."
    },
    {
      icon: <Clock className="h-12 w-12 text-amber-600" />,
      title: "Fresh Daily",
      description: "We source the finest ingredients daily, ensuring every meal is made with the freshest components."
    },
    {
      icon: <Award className="h-12 w-12 text-amber-600" />,
      title: "Award Winning",
      description: "Recognized for our outstanding cuisine and exceptional dining experience by industry experts."
    },
    {
      icon: <Users className="h-12 w-12 text-amber-600" />,
      title: "Perfect Atmosphere",
      description: "An elegant and welcoming environment perfect for intimate dinners and special celebrations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Savoria
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference that passion, quality, and attention to detail make
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantFeatures;