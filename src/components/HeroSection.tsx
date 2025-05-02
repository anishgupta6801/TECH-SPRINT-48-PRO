import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center py-12 md:py-20">
      {/* Text Content */}
      <motion.div 
        className="w-full md:w-1/2 z-10 px-4 md:pl-8 order-2 md:order-1 mt-8 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Predict Machine Failures
          <span className="block text-blue-600">Before They Happen</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg text-gray-700 mb-8 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Our AI-powered predictive maintenance solution helps you prevent costly equipment downtime and extend machine lifespan.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
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
        </motion.div>
        
        <motion.div 
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
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
        </motion.div>
      </motion.div>
      
      {/* 3D Sphere */}
      <div className="w-full md:w-1/2 h-80 md:h-[calc(100vh-12rem)] order-1 md:order-2 relative">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial 
              color="#2563EB" 
              attach="material" 
              distort={0.2} 
              speed={1.5} 
              roughness={0.2}
            />
          </Sphere>
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white opacity-50 pointer-events-none" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
    </div>
  );
};

export default HeroSection; 