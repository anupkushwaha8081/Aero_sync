// contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState('crew'); // Default to admin for testing
  
  // Function to manually switch roles
  const switchRole = (newRole) => {
    setUserRole(newRole);
  };

  return (
    <AuthContext.Provider value={{ userRole, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);