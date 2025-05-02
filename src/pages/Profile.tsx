import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ClassicLayout from '../components/ClassicLayout';
import { User } from '../types/auth';
import { Save, X, Camera } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user, organization } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<User | null>(user);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  if (!user || !profileData) {
    return <div>Loading profile...</div>;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // In a real app, this would make an API call to update the user profile
    console.log('Saving profile:', profileData);
    // For now, we'll just toggle editing mode
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original user data
    setProfileData(user);
    setIsEditing(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ClassicLayout>
      <div className="max-w-5xl mx-auto py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
              {isEditing ? 'Edit Profile' : 'Your Profile'}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {isEditing 
                ? 'Update your personal information and preferences'
                : `Manage your account settings and preferences.`}
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            {isEditing ? (
              <>
                <button
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={handleCancel}
                >
                  <X className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Cancel
                </button>
                <button
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleSave}
                >
                  <Save className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Save
                </button>
              </>
            ) : (
              <button
                type="button"
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and organization information.</p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl font-bold text-gray-300">{user.firstName.charAt(0)}{user.lastName.charAt(0)}</span>
                  )}
                </div>
                {isEditing && (
                  <label htmlFor="profile-image" className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 cursor-pointer">
                    <Camera className="h-4 w-4 text-white" />
                    <input
                      type="file"
                      id="profile-image"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                )}
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">{user.firstName} {user.lastName}</h4>
                <p className="text-sm text-gray-500">{user.role.charAt(0).toUpperCase() + user.role.slice(1)} at {organization?.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={profileData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="mt-1 p-2 block w-full text-gray-900">{profileData.firstName}</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={profileData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="mt-1 p-2 block w-full text-gray-900">{profileData.lastName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                ) : (
                  <p className="mt-1 p-2 block w-full text-gray-900">{profileData.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <p className="mt-1 p-2 block w-full text-gray-900 capitalize">{profileData.role}</p>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization</label>
                <p className="mt-1 p-2 block w-full text-gray-900">{organization?.name}</p>
              </div>

              <div>
                <label htmlFor="lastLogin" className="block text-sm font-medium text-gray-700">Last Login</label>
                <p className="mt-1 p-2 block w-full text-gray-900">
                  {profileData.lastLogin 
                    ? new Date(profileData.lastLogin).toLocaleString() 
                    : 'Never'}
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-5 sm:px-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Account Information</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Details about your account status and subscription.</p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Created</label>
                <p className="mt-1 p-2 block w-full text-gray-900">
                  {new Date(profileData.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Organization Subscription</label>
                <p className="mt-1 p-2 block w-full">
                  <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium 
                    ${organization?.subscriptionTier === 'basic' ? 'bg-blue-100 text-blue-800' : 
                      organization?.subscriptionTier === 'professional' ? 'bg-green-100 text-green-800' : 
                      'bg-purple-100 text-purple-800'}`}>
                    {organization?.subscriptionTier.charAt(0).toUpperCase() + organization?.subscriptionTier.slice(1)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClassicLayout>
  );
};

export default ProfilePage; 