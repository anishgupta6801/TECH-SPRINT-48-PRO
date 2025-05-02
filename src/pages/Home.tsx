import React from 'react';
import { Link } from 'react-router-dom';
import ClassicLayout from '../components/ClassicLayout';

const Home: React.FC = () => {
  return (
    <ClassicLayout>
      <div className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              PredictPro AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your equipment, track maintenance, and predict failures before they happen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">Equipment Management</h2>
              <p className="text-gray-600 mb-4">
                Track all your industrial equipment in one place with detailed information.
              </p>
              <Link 
                to="/dashboard" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Dashboard →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">Maintenance Tracking</h2>
              <p className="text-gray-600 mb-4">
                Schedule and track all maintenance activities to prevent unexpected downtime.
              </p>
              <Link 
                to="/dashboard" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Maintenance Schedule →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-700 mb-3">AI Failure Prediction</h2>
              <p className="text-gray-600 mb-4">
                Use our AI-powered prediction tool to anticipate equipment failures before they happen.
              </p>
              <Link 
                to="/prediction" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Try the Prediction Tool →
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/prediction"
              className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started with Failure Prediction
            </Link>
          </div>
        </div>
      </div>
    </ClassicLayout>
  );
};

export default Home; 