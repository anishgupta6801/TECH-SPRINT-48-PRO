import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { 
  AuthState, 
  LoginCredentials, 
  RegistrationData, 
  User, 
  Organization,
  CreateUserData
} from '../types/auth';

// Initial state
const initialState: AuthState = {
  user: null,
  organization: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Action types
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; organization: Organization } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User; organization: Organization } }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'CLEAR_ERROR' };

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_START':
    case 'REGISTER_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.user,
        organization: action.payload.organization,
        error: null,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        isLoading: false,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Secure token storage functions
const secureStorage = {
  // Set token with expiration (default 1 hour)
  setToken: (token: string, expiresInMinutes = 60): void => {
    try {
      const now = new Date();
      const expiresAt = new Date(now.getTime() + expiresInMinutes * 60000);
      
      const tokenData = {
        value: token,
        expiresAt: expiresAt.toISOString(),
      };
      
      sessionStorage.setItem('authToken', JSON.stringify(tokenData));
    } catch (error) {
      console.error('Error storing token:', error);
    }
  },
  
  // Get token if valid
  getToken: (): string | null => {
    try {
      const tokenData = sessionStorage.getItem('authToken');
      
      if (!tokenData) return null;
      
      const { value, expiresAt } = JSON.parse(tokenData);
      const now = new Date();
      const expiration = new Date(expiresAt);
      
      if (now > expiration) {
        secureStorage.clearToken();
        return null;
      }
      
      return value;
    } catch (error) {
      console.error('Error retrieving token:', error);
      return null;
    }
  },
  
  // Clear token
  clearToken: (): void => {
    try {
      sessionStorage.removeItem('authToken');
    } catch (error) {
      console.error('Error clearing token:', error);
    }
  },
  
  // Set user data securely
  setUserData: (user: User, organization: Organization): void => {
    try {
      // Store sensitive data in sessionStorage instead of localStorage
      sessionStorage.setItem('userData', JSON.stringify({
        user,
        organization,
        timestamp: new Date().toISOString(),
      }));
    } catch (error) {
      console.error('Error storing user data:', error);
    }
  },
  
  // Get user data
  getUserData: (): { user: User; organization: Organization } | null => {
    try {
      const userData = sessionStorage.getItem('userData');
      
      if (!userData) return null;
      
      const parsed = JSON.parse(userData);
      return {
        user: parsed.user,
        organization: parsed.organization,
      };
    } catch (error) {
      console.error('Error retrieving user data:', error);
      return null;
    }
  },
  
  // Clear user data
  clearUserData: (): void => {
    try {
      sessionStorage.removeItem('userData');
    } catch (error) {
      console.error('Error clearing user data:', error);
    }
  },
  
  // Clear all auth data
  clearAll: (): void => {
    secureStorage.clearToken();
    secureStorage.clearUserData();
  }
};

// Create context
interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegistrationData) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  createUser: (data: CreateUserData) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = secureStorage.getToken();
        if (token) {
          // In a real app, you would validate the token with your backend
          // For now, we'll simulate a successful login if token exists
          const userData = secureStorage.getUserData();
          
          if (userData) {
            dispatch({
              type: 'LOGIN_SUCCESS',
              payload: { user: userData.user, organization: userData.organization },
            });
          } else {
            dispatch({ type: 'LOGOUT' });
            secureStorage.clearAll();
          }
        } else {
          dispatch({ type: 'LOGOUT' });
          secureStorage.clearAll();
        }
      } catch (error) {
        dispatch({ type: 'LOGOUT' });
        secureStorage.clearAll();
      }
    };

    checkAuth();

    // Set up token expiration check
    const tokenExpirationCheck = setInterval(() => {
      if (!secureStorage.getToken()) {
        dispatch({ type: 'LOGOUT' });
        secureStorage.clearAll();
      }
    }, 60000); // Check every minute
    
    return () => clearInterval(tokenExpirationCheck);
  }, []);

  // Login function
  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      // In a real app, you would call your API here
      // For demo purposes, we'll simulate a successful login
      
      // Input validation
      if (!credentials.email || !credentials.password) {
        throw new Error('Email and password are required');
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(credentials.email)) {
        throw new Error('Invalid email format');
      }
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response - in a real app this would come from your backend
      const mockUser: User = {
        id: 'user-123',
        email: credentials.email,
        firstName: 'Anish',
        lastName: 'Kumar',
        role: 'admin',
        organizationId: 'org-456',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };
      
      const mockOrganization: Organization = {
        id: 'org-456',
        name: 'Acme Manufacturing',
        industry: 'Manufacturing',
        address: '123 Main St, Industrial Park',
        contactEmail: credentials.email,
        contactPhone: '555-123-4567',
        subscriptionTier: 'professional',
        maxUsers: 10,
        createdAt: '2023-01-15T00:00:00Z',
      };
      
      // Save to secure storage
      secureStorage.setToken('mock-jwt-token', 60); // 60 minutes expiration
      secureStorage.setUserData(mockUser, mockOrganization);
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: mockUser, organization: mockOrganization },
      });
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error instanceof Error ? error.message : 'Invalid email or password. Please try again.',
      });
    }
  };

  // Register function
  const register = async (data: RegistrationData) => {
    dispatch({ type: 'REGISTER_START' });
    try {
      // In a real app, you would call your API here
      // For demo purposes, we'll simulate a successful registration
      
      // Input validation
      if (!data.email || !data.password || !data.firstName || !data.lastName || 
          !data.organizationName || !data.industry || !data.address || !data.contactPhone) {
        throw new Error('All fields are required');
      }
      
      if (data.password !== data.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      
      if (data.password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format');
      }
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response - in a real app this would come from your backend
      const mockUser: User = {
        id: `user-${Date.now()}`,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: 'admin', // First user is always admin
        organizationId: `org-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      
      const mockOrganization: Organization = {
        id: `org-${Date.now()}`,
        name: data.organizationName,
        industry: data.industry,
        address: data.address,
        contactEmail: data.email,
        contactPhone: data.contactPhone,
        subscriptionTier: 'basic', // Default tier
        maxUsers: 5, // Default limit
        createdAt: new Date().toISOString(),
      };
      
      // Save to secure storage
      secureStorage.setToken('mock-jwt-token', 60); // 60 minutes expiration
      secureStorage.setUserData(mockUser, mockOrganization);
      
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: { user: mockUser, organization: mockOrganization },
      });
    } catch (error) {
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: error instanceof Error ? error.message : 'Registration failed. Please try again.',
      });
    }
  };

  // Logout function
  const logout = () => {
    secureStorage.clearAll();
    dispatch({ type: 'LOGOUT' });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Create new user (for admins and managers only)
  const createUser = async (data: CreateUserData) => {
    // Permission check
    if (!state.user || (state.user.role !== 'admin' && state.user.role !== 'manager')) {
      throw new Error('You do not have permission to create users');
    }

    // Role-based permission check
    if (state.user.role === 'manager' && data.role === 'admin') {
      throw new Error('Managers cannot create admin users');
    }

    try {
      // Input validation
      if (!data.email || !data.firstName || !data.lastName || !data.password) {
        throw new Error('All fields are required');
      }
      
      if (data.password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        throw new Error('Invalid email format');
      }
      
      // In a real app, call your API here
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, the backend would create the user and return the data
      console.log('User created:', data);
      
      // No state update needed here - would typically fetch updated user list separately
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        clearError,
        createUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 