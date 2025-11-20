import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('janseva_user');
    return saved ? JSON.parse(saved) : null;
  });

  function login(dummyUser){
    setUser(dummyUser);
    localStorage.setItem('janseva_user', JSON.stringify(dummyUser));
  }
  function logout(){
    setUser(null);
    localStorage.removeItem('janseva_user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth(){ return useContext(AuthContext); }
