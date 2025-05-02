import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Organization } from '../types/auth';

interface OrganizationFormData {
  name: string;
  industry: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  subscriptionTier: 'basic' | 'professional' | 'enterprise';
  maxUsers: number;
}

const initialFormData: OrganizationFormData = {
  name: '',
  industry: '',
  address: '',
  contactEmail: '',
  contactPhone: '',
  subscriptionTier: 'basic',
  maxUsers: 5
};

export const OrganizationManager: React.FC = () => {
  const { organization } = useAuth();
  const [formData, setFormData] = useState<OrganizationFormData>(initialFormData);
  const [organizations, setOrganizations] = useState<Organization[]>(
    organization ? [organization] : []
  );
  const [isAdding, setIsAdding] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'maxUsers' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setSuccessMessage('');

    try {
      setIsSubmitting(true);
      
      // Simple validations
      if (!formData.name || !formData.industry || !formData.address || 
          !formData.contactEmail || !formData.contactPhone) {
        throw new Error('All fields are required');
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.contactEmail)) {
        throw new Error('Invalid email format');
      }

      // In a real app, this would call an API to register the organization
      const newOrganization: Organization = {
        id: `org-${Date.now()}`,
        name: formData.name,
        industry: formData.industry,
        address: formData.address,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
        subscriptionTier: formData.subscriptionTier,
        maxUsers: formData.maxUsers,
        createdAt: new Date().toISOString()
      };

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Add to local state
      setOrganizations([...organizations, newOrganization]);
      setSuccessMessage('Organization registered successfully!');
      setFormData(initialFormData);
      setIsAdding(false);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Failed to register organization');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Organization Management</h2>
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Register New Organization
          </button>
        )}
      </div>

      {successMessage && (
        <div className="p-4 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      {isAdding ? (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Register New Organization</h3>
          
          {formError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {formError}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                Industry*
              </label>
              <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Address*
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email*
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Phone*
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="subscriptionTier" className="block text-sm font-medium text-gray-700 mb-1">
                  Subscription Tier
                </label>
                <select
                  id="subscriptionTier"
                  name="subscriptionTier"
                  value={formData.subscriptionTier}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="basic">Basic</option>
                  <option value="professional">Professional</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="maxUsers" className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Users
                </label>
                <input
                  type="number"
                  id="maxUsers"
                  name="maxUsers"
                  value={formData.maxUsers}
                  onChange={handleChange}
                  min={1}
                  max={100}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={() => {
                  setIsAdding(false);
                  setFormData(initialFormData);
                  setFormError('');
                }}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:bg-blue-300"
              >
                {isSubmitting ? 'Registering...' : 'Register Organization'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-gray-800">Registered Organizations</h3>
          
          {organizations.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
              No organizations registered yet.
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Organization
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Industry
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subscription
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Registered On
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {organizations.map((org) => (
                    <tr key={org.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{org.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{org.industry}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {org.contactEmail}
                          <br />
                          {org.contactPhone}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {org.subscriptionTier.charAt(0).toUpperCase() + org.subscriptionTier.slice(1)}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          Max users: {org.maxUsers}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(org.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrganizationManager; 