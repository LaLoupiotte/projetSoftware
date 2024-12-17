import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { CandidateProfile } from './components/profile/CandidateProfile';
import { RecruiterDashboard } from './components/RecruiterDashboard';
import { LogOut } from 'lucide-react';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const Navigation = () => {
  const { user, logout } = useAuth();
  
  if (!user) return null;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-lg">Job Platform</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>{user.name}</span>
          <button
            onClick={logout}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5 mr-1" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

const MainContent = () => {
  const { user } = useAuth();

  if (!user) return null;

  return user.role === 'recruiter' ? (
    <RecruiterDashboard />
  ) : (
    <CandidateProfile profile={user as any} />
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <MainContent />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;