import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Organization } from '../types/auth';

interface OrganizationSelectorProps {
  isDarkMode: boolean;
}

const OrganizationSelector: React.FC<OrganizationSelectorProps> = ({ isDarkMode }) => {
  const { organization, organizations, switchOrganization } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSelectOrg = (org: Organization) => {
    switchOrganization(org);
    setIsOpen(false);
  };

  if (!organization) {
    return null;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 rounded-md px-3 py-1.5 ${
          isDarkMode
            ? 'bg-gray-700 hover:bg-gray-600'
            : 'bg-gray-100 hover:bg-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors`}
      >
        <div className={`w-6 h-6 rounded-md flex items-center justify-center
          ${
            organization.subscriptionTier === 'basic' ? 'bg-blue-100 text-blue-800' :
            organization.subscriptionTier === 'professional' ? 'bg-green-100 text-green-800' :
            'bg-purple-100 text-purple-800'
          }
        `}>
          <span className="text-xs font-semibold">{organization.name.charAt(0)}</span>
        </div>
        <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          {organization.name}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 mt-2 w-64 rounded-md shadow-lg py-1 ${
            isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white ring-1 ring-black ring-opacity-5'
          }`}
        >
          <div className="px-4 py-2 border-b border-gray-200">
            <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Switch Organization</p>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {organizations.map((org) => (
              <button
                key={org.id}
                onClick={() => handleSelectOrg(org)}
                className={`w-full text-left px-4 py-3 ${
                  organization.id === org.id
                    ? isDarkMode
                      ? 'bg-gray-700'
                      : 'bg-blue-50'
                    : 'hover:' + (isDarkMode ? 'bg-gray-700' : 'bg-gray-50')
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center
                    ${
                      org.subscriptionTier === 'basic' ? 'bg-blue-100 text-blue-800' :
                      org.subscriptionTier === 'professional' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }
                  `}>
                    <span className="text-sm font-semibold">{org.name.charAt(0)}</span>
                  </div>
                  <div className="ml-3">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{org.name}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{org.industry}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-gray-200">
            <a
              href="/organizations"
              className={`text-xs font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline block text-center`}
            >
              Manage Organizations
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationSelector; 