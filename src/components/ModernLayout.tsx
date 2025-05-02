import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ModernLayoutProps {
  children: React.ReactNode;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animations
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.1,
        ease: "easeOut" 
      } 
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navbar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-md' 
            : 'bg-white'
        }`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            variants={navItemVariants}
          >
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-blue-800">
                PredictPro
              </span>
            </Link>
          </motion.div>

          {/* Centered Navigation */}
          <div className="hidden md:flex justify-center">
            <motion.ul className="flex space-x-1" variants={navVariants}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Dashboard', path: '/dashboard' },
                { name: 'Prediction', path: '/prediction' },
                { name: 'Analytics', path: '/analytics' },
                { name: 'About', path: '/about' }
              ].map((item) => (
                <motion.li key={item.path} variants={navItemVariants}>
                  <Link 
                    to={item.path} 
                    className={`px-4 py-2 rounded-md font-medium transition-all duration-300 
                      ${isActive(item.path) 
                        ? 'bg-blue-700 text-white' 
                        : 'text-blue-800 hover:bg-blue-50'
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* CTA Button */}
          <motion.div variants={navItemVariants}>
            <button className="py-2 px-6 bg-blue-700 text-white font-medium rounded-md shadow-sm hover:bg-blue-800 transition-all duration-300">
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PredictPro AI</h3>
              <p className="text-blue-100">Advanced machine failure prediction powered by artificial intelligence.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-lg">Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/prediction" className="text-blue-100 hover:text-white transition-colors">Prediction</Link></li>
                <li><Link to="/dashboard" className="text-blue-100 hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-lg">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-lg">Contact</h4>
              <p className="text-blue-100">Email: info@predictpro.ai</p>
              <p className="text-blue-100">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} PredictPro AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernLayout; 