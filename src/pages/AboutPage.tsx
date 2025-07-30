import React from 'react';
import { Clock, Users, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "20+ Years Experience",
      description: "Two decades of culinary excellence and passionate service"
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Expert Team",
      description: "Award-winning chefs and dedicated hospitality professionals"
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Award Winning",
      description: "Recognized for outstanding cuisine and dining experience"
    },
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Made with Love",
      description: "Every dish crafted with passion and attention to detail"
    }
  ];

  const team = [
    {
      name: "Marco Rodriguez",
      role: "Executive Chef",
      image: "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg",
      description: "With over 15 years of experience in fine dining, Marco brings creativity and precision to every dish."
    },
    {
      name: "Sofia Chen",
      role: "Sous Chef",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
      description: "Specializing in fusion cuisine, Sofia combines traditional techniques with modern innovation."
    },
    {
      name: "David Thompson",
      role: "Restaurant Manager",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg",
      description: "David ensures every guest receives exceptional service and has a memorable dining experience."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg')"
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Savoria</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Where passion meets flavor, and every meal tells a story of culinary excellence
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2003, Savoria began as a dream to create more than just a restaurant – 
                  we wanted to craft an experience that celebrates the art of fine dining while 
                  maintaining the warmth of family hospitality.
                </p>
                <p>
                  Our journey started in a small kitchen with big ambitions. Today, we're proud to 
                  be recognized as one of the city's premier dining destinations, serving dishes 
                  that honor both tradition and innovation.
                </p>
                <p>
                  Every ingredient is carefully selected, every dish thoughtfully prepared, and 
                  every guest warmly welcomed. This is our commitment to you – an unforgettable 
                  culinary journey that speaks to all your senses.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Savoria</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in every aspect of your dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind your exceptional dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-amber-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl opacity-90 leading-relaxed">
            To create extraordinary dining experiences that bring people together, celebrate culinary artistry, 
            and honor the finest ingredients through innovative techniques and heartfelt hospitality. 
            We believe that great food has the power to create lasting memories and strengthen the bonds 
            that connect us all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;