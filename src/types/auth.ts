export enum UserRole {
  USER = 'USER',
  EDITOR = 'EDITOR',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  permissions: Permission[];
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface Permission {
  id: string;
  name: string;
  description: string;
}

export const PERMISSIONS = {
  VIEW_COMPANIES: 'view_companies',
  EDIT_COMPANIES: 'edit_companies',
  DELETE_COMPANIES: 'delete_companies',
  VIEW_USERS: 'view_users',
  EDIT_USERS: 'edit_users',
  VIEW_ANALYTICS: 'view_analytics',
  EXPORT_DATA: 'export_data',
} as const;