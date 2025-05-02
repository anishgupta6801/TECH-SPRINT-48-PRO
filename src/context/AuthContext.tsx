import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { 
  AuthState, 
  LoginCredentials, 
  RegistrationData, 
  User, 
  Organization,
  CreateUserData
} from '../types/auth';

// Initial state with mock data for development
const initialState: AuthState = {
  user: {
    id: 'user-001',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    organizationId: 'org-001',
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString()
  },
  organization: {
    id: 'org-001',
    name: 'Acme Industries',
    industry: 'Manufacturing',
    address: '123 Main St, City',
    contactEmail: 'contact@acme.com',
    contactPhone: '555-123-4567',
    subscriptionTier: 'professional',
    maxUsers: 10,
    createdAt: new Date().toISOString()
  },
  isAuthenticated: true, // Set to true for development
  isLoading: false,
  error: null,
};

// Mock organizations
const mockOrganizations: Organization[] = [
  initialState.organization as Organization,
  {
    id: 'org-002',
    name: 'TechCorp Inc',
    industry: 'Technology',
    address: '456 Tech Blvd, Valley',
    contactEmail: 'info@techcorp.com',
    contactPhone: '555-987-6543',
    subscriptionTier: 'enterprise',
    maxUsers: 25,
    createdAt: new Date().toISOString()
  },
  {
    id: 'org-003',
    name: 'Green Energy Ltd',
    industry: 'Energy',
    address: '789 Eco Way, Greenville',
    contactEmail: 'hello@greenenergy.com',
    contactPhone: '555-456-7890',
    subscriptionTier: 'basic',
    maxUsers: 5,
    createdAt: new Date().toISOString()
  }
];

// Action types
type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; organization: Organization } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'REGISTER_START' }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User; organization: Organization } }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'CLEAR_ERROR' }
  | { type: 'SWITCH_ORGANIZATION'; payload: Organization };

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
        user: null,
        organization: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'SWITCH_ORGANIZATION':
      return {
        ...state,
        organization: action.payload,
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
  switchOrganization: (organization: Organization) => void;
  organizations: Organization[];
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
              payload: userData,
            });
          } else {
            dispatch({ type: 'LOGOUT' });
          }
        } else {
          dispatch({ type: 'LOGOUT' });
        }
      } catch (error) {
        console.error('Auth check error:', error);
        dispatch({ type: 'LOGOUT' });
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      dispatch({ type: 'LOGIN_START' });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock API response
      // In a real app, you would call your authentication API here
      if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
        const user: User = {
          id: 'user-001',
          email: credentials.email,
          firstName: 'Admin',
          lastName: 'User',
          role: 'admin',
          organizationId: 'org-001',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString(),
        };
        
        const organization: Organization = {
          id: 'org-001',
          name: 'Acme Industries',
          industry: 'Manufacturing',
          address: '123 Main St, City',
          contactEmail: 'contact@acme.com',
          contactPhone: '555-123-4567',
          subscriptionTier: 'professional',
          maxUsers: 10,
          createdAt: new Date().toISOString(),
        };
        
        // Set authentication data
        secureStorage.setToken('mock-jwt-token-123456789');
        secureStorage.setUserData(user, organization);
        
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user, organization },
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: 'Invalid email or password',
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'An error occurred during login',
      });
    }
  };

  const register = async (data: RegistrationData) => {
    try {
      dispatch({ type: 'REGISTER_START' });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock registration process
      // In a real app, you would call your registration API here
      const user: User = {
        id: `user-${Math.floor(Math.random() * 1000)}`,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        role: 'admin',
        organizationId: `org-${Math.floor(Math.random() * 1000)}`,
        createdAt: new Date().toISOString(),
      };
      
      const organization: Organization = {
        id: user.organizationId,
        name: data.organizationName,
        industry: data.industry,
        address: data.address,
        contactEmail: data.email,
        contactPhone: data.contactPhone,
        subscriptionTier: 'basic', // Default for new registrations
        maxUsers: 5, // Default for basic tier
        createdAt: new Date().toISOString(),
      };
      
      // Set authentication data
      secureStorage.setToken('mock-jwt-token-' + Math.random().toString(36).substring(2));
      secureStorage.setUserData(user, organization);
      
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: { user, organization },
      });
    } catch (error) {
      console.error('Registration error:', error);
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: 'An error occurred during registration',
      });
    }
  };

  const logout = () => {
    secureStorage.clearAll();
    dispatch({ type: 'LOGOUT' });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const createUser = async (data: CreateUserData) => {
    // This would actually create a user in a real app
    console.log('Creating user with data:', data);
    // Mock implementation - no actual API call
  };

  const switchOrganization = (organization: Organization) => {
    dispatch({ type: 'SWITCH_ORGANIZATION', payload: organization });
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
        switchOrganization,
        organizations: mockOrganizations,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 