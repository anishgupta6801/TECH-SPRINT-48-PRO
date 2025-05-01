import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Organization } from '../types/auth';

const OrganizationProfile: React.FC = () => {
  const { organization, user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<Organization>>(organization || {});
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Only admins can edit organization details
  const canEditOrganization = user?.role === 'admin';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setSuccessMessage('');
    
    try {
      setIsSubmitting(true);
      
      // In a real app, this would call your API to update the organization
      // For demo purposes, we'll simulate a successful update
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Here you would normally update the organization in your context/state
      console.log('Updated organization data:', formData);
      
      setSuccessMessage('Organization details updated successfully');
      setIsEditing(false);
    } catch (error) {
      setFormError('Failed to update organization details. Please try again.');
      console.error('Error updating organization:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const subscriptionTiers = [
    { value: 'basic', label: 'Basic' },
    { value: 'professional', label: 'Professional' },
    { value: 'enterprise', label: 'Enterprise' },
  ];
  
  if (!organization) {
    return (
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Organization Profile</h2>
        <p className="text-gray-600">No organization data available.</p>
      </div>
    );
  }
  
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Organization Profile</h2>
        {canEditOrganization && !isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Edit Organization
          </button>
        )}
      </div>
      
      {successMessage && (
        <div className="mb-6 p-3 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {formError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {formError}
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Organization Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="industry" className="block text-gray-700 font-medium mb-2">
              Industry*
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address*
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address || ''}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="contactEmail" className="block text-gray-700 font-medium mb-2">
                Contact Email*
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="contactPhone" className="block text-gray-700 font-medium mb-2">
                Contact Phone*
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone || ''}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="subscriptionTier" className="block text-gray-700 font-medium mb-2">
                Subscription Tier
              </label>
              <select
                id="subscriptionTier"
                name="subscriptionTier"
                value={formData.subscriptionTier || 'basic'}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {subscriptionTiers.map((tier) => (
                  <option key={tier.value} value={tier.value}>
                    {tier.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="maxUsers" className="block text-gray-700 font-medium mb-2">
                Max Users
              </label>
              <input
                type="number"
                id="maxUsers"
                name="maxUsers"
                value={formData.maxUsers || 5}
                onChange={handleChange}
                min={1}
                max={100}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setFormData(organization || {});
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
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Organization Name</h3>
              <p className="mt-1 text-base text-gray-900">{organization.name}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Industry</h3>
              <p className="mt-1 text-base text-gray-900">{organization.industry}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Address</h3>
              <p className="mt-1 text-base text-gray-900">{organization.address}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Contact Email</h3>
              <p className="mt-1 text-base text-gray-900">{organization.contactEmail}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Contact Phone</h3>
              <p className="mt-1 text-base text-gray-900">{organization.contactPhone}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Subscription Tier</h3>
              <p className="mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {organization.subscriptionTier.charAt(0).toUpperCase() + organization.subscriptionTier.slice(1)}
                </span>
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Maximum Users</h3>
              <p className="mt-1 text-base text-gray-900">{organization.maxUsers}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Account Created</h3>
              <p className="mt-1 text-base text-gray-900">
                {new Date(organization.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationProfile; 