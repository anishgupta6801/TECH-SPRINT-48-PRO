import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, Moon, Sun, User, Settings, HelpCircle, LogOut, Menu } from 'lucide-react';
import OrganizationSelector from './OrganizationSelector';

interface ClassicLayoutProps {
  children: React.ReactNode;
}

const ClassicLayout: React.FC<ClassicLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you would apply the theme change to the entire app
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <nav className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left section: Logo and navigation links */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                  <span className={`text-xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>PredictPro AI</span>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className={`${isActive('/') ? (isDarkMode ? 'border-blue-400 text-blue-400' : 'border-blue-500 text-gray-900') : (isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Home
                </Link>
                <Link to="/dashboard" className={`${isActive('/dashboard') ? (isDarkMode ? 'border-blue-400 text-blue-400' : 'border-blue-500 text-gray-900') : (isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Dashboard
                </Link>
                <Link to="/prediction" className={`${isActive('/prediction') ? (isDarkMode ? 'border-blue-400 text-blue-400' : 'border-blue-500 text-gray-900') : (isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  AI Prediction
                </Link>
                <Link to="/analytics" className={`${isActive('/analytics') ? (isDarkMode ? 'border-blue-400 text-blue-400' : 'border-blue-500 text-gray-900') : (isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Analytics
                </Link>
                <Link to="/organizations" className={`${isActive('/organizations') ? (isDarkMode ? 'border-blue-400 text-blue-400' : 'border-blue-500 text-gray-900') : (isDarkMode ? 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700')} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Organizations
                </Link>
              </div>
            </div>
            
            {/* Organization selector (displayed between navigation and right section) */}
            <div className="hidden sm:flex items-center ml-4">
              <OrganizationSelector isDarkMode={isDarkMode} />
            </div>

            {/* Right section: Search, notifications, theme toggle, profile */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Search bar */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-48 pl-9 pr-3 py-1 text-sm rounded-md ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400 focus:bg-gray-600' 
                      : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white'
                  } border focus:outline-none focus:ring-1 focus:ring-blue-500`}
                />
                <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-400" />
              </form>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                  <Bell className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`} />
                </button>
                
                {/* Notifications dropdown */}
                {showNotifications && (
                  <div className={`origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white ring-1 ring-black ring-opacity-5'}`}>
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Notifications</p>
                    </div>
                    <div className="max-h-60 overflow-y-auto">
                      <div className={`px-4 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} cursor-pointer`}>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Maintenance alert</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Hydraulic Press requires maintenance</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>10 minutes ago</p>
                      </div>
                      <div className={`px-4 py-3 hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} cursor-pointer`}>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>New prediction result</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>CNC Machine prediction complete</p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>1 hour ago</p>
                      </div>
                    </div>
                    <div className="px-4 py-2 border-t border-gray-200">
                      <Link to="/notifications" className={`text-xs font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline block text-center`}>
                        View all notifications
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-1.5 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4 text-yellow-300" />
                ) : (
                  <Moon className="h-4 w-4 text-gray-500" />
                )}
              </button>

              {/* User profile */}
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className={`w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center ${isDarkMode ? 'border border-gray-700' : 'border border-gray-200'}`}>
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Admin</span>
                </button>
                
                {/* User menu dropdown */}
                {showUserMenu && (
                  <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white ring-1 ring-black ring-opacity-5'}`}>
                    <Link to="/profile" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <div className="flex items-center">
                        <User className="mr-2 h-4 w-4" />
                        Your Profile
                      </div>
                    </Link>
                    <Link to="/organizations" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        Organizations
                      </div>
                    </Link>
                    <Link to="/settings" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <div className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </div>
                    </Link>
                    <Link to="/help" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                      <div className="flex items-center">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Help Center
                      </div>
                    </Link>
                    <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} my-1`}></div>
                    <button className={`block w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-600 hover:bg-gray-100'}`}>
                      <div className="flex items-center">
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign out
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className={`sm:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/" className={`${isActive('/') ? (isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-blue-700') : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')} block px-3 py-2 rounded-md text-base font-medium`}>
                Home
              </Link>
              <Link to="/dashboard" className={`${isActive('/dashboard') ? (isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-blue-700') : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')} block px-3 py-2 rounded-md text-base font-medium`}>
                Dashboard
              </Link>
              <Link to="/prediction" className={`${isActive('/prediction') ? (isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-blue-700') : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')} block px-3 py-2 rounded-md text-base font-medium`}>
                AI Prediction
              </Link>
              <Link to="/analytics" className={`${isActive('/analytics') ? (isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-blue-700') : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')} block px-3 py-2 rounded-md text-base font-medium`}>
                Analytics
              </Link>
              <Link to="/organizations" className={`${isActive('/organizations') ? (isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-50 text-blue-700') : (isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900')} block px-3 py-2 rounded-md text-base font-medium`}>
                Organizations
              </Link>
            </div>
            <div className={`pt-4 pb-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center ${isDarkMode ? 'border border-gray-700' : 'border border-gray-200'}`}>
                    <User className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="ml-3">
                  <div className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Admin</div>
                  <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>admin@predictpro.ai</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link to="/profile" className={`block px-4 py-2 text-base font-medium ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
                  Your Profile
                </Link>
                <Link to="/organizations" className={`block px-4 py-2 text-base font-medium ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
                  Organizations
                </Link>
                <Link to="/settings" className={`block px-4 py-2 text-base font-medium ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
                  Settings
                </Link>
                <Link to="/help" className={`block px-4 py-2 text-base font-medium ${isDarkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
                  Help Center
                </Link>
                <button className={`w-full text-left block px-4 py-2 text-base font-medium ${isDarkMode ? 'text-red-400 hover:bg-gray-700 hover:text-red-300' : 'text-red-600 hover:bg-gray-100'}`}>
                  Sign out
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Breadcrumbs */}
      {location.pathname !== '/' && (
        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="py-3">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-4">
                  <li>
                    <Link to="/" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className={`mx-1 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>/</span>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {location.pathname.split('/')[1].charAt(0).toUpperCase() + location.pathname.split('/')[1].slice(1)}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      )}
      
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                &copy; 2025 PredictPro AI. All rights reserved.
              </p>
            </div>
            <div className="mt-4 flex justify-center md:mt-0">
              <div className="flex space-x-6">
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-900'}`}>
                  Terms
                </a>
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-900'}`}>
                  Privacy
                </a>
                <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-900'}`}>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClassicLayout; 