import React, { createContext, useState, useContext, useEffect } from 'react';
import { mockUsers } from '../data/users.jsx';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [likes, setLikes] = useState([]);

  useEffect(() => {
    if (user) {
      const savedLikes = localStorage.getItem(`likes_${user.id}`) || '[]';
      setLikes(JSON.parse(savedLikes));
    } else {
      setLikes([]);
    }
  }, [user]);

  const login = (email, password) => {
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    // Mock register: Check if exists, else add as regular user
    if (mockUsers.find(u => u.email === email)) return false;
    const newUser = { id: Date.now(), email, password, role: 'user' };
    mockUsers.push(newUser); // In real app, save to backend
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setLikes([]);
    localStorage.removeItem('user');
  };

  const toggleLike = (productId) => {
    if (!user) return; // Must be logged in
    setLikes(prev => {
      const userLikes = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];
      localStorage.setItem(`likes_${user.id}`, JSON.stringify(userLikes));
      return userLikes;
    });
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout, likes, toggleLike }}>
      {children}
    </UserContext.Provider>
  );
};

// ...existing code...

export { UserContext };
