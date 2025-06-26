import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext, useAuthState } from './hooks/useAuth';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { CampaignDetailPage } from './pages/CampaignDetailPage';
import { AuthPage } from './pages/AuthPage';

function App() {
  const authState = useAuthState();

  return (
    <AuthContext.Provider value={authState}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/campaign/:id" element={<CampaignDetailPage />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/register" element={<AuthPage />} />
              <Route path="/start-campaign" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Start Campaign - Coming Soon</h1></div>} />
              <Route path="/dashboard" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Dashboard - Coming Soon</h1></div>} />
              <Route path="/favorites" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Favorites - Coming Soon</h1></div>} />
              <Route path="/notifications" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Notifications - Coming Soon</h1></div>} />
              <Route path="/profile" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Profile - Coming Soon</h1></div>} />
              <Route path="/my-campaigns" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">My Campaigns - Coming Soon</h1></div>} />
              <Route path="/backed-campaigns" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Backed Campaigns - Coming Soon</h1></div>} />
              <Route path="/settings" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div>} />
              <Route path="/category/:id" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Category Page - Coming Soon</h1></div>} />
              <Route path="/search" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-2xl font-bold">Search Results - Coming Soon</h1></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;