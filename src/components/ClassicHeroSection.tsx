import React from 'react';
import { Link } from 'react-router-dom';

const ClassicHeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center py-12 md:py-20">
      {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 px-4 md:pl-8 order-2 md:order-1 mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
          Predict Machine Failures
          <span className="block text-blue-600">Before They Happen</span>
        </h1>
        
        <p className="text-lg text-gray-700 mb-8 max-w-lg">
          Our AI-powered predictive maintenance solution helps you prevent costly equipment downtime and extend machine lifespan.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link 
            to="/prediction" 
            className="px-8 py-3 bg-blue-700 text-white font-medium rounded-md shadow-md hover:bg-blue-800 transition-all duration-300 text-center"
          >
            Get Started
          </Link>
          <Link 
            to="/dashboard" 
            className="px-8 py-3 bg-white text-blue-700 border-2 border-blue-500 font-medium rounded-md shadow-sm hover:bg-blue-50 transition-all duration-300 text-center"
          >
            View Dashboard
          </Link>
        </div>
        
        <div className="mt-12 flex items-center gap-6">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-md"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <p className="text-gray-600">Trusted by <span className="font-semibold">500+</span> companies worldwide</p>
        </div>
      </div>
      
      {/* Image/Visual Section */}
      <div className="w-full md:w-1/2 h-80 md:h-[calc(100vh-12rem)] order-1 md:order-2 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-blue-600 opacity-20 absolute"></div>
          <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-blue-500 opacity-30 absolute animate-pulse"></div>
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-blue-700 opacity-40 absolute"></div>
          <img 
            src="/images/machine-learning.svg" 
            alt="AI Prediction Illustration" 
            className="w-full h-full object-contain z-10"
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = 'none';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50 pointer-events-none" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default ClassicHeroSection; 