import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ClassicLayout from '../components/ClassicLayout';
import { Bell, Moon, Sun, Eye, EyeOff, Save } from 'lucide-react';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const { user } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [timezone, setTimezone] = useState('UTC');
  const [language, setLanguage] = useState('en');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  
  // Security settings
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  if (!user) {
    return <div>Loading settings...</div>;
  }

  const handleSaveGeneralSettings = () => {
    console.log('Saving general settings:', {
      isDarkMode,
      notificationsEnabled,
      emailNotifications,
      pushNotifications,
      smsNotifications,
      timezone,
      language,
      dateFormat,
    });
    // In a real app, this would make an API call to save the settings
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    
    console.log('Changing password');
    // In a real app, this would make an API call to change the password
    
    // Reset form
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const toggleTwoFactor = () => {
    setTwoFactorEnabled(!twoFactorEnabled);
    // In a real app, this would make an API call to enable/disable 2FA
  };

  return (
    <ClassicLayout>
      <div className="max-w-5xl mx-auto py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">Settings</h2>
            <p className="mt-1 text-sm text-gray-500">
              Customize your application preferences and security settings.
            </p>
          </div>
        </div>

        {/* General Settings Section */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">General Settings</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Customize your application experience.</p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-6">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Theme</h4>
                  <p className="text-sm text-gray-500">Choose between light and dark mode</p>
                </div>
                <button 
                  className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{ backgroundColor: isDarkMode ? '#4F46E5' : '#E5E7EB' }}
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  <span className="sr-only">Toggle dark mode</span>
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                      isDarkMode ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  >
                    {isDarkMode ? (
                      <Moon className="h-3 w-3 m-1 text-blue-600" />
                    ) : (
                      <Sun className="h-3 w-3 m-1 text-yellow-500" />
                    )}
                  </span>
                </button>
              </div>

              {/* Notifications Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Notifications</h4>
                  <p className="text-sm text-gray-500">Enable or disable all notifications</p>
                </div>
                <button 
                  className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  style={{ backgroundColor: notificationsEnabled ? '#4F46E5' : '#E5E7EB' }}
                  onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                >
                  <span className="sr-only">Toggle notifications</span>
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                      notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  >
                    {notificationsEnabled && <Bell className="h-3 w-3 m-1 text-blue-600" />}
                  </span>
                </button>
              </div>

              {/* Notification Types */}
              {notificationsEnabled && (
                <div className="ml-4 border-l-2 border-gray-100 pl-4 space-y-4">
                  <div className="flex items-center">
                    <input
                      id="email-notifications"
                      type="checkbox"
                      checked={emailNotifications}
                      onChange={(e) => setEmailNotifications(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                      Email Notifications
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="push-notifications"
                      type="checkbox"
                      checked={pushNotifications}
                      onChange={(e) => setPushNotifications(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="push-notifications" className="ml-3 text-sm text-gray-700">
                      Push Notifications
                    </label>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      id="sms-notifications"
                      type="checkbox"
                      checked={smsNotifications}
                      onChange={(e) => setSmsNotifications(e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="sms-notifications" className="ml-3 text-sm text-gray-700">
                      SMS Notifications
                    </label>
                  </div>
                </div>
              )}

              {/* Timezone */}
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
                  Timezone
                </label>
                <select
                  id="timezone"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="UTC">UTC</option>
                  <option value="America/New_York">Eastern Time (ET)</option>
                  <option value="America/Chicago">Central Time (CT)</option>
                  <option value="America/Denver">Mountain Time (MT)</option>
                  <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  <option value="Europe/London">London</option>
                  <option value="Europe/Paris">Paris</option>
                  <option value="Asia/Tokyo">Tokyo</option>
                </select>
              </div>

              {/* Language */}
              <div>
                <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                  <option value="ja">Japanese</option>
                </select>
              </div>

              {/* Date Format */}
              <div>
                <label htmlFor="date-format" className="block text-sm font-medium text-gray-700">
                  Date Format
                </label>
                <select
                  id="date-format"
                  value={dateFormat}
                  onChange={(e) => setDateFormat(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>

              {/* Save Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSaveGeneralSettings}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Save className="-ml-1 mr-2 h-5 w-5" />
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings Section */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Security Settings</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your account security and password.</p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-6">
              {/* Change Password */}
              <form onSubmit={handleChangePassword} className="space-y-4">
                <h4 className="text-md font-medium text-gray-900">Change Password</h4>
                
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type={showPasswords ? "text" : "password"}
                      id="current-password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                      onClick={() => setShowPasswords(!showPasswords)}
                    >
                      {showPasswords ? (
                        <EyeOff className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Eye className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type={showPasswords ? "text" : "password"}
                      id="new-password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Password must be at least 8 characters long.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm New Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type={showPasswords ? "text" : "password"}
                      id="confirm-password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Change Password
                  </button>
                </div>
              </form>

              {/* Two-Factor Authentication */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-md font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-500">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <button 
                    className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    style={{ backgroundColor: twoFactorEnabled ? '#4F46E5' : '#E5E7EB' }}
                    onClick={toggleTwoFactor}
                  >
                    <span className="sr-only">Toggle 2FA</span>
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                        twoFactorEnabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                
                {twoFactorEnabled && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-md">
                    <p className="text-sm text-blue-700">
                      Two-factor authentication is enabled. You'll be asked for a verification code when signing in.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Session Info */}
        <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Active Sessions</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage your active login sessions.</p>
          </div>
          
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-100 rounded-md p-4 flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-green-800">Current Session</h4>
                  <p className="text-sm text-green-700">Windows • Chrome • {new Date().toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-1">IP: 192.168.1.1</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              
              <button
                type="button"
                className="mt-2 text-sm text-red-600 hover:text-red-800 font-medium"
              >
                Sign out of all other sessions
              </button>
            </div>
          </div>
        </div>
      </div>
    </ClassicLayout>
  );
};

export default Settings; 