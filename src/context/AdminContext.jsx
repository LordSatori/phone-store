import React, { createContext, useState, useContext, useEffect } from 'react';

export const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [admin, setAdmin] = useState(() => {
    try {
      const savedAdmin = localStorage.getItem('admin');
      return savedAdmin ? JSON.parse(savedAdmin) : null;
    } catch (error) {
      console.error('Error loading admin from localStorage:', error);
      return null;
    }
  });

  useEffect(() => {
    if (admin) {
      localStorage.setItem('admin', JSON.stringify(admin));
    } else {
      localStorage.removeItem('admin');
    }
  }, [admin]);

  const adminLogin = (username, password) => {
    // Simple admin credentials for demo
    if (username === 'admin' && password === 'admin123') {
      const adminData = {
        id: 1,
        username: 'admin',
        email: 'admin@voltify.com',
        role: 'administrator'
      };
      setAdmin(adminData);
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setAdmin(null);
  };

  return (
    <AdminContext.Provider value={{ admin, adminLogin, adminLogout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
}
