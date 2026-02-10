import React, { createContext, useContext, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  // Mock authentication - set to true for testing /admin access
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  const value = {
    isAdmin,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
