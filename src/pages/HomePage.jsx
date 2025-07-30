import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedDishes from '../components/FeaturedDishes';
import RestaurantFeatures from '../components/RestaurantFeatures';
import CallToAction from '../components/CallToAction';

const HomePage = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <FeaturedDishes />
      <RestaurantFeatures />
      <CallToAction />
    </div>
  );
};

export default HomePage;