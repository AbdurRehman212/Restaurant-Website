import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20 bg-amber-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg')"
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready for an Unforgettable Experience?
        </h2>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
          Join us for an evening of exceptional cuisine, warm hospitality, and memories that will last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/contact"
            className="group flex items-center space-x-3 bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="h-6 w-6" />
            <span>Make Reservation</span>
          </Link>
          
          <a
            href="tel:+15551234567"
            className="group flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="h-6 w-6" />
            <span>Call Now</span>
          </a>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-lg">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Phone:</span>
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Hours:</span>
            <span>Mon-Sun 5PM-11PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;