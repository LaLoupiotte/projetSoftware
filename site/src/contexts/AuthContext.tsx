import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, CandidateProfile } from '../types';
import { users as initialUsers } from '../data/users';

interface AuthContextType {
  user: (User | CandidateProfile) | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateProfile: (updatedProfile: Partial<CandidateProfile>) => void;
  signup: (userData: {
    name: string;
    email: string;
    password: string;
    role: 'candidate' | 'recruiter';
    bio?: string;
  }) => boolean;
  users: (User | CandidateProfile)[];
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<(User | CandidateProfile) | null>(null);
  const [users, setUsers] = useState<(User | CandidateProfile)[]>(initialUsers);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const login = (email: string, password: string) => {
    if (password !== '1234') return false;
    
    const foundUser = users.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const signup = (userData: {
    name: string;
    email: string;
    password: string;
    role: 'candidate' | 'recruiter';
    bio?: string;
  }) => {
    if (users.some(u => u.email === userData.email)) {
      return false;
    }

    const newUser: User | CandidateProfile = userData.role === 'candidate'
      ? {
          id: Date.now().toString(),
          email: userData.email,
          name: userData.name,
          role: 'candidate',
          bio: userData.bio || '',
          skills: [],
          experiences: [],
          education: [],
        }
      : {
          id: Date.now().toString(),
          email: userData.email,
          name: userData.name,
          role: 'recruiter',
        };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setUser(newUser);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updatedProfile: Partial<CandidateProfile>) => {
    if (!user) return;

    const updatedUsers = users.map(u => 
      u.id === user.id ? { ...u, ...updatedProfile } : u
    );

    const updatedUser = updatedUsers.find(u => u.id === user.id);
    if (updatedUser) {
      setUser(updatedUser);
      setUsers(updatedUsers);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile, signup, users }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};