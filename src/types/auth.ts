export type UserRole = 'admin' | 'manager' | 'technician';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  organizationId: string;
  createdAt: string;
  lastLogin?: string;
}

export interface Organization {
  id: string;
  name: string;
  industry: string;
  address: string;
  contactEmail: string;
  contactPhone: string;
  subscriptionTier: 'basic' | 'professional' | 'enterprise';
  maxUsers: number;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  organization: Organization | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  organizationName: string;
  industry: string;
  address: string;
  contactPhone: string;
}

export interface CreateUserData {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  password: string;
} 